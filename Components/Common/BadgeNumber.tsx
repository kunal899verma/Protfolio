import React from 'react';

interface BadgeNumberProps {
  count: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'aqua' | 'paleBlue' | 'orange' | 'disabled';
  maxCount?: number;
  className?: string;
}

const BadgeNumber: React.FC<BadgeNumberProps> = ({
  count,
  size = 'md',
  color = 'brand',
  maxCount = 99,
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-xs',
    lg: 'w-6 h-6 text-sm'
  };

  const colorMap = {
    brand: 'bg-[#4E61D6] text-white shadow-lg shadow-[#4E61D6]/40',
    success: 'bg-[#26BB5C] text-white shadow-lg shadow-[#26BB5C]/40',
    warning: 'bg-[#FFBA1A] text-[#0A0D12] shadow-lg shadow-[#FFBA1A]/40',
    error: 'bg-[#F04452] text-white shadow-lg shadow-[#F04452]/40',
    neutral: 'bg-[#646E81] text-white shadow-lg shadow-[#646E81]/40',
    aqua: 'bg-[#36A19B] text-white shadow-lg shadow-[#36A19B]/40',
    paleBlue: 'bg-[#226F9B] text-white shadow-lg shadow-[#226F9B]/40',
    orange: 'bg-[#D95300] text-white shadow-lg shadow-[#D95300]/40',
    disabled: 'bg-[#A2AAB8] text-[#F0F2F5] opacity-60'
  };

  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  return (
    <div
      className={`
        ${sizeMap[size]} 
        ${colorMap[color]} 
        rounded-full 
        flex items-center justify-center 
        font-bold
        ${className}
      `}
    >
      {displayCount}
    </div>
  );
};

export default BadgeNumber;
