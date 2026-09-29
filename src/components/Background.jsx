/* Fixed mesh-gradient field under the whole site. All four presets are stacked
   and cross-fade when the page changes; only the active one drifts. Grain sits
   on top of the gradient (not over content, so text stays crisp and scroll stays cheap). */
const VARIANTS = ['dawn', 'dusk', 'meadow', 'night'];

export function Background({ variant = 'dawn' }) {
  return (
    <div className="bg" aria-hidden="true">
      {VARIANTS.map((v) => (
        <div key={v} className={'bg__layer' + (v === variant ? ' is-active' : '')} style={{ background: `var(--gradient-${v})` }} />
      ))}
      <div className="bg__grain" />
    </div>
  );
}
