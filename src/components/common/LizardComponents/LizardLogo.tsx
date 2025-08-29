import LizardLogoSVG from "@/components/assets/lizard.svg";
import React from "react";

interface LizardLogoProps {
  className?: string; // Tailwind for size & color
}
export function LizardLogo({ className }: LizardLogoProps) {
  const SvgComponent = LizardLogoSVG as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
  return <SvgComponent className={className} />;
}
