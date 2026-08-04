import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';

const ICON_MAP = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaEnvelope: FaEnvelope,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-glass px-md py-lg">
      <div className="mx-auto flex max-w-content flex-col items-center gap-md sm:flex-row sm:justify-between">
        <p className="font-body text-sm text-text-secondary">
          © {year} {PERSONAL_INFO.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-md">
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICON_MAP[social.icon];
            return (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="text-text-secondary transition-colors duration-smooth ease-smooth hover:text-accent-primary"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
