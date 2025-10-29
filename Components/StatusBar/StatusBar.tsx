import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

interface StatusBarProps {
  totalVisits?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ totalVisits }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(timer);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const statusItems = [
    {
      id: 'status',
      icon: <ButtonIcon size="xs" className="text-green-500"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: 'Portfolio Ready',
      color: 'text-green-500'
    },
    {
      id: 'version',
      icon: <ButtonIcon size="xs" className="text-vscode-accent"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: 'v2.0.0',
      color: 'text-vscode-accent'
    },
    {
      id: 'encoding',
      icon: <ButtonIcon size="xs" className="text-vscode-foreground"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: 'UTF-8',
      color: 'text-vscode-foreground'
    },
    {
      id: 'line-ending',
      icon: <ButtonIcon size="xs" className="text-vscode-foreground"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: 'LF',
      color: 'text-vscode-foreground'
    },
    {
      id: 'language',
      icon: <ButtonIcon size="xs" className="text-blue-500"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: 'TypeScript React',
      color: 'text-blue-500'
    }
  ];

  const rightStatusItems = [
    {
      id: 'resume',
      icon: <ButtonIcon size="xs" className="text-orange-500"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v10h10V6H5z" clipRule="evenodd" /><path d="M7 8h6v1H7V8zM7 10h6v1H7v-1zM7 12h4v1H7v-1z" /></svg></ButtonIcon>,
      text: 'Resume',
      color: 'text-orange-500',
      href: '/Resume/Kunal_Verma_React_NextJS_Developer.pdf',
      download: 'Kunal_Verma_React_NextJS_Developer.pdf'
    },
    {
      id: 'visits',
      icon: <ButtonIcon size="xs" className="text-vscode-foreground"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: totalVisits ? `${totalVisits} visits` : 'Loading...',
      color: 'text-vscode-foreground'
    },
    {
      id: 'connection',
      icon: <ButtonIcon size="xs" className={isOnline ? 'text-green-500' : 'text-red-500'}><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: isOnline ? 'Online' : 'Offline',
      color: isOnline ? 'text-green-500' : 'text-red-500'
    },
    {
      id: 'time',
      icon: <ButtonIcon size="xs" className="text-vscode-foreground"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: currentTime.toLocaleTimeString(),
      color: 'text-vscode-foreground'
    },
    {
      id: 'settings',
      icon: <ButtonIcon size="xs" className="text-vscode-foreground"><svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg></ButtonIcon>,
      text: 'Settings',
      color: 'text-vscode-foreground'
    }
  ];

  return (
    <motion.div
      className="h-6 bg-vscode-statusbar-bg text-vscode-statusbar-foreground flex items-center justify-between px-4 text-xs font-fira border-t border-vscode-border"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      {/* Left Section */}
      <motion.div 
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        {statusItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-center space-x-1 cursor-pointer hover:bg-vscode-hover-background px-2 py-1 rounded transition-colors"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
              {item.icon}
            </motion.div>
            <Caption size="xs" className={item.color} as="span">{item.text}</Caption>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        {rightStatusItems.map((item, index) => {
          const Component = (item as any).href ? motion.a : motion.div;
          const componentProps = (item as any).href ? {
            href: (item as any).href,
            download: (item as any).download,
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {};
          
          return (
            <Component
              key={item.id}
              className="flex items-center space-x-1 cursor-pointer hover:bg-vscode-hover-background px-2 py-1 rounded transition-colors"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              {...componentProps}
            >
              <motion.div
                animate={{ 
                  scale: item.id === 'connection' ? [1, 1.1, 1] : 1,
                  rotate: item.id === 'time' ? [0, 360] : 0
                }}
                transition={{ 
                  duration: item.id === 'connection' ? 1 : 0,
                  repeat: item.id === 'connection' ? Infinity : 0,
                  delay: item.id === 'time' ? 0 : 0
                }}
              >
                {item.icon}
              </motion.div>
              <Caption size="xs" className={item.color} as="span">{item.text}</Caption>
            </Component>
          );
        })}
      </motion.div>

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-vscode-accent/10 via-transparent to-vscode-accent/10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
};

export default StatusBar;