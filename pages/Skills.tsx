import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { useErrorHandler, safeArray } from "../Components/hooks/useErrorHandler";
import { CustomBadge, BadgeDot } from "../Components/Common";
import Loading from "../Components/Loading/Loading";
import { 
  MainHeading, 
  MediumHeading, 
  SmallHeading, 
  CardHeading, 
  DescriptionText, 
  CardDescription, 
  Caption,
  IconText,
  ProjectDescription
} from "../Components/Typography";
import { 
  HeroIcon, 
  SectionIcon, 
  CardIcon, 
  ButtonIcon, 
  StatIcon, 
  EmojiIcon 
} from "../Components/Icons";
import { 
  Monitor, 
  RefreshCw, 
  Database, 
  Sparkles, 
  Wrench, 
  TestTube, 
  ShoppingCart,
  Rocket,
  Folder,
  Zap,
  Heart,
  Trophy,
  Star,
  TrendingUp,
  Sprout,
  ClipboardList,
  Target,
  Download,
  FileText,
  Eye,
  Building2,
  Package,
  Palette,
  BookOpen,
  Globe
} from "lucide-react";

const Skills: NextPage = () => {
  const { handleError, isError, errorMessage, clearError, error } = useErrorHandler();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      color: "brand",
      skills: [
        { name: "React.js", level: "Expert", color: "brand" },
        { name: "Next.js", level: "Expert", color: "brand" },
        { name: "TypeScript", level: "Advanced", color: "warning" },
        { name: "JavaScript (ES6+)", level: "Expert", color: "warning" },
        { name: "HTML5", level: "Expert", color: "orange" },
        { name: "CSS3", level: "Advanced", color: "paleBlue" },
        { name: "Tailwind CSS", level: "Advanced", color: "success" },
        { name: "Styled Components", level: "Intermediate", color: "aqua" }
      ]
    },
    {
      title: "State Management & APIs",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "aqua",
      skills: [
        { name: "Redux Toolkit", level: "Advanced", color: "aqua" },
        { name: "React Query", level: "Advanced", color: "error" },
        { name: "Context API", level: "Expert", color: "brand" },
        { name: "Zustand", level: "Intermediate", color: "orange" },
        { name: "GraphQL", level: "Intermediate", color: "aqua" },
        { name: "REST APIs", level: "Expert", color: "success" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "success",
      skills: [
        { name: "Node.js", level: "Advanced", color: "success" },
        { name: "Express.js", level: "Advanced", color: "neutral" },
        { name: "PostgreSQL", level: "Intermediate", color: "paleBlue" },
        { name: "Microservices", level: "Intermediate", color: "aqua" }
      ]
    },
    {
      title: "Animation & UI",
      icon: <Sparkles className="w-6 h-6" />,
      color: "warning",
      skills: [
        { name: "Framer Motion", level: "Advanced", color: "aqua" },
        { name: "Lottie Animations", level: "Intermediate", color: "warning" },
        { name: "Storybook", level: "Intermediate", color: "error" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      color: "paleBlue",
      skills: [
        { name: "Docker", level: "Intermediate", color: "paleBlue" },
        { name: "GitHub", level: "Expert", color: "neutral" },
        { name: "Webpack", level: "Advanced", color: "paleBlue" },
        { name: "Vite", level: "Advanced", color: "aqua" },
        { name: "ESLint", level: "Expert", color: "brand" },
        { name: "Prettier", level: "Expert", color: "paleBlue" }
      ]
    },
    {
      title: "Testing & Cloud",
      icon: <TestTube className="w-6 h-6" />,
      color: "error",
      skills: [
        { name: "Jest", level: "Advanced", color: "error" },
        { name: "React Testing Library", level: "Advanced", color: "error" },
        { name: "AWS (Basics)", level: "Beginner", color: "orange" },
        { name: "Strapi CMS", level: "Intermediate", color: "aqua" }
      ]
    },
    {
      title: "E-commerce & CMS",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "orange",
      skills: [
        { name: "Shopify", level: "Expert", color: "success" },
        { name: "Shopify Hydrogen", level: "Advanced", color: "success" },
        { name: "Magento APIs", level: "Intermediate", color: "orange" }
      ]
    }
  ];

  // Error handling
  if (isError) {
    return (
      <div className="min-h-screen bg-vscode-editor-bg text-vscode-foreground flex items-center justify-center">
        <div className="text-center">
          <MediumHeading 
            size="lg"
            className="font-bold mb-4 text-vscode-error"
            as="h2"
          >
            Error Loading Skills
          </MediumHeading>
          <p className="text-vscode-muted mb-4">{error?.message || 'Failed to load skills data'}</p>
          <button 
            onClick={clearError}
            className="cursor-button px-4 py-2 bg-vscode-accent text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Error handling
  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen bg-vscode-editor-bg text-vscode-foreground">
        <div className="text-center cursor-card p-8 rounded-xl">
          <MediumHeading 
            size="lg"
            className="font-bold mb-4 text-vscode-error"
            as="h2"
          >
            Error Loading Skills
          </MediumHeading>
          <p className="text-vscode-muted mb-4">{errorMessage}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="cursor-button px-4 py-2 bg-vscode-accent text-white rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const safeSkillCategories = safeArray(skillCategories, []);

  return (
    <div>
      <Head>
        <title>Technical Skills | Kunal Verma - React, Next.js, TypeScript, Node.js Expert</title>
        <meta name="description" content="Comprehensive technical skills in React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, AWS, Docker. 4+ years of full-stack development expertise with modern web technologies and frameworks." />
        <meta name="keywords" content="React Skills, Next.js Expert, TypeScript Developer, Node.js Backend, JavaScript ES6+, MongoDB Database, PostgreSQL, AWS Cloud, Docker Containers, Git Version Control, REST API, GraphQL, Responsive Design, Web Performance" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Technical Skills | Kunal Verma - Full Stack Developer" />
        <meta property="og:description" content="Comprehensive technical skills in React, Next.js, TypeScript, Node.js, and modern web technologies. 4+ years of development expertise." />
        <meta property="og:url" content="https://kunalverma.dev/Skills" />
        <meta property="og:image" content="https://kunalverma.dev/project_banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Technical Skills | Kunal Verma - Full Stack Developer" />
        <meta name="twitter:description" content="Comprehensive technical skills in React, Next.js, TypeScript, Node.js, and modern web technologies." />
        <meta name="twitter:image" content="https://kunalverma.dev/project_banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://kunalverma.dev/Skills" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="skills-container bg-vscode-editor-bg text-vscode-foreground font-cursor">
      
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-12 pb-20 sm:pb-24 relative z-10 overflow-hidden">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-vscode-accent/3 via-transparent to-vscode-accent/3 rounded-3xl"></div>
          
          <div className="relative z-10">
            {/* Animated Title with Floating Elements */}
            <motion.div 
              className="relative inline-block mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <MainHeading 
                  size="xxl"
                  className="ai-holographic-text mb-4"
                  as="h2"
                >
                  <span className="ai-neural-glow">Technical</span>
                  <br />
                  <span className="ai-quantum-text">Mastery</span>
                </MainHeading>
                
                {/* Static Decorative Elements */}
                <div className="absolute top-2 right-0 w-2 h-2 bg-vscode-accent rounded-full opacity-40"></div>
                <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"></div>
                <div className="absolute top-4 left-0 w-1 h-1 bg-vscode-accent rounded-full opacity-60"></div>
              </div>
            </motion.div>
            
            {/* Elegant Badge Flex */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CustomBadge 
                  label="4+ Years"
                  icon={<Zap className="w-4 h-4" />} 
                  color="success" 
                  size="lg" 
                  variant="glow"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CustomBadge 
                  label="Frontend Expert"
                  icon={<Target className="w-4 h-4" />} 
                  color="brand" 
                  size="lg" 
                  variant="glow"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CustomBadge 
                  label="🏗️ Full-Stack" 
                  color="aqua" 
                  size="lg" 
                  variant="glow"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CustomBadge 
                  label="🛠️ Modern Stack" 
                  color="warning" 
                  size="lg" 
                  variant="glow"
                />
              </motion.div>
            </motion.div>
            
            {/* Enhanced Description */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vscode-accent/10 to-transparent rounded-2xl blur-xl"></div>
              <DescriptionText 
                size="lg"
                className="relative font-medium text-vscode-foreground/90 max-w-5xl mx-auto bg-vscode-sidebar-bg/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-vscode-border/30"
              >
                <span className="text-vscode-accent font-bold">Crafting digital experiences</span> with 4+ years of expertise in 
                <span className="text-blue-400 font-semibold"> React.js</span>, 
                <span className="text-green-400 font-semibold"> Next.js</span>, and 
                <span className="text-yellow-400 font-semibold"> TypeScript</span>. 
                Specialized in building <span className="text-vscode-accent font-semibold">high-performance applications</span> that scale.
              </DescriptionText>
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {safeArray(skillCategories).map((category: any, categoryIndex) => {
            if (!category || !category.title || !category.skills) {
              return null;
            }
            
            return (
              <motion.div 
                key={category.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                {/* AI Neural Glow */}
                <div className="absolute inset-0 ai-neural-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* AI-Enhanced Card */}
                <div className="relative ai-glass-card neo-shadow-light border border-vscode-border/50 rounded-2xl p-6 sm:p-8 hover:border-vscode-accent/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-vscode-accent/20 to-transparent rounded-bl-3xl opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-vscode-accent/10 to-transparent rounded-tr-3xl opacity-30"></div>
                  
                  {/* Category Header */}
                  <motion.div 
                    className="flex items-center gap-4 mb-8 relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="p-3 ai-holographic-icon neo-shadow-light rounded-xl backdrop-blur-sm border border-vscode-accent/30 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.05
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="quantum-pulse"></div>
                      <div className="relative z-10 text-4xl sm:text-5xl">
                        {category.icon}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <MediumHeading 
                        size="lg"
                        className="font-bold bg-gradient-to-r from-vscode-accent to-blue-400 bg-clip-text text-transparent"
                        as="h3"
                      >
                        {category.title}
                      </MediumHeading>
                      <div className="flex items-center gap-2 mt-2">
                        <BadgeDot color={category.color as any} size="lg" />
                        <CardDescription 
                          size="sm"
                          className="text-vscode-foreground/60 font-medium"
                          as="span"
                        >
                          {safeArray(category.skills).length} Skills
                        </CardDescription>
                  </div>
              </div>
                  </motion.div>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                    {safeArray(category.skills).map((skill: any, skillIndex) => {
                      if (!skill || !skill.name) {
                        return null;
                      }
                      
                      const getLevelVariant = (level: string) => {
                        switch (level) {
                          case 'Expert': return 'glow';
                          case 'Advanced': return 'filled';
                          case 'Intermediate': return 'outline';
                          case 'Beginner': return 'plain';
                          default: return 'filled';
                        }
                      };

                      const getLevelIcon = (level: string) => {
                        switch (level) {
                          case 'Expert': return <Trophy className="w-4 h-4" />;
                          case 'Advanced': return <Star className="w-4 h-4" />;
                          case 'Intermediate': return <TrendingUp className="w-4 h-4" />;
                          case 'Beginner': return <Sprout className="w-4 h-4" />;
                          default: return <Star className="w-4 h-4" />;
                        }
                      };
                      
                      return (
                        <motion.div
                          key={skill.name}
                          className="group/skill relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: Math.min(skillIndex * 0.05, 1),
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            y: -3,
                            transition: { duration: 0.15 }
                          }}
                        >
                          {/* Skill Card Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-vscode-editor-bg/50 to-vscode-editor-bg/30 rounded-xl border border-vscode-border/30 group-hover/skill:border-vscode-accent/50 transition-all duration-300"></div>
                          
                          {/* Skill Content */}
                          <div className="relative p-3 sm:p-4 space-y-3">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <CustomBadge
                                label={skill.name}
                                color={skill.color as any}
                                size="sm"
                                variant={getLevelVariant(skill.level)}
                                cursor={false}
                              />
                              <div className="opacity-70 group-hover/skill:opacity-100 transition-opacity text-vscode-accent">
                                {getLevelIcon(skill.level)}
                              </div>
          </div>

                            <div className="flex flex-wrap items-center justify-between">
                              <CustomBadge
                                label={skill.level}
                                color={skill.color as any}
                                size="sm"
                                variant="plain"
                                cursor={false}
                                className=""
                              />
                              
                              {/* Progress Bar */}
                              <div className="flex-1 ml-3">
                                <div className="h-1 bg-vscode-border/30 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-vscode-accent to-blue-400 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ 
                                      width: skill.level === 'Expert' ? '100%' : 
                                             skill.level === 'Advanced' ? '80%' : 
                                             skill.level === 'Intermediate' ? '60%' : '40%'
                                    }}
                                    transition={{ duration: 0.6, delay: Math.min(skillIndex * 0.03, 0.5), ease: "easeOut" }}
                    />
                  </div>
              </div>
                  </div>
              </div>
                        </motion.div>
                      );
                    })}
                  </div>
              </div>
              </motion.div>
            );
          })}
              </div>

        {/* Professional Summary */}
        <motion.div 
          className="mt-20 relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-vscode-accent/3 via-transparent to-vscode-accent/5 rounded-3xl opacity-30"></div>
          
          {/* Main Container */}
          <div className="relative bg-gradient-to-br from-vscode-sidebar-bg via-vscode-sidebar-bg/90 to-vscode-sidebar-bg/80 backdrop-blur-lg border border-vscode-border/50 rounded-3xl p-6 sm:p-12 overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-vscode-accent/20 to-transparent rounded-br-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-tl-3xl opacity-40"></div>
            
            {/* Header */}
            <motion.div 
              className="text-center mb-12 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="inline-flex items-center gap-4 mb-4">
                <motion.div
                  className="p-4 bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-2xl backdrop-blur-sm border border-vscode-accent/40"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <SectionIcon size="lg">
                    <ClipboardList />
                  </SectionIcon>
                </motion.div>
                <MediumHeading 
                  size="lg"
                  className="font-bold bg-gradient-to-r from-vscode-accent via-blue-400 to-vscode-accent bg-clip-text text-transparent"
                  as="h3"
                >
                  Professional Arsenal
                </MediumHeading>
              </div>
              <DescriptionText 
                size="md"
                className="text-vscode-foreground/70 max-w-3xl mx-auto px-2 sm:px-0"
              >
                A comprehensive toolkit of expertise and methodologies that drive exceptional results
              </DescriptionText>
            </motion.div>
            
            {/* Content Grid */}
            <div className="grid gap-10 lg:grid-cols-2 relative z-10">
              
              {/* Core Expertise */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent rounded-2xl"></div>
                <div className="relative bg-vscode-editor-bg/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-vscode-border/30">
                  
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-lg">
                      <Target className="w-6 h-6 text-green-400" />
                    </div>
                    <CardHeading 
                      size="sm"
                      className="font-bold text-green-400"
                      as="h4"
                    >
                      Core Expertise
                    </CardHeading>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[
                      { label: "High-Performance Apps", color: "success", icon: <Rocket className="w-3 h-3" /> },
                      { label: "Enterprise Platforms", color: "brand", icon: <Building2 className="w-3 h-3" /> },
                      { label: "E-commerce Solutions", color: "orange", icon: <ShoppingCart className="w-3 h-3" /> },
                      { label: "Design Systems", color: "aqua", icon: <Palette className="w-3 h-3" /> },
                      { label: "Performance Optimization", color: "warning", icon: <Zap className="w-3 h-3" /> },
                      { label: "Scalable Architecture", color: "paleBlue", icon: <Package className="w-3 h-3" /> }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                        whileHover={{ x: 5, scale: 1.01 }}
                      >
                        <CustomBadge 
                          label={item.label} 
                          color={item.color as any} 
                          size="md" 
                          variant="glow"
                          icon={item.icon}
                        />
                      </motion.div>
                    ))}
                  </div>
              </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent rounded-2xl"></div>
                <div className="relative bg-vscode-editor-bg/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-vscode-border/30">
                  
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-400/20 to-blue-400/10 rounded-lg">
                      <Wrench className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardHeading 
                      size="sm"
                      className="font-bold text-blue-400"
                      as="h4"
                    >
                      Professional Skills
                    </CardHeading>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[
                      { label: "Agile Leadership", color: "success", icon: <RefreshCw className="w-3 h-3" /> },
                      { label: "Code Excellence", color: "brand", icon: <FileText className="w-3 h-3" /> },
                      { label: "Technical Writing", color: "aqua", icon: <BookOpen className="w-3 h-3" /> },
                      { label: "Cross-Platform", color: "warning", icon: <Globe className="w-3 h-3" /> },
                      { label: "Performance Audits", color: "error", icon: <Zap className="w-3 h-3" /> },
                      { label: "Team Mentoring", color: "paleBlue", icon: <Wrench className="w-3 h-3" /> }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                        whileHover={{ x: -5, scale: 1.01 }}
                      >
                        <CustomBadge 
                          label={item.label} 
                          color={item.color as any} 
                          size="md" 
                          variant="glow"
                          icon={item.icon}
                        />
                      </motion.div>
                    ))}
                  </div>
              </div>
              </motion.div>
                  </div>
            
            {/* Bottom Stats */}
            <motion.div
              className="mt-12 text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-4">
                {[
                  { number: "50+", label: "Projects", icon: <Rocket className="w-5 h-5" /> },
                  { number: "7", label: "Categories", icon: <Folder className="w-5 h-5" /> },
                  { number: "25+", label: "Technologies", icon: <Zap className="w-5 h-5" /> },
                  { number: "100%", label: "Passion", icon: <Heart className="w-5 h-5" /> }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center bg-vscode-sidebar-bg/30 border border-vscode-border/50 rounded-xl p-3 sm:p-4 w-32 sm:w-36 flex flex-col justify-center hover:border-vscode-accent/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="mb-2 text-center mx-auto text-vscode-accent">
                      {stat.icon}
                    </div>
                    <SmallHeading 
                      size="sm"
                      className="font-bold text-vscode-accent mb-1"
                    >
                      {stat.number}
                    </SmallHeading>
                    <Caption 
                      size="xs"
                      className="text-vscode-foreground/60"
                    >
                      {stat.label}
                    </Caption>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-vscode-sidebar-bg/80 to-vscode-editor-bg/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-lg text-blue-400 flex items-center justify-center w-16 h-16 sm:w-12 sm:h-12">
                  <FileText className="w-10 h-10 sm:w-8 sm:h-8" />
                </div>
                <MediumHeading 
                  size="lg"
                  className="font-bold text-vscode-foreground"
                  as="h3"
                >
                  Technical Resume
                </MediumHeading>
              </div>
              <DescriptionText 
                size="md"
                className="text-vscode-foreground/80 max-w-2xl mx-auto mb-6"
              >
                Download my detailed technical resume showcasing all the skills, technologies, and expertise mentioned above.
              </DescriptionText>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                download="Kunal_Verma_React_NextJS_Developer.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-6 h-6 sm:w-5 sm:h-5" />
                Download Resume
              </motion.a>
              <motion.a
                href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-vscode-editor-bg hover:bg-vscode-hover-background text-blue-400 border border-blue-400/50 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-6 h-6 sm:w-5 sm:h-5" />
                View Online
              </motion.a>
            </div>
            
            {/* Skills Summary */}
            <div className="mt-6 pt-4 border-t border-vscode-border/30">
              <div className="flex flex-wrap justify-center gap-3">
                <CustomBadge label="20+ Technologies" color="brand" size="sm" variant="outline" />
                <CustomBadge label="Frontend Expert" color="success" size="sm" variant="outline" />
                <CustomBadge label="Full-Stack Ready" color="warning" size="sm" variant="outline" />
                <CustomBadge label="Modern Stack" color="error" size="sm" variant="glow" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Skills;