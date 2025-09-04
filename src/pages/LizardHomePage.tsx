import { LizardAnimatedBackground } from '@/components/common/LizardComponents';
import { LizardControlButton } from '@/components/common/LizardComponents/layout';
import { LizardDiv } from '@/components/common/LizardComponents/layout/LizardDiv';
import { LizardCenterScreen } from '@/components/common/LizardComponents/screens';
import { Center } from '@/components/icons/svg';
import { useControlPanelStore } from '@/store/ControlPanelStore';



export function LizardHomePage() {

    const { showHeaderPanel } = useControlPanelStore()


  console.log('showHeaderPanel', showHeaderPanel)

  return (
    <LizardDiv direction='row' className="relative flex w-full flex-1 mx-auto overflow-hidden justify-center items-center">
      <LizardDiv className="absolute top-1/2 left-1/2 z-0 h-[600px] w-full -translate-x-1/2 -translate-y-1/2 ">
        <LizardAnimatedBackground
          svg={Center}
          className="flex-1 pointer-events-none px-4 rounded-2xl"
        />
      </LizardDiv>


      <LizardDiv
        animation={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.25, ease: "easeInOut" }, // ⏩ fast & smooth
        }}
        className="relative z-10 flex items-center justify-center"
      >
        {/* Center Screen stays centered */}
        <LizardCenterScreen />

        {/* Control Button centered overlay */}
        <LizardDiv
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <LizardControlButton />
        </LizardDiv>
      </LizardDiv>


    </LizardDiv>
  )
}
