import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO at Fintechy",
    text: "Working with Alexander was a game-changer. His attention to detail on the frontend is unmatched, and he built a robust system that scaled perfectly.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Lead Engineer at Growthly",
    text: "An absolute professional. He took our complex designs and turned them into smooth, animated components that out-performed our expectations.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Elena Ross",
    role: "Founder at Spark",
    text: "The bridge Alexander built between our frontend vision and backend reality was incredible. Minimalist yet highly expressive work.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Client Kind Words" 
        subtitle="Feedback from industry leaders and creative visionaries I've collaborated with." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-10 rounded-[2.5rem] relative group hover:bg-zinc-900/50 transition-all border-border/30"
          >
            <div className="text-accent/20 absolute top-8 right-8 group-hover:text-accent/40 transition-colors">
              <Quote size={64} />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-accent">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-secondary text-xs font-semibold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
            
            <p className="text-secondary text-lg leading-relaxed italic relative z-10">
              "{t.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
