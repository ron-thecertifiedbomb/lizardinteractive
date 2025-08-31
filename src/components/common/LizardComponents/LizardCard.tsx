import { LizardText, LizardDiv } from '@/components/common/LizardComponents'
import { Skill } from '@/types/appData';


type LizardCardContent = string | Skill[] | null;

interface LizardCardProps {

    heading: string
    content: LizardCardContent;
}
export function LizardCard({ heading, content }: LizardCardProps) {

    return (


        <LizardDiv>
            <LizardText className="text-[20px] font-bold mb-4  text-center">{heading}</LizardText>
            <LizardDiv direction="row" className='gap-2'>
                {Array.isArray(content) ? (
                    content.map((item: Skill, idx: number) => (
                        <LizardDiv key={idx} className='gap-4 rounded-sm border'>

                            <LizardDiv direction="column" className="gap-2">
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

                    ))
                ) : (
                    <LizardDiv className=' w-full max-w-[800px] p-2 rounded-sm'>
                        <LizardText className='text-[20px]'>{content}</LizardText>
                    </LizardDiv>
                )}
            </LizardDiv>
        </LizardDiv>


    );
}