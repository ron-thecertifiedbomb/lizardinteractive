import { create } from "zustand";
import { appData } from "@/config/appData";
import { Skill, SkillsSection } from "@/types/appData";


interface SkillsStore {
  skills: SkillsSection;
  hoveredSkill?: string;
  selectedSkillType?: string;

  setHoveredSkill: (skillType?: string) => void;
  setSelectedSkillType: (type?: string) => void;
  getFilteredSkills: () => SkillsSection[];
}

export const useSkillsStore = create<SkillsStore>((set, get) => ({
  skills: appData.skills.items,
  hoveredSkill: undefined,
  selectedSkillType: appData.skills.items[0]?.type,

  setHoveredSkill: (skillType) => set({ hoveredSkill: skillType }),
  setSelectedSkillType: (type) => set({ selectedSkillType: type }),

  getFilteredSkills: () => {
    const { skills, selectedSkillType } = get();
    if (!selectedSkillType) return skills;
    return appData.skills.items.filter(
      (item: Skill ) => item.type === selectedSkillType
    );
  },
}));

