import { motion } from 'framer-motion';
import { fadeUp, viewportSettings } from '../../utils/animations';

/**
 * SectionHeading
 * @param {string} eyebrow - short mono-font label above the title, e.g. "SEL. WORK"
 * @param {string} title - main section title
 * @param {string} subtitle - optional supporting line below the title
 * @param {'left'|'center'} align
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignStyles = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col gap-sm mb-xl ${alignStyles} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeUp}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-display-l">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-base text-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
