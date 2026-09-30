import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { MixedHeadline } from '../components/MixedHeadline.jsx';
import { Tag } from '../components/Tag.jsx';
import { Button } from '../components/Button.jsx';
import { Media } from '../components/Media.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { TLink } from '../components/TLink.jsx';
import { projects, getProject } from '../data/projects.js';
import { useTitle } from '../lib/useTitle.js';
import NotFound from './NotFound.jsx';

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
        <div className="cs-pair">
          {s.images.map((im, i) => (
            <Reveal as="figure" key={i} delay={i * 120} className="cs-figure">
              <Media src={im.src} alt={im.alt} tone={tone} ratio={im.ratio || '4/5'} radius="var(--radius-lg)" />
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
        <div className="cs-phones">
          {s.images.map((im, i) => (
            <Reveal as="figure" key={i} delay={i * 110} className="cs-figure cs-phones__fig">
              <Media src={im.src} alt={im.alt} tone={tone} ratio={im.ratio || '676/1456'} radius="28px" />
              {im.caption && <figcaption>{im.caption}</figcaption>}
            </Reveal>
          ))}
        </div>
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
          </div>
        </Reveal>
      );
    case 'list':
      return (
        <Reveal className="cs-text">
          <span className="label">{pad(n)} · {s.label}</span>
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
    case 'media':
      // Screen on one side, its point on the other.
      return (
        <div className={'cs-media' + (s.flip ? ' is-flip' : '') + (s.image.phone ? ' is-phone' : '')}>
          <Reveal as="figure" className="cs-figure cs-media__fig">
            <Media src={s.image.src} alt={s.image.alt} tone={tone} ratio={s.image.ratio || '16/10'} radius={s.image.phone ? '28px' : 'var(--radius-lg)'} />
            {s.image.caption && <figcaption>{s.image.caption}</figcaption>}
          </Reveal>
          <Reveal delay={120} className="cs-media__text">
            <span className="label">{pad(n)} · {s.label}</span>
            {s.heading && <h2 className="h2">{s.heading}</h2>}
            {(s.body || []).map((para, i) => <p key={i}>{para}</p>)}
            {s.items && (
              <ul className="cs-media__items">
                {s.items.map((it) => <li key={it.title}><span className="cs-list__title">{it.title}</span>{it.body && <span className="cs-list__body">{it.body}</span>}</li>)}
              </ul>
            )}
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

  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];
  let n = 0;

  return (
    <article className="cs wrap">
      <Progress />
      <div className="rise" style={{ '--d': '0ms' }}><Button variant="ghost" to="/" label="Work">← All work</Button></div>
      <div className="tags rise" style={{ '--d': '60ms' }}>
        <Tag tone={p.tone}>{p.kind}</Tag><Tag>{p.year}</Tag>
        {p.placeholder && <Tag dot>Case study in progress</Tag>}
      </div>
      <MixedHeadline size="var(--type-display)" delay={100} parts={[p.title, { text: '·', style: 'accent' }, { text: p.hook, style: 'italic' }]} />

      <dl className="cs-meta rise" style={{ '--d': '420ms' }}>
        {[['Role', p.role], ['Stack', p.stack], ['Year', p.year], ['Type', p.kind]].map(([k, v]) => (
          <div key={k}><dt className="label">{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>

      <div className="rise rise--img" style={{ '--d': '520ms' }}>
        <Media src={p.cover} alt={p.coverAlt || ''} tone={p.tone} ratio={p.coverRatio || '16/8'} label="cover image" radius="var(--radius-lg)" className="cs-cover" />
      </div>

      {p.sections.map((s, k) => {
        if (['text', 'fork', 'list', 'media'].includes(s.type)) n++;
        return <Section key={k} s={s} tone={p.tone} n={n} />;
      })}

      {next && next.id !== p.id && (
        <TLink to={`/work/${next.id}`} label={next.title} className="cs-next" data-cursor="Next" style={{ '--tone': `var(--${next.tone})` }}>
          <span className="label">Next project</span>
          <span className="cs-next__title">{next.title} <span className="cs-next__arrow">↗</span></span>
        </TLink>
      )}
    </article>
  );
}
