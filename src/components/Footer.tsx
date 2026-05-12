import { Github, Linkedin, MessageSquare, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 border-t border-border bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-gradient tracking-tighter mb-4">
              Imhoede Amos Osikemhekha.
            </div>
            <p className="text-secondary text-sm max-w-sm mb-8">
              Building premium digital experiences with a focus on frontend engineering and full stack scalability.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="p-3 glass rounded-xl text-secondary hover:text-white transition-all"><Github size={20} /></a>
              <a href="#" className="p-3 glass rounded-xl text-secondary hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-3 glass rounded-xl text-secondary hover:text-white transition-all"><MessageSquare size={20} /></a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-16">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Sitemap</h4>
              <ul className="space-y-4 text-sm text-secondary">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#tech-stack" className="hover:text-accent transition-colors">Tech Stack</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Contact</h4>
              <ul className="space-y-4 text-sm text-secondary">
                <li>amos@osikemhekha.dev</li>
                <li>+1 (555) 987-6543</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-16 h-16 rounded-full glass flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all group shadow-xl"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-[0.3em] text-secondary/50">
          <p>© 2026 IMHOEDE AMOS OSIKEMHEKHA. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH REACT, EXPRESS & MONGO.</p>
        </div>
      </div>
    </footer>
  );
}
