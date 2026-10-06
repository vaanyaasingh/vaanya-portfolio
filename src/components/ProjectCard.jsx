import { useRef } from 'react';
import { TLink } from './TLink.jsx';
import { Tag } from './Tag.jsx';
import { Media } from './Media.jsx';
import { kindsOf } from '../data/projects.js';
import { comingSoon } from '../data/site.js';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion.js';

/* Pastel tile with pointer tilt (±8°) and a glare that follows the pointer.
   `pill` is the compact variant for smaller projects: one row, no image.
   A `comingSoon` project isn't a link: it stays still and shows a pill where the arrow would be. */
export function ProjectCard({ project, index, pill = false }) {
  const ref = useRef(null);
  const { id, title, year, role, tone, cover, thumb } = project;

  const move = (e) => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    const el = ref.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    const t = pill ? 0.35 : 1;
    el.style.setProperty('--rx', (-y * 6 * t).toFixed(2) + 'deg');
    el.style.setProperty('--ry', (x * 8 * t).toFixed(2) + 'deg');
    el.style.setProperty('--gx', ((x + 0.5) * 100).toFixed(1) + '%');
    el.style.setProperty('--gy', ((y + 0.5) * 100).toFixed(1) + '%');
    el.classList.add('is-tilting');
  };
  const leave = () => {
    const el = ref.current;
    el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg');
    el.classList.remove('is-tilting');
  };

  const soon = !!project.comingSoon;
  const Root = soon ? 'div' : TLink;
  const common = soon
    ? { ref, 'aria-disabled': 'true', style: { '--tone': `var(--${tone})` } }
    : { to: `/work/${id}`, label: title, ref, 'data-cursor': 'View', style: { '--tone': `var(--${tone})` }, onMouseMove: move, onMouseLeave: leave };
  const end = soon
    ? <span className="card__soon"><span className="tag__dot" aria-hidden="true" />{comingSoon.tag}</span>
    : <span className="card__arrow" aria-hidden="true">↗</span>;

  if (pill) return (
    <Root {...common} className={'card card--pill' + (soon ? ' card--soon' : '')}>
      <span className="card__grain" aria-hidden="true" />
      <span className="card__glare" aria-hidden="true" />
      <span className="card__index">{String(index).padStart(2, '0')}</span>
      <span className="card__pill-text">
        <span className="card__title">{title}</span>
        <span className="card__tags">{kindsOf(project).map((k) => <Tag key={k} tone="paper">{k}</Tag>)}{year && <Tag>{year}</Tag>}</span>
      </span>
      {end}
    </Root>
  );

  return (
    <Root {...common} className={'card' + (soon ? ' card--soon' : '')}>
      <span className="card__grain" aria-hidden="true" />
      <span className="card__glare" aria-hidden="true" />
      <span className="card__top">
        <span className="card__tags">{kindsOf(project).map((k) => <Tag key={k} tone="paper">{k}</Tag>)}{year && <Tag>{year}</Tag>}</span>
        <span className="card__index">{String(index).padStart(2, '0')}</span>
      </span>
      <Media src={thumb || cover} alt="" tone={tone} ratio="4/3" label="project image" className="card__media" />
      <span className="card__bottom">
        <span>
          <span className="card__title">{title}</span>
          {role && <span className="card__role">{role}</span>}
        </span>
        {end}
      </span>
    </Root>
  );
}
