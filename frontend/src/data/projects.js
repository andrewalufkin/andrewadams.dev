// In data/projects.js
export const projects = [
    {
      id: "cicd-pipeline",
      title: "Full-Stack CI/CD Pipeline Manager",
      shortDescription: "A comprehensive CI/CD pipeline management tool with integrations and monitoring capabilities.",
      longDescription: `This project is a full-stack CI/CD pipeline manager that streamlines the development workflow.
      It integrates with GitHub, GitLab, and Bitbucket to automate build processes, run tests, and deploy applications.
      The system includes real-time monitoring, notifications, and a customizable dashboard.`,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Docker", "Jenkins", "AWS"],
      features: [
        "Automated build processes with container support",
        "Parallel test execution and reporting",
        "Deployment automation with rollback capabilities",
        "Real-time monitoring and notifications",
        "Custom workflow creation through UI or YAML configuration"
      ],
      challenges: [
        "Implementing secure credential management",
        "Designing a scalable architecture to handle concurrent builds",
        "Creating an intuitive UI for complex pipeline configurations"
      ],
      solutions: [
        "Used HashiCorp Vault for credential management",
        "Implemented a microservice architecture for build agents",
        "Created a visual pipeline builder with drag-and-drop functionality"
      ],
      images: [
        "/images/LightCI-screenshot.png",
        "/images/LightCI-screenshot2.png"
      ],
      githubUrl: "https://github.com/andrewalufkin/LightCI",
      liveUrl: "todo"
    },
    {
      id: "ai-bible-app",
      title: "AI Bible Study Assistant",
      shortDescription: "An AI-powered Bible study application that provides insights, cross-references, and contextual information.",
      longDescription: `This project is an AI-powered Bible study assistant that uses natural language processing to provide insights, cross-references, and contextual information.`,
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
      features: [
        "Natural language processing for Bible study",
        "Cross-references and contextual information",
        "Integration with Bible API for detailed study tools"
      ],
      githubUrl: "https://github.com/yourusername/ai-bible-app",
      liveUrl: "https://ai-bible-app.yourdomain.com"
    }   
  ];