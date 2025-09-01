import { LizardDiv, LizardCardBorder, LizardCard, LizardCarousel, LizardText } from '@/components/common/LizardComponents'
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
    <LizardDiv className='flex h-full w-full lg:p-15 border rounded-xl  shadow-[0_0_20px_#ffffff10]'>
      <LizardCardBorder cornerSize="100px" className="py-2 px-2 lg:px-5 flex-1">
        <LizardDiv
          key={section}
          animation={fadeIn}
          className="min-h-[600px]  flex box-content w-full items-center justify-center rounded-xl  backdrop-blur-[1px] border border-white/20 shadow-[0_0_20px_#ffffff10] px-2"
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