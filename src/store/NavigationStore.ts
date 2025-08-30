import { appData } from "@/config/appData";
import { navigationPanels } from "@/config/navigationPanels";
import { create } from "zustand";
import type { AppData, NavigationPanel } from "@/types/appData";

interface NavigationStore {
  section: keyof AppData; // current section key
  setSection: (sectionKey: keyof AppData) => void;

  showPanel: boolean;
  setShowPanel: (value: boolean) => void;

  activePanelKey?: string;
  setActivePanel: (panelKey: string) => void;

  currentSection: (
    panelKey: string
  ) => { heading: string; content: string | any[] } | null;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  section: navigationPanels[0].section,

  setSection: (sectionKey) => set({ section: sectionKey }),

  showPanel: false,
  setShowPanel: (value) => set({ showPanel: value }),

  activePanelKey: navigationPanels[0].key,
  setActivePanel: (panelKey) => set({ activePanelKey: panelKey }),

  currentSection: (panelKey) => {
    // Find panel by key
    const panel: NavigationPanel | undefined = navigationPanels.find(
      (p) => p.key === panelKey
    );

    if (!panel) return null;

    // Use section to get data from appData
    const sectionData = appData[panel.section];

    // For sections with items (projects, skills)
    if ("items" in sectionData) {
      return {
        heading: sectionData.heading,
        content: sectionData.items,
      };
    }

    // For sections with only heading + content
    return {
      heading: sectionData.heading,
      content: sectionData.content,
    };
  },
}));
