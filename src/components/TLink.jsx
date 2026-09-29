import { forwardRef } from 'react';
import { useTransition } from '../lib/transition.jsx';

/* Internal link that plays the page curtain. Modifier-clicks still open new tabs. */
export const TLink = forwardRef(function TLink({ to, label, onClick, children, ...rest }, ref) {
  const { go } = useTransition();
  return (
    <a
      ref={ref}
      href={to}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        go(to, { label });
      }}
      {...rest}
    >
      {children}
    </a>
  );
});
