import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';

import Contact from '../components/sections/Contact';

/**
 * Home
 * Single-page layout — sections are full-width and scrolled between
 * via the Navbar's react-scroll links, not routed separately.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </>
  );
};

export default Home;
