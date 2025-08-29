
import {

    LizardContent,
    LizardCoordinates,
    LizardDateAndTime,
    LizardLocator,

} from '@/components/common/LizardComponents'



export function IntroductionScreen() {
    return (
        <LizardContent
            className="
                      box-content
                      w-full
                      flex  
                      flex-col 
                      flex-1
                      items-center
                      justify-center
                    "
        >
            {/* <LizardText className="text-[18px] text-white font-light uppercase mb-4 text-center">
                Introduction Screen
            </LizardText> */}

            {/* <LizardDateAndTime className='text-[40px]' type="date" /> */}
            {/* <LizardCoordinates />
            <LizardLocator /> */}
        </LizardContent>
    )
}
