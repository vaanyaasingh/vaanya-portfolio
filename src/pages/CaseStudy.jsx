import { Fragment, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { MixedHeadline } from '../components/MixedHeadline.jsx';
import { Tag } from '../components/Tag.jsx';
import { Button } from '../components/Button.jsx';
import { Media, Laptop } from '../components/Media.jsx';
import { PosterShelf } from '../components/PosterShelf.jsx';
import { BrandBoard } from '../components/BrandBoard.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { TLink } from '../components/TLink.jsx';
import { projects, getProject, kindsOf } from '../data/projects.js';
import { useTitle } from '../lib/useTitle.js';
import NotFound from './NotFound.jsx';
import { comingSoon } from '../data/site.js';

function Progress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const tick = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <div className="progress" aria-hidden="true"><i ref={ref} /></div>;
}

const pad = (n) => String(n).padStart(2, '0');

function Section({ s, tone, n }) {
  switch (s.type) {
    case 'text':
      return (
        <Reveal className="cs-text">
          <span className="label">{pad(n)} · {s.label}</span>
          <div className="cs-text__body">
            {s.heading && <h2 className="h2">{s.heading}</h2>}
            {(s.body || []).map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </Reveal>
      );
    case 'image':
      return (
        <Reveal as="figure" className="cs-figure">
          <Media src={s.src} alt={s.alt} tone={tone} ratio={s.ratio || '16/9'} radius="var(--radius-lg)" />
          {s.caption && <figcaption>{s.caption}</figcaption>}
        </Reveal>
      );
    case 'pair':
      return (
        <div className={'cs-pair' + (s.small ? ' cs-pair--small' : '')}>
          {s.images.map((im, i) => (
            <Reveal as="figure" key={i} delay={i * 120} className="cs-figure">
              <Media src={im.src} alt={im.alt} tone={tone} ratio={im.ratio || '4/5'} radius={s.small ? 'var(--radius-md)' : 'var(--radius-lg)'} />
              {im.caption && <figcaption>{im.caption}</figcaption>}
            </Reveal>
          ))}
        </div>
      );
    case 'quote':
      return (
        <Reveal as="blockquote" className="cs-quote">
          <p>“{s.text}”</p>
          {s.by && <cite>{s.by}</cite>}
        </Reveal>
      );
    case 'facts':
      return (
        <Reveal className="cs-facts">
          {s.items.map((f) => (
            <div key={f.k}><span className="cs-facts__v">{f.v}</span><span className="label">{f.k}</span></div>
          ))}
        </Reveal>
      );
    case 'fork':
      return (
        <Reveal className="cs-text">
          <span className="label">{pad(n)} · {s.label || 'The fork'}</span>
          <div className="cs-fork-wrap">
            <div className="cs-fork">
              {s.options.map((o) => (
                <div key={o.title} className={'cs-fork__opt' + (o.chosen ? ' is-chosen' : '')} style={{ '--tone': `var(--${tone})` }}>
                  {o.chosen && <Tag tone="ink" dot>Chosen</Tag>}
                  <span className="cs-fork__title">{o.title}</span>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
            {s.verdict && <p className="cs-fork__verdict"><span className="label">Verdict</span>{s.verdict}</p>}
          </div>
        </Reveal>
      );
    case 'phones':
      return (
        <div className="cs-phones" style={{ '--n': s.images.length }}>
          {s.images.map((im, i) => (
            <Reveal as="figure" key={i} delay={i * 110} className="cs-figure cs-phones__fig">
              <Media src={im.src} alt={im.alt} tone={tone} ratio={im.ratio || '676/1456'} radius="28px" />
              {im.caption && <figcaption>{im.caption}</figcaption>}
            </Reveal>
          ))}
        </div>
      );
    case 'scatter':
      // Loose working files on a desk. Hover (or focus) lifts one and shows what it is.
      return (
        <Reveal className="cs-text">
          <span className="label">{pad(n)} · {s.label}</span>
          <div className="cs-text__body">
            {s.heading && <h2 className="h2">{s.heading}</h2>}
            {(s.body || []).map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className="cs-scatter">
            {s.items.map((it) => (
              <a key={it.src} href={it.src} target="_blank" rel="noreferrer" className="cs-scatter__item" data-cursor="Open"
                style={{ '--x': it.x + '%', '--y': it.y + '%', '--w': it.w + '%', '--r': (it.r || 0) + 'deg' }}>
                <img src={it.src} alt={it.alt} loading="lazy" decoding="async" />
                <span className="cs-scatter__pill">{it.caption} <span aria-hidden="true">↗︎</span></span>
              </a>
            ))}
          </div>
        </Reveal>
      );
    case 'summary':
      // The 10-second version: one line each for problem, what I did, outcome.
      return (
        <div className="cs-summary">
          {s.items.map((it, i) => (
            <Reveal key={it.k} delay={i * 90} className={'cs-summary__card' + (i === s.items.length - 1 ? ' is-last' : '')} style={{ '--tone': `var(--${tone})` }}>
              <span className="label">{it.k}</span>
              <p>{it.v}</p>
            </Reveal>
          ))}
        </div>
      );
    case 'stat':
      return (
        <Reveal className="cs-stat">
          <span className="cs-stat__v">{s.v}</span>
          <div className="cs-stat__text">
            <p className="cs-stat__k">{s.k}</p>
            {s.note && <p className="cs-stat__note">{s.note}</p>}
            {s.source && (
              <p className="cs-stat__source">
                {s.source.map((src) => <a key={src.href} className="label" href={src.href} target="_blank" rel="noreferrer">{src.label} ↗︎</a>)}
              </p>
            )}
          </div>
        </Reveal>
      );
    case 'list':
      return (
        <Reveal className="cs-text">
          {s.aside ? (
            // Small screens in the left column, numbered to match the points beside them
            <div className="cs-side">
              <span className="label">{pad(n)} · {s.label}</span>
              <div className="cs-side__tiles">
                {s.aside.map((a, i) => (
                  <figure key={a.alt} className="cs-side__tile">
                    <Media src={a.src} alt={a.alt} tone={tone} ratio="16/10" label={a.caption} radius="var(--radius-sm)" />
                    <figcaption><span className="cs-pin cs-pin--key" aria-hidden="true">{pad(i + 1)}</span>{a.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : <span className="label">{pad(n)} · {s.label}</span>}
          <div className="cs-text__body">
            {s.heading && <h2 className="h2">{s.heading}</h2>}
            <ol className="cs-list">
              {s.items.map((it, i) => (
                <li key={it.title} style={{ '--i': i }}>
                  <span className="cs-list__n">{pad(i + 1)}</span>
                  <span><span className="cs-list__title">{it.title}</span>{it.body && <span className="cs-list__body">{it.body}</span>}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      );
    case 'shelf':
      return (
        <div className="cs-gallery">
          <Reveal className="cs-gallery__head">
            <span className="label">{pad(n)} · {s.label}</span>
            {s.heading && <h2 className="h2">{s.heading}</h2>}
          </Reveal>
          <Reveal><PosterShelf items={s.items} label={s.heading || s.label} /></Reveal>
        </div>
      );
    case 'brand':
      // The product's own guidelines, set in its own fonts and colours.
      return (
        <div className="cs-gallery">
          <Reveal className="cs-gallery__head">
            <span className="label">{pad(n)} · {s.label}</span>
            {s.heading && <h2 className="h2">{s.heading}</h2>}
            {(s.body || []).map((para, i) => <p key={i} className="cs-gallery__lede">{para}</p>)}
          </Reveal>
          <BrandBoard brand={s.brand} />
        </div>
      );
    case 'gallery':
      // Things that were made (guides, posters, headers): small tiles, each at its own shape.
      return (
        <div className="cs-gallery">
          <Reveal className="cs-gallery__head">
            <span className="label">{pad(n)} · {s.label}</span>
            {s.heading && <h2 className="h2">{s.heading}</h2>}
          </Reveal>
          <div className="cs-gallery__grid" style={{ '--cols': Math.min(4, s.images.reduce((c, im) => c + (im.wide ? 2 : 1), 0)) }}>
            {s.images.map((im, i) => (
              <Reveal as="figure" key={im.src || i} delay={i * 90} className={'cs-figure cs-gallery__fig' + (im.wide ? ' is-wide' : '')}>
                <Media src={im.src} alt={im.alt} tone={tone} ratio={im.ratio || '4/5'} radius="var(--radius-sm)" />
                {im.caption && <figcaption>{im.caption}</figcaption>}
              </Reveal>
            ))}
          </div>
        </div>
      );
    case 'media':
      // Screen on one side, its point on the other.
      return (
        <div className={'cs-media' + (s.flip ? ' is-flip' : '') + (s.image.phone ? ' is-phone' : '') + (s.image.pins ? ' is-pinned' : '')}>
          <Reveal as="figure" className="cs-figure cs-media__fig">
            {(() => {
              const screen = (
                <div className="cs-pins">
                  <Media src={s.image.src} alt={s.image.alt} tone={tone} ratio={s.image.ratio || '16/10'} radius={s.image.phone ? '28px' : s.image.laptop ? '3px' : 'var(--radius-lg)'} />
                  {/* Numbered markers on the screen, matching the numbered notes beside it */}
                  {(s.image.pins || []).map((pin, i) => (
                    <span key={i} className="cs-pin" style={{ '--x': pin.x + '%', '--y': pin.y + '%', '--i': i }} aria-hidden="true">{pad(i + 1)}</span>
                  ))}
                </div>
              );
              return s.image.laptop ? <Laptop>{screen}</Laptop> : screen;
            })()}
            {s.image.caption && <figcaption>{s.image.caption}</figcaption>}
          </Reveal>
          <Reveal delay={120} className="cs-media__text">
            <span className="label">{pad(n)} · {s.label}</span>
            {s.heading && <h2 className="h2">{s.heading}</h2>}
            {(s.body || []).map((para, i) => <p key={i}>{para}</p>)}
            {s.items && (
              <ul className={'cs-media__items' + (s.image.pins ? ' is-pinned' : '')}>
                {s.items.map((it, i) => (
                  <li key={it.title}>
                    {s.image.pins && <span className="cs-pin cs-pin--key" aria-hidden="true">{pad(i + 1)}</span>}
                    <span><span className="cs-list__title">{it.title}</span>{it.body && <span className="cs-list__body">{it.body}</span>}</span>
                  </li>
                ))}
              </ul>
            )}
            {/* A fork that follows from this point, set in the empty column beside a tall screen */}
            {s.then && <div className="cs-media__then"><Section s={s.then} tone={tone} n={n + 1} /></div>}
          </Reveal>
        </div>
      );
    default:
      return null;
  }
}

export default function CaseStudy() {
  const { id } = useParams();
  const p = getProject(id);
  useTitle(p?.title || 'Not found');
  if (!p) return <NotFound />;

  // Not ready yet: the page is blocked, only the title and a line show.
  if (p.comingSoon) return (
    <section className="notfound wrap">
      <div className="tags rise" style={{ '--d': '0ms' }}>
        {kindsOf(p).map((k) => <Tag key={k} tone={p.tone}>{k}</Tag>)}<Tag>{p.year}</Tag>
        <Tag dot>{comingSoon.tag}</Tag>
      </div>
      <MixedHeadline size="var(--type-display)" delay={100} parts={[p.title, { text: '·', style: 'accent' }, { text: p.hook, style: 'italic' }]} />
      <p className="lead rise" style={{ '--d': '300ms' }}>{comingSoon.line}</p>
      <div className="rise" style={{ '--d': '400ms' }}><Button to="/" arrow>Back to the work</Button></div>
    </section>
  );

  // "Next project" skips anything that isn't ready yet.
  const ready = projects.filter((x) => !x.comingSoon);
  const i = ready.indexOf(p);
  const next = ready[(i + 1) % ready.length];
  let n = 0;

  // Picture first, unless there's no real cover yet: then the opening summary
  // (and the facts strip right after it) lead, so a hatched placeholder isn't the opener.
  const problemFirst = p.problemFirst ?? !p.cover;
  let lead = p.sections.findIndex((s) => !['summary', 'facts'].includes(s.type));
  lead = Math.max(1, lead === -1 ? p.sections.length : lead) - 1;
  const cover = (
    <div className="rise rise--img" style={{ '--d': '520ms' }}>
      {p.coverLaptop
        ? <Laptop className="cs-cover-laptop"><Media src={p.cover} alt={p.coverAlt || ''} tone={p.tone} ratio={p.coverRatio || '16/8'} label="cover image" radius="3px" /></Laptop>
        : <Media src={p.cover} alt={p.coverAlt || ''} tone={p.tone} ratio={p.coverRatio || '16/8'} label="cover image" radius="var(--radius-lg)" className="cs-cover" />}
    </div>
  );

  return (
    <article className="cs wrap">
      <Progress />
      <div className="rise" style={{ '--d': '0ms' }}><Button variant="ghost" to="/" label="Work">←︎ All work</Button></div>
      <div className="tags rise" style={{ '--d': '60ms' }}>
        {kindsOf(p).map((k) => <Tag key={k} tone={p.tone}>{k}</Tag>)}<Tag>{p.year}</Tag>
        {p.placeholder && <Tag dot>Case study in progress</Tag>}
      </div>
      <MixedHeadline size="var(--type-display)" delay={100} parts={[p.title, { text: '·', style: 'accent' }, { text: p.hook, style: 'italic' }]} />

      <dl className="cs-meta rise" style={{ '--d': '420ms' }}>
        {[['Role', p.role], ['Stack', p.stack], ['Year', p.year], ['Type', kindsOf(p).join(' · ')]].map(([k, v]) => (
          <div key={k}><dt className="label">{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>

      {p.links?.length > 0 && (
        <div className="cs-links rise" style={{ '--d': '470ms' }}>
          {p.links.map((l, k) => <Button key={l.href} href={l.href} variant={k ? 'outline' : 'primary'} arrow>{l.label}</Button>)}
        </div>
      )}

      {!problemFirst && cover}

      {p.sections.map((s, k) => {
        if (['text', 'fork', 'list', 'media', 'scatter', 'shelf', 'gallery', 'brand'].includes(s.type)) n++;
        const cur = n;
        if (s.then) n++; // the nested fork takes the next number
        return (
          <Fragment key={k}>
            <Section s={s} tone={p.tone} n={cur} />
            {problemFirst && k === lead && cover}
          </Fragment>
        );
      })}

      {next && next.id !== p.id && (
        <TLink to={`/work/${next.id}`} label={next.title} className="cs-next" data-cursor="Next" style={{ '--tone': `var(--${next.tone})` }}>
          <span className="label">Next project</span>
          <span className="cs-next__title">{next.title} <span className="cs-next__arrow">↗︎</span></span>
        </TLink>
      )}
    </article>
  );
}
