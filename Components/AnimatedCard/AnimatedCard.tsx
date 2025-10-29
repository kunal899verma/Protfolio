import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CardHeading, CardDescription } from '../Typography';

interface AnimatedCardProps {
  title: string;
  description: string;
  href: string;
  gradient: string;
  icon: React.ReactNode;
  delay: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  href,
  gradient,
  icon,
  delay
}) => {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <Link href={href}>
        <div className="cursor-pointer h-full">
          {/* AI Neural Glow */}
          <div className="absolute inset-0 ai-neural-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* AI-Enhanced Card */}
          <div className="relative ai-glass-card neo-shadow-light border border-vscode-border/50 rounded-2xl p-4 sm:p-6 hover:border-vscode-accent/50 transition-all duration-500 overflow-hidden h-full flex flex-col min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
            
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-vscode-accent/20 to-transparent rounded-bl-3xl opacity-30"></div>
            
            {/* Icon */}
            <div className="relative z-10 mb-4 sm:mb-6">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 ai-holographic-icon neo-shadow-light rounded-xl flex items-center justify-center border border-vscode-accent/40 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="quantum-pulse"></div>
                <div className="text-vscode-accent relative z-10 text-xl sm:text-2xl">{icon}</div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <CardHeading 
                  size="sm"
                  className="text-vscode-foreground mb-3 group-hover:text-vscode-accent transition-colors duration-300"
                  as="h4"
                >
                  {title}
                </CardHeading>
                <CardDescription 
                  size="sm"
                  className="text-vscode-foreground/70 leading-relaxed flex-1 mb-4"
                >
                  {description}
                </CardDescription>
              </div>

              {/* Explore Button - Always visible on mobile/tablet, hover on desktop */}
              <div className="flex items-center text-vscode-accent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Explore</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnimatedCard;