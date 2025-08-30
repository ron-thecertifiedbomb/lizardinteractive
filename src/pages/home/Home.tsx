import { useScrollToHeroOnLoad } from '@/hooks/useScrollToTopWithHeader'
import { LizardSection, IntroductionScreen, SkillsScreen, ProjectScreen, AboutMeScreen, LizardCardStyle, LizardInteractivePanel } from '@/components/common/LizardComponents'

import { useNavigationStore } from '@/store';

export default function Home() {
  useScrollToHeroOnLoad()

  const cardData = [
    { label: "name", value: "ronan sibunga", labelProps: { className: "text-[10px] sm:text-[14px] lg:text-[16px] uppercase ", children: "name" }, valueProps: { className: "text-[10px] sm:text-[14px]  lg:text-[18px] text-[#E84A4A] uppercase", children: "name" } },

    { label: "occupation", value: "fullstack developer", labelProps: { className: "text-[10px] sm:text-[14px] lg:text-[16px] uppercase ", children: "name" }, valueProps: { className: " text-[10px] sm:text-[14px] lg:text-[18px] text-[#E84A4A] uppercase", children: "occupation" } },

    { label: "corporation", value: "lizard interactive", labelProps: { className: "text-[10px] sm:text-[14px] lg:text-[16px] uppercase ", children: "name" }, valueProps: { className: " text-[10px]  sm:text-[14px] lg:text-[16px] text-[#E84A4A] uppercase", children: "corporation" } },

    {
      label: "availability",
      value: "open for hire", labelProps: { className: "text-[10px] sm:text-[14px] lg:text-[16px] mb-1  uppercase ", children: "availability" },
      valueProps: {
        className: "inline-block border-2 bg-[#E84A4A] text-black px-2 py-1", children: "availability"
      },
    },
    {
      label: "social",
      value: "open connection", labelProps: { className: "text-[10px] sm:text-[14px] lg:text-[16px] uppercase mb-1 ", children: "social" },
      valueProps: {
        className: "inline-block border-2 border-[#E84A4A] px-2 py-1", children: "social"
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
    valueProps: { className: "text-[12px] lg:text-[16px]  py-1 uppercase text-[#7A7A7A] tracking-tight w-full leading-none mb-1", children: "To elevate user experiences by pioneering extensive interactivity in UI/UX design. I strive to create interfaces that are not just usable, but truly engaging and dynamic." },
  },
];
  const { currentScreen } = useNavigationStore()

  const renderScreen = () => {
    switch (currentScreen) {
      case 'IntroductionScreen':
        return <IntroductionScreen />
      case 'ProjectsScreen':
        return <ProjectScreen />
      case 'SkillsScreen':
        return <SkillsScreen />
      case 'AboutMeScreen':
        return <AboutMeScreen />

      default:
        return <IntroductionScreen />
    }
  }

  return (
    <div className="flex w-full flex-1 max-w-[1800px] mx-auto justify-center gap-4 px-4 lg:px-0">
      {/* Left fixed card aligned closer to center */}
      <div className="flex w-full max-w-[220px] lg:justify-center items-start">
        <LizardCardStyle items={cardData} logoClassName=" fill-white w-10 md:w-16 lg:w-20 h-auto" className='w-[140px] sm:w-[170px] lg:w-full h-auto' />
      </div>

      {/* Center section stretches but maxes at 1200px */}
      <LizardSection className="flex flex-col flex-1 w-full justify-center">
        {renderScreen()}
      </LizardSection>

      {/* Right fixed card */}
      <div className=" flex w-full max-w-[220px] items-start justify-end lg:justify-center">
        <LizardInteractivePanel
          disabled
          items={panelData}
          heading="Activity Quest"
          cardClassName="h-auto w-[120px] sm:w-[170px] lg:w-full"

        />
      </div>
    </div>
  )
}
