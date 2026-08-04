// Ordered newest-first — the Experience timeline renders these in array order.
// `bullets` replaces the old single `description` paragraph — short,
// scannable achievement points read faster in a timeline than prose.
export const EXPERIENCE = [
  {
    id: 'exp-01',
    role: 'Senior Frontend Engineer',
    company: 'Nimbus Technologies',
    period: '2023 — Present',
    location: 'Remote',
    bullets: [
      'Leading frontend architecture for a B2B analytics platform used by 200+ customer teams.',
      'Mentoring 3 junior engineers through code review and pairing.',
      'Drove adoption of a shared component library across 4 product teams.',
    ],
    tags: ['React', 'TypeScript', 'Design Systems'],
  },
  {
    id: 'exp-02',
    role: 'Full-Stack Developer',
    company: 'Orbit Labs',
    period: '2021 — 2023',
    location: 'San Francisco, CA',
    bullets: [
      'Built and shipped Orbit CMS from zero to first paying customer.',
      'Owned the API layer, editor UI, and deployment pipeline end-to-end.',
      'Reduced average page load time by 40% via edge caching.',
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'exp-03',
    role: 'Frontend Developer',
    company: 'Studio Forge',
    period: '2019 — 2021',
    location: 'Austin, TX',
    bullets: [
      'Built marketing sites and web apps for a range of startup clients.',
      'Worked directly with designers to translate Figma files into pixel-accurate builds.',
      'Introduced a component-driven workflow that cut delivery time by a third.',
    ],
    tags: ['React', 'Figma', 'GSAP'],
  },
];