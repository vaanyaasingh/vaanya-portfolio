import { useEffect } from 'react';
import { Reveal } from './Reveal.jsx';

/*
  A product's brand guidelines, drawn live in its own fonts and colours rather
  than as a screenshot: the logo lockup, the palette with what each colour is
  for, the type, and the handful of rules the UI follows.

    brand: {
      fonts:   Google Fonts css2 family query, loaded only when this board mounts
      logo:    { name, sub?, mark?, bg, fg, markBg?, markFg?, font, weight?, tabs? }
      colours: [{ name, hex, role }]
      type:    [{ name, font, weights, use, sample }]
      rules:   [{ title, body }]
    }
*/

const loaded = new Set();
function useFonts(query) {
  useEffect(() => {
    if (!query || loaded.has(query)) return;
    loaded.add(query);
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = `https://fonts.googleapis.com/css2?${query}&display=swap`;
    document.head.appendChild(l);
  }, [query]);
}

// Readable text on a swatch: ink on light colours, paper on dark ones.
function onColour(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.3 ? 'var(--ink-1)' : 'var(--paper-0)';
}

function Logo({ logo }) {
  const style = { '--bg': logo.bg, '--fg': logo.fg, '--font': logo.font, '--weight': logo.weight || 800 };
  return (
    <div className="brand__logo" style={style}>
      <div className="brand__lockup">
        {logo.mark && <span className="brand__mark" style={{ '--mbg': logo.markBg, '--mfg': logo.markFg }}>{logo.mark}</span>}
        <span className="brand__name">
          {logo.name}
          {logo.sub && <span className="brand__sub">{logo.sub}</span>}
        </span>
      </div>
      {logo.tabs && (
        <div className="brand__tabs" aria-hidden="true">
          {logo.tabs.map((t, i) => <span key={t} className={i === 0 ? 'is-on' : ''} style={{ '--on': logo.tabOn, '--onfg': logo.tabOnFg, '--off': logo.tabOff, '--offfg': logo.tabOffFg }}>{t}</span>)}
        </div>
      )}
    </div>
  );
}

export function BrandBoard({ brand }) {
  useFonts(brand.fonts);
  return (
    <div className="brand">
      <Reveal className="brand__row brand__row--top">
        <div className="brand__cell">
          <span className="label">Logo</span>
          <Logo logo={brand.logo} />
          {brand.logo.note && <p className="brand__note">{brand.logo.note}</p>}
        </div>
        <div className="brand__cell">
          <span className="label">Colour</span>
          <ul className="brand__swatches" style={{ '--cols': brand.colours.length % 3 === 0 ? 3 : 4 }}>
            {brand.colours.map((c) => (
              <li key={c.hex} className="brand__swatch" style={{ '--c': c.hex, '--on': onColour(c.hex) }}>
                <span className="brand__chip"><span className="brand__hex">{c.hex}</span></span>
                <span className="brand__cname">{c.name}</span>
                <span className="brand__role">{c.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="brand__cell" delay={80}>
        <span className="label">Type</span>
        <ul className="brand__type">
          {brand.type.map((t) => (
            <li key={t.name} style={{ '--font': t.font, '--tw': t.weight || 400 }}>
              <span className="brand__aa" aria-hidden="true">Aa</span>
              <span className="brand__tmeta">
                <span className="brand__tname">{t.name}</span>
                <span className="label">{t.weights}</span>
                <span className="brand__tuse">{t.use}</span>
              </span>
              <span className="brand__sample">{t.sample}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="brand__cell" delay={120}>
        <span className="label">Guidelines</span>
        <ol className="brand__rules">
          {brand.rules.map((r, i) => (
            <li key={r.title}>
              <span className="cs-list__n">{String(i + 1).padStart(2, '0')}</span>
              <span><span className="cs-list__title">{r.title}</span>{r.body && <span className="cs-list__body">{r.body}</span>}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}
