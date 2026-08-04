import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from 'react-icons/fi';

import {
  NAV_LINKS,
  PERSONAL_INFO,
  SCROLL_CONFIG,
} from '../../utils/constants';

import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useTheme } from '../../context/ThemeContext';

const SECTION_IDS = NAV_LINKS.map((link) => link.to);

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeSection = useScrollSpy(SECTION_IDS);

  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
  <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <ScrollLink
          to="hero"
          {...SCROLL_CONFIG}
          className="cursor-pointer font-display text-lg font-bold"
        >
          {PERSONAL_INFO.name}
          <span className="text-accent-primary">.</span>
        </ScrollLink>

        {/* Desktop Navigation */}

        <ul className="hidden items-center gap-lg md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                {...SCROLL_CONFIG}
                className={`relative cursor-pointer font-medium transition-all duration-300 ${activeSection === link.to
                    ? 'text-accent-primary'
                    : 'text-slate-700 dark:text-slate-300 hover:text-accent-primary'
                  }`}
              >
                {link.label}

                {activeSection === link.to && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-accent-primary"
                  />
                )}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110"
            aria-label="Toggle Theme"
          >
            {theme === 'dark'
              ? <FiSun size={18} />
              : <FiMoon size={18} />}
          </button>

          {/* Mobile Menu */}

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-glass md:hidden"
          >
            {isMobileOpen
              ? <FiX size={20} />
              : <FiMenu size={20} />}
          </button>

        </div>

      </nav>

      {/* Mobile Navigation */}

      <AnimatePresence>

        {isMobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-panel absolute top-[80px] left-md right-md rounded-md p-lg md:hidden"
          >
            <div className="flex flex-col gap-5">

              {NAV_LINKS.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  {...SCROLL_CONFIG}
                  onClick={closeMobileMenu}
                  className="cursor-pointer text-text-secondary hover:text-accent-primary"
                >
                  {link.label}
                </ScrollLink>
              ))}

            </div>
          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
};

export default Navbar;