import Marquee from "react-fast-marquee";
import { AppTechStackLogos } from "@/components/common";
import { ReactNode } from "react";
import { AppSectionContainer } from "@/components/layout";

interface Tech {
  label: string;
  icon: ReactNode;
  url?: string;
}

interface AppIconsSectionProps {
  stack: Tech[];
  speed?: number;
  direction?: "left" | "right";
  containerClassName?: string;
  iconClassName?: string;
}
export function AppIconsSection({
  stack,
  speed = 40,
  direction = "left",
  containerClassName = "",
  iconClassName = "",
}: AppIconsSectionProps) {
  console.log("AppMarqueeIcons");

  return (
    <AppSectionContainer>
    <div className={containerClassName}>
      <Marquee
        speed={speed}
        direction={direction}
        pauseOnHover
        gradient={false}
      >
        {stack.map((tech) => (
          <div
            key={tech.label}
            className="flex-shrink-0 flex items-center justify-center mx-4"
          >
            <AppTechStackLogos stack={[tech]} className={iconClassName} />
          </div>
        ))}
      </Marquee>
    </div>
      </AppSectionContainer>
  );
}
