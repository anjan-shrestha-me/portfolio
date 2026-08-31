import { TypeAnimation } from "react-type-animation";
import { scroller } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

import {
  PERSONAL_INFO,
  SOCIAL_LINKS,
  SCROLL_CONFIG,
} from "../../utils/constants";

import Button from "../ui/Button";

const ICON_MAP = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
};

const buildSequence = (roles) =>
  roles.flatMap((item) => [item, 2000]);

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-28 lg:pt-20 flex items-center"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="order-1 flex justify-center lg:order-2">
            <img
              src={PERSONAL_INFO.photo}
              alt={PERSONAL_INFO.name}
              className="
                w-full
                max-w-[260px]
                sm:max-w-[320px]
                md:max-w-[360px]
                lg:max-w-[420px]
                h-auto
                rounded-3xl
                object-cover
                shadow-2xl
              "
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <p className="mb-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Open to Frontend Developer roles and internships
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-violet-600">
              <TypeAnimation
                sequence={buildSequence(PERSONAL_INFO.taglineRoles)}
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-400">
              I build beautiful, fast and responsive web applications using
              React, JavaScript and modern frontend technologies.
              I love creating clean interfaces with smooth user experiences.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">

              <Button onClick={() => scroller.scrollTo("projects", SCROLL_CONFIG)}>
                View Projects
              </Button>

              <Button
                variant="secondary"
                as="a"
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>

            </div>

            <div className="mt-10 flex justify-center lg:justify-start gap-4">

              {SOCIAL_LINKS.map((social) => {
                const Icon = ICON_MAP[social.icon];

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-300
                      text-slate-700
                      transition-all
                      duration-300
                      hover:bg-violet-600
                      hover:text-white
                      dark:border-slate-700
                      dark:text-white
                    "
                  >
                    <Icon size={20} />
                  </a>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;