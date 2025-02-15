import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";

export const projects = [
  {
    "id": 1,
    "title": "REST API Development and GCP Infrastructure Setup",
    "description": "Developed and deployed a scalable Node.js REST API with authentication, CI/CD, and GCP infrastructure.",
    "image": "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    "tags": ["Node.js", "REST API", "Sequelize", "MySQL", "GCP", "Terraform", "CI/CD"],
    "modules": [
      {
        "heading": "Overview",
        "contents": [
          "Designed and implemented a REST API using Node.js and Sequelize ORM with MySQL for database management. The API included user authentication, health check endpoints, and robust security measures.",
          {
            "type": "image",
            "src": "/images/api-architecture.png",  // Replace with actual image if available
            "alt": "API Architecture Diagram"
          },
          "The infrastructure was first built on a local MySQL database and later migrated to GCP CloudSQL with automatic load balancing across multiple geographical locations to handle service outages."
        ]
      },
      {
        "heading": "Key Features",
        "contents": [
          "**Authentication System**",
          "Secure user authentication with JWT tokens and role-based access control",
          "**Database Management**",
          "Sequelize ORM integration with MySQL for efficient data handling",
          "**Cloud Infrastructure**",
          "GCP CloudSQL deployment with geographical redundancy",
          {
            "type": "images",
            "items": [
              { "src": "/images/dashboard.png", "alt": "API Dashboard" },
              { "src": "/images/metrics.png", "alt": "Performance Metrics" }
            ]
          }
        ]
      },
      {
        "heading": "Challenges",
        "contents": [
          "Ensuring high availability and fault tolerance across different geographical locations while maintaining seamless CI/CD integration.",
          "Handling database migrations during zero-downtime deployments",
          "Implementing proper security measures for sensitive data"
        ]
      },
      {
        "heading": "Solutions",
        "contents": [
          "Implemented automatic load balancing, Terraform for infrastructure automation, and GitHub Actions for continuous deployment.",
          "Used encryption key rings for security and Winston for centralized logging to GCP Log Explorer.",
          {
            "type": "link",
            "url": "https://cloud.google.com/kms/docs/encryption-key-rings",
            "text": "Learn about GCP Encryption Key Rings"
          }
        ]
      },
      {
        "heading": "CI/CD Pipeline",
        "contents": [
          "Automated deployment workflow using GitHub Actions",
          "Integration testing with Jest before each deployment",
          "Terraform scripts for consistent environment provisioning",
          {
            "type": "image",
            "src": "/images/cicd-pipeline.png",  // Replace with actual image if available
            "alt": "CI/CD Pipeline Workflow"
          }
        ]
      }
    ],
    "link": "https://your-deployed-api.example.com",
    "github": "https://github.com/yourusername/rest-api-gcp"  
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/personal_portfolio/projects/${project.id}`}>
              <a className="cursor-pointer">
                <ProjectCard {...project} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}