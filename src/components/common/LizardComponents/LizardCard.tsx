import { LizardImage } from "@/components/common/LizardComponents/LizardImage";
import { LizardText } from "@/components/common/LizardComponents/LizardText";
import { LizardIcons } from "./LizardIcons";

import { multimediaStack, webTechStack } from "@/config/techstack";
import { useSkillsStore } from "@/store";

interface LizardCardProps {
  badge?: string;
  logoSrc?: string;
  className?: string;
}

export function LizardCard({ badge, logoSrc, className = "" }: LizardCardProps) {
  const { getFilteredSkills } = useSkillsStore();
  const filteredSkills = getFilteredSkills();
  const allTechStack = [...webTechStack, ...multimediaStack];

  return (
    <div
      className={`
        relative rounded-sm overflow-hidden
        border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        bg-gradient-to-r from-black/20 via-red-900/20 to-black/1 p-4
        ${className}
      `}
    >
      {/* Badge */}
      {badge && (
        <div className="bg-red-500 p-2 rounded-sm flex items-center justify-center mb-5 w-full relative overflow-hidden">
          <LizardText className="text-[20px] text-white font-light uppercase">
            {badge}
          </LizardText>

          {logoSrc && (
            <div className="absolute right-[-45px] top-12 translate-y-1/2 w-20 h-20 pointer-events-none">
              <LizardImage
                src={logoSrc}
                alt="logo"
                objectFit="contain"
                className="w-6 h-6 opacity-34 scale-150"
              />
            </div>
          )}
        </div>
      )}

      {/* Faint watermark */}
      {logoSrc && (
        <LizardImage
          src={logoSrc}
          alt="logo"
          objectFit="contain"
          className="absolute top-30 right-1 transform -translate-y-1/2 w-18 sm:w-16 lg:w-60 h-auto opacity-[0.03] fill-black pointer-events-none"
        />
      )}

      {/* Card content */}
      <div className="flex flex-col p-2">
        {filteredSkills.map((skill) => {
          const skillIcons = allTechStack.filter((tech) =>
            (skill.techStack ?? []).includes(tech.label)
          );

          return (
            <LizardIcons
              key={skill.type}
              stack={skillIcons.map((tech) => ({
                ...tech,
                icon:
                  typeof tech.icon === "function"
                    ? tech.icon
                    : () => <>{tech.icon}</>,
              }))}
              iconClassName="w-6 h-6"
            />
          );
        })}
      </div>
    </div>
  );
}
