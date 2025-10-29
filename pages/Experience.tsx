import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { CustomBadge, BadgeDot, BadgeNumber } from "../Components/Common";
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
  GraduationCap, 
  BookOpen, 
  School, 
  Target,
  Award,
  Building2,
  MapPin,
  Calendar,
  Users,
  Zap,
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  Package,
  Settings,
  Download,
  FileText,
  Eye
} from "lucide-react";

const MyWork: NextPage = () => {
  const experiences = [
    {
      company: "Sequifi Technologies",
      location: "Indore",
      position: "Senior Frontend Developer",
      duration: "Feb 2025 – Present",
      logo: "/sequifi-logo.png",
      achievements: [
        "Led development of HR lifecycle platform for 500+ companies, improving HR efficiency by 40%",
        "Built Employee Contract Management System, cutting contract errors by 65%",
        "Developed Hiring Pipeline with multi-stage approvals, reducing hiring time by 50% for 2000+ candidates",
        "Launched Onboarding Platform with e-signatures & progress tracking, reducing onboarding from 5 to 2 days",
        "Designed UI Component Library (50+ reusable components), cutting dev time by 35%",
        "Improved performance via code splitting & lazy loading, reducing load time by 45%"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Redux", "Node.js"]
    },
    {
      company: "Growisto",
      location: "Mumbai",
      position: "Full Stack Developer",
      duration: "May 2022 – Feb 2025",
      logo: "/growisto-logo.png",
      projects: "HDFC Bank (BaaS), Kama Ayurveda, Dozee",
      achievements: [
        "Delivered Admin Dashboard & Status Management System for HDFC Bank, reducing manual work by 50%",
        "Built Corporate Partner Portal, improving submission speed by 20%",
        "Enhanced Customer Account Management & Authentication for Kama Ayurveda, boosting retention by 15%",
        "Implemented Loyalty & Rewards Platform, increasing participation by 20%",
        "Developed Dozee website from scratch using React.js & Next.js, achieving 50% traffic growth",
        "Increased engagement with Lottie animations (+25%) and streamlined content management via Strapi CMS"
      ],
      technologies: ["React.js", "Next.js", "Redux", "GraphQL", "Node.js", "PostgreSQL"]
    },
    {
      company: "AI Trillion",
      location: "Indore",
      position: "Shopify Consultant & React.js Developer",
      duration: "Aug 2021 – May 2022",
      logo: "/aitrillion-logo.png",
      achievements: [
        "Improved Shopify stores (e.g., Aakash Namkeen, Indian Milk & Honey) with 15% performance gains",
        "Optimized websites for 20% faster load times, boosting customer satisfaction",
        "Delivered custom Shopify solutions and performance enhancements"
      ],
      technologies: ["React.js", "Shopify", "JavaScript", "CSS3", "HTML5"]
    },
    {
      company: "Parkhya Solutions",
      location: "Indore",
      position: "Shopify Consultant",
      duration: "Jan 2021 – Jul 2021",
      logo: "/parkhya-logo.png",
      achievements: [
        "Delivered custom Shopify solutions and performance enhancements for multiple client projects",
        "Specialized in e-commerce optimization and user experience improvements"
      ],
      technologies: ["Shopify", "JavaScript", "CSS3", "HTML5"]
    }
  ];

  return (
    <div>
        <Head>
        <title>Professional Experience - Kunal Verma</title>
        <meta name="description" content="4+ years of professional experience in React.js, Next.js development" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
      <div className="min-h-screen bg-vscode-editor-bg text-vscode-foreground font-cursor pb-20 sm:pb-18 md:pb-16">
      
      <div className="max-w-7xl mx-auto responsive-padding py-6 sm:py-12 mb-8">
        <motion.div
          className="text-center mb-8 sm:mb-16 lg:mb-20 relative"
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
                  className="bg-gradient-to-r from-vscode-accent via-blue-400 to-vscode-accent bg-clip-text text-transparent mb-4"
                  animated={true}
                  animationProps={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 }
                  }}
                  as="h1"
                >
                  Professional Journey
                </MainHeading>
                
                {/* Static Decorative Dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-vscode-accent/40 rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${15 + i * 12}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
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
                  label="React Expert" 
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
                  label="Enterprise" 
                  color="aqua" 
                  size="lg" 
                  variant="glow"
                  icon={<Building2 className="w-4 h-4" />}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CustomBadge 
                  label="E-commerce" 
                  color="warning" 
                  size="lg" 
                  variant="glow"
                  icon={<Globe className="w-4 h-4" />}
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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vscode-accent/10 to-transparent rounded-2xl"></div>
              <DescriptionText 
                size="lg"
                className="relative font-medium text-vscode-foreground/90 max-w-5xl mx-auto bg-vscode-sidebar-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-vscode-border/30"
              >
                <span className="text-vscode-accent font-bold">Transforming businesses</span> through innovative frontend solutions with 
                <span className="text-blue-400 font-semibold"> proven impact</span> across 
                <span className="text-green-400 font-semibold"> HR platforms</span>, 
                <span className="text-yellow-400 font-semibold"> e-commerce systems</span>, and&nbsp;
                <span className="text-vscode-accent font-semibold">enterprise applications</span>.
              </DescriptionText>
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-vscode-accent/5 via-transparent to-vscode-accent/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-vscode-sidebar-bg to-vscode-sidebar-bg/80 backdrop-blur-sm border border-vscode-border/50 rounded-2xl p-8 hover:border-vscode-accent/50 transition-all duration-500 overflow-hidden">
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-vscode-accent/20 to-transparent rounded-bl-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-vscode-accent/10 to-transparent rounded-tr-3xl opacity-30"></div>
                {/* Experience Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 relative z-10">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <MediumHeading 
                        size="lg"
                        className="font-bold bg-gradient-to-r from-vscode-accent to-blue-400 bg-clip-text text-transparent"
                        as="h3"
                      >
                        {exp.position}
                      </MediumHeading>
                      {index === 0 && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <CustomBadge 
                            label="Current Role" 
                            color="success" 
                            size="md" 
                            variant="glow"
                            icon={<Award className="w-4 h-4" />}
                          />
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <div className="flex justify-start">
                      <CustomBadge 
                          label={`${exp.company}`} 
                        color="brand" 
                        size="md" 
                        variant="filled"
                          icon={<Building2 className="w-4 h-4" />}
                        />
                      </div>
                      <IconText 
                        size="md" 
                        className="text-vscode-foreground/40 hidden sm:inline"
                        as="span"
                      >
                        •
                      </IconText>
                      <div className="flex justify-start">
                      <CustomBadge 
                          label={`${exp.location}`} 
                        color="neutral" 
                        size="md" 
                        variant="outline"
                          icon={<MapPin className="w-4 h-4" />}
                      />
                      </div>
                    </div>
                    
                    {exp.projects && (
                      <div className="bg-gradient-to-r w-full from-vscode-editor-bg/50 to-vscode-editor-bg/30 border border-vscode-border/30 rounded-xl p-4 mb-4">
                        <CardDescription 
                          size="sm"
                          className="text-vscode-foreground/90"
                        >
                          <Caption 
                            size="sm"
                            className="font-bold text-vscode-accent"
                            as="span"
                          >
                            Key Projects:
                          </Caption> 
                          <Caption 
                            size="sm"
                            className="ml-2 text-blue-400 font-medium"
                            as="span"
                          >
                            {exp.projects}
                          </Caption>
                        </CardDescription>
                      </div>
                    )}
                  </div>
                  <div className="lg:ml-6 mt-4 lg:mt-0 flex justify-start lg:justify-end">
                    <CustomBadge 
                      label={`⏰ ${exp.duration}`} 
                      color="paleBlue" 
                      size="lg" 
                      variant="glow"
                    />
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mb-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <CardIcon 
                      size="lg"
                      className="p-2 bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-lg text-green-400"
                    >
                      <Package className="w-6 h-6" />
                    </CardIcon>
                    <SmallHeading 
                      size="sm"
                      className="font-bold text-green-400"
                      as="h4"
                    >
                      Key Achievements
                    </SmallHeading>
                    <BadgeDot color="success" size="lg" />
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {exp.achievements.map((achievement, i) => {
                      // Extract percentage and numbers for badges
                      const percentageMatch = achievement.match(/(\d+)%/);
                      const numberMatch = achievement.match(/(\d+)\+/);
                      const hasPercentage = percentageMatch;
                      const hasNumber = numberMatch;
                      
                      return (
                        <div
                          key={i}
                          className="group/achievement w-full relative"
                        >
                          {/* Achievement Card Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-vscode-editor-bg/50 to-vscode-editor-bg/30 rounded-xl border border-vscode-border/30 group-hover/achievement:border-vscode-accent/50 transition-all duration-300"></div>
                          
                          {/* Achievement Content */}
                          <div className="relative p-4 flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-lg flex items-center justify-center mt-1">
                              <Caption 
                                size="xs"
                                className="text-vscode-accent font-bold"
                                as="span"
                              >
                                #{i + 1}
                              </Caption>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <ProjectDescription 
                                size="md"
                                className="text-vscode-foreground/90 mb-3"
                              >
                                {achievement}
                              </ProjectDescription>
                              
                              {(hasPercentage || hasNumber) && (
                                <div className="flex flex-wrap gap-2">
                                  {hasPercentage && (
                                    <motion.div
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <CustomBadge 
                                        label={`${percentageMatch[1]}% Improvement`} 
                                        color="success" 
                                        size="sm" 
                                        variant="glow"
                                        icon={<Zap className="w-3 h-3" />}
                                      />
                                    </motion.div>
                                  )}
                                  {hasNumber && (
                                    <motion.div
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <CustomBadge 
                                        label={`${numberMatch[1]}+ Impact`} 
                                        color="brand" 
                                        size="sm" 
                                        variant="glow"
                                        icon={<Users className="w-3 h-3" />}
                                      />
                                    </motion.div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Technologies Section */}
                <div className="border-t border-vscode-border/30 pt-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <EmojiIcon 
                      size="sm"
                      className="p-2 bg-gradient-to-br from-blue-400/20 to-blue-400/10 rounded-lg"
                    >
                      <Zap className="w-4 h-4" />
                    </EmojiIcon>
                    <CardHeading 
                      size="sm"
                      className="font-bold text-blue-400"
                      as="h5"
                    >
                      Technologies
                    </CardHeading>
                    <BadgeDot color="brand" size="md" />
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => {
                      // Color coding for different tech categories
                      const getTechColor = (tech: string) => {
                        if (tech.includes('React') || tech.includes('Next.js')) {
                          return 'brand';
                        } else if (tech.includes('TypeScript') || tech.includes('JavaScript')) {
                          return 'warning';
                        } else if (tech.includes('Node.js') || tech.includes('Redux')) {
                          return 'success';
                        } else if (tech.includes('PostgreSQL') || tech.includes('GraphQL')) {
                          return 'aqua';
                        } else if (tech.includes('Shopify')) {
                          return 'orange';
                        } else {
                          return 'neutral';
                        }
                      };

                      return (
                        <CustomBadge
                          key={i}
                          label={tech}
                          color={getTechColor(tech) as any}
                          size="md"
                          variant="filled"
                        />
                      );
                    })}
                  </div>
            </div>
          </div>
            </motion.div>
          ))}
                  </div>

        <motion.div
          className="mt-16 bg-vscode-sidebar-bg border border-vscode-border rounded-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MediumHeading 
            size="lg"
            className="font-bold text-vscode-accent mb-6 flex items-center gap-3"
            as="h3"
          >
            <BadgeDot color="brand" size="lg" />
            Education
          </MediumHeading>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <CardIcon size="sm" className="text-blue-600">
                  <Code2 className="w-5 h-5" />
                </CardIcon>
                <CardHeading 
                  size="sm"
                  className="font-semibold text-blue-900"
                  as="h4"
                >
                  B.E. – Computer Science
                </CardHeading>
              </div>
              <CardDescription 
                size="sm"
                className="text-blue-700 mb-2"
              >
                BM College, Indore
              </CardDescription>
              <div className="flex justify-start">
              <CustomBadge 
                label="2016 – 2020" 
                color="brand" 
                size="sm" 
                variant="glow"
                icon={<Calendar className="w-3 h-3" />}
              />
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <CardIcon size="sm" className="text-green-600">
                  <Database className="w-5 h-5" />
                </CardIcon>
                <CardHeading 
                  size="sm"
                  className="font-semibold text-green-900"
                  as="h4"
                >
                  Higher Secondary (12th)
                </CardHeading>
              </div>
              <CardDescription 
                size="sm"
                className="text-green-700 mb-2"
              >
                GVM, Indore
              </CardDescription>
              <div className="flex justify-start">
              <CustomBadge 
                  label="2015 – 2016" 
                color="success" 
                size="sm" 
                variant="glow"
                  icon={<Calendar className="w-3 h-3" />}
              />
              </div>
                  </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <CardIcon size="sm" className="text-purple-600">
                  <Globe className="w-5 h-5" />
                </CardIcon>
                <CardHeading 
                  size="sm"
                  className="font-semibold text-purple-900"
                  as="h4"
                >
                  High School (10th)
                </CardHeading>
                  </div>
              <CardDescription 
                size="sm"
                className="text-purple-700 mb-2"
              >
                GVM, Indore
              </CardDescription>
              <div className="flex justify-start">
              <CustomBadge 
                  label="2014 – 2015" 
                color="aqua" 
                size="sm" 
                variant="glow"
                  icon={<Calendar className="w-3 h-3" />}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
            <div className="bg-gradient-to-br from-vscode-sidebar-bg/80 to-vscode-editor-bg/60 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-lg text-orange-400 flex items-center justify-center w-16 h-16 sm:w-12 sm:h-12">
                  <FileText className="w-10 h-10 sm:w-8 sm:h-8" />
                </div>
                <MediumHeading 
                  size="lg"
                  className="font-bold text-vscode-foreground"
                  as="h3"
                >
                  Download My Resume
                </MediumHeading>
              </div>
              <DescriptionText 
                size="md"
                className="text-vscode-foreground/80 max-w-2xl mx-auto mb-6"
              >
                Get a comprehensive overview of my professional experience, technical skills, and achievements in modern web development.
              </DescriptionText>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                download="Kunal_Verma_React_NextJS_Developer.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
                className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-orange-600 border border-orange-300 hover:border-orange-400 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-6 h-6 sm:w-5 sm:h-5" />
                View Online
              </motion.a>
            </div>
            
            {/* Resume Stats */}
              <div className="mt-6 pt-4 border-t border-vscode-border/30">
              <div className="flex flex-wrap justify-center gap-3">
                <CustomBadge label="4+ Years Experience" color="success" size="sm" variant="outline" />
                <CustomBadge label="5+ Companies" color="brand" size="sm" variant="outline" />
                <CustomBadge label="50+ Projects" color="warning" size="sm" variant="outline" />
                <CustomBadge label="Available for Interview" color="error" size="sm" variant="glow" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default MyWork;