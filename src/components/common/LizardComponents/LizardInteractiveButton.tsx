
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
      className={`${className} cursor-pointer`}

    >
      <LizardLogoContainer
        svg={LizardLogo}
        className="w-12 h-12 fill-white stroke-white"
      />
    </div>

  );
}
