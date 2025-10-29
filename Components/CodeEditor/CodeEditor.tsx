import React from 'react';
import { motion } from 'framer-motion';

interface CodeEditorProps {
  onRunClick?: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onRunClick }) => {
  const codeLines = [
    "const developer = {",
    "  name: 'Kunal Verma',",
    "  role: 'Frontend Developer',",
    "  experience: '4+ years',",
    "  specialization: ['React.js', 'Next.js', 'TypeScript'],",
    "  passion: 'Building exceptional user experiences',",
    "  currentFocus: 'Enterprise-grade web applications',",
    "  availability: 'Open for new opportunities'",
    "};"
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-vscode-sidebar-bg/80 to-vscode-sidebar-bg/60 backdrop-blur-sm rounded-2xl border border-vscode-border/50 overflow-hidden hover:border-vscode-accent/50 transition-all duration-500"
      whileHover={{ y: -4 }}
    >
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-vscode-titlebar-bg border-b border-vscode-border/30">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-vscode-foreground/70 ml-4">about-me.js</span>
        </div>
        
        <motion.button
          onClick={onRunClick}
          className="px-3 py-1 bg-vscode-accent hover:bg-vscode-accent-hover text-white text-xs rounded-md font-medium transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ▶ Run
        </motion.button>
      </div>

      {/* Editor Content */}
      <div className="p-4 font-mono text-sm">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className="flex items-center py-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <span className="text-vscode-muted w-8 text-right mr-4 select-none">
              {index + 1}
            </span>
            <span className="text-vscode-foreground">
              {line.includes('name:') && (
                <>
                  <span className="text-vscode-keyword">  name: </span>
                  <span className="text-vscode-string">'Kunal Verma'</span>
                  <span className="text-vscode-foreground">,</span>
                </>
              )}
              {line.includes('role:') && (
                <>
                  <span className="text-vscode-keyword">  role: </span>
                  <span className="text-vscode-string">'Frontend Developer'</span>
                  <span className="text-vscode-foreground">,</span>
                </>
              )}
              {line.includes('experience:') && (
                <>
                  <span className="text-vscode-keyword">  experience: </span>
                  <span className="text-vscode-string">'4+ years'</span>
                  <span className="text-vscode-foreground">,</span>
                </>
              )}
              {line.includes('specialization:') && (
                <>
                  <span className="text-vscode-keyword">  specialization: </span>
                  <span className="text-vscode-foreground">[</span>
                  <span className="text-vscode-string">'React.js'</span>
                  <span className="text-vscode-foreground">, </span>
                  <span className="text-vscode-string">'Next.js'</span>
                  <span className="text-vscode-foreground">, </span>
                  <span className="text-vscode-string">'TypeScript'</span>
                  <span className="text-vscode-foreground">],</span>
                </>
              )}
              {line.includes('passion:') && (
                <>
                  <span className="text-vscode-keyword">  passion: </span>
                  <span className="text-vscode-string">'Building exceptional user experiences'</span>
                  <span className="text-vscode-foreground">,</span>
                </>
              )}
              {line.includes('currentFocus:') && (
                <>
                  <span className="text-vscode-keyword">  currentFocus: </span>
                  <span className="text-vscode-string">'Enterprise-grade web applications'</span>
                  <span className="text-vscode-foreground">,</span>
                </>
              )}
              {line.includes('availability:') && (
                <>
                  <span className="text-vscode-keyword">  availability: </span>
                  <span className="text-vscode-string">'Open for new opportunities'</span>
                </>
              )}
              {line.includes('const developer') && (
                <>
                  <span className="text-vscode-keyword">const </span>
                  <span className="text-vscode-variable">developer</span>
                  <span className="text-vscode-foreground"> = {`{`}</span>
                </>
              )}
              {line === '};' && (
                <span className="text-vscode-foreground">{'};'}</span>
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeEditor;