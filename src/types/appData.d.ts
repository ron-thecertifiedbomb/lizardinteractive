// src/types/appData.d.ts

export interface NavigationPanel {
  key: string; // Unique identifier
  heading: string; // Panel title
  overview: string; // Short description or phrase
  section: keyof AppData; // Reference to the section in AppData
  isActive?: boolean; // Optional: currently active panel
}

// Section types
export interface Introduction {
  heading: string;
  content: string;
}

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Skill {
  type: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  techStack?: string[];
}

// Sections with multiple items
export interface ProjectsSection {
  heading: string;
  content: string;
  items: Project[];
}

export interface SkillsSection {
  heading: string;
  content: string;
  items: Skill[];
}

// About Me remains simple
export interface AboutMe {
  heading: string;
  content: string;
}

// Unified AppData
export interface AppData {
  overview: Overview;
  projects: Projects;
  services: Services;
  aboutme: AboutMe;
}
