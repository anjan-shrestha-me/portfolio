import { motion } from 'framer-motion';

/**
 * PageWrapper
 * Wraps routed pages (ProjectDetail, NotFound) with consistent
 * max-width/padding and a simple fade-in transition on route change.
 * Home is NOT wrapped in this since it manages its own full-width sections.
 */
const PageWrapper = ({ children, className = '' }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`mx-auto min-h-screen w-full max-w-content px-md pt-[120px] pb-2xl ${className}`}
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
