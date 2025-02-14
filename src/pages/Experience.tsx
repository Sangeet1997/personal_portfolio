import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import TimelineItem from "@/components/TimelineItem";

export const experiences = [
  {
    id: 1,
    date: "2021 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    description: "Leading the frontend development team and implementing modern web solutions.",
    longDescription: "Led a team of 5 developers in building scalable web applications. Implemented modern frontend architectures using React, TypeScript, and GraphQL. Improved application performance by 40% through code optimization and lazy loading strategies.",
    responsibilities: [
      "Led frontend architecture decisions and implementation",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines and testing strategies",
      "Collaborated with design team to create responsive UI components"
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Jest", "Cypress"]
  },
  {
    id: 2,
    date: "2019 - 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Developed responsive web applications using React and TypeScript.",
    longDescription: "Worked on multiple client projects developing responsive and accessible web applications. Specialized in creating interactive data visualizations and complex user interfaces.",
    responsibilities: [
      "Built responsive web applications for various clients",
      "Implemented complex UI components and animations",
      "Optimized application performance and accessibility",
      "Collaborated with backend team on API integration"
    ],
    technologies: ["React", "JavaScript", "SASS", "D3.js", "REST APIs"]
  },
  {
    id: 3,
    date: "2017 - 2019",
    title: "Web Developer",
    company: "StartUp Inc",
    description: "Built and maintained various client websites and web applications.",
    longDescription: "Started as a junior developer and quickly grew to handle full-stack development responsibilities. Worked on both client websites and internal tools.",
    responsibilities: [
      "Developed and maintained client websites",
      "Created internal tools for project management",
      "Handled database design and optimization",
      "Implemented responsive designs and UI components"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  },
];

export default function Experience() {
  return (
    <PageTransition>
      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="max-w-2xl">
          {experiences.map((experience) => (
            <Link key={experience.id} href={`/experience/${experience.id}`}>
              <a className="block cursor-pointer">
                <TimelineItem {...experience} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}