import { LizardDiv, LizardCardBorder, LizardCard } from '@/components/common/LizardComponents'
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

  const { heading, content } = currentSectionData;

  return (
    <LizardDiv className='flex h-full w-full p-15 border rounded-xl  shadow-[0_0_20px_#ffffff10]'>
      <LizardCardBorder cornerSize="100px" className="py-2 px-5 flex-1">
        <LizardDiv
          key={section}
          animation={fadeIn}
          className="h-[600px] flex box-content w-full items-center justify-center rounded-xl bg-white/3 backdrop-blur-[1px] border border-white/20 shadow-[0_0_20px_#ffffff10] px-2"
        >
          <LizardCard heading={heading} content={content} >
          </LizardCard>
        </LizardDiv>
      </LizardCardBorder>
    </LizardDiv>
  );
}