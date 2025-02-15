import { useRoute } from "wouter";
import PageTransition from "@/components/PageTransition";
import { projects } from "./Projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Define types for the different content formats
type TextContent = string;

type ImageContent = {
  type: "image";
  src: string;
  alt?: string;
};

type ImagesContent = {
  type: "images";
  items: Array<{ src: string; alt?: string }>;
};

type LinkContent = {
  type: "link";
  url: string;
  text?: string;
};

// Union type for all possible content types
type ModuleContent = TextContent | ImageContent | ImagesContent | LinkContent;

// Type for a module
type ProjectModule = {
  heading?: string;
  contents: ModuleContent[];
};

// Extended Project type
type Project = {
  id: number;
  title: string;
  image: string;
  tags: string[];
  modules?: ProjectModule[];
  github?: string;
  link?: string;
};

export default function ProjectDetail() {
  const [, params] = useRoute("/personal_portfolio/projects/:id");
  const project = projects.find((p) => p.id === Number(params?.id)) as Project | undefined;

  if (!project) {
    return <div>Project not found</div>;
  }

  // Helper function to render module content based on type
  const renderModuleContent = (content: ModuleContent) => {
    if (typeof content === "string") {
      // Handle text content (check for formatting)
      if (content.startsWith("**") && content.endsWith("**")) {
        return <strong>{content.slice(2, -2)}</strong>;
      } else if (content.startsWith("*") && content.endsWith("*")) {
        return <em>{content.slice(1, -1)}</em>;
      } else if (content.startsWith("[color:") && content.includes("]")) {
        const colorEnd = content.indexOf("]");
        const color = content.slice(7, colorEnd);
        const text = content.slice(colorEnd + 1);
        return <span style={{ color }}>{text}</span>;
      } else {
        return <p className="mb-4">{content}</p>;
      }
    } else if (content.type === "image") {
      return (
        <img
          src={content.src}
          alt={content.alt || ""}
          className="rounded-lg my-6"
        />
      );
    } else if (content.type === "images") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {content.items.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt || ""}
              className="rounded-lg w-full h-auto"
            />
          ))}
        </div>
      );
    } else if (content.type === "link") {
      return (
        <div className="my-6">
          <Button asChild variant="outline">
            <a
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              {content.text || "Visit Link"}
            </a>
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <PageTransition>
      <div className="py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {project.modules && project.modules.map((module, index) => (
              <div key={index} className="mb-8">
                {module.heading && (
                  <h2 className="text-2xl font-semibold mb-4">{module.heading}</h2>
                )}
                {module.contents.map((content, i) => (
                  <div key={i}>{renderModuleContent(content)}</div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {project.github && (
              <Button asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              </Button>
            )}
            {project.link && (
              <Button asChild variant="outline">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}