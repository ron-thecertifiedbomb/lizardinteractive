
import {LizardCardStyle, LizardInteractivePanel, LizardDiv, LizardRenderScreen, } from '@/components/common/LizardComponents'
import { LizardProfileCard } from '@/components/common/LizardComponents/LizardProfileCard';
import { useScreenType } from '@/hooks/useScreenType';

import { slideLeft } from '@/lib/motionMode';

import { useNavigationStore } from '@/store';
import { useEffect } from 'react';


export default function Home() {
  const { isTablet, isDesktop } = useScreenType();


  const cardData = [
    { label: "name", value: "ronan sibunga", labelProps: { className: "text-[16px] uppercase ", children: "name" }, valueProps: { className: " text-[12px] text-[#E84A4A] uppercase", children: "name" } },

    { label: "occupation", value: "fullstack developer", labelProps: { className: "text-[16px] uppercase ", children: "name" }, valueProps: { className: " lg:text-[14px]   text-[#E84A4A] uppercase", children: "occupation" } },

    { label: "corporation", value: "lizard interactive", labelProps: { className: "text-[16px] uppercase ", children: "name" }, valueProps: { className: "  text-[12px] text-[#E84A4A] uppercase", children: "corporation" } },

    {
      label: "availability",
      value: "open for hire", labelProps: { className: "text-[10px] sm:text-[14px] lg:text-[16px] mb-1  uppercase ", children: "availability" },
      valueProps: {
        className: " lg:text-[14px]  inline-block border-2 bg-[#E84A4A] text-black p-1", children: "availability"
      },
    },
    {
      label: "social",
      value: "open connection", labelProps: { className: "text-[10px] sm:text-[14px] lg:text-[16px] uppercase mb-1 ", children: "social" },
      valueProps: {
        className: " lg:text-[14px]  inline-block border-2 border-[#E84A4A] p-1", children: "social"
      },
    },
  ];

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
    <div className="flex w-full flex-1 max-w-[1800px] mx-auto justify-center gap-4 px-2 lg:px-4">

      {isDesktop && (
        <div className="flex w-[10px] sm:w-[120px] lg:w-[140px] lg:justify-center items-start">
          <LizardProfileCard
            items={cardData}
            logoClassName=" fill-white w-10 md:w-16 lg:w-20 h-auto"
            className="w-full h-auto"
          />
        </div>
      )}

      <LizardDiv className="flex flex-col flex-1 w-full justify-center">
        <LizardRenderScreen section={section} />
      </LizardDiv>


      {isDesktop && (
        <LizardDiv animation={slideLeft} className="flex w-[10px] sm:w-[120px] lg:w-[140px] items-start">
          <LizardInteractivePanel
            disabled
            items={panelData}
            heading="Activity Quest"
            cardClassName="h-auto w-full "
          />
        </LizardDiv>
      )}

    </div>
  )
}
