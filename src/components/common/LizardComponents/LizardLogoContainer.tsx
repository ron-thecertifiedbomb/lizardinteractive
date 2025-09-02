import React from "react";

interface LizardLogoContainerProps {
    logoFill?: string;
    logoStroke?: string;
    logoHeight?: string;
    logoWidth?: string;
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
    onClick?: () => void; // ✅ allow click handler
}

export function LizardLogoContainer({
    svg: SvgIcon,
    logoFill,
    logoStroke,
    logoWidth,
    logoHeight,
    className,
    onClick,
}: LizardLogoContainerProps) {
    return (
        <SvgIcon
            onClick={onClick} // ✅ forwards click events
            className={`${logoFill ?? ""} ${logoStroke ?? ""} ${logoWidth ?? ""} ${logoHeight ?? ""} ${className ?? ""} w-100% h-100% cursor-pointer`}
        />
    );
}
