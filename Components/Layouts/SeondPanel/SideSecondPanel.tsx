import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useResponsive } from "../../hooks/useResponsive";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  ChevronRight, 
  Folder, 
  FolderOpen,
  FileText,
  Code2,
  Database,
  Mail,
  Heart,
  MessageSquare,
  BookOpen,
  Gamepad2,
  Tv,
  GraduationCap,
  Rocket,
  Clock,
  GitBranch,
  Home,
  User,
  Briefcase,
  Settings,
  Coffee,
  Star,
  Zap,
  Search,
  Filter
} from "lucide-react";

interface IProps {
  closeSideMenu: () => void;
}

export const SideSecondPanel: React.FC<IProps> = (props: any) => {
  const [expandedSections, setExpandedSections] = useState({
    portfolio: true,
    projects: true,
    contact: false
  });
  
  const { isMobile, isTablet, isTabletOrMobile } = useResponsive();
  const router = useRouter();
  const [activeFile, setActiveFile] = useState("");

  useEffect(() => {
    const currentPath = router.asPath;
    
    // Map routes to active files
    if (currentPath === "/") {
      setActiveFile("index.html");
    } else if (currentPath === "/Experience") {
      setActiveFile("experience.css");
    } else if (currentPath === "/Skills") {
      setActiveFile("skills.js");
    } else if (currentPath === "/Projects") {
      setActiveFile("projects.ts");
    } else if (currentPath.includes("/Projects/kama-ayurveda")) {
      setActiveFile("kama-ayurveda.tsx");
    } else if (currentPath.includes("/Projects/dozee-healthcare")) {
      setActiveFile("dozee-healthcare.tsx");
    } else if (currentPath.includes("/Projects/hdfc-bank-baas")) {
      setActiveFile("hdfc-bank-baas.tsx");
    } else if (currentPath.includes("/Projects/atomberg-smart-appliances")) {
      setActiveFile("atomberg-smart-appliances.tsx");
    } else if (currentPath.includes("/Projects/sequifi-hr-platform")) {
      setActiveFile("sequifi-hr-platform.tsx");
    } else if (currentPath === "/Email") {
      setActiveFile("Email.tsx");
    } else {
      setActiveFile("");
    }
  }, [router.asPath]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // File type icons with modern styling
  const getFileIcon = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    const iconProps = { className: "w-4 h-4", strokeWidth: 1.5 };
    
    switch (ext) {
      case 'html': return <FileText {...iconProps} className="w-4 h-4 text-orange-400" />;
      case 'css': return <Code2 {...iconProps} className="w-4 h-4 text-blue-400" />;
      case 'js': return <Code2 {...iconProps} className="w-4 h-4 text-yellow-400" />;
      case 'ts': case 'tsx': return <Database {...iconProps} className="w-4 h-4 text-blue-500" />;
      case 'jsx': return <Code2 {...iconProps} className="w-4 h-4 text-cyan-400" />;
      case 'py': return <Code2 {...iconProps} className="w-4 h-4 text-green-400" />;
      case 'cpp': return <Code2 {...iconProps} className="w-4 h-4 text-purple-400" />;
      case 'sln': return <Code2 {...iconProps} className="w-4 h-4 text-indigo-400" />;
      default: return <FileText {...iconProps} className="w-4 h-4 text-vscode-foreground/60" />;
    }
  };

  // Modern section component
  const SectionHeader = ({ 
    title, 
    icon, 
    isExpanded, 
    onToggle, 
    count 
  }: {
    title: string;
    icon: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
    count?: number;
  }) => (
    <motion.div
      className="flex items-center justify-between px-3 py-2 cursor-pointer group hover:bg-vscode-hover-background/50 rounded-lg transition-all duration-200"
      onClick={onToggle}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-2">
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-3 h-3 text-vscode-foreground/60" />
        </motion.div>
        <div className="text-vscode-accent group-hover:text-vscode-accent-hover transition-colors duration-200">
          {icon}
              </div>
        <span className="text-xs font-medium text-vscode-foreground/90 uppercase tracking-wider group-hover:text-vscode-foreground transition-colors duration-200">
          {title}
        </span>
            </div>
      {count && (
        <motion.span 
          className="text-xs text-vscode-foreground/50 bg-vscode-hover-background px-2 py-0.5 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {count}
        </motion.span>
      )}
    </motion.div>
  );

  // Modern file item component
  const FileItem = ({ 
    filename, 
    path, 
    isActive 
  }: {
    filename: string;
    path: string;
    isActive: boolean;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ x: 4 }}
    >
      <Link 
        href={path}
        className={`flex items-center space-x-3 px-6 py-2 cursor-pointer group transition-all duration-200 rounded-lg mx-2 no-underline ${
          isActive 
            ? 'bg-vscode-selection-bg/20 border-l-2 border-vscode-accent text-vscode-accent' 
            : 'hover:bg-vscode-hover-background/30 text-vscode-foreground/80 hover:text-vscode-foreground'
        }`}
      >
        <div className={`transition-colors duration-200 ${
          isActive ? 'text-vscode-accent' : 'group-hover:text-vscode-accent'
        }`}>
          {getFileIcon(filename)}
        </div>
        <span className="text-sm font-medium truncate flex-1">
          {filename}
        </span>
        {isActive && (
          <motion.div
            className="w-1.5 h-1.5 bg-vscode-accent rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Link>
    </motion.div>
  );

  return (
    <div className="h-full bg-gradient-to-b from-vscode-sidebar-bg via-vscode-sidebar-bg/98 to-vscode-sidebar-bg/95 backdrop-blur-sm font-cursor overflow-x-hidden overflow-y-hidden flex flex-col border-r border-vscode-border/30 w-full min-w-0">
      {/* Modern Header */}
      <motion.div 
        className="px-4 py-4 border-b border-vscode-border/20 bg-gradient-to-r from-vscode-sidebar-bg to-vscode-sidebar-bg/90"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-6 h-6 bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-lg flex items-center justify-center border border-vscode-accent/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Folder className="w-3 h-3 text-vscode-accent" />
            </motion.div>
            <h5 className="text-sm font-semibold text-vscode-foreground/90">
              EXPLORER
            </h5>
          </div>
          <div className="flex items-center space-x-1">
            <motion.button
              className="p-1.5 rounded-md hover:bg-vscode-hover-background/50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="w-3 h-3 text-vscode-foreground/60" />
            </motion.button>
            <motion.button
              className="p-1.5 rounded-md hover:bg-vscode-hover-background/50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Filter className="w-3 h-3 text-vscode-foreground/60" />
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Profile Section */}
      <motion.div 
        className="px-4 py-3 border-b border-vscode-border/20 bg-gradient-to-r from-vscode-sidebar-bg/50 to-vscode-sidebar-bg/30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-8 h-8 bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-lg flex items-center justify-center overflow-hidden border border-vscode-accent/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/profile-image.jpg"
              alt="Kunal Verma"
              width={32}
              height={32}
              className="w-full h-full object-cover rounded-md"
            />
          </motion.div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-vscode-foreground truncate">Kunal Verma</p>
            <p className="text-xs text-vscode-foreground/60 truncate">Senior Frontend Developer</p>
          </div>
        </div>
      </motion.div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-vscode-border/20 hover:scrollbar-thumb-vscode-border/40 py-2 space-y-1 w-full min-w-0">
        
        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <SectionHeader
            title="Portfolio"
            icon={<Home className="w-4 h-4" />}
            isExpanded={expandedSections.portfolio}
            onToggle={() => toggleSection('portfolio')}
            count={4}
          />
          <AnimatePresence>
            {expandedSections.portfolio && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-1 py-1"
              >
                <FileItem filename="index.html" path="/" isActive={activeFile === "index.html"} />
                <FileItem filename="experience.css" path="/Experience" isActive={activeFile === "experience.css"} />
                <FileItem filename="skills.js" path="/Skills" isActive={activeFile === "skills.js"} />
                <FileItem filename="projects.ts" path="/Projects" isActive={activeFile === "projects.ts"} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SectionHeader
            title="Projects"
            icon={<Briefcase className="w-4 h-4" />}
            isExpanded={expandedSections.projects}
            onToggle={() => toggleSection('projects')}
            count={5}
          />
          <AnimatePresence>
            {expandedSections.projects && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-1 py-1"
              >
                <FileItem filename="KamaAyurveda.tsx" path="/Projects/kama-ayurveda" isActive={activeFile === "kama-ayurveda.tsx"} />
                <FileItem filename="DozeeHealthcare.tsx" path="/Projects/dozee-healthcare" isActive={activeFile === "dozee-healthcare.tsx"} />
                <FileItem filename="HDFCBankBaaS.tsx" path="/Projects/hdfc-bank-baas" isActive={activeFile === "hdfc-bank-baas.tsx"} />
                <FileItem filename="AtombergSmart.tsx" path="/Projects/atomberg-smart-appliances" isActive={activeFile === "atomberg-smart-appliances.tsx"} />
                <FileItem filename="SequifiHR.tsx" path="/Projects/sequifi-hr-platform" isActive={activeFile === "sequifi-hr-platform.tsx"} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <SectionHeader
            title="Contact"
            icon={<Mail className="w-4 h-4" />}
            isExpanded={expandedSections.contact}
            onToggle={() => toggleSection('contact')}
            count={1}
          />
          <AnimatePresence>
            {expandedSections.contact && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-1 py-1"
              >
                <FileItem filename="Email.tsx" path="/Email" isActive={activeFile === "Email.tsx"} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modern Footer with Recent Files */}
      <motion.div 
        className="border-t border-vscode-border/20 bg-gradient-to-r from-vscode-sidebar-bg to-vscode-sidebar-bg/90 p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 text-vscode-accent" />
            <span className="text-xs font-medium text-vscode-foreground/70 uppercase tracking-wider">
              Recent
            </span>
          </div>
          <span className="text-xs text-vscode-foreground/40">
            {new Date().toLocaleTimeString().slice(0, 5)}
          </span>
        </div>
        
        <div className="space-y-1">
          <motion.div 
            className="flex items-center space-x-2 text-xs text-vscode-foreground/60 hover:text-vscode-foreground/80 cursor-pointer transition-colors duration-200"
            whileHover={{ x: 2 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>index.html</span>
            <span className="ml-auto text-vscode-foreground/40">now</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-2 text-xs text-vscode-foreground/60 hover:text-vscode-foreground/80 cursor-pointer transition-colors duration-200"
            whileHover={{ x: 2 }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>projects.ts</span>
            <span className="ml-auto text-vscode-foreground/40">2m</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-2 text-xs text-vscode-foreground/60 hover:text-vscode-foreground/80 cursor-pointer transition-colors duration-200"
            whileHover={{ x: 2 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>skills.js</span>
            <span className="ml-auto text-vscode-foreground/40">5m</span>
          </motion.div>
      </div>
      </motion.div>
    </div>
  );
};