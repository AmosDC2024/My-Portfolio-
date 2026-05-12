import { Code2, Palette, Globe, Server, Cpu, Database, Layout, Smartphone } from "lucide-react";

export const PROJECTS = [
  {
    id: 1,
    title: "Admin Dashboard",
    description: "A high-performance analytics dashboard featuring real-time data visualization and complex state management.",
    tech: ["React", "D3.js", "Tailwind", "Node.js"],
    image: "https://picsum.photos/seed/dashboard/800/600",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Sleek weather application with dynamic background updates based on local weather conditions and 7-day forecast.",
    tech: ["React", "OpenWeather API", "Framer Motion"],
    image: "https://picsum.photos/seed/weather/800/600",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "TaskPulse PWA",
    description: "Progressive Web App for task management with offline capabilities and push notifications.",
    tech: ["React", "Service Workers", "Firebase", "Zustand"],
    image: "https://picsum.photos/seed/task/800/600",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Salon Booking Platform",
    description: "End-to-end booking system for service businesses with integrated calendar and payment processing.",
    tech: ["Next.js", "MongoDB", "Stripe", "Clerk"],
    image: "https://picsum.photos/seed/salon/800/600",
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Electrical Services Landing",
    description: "A conversion-optimized landing page for a local service provider with lead generation forms.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/seed/electric/800/600",
    github: "#",
    demo: "#"
  }
];

export const TECH_STACK = [
  { name: "React.js", icon: Code2, color: "text-blue-400" },
  { name: "JavaScript", icon: Cpu, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-400" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "Express.js", icon: Globe, color: "text-gray-100" },
  { name: "MongoDB", icon: Database, color: "text-green-600" },
  { name: "Framer Motion", icon: Layout, color: "text-purple-400" },
  { name: "TypeScript", icon: Smartphone, color: "text-blue-500" }
];

export const SERVICES = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building fast, responsive, and accessible user interfaces using core web technologies and modern frameworks."
  },
  {
    title: "React Applications",
    icon: Layout,
    description: "Creating scalable single-page applications with clean architecture and specialized performance tuning."
  },
  {
    title: "UI/UX Engineering",
    icon: Palette,
    description: "Bridging the gap between design and code to create high-fidelity, interactive prototypes and design systems."
  },
  {
    title: "Full Stack Solutions",
    icon: Server,
    description: "Implementing robust backends and efficient database structures to support complex frontend requirements."
  }
];

export const EXPERIENCE = [
  {
    period: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description: "Delivering high-end web solutions for global clients, focusing on premium frontend experiences and Node.js backends."
  },
  {
    period: "2021 - 2023",
    role: "Frontend Developer",
    company: "Creative Studio",
    description: "Built interactive web experiences and landing pages for startups, utilizing modern CSS frameworks and animation libraries."
  },
  {
    period: "2020 - 2021",
    role: "Junior Web Developer",
    company: "Tech Agency",
    description: "Assisted in the development of client projects, maintaining existing codebases and implementing new features."
  }
];
