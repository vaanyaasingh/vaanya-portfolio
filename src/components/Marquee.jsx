import { Fragment, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion.js';

const DOTS = ['var(--tangerine)', 'var(--vermilion)', 'var(--violet)', 'var(--moss)'];

/*
  Serif ticker. Drifts on its own, speeds up with scroll velocity and follows
  scroll direction; eases to a stop on hover. Static under reduced motion.
*/
export function Marquee({ items = [], speed = 60, size = 56 }) {
  const track = useRef(null);
  const hover = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = track.current;
    let x = 0, v = 1, dir = -1, lastY = window.scrollY, raf, last = performance.now(), boost = 0;
    const tick = (now) => {
      const dt = Math.min(64, now - last) / 1000; last = now;
      const y = window.scrollY, dy = y - lastY; lastY = y;
      if (dy !== 0) dir = dy > 0 ? -1 : 1;
      boost += (Math.min(Math.abs(dy) * 0.9, 40) - boost) * 0.12;
      v += ((hover.current ? 0 : 1) - v) * 0.08;
      const half = el.scrollWidth / 2;
      x += dir * (speed + boost * 14) * v * dt;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      el.style.transform = `translate3d(${x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee" style={{ '--size': typeof size === 'number' ? size + 'px' : size }}
      onMouseEnter={() => (hover.current = true)} onMouseLeave={() => (hover.current = false)}>
      <p className="sr-only">{items.join(', ')}</p>
      <div ref={track} className="marquee__track" aria-hidden="true">
        {row.map((t, i) => (
          <Fragment key={i}>
            <span className={'marquee__item' + (i % 2 ? ' is-display' : ' is-italic')}>{t}</span>
            <span className="marquee__star" style={{ color: DOTS[i % 4] }}>✳︎</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
