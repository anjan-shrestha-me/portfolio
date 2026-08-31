import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:shadow-2xl
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-4 leading-8 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {(project.tags || project.tech)?.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-slate-300
                px-3
                py-1
                text-xs
                font-medium
                text-slate-700
                dark:border-slate-700
                dark:text-slate-300
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">

          <Link
            to={`/projects/${project.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-blue-600
              hover:gap-3
              transition-all
            "
          >
            Read More
            <FiArrowUpRight />
          </Link>

          <div className="flex gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 transition hover:text-blue-600"
                title="GitHub Repository"
              >
                <FiGithub size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 transition hover:text-blue-600"
                title="Live Site"
              >
                <FiArrowUpRight size={20} />
              </a>
            )}
          </div>

        </div>

      </div>

    </motion.article>
  );
};

export default ProjectCard;