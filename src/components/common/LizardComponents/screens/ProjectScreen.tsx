
import {

    LizardContent,
    LizardText,
} from '@/components/common/LizardComponents'


export function ProjectScreen() {
    return (
        <LizardContent
            className="
                       box-content
                       w-full
                       flex  
                       flex-col 
                       flex-1
                       pt-8
                       border-[0.5px] border-[rgba(255,255,255,0.1)]
                       shadow-[0_0_40px_10px_rgba(0,0,0,0.3)]
                       bg-black
                       rounded-sm
                       bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(130,12,12,0.18)_14%,rgba(0,0,0,1)_150%)]
                     "
        >
            <LizardText className="text-[18px] text-white font-light uppercase mb-4 text-center">
                Projects Screen
            </LizardText>


        </LizardContent>
    )
}
