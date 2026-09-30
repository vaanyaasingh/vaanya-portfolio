import { useDock } from '../lib/useDock.js';

const STEP = 3600;   // autoplay: ms per poster

/*
  Posters standing on a plank, dock-style: they magnify under the pointer and
  a single pill above the dock says what the active one was for. Left alone,
  it walks through the posters on its own. Items: [{ src, name, note }].
*/
export function PosterShelf({ items, label = 'Posters' }) {
  const { ref, active, auto, pick, item, rowProps } = useDock(items.length, { step: STEP, max: 2.4, rest: 1.9, spread: 1.1 });
  const o = items[active];

  return (
    <div ref={ref} className="pshelf">
      <div className="pshelf__pill" aria-live="polite">
        <span className="pshelf__idx">{String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
        <span key={active} className="pshelf__words">
          <span className="pshelf__name">{o.name}</span>
          <span className="pshelf__note">{o.note}</span>
        </span>
        {auto && <span key={'t' + active} className="shelf__timer pshelf__timer" style={{ '--step': STEP + 'ms' }} aria-hidden="true" />}
      </div>
      <div className="shelf">
        <ul {...rowProps} className="shelf__row pshelf__row" aria-label={label}>
          {items.map((p, i) => (
            <li key={p.src} ref={item(i)} className={'shelf__item pshelf__item' + (i === active ? ' is-active' : '')}>
              <button type="button" className="shelf__obj pshelf__obj" aria-pressed={i === active} aria-label={p.name}
                onFocus={() => pick(i)} onClick={() => pick(i)}>
                <img className="pshelf__img" src={p.src} alt="" loading="lazy" draggable="false" />
              </button>
            </li>
          ))}
        </ul>
        <div className="shelf__plank" aria-hidden="true" />
      </div>
    </div>
  );
}
