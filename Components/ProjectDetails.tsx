// Using native scrollbars with CSS styling
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { CustomBadge, BadgeDot } from "./Common";
// Removed react-medium-image-zoom for React 18 compatibility
import { 
  MainHeading, 
  MediumHeading, 
  SmallHeading, 
  CardHeading, 
  DescriptionText, 
  CardDescription, 
  Caption,
  ButtonText,
  ProjectDescription
} from "./Typography";
import { Rocket, Zap, Smartphone, TrendingUp } from "lucide-react";

const ProjectDetails: React.FC<any> = ({ projectDetails, altt }: any) => {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  // Error handling for missing projectDetails
  if (!projectDetails) {
    return (
      <div className="flex items-center justify-center h-screen bg-vscode-editor-bg text-vscode-foreground">
        <div className="text-center">
          <MediumHeading size="lg" className="font-bold mb-4" as="h2">Project Not Found</MediumHeading>
          <CardDescription size="md" className="text-vscode-muted">The requested project details could not be loaded.</CardDescription>
        </div>
      </div>
    );
  }

  // Provide default values for missing properties
  const safeProjectDetails = {
    banner: projectDetails.banner || '/project_banner.jpg',
    logo: projectDetails.logo || '/favicon.ico',
    title: projectDetails.title || 'Untitled Project',
    description: projectDetails.description || 'No description available',
    github: projectDetails.github || null,
    link: projectDetails.link || null,
    skills: projectDetails.skills || [],
    features: projectDetails.features || [],
    businessImpact: projectDetails.businessImpact || null,
    ...projectDetails
  };

  return (
    <div 
      className="h-screen overflow-y-auto scrollbar-thin scrollbar-track-vscode-editor-bg scrollbar-thumb-vscode-scrollbar-slider"
      style={{ 
        height: "100vh",
        scrollbarWidth: "thin",
        scrollbarColor: "var(--vscode-scrollbar-slider) var(--vscode-editor-background)"
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-vscode-editor-bg via-vscode-editor-bg to-vscode-sidebar-bg">
        
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-vscode-accent/5 via-transparent to-vscode-accent/10"></div>
          
          {/* Content */}
          <div className="relative container mx-auto px-6 py-16 max-w-6xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Project Icon */}
              <motion.div
                className="inline-flex items-center gap-4 mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-2xl flex items-center justify-center border border-vscode-accent/40 overflow-hidden"
                  style={{
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    minHeight: '64px'
                  }}
                >
                  <img
                    src={safeProjectDetails.logo}
                    alt={`${safeProjectDetails.title} logo`}
                    className="object-contain"
                    style={{
                      width: '40px',
                      height: '40px',
                      maxWidth: '40px',
                      maxHeight: '40px'
                    }}
                  />
                </div>
                <div className="text-left">
                  <MainHeading 
                    size="xl"
                    className="font-bold bg-gradient-to-r from-vscode-accent via-blue-400 to-vscode-accent bg-clip-text text-transparent"
                    as="h1"
                  >
                    {safeProjectDetails.title}
                  </MainHeading>
                  <CardDescription size="md" className="text-vscode-foreground/60 mt-2">{safeProjectDetails.name}</CardDescription>
                </div>
              </motion.div>

              {/* Description */}
              <DescriptionText 
                size="lg"
                className="text-vscode-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                {safeProjectDetails.description}
              </DescriptionText>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {safeProjectDetails.link && (
                  <motion.a
                    href={safeProjectDetails.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-vscode-accent hover:bg-vscode-accent-hover text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ButtonText size="md">🔗 View Live Project</ButtonText>
                  </motion.a>
                )}
                {safeProjectDetails.github && (
                  <motion.a
                    href={safeProjectDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-vscode-sidebar-bg hover:bg-vscode-hover-background text-vscode-foreground rounded-xl font-semibold transition-all duration-300 border border-vscode-border shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ButtonText size="md">📂 View Source Code</ButtonText>
                  </motion.a>
                )}
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap justify-center gap-3">
                <CustomBadge 
                  label="Production Ready" 
                  color="success" 
                  size="md" 
                  variant="glow"
                  icon={<Rocket className="w-3 h-3" />}
                />
                <CustomBadge 
                  label="High Performance" 
                  color="warning" 
                  size="md" 
                  variant="outline"
                  icon={<Zap className="w-3 h-3" />}
                />
                <CustomBadge 
                  label="Responsive Design" 
                  color="brand" 
                  size="md" 
                  variant="filled"
                  icon={<Smartphone className="w-3 h-3" />}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="container mx-auto px-6 py-12 max-w-6xl">
          
          {/* Tech Stack Section */}
          {safeProjectDetails.skills && safeProjectDetails.skills.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center mb-8">
                <MediumHeading 
                  size="lg"
                  className="font-bold text-vscode-foreground mb-4"
                  as="h2"
                >
                  🛠️ Technology Stack
                </MediumHeading>
                <CardDescription size="md" className="text-vscode-foreground/70">
                  Modern technologies and frameworks used in this project
                </CardDescription>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {safeProjectDetails.skills.map((skill: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  >
                    <CustomBadge
                      label={skill}
                      color={index % 4 === 0 ? "brand" : index % 4 === 1 ? "success" : index % 4 === 2 ? "warning" : "aqua"}
                      size="md"
                      variant="outline"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features Section */}
          {safeProjectDetails.features && safeProjectDetails.features.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-12">
                <MediumHeading 
                  size="lg"
                  className="font-bold text-vscode-foreground mb-4"
                  as="h2"
                >
                  ✨ Key Features & Achievements
                </MediumHeading>
                <CardDescription size="md" className="text-vscode-foreground/70">
                  Detailed breakdown of project capabilities and business impact
                </CardDescription>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safeProjectDetails.features.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-vscode-sidebar-bg to-vscode-sidebar-bg/80 backdrop-blur-sm border border-vscode-border/50 rounded-xl p-6 hover:border-vscode-accent/50 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-vscode-accent/30 to-vscode-accent/10 rounded-lg flex items-center justify-center border border-vscode-accent/40 flex-shrink-0 mt-1">
                          <BadgeDot color="success" size="sm" />
                        </div>
                        <ProjectDescription size="md" className="text-vscode-foreground/90 leading-relaxed">
                          {feature}
                        </ProjectDescription>
                      </div>
                  </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Business Impact Section */}
          {safeProjectDetails.businessImpact && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center mb-12">
                <MediumHeading 
                  size="lg"
                  className="font-bold text-vscode-foreground mb-4 flex items-center justify-center gap-2"
                  as="h2"
                >
                  <TrendingUp className="w-5 h-5 text-vscode-accent" />
                  Business Impact & Results
                </MediumHeading>
                <CardDescription size="md" className="text-vscode-foreground/70">
                  Measurable outcomes and performance improvements
                </CardDescription>
            </div>
              <div className="flex justify-center">
                {(() => {
                  const filteredItems = Object.entries(safeProjectDetails.businessImpact)
                    .filter(([key, value]) => value && value.toString().trim() !== '');
                  const itemCount = filteredItems.length;
                  const gridCols = itemCount <= 2 ? 'grid-cols-1 sm:grid-cols-2' : 
                                  itemCount === 3 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' :
                                  itemCount === 4 ? 'grid-cols-2 md:grid-cols-4' :
                                  itemCount === 5 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' :
                                  'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
                  
                  return (
                    <div className={`grid ${gridCols} gap-6 max-w-fit`}>
                      {filteredItems.map(([key, value]: [string, any], index: number) => (
                    <motion.div
                      key={key}
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    >
                      <div className="bg-gradient-to-br from-vscode-sidebar-bg to-vscode-sidebar-bg/80 backdrop-blur-sm border border-vscode-border/50 rounded-xl p-6 hover:border-vscode-accent/50 transition-all duration-300 h-full w-full min-h-[120px] flex flex-col items-center justify-center text-center">
                        <SmallHeading size="sm" className="font-bold text-vscode-accent mb-2">{value}</SmallHeading>
                        <Caption size="xs" className="text-vscode-foreground/60 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
          </Caption>
        </div>
                    </motion.div>
                      ))}
      </div>
                  );
                })()}
        </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;