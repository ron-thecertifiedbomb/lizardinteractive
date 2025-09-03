import React from "react";

interface LizardLogoContainerProps {
    logoFill?: string;
    logoStroke?: string;
    logoHeight?: string;
    logoWidth?: string;
    svg?: React.FC<React.SVGProps<SVGSVGElement>>; // ✅ optional now
    className?: string;
    onClick?: () => void;
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
    if (!SvgIcon) return null; // ✅ return nothing if no SVG passed
    return (
        <SvgIcon
            onClick={onClick}
            className={`${logoFill ?? ""} ${logoStroke ?? ""} ${logoWidth ?? ""} ${logoHeight ?? ""} ${className ?? ""} w-100% h-100% cursor-pointer`}
        />
    );
}
