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
    technologies: ["React", "TypeScript", "GraphQL", "Jest", "Cypress"],
    modules: [
      {
        heading: "Overview",
        contents: [
          "Led a team of 5 developers in building scalable web applications. Implemented modern frontend architectures using React, TypeScript, and GraphQL. Improved application performance by 40% through code optimization and lazy loading strategies."
        ]
      },
      {
        heading: "Key Responsibilities",
        contents: [
          "**Architecture Leadership**",
          "Led frontend architecture decisions and established best practices for the team",
          "**Mentorship & Code Quality**",
          "Mentored junior developers and conducted regular code reviews to maintain quality standards",
          "**DevOps Integration**",
          "Implemented CI/CD pipelines using GitHub Actions and comprehensive testing strategies",
          "**UI/UX Collaboration**",
          "Worked closely with the design team to create a library of responsive UI components",
          {
            type: "image",
            src: "/images/component-library.png",
            alt: "UI Component Library"
          }
        ]
      },
      {
        heading: "Achievements",
        contents: [
          "**Performance Optimization**",
          "Improved application load time by 40% through implementing code splitting, lazy loading, and optimized bundle sizes",
          "**Team Productivity**",
          "Increased team velocity by 30% through implementing better development workflows and automated testing",
          {
            type: "link",
            url: "https://techcorp.example.com/case-studies/frontend-optimization",
            text: "View Performance Case Study"
          }
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <PageTransition>
      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="max-w-2xl">
          {experiences.map((experience) => (
            <Link key={experience.id} href={`/personal_portfolio/experience/${experience.id}`}>
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