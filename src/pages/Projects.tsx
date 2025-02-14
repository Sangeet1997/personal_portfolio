import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";

export const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A modern web application built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["React", "TypeScript", "Tailwind"],
    longDescription: "A comprehensive web application that showcases modern React patterns and TypeScript best practices. Features include real-time data updates, responsive design, and seamless user interactions.",
    challenges: "Implementing real-time features while maintaining optimal performance",
    solutions: "Utilized WebSocket connections and efficient state management",
    link: "https://project1.example.com",
    github: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project 2",
    description: "An e-commerce platform with advanced features",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    longDescription: "A full-featured e-commerce platform built with Next.js and Node.js. Includes product management, cart functionality, and secure payment processing.",
    challenges: "Handling complex state management and ensuring secure transactions",
    solutions: "Implemented Redux for state management and integrated Stripe for payments",
    link: "https://project2.example.com",
    github: "https://github.com/yourusername/project2"
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
            <Link key={project.id} href={`/projects/${project.id}`}>
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