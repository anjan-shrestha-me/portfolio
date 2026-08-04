// Grouped by category so the Skills section can render labeled clusters.
// Split into 5 narrower categories rather than 3 broad ones.
export const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Framer Motion', icon: 'SiFramer' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express', icon: 'SiExpress' },
      { name: 'GraphQL', icon: 'SiGraphql' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Firebase', icon: 'SiFirebase' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Figma', icon: 'SiFigma' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'AWS', icon: 'FaAws' },
      { name: 'Vite', icon: 'SiVite' },
    ],
  },
];