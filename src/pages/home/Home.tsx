

import { LizardDiv } from '@/components/common/LizardComponents/layout/LizardDiv';
import { LizardLogoContainer } from '@/components/common/LizardComponents/LizardLogoContainer';
import { Lizard,LizardTitle } from '@/components/icons/svg';
import { bounceIn } from '@/lib/motionMode';
import { useNavigationStore } from '@/store';
import { useControlPanelStore } from '@/store/ControlPanelStore';


export default function Home() {


  const { hideControlPanelButton, setHideControlPanelButton, setShowRightPanel, setShowLeftPanel, showLeftPanel, showRightPanel } = useControlPanelStore()
  const { setShowPanel, showPanel } =
    useNavigationStore();

  return (
    <LizardDiv direction='row' className="flex w-full flex-1 mx-auto justify-center items-center bg-[url('/assets/cover.svg')] bg-center bg-no-repeat ">
      
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
            logoStroke="stroke-[#88fb59ff] stroke-[4]"
            logoFill="fill-white"
            className={`
      absolute
      drop-shadow-[0_0_15px_#E84A4A] hover:drop-shadow-[0_0_25px_#E84A4A]
      transition-[max-height,transform,opacity] duration-900 ease-in-out
      overflow-hidden
      ${hideControlPanelButton
                ? "max-h-20 scale-100 opacity-100"
                : "max-h-0 scale-0 opacity-0"}
    `}
          />

          {/* LizardTitle icon */}
          <LizardLogoContainer
            svg={LizardTitle}
            logoStroke="stroke-[#88fb59ff] stroke-[3]"
            logoWidth='w-40'
            logoFill="fill-white"
            className={`
      absolute
      drop-shadow-[0_0_15px_#E84A4A] hover:drop-shadow-[0_0_25px_#E84A4A]
      transition-[max-height,transform,opacity] duration-900 ease-in-out
      overflow-hidden
      ${hideControlPanelButton
                ? "max-h-0 scale-0 opacity-0"
                : "max-h-20 scale-100 opacity-100"}
    `}
          />
        </LizardDiv>

      </LizardDiv>
      <LizardDiv>
        {/* <LizardRenderScreen section={section} /> */}
      </LizardDiv>


    </LizardDiv>
  )
}
