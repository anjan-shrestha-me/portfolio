import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiUser } from 'react-icons/fi';
import { TESTIMONIALS } from '../../data/testimonials';
import { viewportSettings, fadeUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (nextIndex, dir) => {
    setDirection(dir);
    setIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = index === 0 ? TESTIMONIALS.length - 1 : index - 1;
    goTo(nextIndex, -1);
  };

  const handleNext = () => {
    const nextIndex = index === TESTIMONIALS.length - 1 ? 0 : index + 1;
    goTo(nextIndex, 1);
  };

  const current = TESTIMONIALS[index];

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="w-full px-md py-3xl">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What people say"
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
          className="glass-panel relative mx-auto max-w-2xl overflow-hidden p-2xl text-center"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center gap-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border-glass bg-white/5 text-accent-primary">
                <FiUser size={22} />
              </div>

              <p className="font-display text-lg leading-relaxed text-text-primary sm:text-xl">
                “{current.quote}”
              </p>

              <div className="mt-sm flex flex-col">
                <span className="font-body text-sm font-semibold text-text-primary">
                  {current.name}
                </span>
                <span className="font-mono text-xs text-text-secondary">
                  {current.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-glass bg-white/5 text-text-secondary transition-colors duration-smooth ease-smooth hover:text-accent-primary"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-glass bg-white/5 text-text-secondary transition-colors duration-smooth ease-smooth hover:text-accent-primary"
          >
            <FiChevronRight size={18} />
          </button>
        </motion.div>

        {/* Dot indicators */}
        <div className="mt-md flex justify-center gap-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <button
              key={testimonial.id}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-smooth ease-smooth ${
                i === index ? 'w-6 bg-accent-primary' : 'w-2 bg-border-glass'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
