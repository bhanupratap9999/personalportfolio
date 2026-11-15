export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: "AI" | "Full-Stack";
  description: string[];
  techStack: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  highlightTag?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    color?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  type: "education" | "training" | "experience";
  title: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeType: "primary" | "secondary" | "accent";
  skillsLearned: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: string;
}
