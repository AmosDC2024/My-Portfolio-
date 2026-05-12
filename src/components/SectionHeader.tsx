import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary text-lg max-w-2xl mx-auto md:mx-0">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-accent mt-6 rounded-full",
        align === "center" ? "mx-auto" : "mr-auto"
      )} />
    </motion.div>
  );
}
