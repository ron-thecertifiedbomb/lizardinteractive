import { AppSectionContainer } from "@/components/layout";
import { AppLabel, AppCard } from "@/components/common";

export function AppAboutMe() {
  return (
    <AppSectionContainer id="about" className="px-4">
      <AppLabel variant="h1" className="mb-4 md:mb-6 lg:mb-8">
        About Me
      </AppLabel>
      <AppCard description="I’m a passionate React Developer with extensive experience building dynamic, high-performance applications for both web and mobile platforms." />
    </AppSectionContainer>
  );
}
