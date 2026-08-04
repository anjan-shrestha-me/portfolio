import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiExternalLink,
} from "react-icons/fi";

import SectionHeading from "../ui/SectionHeading";

const education = [
  {
    year: "2023 - Present",
    title: "Bachelor in Computer Science and Information Technology",
    school: "Tribhuvan University",
  },
  {
    year: "2021 - 2023",
    title: "+2 Science",
    school: "Bhawani Vidyapeeth Secondary School",
  },
];

const certifications = [
  {
    title: "React.js Development",
    provider: "Self Learning",
  },
  {
    title: "Web Design",
    provider: "CODEIT",
    url: "/certificates/webdesign.pdf"
  },

];

const About = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3"
          >
            <SectionHeading
              title="About"
              subtitle="A little about me and what I'm working on."
            />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-9 space-y-8"
          >

            <p className="text-lg leading-9 text-slate-600 dark:text-slate-400">
              I'm a passionate Frontend Developer specializing in React,
              JavaScript and modern web technologies. I enjoy creating
              responsive, fast and user-friendly websites that provide
              excellent user experiences.
            </p>

            <p className="text-lg leading-9 text-slate-600 dark:text-slate-400">
              My goal is to become a professional Full Stack Developer.
              Every day I improve my problem solving skills while building
              real-world projects using React, Tailwind CSS and modern
              frontend tools.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">

              {/* Education */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
                className="rounded-3xl border border-slate-300 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >

                <div className="mb-8 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    <FiBookOpen
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Education
                  </h3>

                </div>

                <div className="space-y-8">

                  {education.map((item, index) => (

                    <div key={index}>

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.year}
                      </p>

                      <h4 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-slate-600 dark:text-slate-400">
                        {item.school}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>

              {/* Certifications */}

              {/* Certifications */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-slate-300 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    <FiAward
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-5">
                  {certifications.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
                    >
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>

                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {item.provider}
                        </p>
                      </div>

                      <FiExternalLink
                        size={20}
                        className="text-blue-600"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>



            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;