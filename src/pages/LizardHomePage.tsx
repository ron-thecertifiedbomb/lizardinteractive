import { LizardAnimatedBackground } from "@/components/common/LizardComponents";
import { LizardControlButton } from "@/components/common/LizardComponents/layout";
import { LizardDiv } from "@/components/common/LizardComponents/layout/LizardDiv";
import { LizardCenterScreen } from "@/components/common/LizardComponents/screens";
import { Center } from "@/components/icons";
import { useControlPanelStore } from "@/store/ControlPanelStore";

export function LizardHomePage() {

  const { showCenterLogo } = useControlPanelStore()

  return (
    <LizardDiv
      direction="row"
      className="relative flex w-full max-w-[1200px] flex-1 mx-auto overflow-hidden justify-center items-center "
    >
      <LizardDiv className="absolute z-0 flex-1 w-full justify-center items-center">

        <LizardAnimatedBackground
          svg={Center}
          className={`flex-1 flex justify-center pointer-events-none px-4 rounded-2xl 
    drop-shadow-[0_0_8px_rgba(255,255,255,3)] opacity-60 
    hover:drop-shadow-[0_0_10px_#ffffff]
    origin-center
    transition-all duration-1000 ease-in-out
    ${showCenterLogo ? "opacity-100 delay-400" : " opacity-0"}`}
          logoFill="#166534"
          logoStroke="#166534"
          thumbNailHeight="70%"
          thumbNailWidth="70%"
        />

      </LizardDiv>

      <LizardDiv className="relative z-10 flex-1 w-full h-full flex items-center justify-center">
        <LizardCenterScreen className="relative z-20 flex flex-col w-full h-full flex-1 mx-auto overflow-hidden justify-center items-center gap-4" />
        <LizardDiv className="absolute inset-0 flex items-center justify-center z-10">
          <LizardControlButton />
        </LizardDiv>
      </LizardDiv>


    </LizardDiv>
  );
}
