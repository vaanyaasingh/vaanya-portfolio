import { Reveal, SplitHeading } from './Reveal.jsx';

/* Mono index label + word-rise heading, with an optional italic note on the right. */
export function SectionHead({ label, parts, note, wide }) {
  return (
    <div className="sec-head">
      <div className="sec-head__title">
        <Reveal as="span" className="label">{label}</Reveal>
        <SplitHeading className="h1" parts={parts} />
      </div>
      {note && <Reveal as="p" delay={120} className={'sec-head__note' + (wide ? ' is-wide' : '')}>{note}</Reveal>}
    </div>
  );
}
