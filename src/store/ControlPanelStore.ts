// ControlPanelStore.ts
import { create } from "zustand";

interface ControlPanelStore {

  showHeaderPanel: boolean;
  setShowHeaderPanel: (value: boolean) => void;


  showLeftPanel: boolean;
  setShowLeftPanel: (value: boolean) => void;

  showRightPanel: boolean;
  setShowRightPanel: (value: boolean) => void;


  hideControlPanelButton: boolean;
  setHideControlPanelButton: (value: boolean) => void;
}

export const useControlPanelStore = create<ControlPanelStore>((set) => ({
  showHeaderPanel: false,
  setShowHeaderPanel: (value) => set({ showHeaderPanel: value }),

  // Left panel state
  showLeftPanel: false,
  setShowLeftPanel: (value) => set({ showLeftPanel: value }),

  // Right panel state
  showRightPanel: false,
  setShowRightPanel: (value) => set({ showRightPanel: value }),

  // Hide/show control panel button
  hideControlPanelButton: false,
  setHideControlPanelButton: (value) => set({ hideControlPanelButton: value }),
}));
