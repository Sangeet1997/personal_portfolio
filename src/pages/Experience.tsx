import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import TimelineItem from "@/components/TimelineItem";

export const experiences = [
  {
    id: 1,
    date: "July 2021 - August 2023",
    title: "SAP Basis Consultant",
    company: "Wipro",
    location: "Bengaluru, Karnataka",
    description: "Specialized in SAP system optimization, maintenance, and team leadership, driving significant performance improvements and operational efficiency.",
    technologies: ["SAP ECC", "S/4HANA", "SAP Basis", "System Administration", "Performance Monitoring"],
    modules: [
      {
      heading: "Overview",
      contents: [
      "Served as a SAP Basis Consultant responsible for system optimization, maintenance, and performance monitoring of SAP ECC and S/4HANA environments. Led technical operations while mentoring team members and streamlining recruitment processes."
      ]
      },
      {
      heading: "Key Responsibilities",
      contents: [
      "System Performance Management",
      "Monitored and optimized SAP systems handling 1,000+ daily transactions, implementing performance enhancement strategies",
      "Technical Leadership",
      "Spearheaded system maintenance, troubleshooting, and client reporting activities",
      "Team Development",
      "Mentored technical team members, focusing on improving incident resolution efficiency",
      "Recruitment Coordination",
      "Managed intern recruitment process, coordinating interviews and enhancing feedback mechanisms"
      ]
      },
      {
      heading: "Achievements",
      contents: [
      "Performance Optimization",
      "Achieved 35% improvement in SAP system performance through strategic optimization initiatives",
      "Resolution Efficiency",
      "Reduced incident resolution time by 20% through effective team mentoring and process improvements",
      "Recruitment Enhancement",
      "Successfully coordinated 50+ technical interviews and implemented streamlined feedback processes for intern hiring"
      ]
      }
    ]
    },
    {
      "id": 2,
      "date": "January 2025 - Present",
      "title": "AI Engineer",
      "company": "Humanitarian AI",
      "location": "Boston, Massachusetts",
      "description": "Architecting and implementing advanced AI solutions with a focus on chain-of-thought reasoning and distributed AI systems.",
      "technologies": ["LangChain", "Gradio", "Ollama", "llama3.3:70B", "Deepseek R1:14B", "Neo4j"],
      "modules": [
      {
      "heading": "Overview",
      "contents": [
      "Spearheaded the development of sophisticated AI architectures focusing on enhanced reasoning capabilities and efficient task decomposition. Implemented cutting-edge language models and graph databases to create scalable AI solutions for humanitarian applications."
      ]
      },
      {
      "heading": "Technical Innovations",
      "contents": [
      "Chain-of-Thought Architecture",
      "Engineered an advanced AI architecture implementing chain-of-thought reasoning to overcome limitations in traditional AI workflows",
      "Distributed AI Systems",
      "Designed and implemented tree-structured AI agents capable of breaking down complex tasks into manageable subtasks",
      "Technology Stack Integration",
      "Successfully integrated multiple cutting-edge technologies including Llama 70B and Deepseek 14B models with Neo4j for robust system implementation"
      ]
      },
      {
      "heading": "Leadership & Collaboration",
      "contents": [
      "Team Mentorship",
      "Provided technical guidance and mentorship to team members, facilitating knowledge transfer on emerging technologies",
      "Cross-functional Coordination",
      "Collaborated effectively with diverse teams to ensure seamless integration of AI solutions",
      "Solution Architecture",
      "Led the design and implementation of scalable AI solutions that significantly improved problem-solving efficiency"
      ]
      },
      {
      "heading": "Impact",
      "contents": [
      "System Efficiency",
      "Enhanced problem-solving capabilities through implementation of sophisticated AI architectures",
      "Team Development",
      "Strengthened team capabilities through knowledge sharing and technical mentorship",
      "Innovation Leadership",
      "Pioneered the adoption of advanced language models and graph databases in humanitarian applications"
      ]
      }
      ]
      },
      {
        "id": 3,
        "date": "January 2025 - Present",
        "title": "Research Assistant",
        "company": "Northeastern University",
        "location": "Boston, MA",
        "description": "Developed and implemented AI-driven personalized learning solutions for academic success programs",
        "technologies": ["AI Learning Platforms", "Data Analytics", "Educational Technology", "Content Development"],
        "modules": [
        {
        "heading": "Overview",
        "contents": [
        "Led the development of an innovative curriculum focused on AI-powered personalized learning strategies. Integrated cutting-edge AI tools and adaptive learning technologies to enhance student engagement and academic performance. Implemented data-driven approaches to continuously optimize course content and delivery methods."
        ]
        },
        {
        "heading": "Key Responsibilities",
        "contents": [
        "Curriculum Development",
        "Designed and implemented a dynamic curriculum incorporating AI-driven personalized learning pathways and adaptive assessment tools",
        "Data Analysis & Optimization",
        "Analyzed student engagement metrics and learning patterns to refine course content and improve learning outcomes",
        "Content Creation",
        "Developed multimedia educational resources including instructional videos and technical guides for AI tool implementation",
        "Learning Technology Integration",
        "Implemented various AI-powered learning platforms to create interactive and personalized learning experiences"
        ]
        },
        {
        "heading": "Achievements",
        "contents": [
        "Educational Innovation",
        "Successfully integrated AI-driven personalized learning solutions that adapted to individual student needs and learning styles",
        "Student Engagement",
        "Created comprehensive learning materials that enhanced student understanding of AI applications in academic settings",
        "Technology Implementation",
        "Established effective systems for tracking and analyzing student progress through AI-powered assessment tools"
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