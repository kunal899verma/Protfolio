import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// Base props for all icon components
interface BaseIconProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  animated?: boolean;
  animationProps?: HTMLMotionProps<'div'>;
}

// Helper function to get responsive icon sizes
const getIconSizeClasses = (componentType: string, size: BaseIconProps['size']) => {
  switch (componentType) {
    case 'HeroIcon':
      switch (size) {
        case 'xxl': return 'flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-6xl sm:text-7xl lg:text-8xl';
        case 'xl': return 'flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-5xl sm:text-6xl lg:text-7xl';
        case 'lg': return 'flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-4xl sm:text-5xl lg:text-6xl';
        case 'md': return 'flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-3xl sm:text-4xl lg:text-5xl';
        default: return 'flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-5xl sm:text-6xl lg:text-7xl'; // Default for HeroIcon
      }
    case 'SectionIcon':
      switch (size) {
        case 'xl': return 'flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-4xl sm:text-5xl lg:text-6xl';
        case 'lg': return 'flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-3xl sm:text-4xl lg:text-5xl';
        case 'md': return 'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-2xl sm:text-3xl lg:text-4xl';
        case 'sm': return 'flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-xl sm:text-2xl lg:text-3xl';
        default: return 'flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-3xl sm:text-4xl lg:text-5xl'; // Default for SectionIcon
      }
    case 'CardIcon':
      switch (size) {
        case 'lg': return 'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-2xl sm:text-3xl';
        case 'md': return 'flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-xl sm:text-2xl';
        case 'sm': return 'flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-lg sm:text-xl';
        case 'xs': return 'flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-base sm:text-lg';
        default: return 'flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-xl sm:text-2xl'; // Default for CardIcon
      }
    case 'ButtonIcon':
      switch (size) {
        case 'lg': return 'flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7';
        case 'md': return 'flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6';
        case 'sm': return 'flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5';
        case 'xs': return 'flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4';
        default: return 'flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6'; // Default for ButtonIcon
      }
    case 'StatIcon':
      switch (size) {
        case 'lg': return 'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-2xl sm:text-3xl';
        case 'md': return 'flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-xl sm:text-2xl';
        case 'sm': return 'flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-lg sm:text-xl';
        default: return 'flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-xl sm:text-2xl'; // Default for StatIcon
      }
    case 'EmojiIcon':
      switch (size) {
        case 'xxl': return 'flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl';
        case 'xl': return 'flex items-center justify-center text-5xl sm:text-6xl lg:text-7xl';
        case 'lg': return 'flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl';
        case 'md': return 'flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl';
        case 'sm': return 'flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl';
        case 'xs': return 'flex items-center justify-center text-xl sm:text-2xl lg:text-3xl';
        default: return 'flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl'; // Default for EmojiIcon
      }
    default:
      return '';
  }
};

const createIconComponent = (
  componentType: string,
  defaultSize: BaseIconProps['size']
) => {
  const IconComponent: React.FC<BaseIconProps & { as?: React.ElementType }> = ({
    children,
    className,
    size = defaultSize,
    animated = false,
    animationProps,
    as: Component = 'div',
    ...rest
  }) => {
    const iconSizeClasses = getIconSizeClasses(componentType, size);
    const combinedClasses = twMerge(iconSizeClasses, className);

    if (animated) {
      return (
        <motion.div className={combinedClasses} {...animationProps} {...rest}>
          {children}
        </motion.div>
      );
    }

    return <Component className={combinedClasses} {...rest}>{children}</Component>;
  };
  return IconComponent;
};

// Hero Icons - For main page hero sections
export const HeroIcon = createIconComponent('HeroIcon', 'xl');

// Section Icons - For section headers and main content areas
export const SectionIcon = createIconComponent('SectionIcon', 'lg');

// Card Icons - For cards, project items, skill items
export const CardIcon = createIconComponent('CardIcon', 'md');

// Button Icons - For buttons and interactive elements
export const ButtonIcon = createIconComponent('ButtonIcon', 'md');

// Stat Icons - For statistics and metrics
export const StatIcon = createIconComponent('StatIcon', 'md');

// Emoji Icons - For emoji-based icons (text-based sizing)
export const EmojiIcon = createIconComponent('EmojiIcon', 'lg');

// Export alias for HeroIcon
export { HeroIcon as Icon };
