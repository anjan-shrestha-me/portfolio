import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Programming",
    skills: ["JavaScript", "ES6+", "JSX"],
  },
  {
    title: "UI / Styling",
    skills: [
      "Tailwind CSS",
      "CSS3",
      "Flexbox",
      "Grid",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "npm",
    ],
  },
  {
    title: "Learning",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6 lg:px-10 bg-white dark:bg-[#0B0F19]"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid lg:grid-cols-12 gap-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <SectionHeading
              title="Skills"
              subtitle="Tools and technologies I work with regularly."
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-9"
          >
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`grid md:grid-cols-4 gap-8 py-8 ${
                  index !== skillGroups.length - 1
                    ? "border-b border-slate-300 dark:border-slate-800"
                    : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-slate-300
                        dark:border-slate-700
                        bg-slate-100
                        dark:bg-slate-900
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                        dark:text-slate-200
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-500
                        hover:bg-blue-50
                        dark:hover:bg-slate-800
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;