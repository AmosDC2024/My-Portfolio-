import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Github, Linkedin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Let's build something exceptional together. I'm currently open to new projects and collaborations." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-10"
        >
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-secondary text-sm font-semibold uppercase tracking-widest mb-1">Email Me</h4>
              <p className="text-xl font-bold">alexander@rivers.dev</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-secondary text-sm font-semibold uppercase tracking-widest mb-1">WhatsApp</h4>
              <p className="text-xl font-bold">+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="pt-10 border-t border-border space-y-6">
            <h4 className="text-secondary text-xs font-black uppercase tracking-[0.3em]">Social Networks</h4>
            <div className="flex gap-4">
              <a href="#" className="p-4 glass rounded-2xl text-secondary hover:text-white hover:border-accent transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-4 glass rounded-2xl text-secondary hover:text-white hover:border-accent transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass p-10 rounded-[3rem]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-4">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-bg-dark border border-border p-4 rounded-2xl outline-none focus:border-accent transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-4">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-bg-dark border border-border p-4 rounded-2xl outline-none focus:border-accent transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-4">Service Inquiry</label>
              <select
                required
                className="w-full bg-bg-dark border border-border p-4 rounded-2xl outline-none focus:border-accent transition-colors appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="" disabled>Select a service</option>
                <option value="frontend">Frontend Development</option>
                <option value="react">React Application</option>
                <option value="fullstack">Full Stack Website</option>
                <option value="uiux">UI/UX Engineering</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-4">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-bg-dark border border-border p-4 rounded-2xl outline-none focus:border-accent transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              disabled={status === "loading"}
              type="submit"
              className="w-full group py-4 bg-white text-black font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === "loading" ? "SENDING..." : (
                <>
                  SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-500 flex items-center gap-3"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll contact you soon.</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-500 flex items-center gap-3"
                >
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
