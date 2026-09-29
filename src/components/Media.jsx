/* Image with a hatched pastel placeholder when there's no src yet. */
export function Media({ src, alt = '', tone = 'peach', ratio = '4/3', label = 'image', className = '', radius }) {
  return (
    <div className={'media ' + className} style={{ aspectRatio: ratio, '--tone': `var(--${tone})`, borderRadius: radius }}>
      {src ? <img src={src} alt={alt} loading="lazy" decoding="async" /> : <span className="media__label">{label}</span>}
    </div>
  );
}
