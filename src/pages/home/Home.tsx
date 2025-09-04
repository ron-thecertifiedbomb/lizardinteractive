
import { LizardAnimatedBackground } from '@/components/common/LizardComponents';
import { LizardControlButton } from '@/components/common/LizardComponents/layout';
import { LizardDiv } from '@/components/common/LizardComponents/layout/LizardDiv';
import { Center} from '@/components/icons/svg';


export default function Home() {



  return (
    <LizardDiv direction='row' className="relative flex w-full flex-1 mx-auto overflow-hidden justify-center items-center">


      <LizardDiv className="absolute top-1/2 left-1/2 z-0 h-[450px] w-full -translate-x-1/2 -translate-y-1/2 ">
        <LizardAnimatedBackground
          svg={Center}
          className="flex-1 pointer-events-none px-4 rounded-2xl"
        />
      </LizardDiv>
      <LizardDiv className="relative z-10">
       <LizardControlButton/>
      </LizardDiv>




    </LizardDiv>
  )
}
