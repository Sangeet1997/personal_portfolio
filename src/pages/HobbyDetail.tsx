import { useRoute } from "wouter";
import PageTransition from "@/components/PageTransition";
import { hobbies } from "./Hobbies";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";


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
type HobbyModule = {
  heading?: string;
  contents: ModuleContent[];
};

// Extended Hobby type
type Hobby = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  modules?: HobbyModule[];
};

export default function HobbyDetail() {
  const [, params] = useRoute("/hobbies/:id");
  const hobby = hobbies.find((h) => h.id === Number(params?.id)) as Hobby | undefined;

  if (!hobby) {
    return <div>Hobby not found</div>;
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
          <div className="mb-8">
            <div className="text-primary mb-4 w-16 h-16">
              {hobby.icon}
            </div>
            <h1 className="text-4xl font-bold mb-4">{hobby.title}</h1>
            <p className="text-xl text-muted-foreground">{hobby.description}</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="prose dark:prose-invert max-w-none">
                {hobby.modules && hobby.modules.map((module, index) => (
                  <div key={index} className="mb-8">
                    {module.heading && (
                      <h2 className="text-2xl font-semibold mb-4">{module.heading}</h2>
                    )}
                    {module.contents.map((content, i) => {
                      // Check if content is a string before passing to ReactMarkdown
                      if (typeof content === "string") {
                        return (
                          <div key={i}>
                            <ReactMarkdown>{content}</ReactMarkdown>
                          </div>
                        );
                      }
                      return null; // Return null for non-string content
                    })}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
}