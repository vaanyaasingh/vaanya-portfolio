import { MixedHeadline } from '../components/MixedHeadline.jsx';
import { Tag } from '../components/Tag.jsx';
import { RevealWord } from '../components/RevealWord.jsx';
import { Media } from '../components/Media.jsx';
import { Reveal, SplitHeading } from '../components/Reveal.jsx';
import { Button } from '../components/Button.jsx';
import { SectionHead } from '../components/SectionHead.jsx';
import { Shelf } from '../components/Shelf.jsx';
import { Puzzle } from '../components/Puzzle.jsx';
import { site, cv, offTheClock, offClockTeaser, aboutIntro, portrait } from '../data/site.js';
import { useTitle } from '../lib/useTitle.js';

const CvButton = (props) => <Button href={cv} target="_blank" {...props}>{props.children}</Button>;

export default function About() {
  useTitle('About');
  return (
    <>
      <section className="sec wrap" aria-label="The shelf">
        <SectionHead label="01 · The shelf" parts={['Things on', { text: 'my shelf', style: 'italic' }]} note="Hover or tap an object for its story. Plus what I’m into right now." />
        <Reveal><Shelf /></Reveal>
      </section>

      <section className="ab-intro wrap">
        <div className="ab-intro__text">
          <div className="tags rise" style={{ '--d': '0ms' }}><Tag tone="ink">About</Tag><Tag>{site.location}</Tag></div>
          <MixedHeadline size="var(--type-display)" delay={80} parts={['Code, people,', { br: true }, 'and', { text: 'everything', style: 'italic' }, 'in', { text: 'between', style: 'highlight', tone: 'mint' }]} />
          <div className="ab-intro__lead rise" style={{ '--d': '420ms' }}>
            {aboutIntro.map((p, i) => (
              <p key={i} className="lead">
                {p.text}
                {p.word && <>{' '}<RevealWord tone="butter" caption={p.caption} image={p.image}>{p.word}</RevealWord>{p.after}</>}
              </p>
            ))}
          </div>
          <div className="hero__cta rise" style={{ '--d': '520ms' }}>
            <CvButton arrow>Download CV</CvButton>
            {offTheClock.ready && <Button variant="outline" to={offTheClock.to} label="Off the clock">Off the clock</Button>}
          </div>
        </div>
        <figure className="ab-portrait rise rise--img" style={{ '--d': '300ms' }}>
          <Media src={portrait.src} alt={portrait.alt} tone="rose" ratio="4/5" label="portrait" radius="var(--radius-lg)" className="ab-portrait__img" />
          <figcaption className="label">{portrait.caption}</figcaption>
        </figure>
      </section>

      <section className="sec wrap" aria-label="Mini game">
        <SectionHead label="02 · A small game" parts={['Solve', { text: 'me', style: 'italic' }, { text: '.', style: 'accent', glue: true }]} />
        <Reveal><Puzzle /></Reveal>
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
