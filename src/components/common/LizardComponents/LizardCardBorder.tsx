// LizardCardBorder.tsx


interface LizardCardBorderProps {
    cornerSize?: string;
    children: React.ReactNode;
    className?: string;
}

export function LizardCardBorder({
    cornerSize = "10px",
    children,
    className,
}: LizardCardBorderProps) {
    return (
        <div className={`relative w-full flex items-center justify-center ${className}`}>
            {children}

            <div className="pointer-events-none absolute inset-0">
                {/* Top Left */}
                <div className="absolute top-0 left-0">
                    <div style={{ width: cornerSize, borderTop: "2px solid #E84A4A" }} />
                    <div style={{ height: cornerSize, borderLeft: "2px solid #E84A4A" }} />
                </div>
                {/* Top Right */}
                <div className="absolute top-0 right-0">
                    <div style={{ width: cornerSize, borderTop: "2px solid #E84A4A" }} />
                    <div style={{ height: cornerSize, borderRight: "2px solid #E84A4A" }} />
                </div>
                {/* Bottom Left */}
                <div className="absolute bottom-0 left-0">
                    <div style={{ height: cornerSize, borderLeft: "2px solid #E84A4A" }} />
                    <div style={{ width: cornerSize, borderBottom: "2px solid #E84A4A" }} />
                </div>
                {/* Bottom Right */}
                <div className="absolute bottom-0 right-0">
                    <div style={{ height: cornerSize, borderRight: "2px solid #E84A4A" }} />
                    <div style={{ width: cornerSize, borderBottom: "2px solid #E84A4A" }} />
                </div>
            </div>
        </div>
    );
}
