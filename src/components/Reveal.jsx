import { Fragment } from 'react';
import { useInView } from '../lib/motion.js';

/* Fades + lifts children into place when scrolled into view. */
export function Reveal({ as: El = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <El ref={ref} className={'reveal ' + (inView ? 'is-in ' : '') + className} style={{ ...style, '--delay': delay + 'ms' }} {...rest}>
      {children}
    </El>
  );
}

/* Heading whose words rise in one by one on scroll. Parts like MixedHeadline;
   { text, glue: true } attaches to the previous word (e.g. a coloured full stop). */
export function SplitHeading({ as: El = 'h2', parts, className = '', ...rest }) {
  const [ref, inView] = useInView();
  let n = 0;
  return (
    <El ref={ref} className={'split ' + (inView ? 'is-in ' : '') + className} {...rest}>
      {parts.map((p, i) => {
        const o = typeof p === 'string' ? { text: p } : p;
        return o.text.split(' ').map((w, j) => (
          <Fragment key={i + '-' + j}>
            {n > 0 && !(o.glue && j === 0) && ' '}
            <span className="split__mask">
              <span className={'split__word' + (o.style ? ' hl--' + o.style : '')} style={{ '--i': n++ }}>{w}</span>
            </span>
          </Fragment>
        ));
      })}
    </El>
  );
}
