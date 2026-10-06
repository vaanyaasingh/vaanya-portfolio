import { site } from '../data/site.js';
import { useTransition } from '../lib/transition.jsx';

export function Footer() {
  const { scrollTo } = useTransition();
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span className="footer__socials">
        {site.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
      </span>
      <span className="footer__right">
        <span>{site.location}</span>
        <button type="button" className="footer__top" onClick={() => scrollTo(0)}>Back to top ↑︎</button>
      </span>
    </footer>
  );
}
