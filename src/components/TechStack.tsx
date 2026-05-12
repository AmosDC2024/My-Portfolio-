import { motion } from "motion/react";
import { TECH_STACK } from "../constants";
import { SectionHeader } from "./SectionHeader";

export function TechStack() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Technical Arsenal" 
        subtitle="The tools and technologies I use to bring digital visions to life." 
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass group p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:border-accent/40 hover:bg-accent/5 transition-all"
          >
            <div className={`p-4 rounded-2xl bg-zinc-900 group-hover:bg-white/10 transition-colors ${tech.color}`}>
              <tech.icon size={32} />
            </div>
            <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{tech.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
