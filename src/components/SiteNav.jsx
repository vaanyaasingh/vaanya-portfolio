import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TLink } from './TLink.jsx';
import { Wordmark } from './Wordmark.jsx';
import { Button } from './Button.jsx';
import { site } from '../data/site.js';
import { useTransition } from '../lib/transition.jsx';

const linkedIn = site.socials.find((s) => s.label === 'LinkedIn');
const currentOf = (path) => (path.startsWith('/about') ? '/about' : path.startsWith('/contact') ? '/contact' : path === '/' || path.startsWith('/work') ? '/' : null);

/* Floating glass pill. Hides on scroll down, returns on scroll up.
   Under 760px the links fold into a full-screen menu. */
export function SiteNav() {
  const { pathname } = useLocation();
  const { lockScroll } = useTransition();
  const current = currentOf(pathname);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = useRef({});
  const pill = useRef(null);

  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) { setHidden(y > last && y > 240); last = y; }
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  // Sliding ink pill behind the active link.
  useLayoutEffect(() => {
    const place = () => {
      const el = links.current[current], p = pill.current;
      if (!p) return;
      if (!el) { p.style.opacity = 0; return; }
      p.style.opacity = 1;
      p.style.width = el.offsetWidth + 'px';
      p.style.transform = `translateX(${el.offsetLeft}px)`;
    };
    place();
    document.fonts?.ready.then(place);
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [current]);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    lockScroll(open);
    if (!open) return;
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open, lockScroll]);

  return (
    <>
      <header className={'nav-wrap' + (hidden && !open ? ' is-hidden' : '') + (scrolled ? ' is-scrolled' : '') + (open ? ' is-menu' : '')}>
        <nav className="nav" aria-label="Primary">
          <TLink to="/" className="nav__brand" aria-label="Vaanya Singh, home"><Wordmark /></TLink>
          <div className="nav__links">
            <span ref={pill} className="nav__pill" aria-hidden="true" />
            {site.nav.map((l) => (
              <TLink key={l.to} to={l.to} label={l.label} ref={(el) => (links.current[l.to] = el)}
                className={'nav__link' + (current === l.to ? ' is-active' : '')} aria-current={current === l.to ? 'page' : undefined}>
                <span className="roll"><span>{l.label}</span><span aria-hidden="true">{l.label}</span></span>
              </TLink>
            ))}
          </div>
          <Button href={linkedIn.href} size="sm" arrow magnetic={false} className="nav__social">{linkedIn.label}</Button>
          <button type="button" className={'nav__menu' + (open ? ' is-open' : '')} aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="nav__burger" aria-hidden="true"><i /><i /></span>
          </button>
        </nav>
      </header>

      <div id="menu" className={'menu' + (open ? ' is-open' : '')} aria-hidden={!open} data-cursor-theme="light">
        <div className="menu__grain" />
        <ol className="menu__list">
          {site.nav.map((l, i) => (
            <li key={l.to} style={{ '--i': i }}>
              <TLink to={l.to} label={l.label} tabIndex={open ? 0 : -1} className={'menu__link' + (current === l.to ? ' is-active' : '')} onClick={() => current === l.to && setOpen(false)}>
                <span className="menu__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="menu__word">{l.label}</span>
              </TLink>
            </li>
          ))}
        </ol>
        <div className="menu__foot" style={{ '--i': site.nav.length }}>
          <span className="menu__status"><span className="status-dot" />{site.status}</span>
          <div className="menu__socials">
            {site.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>{s.label} ↗︎</a>)}
          </div>
        </div>
      </div>
    </>
  );
}
