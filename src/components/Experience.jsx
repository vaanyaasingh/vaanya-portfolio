import { Media } from './Media.jsx';
import { Tag } from './Tag.jsx';
import { Reveal } from './Reveal.jsx';
import { SectionHead } from './SectionHead.jsx';
import { experience, goGirl, study } from '../data/site.js';

/* Work history: one row per role. A lilac wash rises behind the row on hover. */
export function Experience({ label }) {
  return (
    <section className="sec wrap" aria-label="Experience">
      <SectionHead label={label} parts={['Where I’ve', { text: 'worked', style: 'italic' }]} note={experience.note} />
      <ol className="jobs">
        {experience.items.map((j, i) => (
          <Reveal as="li" key={j.org} delay={i * 60} className="job">
            <div className="job__meta">
              <span className="label job__when">{j.current && <span className="status-dot" />}{j.when}</span>
              <span className="label">{j.where}</span>
            </div>
            <div>
              <div className="job__role">{j.role}</div>
              <div className="job__org">{j.org}</div>
            </div>
            <p className="job__body">{j.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* Go Girl: the organisation (five hats) and the community, as two pastel panels. */
export function GoGirl({ label }) {
  const { org, community } = goGirl;
  return (
    <section className="sec wrap" aria-label="Go Girl">
      <SectionHead label={label} parts={['Five years,', { text: 'five hats', style: 'italic' }]} note={goGirl.note} wide />
      <div className="gg">
        <Reveal className="panel" style={{ '--tone': 'var(--lilac)' }}>
          <span className="card__grain" aria-hidden="true" />
          <div className="panel__head">
            <span className="label panel__meta">{org.meta}</span>
            <div className="panel__title">{org.title[0]}<em>{org.title[1]}</em></div>
          </div>
          <ol className="hats">
            {org.hats.map((h, i) => (
              <li key={h.n} className="hat" style={{ '--i': i }}>
                <span className={'hat__n' + (h.n === 'Now' ? ' is-now' : '')}>{h.n}</span>
                <div><div className="hat__title">{h.title}</div><div className="hat__note">{h.note}</div></div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="panel" delay={110} style={{ '--tone': 'var(--peach)' }}>
          <span className="card__grain" aria-hidden="true" />
          <div className="panel__head">
            <span className="label panel__meta">{community.meta}</span>
            <div className="panel__title">{community.title[0]}<em>{community.title[1]}</em></div>
          </div>
          <p className="panel__body">{community.body}</p>
          <Media src={community.photo} tone="paper-0" ratio="16/9" label="a GGC event photo" className="panel__photo" />
          <div className="stats">
            {community.stats.map((s) => <div key={s.k}><div className="stats__v">{s.v}</div><div className="label stats__k">{s.k}</div></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Degree on the left, certificate + campus roles on the right. */
export function Study({ label }) {
  return (
    <section className="sec wrap" aria-label="Study">
      <SectionHead label={label} parts={['Trained as an engineer,', { text: 'taught myself design', style: 'italic' }]} />
      <div className="study">
        <Reveal className="school">
          <div className="school__meta"><span className="label">{study.when}</span><span className="label">{study.where}</span></div>
          <div className="school__name">{study.school}</div>
          <div className="school__degree">{study.degree}</div>
          <div className="tags">{study.courses.map((c) => <Tag key={c}>{c}</Tag>)}</div>
        </Reveal>
        <ol className="extras">
          {study.extras.map((x, i) => (
            <Reveal as="li" key={x.title} delay={i * 60} className="timeline__row">
              <span className="timeline__when">{x.k}</span>
              <span><span className="extra__title">{x.title}</span><span className="timeline__note">{x.note}</span></span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
