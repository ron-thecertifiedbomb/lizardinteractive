// LizardInteractiveNavigationControlSection.tsx
import { LizardInteractiveButton } from "@/components/common/LizardComponents/LizardInteractiveButton";
import { useNavigationStore } from "@/store";


export function LizardInteractiveNavigationControlSection() {

  const { showPanel, setShowPanel } = useNavigationStore();
  const togglePanel = () => setShowPanel(!showPanel);

  console.log(showPanel)

  return (
    
    <div className=" flex  mx-auto p-2">

        <LizardInteractiveButton  onClick={togglePanel} />
 
      </div>
  
  );
}
