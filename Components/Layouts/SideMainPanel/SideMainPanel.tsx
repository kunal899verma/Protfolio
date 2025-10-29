import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useResponsive } from '../../hooks/useResponsive';
import { 
  Home, 
  Code2, 
  FolderOpen, 
  Play, 
  Heart, 
  Mail, 
  BookOpen, 
  MessageSquare,
  Menu,
  Settings,
  Download
} from 'lucide-react';
import { 
  HeroIcon, 
  SectionIcon, 
  CardIcon, 
  ButtonIcon, 
  StatIcon, 
  EmojiIcon 
} from '../../Icons';

interface SideMainPanelProps {
  toggleSideMainMenu: () => void;
  mainActiveSideButton: boolean;
}

const SideMainPanel: React.FC<SideMainPanelProps> = ({ 
  toggleSideMainMenu, 
  mainActiveSideButton 
}) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('explorer');
  const { isMobile, isTablet, isTabletOrMobile, isClient } = useResponsive();

  const activityBarItems = [
    {
      id: 'explorer',
      title: 'Portfolio Home',
      path: '/',
      color: 'text-blue-500',
      hoverColor: 'hover:text-blue-400'
    },
    {
      id: 'search',
      title: 'Technical Skills',
      path: '/Skills',
      color: 'text-yellow-500',
      hoverColor: 'hover:text-yellow-400'
    },
    {
      id: 'source-control',
      title: 'My Projects',
      path: '/Projects',
      color: 'text-green-500',
      hoverColor: 'hover:text-green-400'
    },
    {
      id: 'run',
      title: 'Work Experience',
      path: '/Experience',
      color: 'text-purple-500',
      hoverColor: 'hover:text-purple-400'
    },
    {
      id: 'profile',
      title: 'Contact Me',
      path: '/Email',
      color: 'text-cyan-500',
      hoverColor: 'hover:text-cyan-400'
    }
  ];

  const bottomItems = [
    {
      id: 'resume',
      title: 'Download Resume',
      path: '/Resume/Kunal_Verma_React_NextJS_Developer.pdf',
      color: 'text-orange-500',
      hoverColor: 'hover:text-orange-400',
      isDownload: true
    }
  ];

  const handleItemClick = (itemId: string, path: string, isDownload?: boolean) => {
    setActiveItem(itemId);
    if (isDownload) {
      // Handle resume download
      const link = document.createElement('a');
      link.href = path;
      link.download = 'Kunal_Verma_React_NextJS_Developer.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (path !== router.pathname) {
      router.push(path);
    }
  };

  const getIcon = (itemId: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'explorer': <CardIcon size="sm"><Home /></CardIcon>,
      'search': <CardIcon size="sm"><Code2 /></CardIcon>,
      'source-control': <CardIcon size="sm"><FolderOpen /></CardIcon>,
      'run': <CardIcon size="sm"><Play /></CardIcon>,
      'profile': <CardIcon size="sm"><Mail /></CardIcon>,
      'resume': <CardIcon size="sm"><Download /></CardIcon>
    };
    return icons[itemId] || <CardIcon size="sm"><Settings /></CardIcon>;
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-vscode-activitybar-bg to-vscode-activitybar-bg/95 backdrop-blur-sm border-r border-vscode-border/50 shadow-lg mb-4">
      {/* Mobile/Tablet Menu Button */}
      {isClient && (isMobile || isTablet) && (
        <motion.button
          className="cursor-button w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 border border-transparent hover:border-vscode-accent/50 hover:bg-vscode-hover-background/80 mb-3 mt-2 mx-auto group"
          onClick={toggleSideMainMenu}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(88, 166, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <CardIcon size="sm" className="text-vscode-foreground/80 group-hover:text-vscode-accent transition-colors duration-200"><Menu /></CardIcon>
        </motion.button>
      )}
      
      {/* Top Section */}
      <div className="flex flex-col items-center py-2 space-y-1">
        {activityBarItems.map((item, index) => {
          const isActive = activeItem === item.id;
          
          return (
            <motion.div
              key={item.id}
              className="relative sidebar-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              <Link href={item.path} passHref>
                <motion.button
                  className={`cursor-button w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isActive 
                      ? 'bg-gradient-to-br from-vscode-accent/20 to-vscode-accent/10 text-vscode-accent border border-vscode-accent/50 shadow-lg' 
                      : `${item.color} ${item.hoverColor} border border-transparent hover:border-vscode-accent/30 hover:bg-vscode-hover-background/80`
                  }`}
                  onClick={() => handleItemClick(item.id, item.path)}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: isActive 
                      ? "0 0 20px rgba(88, 166, 255, 0.4)" 
                      : "0 0 15px rgba(88, 166, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-vscode-accent/10 via-transparent to-vscode-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    {getIcon(item.id)}
                  </div>
                </motion.button>
              </Link>

              {/* Enhanced Active Indicator */}
              {isActive && (
                <motion.div
                  className="absolute left-0 top-1/2 w-1.5 h-10 bg-gradient-to-b from-vscode-accent via-vscode-accent to-blue-400 rounded-r-full -translate-y-1/2 shadow-lg"
                  layoutId="activeIndicator"
                  initial={{ scaleY: 0, x: -6 }}
                  animate={{ scaleY: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-vscode-accent rounded-r-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              )}

            </motion.div>
          );
        })}
            </div>

      {/* Divider */}
      <motion.div 
        className="w-8 h-px bg-vscode-border mx-auto my-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />

      {/* Bottom Section */}
      <div className="flex flex-col items-center py-2 space-y-1 mt-auto">
        {bottomItems.map((item, index) => {
          const isActive = activeItem === item.id;
          
          return (
            <motion.div
              key={item.id}
              className="relative sidebar-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.6 + index * 0.05,
                ease: "easeOut"
              }}
            >
              {(item as any).isDownload ? (
                <motion.button
                  className={`cursor-button w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isActive 
                      ? 'bg-gradient-to-br from-vscode-accent/20 to-vscode-accent/10 text-vscode-accent border border-vscode-accent/50 shadow-lg' 
                      : `${item.color} ${item.hoverColor} border border-transparent hover:border-vscode-accent/30 hover:bg-vscode-hover-background/80`
                  }`}
                  onClick={() => handleItemClick(item.id, item.path, (item as any).isDownload)}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: isActive 
                      ? "0 0 20px rgba(88, 166, 255, 0.4)" 
                      : "0 0 15px rgba(88, 166, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-vscode-accent/10 via-transparent to-vscode-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    {getIcon(item.id)}
                  </div>
                </motion.button>
              ) : (
                <Link href={item.path} passHref>
                  <motion.button
                    className={`cursor-button w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group relative overflow-hidden ${
                      isActive 
                        ? 'bg-gradient-to-br from-vscode-accent/20 to-vscode-accent/10 text-vscode-accent border border-vscode-accent/50 shadow-lg' 
                        : `${item.color} ${item.hoverColor} border border-transparent hover:border-vscode-accent/30 hover:bg-vscode-hover-background/80`
                    }`}
                    onClick={() => handleItemClick(item.id, item.path)}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: isActive 
                        ? "0 0 20px rgba(88, 166, 255, 0.4)" 
                        : "0 0 15px rgba(88, 166, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-vscode-accent/10 via-transparent to-vscode-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      {getIcon(item.id)}
                    </div>
                  </motion.button>
                </Link>
              )}

              {/* Enhanced Active Indicator */}
              {isActive && (
                <motion.div
                  className="absolute left-0 top-1/2 w-1.5 h-10 bg-gradient-to-b from-vscode-accent via-vscode-accent to-blue-400 rounded-r-full -translate-y-1/2 shadow-lg"
                  layoutId="activeIndicator"
                  initial={{ scaleY: 0, x: -6 }}
                  animate={{ scaleY: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-vscode-accent rounded-r-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              )}

            </motion.div>
          );
        })}
      </div>

      {/* Enhanced Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-vscode-accent/8 via-transparent to-vscode-accent/8 pointer-events-none rounded-r-lg"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Subtle Shimmer Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vscode-accent/30 to-transparent pointer-events-none"
        animate={{
          x: [-48, 48, -48]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default SideMainPanel;