import { motion } from "motion/react";
import { EXPERIENCE } from "../constants";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Career Journey" 
        subtitle="The milestones and professional growth that define my engineering career." 
      />
      
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-bg-dark text-accent absolute left-0 md:left-1/2 md:-ml-5 shadow z-10 group-hover:scale-125 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <div className="w-2 h-2 bg-current rounded-full" />
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-3xl hover:bg-zinc-900 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <time className="font-mono text-accent text-sm font-bold uppercase tracking-widest">{exp.period}</time>
                <span className="text-secondary text-sm font-semibold">{exp.company}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
              <p className="text-secondary text-sm leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
