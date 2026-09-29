export function Tag({ tone = 'line', dot = false, children }) {
  return (
    <span className={'tag tag--' + tone}>
      {dot && <span className="tag__dot" />}
      {children}
    </span>
  );
}
