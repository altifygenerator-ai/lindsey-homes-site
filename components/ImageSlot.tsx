type Props = {
  eyebrow?: string;
  title?: string;
  className?: string;
  aspect?: "wide" | "portrait" | "square";
  src?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  showLabel?: boolean;
};

export function ImageSlot({
  eyebrow = "Lindsey Homes",
  title = "Project photography",
  className = "",
  aspect = "wide",
  src,
  alt,
  loading = "lazy",
  showLabel = true,
}: Props) {
  const classes = `image-slot image-slot--${aspect} ${src ? "image-slot--photo" : ""} ${className}`.trim();

  return (
    <div className={classes} role={!src ? "img" : undefined} aria-label={!src ? `${title} photography` : undefined}>
      {src ? (
        <img className="image-slot-photo" src={src} alt={alt || title} loading={loading} decoding="async" />
      ) : (
        <span className="image-slot-corner" aria-hidden="true" />
      )}
      {showLabel ? (
        <div className="image-slot-copy">
          {eyebrow ? <span>{eyebrow}</span> : null}
          {title ? <strong>{title}</strong> : null}
        </div>
      ) : null}
    </div>
  );
}
