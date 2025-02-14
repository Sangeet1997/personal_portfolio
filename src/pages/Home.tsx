import { useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Terminal from "@/components/Terminal";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React", "TypeScript", "Node.js", "Next.js",
  "TailwindCSS", "GraphQL", "PostgreSQL", "Docker",
  "Git", "AWS", "Redux", "REST APIs"
];

const education = [
  {
    school: "University of Technology",
    degree: "Bachelor of Computer Science",
    year: "2017 - 2021",
    description: "Specialized in Software Engineering with focus on Web Technologies"
  },
  {
    school: "Tech Academy",
    degree: "Full Stack Development Bootcamp",
    year: "2021",
    description: "Intensive program covering modern web development stack"
  }
];

export default function Home() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

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

    // Animate sections when scrolling
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
        {/* Hero Section */}
        <div className="h-screen flex items-center">
          <div className="max-w-3xl">
            <h1
              ref={headingRef}
              className="text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-primary">Sangeet Saha</span>
              <br />
              Frontend Developer
            </h1>
            <p
              ref={textRef}
              className="text-xl text-muted-foreground"
            >
              I build exceptional digital experiences that combine beautiful design
              with smooth functionality. Let's create something amazing together.
            </p>
          </div>
        </div>

        {/* Terminal Section */}
        <Terminal />

        {/* Additional Sections */}
        <div ref={sectionsRef} className="space-y-32 pb-32">
          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-base py-2 px-4"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.school} className="p-6">
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-primary font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}