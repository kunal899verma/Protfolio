import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
// import { useMediaQuery } from "react-responsive"; // Removed to fix loading issue
import { SideSecondPanel } from "./SeondPanel/SideSecondPanel";
import SideMainPanel from "./SideMainPanel/SideMainPanel";
import TabBar from "../TabBar/TabBar";
import StatusBar from "../StatusBar/StatusBar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Loading from "../Loading/Loading";
import { useErrorHandler, safeArray, safeString } from "../hooks/useErrorHandler";
import Link from "next/link";
import { projectsdata } from "../JSON/projectsdata";
import { useResponsive } from "../hooks/useResponsive";
import { 
  Code2, 
  FileText, 
  Edit3, 
  Eye, 
  Navigation, 
  Play, 
  Terminal, 
  HelpCircle,
  Minus,
  Square,
  X,
  GitBranch,
  Wifi,
  Battery,
  Volume2
} from "lucide-react";

const Layout: React.FC = ({ children, visitorsCount }: any) => {
  const { isMobile, isTablet, isDesktop, isTabletOrMobile, isClient } = useResponsive();
  const [VisitorCount, setVisitorCount] = useState("");
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openTabs, setOpenTabs] = useState<any[]>([
    { id: 'home', label: 'index.html', path: '/', icon: 'home' }
  ]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { error, isError, clearError } = useErrorHandler();

  const router = useRouter();


  // Responsive sidebar behavior - handles device size changes in real-time
  useEffect(() => {
    if (isMobile) {
      // Don't automatically close sidebar on mobile - let user control it
      setSidebarCollapsed(true);
    } else if (isTablet) {
      setOpenSideMenu(false);
      setSidebarCollapsed(false);
    } else if (isDesktop) {
      setOpenSideMenu(true);
      setSidebarCollapsed(false);
    }
  }, [isMobile, isTablet, isDesktop]);

  // Close sidebar on route change for mobile (only when navigating to a new page)
  useEffect(() => {
    // Only close on actual route changes, not on initial load or state changes
    const handleRouteChange = () => {
      if (isMobile && openSideMenu) {
        setOpenSideMenu(false);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isMobile, openSideMenu, router.events]);


  // Tab management with elegant animations
  const handleTabManagement = useCallback(() => {
    const path = router.pathname;
    const query = router.query;
    
    // For dynamic routes, use the actual path with query params
    let actualPath = path;
    if (path === '/Projects/[projectname]' && query.projectname) {
      actualPath = `/Projects/${query.projectname}`;
    }
    
    setOpenTabs(prev => {
      const tabExists = prev.some(tab => tab.path === actualPath);
      
      if (!tabExists) {
        const tabConfig = getTabConfig(actualPath);
        return [...prev, tabConfig];
      }
      return prev;
    });
  }, [router.pathname, router.query]);

  useEffect(() => {
    handleTabManagement();
  }, [handleTabManagement]);

  // Track visited files for Recent section
  useEffect(() => {
    const path = router.pathname;
    const query = router.query;
    
    // For dynamic routes, use the actual path with query params
    let actualPath = path;
    if (path === '/Projects/[projectname]' && query.projectname) {
      actualPath = `/Projects/${query.projectname}`;
    }
    
    const tabConfig = getTabConfig(actualPath);
    
    if (typeof window !== "undefined") {
      const existingFiles = localStorage.getItem("recentFiles");
      let recentFiles = existingFiles ? JSON.parse(existingFiles) : [];
      
      // Remove if already exists to avoid duplicates
      recentFiles = recentFiles.filter((file: any) => file.path !== actualPath);
      
      // Add to beginning of array
      recentFiles.unshift({
        name: tabConfig.label,
        path: actualPath,
        timestamp: Date.now()
      });
      
      // Keep only last 10 files
      recentFiles = recentFiles.slice(0, 10);
      
      localStorage.setItem("recentFiles", JSON.stringify(recentFiles));
    }
  }, [router.pathname, router.query]);

  const getTabConfig = (path: string) => {
    const configs: any = {
      '/': { id: 'home', label: 'index.html', path: '/', icon: 'home' },
      '/Experience': { id: 'experience', label: 'experience.css', path: '/Experience', icon: 'briefcase' },
      '/Skills': { id: 'skills', label: 'skills.js', path: '/Skills', icon: 'code' },
      '/Projects': { id: 'projects', label: 'projects.ts', path: '/Projects', icon: 'folder' },
      '/Email': { id: 'email', label: 'Email.tsx', path: '/Email', icon: 'mail' },
    };
    
    if (path.startsWith('/Projects/')) {
      const projectId = path.split('/').pop();
      let cleanProjectName = 'Project';
      
      if (projectId) {
        // If it's a number (like "1", "2", etc.), get the actual project name from data
        if (/^\d+$/.test(projectId)) {
          const projectIndex = parseInt(projectId) - 1;
          const projects = projectsdata();
          if (projects[projectIndex] && projects[projectIndex].name) {
            cleanProjectName = projects[projectIndex].name;
          } else {
            // Fallback to a more descriptive name
            cleanProjectName = `Project-${projectId}`;
          }
        } else {
          // Clean up project name for better display
          cleanProjectName = projectId
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/\[|\]/g, ''); // Remove brackets
        }
      }
      
      return { 
        id: `project-${projectId}`, 
        label: `${cleanProjectName}.tsx`, 
        path, 
        icon: 'react' 
      };
    }
    
    return configs[path] || { id: 'unknown', label: 'untitled', path, icon: '' };
  };

  const handleTabClose = (tabId: string) => {
    // Prevent closing the home tab (index page)
    if (tabId === 'home') {
      return;
    }
    
    const tabToClose = openTabs.find(tab => tab.id === tabId);
    const remainingTabs = openTabs.filter(tab => tab.id !== tabId);
    
    // If we're closing the currently active tab, navigate to another tab
    if (tabToClose && tabToClose.path === router.pathname && remainingTabs.length > 0) {
      // Find the tab that was opened before the current one, or go to the last remaining tab
      const currentIndex = openTabs.findIndex(tab => tab.id === tabId);
      const previousTab = currentIndex > 0 ? openTabs[currentIndex - 1] : remainingTabs[remainingTabs.length - 1];
      router.push(previousTab.path);
    }
    
    setOpenTabs(remainingTabs);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && router.pathname !== "/") {
      let recentLinks: any = localStorage.getItem("history");
      recentLinks = recentLinks ? JSON.parse(recentLinks) : [];
      recentLinks = recentLinks.slice(0, 4);
      recentLinks = recentLinks.filter(
        (link: string) => link !== window.location.pathname
      );
      recentLinks.unshift(window.location.pathname);
      localStorage.setItem("history", JSON.stringify(recentLinks));
    }
  }, [router.pathname]);

  // Loading animation - only show on initial load
  useEffect(() => {
    // Always hide loading after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []); // Only run once on mount

  // Performance optimization - prevent unnecessary re-renders
  useEffect(() => {
    const handleRouteChange = () => {
      // Close sidebar on mobile when navigating
      if (isMobile && openSideMenu) {
        setOpenSideMenu(false);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [isMobile, openSideMenu, router.events]);

  if (isLoading) {
    return <Loading message="Loading Portfolio..." fullScreen={true} />;
  }
  
  return (
    <ErrorBoundary>
      <div className="h-screen bg-vscode-editor-bg text-vscode-foreground font-cursor flex flex-col overflow-hidden">
      {/* Enhanced Title Bar - Hidden on mobile/tablet, visible on desktop */}
      {!isMobile && !isTablet && (
            <motion.div
              className="h-9 topbar-container bg-gradient-to-r from-vscode-titlebar-bg to-vscode-titlebar-bg/95 backdrop-blur-sm border-b border-vscode-border/50 flex items-center justify-between px-4 relative z-50 shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ 
                willChange: 'transform, opacity'
              }}
            >
          {/* Left Section - Logo & Menu */}
          <div className="flex items-center space-x-6">
            <motion.div 
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-5 h-5 bg-gradient-to-br from-vscode-accent to-blue-400 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Code2 className="w-3 h-3 text-white" />
              </motion.div>
              <span className="text-sm font-semibold text-vscode-foreground group-hover:text-vscode-accent transition-colors duration-200">
                Portfolio Studio
              </span>
            </motion.div>
            
            <div className="flex items-center space-x-0.5">
              {[
                { name: 'File', icon: <FileText className="w-3 h-3" /> },
                { name: 'Edit', icon: <Edit3 className="w-3 h-3" /> },
                { name: 'View', icon: <Eye className="w-3 h-3" /> },
                { name: 'Go', icon: <Navigation className="w-3 h-3" /> },
                { name: 'Run', icon: <Play className="w-3 h-3" /> },
                { name: 'Terminal', icon: <Terminal className="w-3 h-3" /> },
                { name: 'Help', icon: <HelpCircle className="w-3 h-3" /> }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  className="cursor-button flex items-center space-x-1.5 px-3 py-1.5 text-xs rounded-md hover:bg-vscode-hover-background/80 transition-all duration-200 group"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                >
                  <span className="text-vscode-accent/70 group-hover:text-vscode-accent transition-colors duration-200">
                    {item.icon}
                  </span>
                  <span className="text-vscode-foreground/80 group-hover:text-vscode-foreground transition-colors duration-200">
                    {item.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Center Section - Title */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-vscode-foreground/70 font-medium">
              Kunal Verma - Portfolio
            </span>
          </motion.div>

          {/* Right Section - Controls */}
          <div className="flex items-center space-x-3">
            <motion.div
              className="flex items-center space-x-2 text-xs text-vscode-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>React 18.2.0</span>
              <div className="w-1 h-1 bg-vscode-foreground/30 rounded-full"></div>
              <span>Next.js 13</span>
            </motion.div>
            
            <div className="flex items-center space-x-1">
              {[
                { action: 'minimize', color: 'bg-yellow-500 hover:bg-yellow-400', icon: <Minus className="w-2 h-2" /> },
                { action: 'maximize', color: 'bg-green-500 hover:bg-green-400', icon: <Square className="w-2 h-2" /> },
                { action: 'close', color: 'bg-red-500 hover:bg-red-400', icon: <X className="w-2 h-2" /> }
              ].map((control, index) => (
                <motion.button
                  key={control.action}
                  className={`w-3 h-3 rounded-full flex items-center justify-center ${control.color} transition-all duration-200 shadow-sm hover:shadow-md`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0, rotate: 180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                >
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-200">
                    {control.icon}
                  </span>
                </motion.button>
              ))}
            </div>
      </div>
        </motion.div>
      )}

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <motion.nav 
            className="w-12 h-full border-r border-vscode-border bg-vscode-activitybar-bg flex flex-col items-center relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <SideMainPanel
            toggleSideMainMenu={() => setOpenSideMenu(!openSideMenu)}
            mainActiveSideButton={openSideMenu}
          />
        </motion.nav>

        {/* Mobile Overlay - Only show on mobile, not tablet */}
        {isClient && isMobile && openSideMenu && (
          <motion.div
            className="fixed top-0 bottom-0 bg-black bg-opacity-50 z-30"
            style={{ 
              left: '320px', // Start after sidebar width on mobile
              right: '0'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenSideMenu(false)}
          />
        )}

        {/* Sidebar */}
        <AnimatePresence>
          {openSideMenu && (
            <motion.aside
              className={`${
                isClient && isMobile 
                  ? 'fixed top-0 left-12 right-0 bottom-0 z-50 w-auto h-full max-w-80' 
                  : isClient && isTablet 
                    ? 'w-56 z-50' 
                    : 'w-64 z-50'
              } bg-vscode-sidebar-bg border-r border-vscode-border flex flex-col h-full overflow-y-auto shadow-xl pointer-events-auto`}
              initial={{ 
                width: isClient && isMobile ? 0 : 0, 
                opacity: 0,
                x: isClient && isMobile ? -300 : -256
              }}
              animate={{ 
                width: isClient && isMobile ? 'auto' : isClient && isTablet ? 224 : 256, 
                opacity: 1,
                x: 0
              }}
              exit={{ 
                width: isClient && isMobile ? 0 : 0, 
                opacity: 0,
                x: isClient && isMobile ? -300 : -256
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
            <SideSecondPanel closeSideMenu={() => setOpenSideMenu(false)} />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-vscode-editor-bg overflow-hidden">
          {/* Tab Bar */}
          <motion.div
            className="bg-vscode-tab-background border-b border-vscode-border flex-shrink-0 overflow-x-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TabBar 
              tabs={openTabs} 
              activeTab={router.pathname}
              onTabClose={handleTabClose}
            />
          </motion.div>
          
          {/* Editor Content */}
          <motion.main
            className={`flex-1 bg-vscode-editor-bg relative overflow-y-auto ${
              isClient && isMobile ? 'pb-20' : 'pb-18 md:pb-16'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {children}
            </motion.div>
          </motion.main>
        </div>
      </div>

      {/* Enhanced VS Code Style Status Bar */}
          <motion.div
            className={`fixed bottom-0 left-0 right-0 bottombar-container bg-gradient-to-r from-vscode-statusbar-bg to-vscode-statusbar-bg/95 backdrop-blur-sm border-t border-vscode-border/50 ${
              isClient && isMobile ? 'h-9' : 'h-7'
            } flex items-center justify-between ${
              isClient && isMobile ? 'px-3' : 'px-4'
            } text-xs text-vscode-statusbar-foreground font-cursor z-50 shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            style={{ 
              willChange: 'transform, opacity'
            }}
          >
        {/* Left Section - Status Items */}
        <div className={`flex items-center ${
          isClient && isMobile ? 'space-x-2' : 'space-x-3'
        }`}>
          <motion.div 
            className={`flex items-center space-x-2 cursor-pointer hover:bg-vscode-hover-background/80 ${
              isClient && isMobile ? 'px-2 py-1' : 'px-3 py-1.5'
            } rounded-md transition-all duration-200 group`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div 
              className={`${isClient && isMobile ? 'w-2 h-2' : 'w-2.5 h-2.5'} bg-green-400 rounded-full shadow-sm`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400 font-medium group-hover:text-green-300 transition-colors duration-200">
              {isClient && isMobile ? 'Live' : 'Portfolio Live'}
            </span>
          </motion.div>
          
          {isClient && !isMobile && (
            <>
              <motion.div 
                className="flex items-center space-x-2 cursor-pointer hover:bg-vscode-hover-background/80 px-3 py-1.5 rounded-md transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <GitBranch className="w-3 h-3 text-vscode-accent" />
                <span className="text-vscode-foreground/80 group-hover:text-vscode-foreground transition-colors duration-200">
                  main
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2 cursor-pointer hover:bg-vscode-hover-background/80 px-3 py-1.5 rounded-md transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-vscode-foreground/80 group-hover:text-vscode-foreground transition-colors duration-200">
                  UTF-8
                </span>
              </motion.div>
            </>
          )}
        </div>

        {/* Center Section - Current File Info */}
        {!isMobile && (
          <motion.div 
            className="flex items-center space-x-4 text-vscode-foreground/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex items-center space-x-2">
              <Code2 className="w-3 h-3 text-vscode-accent" />
              <span>TypeScript React</span>
            </div>
            <div className="w-1 h-1 bg-vscode-foreground/30 rounded-full"></div>
            <span>Ln 1, Col 1</span>
          </motion.div>
        )}

        {/* Right Section - System Info */}
        <div className={`flex items-center ${
          isClient && isMobile ? 'space-x-2' : 'space-x-3'
        }`}>
          {isClient && !isMobile && (
            <>
              <motion.div 
                className="flex items-center space-x-2 cursor-pointer hover:bg-vscode-hover-background/80 px-3 py-1.5 rounded-md transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Wifi className="w-3 h-3 text-green-400" />
                <span className="text-vscode-foreground/80 group-hover:text-vscode-foreground transition-colors duration-200">
                  Connected
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2 cursor-pointer hover:bg-vscode-hover-background/80 px-3 py-1.5 rounded-md transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-vscode-foreground/80 group-hover:text-vscode-foreground transition-colors duration-200">
                  Spaces: 2
                </span>
              </motion.div>
            </>
          )}
          
          <motion.div 
            className={`flex items-center space-x-2 cursor-pointer hover:bg-vscode-hover-background/80 ${
              isClient && isMobile ? 'px-2 py-1' : 'px-3 py-1.5'
            } rounded-md transition-all duration-200 group relative`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <motion.div 
                className="absolute inset-0 w-2 h-2 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-vscode-foreground/80 group-hover:text-vscode-foreground transition-colors duration-200">
              {isClient && isMobile ? '0' : 'No Issues'}
            </span>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </ErrorBoundary>
  );
};

export default Layout;