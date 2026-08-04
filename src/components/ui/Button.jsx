import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  as = "button",
  href,
  icon,
  className = "",
  ...props
}) => {
  const Component = motion[as === "a" ? "a" : "button"];

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-medium transition-all duration-300";

  const primaryStyles =
    "bg-accent-primary text-white hover:opacity-90";

  const secondaryStyles =
    `
    border
    border-slate-300
    bg-white
    text-slate-900
    hover:bg-slate-100

    dark:border-slate-700
    dark:bg-slate-900
    dark:text-white
    dark:hover:bg-slate-800
    `;

  return (
    <Component
      href={as === "a" ? href : undefined}
      className={`${baseStyles} ${
        variant === "primary"
          ? primaryStyles
          : secondaryStyles
      } ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}

      {icon && <span>{icon}</span>}
    </Component>
  );
};

export default Button;