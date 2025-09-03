import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LizardAnimatedBackgroundProps {
    className?: string;
    pulse?: boolean;
    svg?: React.FC<React.SVGProps<SVGSVGElement>>; // optional SVG
    onClick?: () => void; // ✅ added safely
}

export function LizardAnimatedBackground({
    className,
    pulse = true,
    svg: SvgIcon,
    onClick,
}: LizardAnimatedBackgroundProps) {
    return (
        <motion.div
            className={cn("overflow-hidden", className)}
            animate={
                pulse
                    ? {
                        filter: [
                            "drop-shadow(0 0 5px rgba(255,255,255,0.6))",
                            "drop-shadow(0 0 20px rgba(255,255,255,0.9))",
                            "drop-shadow(0 0 5px rgba(255,255,255,0.6))",
                        ],
                    }
                    : {}
            }
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
            {SvgIcon && (
                <SvgIcon
                    onClick={onClick}
                    className={cn("w-full h-full cursor-pointer", className)}
                />
            )}
        </motion.div>
    );
}
