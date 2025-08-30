
import {  LizardDiv, LizardText } from "@/components/common/LizardComponents";
import { slideRight } from "@/lib/motionMode";

export function PlayGround() {


  return (
    <>
      <LizardDiv animation={slideRight} direction="column" className="p-4 gap-1">
        <LizardText>
          Lizard Interactive
        </LizardText>
        <LizardText>
          Lizard Interactive
        </LizardText>
     </LizardDiv>
    </>
  );
}
