import React from "react";

interface LizardLogoContainerProps {
    logoFill?: string;
    logoStroke?: string;
    logoHeight?: string;
    logoWidth?: string;
    svg: React.FC<React.SVGProps<SVGSVGElement>>; 
    className?: string;
}

export function LizardLogoContainer({ svg: SvgIcon, logoFill, logoStroke, logoWidth, logoHeight, className }: LizardLogoContainerProps) {
    return <SvgIcon className={`${logoFill} ${logoStroke} ${logoWidth} ${logoHeight} ${className} w-100% h-100%`} />;
}
