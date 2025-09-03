

import { LizardDiv } from '@/components/common/LizardComponents/layout/LizardDiv';
import { LizardLogoContainer } from '@/components/common/LizardComponents/LizardLogoContainer';
import { Lizard, LizardStroke, LizardTitle } from '@/components/icons/svg';
import { useScreenType } from '@/hooks/useScreenType';
import { fadeIn } from '@/lib/motion';
import { bounceIn, slideLeft } from '@/lib/motionMode';
import { useNavigationStore } from '@/store';
import { useControlPanelStore } from '@/store/ControlPanelStore';
import { useEffect } from 'react';


export default function Home() {
  const { isTablet, isDesktop } = useScreenType();


  // const { setShowPanel } = useNavigationStore()

  // const section = useNavigationStore((state) => state.section);
  // useEffect(() => {
  //   if (isDesktop || isTablet) {
  //     setShowPanel(true);
  //   } else {
  //     setShowPanel(false);
  //   }
  // }, [isDesktop, , isTablet, setShowPanel]);



  const { hideControlPanelButton, setHideControlPanelButton, setShowRightPanel, setShowLeftPanel, showLeftPanel, showRightPanel } = useControlPanelStore()
  const { setShowPanel, showPanel } =
    useNavigationStore();


  console.log('showpanel', showPanel)



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


      {/* {isDesktop && (
        <LizardDiv animation={slideLeft} className=" pt-13 flex w-[10px] sm:w-[120px] lg:w-[140px] items-start">
          <LizardInteractivePanel
            disabled
            items={panelData}
            heading="Activity Quest"
            cardClassName="h-auto w-full"
          />
        </LizardDiv>
      )} */}

    </LizardDiv>
  )
}
