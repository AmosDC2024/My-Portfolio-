import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-24">
          <About />
        </section>
        
        <section id="tech-stack" className="py-24 bg-zinc-950/50">
          <TechStack />
        </section>
        
        <section id="projects" className="py-24">
          <Projects />
        </section>
        
        <section id="services" className="py-24 bg-zinc-950/50">
          <Services />
        </section>
        
        <section id="experience" className="py-24">
          <Experience />
        </section>
        
        <section id="testimonials" className="py-24 bg-zinc-950/50">
          <Testimonials />
        </section>
        
        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>
      
      <Footer />
      
      {/* Background radial glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
