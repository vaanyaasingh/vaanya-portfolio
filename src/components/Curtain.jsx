import { useTransition } from '../lib/transition.jsx';
import { Wordmark } from './Wordmark.jsx';

/* Ink curtain for the first-load intro and page changes. */
export function Curtain() {
  const { phase, label } = useTransition();
  return (
    <div className={'curtain is-' + phase} aria-hidden="true">
      <div className="curtain__panel">
        <div className="curtain__grain" />
        {phase === 'intro' ? (
          <div className="curtain__intro">
            <span className="curtain__mask"><Wordmark className="curtain__mark" /></span>
            <span className="curtain__sub">Designer who codes · HCI</span>
            <span className="curtain__bar"><i /></span>
          </div>
        ) : (
          <span className="curtain__label">{label}</span>
        )}
      </div>
    </div>
  );
}
