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
    "longDescription": "Designed and implemented a REST API using Node.js and Sequelize ORM with MySQL for database management. The API included user authentication, health check endpoints, and robust security measures. The infrastructure was first built on a local MySQL database and later migrated to GCP CloudSQL with automatic load balancing across multiple geographical locations to handle service outages. CI/CD was automated using GitHub Actions, incorporating Jest for integration testing and Terraform scripts for environment provisioning. Security was enhanced using encryption key rings, and logging was implemented with Winston to GCP Log Explorer. Additionally, email and notification services were integrated for improved user communication.",
    "challenges": "Ensuring high availability and fault tolerance across different geographical locations while maintaining seamless CI/CD integration.",
    "solutions": "Implemented automatic load balancing, Terraform for infrastructure automation, and GitHub Actions for continuous deployment. Used encryption key rings for security and Winston for centralized logging.",
    "link": "https://your-deployed-api.example.com",
    "github": "https://github.com/yourusername/rest-api-gcp"  
  },
  {
    "id": 2,
    "title": "FairTrader AI",
    "description": "An AI-powered car marketplace with a conversational assistant.",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    "tags": ["React.js", "Node.js", "MongoDB", "LLM", "LangChain"],
    "longDescription": "FairTrader AI is an intelligent chatbot system designed for a marketplace where users can buy and sell cars while interacting with a conversational assistant named Dave. Dave assists users with navigation, predicts car prices, negotiates deals, and provides context-aware conversations based on user purchase history. The system leverages Llama 3.2 via Ollama and LangChain, along with a vector database for embedding storage and retrieval-augmented generation (RAG).",
    "challenges": "High RAG latency, dataset inconsistencies, and multi-server integration.",
    "solutions": "Optimized embedding storage and retrieval, created a Python standardization script, and established robust API endpoints.",
    "link": "https://youtu.be/LPZE1T6YCU8",
    "github": "https://github.com/yourusername/fairtrader-ai"
  },
  {
    id: 3,
    title: "Project 3",
    description: "A real-time collaboration tool for teams",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tags: ["Vue", "WebSocket", "Redis"],
    longDescription: "A collaborative platform that enables real-time communication and project management for remote teams.",
    challenges: "Maintaining data consistency across multiple users in real-time",
    solutions: "Used WebSocket for real-time updates and implemented conflict resolution",
    link: "https://project3.example.com",
    github: "https://github.com/yourusername/project3"
  },
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