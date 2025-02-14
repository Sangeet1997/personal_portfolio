import { useRoute } from "wouter";
import PageTransition from "@/components/PageTransition";
import { projects } from "./Projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const project = projects.find((p) => p.id === Number(params?.id));

  if (!project) {
    return <div>Project not found</div>;
  }

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
          
          <div className="flex gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">{project.longDescription}</p>

            <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
            <p className="mb-8">{project.challenges}</p>

            <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
            <p className="mb-8">{project.solutions}</p>
          </div>

          <div className="flex gap-4 mt-8">
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
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
