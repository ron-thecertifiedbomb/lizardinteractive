import { useScrollToHeroOnLoad } from '@/hooks/useScrollToTopWithHeader'
import { LizardSection, IntroductionScreen, SkillsScreen, ProjectScreen, AboutMeScreen, LizardProfileCard, LizardCardStyle, LizardInteractivePanel } from '@/components/common/LizardComponents'

import { useNavigationStore } from '@/store';

export default function Home() {
  useScrollToHeroOnLoad()

  const cardData = [
    { label: "name", value: "ronan sibunga" },
    { label: "occupation", value: "fullstack developer" },
    { label: "corporation", value: "lizard interactive" },
    { label: "availability", value: "open for hire", valueClassName: "text-[18px] px-2 py-1 mt-2 uppercase tracking-tight text-black bg-[#E84A4A] w-full leading-none mb-1" },
    { label: "social", value: "open connection", valueClassName: "text-[18px] px-2 py-1 mt-2 uppercase tracking-tight text-[#E84A4A] border-2 border-[#E84A4A] w-full leading-none" },
  ];
  const panelData = [
    { label: "", value: "Micro-Interactions", valueClassName: "text-[18px]  py-1 px-2  uppercase text-white bg-[#404040]  tracking-tight w-full leading-none mb-1" },
    { label: "quest name", value: "Extensive Interactivity", valueClassName: "text-[18px]  py-1  uppercase text-[#E84A4A]  tracking-tight w-full leading-none mb-1" },
    { label: "Mission", value: "To elevate user experiences by pioneering extensive interactivity in UI/UX design. I strive to create interfaces that are not just usable, but truly engaging and dynamic.", valueClassName: "text-[18px] py-1 uppercase text-[#7A7A7A]  tracking-tight w-full leading-none mb-1" },

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
    <div className="flex w-full flex-1 max-w-[1800px] mx-auto justify-center gap-4 ">
      {/* Left fixed card aligned closer to center */}
      <div className="flex w-full max-w-[220px] justify-center items-start ">
        <LizardCardStyle items={cardData} logoClassName=" w-20 fill-white" className='w-full h-auto' />
      </div>

      {/* Center section stretches but maxes at 1200px */}
      <LizardSection className="flex flex-col flex-1 w-full justify-center">
        {renderScreen()}
      </LizardSection>

      {/* Right fixed card */}
      <div className="w-full max-w-[220px] ">
        <LizardInteractivePanel
          disabled
          items={panelData}
          heading="Activity Quest"
          cardClassName="w-full h-auto"

        />
      </div>
    </div>
  )
}
