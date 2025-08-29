import { create } from "zustand";
import { appData } from "@/config/appData";

interface NavigationStore {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;

  showPanel: boolean;
  setShowPanel: (value: boolean) => void;

  activePanel?: string;
  setActivePanel: (panelKey?: string) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  currentScreen: appData.introduction.screen,
  setCurrentScreen: (screen) => set({ currentScreen: screen }),

  showPanel: false,
  setShowPanel: (value) => set({ showPanel: value }),

  activePanel: appData.navigationPanels[0].key,
  setActivePanel: (panelKey) => set({ activePanel: panelKey }),
}));
