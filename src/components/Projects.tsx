import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Selected Works" 
        subtitle="A collection of my most recent frontend-focused full stack applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass rounded-[2rem] overflow-hidden hover:border-accent/30 transition-all shadow-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                <a href={project.github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <Github size={20} />
                </a>
                <a href={project.demo} className="p-3 bg-accent text-white rounded-full hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-zinc-900 border border-border text-[10px] font-bold uppercase tracking-wider text-secondary rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="h-[2px] w-full bg-border group-hover:bg-accent/30 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
