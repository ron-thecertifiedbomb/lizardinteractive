import { create } from "zustand";

interface ProjectStore {
  selectedProject?: string;
  setSelectedProject: (projectTitle?: string) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  selectedProject: undefined,
  setSelectedProject: (projectTitle) => set({ selectedProject: projectTitle }),
}));
