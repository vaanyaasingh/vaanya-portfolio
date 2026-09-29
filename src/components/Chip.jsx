export function Chip({ active = false, count, onClick, children }) {
  return (
    <button type="button" className={'chip' + (active ? ' is-active' : '')} aria-pressed={active} onClick={onClick}>
      <span>{children}</span>
      {count != null && <span className="chip__count">{String(count).padStart(2, '0')}</span>}
    </button>
  );
}
