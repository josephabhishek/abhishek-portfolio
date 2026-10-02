// Animated success checkmark — ring draws, check draws, sparks burst.
export default function SuccessMark() {
  return (
    <div className="success-mark" aria-hidden="true">
      <svg viewBox="0 0 80 80">
        <circle className="sm-ring" cx="40" cy="40" r="36" />
        <path className="sm-check" d="M25 41.5 L35.5 52 L56 30" />
      </svg>
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          className="sm-spark"
          key={i}
          style={{ ["--r" as string]: `${i * 60}deg` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
