import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { getProjectBySlug } from '../data/projects';
import { fadeUp, viewportSettings } from '../utils/animations';
import PageWrapper from '../components/layout/PageWrapper';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageWrapper>
      <Link
        to="/"
        className="mb-lg inline-flex items-center gap-2 font-body text-sm text-text-secondary transition-colors duration-smooth ease-smooth hover:text-accent-primary"
      >
        <FiArrowLeft size={32} /> Back to all projects
      </Link>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col gap-md"
      >
        <span className="font-mono text-xs uppercase tracking-wide text-accent-primary">
          {project.category} · {project.year}
        </span>
        <h1 className="text-display-l">{project.title}</h1>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-sm flex flex-wrap gap-md">
          {project.liveUrl && (
            <Button as="a" href={project.liveUrl} variant="primary" icon={<FiExternalLink size={16} />}>
              Live Site
            </Button>
          )}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeUp}
        className="glass-panel mt-xl overflow-hidden !p-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeUp}
        className="mt-xl grid grid-cols-1 gap-lg lg:grid-cols-3"
      >
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Overview
          </h3>

          <p className="leading-8 text-slate-600 dark:text-slate-300">
            {project.longDescription}
          </p>
        </div>

        <div className="glass-panel flex flex-col gap-md p-lg lg:col-span-1">
          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Role
            </span>
            <p className="font-body text-sm text-slate-900 dark:text-white">
              {project.role}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Year
            </span>
            <p className="font-body text-sm text-slate-900 dark:text-white">
              {project.year}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Category
            </span>
            <p className="font-body text-sm text-slate-900 dark:text-white">
              {project.category}
            </p>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default ProjectDetail;