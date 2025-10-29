import type { NextPage } from "next";
import Head from "next/head";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import AnimatedCard from "../Components/AnimatedCard/AnimatedCard";
import CodeEditor from "../Components/CodeEditor/CodeEditor";
import AboutMeModal from "../Components/AboutMeModal/AboutMeModal";
import { 
  MainHeading, 
  MediumHeading, 
  SmallHeading, 
  DescriptionText, 
  CardHeading, 
  CardDescription, 
  Caption, 
  ButtonText 
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
  Code2, 
  Rocket, 
  Star,
  Mail,
  User,
  Briefcase,
  Award,
  Zap,
  Building2,
  CheckCircle,
  Heart,
  Download
} from "lucide-react";

const Home: NextPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quickLinks = [
    {
      title: "Skills",
      href: "/Skills",
      description: "Explore my technical expertise and tools I master",
      gradient: "from-blue-500/10 to-cyan-500/10",
      icon: <CardIcon size="md"><Code2 /></CardIcon>,
    },
    {
      title: "Projects",
      href: "/Projects",
      description: "Discover my portfolio of innovative solutions",
      gradient: "from-purple-500/10 to-pink-500/10",
      icon: <CardIcon size="md"><Rocket /></CardIcon>,
    },
    {
      title: "Experience",
      href: "/Experience",
      description: "Journey through my professional career path",
      gradient: "from-green-500/10 to-emerald-500/10",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: "Contact",
      href: "/Email",
      description: "Let's connect and build something amazing",
      gradient: "from-orange-500/10 to-red-500/10",
      icon: <Mail className="w-8 h-8" />,
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '4+', icon: <Award className="w-6 h-6" />, color: 'text-blue-500' },
    { label: 'Companies', value: '5+', icon: <Building2 className="w-6 h-6" />, color: 'text-green-500' },
    { label: 'Technologies', value: '20+', icon: <Zap className="w-6 h-6" />, color: 'text-yellow-500' },
    { label: 'Projects Delivered', value: '50+', icon: <CheckCircle className="w-6 h-6" />, color: 'text-purple-500' },
  ];

  return (
    <>
      <Head>
        <title>Kunal Verma - Full Stack Developer | React, Next.js & TypeScript Expert | Portfolio 2024</title>
        <meta name="description" content="Experienced Full Stack Developer with 4+ years expertise in React, Next.js, TypeScript, Node.js. Built 50+ scalable web applications for 5+ companies. Available for freelance projects and full-time opportunities." />
        <meta name="keywords" content="Full Stack Developer, React Developer, Next.js Expert, TypeScript Developer, Node.js Developer, JavaScript Developer, Frontend Developer, Backend Developer, Web Developer, Software Engineer, Freelance Developer, React Native, MongoDB, PostgreSQL, AWS, Docker, Kunal Verma Portfolio" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kunal Verma - Full Stack Developer | React & Next.js Expert" />
        <meta property="og:description" content="Experienced Full Stack Developer with 4+ years expertise. Built 50+ scalable applications using React, Next.js, TypeScript, Node.js. Available for hire." />
        <meta property="og:url" content="https://kunalverma.dev" />
        <meta property="og:image" content="https://kunalverma.dev/project_banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Kunal Verma - Full Stack Developer Portfolio" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Kunal Verma - Full Stack Developer | React & Next.js Expert" />
        <meta name="twitter:description" content="Experienced Full Stack Developer with 4+ years expertise. Built 50+ scalable applications. Available for hire." />
        <meta name="twitter:image" content="https://kunalverma.dev/project_banner.jpg" />
        <meta name="twitter:image:alt" content="Kunal Verma - Full Stack Developer Portfolio" />
        
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="India" />
        <link rel="canonical" href="https://kunalverma.dev" />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kunal Verma",
              "jobTitle": "Full Stack Developer",
              "description": "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies",
              "url": "https://kunalverma.dev",
              "image": "https://kunalverma.dev/project_banner.jpg",
              "sameAs": [
                "https://github.com/kunalverma",
                "https://linkedin.com/in/kunalverma",
                "https://twitter.com/kunalverma"
              ],
              "knowsAbout": [
                "React", "Next.js", "TypeScript", "Node.js", "JavaScript", 
                "Full Stack Development", "Frontend Development", "Backend Development",
                "MongoDB", "PostgreSQL", "AWS", "Docker", "React Native"
              ],
              "alumniOf": "Computer Science Engineering",
              "workLocation": {
                "@type": "Place",
                "name": "India"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                },
                "estimatedSalary": {
                  "@type": "MonetaryAmountDistribution",
                  "name": "Full Stack Developer Salary",
                  "currency": "USD"
                }
              }
            })
          }}
        />
        
        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Kunal Verma - Full Stack Development Services",
              "description": "Professional web development services specializing in React, Next.js, and modern web technologies",
              "provider": {
                "@type": "Person",
                "name": "Kunal Verma"
              },
              "areaServed": "Worldwide",
              "serviceType": "Web Development",
              "url": "https://kunalverma.dev"
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-vscode-editor-bg text-vscode-foreground font-cursor pb-20 sm:pb-18 md:pb-16">
        
        <div className="max-w-7xl mx-auto responsive-padding py-6 sm:py-12 relative z-10">
          
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-vscode-accent/3 via-transparent to-vscode-accent/3 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Animated Logo */}
              <motion.div
                className="inline-block mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="relative">
                  <motion.div
                    className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-vscode-accent to-blue-400 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border-2 border-vscode-accent/30"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image
                      src="/profile-image.jpg"
                      alt="Kunal Verma - Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </motion.div>
               
                </div>
              </motion.div>

              {/* AI-Enhanced Title */}
              <MainHeading 
                size="xxl"
                className="mb-6 ai-holographic-text relative"
                animated={true}
                animationProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.6 }
                }}
              >
                <span className="ai-neural-glow">Welcome to My</span>
                <br />
                <span className="ai-quantum-text">Digital Universe</span>
              </MainHeading>
              
              {/* Subtitle */}
              <DescriptionText 
                size="lg"
                className="text-lg sm:text-xl leading-relaxed font-medium text-vscode-foreground/90 max-w-3xl mx-auto px-4 text-center mb-6 sm:mb-8"
                animated={true}
                animationProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6, duration: 0.6 }
                }}
              >
                Where <span className="text-vscode-accent font-bold">innovation</span> meets 
                <span className="text-blue-400 font-bold"> craftsmanship</span> in the world of 
                <span className="text-green-400 font-bold"> modern web development</span>
              </DescriptionText>

              {/* AI-Enhanced Developer Introduction */}
              <motion.div
                className="ai-glass-card neo-shadow-light rounded-2xl responsive-card-padding border border-vscode-border/30 max-w-4xl mx-auto relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {/* Neural Network Lines */}
                <div className="neural-connections"></div>
                <div className="text-lg md:text-xl space-y-3 font-mono">
                  <motion.p
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <span className="text-vscode-keyword font-bold">const</span>
                    <span className="text-vscode-variable font-semibold">developer</span>
                    <span className="text-vscode-operator">=</span>
                    <span className="text-vscode-string">"Kunal Verma"</span>
                    <span className="text-vscode-operator">;</span>
                  </motion.p>
                  
                  <motion.p 
                    className="text-vscode-comment italic pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    {`// Senior Frontend Developer | React.js & Next.js Specialist`}
                  </motion.p>
                  
                  <motion.p 
                    className="text-vscode-comment italic pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    {`// Building enterprise-grade solutions with modern tech stack`}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group flex-1 min-w-[200px] max-w-[280px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* AI Glow Effect */}
                <div className="absolute inset-0 ai-neural-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* AI-Enhanced Card */}
                <div className="relative ai-glass-card neo-shadow-light border border-vscode-border/50 rounded-2xl p-3 sm:p-4 hover:border-vscode-accent/50 transition-all duration-500 overflow-hidden h-40 flex flex-col justify-center">
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-vscode-accent/20 to-transparent rounded-bl-3xl opacity-30"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <motion.div 
                      className="mb-3 p-2.5 bg-gradient-to-br from-vscode-accent/20 to-vscode-accent/10 rounded-xl inline-block"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className={stat.color}>
                        {stat.icon}
                      </div>
                    </motion.div>
                    <SmallHeading 
                      size="md" 
                      className={`${stat.color} mb-1`}
                    >
                      {stat.value}
                    </SmallHeading>
                    <Caption 
                      size="xs" 
                      className="text-vscode-foreground/70 font-medium leading-tight text-center"
                    >
                      {stat.label}
                    </Caption>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* About Me Section */}
          <motion.div
            className="mb-12 sm:mb-16 lg:mb-20 mt-12 sm:mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                <HeroIcon
                  size="lg"
                  className="p-3 sm:p-4 ai-holographic-icon neo-shadow-light rounded-2xl backdrop-blur-sm border border-vscode-accent/40 relative overflow-hidden"
                  animated={true}
                  animationProps={{
                    whileHover: { 
                      scale: 1.05,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <div className="quantum-pulse"></div>
                  <User />
                </HeroIcon>
                <MediumHeading 
                  size="xl"
                  className="bg-gradient-to-r from-vscode-accent via-blue-400 to-vscode-accent bg-clip-text text-transparent text-center sm:text-left"
                  as="h2"
                >
                  About Me
                </MediumHeading>
              </div>
              <DescriptionText 
                size="md"
                className="text-vscode-foreground/70 max-w-3xl mx-auto px-4 text-center"
              >
                Get to know the developer behind the code
              </DescriptionText>
            </motion.div>

            {/* Code Editor */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <CodeEditor onRunClick={() => setIsModalOpen(true)} />
            </motion.div>
          </motion.div>

          {/* Quick Start Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                <HeroIcon
                  size="lg"
                  className="p-3 sm:p-4 ai-quantum-icon neo-shadow-light rounded-2xl backdrop-blur-sm border border-green-400/40 relative overflow-hidden"
                  animated={true}
                  animationProps={{
                    whileHover: { 
                      scale: 1.05,
                      rotate: -5,
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <div className="data-stream"></div>
                  <Rocket />
                </HeroIcon>
                <MediumHeading 
                  size="xl"
                  className="bg-gradient-to-r from-green-400 via-blue-400 to-vscode-accent bg-clip-text text-transparent text-center sm:text-left"
                  as="h2"
                >
                  Quick Start
                </MediumHeading>
              </div>
              <DescriptionText 
                size="md"
                className="text-vscode-foreground/70 max-w-3xl mx-auto px-4 text-center"
              >
                Explore my work and discover what I can bring to your next project
              </DescriptionText>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {quickLinks.map((link, index) => (
                <AnimatedCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  href={link.href}
                  gradient={link.gradient}
                  icon={link.icon}
                  delay={3.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>


          {/* AI-Enhanced CTA Section */}
          <motion.div
            className="text-center ai-glass-card neo-shadow-heavy rounded-2xl border border-vscode-border p-6 sm:p-8 lg:p-12 relative overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.4, duration: 0.8 }}
          >
            {/* Holographic Background */}
            <div className="absolute inset-0 ai-holographic-bg opacity-20"></div>
            <MediumHeading 
              size="xl"
              className="text-vscode-foreground mb-4 sm:mb-6"
              animated={true}
              animationProps={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 3.6 }
              }}
              as="h2"
            >
              Let's Build Something Amazing
            </MediumHeading>
            <DescriptionText 
              size="lg"
              className="text-vscode-muted mb-8 sm:mb-12 max-w-3xl mx-auto px-4 text-center"
              animated={true}
              animationProps={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 3.8 }
              }}
            >
              I'm always excited to collaborate on innovative projects. 
              Whether you have an idea or just want to chat about tech, let's connect!
            </DescriptionText>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 px-2 sm:px-4 max-w-4xl mx-auto">
              <motion.a
                href="/Email"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-vscode-accent hover:bg-vscode-accent-hover text-white rounded-xl font-semibold transition-all duration-300 shadow-glow whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.0 }}
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold">Get In Touch</span>
              </motion.a>
              <motion.a
                href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                download="Kunal_Verma_React_NextJS_Developer.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.1 }}
              >
                <Download className="w-5 h-5 sm:w-4 sm:h-4" />
                <span className="text-sm font-semibold">Download Resume</span>
              </motion.a>
              <motion.a
                href="/Projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-vscode-sidebar-bg hover:bg-vscode-hover-background text-vscode-foreground rounded-xl font-semibold border border-vscode-border hover:border-vscode-accent transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.2 }}
              >
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-semibold">View Projects</span>
              </motion.a>
          </div>
          </motion.div>
        </div>
      </div>

      {/* About Me Modal */}
      <AboutMeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Home;