import { create } from "zustand";

type ActiveComponent = "map" | "lizardinteractive" | "settings" | null;

interface ControlPanelStore {
  // Panels
  showHeaderPanel: boolean;
  setShowHeaderPanel: (value: boolean) => void;

  showLeftPanel: boolean;
  setShowLeftPanel: (value: boolean) => void;

  showRightPanel: boolean;
  setShowRightPanel: (value: boolean) => void;

  hideControlPanelButton: boolean;
  setHideControlPanelButton: (value: boolean) => void;

  // NEW: Track which component is active
  activeComponent: ActiveComponent;
  setActiveComponent: (component: ActiveComponent) => void;
}

export const useControlPanelStore = create<ControlPanelStore>((set) => ({
  // Header panel state
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

  // NEW: Which component is active
  activeComponent: null,
  setActiveComponent: (component) => set({ activeComponent: component }),
}));
