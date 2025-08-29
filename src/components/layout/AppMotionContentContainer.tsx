import { ReactNode, CSSProperties } from "react";
import {
  motion,
  TargetAndTransition,
  VariantLabels,
  Transition,
  Variants,
} from "framer-motion";

interface AppMotionContentContainerProps {
  children: ReactNode;
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  transition?: Transition;
  style?: CSSProperties;
  variants?: Variants;
  custom?: number;
}

export function AppMotionContentContainer({
  children,
  className = "",
  initial = { opacity: 0, scale: 0.95 },
  animate = { opacity: 1, scale: 1 },
  transition = { duration: 0.8, ease: "easeOut" },
  style,
  variants,
  custom,
}: AppMotionContentContainerProps) {
  return (
    <motion.section
      className= {className}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
      custom={custom}
      style={style}
    >
      {children}
    </motion.section>
  );
}
