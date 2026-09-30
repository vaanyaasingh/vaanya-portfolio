import { Fragment, useLayoutEffect, useRef } from 'react';

const RING = 'M34 14C84 0 178 4 192 42 202 78 130 96 80 92 26 88 2 66 8 42 14 20 52 7 112 8';

/* Tangerine pen ring. The stroke doesn't scale with the word (non-scaling-stroke), so its
   dashes are in screen pixels: measure the on-screen length and draw exactly that much.
   (pathLength="1" breaks here: the loop stops short once the word is big, e.g. on desktop.) */
function Ring({ delay }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const path = ref.current, svg = path.ownerSVGElement;
    const measure = () => {
      const r = svg.getBoundingClientRect();
      const sx = r.width / 200, sy = r.height / 100, total = path.getTotalLength();
      let len = 0, a = path.getPointAtLength(0);
      for (let i = 1; i <= 120; i++) {
        const b = path.getPointAtLength((total * i) / 120);
        len += Math.hypot((b.x - a.x) * sx, (b.y - a.y) * sy);
        a = b;
      }
      path.style.setProperty('--len', Math.ceil(len) + 4);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(svg);
    return () => ro.disconnect();
  }, []);
  return (
    <svg className="mh__ring" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true" style={{ '--d': delay + 'ms' }}>
      <path ref={ref} d={RING} />
    </svg>
  );
}

/*
  Signature serif headline. parts: strings or { text, style, tone } or { br: true }.
  style: italic | boxed | circled | highlight | accent. One italic turn per headline;
  max two treatments. Words rise in with a 70ms stagger once the page has entered.
*/
export function MixedHeadline({ parts = [], size = 'var(--type-display)', as: El = 'h1', delay = 0, className = '' }) {
  let n = 0;
  return (
    <El className={'mh ' + className} style={{ fontSize: size }}>
      {parts.map((p, i) => {
        const o = typeof p === 'string' ? { text: p } : p;
        if (o.br) return <br key={i} className="mh__br" />;
        const d = delay + n++ * 70;
        return (
          <Fragment key={i}>
            <span className="mh__mask">
              <span className={'mh__part rise' + (o.style ? ' hl--' + o.style : '')} style={{ '--d': d + 'ms', ...(o.tone ? { '--hl': `var(--${o.tone})` } : null) }}>
                {o.text}
                {o.style === 'circled' && <Ring delay={d + 520} />}
              </span>
            </span>{' '}
          </Fragment>
        );
      })}
    </El>
  );
}
