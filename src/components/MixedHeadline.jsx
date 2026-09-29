import { Fragment } from 'react';

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
                {o.style === 'circled' && (
                  <svg className="mh__ring" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true" style={{ '--d': d + 520 + 'ms' }}>
                    <path pathLength="1" d="M34 14C84 0 178 4 192 42 202 78 130 96 80 92 26 88 2 66 8 42 14 20 52 7 112 8" />
                  </svg>
                )}
              </span>
            </span>{' '}
          </Fragment>
        );
      })}
    </El>
  );
}
