export interface SkillCategory {
  label: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  notes?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  leetcode?: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  location: string;
  photoUrl: string;
  summary: string;
  strengths: string[];
  workflow: string[];
  toolbelt: string[];
  availability: string;
  resumeUrl: string;
  certificationsUrl?: string;
  socials: SocialLinks;
  skills: SkillCategory[];
  education: EducationItem[];
  experience: ExperienceItem[];
  achievements: string[];
  certifications: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  outcome: string;
  featured: boolean;
  displayOrder: number;
}

export interface ContactSubmissionInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  sourcePage: string;
}

export interface ContactSubmission extends ContactSubmissionInput {
  timestamp: string;
}

export interface ContactSubmissionResponse {
  message: string;
  storedIn: "mongodb" | "memory";
}
