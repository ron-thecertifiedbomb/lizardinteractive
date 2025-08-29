import { LizardCard, LizardThumbnail } from '@/components/common'
import { LizardCardBorder, LizardCenterCard, LizardContent, LizardText } from '@/components/common/LizardComponents'

export function SkillsScreen() {
  return (
    <LizardCardBorder className='flex-1    flex-col '>
       <LizardContent
              className="
                box-content
                w-full
                flex  
             
                flex-1
                pt-8
                border-[0.5px] border-[rgba(255,255,255,0.1)]
                shadow-[0_0_40px_10px_rgba(0,0,0,0.3)]
                bg-black
                rounded-sm
                bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(130,12,12,0.18)_14%,rgba(0,0,0,1)_150%)]
              "
            >
      <LizardText className="text-[30px] text-white font-light uppercase mb-8 text-center">
        Craftmanship
      </LizardText>

      <div className="flex flex-wrap justify-center items-start gap-10">
        <LizardThumbnail
          title="Progress"
          content="I have created a set of achievements for myself and I use this page to track them."
          badge="Technology"
          logoSrc="/assets/lizardinteractive.svg"
   
        />

        <LizardCenterCard className='flex-1 min-w-[250px] max-w-[600px]' />

        <LizardCard
          badge="Technologies"
          logoSrc="/assets/lizardinteractive.svg"
          className="flex-1 min-w-[200px] max-w-[200px] min-h-[200px]"
        />
      </div>
      </LizardContent>
    </LizardCardBorder>
  )
}
