import React from 'react';

interface BadgeDotProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'aqua' | 'paleBlue' | 'orange' | 'disabled';
  className?: string;
}

const BadgeDot: React.FC<BadgeDotProps> = ({
  size = 'md',
  color = 'brand',
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };

  const colorMap = {
    brand: 'bg-[#4E61D6] shadow-lg shadow-[#4E61D6]/40',
    success: 'bg-[#26BB5C] shadow-lg shadow-[#26BB5C]/40',
    warning: 'bg-[#FFBA1A] shadow-lg shadow-[#FFBA1A]/40',
    error: 'bg-[#F04452] shadow-lg shadow-[#F04452]/40',
    neutral: 'bg-[#646E81] shadow-lg shadow-[#646E81]/40',
    aqua: 'bg-[#36A19B] shadow-lg shadow-[#36A19B]/40',
    paleBlue: 'bg-[#226F9B] shadow-lg shadow-[#226F9B]/40',
    orange: 'bg-[#D95300] shadow-lg shadow-[#D95300]/40',
    disabled: 'bg-[#A2AAB8] opacity-60'
  };

  return (
    <div
      className={`${sizeMap[size]} ${colorMap[color]} rounded-full ${className}`}
    />
  );
};

export default BadgeDot;
