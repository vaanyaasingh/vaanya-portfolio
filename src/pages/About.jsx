import { MixedHeadline } from '../components/MixedHeadline.jsx';
import { Tag } from '../components/Tag.jsx';
import { RevealWord } from '../components/RevealWord.jsx';
import { Media } from '../components/Media.jsx';
import { Reveal, SplitHeading } from '../components/Reveal.jsx';
import { Button } from '../components/Button.jsx';
import { site, cv, offTheClock, experience, goGirl, study, offClockTeaser } from '../data/site.js';
import { useTitle } from '../lib/useTitle.js';

function SectionHead({ label, parts, note, wide }) {
  return (
    <div className="ab-head">
      <div className="ab-head__title">
        <Reveal as="span" className="label">{label}</Reveal>
        <SplitHeading className="h1" parts={parts} />
      </div>
      {note && <Reveal as="p" delay={120} className={'ab-head__note' + (wide ? ' is-wide' : '')}>{note}</Reveal>}
    </div>
  );
}

const CvButton = (props) => <Button href={cv} target="_blank" {...props}>{props.children}</Button>;

export default function About() {
  useTitle('About');
  const { org, community } = goGirl;
  return (
    <>
      <section className="ab-intro wrap">
        <div className="ab-intro__text">
          <div className="tags rise" style={{ '--d': '0ms' }}><Tag tone="ink">About</Tag><Tag>{site.location}</Tag></div>
          <MixedHeadline size="var(--type-display)" delay={80} parts={['Half', { text: 'designer,', style: 'italic' }, { br: true }, 'half', { text: 'engineer', style: 'highlight', tone: 'mint' }]} />
          <p className="lead rise" style={{ '--d': '420ms' }}>
            I’m a computer science student at RVCE who ended up in the{' '}
            <RevealWord tone="butter" caption="Where I sit">mid-way</RevealWord> — I design in Figma, build in React and LangGraph,
            and spend my evenings running a community for women in tech. I’m applying to Human–Computer Interaction masters
            programmes to make that mid-way my whole job.
          </p>
          <div className="hero__cta rise" style={{ '--d': '520ms' }}>
            <CvButton arrow>Download CV</CvButton>
            {offTheClock.ready && <Button variant="outline" to={offTheClock.to} label="Off the clock">Off the clock</Button>}
          </div>
        </div>
        <figure className="ab-portrait rise rise--img" style={{ '--d': '300ms' }}>
          <Media tone="rose" ratio="4/5" label="portrait" radius="var(--radius-lg)" className="ab-portrait__img" />
          <figcaption className="label">Me, probably holding a matcha</figcaption>
        </figure>
      </section>

      <section className="ab-section wrap" aria-label="Experience">
        <SectionHead label="01 — Experience" parts={['Where I’ve', { text: 'worked', style: 'italic' }]} note={experience.note} />
        <ol className="ab-jobs">
          {experience.items.map((j, i) => (
            <Reveal as="li" key={j.org} delay={i * 60} className="ab-job">
              <div className="ab-job__meta">
                <span className="label ab-job__when">{j.current && <span className="status-dot" />}{j.when}</span>
                <span className="label">{j.where}</span>
              </div>
              <div>
                <div className="ab-job__role">{j.role}</div>
                <div className="ab-job__org">{j.org}</div>
              </div>
              <p className="ab-job__body">{j.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="ab-section wrap" aria-label="Go Girl">
        <SectionHead label="02 — Go Girl" parts={['Five years,', { text: 'five hats', style: 'italic' }]} note={goGirl.note} wide />
        <div className="ab-gg">
          <Reveal className="ab-panel" style={{ '--tone': 'var(--lilac)' }}>
            <span className="card__grain" aria-hidden="true" />
            <div className="ab-panel__head">
              <span className="label ab-panel__meta">{org.meta}</span>
              <div className="ab-panel__title">{org.title[0]}<em>{org.title[1]}</em></div>
            </div>
            <ol className="ab-hats">
              {org.hats.map((h) => (
                <li key={h.n} className="ab-hat">
                  <span className={'ab-hat__n' + (h.n === 'Now' ? ' is-now' : '')}>{h.n}</span>
                  <div><div className="ab-hat__title">{h.title}</div><div className="ab-hat__note">{h.note}</div></div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="ab-panel" delay={110} style={{ '--tone': 'var(--peach)' }}>
            <span className="card__grain" aria-hidden="true" />
            <div className="ab-panel__head">
              <span className="label ab-panel__meta">{community.meta}</span>
              <div className="ab-panel__title">{community.title[0]}<em>{community.title[1]}</em></div>
            </div>
            <p className="ab-panel__body">{community.body}</p>
            <Media src={community.photo} tone="paper-0" ratio="16/9" label="a GGC event photo" className="ab-panel__photo" />
            <div className="ab-stats">
              {community.stats.map((s) => <div key={s.k}><div className="ab-stats__v">{s.v}</div><div className="label ab-stats__k">{s.k}</div></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ab-section wrap" aria-label="Study">
        <SectionHead label="03 — Study" parts={['Trained as an engineer,', { text: 'taught myself design', style: 'italic' }]} />
        <div className="ab-study">
          <Reveal className="ab-school">
            <div className="ab-school__meta"><span className="label">{study.when}</span><span className="label">{study.where}</span></div>
            <div className="ab-school__name">{study.school}</div>
            <div className="ab-school__degree">{study.degree}</div>
            <div className="tags">{study.courses.map((c) => <Tag key={c}>{c}</Tag>)}</div>
          </Reveal>
          <ol className="ab-extras">
            {study.extras.map((x, i) => (
              <Reveal as="li" key={x.title} delay={i * 60} className="timeline__row">
                <span className="timeline__when">{x.k}</span>
                <span><span className="ab-extra__title">{x.title}</span><span className="timeline__note">{x.note}</span></span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="ab-outro wrap" aria-label="Off the clock">
        <div className="ab-outro__inner">
          <SplitHeading className="ab-outro__title" parts={['The rest of me is', { text: 'off the clock', style: 'italic' }, { text: '.', style: 'accent', glue: true }]} />
          <Reveal className="ab-outro__side" delay={120}>
            <p>{offClockTeaser}</p>
            <div className="hero__cta">
              {offTheClock.ready
                ? <><Button arrow to={offTheClock.to} label="Off the clock">Come see</Button><CvButton variant="ghost">CV (PDF)</CvButton></>
                : <><Tag dot>Page coming soon</Tag><CvButton variant="ghost">CV (PDF)</CvButton></>}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
