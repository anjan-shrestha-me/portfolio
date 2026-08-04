import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1280px]">

        <div className="grid gap-20 lg:grid-cols-12">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3"
          >

            <SectionHeading
              title="Projects"
              subtitle="Some of my favorite work built with React, JavaScript and modern frontend technologies."
            />

            <p className="mt-8 leading-8 text-slate-600 dark:text-slate-400">
              These are projects that demonstrate my frontend development
              skills, responsive UI design, reusable components and modern
              React development practices.
            </p>

            <Link
              to="/projects"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                text-lg
                font-semibold
                text-blue-600
                transition
                hover:gap-5
              "
            >
              View All

              <FiArrowRight size={20} />
            </Link>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="grid gap-8 md:grid-cols-2 lg:col-span-9"
          >

            {PROJECTS.slice(0,4).map((project,index)=>(
              <ProjectCard
                key={project.id || index}
                project={project}
              />
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Projects;