
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
    <LizardDiv direction='row' className="flex w-full flex-1 mx-auto justify-center items-center bg-[url('/assets/cover.svg')] bg-center bg-no-repeat ">
      <LizardDiv className="flex flex-col flex-1 w-full max-w-[1100px] items-center justify-center lg:px-10 ">
        <LizardRenderScreen section={section} />
      </LizardDiv>
    </LizardDiv>
  )
}
