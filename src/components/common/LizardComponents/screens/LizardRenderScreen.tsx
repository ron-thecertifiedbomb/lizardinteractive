import { LizardText, LizardDiv, LizardCardBorder } from '@/components/common/LizardComponents'
import { useSectionStore } from '../../../../store/SectionStore';
import React from 'react';
import { Skill } from '@/types/appData';
import { fadeIn } from '@/lib/motionMode';

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
    <LizardDiv className='flex h-full w-full p-15 border rounded-xl  shadow-[0_0_20px_#ffffff10]
'>
      <LizardCardBorder cornerSize="100px" className="py-2 px-20 flex-1">
        <LizardDiv
          key={section}
          animation={fadeIn}
          className="
          h-[600px]
    box-content
    w-full
    bg-
    items-center
    justify-center
    rounded-xl
    bg-white/3          
    backdrop-blur-[1px]    
    border border-white/20 
    shadow-[0_0_20px_#ffffff10] 
    px-2
    
  "
        >
          <LizardText className="text-[30px] font-bold mb-4 ">{heading}</LizardText>
          <LizardDiv  className='gap-2 justify-center items-center'>
            {Array.isArray(content) ? (
              content.map((item: Skill, idx: number) => (
                <LizardDiv direction='row' className=' border'>
                <LizardDiv
                  key={idx}

                  className="items-start w-full  gap-4 rounded-sm"
                >
                  <LizardDiv direction="column" className="flex-1 justify-center gap-2">
                    <LizardText className="text-[25px]">{item.title}</LizardText>
                    <LizardText className="text-[16px] text-gray-400">{item.description}</LizardText>
                  </LizardDiv>

                  {item.techStack && item.techStack.length > 0 && (
                    <LizardDiv direction='row' className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, techIdx) => (
                        <LizardDiv
                          key={techIdx}
                          className="px-2 py-1 bg-gray-800 text-white rounded"
                        >
                          <LizardText className="text-xs">{tech}</LizardText>
                        </LizardDiv>
                      ))}
                    </LizardDiv>
                  )}
                </LizardDiv>
            </LizardDiv>
              ))
            ) : (
              <LizardDiv className=' w-full max-w-[600px] border-green-400 p-2 rounded-sm'>
                <LizardText className='text-[25px]'>{content}</LizardText>
              </LizardDiv>
            )}
          </LizardDiv>
        </LizardDiv>
      </LizardCardBorder>
    </LizardDiv>
  );
}