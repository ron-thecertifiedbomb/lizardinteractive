

import { Lizard } from "@/components/icons/svg";
import { LizardLogoContainer } from "./LizardLogoContainer";
interface LizardInteractiveButtonProps {
  onClick?: () => void;

  className?: string; // extra Tailwind classes for the image
}

export function LizardInteractiveButton({
  onClick,
  className

}: LizardInteractiveButtonProps) {
  // Cast the imported SVG properly

  return (

    <div
      onClick={onClick}
      className={`${className} cursor-pointer pb-2`}

    >
      <LizardLogoContainer
        svg={Lizard}
        className="w-6 h-6 sm:w-6 sm:h-6  fill-white stroke-white"
      />
    </div>

  );
}
