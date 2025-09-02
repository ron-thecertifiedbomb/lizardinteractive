
import { LizardInteractivePanel, LizardDiv, LizardRenderScreen, } from '@/components/common/LizardComponents'
import { LizardProfileCard } from '@/components/common/LizardComponents/LizardProfileCard';
import { profile } from '@/config/appData';
import { useScreenType } from '@/hooks/useScreenType';

import { slideLeft } from '@/lib/motionMode';

import { useNavigationStore } from '@/store';
import { useEffect } from 'react';


export default function Home() {
  const { isTablet, isDesktop } = useScreenType();


  const panelData = [
    {
      label: "",
      value: "Micro-Interactions",
      labelProps: { className: "text-[10px] lg:text-[16px] uppercase", children: "" },
      valueProps: { className: "text-[12px] lg:text-[16px] py-1 px-2 uppercase text-white bg-[#404040] tracking-tight w-full leading-none mb-1", children: "Micro-Interactions" },
    },
    {
      label: "quest name",
      value: "Extensive Interactivity",
      labelProps: { className: "text-[10px] lg:text-[16px] uppercase", children: "quest name" },
      valueProps: { className: "text-[12px] lg:text-[16px]  py-1 uppercase text-[#E84A4A] tracking-tight w-full leading-none mb-1", children: "Extensive Interactivity" },
    },
    {
      label: "Mission",
      value: "To elevate user experiences by pioneering extensive interactivity in UI/UX design. I strive to create interfaces that are not just usable, but truly engaging and dynamic.",
      labelProps: { className: "text-[10px] lg:text-[16px] uppercase", children: "Mission" },
      valueProps: { className: "text-[12px] lg:text-[12px]  py-1 uppercase text-[#7A7A7A] tracking-tight w-full leading-none mb-1", children: "To elevate user experiences by pioneering extensive interactivity in UI/UX design. I strive to create interfaces that are not just usable, but truly engaging and dynamic." },
    },
  ];
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
