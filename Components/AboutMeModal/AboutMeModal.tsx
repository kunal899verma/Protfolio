import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CustomBadge, BadgeDot } from '../Common';
import Image from 'next/image';
import { 
  Download, 
  FileText, 
  Eye, 
  Trophy, 
  Rocket, 
  Zap, 
  Target, 
  Briefcase, 
  Star, 
  Code2, 
  Gamepad2, 
  BookOpen, 
  Music, 
  TrendingUp, 
  Users, 
  MapPin, 
  BarChart3, 
  Building2, 
  Globe,
  Heart
} from 'lucide-react';

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose }) => {
  // Simple scroll blocking without position fixed
  useEffect(() => {
    if (isOpen) {
      // Simple overflow hidden approach
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

    return () => {
        // Restore scrolling
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    };
    }
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const personalInfo = {
    name: "Kunal Verma",
    role: "Senior Frontend Developer",
    location: "Indore, Madhya Pradesh, India",
    experience: "4+ Years",
    email: "kunalv899@gmail.com",
    phone: "+91 6266155742",
    linkedin: "linkedin.com/in/kunalv899",
    github: "github.com/kunalv899"
  };

  const expertise = [
    { category: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript"], color: "brand" },
    { category: "Styling", skills: ["Tailwind CSS", "Styled Components", "CSS3", "SCSS"], color: "aqua" },
    { category: "State Management", skills: ["Redux Toolkit", "Context API", "Zustand"], color: "success" },
    { category: "Backend", skills: ["Node.js", "Express.js", "PostgreSQL"], color: "warning" },
    { category: "Tools", skills: ["Git", "Docker", "Webpack", "Vite"], color: "neutral" }
  ];

  const achievements = [
    { icon: Trophy, text: "Led development of HR platform serving 500+ companies" },
    { icon: Rocket, text: "Built systems reducing hiring time by 50%" },
    { icon: Zap, text: "Improved app performance by 45% through optimization" },
    { icon: Target, text: "Delivered 50+ successful projects across 4+ years" },
    { icon: Briefcase, text: "Worked with enterprise clients like HDFC Bank" },
    { icon: Star, text: "Specialized in React.js ecosystem and modern web technologies" }
  ];

  const interests = [
    { icon: Code2, label: "Coding", description: "Passionate about clean, efficient code" },
    { icon: Gamepad2, label: "Gaming", description: "Strategy games and problem-solving" },
    { icon: BookOpen, label: "Learning", description: "Always exploring new technologies" },
    { icon: Music, label: "Music", description: "Coding soundtrack enthusiast" },
    { icon: TrendingUp, label: "Growth", description: "Personal and professional development" },
    { icon: Users, label: "Collaboration", description: "Team player and mentor" }
  ];

  const modalContent = (
    <div 
      className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-[9999] flex items-center justify-center p-4"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999
      }}
            onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative bg-gradient-to-br from-vscode-sidebar-bg to-vscode-sidebar-bg/90 border border-vscode-border/50 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vscode-accent/20 to-transparent rounded-bl-3xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-vscode-accent/10 to-transparent rounded-tr-3xl opacity-30"></div>

              {/* Header */}
              <div className="relative z-10 p-6 sm:p-8 border-b border-vscode-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-vscode-accent to-blue-400 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-vscode-accent/30">
                      <Image
                        src="/profile-image.jpg"
                        alt="Kunal Verma - Profile"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-vscode-accent to-blue-400 bg-clip-text text-transparent">
                        {personalInfo.name}
                      </h2>
                      <p className="text-vscode-foreground/70 text-lg">{personalInfo.role}</p>
                    </div>
                  </div>
                  
                  <button
                    className="w-10 h-10 bg-vscode-editor-bg/50 hover:bg-vscode-accent/20 rounded-xl flex items-center justify-center transition-colors"
                    onClick={onClose}
                  >
                    <XMarkIcon className="w-5 h-5 text-vscode-foreground" />
                  </button>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="relative z-10 p-6 sm:p-8 overflow-y-auto flex-1">
                <div className="space-y-6">
                  
                  {/* Personal Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-xl p-2 bg-gradient-to-br from-blue-400/20 to-blue-400/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-400">Personal Information</h3>
                      <BadgeDot color="brand" size="md" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-vscode-editor-bg/30 rounded-xl p-4 border border-vscode-border/30">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-vscode-foreground/60">Location:</span>
                            <CustomBadge label={personalInfo.location} color="neutral" size="sm" variant="outline" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-vscode-foreground/60">Experience:</span>
                            <CustomBadge label={personalInfo.experience} color="success" size="sm" variant="glow" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-vscode-editor-bg/30 rounded-xl p-4 border border-vscode-border/30">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-vscode-foreground/60">Email:</span>
                            <span className="text-sm text-vscode-accent font-mono">{personalInfo.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-vscode-foreground/60">Phone:</span>
                            <span className="text-sm text-vscode-accent font-mono">{personalInfo.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resume Download Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg border border-orange-400/30 flex items-center justify-center relative overflow-hidden">
                            <FileText className="w-6 h-6 sm:w-5 sm:h-5 text-orange-400" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                        </div>                      <h3 className="text-xl font-bold text-orange-400">Resume</h3>
                      <BadgeDot color="warning" size="md" />
                    </div>
                    
                    <div className="bg-vscode-editor-bg/30 rounded-xl p-6 border border-vscode-border/30">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Resume Preview */}
                       
                        
                        {/* Resume Info */}
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-vscode-foreground mb-2">
                            Kunal Verma - React.js & Next.js Developer
                          </h4>
                          <p className="text-sm text-vscode-foreground/70 mb-4">
                            Comprehensive overview of my experience, skills, and achievements in modern web development.
                          </p>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                              href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                              download="Kunal_Verma_React_NextJS_Developer.pdf"
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              <Download className="w-4 h-4" />
                              Download Resume
                            </a>
                            <a
                              href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-vscode-sidebar-bg hover:bg-vscode-hover-background text-vscode-foreground rounded-lg font-medium transition-all duration-300 border border-vscode-border shadow-lg hover:shadow-xl"
                            >
                              <Eye className="w-4 h-4" />
                              View Online
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Resume Stats */}
                      <div className="mt-6 pt-4 border-t border-vscode-border/30">
                        <div className="flex flex-wrap justify-center gap-3">
                          <CustomBadge 
                            label="4+ Years Experience" 
                            icon={<BarChart3 className="w-3 h-3" />}
                            color="success" 
                            size="sm" 
                            variant="outline" 
                          />
                          <CustomBadge 
                            label="5+ Companies" 
                            icon={<Building2 className="w-3 h-3" />}
                            color="brand" 
                            size="sm" 
                            variant="outline" 
                          />
                          <CustomBadge 
                            label="50+ Projects" 
                            icon={<Rocket className="w-3 h-3" />}
                            color="warning" 
                            size="sm" 
                            variant="outline" 
                          />
                          <CustomBadge 
                            label="Available for Interview" 
                            icon={<Briefcase className="w-3 h-3" />}
                            color="error" 
                            size="sm" 
                            variant="glow" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-xl p-2 bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-lg">🛠️</div>
                      <h3 className="text-xl font-bold text-green-400">Technical Expertise</h3>
                      <BadgeDot color="success" size="md" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {expertise.map((category, index) => (
                        <div
                          key={category.category}
                          className="bg-vscode-editor-bg/30 rounded-xl p-4 border border-vscode-border/30"
                        >
                          <h4 className="font-semibold text-vscode-foreground mb-3">{category.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                              <CustomBadge
                                key={skill}
                                label={skill}
                                color={category.color as any}
                                size="sm"
                                variant="filled"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-xl p-2 bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 rounded-lg flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-xl font-bold text-yellow-400">Key Achievements</h3>
                      <BadgeDot color="warning" size="md" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="bg-vscode-editor-bg/30 rounded-xl p-4 border border-vscode-border/30 flex items-start gap-3"
                        >
                          <div className="w-6 h-6 bg-vscode-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <achievement.icon className="w-3 h-3 text-vscode-accent" />
                          </div>
                          <p className="text-sm text-vscode-foreground/90 leading-relaxed">{achievement.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-xl p-2 bg-gradient-to-br from-purple-400/20 to-purple-400/10 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-purple-400">Interests & Hobbies</h3>
                      <BadgeDot color="error" size="md" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {interests.map((interest, index) => (
                        <div
                          key={interest.label}
                          className="bg-vscode-editor-bg/30 rounded-xl p-4 border border-vscode-border/30 text-center"
                        >
                          <div className="flex items-center justify-center w-8 h-8 bg-vscode-accent/20 rounded-lg mx-auto mb-2">
                            <interest.icon className="w-4 h-4 text-vscode-accent" />
                          </div>
                          <h4 className="font-semibold text-vscode-foreground mb-1">{interest.label}</h4>
                          <p className="text-xs text-vscode-foreground/60">{interest.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer - Fixed */}
              <div className="relative z-10 px-6 sm:px-8 py-6 border-t border-vscode-border/30 bg-vscode-editor-bg/20 flex-shrink-0">
                {/* Status Badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <CustomBadge 
                    label="Available for opportunities" 
                    icon={<Briefcase className="w-4 h-4" />}
                    color="success" 
                    size="md" 
                    variant="glow" 
                  />
                  <CustomBadge 
                    label="Remote friendly" 
                    icon={<Globe className="w-4 h-4" />}
                    color="brand" 
                    size="md" 
                    variant="outline" 
                  />
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-full sm:w-auto px-8 py-3 bg-vscode-accent hover:bg-vscode-accent-hover text-white rounded-xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                    download="Kunal_Verma_React_NextJS_Developer.pdf"
                    className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                  <button
                    className="w-full sm:w-auto px-8 py-3 bg-vscode-sidebar-bg hover:bg-vscode-hover-background text-vscode-foreground rounded-xl font-semibold text-center transition-all duration-300 border border-vscode-border shadow-lg hover:shadow-xl flex items-center justify-center"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
      </div>
    </div>
  );

  return typeof window !== 'undefined' 
    ? createPortal(modalContent, document.body)
    : null;
};

export default AboutMeModal;
