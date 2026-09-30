import { useDock } from '../lib/useDock.js';
import { shelf as all, currently } from '../data/site.js';

// Only objects with a photo stand on the shelf.
const shelf = all.filter((s) => s.src);

const STEP = 4200;   // autoplay: ms per object

/*
  One long shelf with everything standing on the plank. Objects magnify in place
  under the pointer like the macOS dock (useDock) and a name tag
  pops up over the nearest one; its story sits under the shelf like a museum
  label. Left alone, the shelf walks through its objects on its own.
  Photos: transparent cut-outs, `src` per item in site.js.
*/
export function Shelf() {
  const { ref, active, auto, pick, item, rowProps } = useDock(shelf.length, { step: STEP, max: 1.5, rest: 1.22, spread: 1 });
  const o = shelf[active];

  return (
    <div ref={ref} className="shelf-board">
      <div className="shelf">
        <ul {...rowProps} className="shelf__row" aria-label="Things on my shelf">
          {shelf.map((s, i) => (
            <li key={s.name} ref={item(i)} className={'shelf__item' + (i === active ? ' is-active' : '')} style={{ '--tone': `var(--${s.tone})` }}>
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
