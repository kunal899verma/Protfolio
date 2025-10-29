import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI with VS Code theme
      return (
        <div className="min-h-screen bg-vscode-editor-bg text-vscode-foreground flex items-center justify-center p-6">
          <motion.div
            className="cursor-card rounded-xl p-8 max-w-2xl w-full text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Error Icon */}
            <motion.div
              className="w-20 h-20 bg-vscode-error/20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-10 h-10 text-vscode-error" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </motion.div>

            {/* Error Title */}
            <motion.h1
              className="text-3xl font-bold text-vscode-error mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Oops! Something went wrong
            </motion.h1>

            {/* Error Message */}
            <motion.p
              className="text-vscode-muted mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We encountered an unexpected error. Don't worry, it's not your fault!
            </motion.p>

            {/* Error Details (Development Mode) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                className="bg-vscode-selection-bg border border-vscode-border rounded-lg p-4 mb-6 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-vscode-error font-semibold mb-2">Error Details:</h3>
                <p className="text-sm text-vscode-foreground/80 font-mono break-all">
                  {this.state.error.message}
                </p>
                {this.state.errorInfo && (
                  <details className="mt-2">
                    <summary className="text-vscode-accent cursor-pointer">Stack Trace</summary>
                    <pre className="text-xs text-vscode-muted mt-2 overflow-auto max-h-40">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={this.handleReload}
                className="cursor-button px-6 py-3 bg-vscode-accent text-white rounded-lg font-semibold hover:bg-vscode-accent-hover transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="cursor-button px-6 py-3 border border-vscode-border text-vscode-foreground rounded-lg font-semibold hover:border-vscode-accent transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </motion.div>

            {/* Help Text */}
            <motion.p
              className="text-sm text-vscode-muted mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              If the problem persists, please contact support or try refreshing the page.
            </motion.p>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;