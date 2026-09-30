import { useRef } from 'react';
import { TLink } from './TLink.jsx';
import { Tag } from './Tag.jsx';
import { Media } from './Media.jsx';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion.js';

/* Pastel tile with pointer tilt (±8°) and a glare that follows the pointer.
   `pill` is the compact variant for smaller projects: one row, no image. */
export function ProjectCard({ project, index, pill = false }) {
  const ref = useRef(null);
  const { id, title, kind, year, role, tone, cover, thumb } = project;

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

  const common = { to: `/work/${id}`, label: title, ref, 'data-cursor': 'View', style: { '--tone': `var(--${tone})` }, onMouseMove: move, onMouseLeave: leave };

  if (pill) return (
    <TLink {...common} className="card card--pill">
      <span className="card__grain" aria-hidden="true" />
      <span className="card__glare" aria-hidden="true" />
      <span className="card__index">{String(index).padStart(2, '0')}</span>
      <span className="card__pill-text">
        <span className="card__title">{title}</span>
        {role && <span className="card__role">{role}</span>}
      </span>
      <span className="card__tags">{kind && <Tag tone="paper">{kind}</Tag>}{year && <Tag>{year}</Tag>}</span>
      <span className="card__arrow" aria-hidden="true">↗</span>
    </TLink>
  );

  return (
    <TLink {...common} className="card">
      <span className="card__grain" aria-hidden="true" />
      <span className="card__glare" aria-hidden="true" />
      <span className="card__top">
        <span className="card__tags">{kind && <Tag tone="paper">{kind}</Tag>}{year && <Tag>{year}</Tag>}</span>
        <span className="card__index">{String(index).padStart(2, '0')}</span>
      </span>
      <Media src={thumb || cover} alt="" tone={tone} ratio="4/3" label="project image" className="card__media" />
      <span className="card__bottom">
        <span>
          <span className="card__title">{title}</span>
          {role && <span className="card__role">{role}</span>}
        </span>
        <span className="card__arrow" aria-hidden="true">↗</span>
      </span>
    </TLink>
  );
}
