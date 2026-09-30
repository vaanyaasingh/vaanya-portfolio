/*
  The wordmark. Type only — no logo. "Vaanya *Singh*" in Newsreader Light,
  surname in italic; the surname turns upright on hover. Every placement
  (nav, menu, intro curtain, footer) uses this.
*/
// Both styles are rendered in one cell and swapped with visibility, so the width is
// always the wider of the two and nothing next to the wordmark moves on hover.
function Surname({ text }) {
  return <i className="wordmark__sur"><span>{text}</span><span aria-hidden="true">{text}</span></i>;
}

export function Wordmark({ size, short = false, className = '' }) {
  return (
    <span className={'wordmark ' + className} style={size ? { fontSize: size } : undefined}>
      {short ? <>V<Surname text="S" /></> : <>Vaanya <Surname text="Singh" /></>}
    </span>
  );
}
