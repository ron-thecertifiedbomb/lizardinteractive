import { lizardData } from "@/config/lizardData";
import { create } from "zustand";


interface NavigationStore {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;

  showPanel: boolean;
  setShowPanel: (value: boolean) => void;

  activePanel?: string;
  setActivePanel: (panelKey?: string) => void;

  getPanelData: (
    panelKey: string
  ) => { heading: string; content: string | any[] } | null;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  currentScreen: lizardData.navigationPanels[0]?.heading || "",

  setCurrentScreen: (screen) => set({ currentScreen: screen }),

  showPanel: false,
  setShowPanel: (value) => set({ showPanel: value }),

  activePanel: lizardData.navigationPanels[0]?.heading,
  setActivePanel: (panelKey) => set({ activePanel: panelKey }),

  getPanelData: (currentScreen) => {
    const panel = lizardData.sections.find(
      (p) => p.heading === currentScreen
    );

    if (!panel) return null;

    return {
      heading: panel.heading,
      content: panel.content, // string | array
    };
  },
}));
