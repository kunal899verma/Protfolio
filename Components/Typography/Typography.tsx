import React from 'react';
import { motion } from 'framer-motion';

// Typography size variants
type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Base typography props
interface BaseTypographyProps {
  children: React.ReactNode;
  className?: string;
  size?: TypographySize;
  animated?: boolean;
  animationProps?: any;
}

// Size mappings for different typography types
const headingSizes = {
  xs: 'text-lg sm:text-xl',           // Small headings
  sm: 'text-xl sm:text-2xl',          // Card headings
  md: 'text-2xl sm:text-3xl',         // Medium headings
  lg: 'text-3xl sm:text-4xl',         // Large headings
  xl: 'text-4xl sm:text-5xl',         // Main headings
  xxl: 'text-4xl sm:text-5xl lg:text-6xl' // Hero headings
};

const textSizes = {
  xs: 'text-xs sm:text-sm',           // Captions
  sm: 'text-sm sm:text-base',         // Card descriptions
  md: 'text-base sm:text-lg',         // Regular text
  lg: 'text-lg sm:text-xl',           // Large descriptions
  xl: 'text-xl sm:text-2xl',          // Extra large text
  xxl: 'text-2xl sm:text-3xl'        // Huge text
};

// Main Heading Component
export const MainHeading: React.FC<BaseTypographyProps & { as?: 'h1' | 'h2' | 'h3' }> = ({ 
  children, 
  className = '', 
  size = 'xxl', 
  animated = false, 
  animationProps,
  as: Component = 'h1'
}) => {
  const baseClasses = `${headingSizes[size]} font-extrabold leading-tight`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Medium Heading Component
export const MediumHeading: React.FC<BaseTypographyProps & { as?: 'h2' | 'h3' | 'h4' }> = ({ 
  children, 
  className = '', 
  size = 'lg', 
  animated = false, 
  animationProps,
  as: Component = 'h2'
}) => {
  const baseClasses = `${headingSizes[size]} font-bold leading-tight`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Small Heading Component
export const SmallHeading: React.FC<BaseTypographyProps & { as?: 'h3' | 'h4' | 'h5' }> = ({ 
  children, 
  className = '', 
  size = 'md', 
  animated = false, 
  animationProps,
  as: Component = 'h3'
}) => {
  const baseClasses = `${headingSizes[size]} font-semibold leading-tight`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Card Heading Component
export const CardHeading: React.FC<BaseTypographyProps & { as?: 'h4' | 'h5' | 'h6' }> = ({ 
  children, 
  className = '', 
  size = 'sm', 
  animated = false, 
  animationProps,
  as: Component = 'h4'
}) => {
  const baseClasses = `${headingSizes[size]} font-semibold leading-snug`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Description Text Component
export const DescriptionText: React.FC<BaseTypographyProps & { as?: 'p' | 'div' | 'span' }> = ({ 
  children, 
  className = '', 
  size = 'md', 
  animated = false, 
  animationProps,
  as: Component = 'p'
}) => {
  const baseClasses = `${textSizes[size]} leading-relaxed`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Card Description Component
export const CardDescription: React.FC<BaseTypographyProps & { as?: 'p' | 'div' | 'span' }> = ({ 
  children, 
  className = '', 
  size = 'sm', 
  animated = false, 
  animationProps,
  as: Component = 'p'
}) => {
  const baseClasses = `${textSizes[size]} leading-relaxed`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Caption Component
export const Caption: React.FC<BaseTypographyProps & { as?: 'span' | 'div' | 'p' }> = ({ 
  children, 
  className = '', 
  size = 'xs', 
  animated = false, 
  animationProps,
  as: Component = 'span'
}) => {
  const baseClasses = `${textSizes[size]} leading-normal`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Button Text Component
export const ButtonText: React.FC<BaseTypographyProps & { as?: 'span' | 'div' }> = ({ 
  children, 
  className = '', 
  size = 'md', 
  animated = false, 
  animationProps,
  as: Component = 'span'
}) => {
  const baseClasses = `${textSizes[size]} font-semibold leading-none`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Icon Text Component - For emoji icons with text
export const IconText: React.FC<BaseTypographyProps & { as?: 'div' | 'span' }> = ({ 
  children, 
  className = '', 
  size = 'lg', 
  animated = false, 
  animationProps,
  as: Component = 'div'
}) => {
  const baseClasses = `${textSizes[size]} leading-none`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Project Description Component - For project/achievement descriptions
export const ProjectDescription: React.FC<BaseTypographyProps & { as?: 'p' | 'div' | 'span' }> = ({ 
  children, 
  className = '', 
  size = 'md', 
  animated = false, 
  animationProps,
  as: Component = 'p'
}) => {
  const baseClasses = `${textSizes[size]} leading-relaxed`;
  const combinedClasses = `${baseClasses} ${className}`;

  if (animated) {
    return (
      <motion.div {...animationProps}>
        <Component className={combinedClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return <Component className={combinedClasses}>{children}</Component>;
};

// Export alias for MainHeading
export { MainHeading as Heading };
