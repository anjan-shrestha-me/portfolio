import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { fadeUp } from '../utils/animations';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-md px-md text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col items-center gap-md"
      >
        <span className="font-display text-6xl font-bold text-accent-primary">
          404
        </span>
        <h1 className="text-display-l">Page not found</h1>
        <p className="max-w-md font-body text-base text-text-secondary">
          The page you're looking for doesn't exist, or may have been moved.
          Let's get you back on track.
        </p>
        <Link to="/" className="mt-sm">
          <Button variant="primary" icon={<FiArrowLeft size={16} />}>
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;