import { useRoute } from "wouter";
import PageTransition from "@/components/PageTransition";
import { experiences } from "./Experience";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ExperienceDetail() {
  const [, params] = useRoute("/experience/:id");
  const experience = experiences.find((e) => e.id === Number(params?.id));

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <PageTransition>
      <div className="py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{experience.title}</h1>
            <p className="text-xl text-primary mb-2">{experience.company}</p>
            <p className="text-muted-foreground">{experience.date}</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-lg mb-6">{experience.longDescription}</p>

              <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {experience.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
}
