import { useEffect, useMemo, useRef, useState } from 'react';
import { MixedHeadline } from '../components/MixedHeadline.jsx';
import { Button } from '../components/Button.jsx';
import { Chip } from '../components/Chip.jsx';
import { Tag } from '../components/Tag.jsx';
import { Marquee } from '../components/Marquee.jsx';
import { RevealWord } from '../components/RevealWord.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { Reveal, SplitHeading } from '../components/Reveal.jsx';
import { Contact } from '../components/Contact.jsx';
import { projects, categories } from '../data/projects.js';
import { useTransition } from '../lib/transition.jsx';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion.js';
import { useTitle } from '../lib/useTitle.js';

/* Accent dots that drift with the pointer (depth = parallax strength). */
const DOTS = [
  { c: 'tangerine', s: 14, x: 78, y: 16, d: 28 },
  { c: 'violet', s: 9, x: 90, y: 44, d: 44 },
  { c: 'moss', s: 7, x: 62, y: 8, d: 18 },
  { c: 'vermilion', s: 11, x: 48, y: 10, d: 36 },
  { c: 'butter', s: 22, x: 86, y: 70, d: 14 },
];

function HeroDots() {
  const ref = useRef(null);
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    let raf, tx = 0, ty = 0, cx = 0, cy = 0;
    const move = (e) => { tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; };
    const tick = () => {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      ref.current?.style.setProperty('--px', cx.toFixed(4));
      ref.current?.style.setProperty('--py', cy.toFixed(4));
      raf = requestAnimationFrame(tick);
    };
    addEventListener('mousemove', move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} className="hero__dots" aria-hidden="true">
      {DOTS.map((d, i) => (
        <span key={i} className="hero__dot" style={{ '--c': `var(--${d.c})`, '--s': d.s + 'px', left: d.x + '%', top: d.y + '%', '--depth': d.d, '--i': i }} />
      ))}
    </div>
  );
}

/* Big cards first, pills after — both in the same equal two-column grid. */
const layout = (list) => [...list.filter((p) => p.size !== 'pill'), ...list.filter((p) => p.size === 'pill')];

export default function Home() {
  useTitle('');
  const { scrollTo } = useTransition();
  const [filter, setFilter] = useState('All');
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.kind === filter)), [filter]);
  const cells = layout(list);

  return (
    <>
      <section className="hero wrap">
        <HeroDots />
        <div className="hero__tags rise" style={{ '--d': '0ms' }}>
          <Tag tone="ink">HCI Masters · Portfolio</Tag>
          <Tag>{new Date().getFullYear()}</Tag>
        </div>
        <MixedHeadline
          size="clamp(56px,10vw,160px)"
          delay={80}
          className="hero__title"
          parts={['Designing', { text: 'the', style: 'boxed' }, { text: 'gentle', style: 'italic' }, { br: true }, 'parts of', { text: 'computing', style: 'circled' }]}
        />
        <div className="hero__foot">
          <p className="hero__lede rise" style={{ '--d': '520ms' }}>
            I’m Vaanya — I study how people <RevealWord tone="lilac" caption="Field study · 2025">touch</RevealWord> interfaces,
            and I build the ones they <RevealWord tone="peach" caption="Raseed · 2025">keep</RevealWord>.
          </p>
          <div className="hero__cta rise" style={{ '--d': '620ms' }}>
            <Button arrow onClick={() => scrollTo('#work', { offset: -90 })}>See the work</Button>
            <Button variant="outline" to="/about" label="About">About me</Button>
          </div>
        </div>
        <span className="hero__scroll rise" style={{ '--d': '900ms' }} aria-hidden="true"><span>Scroll</span><i /></span>
      </section>

      <div className="band">
        <Marquee items={['Human–computer interaction', 'Designed', 'Coded', 'Researched', 'Tested with people']} size="clamp(34px,5vw,56px)" />
      </div>

      <section id="work" className="work wrap" aria-label="Selected work">
        <div className="work__head">
          <SplitHeading className="h1" parts={['Selected', { text: 'work', style: 'italic' }]} />
          <Reveal className="chips" delay={120} role="group" aria-label="Filter projects">
            {categories.map((c) => (
              <Chip key={c} active={filter === c} count={c === 'All' ? projects.length : projects.filter((p) => p.kind === c).length} onClick={() => setFilter(c)}>{c}</Chip>
            ))}
          </Reveal>
        </div>
        <div className="grid" key={filter}>
          {cells.length ? cells.map((p, i) => (
            <Reveal key={p.id} className={'grid__cell' + (p.size === 'pill' ? ' is-pill' : '')} delay={(i % 2) * 110}>
              <ProjectCard project={p} index={projects.indexOf(p) + 1} pill={p.size === 'pill'} />
            </Reveal>
          )) : <p className="grid__empty">Nothing here yet — more soon.</p>}
        </div>
      </section>

      <Contact />
    </>
  );
}
