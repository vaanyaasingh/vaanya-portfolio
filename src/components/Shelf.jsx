import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useFinePointer, useInView, useReducedMotion } from '../lib/motion.js';
import { shelf as all, currently } from '../data/site.js';

// Only objects with a photo stand on the shelf.
const shelf = all.filter((s) => s.src);

const STEP = 4200;   // autoplay: ms per object
const MAX = 1.5;     // dock: scale of the object right under the pointer
const REST = 1.22;   // the active object when nobody's pointing at the shelf
const SPREAD = 1;    // dock: how far the swell reaches, in object widths

/*
  One long shelf with everything standing on the plank. Objects magnify in place
  under the pointer like the macOS dock (neighbours grow a little too, nothing
  slides along the plank) and a name tag
  pops up over the nearest one; its story sits under the shelf like a museum
  label. Left alone, the shelf walks through its objects on its own.
  Photos: transparent cut-outs, `src` per item in site.js.
*/
export function Shelf() {
  const [ref, inView] = useInView({ once: false, rootMargin: '0px' });
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const row = useRef(null);
  const items = useRef([]);
  const centers = useRef([]);
  const base = useRef(96);
  const hovering = useRef(false);
  const [active, setActive] = useState(0);
  const [manual, setManual] = useState(false);
  const auto = inView && !manual && !reduced;

  // Swell around x (px, in row coordinates) with a gaussian falloff.
  const magnify = useCallback((x, max) => {
    items.current.forEach((el, i) => {
      const d = (x - centers.current[i]) / (base.current * SPREAD);
      el?.style.setProperty('--s', (1 + (max - 1) * Math.exp(-d * d)).toFixed(3));
    });
  }, []);

  // Positions never change (objects scale with transforms), so measure once per resize.
  const measure = useCallback(() => {
    base.current = items.current[0]?.offsetWidth || 96;
    centers.current = items.current.map((el) => (el ? el.offsetLeft + el.offsetWidth / 2 : 0));
  }, []);

  const activeRef = useRef(active);
  activeRef.current = active;
  useLayoutEffect(() => {
    const on = () => { measure(); magnify(centers.current[activeRef.current], REST); };
    on();
    document.fonts?.ready.then(on);
    addEventListener('resize', on);
    return () => removeEventListener('resize', on);
  }, [measure, magnify]);

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % shelf.length), STEP);
    return () => clearTimeout(t);
  }, [auto, active]);

  useEffect(() => {
    if (!hovering.current) magnify(centers.current[active], REST);
  }, [active, magnify]);

  const onMove = (e) => {
    if (!fine || e.pointerType !== 'mouse') return;
    const r = row.current, x = e.clientX - r.getBoundingClientRect().left + r.scrollLeft;
    hovering.current = true;
    r.classList.add('is-docking');
    magnify(x, MAX);
    let best = 0;
    centers.current.forEach((c, i) => { if (Math.abs(c - x) < Math.abs(centers.current[best] - x)) best = i; });
    setManual(true);
    setActive(best);
  };
  const onLeave = () => {
    hovering.current = false;
    row.current?.classList.remove('is-docking');
    magnify(centers.current[activeRef.current], REST);
  };
  const pick = (i) => {
    setManual(true);
    setActive(i);
    if (!hovering.current) magnify(centers.current[i], REST);
  };

  const o = shelf[active];

  return (
    <div ref={ref} className="shelf-board">
      <div className="shelf">
        <ul ref={row} className="shelf__row" aria-label="Things on my shelf" onPointerMove={onMove} onPointerLeave={onLeave}>
          {shelf.map((s, i) => (
            <li key={s.name} ref={(el) => (items.current[i] = el)} className={'shelf__item' + (i === active ? ' is-active' : '')} style={{ '--tone': `var(--${s.tone})` }}>
              <button type="button" className="shelf__obj" aria-pressed={i === active} aria-label={s.name}
                onFocus={() => pick(i)} onClick={() => pick(i)}>
                <img className="shelf__img" src={s.src} alt="" draggable="false" />
              </button>
              <span className="shelf__tip" aria-hidden="true">{s.name}</span>
            </li>
          ))}
        </ul>
        <div className="shelf__plank" aria-hidden="true" />
      </div>

      <div className="shelf__label">
        <span className="shelf__idx">{String(active + 1).padStart(2, '0')} / {String(shelf.length).padStart(2, '0')}</span>
        <div key={active} className="shelf__words">
          <span className="shelf__title">{o.name}</span>
          <span className="shelf__text">{o.story}</span>
        </div>
        {auto && <span key={'t' + active} className="shelf__timer" style={{ '--step': STEP + 'ms' }} aria-hidden="true" />}
      </div>

      <aside className="now" aria-label="Currently">
        <div className="now__head">
          <span className="now__title">Currently<span className="now__dots" aria-hidden="true"><i>.</i><i>.</i><i>.</i></span></span>
          <span className="label">Updated {currently.updated}</span>
        </div>
        <ul className="now__list">
          {currently.items.map((c, i) => (
            <li key={c.k} className="now__row" style={{ '--i': i, '--tone': `var(--${c.tone})` }}>
              <span className="now__swatch" aria-hidden="true" />
              <span className="label now__k">{c.k}</span>
              <span className="now__v">{c.v}</span>
              <span className="now__note">{c.note}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
