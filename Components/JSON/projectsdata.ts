// Professional Projects Portfolio - Kunal Verma
// Real-world enterprise projects with measurable business impact
export const projectsdata = () => [
  {
    title: "Kama Ayurveda E-Commerce Platform",
    name: "kama-ayurveda.tsx",
    banner: "/project_banner.jpg",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Strapi CMS",
      "AWS"
    ],
    description: `Enterprise e-commerce platform for India's premium Ayurvedic skincare and wellness brand, built during my time at Growisto. Rebuilt customer authentication and account management on a secure token-based architecture and delivered a loyalty & rewards platform, improving retention and engagement.`,
    link: "https://www.kamaayurveda.in/",
    github: null, // Private enterprise project
    logo: "/kamaAyurveda.png",
    features: [
      " Rebuilt Customer Authentication & Account Management on a secure token-based architecture - Reduced login failures by 30% and increased customer retention by 15%",
      " Loyalty & Rewards Platform - Real-time point tracking, tier-based rewards, and redemption workflows, increasing customer engagement by 20%",
      " Managed Complex Application State with Redux Toolkit and React Query - Kept performance and data consistency stable through high-traffic sale events",
      " Enhanced REST APIs and Optimized SQL Queries - Reduced response times and backend server load across high-traffic e-commerce flows",
      " Responsive, Mobile-First Design across the full shopping journey - browsing, cart, checkout, and account management",
      " Secure Payment Gateway Integration with multiple payment options and fraud protection",
      " Seamless CMS Integration with Strapi for dynamic content and product management",
      " Partnered with Backend Teams on API design and contract definition, improving long-term maintainability"
    ],
    height: 2200,
    businessImpact: {
      loginFailures: "-30%",
      customerRetention: "+15%",
      loyaltyEngagement: "+20%",
      backendLoad: "Reduced"
    },
    others: [
      {
        link: "/Projects/dozee-healthcare",
        thumbnail: "/project_banner.jpg",
        logo: "/dozee.png",
        title: "Dozee Healthcare Platform",
        description: `Company website built from scratch with Next.js SSR/SSG and Strapi CMS.`,
      },
      {
        link: "/Projects/hdfc-bank-baas",
        thumbnail: "/project_banner.jpg",
        logo: "/hdfc.jpeg",
        title: "HDFC Bank BaaS Platform",
        description: `Enterprise Banking-as-a-Service admin dashboard and partner portal.`,
      },
      {
        link: "/Projects/sequifi-hr-platform",
        thumbnail: "/project_banner.jpg",
        logo: "/sequifi.png",
        title: "Sequifi HR Platform",
        description: `Multi-tenant HR lifecycle SaaS platform serving 500+ enterprise clients, with a production GenAI & RAG feature.`,
      }
    ],
  },
  {
    title: "Dozee Healthcare Platform",
    name: "dozee-healthcare.tsx",
    banner: "/project_banner.jpg",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Strapi CMS",
      "Tailwind CSS",
      "Node.js",
      "AWS",
      "Performance Optimization"
    ],
    description: `Company website for Dozee, an AI-powered remote patient monitoring platform, built from scratch during my time at Growisto using Next.js SSR and SSG with Strapi as a headless CMS.`,
    link: "https://dozee.us/",
    github: null, // Private healthcare project
    logo: "/dozee.png",
    features: [
      " Built the Company Website from Scratch with Next.js SSR & SSG - Grew organic traffic by 50% in just three months",
      " Integrated Strapi as a Headless CMS - Improved marketing publishing efficiency by 40% for the content team",
      " Managed Complex Application State with Redux Toolkit and React Query - Stable performance across traffic spikes",
      " Enhanced REST APIs and Backend Integrations - Reduced response times for content and product data",
      " Responsive, Accessible Healthcare UI - Optimized for medical professionals and patients across desktop, tablet, and mobile",
      " Performance Optimization - Strong Core Web Vitals and Lighthouse scores for a content-heavy healthcare site",
      " Partnered with Backend Teams on API Design & Contract Definition - Improved maintainability across the platform"
    ],
    height: 2000,
    businessImpact: {
      organicTraffic: "+50%",
      publishingEfficiency: "+40%",
      timeToGrowth: "3 Months",
      coreWebVitals: "Optimized"
    },
    others: [],
  },
  {
    title: "HDFC Bank BaaS Platform",
    name: "hdfc-bank-baas.tsx",
    banner: "/project_banner.jpg",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "REST APIs",
      "Elasticsearch",
      "Redis",
      "PostgreSQL",
      "Multi-Role Authentication"
    ],
    description: `Enterprise Banking-as-a-Service (BaaS) platform built for HDFC Bank during my time at Growisto, enabling seamless integration of banking services for corporate partners with an automated admin dashboard and status management system.`,
    link: null, // Private banking project
    github: null, // Confidential enterprise project
    logo: "/hdfc.jpeg",
    features: [
      "🏦 Admin Dashboard & Status Management System - Automated real-time workflows and status tracking, reducing manual operational effort by 50% and SLA delays by 30%",
      "🤝 Corporate Partner Portal - Multi-role authentication and Elasticsearch-powered search with dynamic approval workflows, improving onboarding submission speed by 20%",
      " Enhanced REST APIs & Redis Caching - Optimized SQL queries to reduce response times and backend server load across high-traffic banking services",
      " Dynamic Approval Workflows - Multi-stage, role-based approval chains for corporate partner onboarding",
      " Real-time Status Tracking - Live visibility into workflow and transaction status for operations teams",
      " Enterprise Security - Multi-role authentication and access control for sensitive banking data",
      "⚙️ API Design & Contract Definition - Partnered with backend teams to define REST contracts, versioning, and error-handling standards"
    ],
    height: 2000,
    businessImpact: {
      manualWorkReduction: "-50%",
      slaDelays: "-30%",
      submissionSpeed: "+20%",
      searchPerformance: "Elasticsearch-Powered"
    },
    others: [],
  },
  {
    title: "Sequifi HR Lifecycle Platform (with GenAI & RAG)",
    name: "sequifi-hr-platform.tsx",
    banner: "/project_banner.jpg",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "GraphQL",
      "WebSockets",
      "PostgreSQL",
      "LLM APIs (OpenAI, Anthropic Claude)",
      "Retrieval-Augmented Generation (RAG)",
      "Zod",
      "Storybook",
      "Docker",
      "AWS"
    ],
    description: `Multi-tenant HR lifecycle SaaS platform I've been architecting and delivering at Sequifi Technologies, serving 500+ enterprise clients across hiring, contracts, and onboarding. Includes a production GenAI feature that integrates LLM APIs with a retrieval-augmented generation pipeline to ground model responses in company knowledge.`,
    link: null, // Private enterprise platform
    github: null, // Confidential HR platform
    logo: "/sequifi.png",
    features: [
      " Multi-Tenant HR Lifecycle SaaS Platform - Serving 500+ enterprise clients, increasing user engagement by 20% through Agile, cross-functional delivery",
      "🧠 Production GenAI Feature - LLM APIs integrated with a Retrieval-Augmented Generation (RAG) pipeline: document chunking, embedding generation, vector similarity search, and context assembly to reduce hallucinations",
      "⚡ Streaming AI Responses & Structured Output - Real-time streaming response UI in React, Zod-based structured output validation, and authenticated LLM routes with RBAC",
      " Real-Time Multi-Stage Hiring Pipeline - GraphQL subscriptions and WebSocket-backed push notifications, reducing average hiring time by 50% across 2,000+ active candidates",
      " Employee Contract Management System - Dynamic form generation, audit trails, and e-signature API integrations, reducing contract processing errors by 65%",
      " Digital Employee Onboarding Platform - Document uploads, e-signatures, and workflow automation, cutting onboarding time from 5 days to 2 days and increasing completion rates by 78%",
      " Modular Next.js & React.js Architecture - Feature-based structure, dynamic imports, and route-level lazy loading, reducing initial load time by 45% while sustaining Lighthouse scores above 90",
      " Reusable UI Component Library - 50+ production React components documented in Storybook, reducing frontend development effort by 35%",
      " Stripe Payments, Background-Verification & E-Signature Integrations - Delivered behind clean service abstractions with defined REST/GraphQL contracts",
      " Normalized Redux Toolkit State with Memoized Selectors (Reselect) - Improved application responsiveness by 30% by eliminating redundant API calls",
      "🔐 JWT Authentication, RBAC & XSS/CSRF Protection - Secured the platform end to end with role-based access control",
      " Owned Git Workflow & CI/CD Release Process - Mentored 3+ junior engineers on coding standards, testing, and performance profiling"
    ],
    height: 2600,
    businessImpact: {
      userEngagement: "+20%",
      hiringTime: "-50%",
      contractErrors: "-65%",
      onboardingCompletion: "+78%",
      loadTime: "-45%",
      devTime: "-35%",
      genAiFeature: "RAG-Grounded"
    },
    others: [],
  }
];
