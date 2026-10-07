// Edit everything about the site here 🌷
export const profile = {
  name: "Jyotsana Agrawal",
  email: "jyotsanaagrawal63@gmail.com",
  github: "https://github.com/sanjeetaagrawal922-ctrl",
  linkedin: "https://www.linkedin.com/in/jyotsana-agrawal-847965316/",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const traits = [
  { emoji: "☕", text: "Coffee & cozy evenings" },
  { emoji: "💻", text: "Learning to code" },
  { emoji: "🌱", text: "Growing every day" },
  { emoji: "🐱", text: "Cat lover" },
  { emoji: "📚", text: "Curious learner" },
];

export const education = [
  {
    school: "JECRC University",
    degree: "B.Tech — Computer Science Engineering",
    period: "2026 – Present",
    note: "1st Year",
  },
];

export const skillGroups = [
  { title: "Programming", emoji: "⌨️", tone: "bg-sage", skills: ["C", "C++", "Java", "Python"] },
  { title: "Computer Science", emoji: "🧠", tone: "bg-lavender", skills: ["Data Structures & Algorithms", "Problem Solving", "Object-Oriented Programming", "Computer Fundamentals"] },
  { title: "Web", emoji: "🌐", tone: "bg-rose", skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Tools", emoji: "🧰", tone: "bg-beige", skills: ["Git", "GitHub", "VS Code"] },
  { title: "AI / Emerging", emoji: "✨", tone: "bg-sage", skills: ["Artificial Intelligence", "Machine Learning fundamentals"] },
];

export const projects = [
  {
    emoji: "🌷",
    tone: "bg-rose",
    name: "Personal Portfolio",
    description: "A cozy personal portfolio website designed to showcase my journey, skills and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#", // TODO
    demo: "#", // TODO or set to "" to hide
  },
  {
    emoji: "📒",
    tone: "bg-sage",
    name: "Student Management System",
    description: "A beginner-friendly project focused on managing student information.",
    tech: ["C++", "Java"],
    github: "#",
    demo: "",
  },
  {
    emoji: "🌱",
    tone: "bg-lavender",
    name: "Coming Soon 🌱",
    description: "More projects are growing in the garden...",
    tech: [],
    github: "",
    demo: "",
  },
];

// Placeholder certificates — replace with your real ones
export const certificates = [
  { title: "Certificate Title", org: "Issuing Organization", date: "Month 2026", description: "A short description of what this certificate covers.", link: "#", tone: "bg-rose" },
  { title: "Certificate Title", org: "Issuing Organization", date: "Month 2026", description: "A short description of what this certificate covers.", link: "#", tone: "bg-sage" },
  { title: "Certificate Title", org: "Issuing Organization", date: "Month 2026", description: "A short description of what this certificate covers.", link: "#", tone: "bg-lavender" },
];
