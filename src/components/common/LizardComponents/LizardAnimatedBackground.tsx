import { motion } from "framer-motion";
// import { Cover } from "."; // Your inline SVG component
import { cn } from "@/lib/utils";

interface LizardAnimatedBackgroundProps {
    className?: string;
    pulse?: boolean;
}

export function LizardAnimatedBackground({
    className,
    pulse = true,
}: LizardAnimatedBackgroundProps) {
    return (
        <motion.div
            className={cn("overflow-hidden", className)} // 👈 fixed height
            animate={
                pulse
                    ? {
                        filter: [
                            "drop-shadow(0 0 5px #00fff7)",
                            "drop-shadow(0 0 20px #ff00f7)",
                            "drop-shadow(0 0 5px #00fff7)",
                        ],
                    }
                    : {}
            }
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
            {/* <Cover className="w-full h-[800px]" /> */}
        </motion.div>

    );
}
