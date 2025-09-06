import { motion, MotionProps, Transition, TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";
import { LizardLogoContainer } from "../LizardLogoContainer";
import { LizardDiv } from "./LizardDiv";
import { fadeIn } from "@/lib/motionMode";

interface LizardAnimatedBackgroundProps extends Omit<MotionProps, "animate" | "transition"> {
    className?: string;
    pulse?: boolean;
    svg?: React.FC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    logoFill?: string;
    logoStroke?: string;
    logoPadding?: string;
    thumbNailHeight?: string;
    thumbNailWidth?: string;
    animate?: TargetAndTransition; // Framer Motion animate prop type
    transition?: Transition;       // Framer Motion transition type
}

export function LizardAnimatedBackground({
    className,
    logoFill,
    logoStroke,
    thumbNailHeight,
    thumbNailWidth,
    pulse = true,
    svg: SvgIcon,
    onClick,
    animate,
    transition,
    ...rest
}: LizardAnimatedBackgroundProps) {
    const defaultAnimation: TargetAndTransition = pulse
        ? {
            filter: [
                "drop-shadow(0 0 5px rgba(255,255,255,0.6))",
                "drop-shadow(0 0 20px rgba(255,255,255,0.9))",
                "drop-shadow(0 0 5px rgba(255,255,255,0.6))",
            ],
        }
        : {};

    const defaultTransition: Transition = { repeat: Infinity, duration: 3, ease: "easeInOut" };

    return (
        <LizardDiv animate={fadeIn}>
        <motion.div
            className={cn("overflow-hidden", className)}
            animate={animate || defaultAnimation}
            transition={transition || defaultTransition}
            {...rest}
        >
            {SvgIcon && (
                <LizardLogoContainer
                    onClick={onClick}
                    svg={SvgIcon}
                    logoFill={logoFill}
                    logoStroke={logoStroke}
                    logoHeight={thumbNailHeight}
                    logoWidth={thumbNailWidth}
                />
            )}
            </motion.div>
        </LizardDiv>
    );
}
