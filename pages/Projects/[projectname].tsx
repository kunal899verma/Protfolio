import React from "react";
import { useRouter } from "next/router";
import { projectsdata } from "../../Components/JSON/projectsdata";
import ProjectDetails from "../../Components/ProjectDetails";
import Head from "next/head";
import { MediumHeading } from "../../Components/Typography";

const Projectdetails = (props: any) => {
  const router: any = useRouter();
  
  // Show loading state during fallback
  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center h-screen bg-vscode-editor-bg text-vscode-foreground">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vscode-accent mx-auto mb-4"></div>
          <p className="text-vscode-muted">Loading project details...</p>
        </div>
      </div>
    );
  }

  const projectName = props.projectName || router.query.projectname;
  const projectDetails = props.projects.find((project: any) => 
    project.name.replace('.tsx', '').toLowerCase() === projectName
  );
  const altt = projectDetails?.name + " - " + projectDetails?.title;

  // Handle case where project is not found
  if (!projectDetails) {
    return (
      <div className="flex items-center justify-center h-screen bg-vscode-editor-bg text-vscode-foreground">
        <div className="text-center">
          <MediumHeading 
            size="lg"
            className="font-bold mb-4"
            as="h2"
          >
            Project Not Found
          </MediumHeading>
          <p className="text-vscode-muted mb-4">The requested project could not be found.</p>
          <button 
            onClick={() => router.push('/Projects')} 
            className="px-4 py-2 bg-vscode-accent text-white rounded-lg hover:bg-vscode-accent-hover"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{projectDetails.title} - Professional Portfolio</title>
        <meta name="description" content={projectDetails.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${projectDetails.title} - Professional Portfolio`} />
        <meta property="og:description" content={projectDetails.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ProjectDetails projectDetails={projectDetails} altt={altt} />
    </>
  );
};

export function getStaticProps({ params }: any) {
  const projects = projectsdata();
  return {
    props: {
      projects: projects,
      projectName: params.projectname,
    },
  };
}

export async function getStaticPaths() {
  const projects = projectsdata();
  const paths = projects.map((project: any) => ({
    params: { 
      projectname: project.name.replace('.tsx', '').toLowerCase() 
    },
  }));

  return {
    paths,
    fallback: false, // All paths must be generated at build time for static export
  };
}

export default Projectdetails;
