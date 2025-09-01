import type { NavigationPanel } from "@/types/appData";

export const navigationPanels: NavigationPanel[] = [
  {
    key: "overview",
    heading: "Overview",
    overview: "Lizard Interactive ocerview",
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
    key: "services",
    heading: "Services",
    overview: "What I offer & technologies I work with",
    section: "services",
    isActive: false,
  },
  {
    key: "aboutme",
    heading: "About Me",
    overview:
      "About Lizard Interactive",
    section: "aboutme",
    isActive: false,
  },
];
