import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
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
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertTriangle,
  RefreshCw,
  ExternalLink
} from "lucide-react";

export default function Custom404() {
  const router = useRouter();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-vscode-editor-bg text-vscode-foreground font-cursor flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        className="max-w-4xl mx-auto text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated 404 Number */}
        <motion.div
          className="relative mb-6 sm:mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            <MainHeading 
              size="xxl"
              className="font-black text-transparent bg-clip-text bg-gradient-to-r from-vscode-accent via-blue-400 to-purple-500 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl"
              as="h1"
            >
              404
            </MainHeading>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-vscode-accent/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Error Icon */}
        <motion.div
          className="mb-4 sm:mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30">
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <MediumHeading 
            size="lg"
            className="font-bold text-vscode-foreground mb-4"
            as="h2"
          >
            Oops! Page Not Found
          </MediumHeading>
          <DescriptionText 
            size="lg"
            className="text-vscode-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          >
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best developers get lost sometimes!
          </DescriptionText>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            onClick={handleGoBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-vscode-accent hover:bg-vscode-accent-hover text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <ButtonText size="md">Go Back</ButtonText>
          </motion.button>

          <Link href="/" className="w-full sm:w-auto">
            <motion.button
              className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-vscode-sidebar-bg hover:bg-vscode-hover-background text-vscode-foreground border border-vscode-border hover:border-vscode-accent rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <ButtonText size="md">Go Home</ButtonText>
            </motion.button>
          </Link>

          <motion.button
            onClick={handleRefresh}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-vscode-sidebar-bg hover:bg-vscode-hover-background text-vscode-foreground border border-vscode-border hover:border-vscode-accent rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
            <ButtonText size="md">Refresh</ButtonText>
          </motion.button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          className="bg-vscode-sidebar-bg/30 border border-vscode-border/50 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <SmallHeading 
            size="sm"
            className="font-semibold text-vscode-foreground mb-3 sm:mb-4"
            as="h3"
          >
            Maybe you were looking for:
          </SmallHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto sm:gap-3">
            <Link href="/">
              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-vscode-editor-bg/50 hover:bg-vscode-hover-background/50 rounded-lg border border-vscode-border/30 hover:border-vscode-accent/50 transition-all duration-200"
                whileHover={{ x: 5 }}
              >
                <Home className="w-3 h-3 sm:w-4 sm:h-4 text-vscode-accent" />
                <CardDescription size="sm" className="text-vscode-foreground text-xs sm:text-sm">
                  Home Page
                </CardDescription>
              </motion.div>
            </Link>
            <Link href="/Projects">
              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-vscode-editor-bg/50 hover:bg-vscode-hover-background/50 rounded-lg border border-vscode-border/30 hover:border-vscode-accent/50 transition-all duration-200"
                whileHover={{ x: 5 }}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-vscode-accent" />
                <CardDescription size="sm" className="text-vscode-foreground text-xs sm:text-sm">
                  Projects
                </CardDescription>
              </motion.div>
            </Link>
            <Link href="/Skills">
              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-vscode-editor-bg/50 hover:bg-vscode-hover-background/50 rounded-lg border border-vscode-border/30 hover:border-vscode-accent/50 transition-all duration-200"
                whileHover={{ x: 5 }}
              >
                <Search className="w-3 h-3 sm:w-4 sm:h-4 text-vscode-accent" />
                <CardDescription size="sm" className="text-vscode-foreground text-xs sm:text-sm">
                  Skills
                </CardDescription>
              </motion.div>
            </Link>
            <Link href="/Email">
              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-vscode-editor-bg/50 hover:bg-vscode-hover-background/50 rounded-lg border border-vscode-border/30 hover:border-vscode-accent/50 transition-all duration-200"
                whileHover={{ x: 5 }}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-vscode-accent" />
                <CardDescription size="sm" className="text-vscode-foreground text-xs sm:text-sm">
                  Contact
                </CardDescription>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
