import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useFinePointer, useInView, useReducedMotion } from './motion.js';

/*
  The macOS-dock behaviour behind every shelf: items magnify in place under the
  pointer (neighbours swell a little too, nothing slides), and when nobody's
  pointing the row walks through its items on its own until someone touches it.

    step   autoplay: ms per item
    max    scale of the item right under the pointer
    rest   scale of the active item when nobody's pointing
    spread how far the swell reaches, in item widths
*/
export function useDock(count, { step = 4200, max = 1.5, rest = 1.22, spread = 1 } = {}) {
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
  const magnify = useCallback((x, top) => {
    items.current.forEach((el, i) => {
      const d = (x - centers.current[i]) / (base.current * spread);
      el?.style.setProperty('--s', (1 + (top - 1) * Math.exp(-d * d)).toFixed(3));
    });
  }, [spread]);

  // Positions never change (items scale with transforms), so measure once per resize.
  const measure = useCallback(() => {
    base.current = items.current[0]?.offsetWidth || 96;
    centers.current = items.current.map((el) => (el ? el.offsetLeft + el.offsetWidth / 2 : 0));
  }, []);

  const activeRef = useRef(active);
  activeRef.current = active;
  useLayoutEffect(() => {
    const on = () => { measure(); magnify(centers.current[activeRef.current], rest); };
    on();
    document.fonts?.ready.then(on);
    addEventListener('resize', on);
    return () => removeEventListener('resize', on);
  }, [measure, magnify, rest]);

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % count), step);
    return () => clearTimeout(t);
  }, [auto, active, count, step]);

  useEffect(() => {
    if (!hovering.current) magnify(centers.current[active], rest);
  }, [active, magnify, rest]);

  const onPointerMove = (e) => {
    if (!fine || e.pointerType !== 'mouse') return;
    const r = row.current, x = e.clientX - r.getBoundingClientRect().left + r.scrollLeft;
    hovering.current = true;
    r.classList.add('is-docking');
    magnify(x, max);
    let best = 0;
    centers.current.forEach((c, i) => { if (Math.abs(c - x) < Math.abs(centers.current[best] - x)) best = i; });
    setManual(true);
    setActive(best);
  };
  const onPointerLeave = () => {
    hovering.current = false;
    row.current?.classList.remove('is-docking');
    magnify(centers.current[activeRef.current], rest);
  };
  const pick = (i) => {
    setManual(true);
    setActive(i);
    if (!hovering.current) magnify(centers.current[i], rest);
  };

  return {
    ref, row, active, auto, pick,
    item: (i) => (el) => { items.current[i] = el; },
    rowProps: { ref: row, onPointerMove, onPointerLeave },
  };
}
