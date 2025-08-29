
import { LizardCardBorder, LizardCardHeader, } from "@/components/common/LizardComponents";
import { LizardLogoContainer } from "./LizardLogoContainer";
import { LizardLogo } from "./LizardLogo";

export function LizardProfileCard() {

  const profileItems = [
    { label: "Name", value: "Ronan Sibunga" },
    { label: "Occupation", value: "Fullstack Developer" },
    { label: "Corporation", value: "Lizard Interactive" },
    { label: "Availability", value: "Open for Hire", type: "highlight" as const },
    { label: "Social", value: "Open Connection", type: "bordered" as const },
  ];

  return (
    <div className="max-w-[260px] w-full h-auto">
      <LizardCardBorder cornerSize="8px" className="p-4 border">
        
        <LizardLogoContainer
          svg={LizardLogo}
          className="w-12 h-12 fill-white stroke-white"
        />
      </LizardCardBorder>



      <LizardCardHeader items={profileItems} className="mt-8 w-full" />
    </div>
  );
}
