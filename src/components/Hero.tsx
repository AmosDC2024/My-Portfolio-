import { motion } from "motion/react";
import { ArrowRight, Download, Eye } from "lucide-react";

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]"
        >
          <span className="text-gradient">ALEXANDER</span> <br />
          <span className="text-secondary">RIVERS.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed"
        >
          <span className="text-white font-semibold">Frontend-Heavy Full Stack Developer.</span> <br />
          Crafting pixel-perfect digital experiences with React and exploring the depths of high-performance backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 border border-border bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all"
          >
            Contact Me
          </a>
          <button className="flex items-center gap-2 text-secondary hover:text-white transition-colors py-2 px-4">
            <Download size={18} /> Resume.pdf
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[1px] h-[100px] bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        <div className="absolute top-[40%] right-[15%] w-[1px] h-[150px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-[20%] left-[20%] w-[100px] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>
    </div>
  );
}
