// Shared Framer Motion variants
// Import these into any component that needs scroll-reveal or stagger animation
// so timing/easing stays consistent site-wide.

export const EASE = [0.4, 0, 0.2, 1]; // matches tailwind's transition-smooth

// Simple fade + slide up — used for most section reveals
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Fade only — used when prefers-reduced-motion-safe content or subtle elements
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Container variant — wraps a list of children, staggers their entrance
export const staggerContainer = (staggerDelay = 0.08, initialDelay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});

// Hero-specific: slightly larger movement for bigger, more dramatic entrance
export const heroItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Card hover lift — used on ProjectCard, Testimonial cards
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.25, ease: EASE },
  },
};

// Shared viewport settings for scroll-triggered reveals
// `once: true` = animate in only the first time it enters view (no replay on scroll-up)
export const viewportSettings = { once: true, amount: 0.2 };
