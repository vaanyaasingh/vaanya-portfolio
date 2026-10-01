/* Image with a hatched pastel placeholder when there's no src yet. */
export function Media({ src, alt = '', tone = 'peach', ratio = '4/3', label = 'image', className = '', radius }) {
  return (
    <div className={'media ' + className} style={{ aspectRatio: ratio, '--tone': `var(--${tone})`, borderRadius: radius }}>
      {src ? <img src={src} alt={alt} loading="lazy" decoding="async" /> : <span className="media__label">{label}</span>}
    </div>
  );
}

/* A light MacBook drawn around a screen: lid with a bezel and camera, then the base. */
export function Laptop({ children, className = '' }) {
  return (
    <div className={'laptop ' + className}>
      <div className="laptop__lid">{children}</div>
      <div className="laptop__base" aria-hidden="true" />
    </div>
  );
}
