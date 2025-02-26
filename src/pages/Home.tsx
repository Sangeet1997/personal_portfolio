import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Terminal from "@/components/Terminal";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Python", "Java", "JavaScript", "React", "Node.js", "MongoDB", "MySQL", "LangChain", "Ollama",
  "Terraform", "Packer", "Cloud Computing", "GCP", "REST API Development", "RAG", "Pinecone", "ChromaDB"
];

const education = [
  {
    school: "Northeastern University",
    degree: "Master of Science in Software Engineering",
    year: "2023 - Present",
    gpa: "3.8 / 4.0",
    coursework: ["Program Structure and Algorithms", "Cloud Computing", "Prompt Engineering and AI", "Agile Software Development"],
    description: "Pursued out of a deep interest in algorithms and their optimization. Found cloud computing challenging"+
                  " but was satisfied with the outcome of the final project. Exploring AI and prompt engineering broadened"+
                  " my interests and helped me secure a co-op and an on-campus research assistant position.",
    specialWork: "Research Assistant (RA) for Organizing Academic Success: AI for Personalized Learning, developed a"+
                  " dynamic AI curriculum, utilizing data-driven insights to enhance engagement and optimize"+
                  " learning outcomes. Created tailored educational content and produced instructional YouTube"+
                  " videos and GitHub guides for hands-on AI learning."
  },
  {
    school: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Mechanical Engineering",
    year: "2017 - 2021",
    gpa: "8.1 / 10",
    coursework: ["Mechanics of Machines", "Fluid Dynamics", "DBMS", "C++ programming", "Data Structures and Algorithms"],
    description: "Pursued due to a strong passion for physics and mathematics. Enjoyed designing models and"+
                  " conducting simulations using SolidWorks and Ansys. Additionally, explored core computer"+
                  " science topics with a focused interest.",
    specialWork: "Developed a condition monitoring system for Friction Stir Welding by preprocessing raw vibration"+
                  " data and classifying weld quality using the Best First Tree (BFT) algorithm, achieving an"+
                  " 82.42% classification accuracy."
  }
];

export default function Home() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const sectionsRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const titles = ["Fullstack Developer", "AI Engineer", "Cloud Developer"];

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

    const intervalId = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const handleDownloadResume = () => {
    // Replace with the actual path to your resume PDF file
    const resumeUrl = "/resume.pdf";
    
    // Create an anchor element and trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sangeet_Saha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-4rem)] relative">
        <div className="h-screen flex items-center">
          <div className="max-w-3xl">
            <h1 ref={headingRef} className="text-6xl font-bold mb-6">
              Hi, I'm <span className="text-muted-foreground">Sangeet Saha</span>
              <br />
              <motion.div
                key={titles[titleIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-6xl font-bold"
              >
                {titles[titleIndex]}
              </motion.div>
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
                    <p className="font-medium">Favorite Coursework:</p>
                    <ul className="list-disc ml-5 text-muted-foreground">
                      {edu.coursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                    {edu.specialWork && (
                      <p className="mt-2 text-muted-foreground"><p className="text-white font-bold">Notable Work:</p> {edu.specialWork}</p>
                    )}
                  </motion.div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <motion.div
          className="fixed bottom-8 left-8 z-10"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={handleDownloadResume}
        >
          <motion.div
            className="flex items-center bg-primary rounded-full overflow-hidden"
            animate={{
              width: isButtonHovered ? 'auto' : '56px',
              height: isButtonHovered ? '56px' : '56px',
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }}
          >
            <Button  
              className="h-14 w-14 rounded-full flex items-center justify-center p-5 bg-primary hover:bg-primary focus:outline-none border-none"
            >
              <Download 
                className="h-6 w-6 text-white" 
                strokeWidth={2}
              />
            </Button>
            <motion.span
              className="text-white font-medium pr-4 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: isButtonHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              Download Resume
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}