import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Camera,
  Bike,
  Book,
  Music,
  Palette,
  Globe,
} from "lucide-react";

export const hobbies = [
  {
    id: 1,
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Capturing moments and exploring visual storytelling",
    longDescription: "My journey in photography started with street photography and evolved into portrait and landscape photography. I use both digital and analog cameras to capture unique perspectives.",
    equipment: ["Sony A7III", "50mm f/1.8", "24-70mm f/2.8"],
    portfolio: ["https://images.unsplash.com/photo-1", "https://images.unsplash.com/photo-2"],
    achievements: [
      "Featured in local photography exhibition",
      "Published in photography magazine",
      "Workshop instructor for beginners"
    ]
  },
  {
    id: 2,
    icon: <Bike className="w-8 h-8" />,
    title: "Cycling",
    description: "Weekend adventures and staying active",
    longDescription: "Cycling became my passion for both fitness and exploration. I participate in local cycling events and enjoy planning weekend routes to discover new places.",
    equipment: ["Trek Domane SL 6", "Cycling Computer", "Essential Tools"],
    achievements: [
      "Completed 100km charity ride",
      "Weekly group ride leader",
      "Basic bike maintenance certification"
    ]
  },
  {
    id: 3,
    icon: <Book className="w-8 h-8" />,
    title: "Reading",
    description: "Science fiction and technical books",
    longDescription: "I'm an avid reader of science fiction and technical literature. I participate in a local book club and enjoy discussing complex narratives and technological concepts.",
    favoriteBooks: [
      "Dune by Frank Herbert",
      "Clean Code by Robert Martin",
      "Foundation by Isaac Asimov"
    ],
    readingGoals: "52 books per year"
  },
  {
    id: 4,
    icon: <Music className="w-8 h-8" />,
    title: "Music",
    description: "Playing guitar and discovering new genres",
    longDescription: "Music has been a constant companion in my life. I play guitar and enjoy exploring different genres and musical techniques.",
    instruments: ["Acoustic Guitar", "Electric Guitar"],
    genres: ["Blues", "Jazz", "Classical"],
    performances: ["Local open mic nights", "Community events"]
  },
  {
    id: 5,
    icon: <Palette className="w-8 h-8" />,
    title: "Digital Art",
    description: "Creating illustrations and exploring design",
    longDescription: "Digital art allows me to combine creativity with technology. I create illustrations and explore different digital art techniques.",
    software: ["Photoshop", "Illustrator", "Procreate"],
    portfolio: ["https://behance.net/artwork1", "https://behance.net/artwork2"],
    specialties: ["Character Design", "UI Illustrations", "Digital Painting"]
  },
  {
    id: 6,
    icon: <Globe className="w-8 h-8" />,
    title: "Traveling",
    description: "Exploring new places and cultures",
    longDescription: "Traveling helps me broaden my perspectives and learn about different cultures. I document my journeys through photography and writing.",
    countriesVisited: ["Japan", "Italy", "Norway", "Thailand"],
    favoriteExperiences: [
      "Northern Lights in Norway",
      "Street Food Tours in Thailand",
      "Cultural Festivals in Japan"
    ]
  },
];

export default function Hobbies() {
  return (
    <PageTransition>
      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">My Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <Link key={hobby.id} href={`/hobbies/${hobby.id}`}>
              <a>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 text-primary">{hobby.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                      <p className="text-muted-foreground">{hobby.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}