import React from "react";
import { NextPage } from "next";
// Using native scrollbars with CSS styling
import Image from "next/legacy/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { projectsdata } from "../../Components/JSON/projectsdata";
import { useErrorHandler, safeArray } from "../../Components/hooks/useErrorHandler";
import { CustomBadge, BadgeDot } from "../../Components/Common";
import Loading from "../../Components/Loading/Loading";
import Head from "next/head";
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
} from "../../Components/Typography";
import { 
  HeroIcon, 
  SectionIcon, 
  CardIcon, 
  ButtonIcon, 
  StatIcon, 
  EmojiIcon 
} from "../../Components/Icons";
import { Download, FileText, Eye, Rocket, TrendingUp } from "lucide-react";

// Project Card Component
const ProjectCard: React.FC<{
  project: any;
  index: number;
  delay: number;
}> = ({ project, index, delay }) => {
  const getProjectUrl = (project: any) => {
    // Convert project name to URL format
    const urlName = project.name.replace('.tsx', '').toLowerCase();
    return `/Projects/${urlName}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative w-full h-full"
    >
      <Link href={getProjectUrl(project)} passHref>
        <div className="cursor-pointer w-full h-full">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-vscode-accent/5 via-transparent to-vscode-accent/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-vscode-sidebar-bg to-vscode-sidebar-bg/80 backdrop-blur-sm border border-vscode-border/50 rounded-2xl p-6 hover:border-vscode-accent/50 transition-all duration-500 overflow-hidden h-full w-full flex flex-col min-h-[500px]">
            
            {/* Live Project Badge - Top Right */}
            {project.link && (
              <div className="absolute top-4 right-4 z-20">
                <CustomBadge label="🔗 Live" color="success" size="sm" variant="glow" />
              </div>
            )}
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-vscode-accent/20 to-transparent rounded-bl-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-vscode-accent/10 to-transparent rounded-tr-3xl opacity-30"></div>
            
            {/* Project Logo */}
            <div className="relative z-10 mb-6">
              <motion.div
                className="bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-xl flex items-center justify-center border border-vscode-accent/40 overflow-hidden"
                style={{ 
                  width: '64px', 
                  height: '64px',
                  minWidth: '64px',
                  minHeight: '64px'
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.logo || '/favicon.ico'}
                  alt={`${project.title} logo`}
                  className="object-contain"
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    maxWidth: '40px',
                    maxHeight: '40px'
                  }}
                />
              </motion.div>
            </div>

            {/* Project Content */}
            <div className="relative z-10 flex-1 flex flex-col">
              <CardHeading 
                size="sm"
                className="font-bold text-vscode-foreground mb-3 group-hover:text-vscode-accent transition-colors duration-300"
                as="h4"
              >
                {project.title}
              </CardHeading>
              
              <CardDescription 
                size="sm"
                className="text-vscode-foreground/70 mb-4 line-clamp-3 flex-shrink-0"
              >
                {project.description}
              </CardDescription>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                {project.skills?.slice(0, 3).map((skill: string, skillIndex: number) => (
                  <CustomBadge
                    key={skillIndex}
                    label={skill}
                    color={skillIndex === 0 ? "brand" : skillIndex === 1 ? "success" : "warning"}
                    size="sm"
                    variant="outline"
                  />
                ))}
                {project.skills?.length > 3 && (
                  <CustomBadge
                    label={`+${project.skills.length - 3} more`}
                    color="neutral"
                    size="sm"
                    variant="plain"
                  />
                )}
              </div>

              {/* Business Impact */}
              {project.businessImpact && (
                <div className="border-t border-vscode-border/30 pt-4 mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <Caption 
                      size="xs"
                      className="font-medium text-vscode-accent flex items-center gap-1"
                      as="span"
                    >
                      <TrendingUp className="w-3 h-3" />
                      Impact
                    </Caption>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {Object.entries(project.businessImpact).slice(0, 2).map(([key, value]: [string, any]) => (
                      <div key={key} className="text-center">
                        <Caption 
                          size="xs"
                          className="font-bold text-green-400"
                        >
                          {value}
                        </Caption>
                        <Caption 
                          size="xs"
                          className="text-vscode-foreground/60 capitalize"
                        >
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Caption>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Projects: NextPage = (props: any) => {
  const { handleError, isError, errorMessage } = useErrorHandler();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  // Error handling for projects data
  const safeProjectsData = safeArray(props.projects || [], []);

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen bg-vscode-editor-bg text-vscode-foreground">
        <div className="text-center cursor-card p-8 rounded-xl">
          <MediumHeading 
            size="lg"
            className="font-bold mb-4 text-vscode-error"
            as="h2"
          >
            Error Loading Projects
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

  if (safeProjectsData.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-vscode-editor-bg text-vscode-foreground">
        <div className="text-center">
          <MediumHeading 
            size="lg"
            className="font-bold mb-4"
            as="h2"
          >
            No Projects Found
          </MediumHeading>
          <p className="text-vscode-muted">Projects will be available soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="h-screen overflow-y-auto scrollbar-thin scrollbar-track-vscode-editor-bg scrollbar-thumb-vscode-scrollbar-slider"
      style={{ 
        height: "100vh",
        scrollbarWidth: "thin",
        scrollbarColor: "var(--vscode-scrollbar-slider) var(--vscode-editor-background)"
      }}
    >
      <Head>
        <title>Projects Portfolio | Kunal Verma - 50+ Enterprise React & Next.js Applications</title>
        <meta
          name="description"
          content="Explore 50+ enterprise-grade projects built with React, Next.js, TypeScript, Node.js. Healthcare, FinTech, E-commerce solutions for top companies. Full-stack development portfolio showcasing scalable applications."
        />
        <meta name="keywords" content="React Projects, Next.js Applications, TypeScript Portfolio, Full Stack Projects, Enterprise Web Development, Healthcare Apps, FinTech Solutions, E-commerce Platforms, Scalable Applications, Modern Web Development" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Projects Portfolio | Kunal Verma - Enterprise React & Next.js Applications" />
        <meta property="og:description" content="Explore 50+ enterprise-grade projects built with React, Next.js, TypeScript. Healthcare, FinTech, E-commerce solutions for top companies." />
        <meta property="og:url" content="https://kunalverma.dev/Projects" />
        <meta property="og:image" content="https://kunalverma.dev/project_banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Projects Portfolio | Kunal Verma - Enterprise Applications" />
        <meta name="twitter:description" content="Explore 50+ enterprise-grade projects built with React, Next.js, TypeScript for top companies." />
        <meta name="twitter:image" content="https://kunalverma.dev/project_banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://kunalverma.dev/Projects" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-vscode-editor-bg pb-20 sm:pb-18 md:pb-16">
        
        <div className="max-w-7xl mx-auto responsive-padding py-6 sm:py-12 relative z-10 mb-8">
          
          {/* Header Section */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <motion.div
                className="p-4 bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-2xl backdrop-blur-sm border border-vscode-accent/40"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <HeroIcon size="lg">
                  <Rocket />
                </HeroIcon>
              </motion.div>
              <MainHeading 
                size="xxl"
                className="bg-gradient-to-r from-vscode-accent via-blue-400 to-vscode-accent bg-clip-text text-transparent"
                as="h1"
              >
                Projects
              </MainHeading>
            </div>
            <DescriptionText 
              size="lg"
              className="relative mb-12 font-medium text-vscode-foreground/90 max-w-5xl mx-auto bg-vscode-sidebar-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-vscode-border/30"
            >
              Enterprise-grade applications built with modern technologies. 
              <span className="text-vscode-accent font-semibold"> Real-world impact</span> with 
              <span className="text-green-400 font-semibold"> measurable results</span>.
            </DescriptionText>
            <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-4xl mx-auto">
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <CustomBadge label="5 Enterprise Projects" color="brand" size="md" variant="glow" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <CustomBadge label="React.js & Next.js" color="success" size="md" variant="outline" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <CustomBadge label="Production Ready" color="warning" size="md" variant="filled" />
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            style={{ gridAutoRows: 'minmax(500px, 1fr)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {safeProjectsData.map((project: any, index: number) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                index={index}
                delay={0.1 * index}
              />
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 sm:mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 items-stretch">
              <div className="text-center bg-vscode-sidebar-bg/30 border border-vscode-border/50 rounded-xl p-6 h-full flex flex-col justify-center hover:border-vscode-accent/50 transition-all duration-300">
                <SmallHeading 
                  size="md"
                  className="font-bold text-vscode-accent mb-1"
                >
                  500+
                </SmallHeading>
                <Caption 
                  size="xs"
                  className="text-vscode-foreground/60"
                >
                  Companies Served
                </Caption>
              </div>
              <div className="text-center bg-vscode-sidebar-bg/30 border border-vscode-border/50 rounded-xl p-6 h-full flex flex-col justify-center hover:border-vscode-accent/50 transition-all duration-300">
                <SmallHeading 
                  size="md"
                  className="font-bold text-green-400 mb-1"
                >
                  300+
                </SmallHeading>
                <Caption 
                  size="xs"
                  className="text-vscode-foreground/60"
                >
                  Hospitals Connected
                </Caption>
              </div>
              <div className="text-center bg-vscode-sidebar-bg/30 border border-vscode-border/50 rounded-xl p-6 h-full flex flex-col justify-center hover:border-vscode-accent/50 transition-all duration-300">
                <SmallHeading 
                  size="md"
                  className="font-bold text-blue-400 mb-1"
                >
                  500K+
                </SmallHeading>
                <Caption 
                  size="xs"
                  className="text-vscode-foreground/60"
                >
                  Users Impacted
                </Caption>
              </div>
              <div className="text-center bg-vscode-sidebar-bg/30 border border-vscode-border/50 rounded-xl p-6 h-full flex flex-col justify-center hover:border-vscode-accent/50 transition-all duration-300">
                <SmallHeading 
                  size="md"
                  className="font-bold text-purple-400 mb-1"
                >
                  4+ Years
                </SmallHeading>
                <Caption 
                  size="xs"
                  className="text-vscode-foreground/60"
                >
                  Experience
                </Caption>
              </div>
            </div>
          </motion.div>

          {/* Resume Download Section */}
          <motion.div
            className="mt-16 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gradient-to-br from-vscode-sidebar-bg/80 to-vscode-editor-bg/60 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-lg text-green-400 flex items-center justify-center w-16 h-16 sm:w-12 sm:h-12">
                    <FileText className="w-10 h-10 sm:w-8 sm:h-8" />
                  </div>
                  <MediumHeading 
                    size="lg"
                    className="font-bold text-vscode-foreground text-center"
                    as="h3"
                  >
                    Project Portfolio Resume
                  </MediumHeading>
                </div>
                <DescriptionText 
                  size="md"
                  className="text-vscode-foreground/80 max-w-2xl mx-auto mb-6"
                >
                  Download my comprehensive resume featuring detailed project descriptions, technical implementations, and achievements.
                </DescriptionText>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                  download="Kunal_Verma_React_NextJS_Developer.pdf"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  className="inline-flex items-center gap-3 px-6 py-3 bg-vscode-editor-bg hover:bg-vscode-hover-background text-green-400 border border-green-400/50 hover:border-green-400 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-6 h-6 sm:w-5 sm:h-5" />
                  View Online
                </motion.a>
              </div>
              
              {/* Project Stats */}
              <div className="mt-6 pt-4 border-t border-vscode-border/30">
                <div className="flex flex-wrap justify-center gap-3">
                  <CustomBadge label="50+ Projects" color="success" size="sm" variant="outline" />
                  <CustomBadge label="Enterprise Level" color="brand" size="sm" variant="outline" />
                  <CustomBadge label="Modern Stack" color="warning" size="sm" variant="outline" />
                  <CustomBadge label="Proven Results" color="error" size="sm" variant="glow" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export function getStaticProps() {
  const projects = projectsdata();
  return {
    props: {
      projects: projects,
    },
  };
}

export default Projects;
