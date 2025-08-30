
import { LizardLogo } from ".";
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
        svg={LizardLogo}
        className="w-8 h-8 sm:w-10 sm:h-10  fill-white stroke-white"
      />
    </div>

  );
}
