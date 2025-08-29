import { LizardInteractiveButton } from "@/components/common/LizardComponents/LizardInteractiveButton";
import { AppSectionContainer } from "@/components/layout";

export function AppFooter() {
  return (
    <footer className="w-full py-2 flex justify-center items-center  bg-black ">
      <AppSectionContainer className="w-full h-auto max-w-[1400px] flex justify-center items-center bg-transparent ">
        <LizardInteractiveButton
          src="/assets/lizardinteractive.svg"
          alt="Logo"
        />
      </AppSectionContainer>
    </footer>
  );
}
