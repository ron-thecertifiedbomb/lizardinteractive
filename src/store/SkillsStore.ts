import { create } from "zustand";
import { appData } from "@/config/appData";
import { Skill, SkillsSection } from "@/types/appData";


interface SkillsStore {
  services: SkillsSection;
  hoveredSkill?: string;
  selectedSkillType?: string;

  setHoveredSkill: (skillType?: string) => void;
  setSelectedSkillType: (type?: string) => void;
  getFilteredSkills: () => SkillsSection[];
}

export const useSkillsStore = create<SkillsStore>((set, get) => ({
  services: appData.services.items,
  hoveredSkill: undefined,
  selectedSkillType: appData.services.items[0]?.type,

  setHoveredSkill: (skillType) => set({ hoveredSkill: skillType }),
  setSelectedSkillType: (type) => set({ selectedSkillType: type }),

  getFilteredSkills: () => {
    const { services, selectedSkillType } = get();
    if (!selectedSkillType) return services;
    return appData.services.items.filter(
      (item: Skill) => item.type === selectedSkillType
    );
  },
}));

