import React from 'react';

interface CustomBadgeProps {
  backgroundColor?: string;
  textColor?: string;
  px?: string;
  py?: string;
  cursor?: boolean;
  id?: string;
  onClick?: () => void;
  label?: string;
  fontSize?: number;
  fontWeight?: number;
  opacity?: boolean;
  style?: React.CSSProperties;
  className?: string;
  rounded?: boolean;
  variant?: 'filled' | 'outline' | 'plain' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  color?: 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'aqua' | 'paleBlue' | 'orange' | 'disabled';
  icon?: React.ReactNode;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
  backgroundColor = null,
  textColor = 'blue',
  px = '3',
  py = '1',
  cursor = false,
  id = null,
  onClick = null,
  label = null,
  fontSize = 12,
  fontWeight = 500,
  opacity = true,
  style = null,
  className = null,
  rounded = true,
  variant = 'filled',
  size = 'md',
  color = 'brand',
  icon = null
}) => {
  // Professional Color Palette - Sequifi Design System
  const getColorClasses = (color: string, variant: string) => {
    const colorStyles = {
      brand: {
        filled: 'bg-[#4E61D6] text-white border border-[#6078EC] hover:bg-[#6078EC] hover:text-white',
        outline: 'border border-[#4E61D6] text-[#6078EC] bg-[#4E61D6]/10 hover:bg-[#4E61D6]/20 backdrop-blur-sm',
        plain: 'text-[#6078EC] bg-[#4E61D6]/15 border-none hover:bg-[#4E61D6]/25 backdrop-blur-sm',
        glow: 'bg-[#4E61D6] text-white border border-[#6078EC] shadow-lg shadow-[#4E61D6]/30 hover:shadow-[#4E61D6]/50'
      },
      success: {
        filled: 'bg-[#26BB5C] text-white border border-[#62E994] hover:bg-[#62E994] hover:text-white',
        outline: 'border border-[#26BB5C] text-[#62E994] bg-[#26BB5C]/10 hover:bg-[#26BB5C]/20 backdrop-blur-sm',
        plain: 'text-[#62E994] bg-[#26BB5C]/15 border-none hover:bg-[#26BB5C]/25 backdrop-blur-sm',
        glow: 'bg-[#26BB5C] text-white border border-[#62E994] shadow-lg shadow-[#26BB5C]/30 hover:shadow-[#26BB5C]/50'
      },
      warning: {
        filled: 'bg-[#FFBA1A] text-[#0A0D12] border border-[#FFD166] hover:bg-[#FFD166] hover:text-[#0A0D12]',
        outline: 'border border-[#FFBA1A] text-[#FFD166] bg-[#FFBA1A]/10 hover:bg-[#FFBA1A]/20 backdrop-blur-sm',
        plain: 'text-[#FFD166] bg-[#FFBA1A]/15 border-none hover:bg-[#FFBA1A]/25 backdrop-blur-sm',
        glow: 'bg-[#FFBA1A] text-[#0A0D12] border border-[#FFD166] shadow-lg shadow-[#FFBA1A]/30 hover:shadow-[#FFBA1A]/50'
      },
      error: {
        filled: 'bg-[#F04452] text-white border border-[#FF808A] hover:bg-[#FF808A] hover:text-white',
        outline: 'border border-[#F04452] text-[#FF808A] bg-[#F04452]/10 hover:bg-[#F04452]/20 backdrop-blur-sm',
        plain: 'text-[#FF808A] bg-[#F04452]/15 border-none hover:bg-[#F04452]/25 backdrop-blur-sm',
        glow: 'bg-[#F04452] text-white border border-[#FF808A] shadow-lg shadow-[#F04452]/30 hover:shadow-[#F04452]/50'
      },
      neutral: {
        filled: 'bg-[#646E81] text-white border border-[#828999] hover:bg-[#828999] hover:text-white',
        outline: 'border border-[#646E81] text-[#828999] bg-[#646E81]/10 hover:bg-[#646E81]/20 backdrop-blur-sm',
        plain: 'text-[#828999] bg-[#646E81]/15 border-none hover:bg-[#646E81]/25 backdrop-blur-sm',
        glow: 'bg-[#646E81] text-white border border-[#828999] shadow-lg shadow-[#646E81]/30 hover:shadow-[#646E81]/50'
      },
      aqua: {
        filled: 'bg-[#36A19B] text-white border border-[#79D2CE] hover:bg-[#79D2CE] hover:text-white',
        outline: 'border border-[#36A19B] text-[#79D2CE] bg-[#36A19B]/10 hover:bg-[#36A19B]/20 backdrop-blur-sm',
        plain: 'text-[#79D2CE] bg-[#36A19B]/15 border-none hover:bg-[#36A19B]/25 backdrop-blur-sm',
        glow: 'bg-[#36A19B] text-white border border-[#79D2CE] shadow-lg shadow-[#36A19B]/30 hover:shadow-[#36A19B]/50'
      },
      paleBlue: {
        filled: 'bg-[#226F9B] text-white border border-[#8CC5D6] hover:bg-[#8CC5D6] hover:text-white',
        outline: 'border border-[#226F9B] text-[#8CC5D6] bg-[#226F9B]/10 hover:bg-[#226F9B]/20 backdrop-blur-sm',
        plain: 'text-[#8CC5D6] bg-[#226F9B]/15 border-none hover:bg-[#226F9B]/25 backdrop-blur-sm',
        glow: 'bg-[#226F9B] text-white border border-[#8CC5D6] shadow-lg shadow-[#226F9B]/30 hover:shadow-[#226F9B]/50'
      },
      orange: {
        filled: 'bg-[#D95300] text-white border border-[#FBB074] hover:bg-[#FBB074] hover:text-white',
        outline: 'border border-[#D95300] text-[#FBB074] bg-[#D95300]/10 hover:bg-[#D95300]/20 backdrop-blur-sm',
        plain: 'text-[#FBB074] bg-[#D95300]/15 border-none hover:bg-[#D95300]/25 backdrop-blur-sm',
        glow: 'bg-[#D95300] text-white border border-[#FBB074] shadow-lg shadow-[#D95300]/30 hover:shadow-[#D95300]/50'
      },
      disabled: {
        filled: 'bg-[#F0F2F5] text-[#A2AAB8] border border-[#D0D6DE] cursor-not-allowed opacity-60',
        outline: 'border border-[#A2AAB8] text-[#A2AAB8] bg-[#F0F2F5]/30 cursor-not-allowed opacity-60 backdrop-blur-sm',
        plain: 'text-[#A2AAB8] bg-[#F0F2F5]/20 border-none cursor-not-allowed opacity-60 backdrop-blur-sm',
        glow: 'bg-[#A2AAB8] text-white border border-[#D0D6DE] cursor-not-allowed opacity-60'
      }
    };

    return colorStyles[color]?.[variant] || colorStyles.neutral[variant];
  };

  // Size mapping with content-based width and consistent height
  const sizeMap = {
    sm: 'text-xs px-2.5 py-1.5 min-h-[28px] w-auto',
    md: 'text-sm px-3 py-2 min-h-[32px] w-auto',
    lg: 'text-base px-4 py-2.5 min-h-[36px] w-auto'
  };

  const colorClasses = getColorClasses(color, variant);
  
  const baseClasses = `
    inline-flex items-center justify-center transition-all duration-200 backdrop-blur-sm
    ${rounded ? 'rounded-full' : 'rounded-lg'}
    ${sizeMap[size]}
    ${colorClasses}
    ${cursor ? 'cursor-pointer hover:scale-105 hover:shadow-lg' : 'cursor-default'}
    whitespace-nowrap
    ${className || ''}
  `.trim();

  return (
    <span
      id={id}
      key={`CustomBadge-${id}`}
      onClick={onClick}
      className={baseClasses}
      style={{
        fontSize,
        fontWeight: fontWeight || 600,
        ...style,
      }}
    >
      {icon && (
        <span className="inline-flex items-center mr-1">
          {icon}
        </span>
      )}
      {label}
    </span>
  );
};

export default CustomBadge;
