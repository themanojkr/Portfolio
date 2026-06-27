export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  playStoreUrl?: string;
  githubUrl?: string;
  screenshots: string[]; // Mock screenshot names/descriptions
  category?: string;
}

export interface RoleHistory {
  title: string;
  period: string;
}

export interface Company {
  id: string;
  name: string;
  fullName: string;
  location: string;
  role: string;
  period: string;
  roles?: RoleHistory[];
  summary?: string;
  responsibilities?: string[];
  focusAreas?: string;
  projects: Project[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  category: "education" | "experience" | "freelance";
}

export interface StatItem {
  value: string;
  label: string;
}
