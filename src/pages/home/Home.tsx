

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



  const { hideControlPanelButton, setHideControlPanelButton, setShowRightPanel, setShowLeftPanel } = useControlPanelStore()
  const { setShowPanel, showPanel } =
    useNavigationStore();


  console.log('showpanel', showPanel)

  return (
    <LizardDiv direction='row' className="flex w-full flex-1 mx-auto justify-center items-center bg-[url('/assets/cover.svg')] bg-center bg-no-repeat ">
      <LizardDiv
        animation={bounceIn}
        className="flex flex-col flex-1 w-full items-center justify-center lg:px-10 bg-transparent"
      >
        <LizardLogoContainer
          svg={LizardStroke}
          logoStroke="stroke-[#88fb59ff] stroke-[2]"
          className={`
      drop-shadow-[0_0_15px_#E84A4A]
      hover:drop-shadow-[0_0_25px_#E84A4A]
      cursor-pointer
      transition-all duration-500 ease-in-out
      ${hideControlPanelButton ? "scale-0 opacity-0" : "scale-100 opacity-100"}
    `}
          onClick={() => {
            setHideControlPanelButton(true);
            setShowRightPanel(true);
            setShowLeftPanel(!showPanel);
            setShowPanel(true)
          }}
        />

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
