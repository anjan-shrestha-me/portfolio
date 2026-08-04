import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { PROJECTS } from '../data/projects';
import { staggerContainer, fadeUp } from '../utils/animations';
import PageWrapper from '../components/layout/PageWrapper';
import ProjectCard from '../components/sections/ProjectCard';

const AllProjects = () => {
  return (
    <PageWrapper>
      <Link
        to="/"
        className="mb-lg inline-flex items-center gap-2 font-body text-sm text-text-secondary transition-colors duration-smooth ease-smooth hover:text-accent-primary"
      >
        <FiArrowLeft size={16} /> Back to home
      </Link>

      <h1 className="text-display-l mb-2">All Projects</h1>
      <p className="mb-xl max-w-xl font-body text-base text-text-secondary">
        Every project I've built and shipped, not just the featured few — web
        apps, mobile, and developer tools.
      </p>

      <motion.div
        className="grid grid-cols-1 gap-lg md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.08)}
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.slug} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </PageWrapper>
  );
};

export default AllProjects;