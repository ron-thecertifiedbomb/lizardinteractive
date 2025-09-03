
import { LizardAnimatedBackground } from '@/components/common/LizardComponents';
import { LizardDiv } from '@/components/common/LizardComponents/layout/LizardDiv';
import { LizardLogoContainer } from '@/components/common/LizardComponents/LizardLogoContainer';

import { Center, Lizard, LizardTitle } from '@/components/icons/svg';
import { bounceIn } from '@/lib/motionMode';
import { useNavigationStore } from '@/store';
import { useControlPanelStore } from '@/store/ControlPanelStore';


export default function Home() {

  const { hideControlPanelButton, setHideControlPanelButton, setShowRightPanel, setShowLeftPanel, showLeftPanel, showRightPanel } = useControlPanelStore()

  const { setShowPanel, showPanel } =
    useNavigationStore();

  return (
    <LizardDiv direction='row' className="relative flex w-full flex-1 mx-auto overflow-hidden justify-center items-center">

      {/* <LizardDiv className="absolute inset-0 z-0">
        <LizardAnimatedBackground svg={Cover} className="w-full h-full pointer-events-none px-4 rounded-2xl" />
      </LizardDiv>
       */}    <LizardDiv className="absolute top-1/2 left-1/2 z-0 h-[450px] w-full -translate-x-1/2 -translate-y-1/2 ">
        <LizardAnimatedBackground
          svg={Center}
          className="flex-1 pointer-events-none px-4 rounded-2xl"
        />
      </LizardDiv>
      <LizardDiv className="relative z-10">
        <LizardDiv
          animation={bounceIn}
          className="flex flex-col flex-1 w-full items-center justify-center lg:px-10 bg-transparent"
        >
          <LizardDiv
            onClick={() => {
              setHideControlPanelButton(!hideControlPanelButton);
              setShowRightPanel(!showRightPanel);
              setShowLeftPanel(!showLeftPanel);
              setShowPanel(!showPanel);
            }}
            className="cursor-pointer relative flex items-center justify-center"
          >
            {/* Lizard icon */}
            <LizardLogoContainer
              svg={Lizard}
              logoStroke=" stroke-[#2aff2aff] stroke-[5]"
              logoHeight="h-[100px]"
              logoWidth='w-[100px]'
              logoFill="fill-[#ffffff]"
              className={`drop-shadow-[0_0_8px_rgba(255,255,255,3)] opacity-60   hover:drop-shadow-[0_0_10px_#ffffff]
      transition-[max-height,transform,opacity] duration-900 ease-in-out        overflow-hidden  ${hideControlPanelButton
                  ? "max-h-20 scale-100 opacity-100"
                  : "max-h-0 scale-0 opacity-0"}`}
            />

            {/* LizardTitle icon */}
            <LizardLogoContainer
              svg={LizardTitle}
              logoStroke="stroke-[#ffffff] stroke-[3]"
              logoWidth='w-45'
              logoFill="fill-white"
              className={`
      absolute
drop-shadow-[0_0_10px_#00ff88] hover:drop-shadow-[0_0_10px_#00ff88]
      transition-[max-height,transform,opacity] duration-900 ease-in-out
      overflow-hidden
      ${hideControlPanelButton
                  ? "max-h-0 scale-0 opacity-0"
                  : "max-h-20 scale-100 opacity-100"}
    `}
            />
          </LizardDiv>
        </LizardDiv>
      </LizardDiv>




    </LizardDiv>
  )
}
