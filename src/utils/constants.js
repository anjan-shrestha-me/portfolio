// Personal info — edit these to update the whole site
export const PERSONAL_INFO = {
  name: 'Anjan Shrestha',
  photo: "/images/profile.jpg", 
  location: "Kathmandu, Nepal", 
  role: 'Frontend Developer',
  taglineRoles: [
    'Frontend Developer',
    'React Engineer',
    // 'UI/UX Enthusiast',
    // 'Open Source Contributor',
  ],
  email: 'anjan.shrestha.tech@gmail.com',
  resumeUrl: '/resume.pdf',
};

// Primary navigation — used by Navbar for both desktop and mobile menus
export const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  // { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

// Social links — used by Hero and Footer
export const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/anjan-shrestha-me', icon: 'FaGithub' },
  { label: 'LinkedIn', url: 'https://linkedin.com/', icon: 'FaLinkedin' },
  // { label: 'Twitter', url: 'https://twitter.com/', icon: 'FaTwitter' },
  { label: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=anjan.shrestha.tech@gmail.com', icon: 'FaEnvelope' },
];

// EmailJS config — replace with your own IDs from emailjs.com dashboard
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Scroll-spy / react-scroll shared settings
export const SCROLL_CONFIG = {
  duration: 10,
  smooth: true,
  offset: -80, // accounts for fixed navbar height
};
