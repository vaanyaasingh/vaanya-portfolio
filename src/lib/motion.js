import { useEffect, useRef, useState } from 'react';

const mq = (q) => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q) : null);

export const prefersReducedMotion = () => !!mq('(prefers-reduced-motion: reduce)')?.matches;
export const hasFinePointer = () => !!mq('(hover: hover) and (pointer: fine)')?.matches;

function useMedia(query) {
  const [match, setMatch] = useState(() => !!mq(query)?.matches);
  useEffect(() => {
    const m = mq(query);
    if (!m) return;
    const on = () => setMatch(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, [query]);
  return match;
}

export const useReducedMotion = () => useMedia('(prefers-reduced-motion: reduce)');
export const useFinePointer = () => useMedia('(hover: hover) and (pointer: fine)');

/* Adds `is-in` once the element scrolls into view. */
export function useInView({ rootMargin = '0px 0px -12% 0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) return setInView(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) setInView(false);
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, once]);
  return [ref, inView];
}

export const lerp = (a, b, t) => a + (b - a) * t;
