// LizardCardBorder.tsx
import React from "react";

interface LizardCardBorderProps {
    children: React.ReactNode;
    className?: string;

    borderColor?: string;
    borderStyle?: string;

    // Top Left
    topLeftHThickness?: string;
    topLeftHLength?: string;
    topLeftVThickness?: string;
    topLeftVLength?: string;

    // Top Right
    topRightHThickness?: string;
    topRightHLength?: string;
    topRightVThickness?: string;
    topRightVLength?: string;

    // Bottom Left
    bottomLeftHThickness?: string;
    bottomLeftHLength?: string;
    bottomLeftVThickness?: string;
    bottomLeftVLength?: string;

    // Bottom Right
    bottomRightHThickness?: string;
    bottomRightHLength?: string;
    bottomRightVThickness?: string;
    bottomRightVLength?: string;
}

export function LizardCardBorder({
    children,
    className,
    borderColor = "#E84A4A",
    borderStyle = "solid",

    // defaults
    topLeftHThickness = "1px",
    topLeftHLength = "10px",
    topLeftVThickness = "1px",
    topLeftVLength = "10px",

    topRightHThickness = "1px",
    topRightHLength = "10px",
    topRightVThickness = "1px",
    topRightVLength = "10px",

    bottomLeftHThickness = "1px",
    bottomLeftHLength = "10px",
    bottomLeftVThickness = "1px",
    bottomLeftVLength = "10px",

    bottomRightHThickness = "1px",
    bottomRightHLength = "10px",
    bottomRightVThickness = "1px",
    bottomRightVLength = "10px",
}: LizardCardBorderProps) {
    const makeBorder = (thickness: string) =>
        thickness !== "0" ? `${thickness} ${borderStyle} ${borderColor}` : "none";

    return (
        <div className={`relative w-full flex items-center justify-center ${className ?? ""}`}>
            {children}

            <div className="pointer-events-none absolute inset-0">
                {/* Top Left */}
                <div className="absolute top-0 left-0">
                    <div style={{ width: topLeftHLength, borderTop: makeBorder(topLeftHThickness) }} />
                    <div style={{ height: topLeftVLength, borderLeft: makeBorder(topLeftVThickness) }} />
                </div>

                {/* Top Right */}
                <div className="absolute top-0 right-0">
                    <div style={{ width: topRightHLength, borderTop: makeBorder(topRightHThickness) }} />
                    <div style={{ height: topRightVLength, borderRight: makeBorder(topRightVThickness) }} />
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-0 left-0">
                    <div style={{ height: bottomLeftVLength, borderLeft: makeBorder(bottomLeftVThickness) }} />
                    <div style={{ width: bottomLeftHLength, borderBottom: makeBorder(bottomLeftHThickness) }} />
                </div>

                {/* Bottom Right */}
                <div className="absolute bottom-0 right-0">
                    <div style={{ height: bottomRightVLength, borderRight: makeBorder(bottomRightVThickness) }} />
                    <div style={{ width: bottomRightHLength, borderBottom: makeBorder(bottomRightHThickness) }} />
                </div>
            </div>
        </div>
    );
}
