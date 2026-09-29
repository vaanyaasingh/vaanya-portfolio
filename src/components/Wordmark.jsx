/*
  The wordmark. Type only — no logo. "Vaanya *Singh*" in Newsreader Light,
  surname in italic; the surname turns upright on hover. Every placement
  (nav, menu, intro curtain, footer) uses this.
*/
export function Wordmark({ size, short = false, className = '' }) {
  return (
    <span className={'wordmark ' + className} style={size ? { fontSize: size } : undefined}>
      {short ? <>V<i className="wordmark__sur">S</i></> : <>Vaanya <i className="wordmark__sur">Singh</i></>}
    </span>
  );
}
