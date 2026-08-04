import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border-glass bg-white/5 transition-colors duration-smooth ease-smooth hover:border-accent-primary/50"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25 }}
        className="text-text-primary"
      >
        {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
