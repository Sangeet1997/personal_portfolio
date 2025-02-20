import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Camera,
  // Bike,
  // Book,
  Music,
  // Palette,
  // Globe,
  Gamepad,
  Dumbbell,
} from "lucide-react";

export const hobbies = [
  // {
  //   id: 1,
  //   icon: <Music className="w-8 h-8" />,
  //   title: "Music",
  //   description: "Capturing moments and exploring visual storytelling",
  //   modules: [
  //     {
  //       heading: "Overview",
  //       contents: [
  //         "My journey in photography started with street photography and evolved into portrait and landscape photography. I use both digital and analog cameras to capture unique perspectives."
  //       ]
  //     },
  //     {
  //       heading: "Equipment",
  //       contents: [
  //         "**Camera Body:**",
  //         "Sony A7III",
  //         "**Lenses:**",
  //         "50mm f/1.8 - Perfect for portraits and street photography",
  //         "24-70mm f/2.8 - My go-to zoom for versatile shooting",
  //         {
  //           type: "image",
  //           src: "/images/camera-gear.jpg",
  //           alt: "My photography equipment"
  //         }
  //       ]
  //     },
  //     {
  //       heading: "Portfolio",
  //       contents: [
  //         "Some of my favorite shots:",
  //         {
  //           type: "images",
  //           items: [
  //             { src: "https://images.unsplash.com/photo-1", alt: "Street scene in Tokyo" },
  //             { src: "https://images.unsplash.com/photo-2", alt: "Mountain landscape at sunset" }
  //           ]
  //         },
  //         {
  //           type: "link",
  //           url: "https://myphotography.portfolio.com",
  //           text: "Visit My Full Portfolio"
  //         }
  //       ]
  //     },
  //     {
  //       heading: "Achievements",
  //       contents: [
  //         "**Local Recognition:**",
  //         "Featured in the annual city photography exhibition (2022)",
  //         "**Publications:**",
  //         "Published in Capture Magazine's 'emerging photographers' issue",
  //         "**Community Involvement:**",
  //         "Workshop instructor for beginners at the local photography club",
  //         {
  //           type: "image",
  //           src: "/images/photo-exhibition.jpg",
  //           alt: "My work at the local exhibition"
  //         }
  //       ]
  //     },
  //     {
  //       heading: "Photography Style",
  //       contents: [
  //         "I'm drawn to high-contrast black and white for street photography and rich, vibrant colors for landscapes. My portrait work focuses on natural, candid moments rather than posed shots.",
  //         "**Influences:**",
  //         "Henri Cartier-Bresson, Vivian Maier, and Steve McCurry have shaped my approach to composition and timing.",
  //         {
  //           type: "link",
  //           url: "https://photographycourse.com/finding-your-style",
  //           text: "Read: How I Developed My Style"
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    id: 1,
    icon: <Music className="w-8 h-8" />,
    title: "Music",
    description: "Living through the rhythm of raw melodies, real instruments, and timeless rock",
    modules: [
      {
        heading: "Sangeet",
        contents: [
          "Sangeet means music in Bengali and Hindi. That must be a big giveaway that I’m involved with some sort of musical instrument or vocals, but sadly, I’m not (I know a bit of acoustic guitar…). But I love listening to music—a lot—especially my mother’s songs. My mother is an amazing singer and also a great teacher. Music is her passion, and she even did her master’s in classical music. Hence my name, **\"Sangeet\"**. From a very young age, I’ve attended different concerts and musical functions, and that influenced me in some way, shaping how I see things.."
        ]
      },
      {
        heading: "Favorite genres",
        contents: [
          "I love listening to old/punk/alternative rock, and I’m also a bit of a metalhead. From time to time, I enjoy some jazz, and on very rare occasions, I listen to pop."
        ]
      },
      {
        heading: "Unfiltered Sounds",
        contents: [
          "I kind of hate the current trends in the music industry, where every song is more electronic and autotuned than the last. Proper rock is dying, if not for a few bands keeping it alive. I love the sound of real instruments—the strumming of guitar chords, the unique beats of drums, and the various pitches and tones of exceptionally talented vocalists (like my mom). I’ve always thought that the small imperfections and innovations that real instruments or vocals bring out really add character to each band. They have their own unique twist on music, redefining its essence with their distinct style. And for this reason, I love listening to live performances. I may not have attended many live shows, but I love watching them on repeat on YouTube or Spotify."
        ]
      },
      {
        heading: "Favorite Bands",
        contents: [
          "-Avenged Sevenfold",
          "-Muse",
          "-Linkin Park (My Childhood Favorite)",
          "-Slipknot",
          "-Bring Me the Horizon",
          "...and many more."
        ]
      }
    ]
  },
  {
    "id": 2,
    "icon": <Dumbbell className="w-8 h-8" />,
    "title": "Gym",
    "description": "Training the body and mind to stay disciplined, energetic, and productive",
    "modules": [
      {
        "heading": "Gym Journey",
        "contents": [
          "I like going to the gym almost every day. I have recently come to realize how important training your body is along with having a healthy diet. It also helps with a better mind-body connection (healthy body, healthy mind). Other than that, the gym helps discipline me, and even though I have to take some time out of my busy life just for the gym, I think it helps me be more productive, energetic and helps me procrastinate less."
        ]
      }
    ]
  },
  {
    "id": 3,
    "icon": <Gamepad className="w-8 h-8" />,
    "title": "Gaming",
    "description": "Exploring different genres and appreciating the artistry behind video games",
    "modules": [
      {
        "heading": "",
        "contents": [
          "I love playing games a lot. I have played all kinds of games in my life, from competitive games to metroidvanias, RTS, turn-based, to souls-likes. I love exploring different genres and the creativity that game developers put into these games. I believe that games are the most superior form of art. The best games I know have such a perfect mix—or a better way to say it would be 'A perfect symphony'—of soundtracks, art direction, gameplay, and storytelling, making it an unforgettable experience."
        ]
      },
      {
        "heading": "Competitive Gaming",
        "contents": [
          "Multiplayer competitive games are unique in their own way. It takes a lot of dedication, time, practice, and perseverance to keep playing a competitive game and rise in ranks within that game. It might sound a bit unorthodox, but I think you can judge how hardworking someone is by how much they grind in a competitive game to rise in the ranks. And I do believe that these kinds of people find it easy to divert the energy to a different work later in their life if they have a proper goal (like a rank in a multiplayer game) in sight."
        ]
      },
      {
        "heading": "Favorite Games",
        "contents": [
          "**Single-player:**",
          "- Dark Souls 3",
          "- Elden Ring",
          "- Hollow Knight",
          "- Red Dead Redemption 2",
          "- Hellblade: Senua's Saga",
          "- Hyper Light Drifter",
          "**Multiplayer:**",
          "- Rainbow Six: Siege",
          "- CS:GO (/CS2)",
          "- Valorant"
        ]
      }
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
            <Link key={hobby.id} href={`/personal_portfolio/hobbies/${hobby.id}`}>
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