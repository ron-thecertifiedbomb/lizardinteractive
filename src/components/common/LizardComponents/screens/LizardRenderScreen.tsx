import { LizardDiv, LizardCardBorder, LizardCarousel, LizardText } from '@/components/common/LizardComponents'
import { fadeIn } from '@/lib/motionMode';
import { useSectionStore } from '@/store';

import React from 'react';


interface LizardRenderScreenProps {
  section: string
}

export function LizardRenderScreen({ section }: LizardRenderScreenProps) {

  const { currentSectionData, setCurrentSectionData } = useSectionStore();

  React.useEffect(() => {
    setCurrentSectionData(section);
  }, [section, setCurrentSectionData]);

  if (!currentSectionData) return null;

  const { heading, items } = currentSectionData;

  return (
    <LizardDiv className='flex flex-1 w-full  lg:max-h-[740px] border rounded-xl  shadow-[0_0_20px_#ffffff10]'>
      <LizardCardBorder cornerSize="100px" className="flex-1 min-h-[500px] h-full lg:py-14 px-8 lg:px-15 w-full">
        <LizardDiv
          key={section}
          animation={fadeIn}
          className="flex box-content w-full h-[400px] lg:h-[600px] items-center justify-center rounded-xl  backdrop-blur-[1px] border border-white/20 shadow-[0_0_20px_#ffffff10] px-2"
        >

          <LizardDiv className=" flex-1 p-4 w-full items-center">
            <LizardText variant='h1' className=' lg:text-[40px]'>
              {heading}
            </LizardText>

            <LizardCarousel items={items} >
            </LizardCarousel>
          </LizardDiv>
        </LizardDiv>
      </LizardCardBorder>
    </LizardDiv>
  );
}