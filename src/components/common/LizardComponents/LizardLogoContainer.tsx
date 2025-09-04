import React, { useEffect, useRef } from "react";

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
   const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    svgRef.current.querySelectorAll("*").forEach((el: any) => {
      if (logoFill) el.setAttribute("fill", logoFill);
      if (logoStroke) el.setAttribute("stroke", logoStroke);
      if (logoFill) el.style.fill = logoFill;
      if (logoStroke) el.style.stroke = logoStroke;
    });
  }, [logoFill, logoStroke]);

  if (!SvgIcon) return null;

  return (
    <SvgIcon
      ref={svgRef}
      onClick={onClick}
      className={className}
      style={{
        width: logoWidth ?? "100%",
        height: logoHeight ?? "100%",
        display: "block",
        cursor: "pointer",
      }}
    />
  );
}
