import { useRoute } from "wouter";
import PageTransition from "@/components/PageTransition";
import { hobbies } from "./Hobbies";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HobbyDetail() {
  const [, params] = useRoute("/hobbies/:id");
  const hobby = hobbies.find((h) => h.id === Number(params?.id));

  if (!hobby) {
    return <div>Hobby not found</div>;
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
            <div className="text-primary mb-4 w-16 h-16">
              {hobby.icon}
            </div>
            <h1 className="text-4xl font-bold mb-4">{hobby.title}</h1>
            <p className="text-xl text-muted-foreground">{hobby.description}</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg mb-8">{hobby.longDescription}</p>

                {hobby.equipment && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Equipment</h2>
                    <ul className="list-disc pl-6 mb-6">
                      {hobby.equipment.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {hobby.achievements && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
                    <ul className="list-disc pl-6 mb-6">
                      {hobby.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </>
                )}

                {hobby.favoriteBooks && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Favorite Books</h2>
                    <ul className="list-disc pl-6 mb-6">
                      {hobby.favoriteBooks.map((book, index) => (
                        <li key={index}>{book}</li>
                      ))}
                    </ul>
                  </>
                )}

                {hobby.instruments && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Musical Journey</h2>
                    <p className="mb-4">Instruments: {hobby.instruments.join(", ")}</p>
                    <p className="mb-4">Genres: {hobby.genres?.join(", ")}</p>
                    <p>Performances: {hobby.performances?.join(", ")}</p>
                  </>
                )}

                {hobby.software && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Digital Tools</h2>
                    <p className="mb-4">Software: {hobby.software.join(", ")}</p>
                    <p>Specialties: {hobby.specialties?.join(", ")}</p>
                  </>
                )}

                {hobby.countriesVisited && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Travel Experiences</h2>
                    <p className="mb-4">Countries Visited: {hobby.countriesVisited.join(", ")}</p>
                    <h3 className="text-xl font-semibold mb-2">Favorite Experiences</h3>
                    <ul className="list-disc pl-6">
                      {hobby.favoriteExperiences?.map((exp, index) => (
                        <li key={index}>{exp}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
}
