import { useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import SkillBar from "@/components/SkillBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    year: "2018",
    title: "Mechanical Engineering",
    description: "Started career as a Mechanical Engineer",
    skills: [
      { name: "CAD Design", level: 85 },
      { name: "Project Management", level: 70 },
      { name: "3D Modeling", level: 75 }
    ]
  },
  {
    year: "2020",
    title: "Software Engineering",
    description: "Transitioned to Software Development",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 }
    ]
  },
  {
    year: "2023",
    title: "Advanced Technologies",
    description: "Expanded into AI and Cloud",
    skills: [
      { name: "Cloud Architecture", level: 75 },
      { name: "Machine Learning", level: 70 },
      { name: "DevOps", level: 80 }
    ]
  }
];

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll(".timeline-item");

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <PageTransition>
      <div className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">My Journey</h2>
        
        <div ref={timelineRef} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          {journeySteps.map((step, index) => (
            <div
              key={step.year}
              className={`timeline-item relative mb-24 ${
                index % 2 === 0 ? "pr-8 md:ml-auto md:pl-8" : "pl-8"
              } md:w-1/2`}
            >
              {/* Year bubble */}
              <motion.div
                className="absolute top-0 bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
                style={{
                  left: index % 2 === 0 ? "-1.5rem" : "auto",
                  right: index % 2 === 0 ? "auto" : "-1.5rem"
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                {step.year}
              </motion.div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                
                {/* Skills */}
                <div className="space-y-4">
                  {step.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
