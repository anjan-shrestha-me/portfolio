import { motion } from "framer-motion";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    location: "Remote",
    duration: "2025 - Present",
    website: "https://github.com/",
    achievements: [
      "Built modern React applications using reusable components.",
      "Developed responsive user interfaces with Tailwind CSS.",
      "Focused on performance, accessibility and clean UI."
    ]
  },
  {
    role: "React Developer",
    company: "Personal Projects",
    location: "Nepal",
    duration: "2024 - Present",
    website: "https://github.com/",
    achievements: [
      "Developed portfolio and dashboard applications.",
      "Worked with React Router, Framer Motion and APIs.",
      "Improved UI/UX with responsive layouts."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionHeading
              title="Experience"
              subtitle="Places I've worked and what I built there."
            />
          </div>
          <div className="lg:col-span-9">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className={`pb-12 ${
                  index !== experiences.length - 1
                    ? "mb-12 border-b border-slate-200 dark:border-slate-800"
                    : ""
                }`}
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-lg">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {exp.company}
                      </span>
                      <span className="text-slate-400">•</span>
                      <FiMapPin
                        size={16}
                        className="text-slate-500"
                      />
                      <span className="text-slate-600 dark:text-slate-400">
                        {exp.location}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-lg leading-8 text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-blue-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <FiExternalLink size={16} />
                      Visit Website
                    </a>
                  </div>
                  <div className="text-lg text-slate-500 dark:text-slate-400 md:text-right">
                    {exp.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;