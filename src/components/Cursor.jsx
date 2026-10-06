import { useEffect, useRef } from 'react';
import { useFinePointer, prefersReducedMotion } from '../lib/motion.js';

/*
  Lagging dot →︎ ring over links →︎ labelled disc over [data-cursor="Label"].
  Flips to paper colour inside [data-cursor-theme="light"] (dark panels).
  Mounted only for fine pointers; touch devices keep their native behaviour.
*/
export function Cursor() {
  const fine = useFinePointer();
  const wrap = useRef(null);
  const disc = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    if (!fine) return;
    document.documentElement.classList.add('has-cursor');
    let x = -100, y = -100, cx = -100, cy = -100, raf, last = performance.now(), state = '', label = '', light = false, visible = false;
    // Follow rate per second: ~35ms of lag, same feel at 60Hz and 120Hz.
    const rate = prefersReducedMotion() ? Infinity : 30;

    const set = (s, l, lt) => {
      if (s === state && l === label && lt === light) return;
      state = s; label = l; light = lt;
      const d = disc.current;
      d.className = 'cursor__disc' + (s ? ' is-' + s : '') + (lt ? ' is-light' : '');
      text.current.textContent = l;
    };
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (!visible) { visible = true; cx = x; cy = y; wrap.current.style.opacity = 1; }
      const t = e.target instanceof Element ? e.target : null;
      const lab = t?.closest('[data-cursor]');
      const link = t?.closest('a,button,[role="button"],label,summary');
      const field = t?.closest('input,textarea');
      const lt = !!t?.closest('[data-cursor-theme="light"]');
      if (lab) set('label', lab.getAttribute('data-cursor'), lt);
      else if (field) set('text', '', lt);
      else if (link) set('ring', '', lt);
      else set('', '', lt);
    };
    const leave = () => { visible = false; wrap.current.style.opacity = 0; };
    const down = () => disc.current.classList.add('is-down');
    const up = () => disc.current.classList.remove('is-down');
    const tick = (now) => {
      const k = 1 - Math.exp(-rate * Math.min(64, now - last) / 1000); last = now;
      cx += (x - cx) * k; cy += (y - cy) * k;
      wrap.current.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    raf = requestAnimationFrame(tick);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, [fine]);

  if (!fine) return null;
  return (
    <div ref={wrap} className="cursor" aria-hidden="true">
      <div ref={disc} className="cursor__disc"><span ref={text} className="cursor__text" /></div>
    </div>
  );
}
