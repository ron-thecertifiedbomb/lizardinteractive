

import { LizardDiv } from '@/components/common/LizardComponents/layout/LizardDiv';
import { LizardLogoContainer } from '@/components/common/LizardComponents/LizardLogoContainer';
import { Lizard, LizardStroke, LizardTitle } from '@/components/icons/svg';
import { useScreenType } from '@/hooks/useScreenType';
import { fadeIn } from '@/lib/motion';
import { bounceIn, slideLeft } from '@/lib/motionMode';
import { useNavigationStore } from '@/store';
import { useEffect } from 'react';


export default function Home() {
  const { isTablet, isDesktop } = useScreenType();


  const { setShowPanel } = useNavigationStore()

  const section = useNavigationStore((state) => state.section);
  useEffect(() => {
    if (isDesktop || isTablet) {
      setShowPanel(true);
    } else {
      setShowPanel(false);
    }
  }, [isDesktop, , isTablet, setShowPanel]);


  return (
    <LizardDiv direction='row' className="flex w-full flex-1 mx-auto justify-center items-center bg-[url('/assets/cover.svg')] bg-center bg-no-repeat ">
      <LizardDiv animation={bounceIn} className="flex flex-col flex-1 w-full max- items-center justify-center lg:px-10 bg-transparent ">
        <LizardLogoContainer
          svg={LizardStroke}
          logoStroke="stroke-[#88fb59ff] stroke-[1.4]"
          className="
drop-shadow-[0_0_15px_#88fb59ff]
    hover:drop-shadow-[0_0_25px_#88fb59ff]
    transition-all duration-300
        cursor-pointer
  "
        />

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
