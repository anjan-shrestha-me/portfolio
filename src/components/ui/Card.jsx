import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animations';

/**
 * Card
 * Base glass surface used across Project cards, Testimonials, About, Contact.
 * @param {boolean} hoverLift - if true, applies the lift+scale hover animation (for clickable cards)
 * @param {string} as - element/motion type to render ('div' by default)
 */
const Card = ({
  children,
  hoverLift = false,
  as: Tag = 'div',
  className = '',
  ...props
}) => {
  if (!hoverLift) {
    return (
      <Tag className={`glass-panel p-lg ${className}`} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      className={`glass-panel p-lg cursor-pointer ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
