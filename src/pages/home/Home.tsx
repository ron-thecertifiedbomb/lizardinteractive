
import {  LizardDiv, LizardRenderScreen, } from '@/components/common/LizardComponents'
import { useScreenType } from '@/hooks/useScreenType';
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
    <LizardDiv direction='row' className="flex w-full flex-1 mx-auto justify-center items-center ">
      <LizardDiv className="flex flex-col flex-1 w-full items-center justify-center lg:px-10 max-w-[1400px]">
        <LizardRenderScreen section={section} />
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
