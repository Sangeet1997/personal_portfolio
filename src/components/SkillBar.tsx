import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
}

export default function SkillBar({ skill, level, color = "primary" }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", `${level}%`]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-${color}`}
          style={{ width }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}
