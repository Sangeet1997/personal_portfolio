import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Terminal from "@/components/Terminal";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Python", "Java", "JavaScript", "React", "Node.js", "MongoDB", "MySQL", "LangChain", "Ollama",
  "Terraform", "Packer", "Cloud Computing", "GCP", "REST API Development", "RAG", "Pinecone", "ChromaDB"
];

const education = [
  {
    school: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Mechanical Engineering",
    year: "2017 - 2021",
    gpa: "3.8 / 4.0",
    coursework: ["Data Structures", "Algorithms", "Database Management", "Operating Systems", "Web Technologies"],
    description: "Specialized in Software Engineering with a focus on Web Technologies",
    specialWork: "Developed a machine learning model for predictive maintenance in manufacturing."
  },
  {
    school: "Northeastern University",
    degree: "Master of Science in Computer Science",
    year: "2023 - Present",
    gpa: "3.9 / 4.0",
    coursework: ["Advanced Algorithms", "Cloud Computing", "AI & Machine Learning", "Full Stack Development"],
    description: "Intensive program covering modern web development stack",
    specialWork: "Created an AI-powered chatbot for student academic guidance."
  }
];

export default function Home() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const sectionsRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");

    if (sectionsRef.current) {
      const sections = sectionsRef.current.children;
      Array.from(sections).forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    }
  }, []);

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-4rem)]">
        <div className="h-screen flex items-center">
          <div className="max-w-3xl">
            <h1 ref={headingRef} className="text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Sangeet Saha</span>
              <br />
              Fullstack Developer
            </h1>
            <p ref={textRef} className="text-xl text-muted-foreground">
              I craft intelligent and scalable software solutions, blending cutting-edge AI with robust engineering. Let's build the future, one innovation at a time.
            </p>
          </div>
        </div>

        <Terminal />

        <div ref={sectionsRef} className="space-y-32 pb-32">
          <section>
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={edu.school} className="p-6 cursor-pointer" onClick={() => setExpanded(expanded === index ? null : index)}>
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-primary font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: expanded === index ? "auto" : 0, opacity: expanded === index ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-4"
                  >
                    <p className="font-medium">GPA: {edu.gpa}</p>
                    <p className="font-medium">Relevant Coursework:</p>
                    <ul className="list-disc ml-5 text-muted-foreground">
                      {edu.coursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                    {edu.specialWork && (
                      <p className="mt-2 text-muted-foreground">Special Work: {edu.specialWork}</p>
                    )}
                  </motion.div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
