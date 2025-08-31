import { create } from "zustand";
import type { AppData } from "@/types/appData";
import { useAppDataStore } from "./AppDataStore";

interface SectionStore {
  currentSectionData: { heading: string; content: string | any[] } | null;

  getSectionByHeading: (
    heading: string
  ) => { heading: string; content: string | any[] } | null;

  setCurrentSectionData: (heading: string) => void;
}

export const useSectionStore = create<SectionStore>((set, get) => ({
  currentSectionData: null,

  getSectionByHeading: (heading: string) => {
    const { appData } = useAppDataStore.getState(); // read from store

    const sectionKey = Object.keys(appData).find(
      (key) => appData[key as keyof AppData].heading === heading
    ) as keyof AppData | undefined;

    if (!sectionKey) return null;

    const section = appData[sectionKey];
    if ("items" in section) {
      return { heading: section.heading, content: section.items };
    }
    return { heading: section.heading, content: section.content };
  },

  setCurrentSectionData: (heading: string) => {
    const section = get().getSectionByHeading(heading);
    set({ currentSectionData: section }); // update store state
  },
}));
