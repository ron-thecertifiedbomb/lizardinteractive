import { LizardAnimatedBackground } from "@/components/common/LizardComponents";
import { LizardControlButton } from "@/components/common/LizardComponents/layout";
import { LizardDiv } from "@/components/common/LizardComponents/layout/LizardDiv";
import { LizardCenterScreen } from "@/components/common/LizardComponents/screens";
import { Center } from "@/components/icons/svg";

export function LizardHomePage() {
  return (
    <LizardDiv
      direction="row"
      className="relative flex w-full flex-1 mx-auto overflow-hidden justify-center items-center"
    >
      {/* Background animated SVG */}
      <LizardDiv className="absolute z-0 flex-1 w-full justify-center items-center">
        <LizardAnimatedBackground
          svg={Center}
          className="flex-1 pointer-events-none px-4 rounded-2xl"
          pulse={true}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          logoFill="#00ff88"
          logoStroke="#00ffaa"
          thumbNailHeight="h-full"
          thumbNailWidth="w-full"
        />
      </LizardDiv>

      {/* Foreground content */}
      <LizardDiv className="relative z-10 flex items-center justify-center">
        <LizardCenterScreen />

        <LizardDiv className="absolute inset-0 flex items-center justify-center z-10">
          <LizardControlButton />
        </LizardDiv>
      </LizardDiv>
    </LizardDiv>
  );
}
