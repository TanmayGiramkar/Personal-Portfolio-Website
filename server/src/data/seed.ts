import type { Profile, Project } from "../../../shared/types.js";

export const profile: Profile = {
  name: "Tanmay Giramkar",
  title: "IT Engineering Student | MERN Stack Developer",
  headline:
    "I'm a final-year IT engineering student who enjoys building full-stack web apps with the MERN stack and is currently looking for placement and entry-level opportunities.",
  location: "India",
  photoUrl: "/profile/tanmay-portrait.jpg",
  summary:
    "Most of my recent work has been around React, Node.js, Express, and MongoDB. I like building projects that feel practical, clean, and easy to use, and I keep improving my problem solving through regular DSA practice as well.",
  strengths: [
    "Comfortable building full-stack MERN projects from frontend to backend",
    "Strong focus on clean, simple, responsive interfaces",
    "Good understanding of REST APIs, MongoDB, and project structure",
    "Actively preparing for placements and software roles"
  ],
  workflow: [
    "Start with the use case and keep the flow simple.",
    "Build the UI so it feels clear and easy to navigate.",
    "Connect the backend only where it adds real value.",
    "Refine the details after the main experience feels right."
  ],
  toolbelt: [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "REST APIs"
  ],
  availability: "Open to placements, internships, and entry-level software developer roles.",
  resumeUrl: "/resume/tanmay-giramkar-resume.pdf",
  certificationsUrl:
    "https://www.linkedin.com/in/tanmay-giramkar-901a602b1/details/certifications/",
  socials: {
    email: "tanmaygiramkar@gmail.com",
    linkedin: "http://www.linkedin.com/in/tanmay-giramkar-901a602b1",
    github: "https://github.com/TanmayGiramkar",
    leetcode: "https://leetcode.com/u/tanmay23102004/"
  },
  skills: [
    {
      label: "Programming Languages",
      items: ["Python", "Java", "C++", "JavaScript"]
    },
    {
      label: "Web Technologies",
      items: ["React.js", "Node.js", "Express"]
    },
    {
      label: "AI & LLM Tools",
      items: ["RAG", "Groq API", "Llama 3"]
    },
    {
      label: "Cloud & Deployment",
      items: ["Vercel", "Render", "Webhooks", "REST APIs"]
    },
    {
      label: "Databases",
      items: ["MongoDB", "MySQL"]
    },
    {
      label: "Developer Tools",
      items: ["Git", "GitHub", "Postman"]
    },
    {
      label: "CS Fundamentals",
      items: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Academic details are based on the resume shared for this portfolio.",
      period: "Final-year B.E. Information Technology",
      notes:
        "Exact college and score details can be added later if you want them shown on the live site."
    }
  ],
  experience: [
    {
      role: "Full-Stack Project Work",
      organization: "Academic and personal development",
      period: "Current",
      summary:
        "Built projects across healthcare, real estate, and AI-related use cases with a focus on usability, frontend clarity, and working backend flows.",
      highlights: ["React", "Express", "MongoDB", "Deployment"]
    },
    {
      role: "Placement Preparation",
      organization: "Self-driven learning and practice",
      period: "Ongoing",
      summary:
        "Alongside project work, I spend time improving DSA, problem solving, and interview readiness for placement opportunities.",
      highlights: ["DSA", "Problem Solving", "LeetCode", "Interview Prep"]
    }
  ],
  achievements: [
    "Built and deployed full-stack projects with live demos.",
    "Worked across frontend, backend, database, and deployment basics.",
    "Regularly practice problem solving alongside project development."
  ],
  certifications: [
    "AWS Cloud Practitioner Essentials",
    "Google Cloud Data Analytics",
    "Cisco Ethical Hacker",
    "Anthropic Model Context Protocol: Advanced Topics",
    "IBM Artificial Intelligence Fundamentals"
  ]
};

export const projects: Project[] = [
  {
    slug: "ayush-icd",
    name: "Ayush-ICD",
    tagline: "A healthcare assistant built to make disease-code lookup quicker and easier to use.",
    year: "Project 01",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/TanmayGiramkar/Ayush-ICD",
    demoUrl: "https://ayush-icd-assistant.vercel.app/",
    problem:
      "Searching structured healthcare information manually can feel slow and overwhelming.",
    solution:
      "Built a cleaner, search-first interface with simpler access to the required information.",
    outcome: "Shows how I handle search-heavy UI and backend-backed content.",
    featured: true,
    displayOrder: 1
  },
  {
    slug: "real-estate-agent",
    name: "Real-Estate-Agent",
    tagline: "A real-estate web app focused on clear listings and a smoother browsing experience.",
    year: "Project 02",
    stack: ["React", "Express", "MongoDB", "Responsive UI"],
    githubUrl: "https://github.com/TanmayGiramkar/Real-Estate-Agent",
    demoUrl: "https://real-estate-agent-beta.vercel.app/",
    problem: "Property browsing often feels cluttered and hard to scan.",
    solution: "Designed a cleaner flow that makes listings easier to browse and compare.",
    outcome: "Reflects my interest in usability, structure, and full-stack product work.",
    featured: true,
    displayOrder: 2
  },
  {
    slug: "ai-chatbot",
    name: "AI-Chatbot",
    tagline: "A chat-based application built around a simple conversational interface.",
    year: "Project 03",
    stack: ["React", "Node.js", "API Integration", "UX"],
    githubUrl: "https://github.com/TanmayGiramkar/AI-Chatbot",
    demoUrl: "https://real-estate-chatbot-three.vercel.app/",
    problem: "Chat products feel weak when the interaction is confusing or generic.",
    solution: "Built a cleaner chat experience focused on readability and flow.",
    outcome: "Shows my interest in AI-driven products and frontend polish.",
    featured: true,
    displayOrder: 3
  }
].sort((left, right) => left.displayOrder - right.displayOrder);
