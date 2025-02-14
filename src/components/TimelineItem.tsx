import { motion } from "framer-motion";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
}

export default function TimelineItem({
  date,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l last:pb-0"
    >
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
      <time className="text-sm text-muted-foreground mb-1 block">
        {date}
      </time>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mb-2">{company}</p>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
}
