import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Specialized Services" 
        subtitle="Custom-tailored digital solutions focusing on performance, aesthetics, and user journey." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass group p-10 rounded-[3rem] flex flex-col gap-6 hover:bg-accent/5 transition-all"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <service.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-secondary text-lg leading-relaxed">
              {service.description}
            </p>
            <div className="mt-4 flex items-center text-accent font-bold gap-2 group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
              <span>Learn More</span>
              <div className="h-[2px] w-8 bg-accent" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
