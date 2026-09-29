import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import Lenis from 'lenis';
import { prefersReducedMotion } from './motion.js';

/*
  Page transitions + smooth scroll.

  phase:
    'intro'   — first load, curtain is down showing the wordmark
    'cover'   — curtain rising over the old page
    'reveal'  — curtain lifting off the new page
    'idle'
  `entered` flips on as the curtain starts lifting; headline rise-ins wait for it
  (see .is-entered in global.css), so they play where people can see them.
*/

const Ctx = createContext(null);
export const useTransition = () => useContext(Ctx);

const COVER_MS = 620;
const REVEAL_MS = 720;
const INTRO_MS = 1500;

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const navType = useNavigationType();
  const lenisRef = useRef(null);
  const busy = useRef(false);
  const introSeen = (() => {
    try { return sessionStorage.getItem('vs-intro') === '1'; } catch { return false; }
  })();
  const [phase, setPhase] = useState(introSeen || prefersReducedMotion() ? 'idle' : 'intro');
  const [label, setLabel] = useState('');

  // Smooth scroll (desktop wheel; touch stays native).
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    lenisRef.current = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); lenisRef.current = null; };
  }, []);

  // First-load intro curtain.
  useEffect(() => {
    if (phase !== 'intro') return;
    let done = false;
    const lift = () => {
      if (done) return;
      done = true;
      try { sessionStorage.setItem('vs-intro', '1'); } catch {}
      setPhase('reveal');
      setTimeout(() => setPhase('idle'), REVEAL_MS);
    };
    const min = new Promise((r) => setTimeout(r, INTRO_MS));
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
    Promise.all([min, fonts]).then(lift);
    const failsafe = setTimeout(lift, 3500);
    return () => clearTimeout(failsafe);
  }, [phase]);

  useEffect(() => {
    document.documentElement.classList.toggle('is-entered', phase === 'reveal' || phase === 'idle');
  }, [phase]);

  // Back/forward: no curtain, just reset scroll.
  useEffect(() => {
    if (navType === 'POP') scrollTo(0, { immediate: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const scrollTo = useCallback((target, opts = {}) => {
    const lenis = lenisRef.current;
    const offset = opts.offset ?? 0;
    if (lenis) return lenis.scrollTo(target, { offset, immediate: !!opts.immediate, duration: 1.2 });
    if (typeof target === 'number') return window.scrollTo({ top: target, behavior: opts.immediate ? 'instant' : 'smooth' });
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: 'smooth' });
  }, []);

  const lockScroll = useCallback((on) => {
    const lenis = lenisRef.current;
    if (lenis) on ? lenis.stop() : lenis.start();
    document.documentElement.style.overflow = on ? 'hidden' : '';
  }, []);

  const go = useCallback((to, { label: l = '' } = {}) => {
    const path = to.split('#')[0] || '/';
    const hash = to.includes('#') ? '#' + to.split('#')[1] : '';
    if (path === location.pathname) {
      if (hash) scrollTo(hash, { offset: -90 });
      else scrollTo(0);
      return;
    }
    if (busy.current) return;
    if (prefersReducedMotion()) {
      navigate(to);
      scrollTo(0, { immediate: true });
      return;
    }
    busy.current = true;
    setLabel(l);
    setPhase('cover');
    setTimeout(() => {
      navigate(path);
      scrollTo(0, { immediate: true });
      requestAnimationFrame(() => {
        setPhase('reveal');
        if (hash) setTimeout(() => scrollTo(hash, { offset: -90 }), 300);
        setTimeout(() => { setPhase('idle'); busy.current = false; }, REVEAL_MS);
      });
    }, COVER_MS);
  }, [location.pathname, navigate, scrollTo]);

  return (
    <Ctx.Provider value={{ go, phase, label, scrollTo, lockScroll, lenis: lenisRef }}>
      {children}
    </Ctx.Provider>
  );
}
