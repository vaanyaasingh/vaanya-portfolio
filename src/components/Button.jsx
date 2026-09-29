import { useRef } from 'react';
import { TLink } from './TLink.jsx';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion.js';

/*
  variant: primary | outline | soft | ghost · size: sm | md | lg
  to → internal (curtain), href → external, otherwise <button>.
  Filled buttons are gently magnetic on fine pointers.
*/
export function Button({ variant = 'primary', size = 'md', arrow = false, to, href, magnetic = variant !== 'ghost', className = '', children, ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!magnetic || !hasFinePointer() || prefersReducedMotion()) return;
    const el = ref.current, r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1) + 'px');
    el.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * 0.28).toFixed(1) + 'px');
  };
  const onLeave = () => { ref.current?.style.setProperty('--mx', '0px'); ref.current?.style.setProperty('--my', '0px'); };
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && <span className="btn__arrow" aria-hidden="true">↗</span>}
    </>
  );
  const common = { ref, className: cls, onMouseMove: onMove, onMouseLeave: onLeave, ...rest };
  if (to) return <TLink to={to} {...common}>{inner}</TLink>;
  if (href) return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" {...common}>{inner}</a>;
  return <button type="button" {...common}>{inner}</button>;
}
