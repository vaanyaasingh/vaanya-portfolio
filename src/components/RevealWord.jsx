import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useFinePointer, prefersReducedMotion } from '../lib/motion.js';

/* Hover a word → a tilted polaroid follows the pointer. Portalled so transforms
   on ancestors can't trap the fixed positioning. Plain styled word on touch.
   `as` + `className` let a whole row (e.g. a list item) carry the same hover. */
export function RevealWord({ children, tone = 'peach', image, caption, rotate = -4, as: Tag = 'span', className = 'rw', style }) {
  const fine = useFinePointer();
  const card = useRef(null);
  const [on, setOn] = useState(false);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  useEffect(() => {
    if (!on) return;
    let raf;
    const e = prefersReducedMotion() ? 1 : 0.22;
    const tick = () => {
      const p = pos.current;
      p.cx += (p.x - p.cx) * e; p.cy += (p.y - p.cy) * e;
      const tilt = Math.max(-10, Math.min(10, (p.x - p.cx) * 0.15));
      if (card.current) card.current.style.transform = `translate3d(${p.cx + 18}px,${p.cy}px,0) translateY(-105%) rotate(${rotate + tilt}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, rotate]);

  const enter = (ev) => { pos.current = { x: ev.clientX, y: ev.clientY, cx: ev.clientX, cy: ev.clientY }; setOn(true); };
  return (
    <Tag className={className} style={style} onMouseEnter={fine ? enter : undefined} onMouseMove={fine ? (ev) => { pos.current.x = ev.clientX; pos.current.y = ev.clientY; } : undefined} onMouseLeave={() => setOn(false)}>
      {children}
      {fine && createPortal(
        <span ref={card} className={'rw__card' + (on ? ' is-on' : '')} style={{ '--rw-bg': `var(--${tone})` }} aria-hidden="true">
          <span className="rw__inner">
            <span className="rw__img" style={image ? { backgroundImage: `url(${image})` } : undefined} />
            {caption && <span className="rw__cap">{caption}</span>}
          </span>
        </span>,
        document.body
      )}
    </Tag>
  );
}
