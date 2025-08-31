
import { navigationPanels } from "@/config/navigationPanels";
import { create } from "zustand";
import type { AppData, NavigationPanel } from "@/types/appData";
import { useAppDataStore } from "./AppDataStore";



interface NavigationStore {

  section: keyof AppData; 
  setSection: (sectionKey: keyof AppData) => void;
  showPanel: boolean;
  setShowPanel: (value: boolean) => void;
  activePanelKey?: string;
  setActivePanel: (panelKey: string) => void;

}

export const useNavigationStore = create<NavigationStore>((set) => ({

  section: navigationPanels[0].section,

  setSection: (sectionKey) => set({ section: sectionKey }),

  showPanel: false,
  setShowPanel: (value) => set({ showPanel: value }),

  activePanelKey: navigationPanels[0].key,
  setActivePanel: (panelKey) => set({ activePanelKey: panelKey }),






  
}));
