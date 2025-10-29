import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../Components/Layouts/Layout";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary";
import dynamic from "next/dynamic";
// Removed react-medium-image-zoom for React 18 compatibility

const NextNProgress = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Kunal Verma" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kunal Verma - Full Stack Developer Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@kunalverma" />
        <meta name="twitter:site" content="@kunalverma" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Additional SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#1e1e1e" />
      </Head>
      
      <ErrorBoundary>
        <NextNProgress
          height={5}
          color="linear-gradient(to right, #00c6ff, #0072ff)"
          options={{ easing: "ease", speed: 500, showSpinner: false }}
        />
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
          <Analytics />
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
