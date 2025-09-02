import React from "react"; import LizardText from "@/components/assets/text.svg"; import LizardLogoAndTitle from "@/components/assets/lizard.svg"; import Lizard from "@/components/assets/lizard.svg"; import Cover from "@/components/assets/cover.svg"; import LizardRound from "@/components/assets/lizardround.svg"; import LizardRoundStroke from "@/components/assets/lizardroundstroke.svg";

interface LizardLogoProps extends React.SVGProps<SVGSVGElement> {
  selectedLogo: number;
  logoFill?: string;
  logoStroke?: string;
  logoHeight?: string;
  logoWidth?: string;
}
export function LizardLogo({ selectedLogo, logoFill, logoStroke, logoWidth, logoHeight, className }: LizardLogoProps) {
  const lists = [LizardText, LizardLogoAndTitle, Lizard, Cover, LizardRound, LizardRoundStroke]
  const selectedSvg = lists[selectedLogo]



  const SvgComponent = selectedSvg as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

  return <SvgComponent className={`${logoFill} ${logoStroke} ${logoWidth} ${logoHeight} ${className}`} />; 
} 
