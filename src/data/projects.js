// Each project slug must be unique — used for /projects/:slug routing
export const PROJECTS = [
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Web Application',
    description:
      'A responsive expense tracking application that helps users manage income and expenses with real-time balance calculations.',
    longDescription:
      'Expense Tracker is a React-based personal finance application that enables users to record income and expenses, monitor their current balance, and organize transaction history. The application uses Local Storage to persist data between sessions, eliminating the need for a backend. It features a clean, responsive interface, real-time financial summaries, transaction filtering, and an intuitive user experience built with reusable React components.',
    tags: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Local Storage',
      'Responsive Design'
    ],
    image: '/images/expense-tracker.jpg',
    liveUrl: 'https://your-live-demo.vercel.app',
    year: '2026',
    role: 'Frontend Developer',
    featured: true,
  },
  {
    slug: 'weather-forecast',
    title: 'Weather Forecast App',
    category: 'Web Application',
    description:
      'A responsive weather application that provides real-time weather, a 3-day forecast, and detailed weather information for cities worldwide.',
    longDescription:
      'Weather Forecast App is a modern React application that allows users to search weather conditions for any city. It displays current temperature, weather conditions, humidity, wind speed, pressure, local time, and a 3-day forecast in a clean, responsive interface. Built using React, Tailwind CSS, and WeatherAPI, the project focuses on API integration, state management, reusable components, and responsive UI design.',
    tags: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'WeatherAPI',
      'React Icons',
      'Responsive Design',
    ],
    image: '/images/weather-forecast.jpg',
    liveUrl: 'https://your-live-demo.vercel.app',
    repoUrl: 'https://github.com/yourusername/weather-forecast',
    year: '2026',
    role: 'Frontend Developer',
    featured: true,
  },
];

export const getProjectBySlug = (slug) =>
  PROJECTS.find((project) => project.slug === slug);

export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.featured);
