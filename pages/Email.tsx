import { NextPage } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useResponsive } from "../Components/hooks/useResponsive";
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Phone, MapPin, Linkedin, Github, Download, FileText } from "lucide-react";
import { 
  MainHeading, 
  MediumHeading, 
  SmallHeading, 
  CardHeading, 
  DescriptionText, 
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

const Email: NextPage = () => {
  const { isMobile, isTablet, isTabletOrMobile } = useResponsive();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const finalSendEmail = async () => {
    setLoading(true);
    setError("");
    
    try {
      const data = {
        email: email,
        message: message,
        name: name,
      };
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to send email');
      }
      setEmail("");
      setMessage("");
      setName("");
      setDone(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kunalv899@gmail.com",
      href: "mailto:kunalv899@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 6266155742",
      href: "tel:+916266155742"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Indore, Madhya Pradesh, India",
      href: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/kunalv899",
      href: "https://linkedin.com/in/kunalv899"
    }
  ];

  return (
    <div className="min-h-screen bg-vscode-editor-bg text-vscode-foreground font-cursor overflow-y-auto pb-20 sm:pb-18 md:pb-16">
      <Head>
        <title>Contact | Kunal Verma - Frontend Developer</title>
        <meta name="description" content="Get in touch with Kunal Verma for collaboration opportunities, project discussions, or just to say hello." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto responsive-padding py-6 sm:py-12 mb-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <motion.div
              className="text-4xl p-4 bg-gradient-to-br from-vscode-accent/20 to-vscode-accent/10 rounded-2xl backdrop-blur-sm border border-vscode-accent/40"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <HeroIcon size="lg">
                <Mail />
              </HeroIcon>
            </motion.div>
            <MainHeading 
              size="xxl"
              className="font-extrabold bg-gradient-to-r from-vscode-accent via-blue-400 to-vscode-accent bg-clip-text text-transparent"
              as="h1"
            >
              Let's Connect
            </MainHeading>
          </div>
          <DescriptionText 
            size="lg"
            className="text-vscode-foreground/70 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </DescriptionText>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-vscode-sidebar-bg/50 to-vscode-sidebar-bg/30 backdrop-blur-sm border border-vscode-border/50 rounded-2xl p-6 sm:p-8">
              <MediumHeading 
                size="lg"
                className="font-bold text-vscode-foreground mb-6"
                as="h2"
              >
                Get In Touch
              </MediumHeading>
              <DescriptionText 
                size="md"
                className="text-vscode-foreground/70 mb-8 leading-relaxed"
              >
                I'm always excited to collaborate on innovative projects. Whether you have an idea, need technical expertise, 
                or just want to chat about technology, feel free to reach out!
              </DescriptionText>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-vscode-editor-bg/50 border border-vscode-border/30 hover:border-vscode-accent/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="text-vscode-accent">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <Caption 
                        size="sm"
                        className="text-vscode-foreground/60 font-medium"
                        as="p"
                      >
                        {info.label}
                      </Caption>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-vscode-foreground hover:text-vscode-accent transition-colors duration-200 font-medium"
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <CardDescription 
                          size="md"
                          className="text-vscode-foreground font-medium"
                          as="p"
                        >
                          {info.value}
                        </CardDescription>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-vscode-sidebar-bg/50 to-vscode-sidebar-bg/30 backdrop-blur-sm border border-vscode-border/50 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MediumHeading 
              size="lg"
              className="font-bold text-vscode-foreground mb-6"
              as="h2"
            >
              Send Message
            </MediumHeading>
            
            {done ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <SmallHeading 
                  size="sm"
                  className="font-bold text-green-400 mb-2"
                  as="h3"
                >
                  Message Sent!
                </SmallHeading>
                <CardDescription 
                  size="md"
                  className="text-vscode-foreground/70"
                >
                  Thank you for reaching out. I'll get back to you soon!
                </CardDescription>
                <button
                  onClick={() => setDone(false)}
                  className="mt-4 px-6 py-2 bg-vscode-accent hover:bg-vscode-accent-hover text-white rounded-lg font-medium transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); finalSendEmail(); }} className="space-y-6">
                <div>
                  <label className="block mb-2">
                    <Caption 
                      size="sm"
                      className="font-medium text-vscode-foreground/80"
                      as="span"
                    >
                      <User className="w-4 h-4 inline mr-2" />
                      Your Name
                    </Caption>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-vscode-editor-bg border border-vscode-border/50 rounded-lg text-vscode-foreground placeholder-vscode-foreground/50 focus:border-vscode-accent focus:ring-1 focus:ring-vscode-accent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    <Caption 
                      size="sm"
                      className="font-medium text-vscode-foreground/80"
                      as="span"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </Caption>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-vscode-editor-bg border border-vscode-border/50 rounded-lg text-vscode-foreground placeholder-vscode-foreground/50 focus:border-vscode-accent focus:ring-1 focus:ring-vscode-accent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    <Caption 
                      size="sm"
                      className="font-medium text-vscode-foreground/80"
                      as="span"
                    >
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </Caption>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-vscode-editor-bg border border-vscode-border/50 rounded-lg text-vscode-foreground placeholder-vscode-foreground/50 focus:border-vscode-accent focus:ring-1 focus:ring-vscode-accent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </div>

                {error && (
                  <motion.div
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-5 h-5" />
                    <Caption size="sm" as="span">{error}</Caption>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading || !name || !email || !message}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-vscode-accent hover:bg-vscode-accent-hover disabled:bg-vscode-accent/50 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <ButtonText size="md">Sending...</ButtonText>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <ButtonText size="md">Send Message</ButtonText>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Additional CTA Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-vscode-sidebar-bg/50 to-vscode-sidebar-bg/30 backdrop-blur-sm border border-vscode-border/50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <MediumHeading 
              size="lg"
              className="font-bold text-vscode-foreground mb-4"
              as="h3"
            >
              Ready to Start Your Project?
            </MediumHeading>
            <DescriptionText 
              size="md"
              className="text-vscode-foreground/70 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how we can bring your vision to life with modern web technologies and exceptional user experiences.
            </DescriptionText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kunalv899@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-4 py-4 bg-vscode-accent hover:bg-vscode-accent-hover text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <ButtonText size="md">Email Me Directly</ButtonText>
              </a>
              <a
                href="/Resume/Kunal_Verma_React_NextJS_Developer.pdf"
                download="Kunal_Verma_React_NextJS_Developer.pdf"
                className="inline-flex items-center justify-center gap-3 px-4 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 sm:w-5 sm:h-5" />
                <ButtonText size="md">Download Resume</ButtonText>
              </a>
              <a
                href="https://linkedin.com/in/kunalv899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-4 py-4 bg-vscode-sidebar-bg hover:bg-vscode-hover-background text-vscode-foreground border border-vscode-border hover:border-vscode-accent rounded-lg font-semibold transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <ButtonText size="md">Connect on LinkedIn</ButtonText>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Email;