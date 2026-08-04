/**
 * Badge
 * Small pill used for tech-stack tags, category labels, etc.
 * @param {'default'|'accent'} variant
 */
const Badge = ({ children, variant = 'default', className = '' }) => {
  const variantStyles =
    variant === 'accent'
      ? 'bg-accent-primary/10 text-accent-primary border-accent-primary/30'
      : 'bg-white/5 text-text-secondary border-border-glass';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-wide ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
