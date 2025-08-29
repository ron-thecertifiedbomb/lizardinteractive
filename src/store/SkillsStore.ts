import { create } from "zustand";
import { Skill, appData } from "@/config/appData";

interface SkillsStore {
  skills: Skill[];
  hoveredSkill?: string;
  selectedSkillType?: string;

  setHoveredSkill: (skillType?: string) => void;
  setSelectedSkillType: (type?: string) => void;
  getFilteredSkills: () => Skill[];
}

export const useSkillsStore = create<SkillsStore>((set, get) => ({
  skills: appData.skills,
  hoveredSkill: undefined,
  selectedSkillType: appData.skills[0]?.type,

  setHoveredSkill: (skillType) => set({ hoveredSkill: skillType }),
  setSelectedSkillType: (type) => set({ selectedSkillType: type }),

  getFilteredSkills: () => {
    const { skills, selectedSkillType } = get();
    if (!selectedSkillType) return skills;
    return skills.filter((skill) => skill.type === selectedSkillType);
  },
}));
