import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { safeArray, safeString } from '../hooks/useErrorHandler';
import { useResponsive } from '../hooks/useResponsive';
import { 
  HeroIcon, 
  SectionIcon, 
  CardIcon, 
  ButtonIcon, 
  StatIcon, 
  EmojiIcon 
} from '../Icons';
import { 
  MainHeading, 
  MediumHeading, 
  SmallHeading, 
  CardHeading, 
  DescriptionText, 
  CardDescription, 
  Caption,
  ButtonText
} from '../Typography';
import { 
  FileText, 
  Code2, 
  Palette, 
  Database, 
  Mail, 
  Gamepad2, 
  BookOpen, 
  Rocket, 
  Brain,
  Home,
  X,
  XCircle,
  Minus,
  Square
} from 'lucide-react';

interface ITab {
  id: string;
  label: string;
  path: string;
  icon?: string;
}

interface TabBarProps {
  tabs: ITab[];
  activeTab: string;
  onTabClose: (tabId: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabClose }) => {
  // Error handling for props
  const safeTabs = safeArray(tabs, []);
  const safeActiveTab = safeString(activeTab, '');
  const { isMobile, isTablet } = useResponsive();
  
  if (safeTabs.length === 0) {
    return (
      <div className="flex items-stretch bg-vscode-tab-background border-b border-vscode-border min-h-[40px]">
        <div className="flex items-center px-4 text-vscode-muted">
          <Caption size="xs">No tabs open</Caption>
        </div>
      </div>
    );
  }
  const getFileIcon = (label: string) => {
    const extension = label.split('.').pop()?.toLowerCase();
    
    const iconMap: { [key: string]: JSX.Element } = {
      'html': (
        <ButtonIcon size="xs" className="text-orange-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </ButtonIcon>
      ),
      'css': (
        <ButtonIcon size="xs" className="text-blue-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      ),
      'js': (
        <ButtonIcon size="xs" className="text-yellow-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      ),
      'ts': (
        <ButtonIcon size="xs" className="text-blue-600">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      ),
      'tsx': (
        <ButtonIcon size="xs" className="text-cyan-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      ),
      'jsx': (
        <ButtonIcon size="xs" className="text-cyan-400">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      ),
      'py': (
        <ButtonIcon size="xs" className="text-green-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      ),
      'cpp': (
        <ButtonIcon size="xs" className="text-purple-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      )
    };

    return iconMap[extension || ''] || (
      <ButtonIcon size="xs" className="text-gray-500">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
        </svg>
      </ButtonIcon>
    );
  };

  return (
    <div className={`flex items-stretch bg-vscode-tab-background border-b border-vscode-border overflow-x-auto backdrop-blur-sm tabbar-scrollbar ${
      isMobile ? 'min-h-[36px]' : 'min-h-[40px]'
    }`}>
      <AnimatePresence mode="popLayout">
        {safeTabs.map((tab, index) => {
          const isActive = safeActiveTab === tab.path;
          const isHomeTab = tab.id === 'home';
          
          return (
            <motion.div
              key={tab.id}
              className={`cursor-button flex items-center ${
                isMobile 
                  ? 'min-w-[80px] max-w-[120px]' 
                  : isTablet 
                    ? 'min-w-[100px] max-w-[150px]' 
                    : 'min-w-[120px] max-w-[200px]'
              } group relative border-r border-vscode-border/30 transition-all duration-300 ${
                isActive 
                  ? 'bg-vscode-tab-active-background text-vscode-tab-active-foreground shadow-lg' 
                  : 'text-vscode-tab-inactive-foreground hover:text-vscode-foreground hover:bg-vscode-hover-background/50'
              }`}
              style={{ flexShrink: 0 }}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut"
              }}
              layout
              whileHover={{
                backgroundColor: isActive ? undefined : 'rgba(255, 255, 255, 0.05)',
                boxShadow: isActive ? "0 0 15px rgba(88, 166, 255, 0.2)" : "0 0 10px rgba(88, 166, 255, 0.1)"
              }}
            >
            <Link href={tab.path} className="flex-1 min-w-0" passHref>
              <div className={`flex items-center ${
                isMobile ? 'px-2 py-1' : 'px-3 py-2'
              } h-full min-w-0`}>
                <div className={`${isMobile ? 'mr-1' : 'mr-2'} flex-shrink-0`}>
                  {getFileIcon(tab.label)}
                </div>
                
                <Caption 
                  size="xs" 
                  className="font-cursor truncate flex-1 min-w-0"
                  as="span"
                >
                  {isMobile ? tab.label.split('.')[0] : tab.label}
                </Caption>
              </div>
            </Link>

            {/* Close Button - Hidden for home tab */}
            {!isHomeTab && (
              <motion.button
                className={`cursor-button flex items-center justify-center ${
                  isMobile ? 'w-5 h-5 mr-1' : 'w-6 h-6 mr-2'
                } opacity-70 hover:opacity-100 hover:bg-vscode-hover-background rounded flex-shrink-0 z-10 transition-all duration-200`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
                title="Close tab"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
              </motion.button>
            )}

            {/* Active Tab Indicator */}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-vscode-accent"
                layoutId="activeTab"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            )}
            
            {/* Home Tab Badge */}
            {isHomeTab && (
              <motion.div
                className="absolute top-1 right-1 w-2 h-2 bg-vscode-accent rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              />
            )}
          </motion.div>
        );
        })}
      </AnimatePresence>

      {/* Add Tab Button */}
      <motion.button
        className={`flex items-center justify-center ${
          isMobile ? 'w-6 h-6 mx-1' : 'w-8 h-8 mx-2'
        } hover:bg-vscode-hover-background rounded transition-all duration-200 border border-vscode-border/30 hover:border-vscode-accent/50`}
        whileHover={{ 
          scale: 1.05, 
          backgroundColor: 'rgba(88, 166, 255, 0.1)',
          boxShadow: "0 0 10px rgba(88, 166, 255, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        title="Add new tab"
      >
        <ButtonIcon size="xs" className="text-vscode-foreground">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </ButtonIcon>
      </motion.button>
    </div>
  );
};

export default TabBar;