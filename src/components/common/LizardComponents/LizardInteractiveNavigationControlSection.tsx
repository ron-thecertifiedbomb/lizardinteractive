// LizardInteractiveNavigationControlSection.tsx
import { LizardInteractiveButton } from "@/components/common/LizardComponents/LizardInteractiveButton";
import { useNavigationStore } from "@/store";
import { LizardDiv } from "./layout/LizardDiv";


export function LizardInteractiveNavigationControlSection() {

  const { showPanel, setShowPanel } = useNavigationStore();
  const togglePanel = () => setShowPanel(!showPanel);

  console.log(showPanel)

  return (
    
    <LizardDiv className=" flex  mx-auto  p-1 lg:p-2">

        <LizardInteractiveButton  onClick={togglePanel} />
 
    </LizardDiv>
  
  );
}
