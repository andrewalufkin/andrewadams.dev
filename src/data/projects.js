// In data/projects.js
export const projects = [
    {
      id: "cicd-pipeline",
      title: "Full-Stack CI/CD Pipeline Manager",
      shortDescription: "A comprehensive CI/CD pipeline management tool with integrations and monitoring capabilities.",
      longDescription: `This project is a full-stack CI/CD pipeline manager that streamlines the development workflow.
      It integrates with GitHub & GitLab to automate build processes, run tests, and deploy applications.
      The system includes real-time monitoring, notifications, and a customizable dashboard.`,
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
      features: [
        "Automated build processes",
        "One-click deployment to AWS",
        "Custom workflow creation through UI",
        "Custom domain management",
        "Webhook integration with GitHub",
        "Billing system with Stripe"
      ],
      images: [
        "/images/LightCI-screenshot.png",
      ],
      githubUrl: "https://github.com/andrewalufkin/lightci",
      liveUrl: "todo"
    },
    {
      id: "ai-bible-app",
      title: "AI Bible Study Assistant",
      shortDescription: "An AI-powered Bible study application that provides insights, cross-references, and contextual information.",
      longDescription: `This project is an AI-powered Bible study assistant that uses natural language processing to provide insights, cross-references, and contextual information.`,
      technologies: ["React", "Flask", "MongoDB", "Railway"],
      features: [
        "RAG (Retrieval-Augmented Generation) for generating insights",
        "User note system",
        "Social network for sharing study notes"
      ],
      images: [
        "/images/bibleApp-screenshot.png",
      ],
      githubUrl: "https://github.com/andrewalufkin/bible-app-backend",
      liveUrl: "https://bible-app-frontend-production.up.railway.app/"
    }   
  ];