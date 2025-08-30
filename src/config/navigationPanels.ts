import type { NavigationPanel } from "@/types/appData";

export const navigationPanels: NavigationPanel[] = [
  {
    key: "overview",
    heading: "Overview",
    overview:
      "This is my LizardInteractive portfolio — my own business. I am a creative and passionate individual with a strong love for learning.",
    section: "overview",
    isActive: true,
  },
  {
    key: "projects",
    heading: "Projects",
    overview: "Check out my projects",
    section: "projects",
    isActive: false,
  },
  {
    key: "skills",
    heading: "Skills",
    overview: "What I offer & technologies I work with",
    section: "skills",
    isActive: false,
  },
  {
    key: "aboutme",
    heading: "About Me",
    overview:
      "I am a dedicated professional with a passion for delivering high-quality services to my clients.",
    section: "aboutme",
    isActive: false,
  },
];
