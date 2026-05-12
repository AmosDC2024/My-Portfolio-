import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            title="Professional Story" 
            align="left" 
            className="mb-8"
          />
          <div className="space-y-6 text-secondary text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-semibold italic">Frontend-Heavy Full Stack Developer</span> with a passion for building interfaces that aren't just functional, but emotional. I believe that every pixel tells a story and every interaction is a conversation with the user.
            </p>
            <p>
              While my core strength lies in weaving complex, high-performance frontend architectures with <span className="text-white">React and Tailwind CSS</span>, I've been intentionally expanding my horizon into the backend ecosystem. 
            </p>
            <p>
              My journey into <span className="text-white">Node.js and Express.js</span> has allowed me to bridge the gap between creative vision and technical stability, ensuring that the magic on the screen is backed by a robust, scalable foundation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-3xl mb-1">20+</h4>
              <p className="text-secondary text-sm uppercase tracking-wider">Completed Projects</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-3xl mb-1">3+</h4>
              <p className="text-secondary text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square rounded-3xl overflow-hidden glass border-border">
            <img 
              src="https://picsum.photos/seed/developer/800/800" 
              alt="Developer workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
