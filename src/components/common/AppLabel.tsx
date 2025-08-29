import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React from "react";

type LabelVariant = "h1" | "h2" | "h3" | "h4" | "p";

interface AppLabelProps {
  variant?: LabelVariant;
  children: React.ReactNode;
  className?: string;
  mode?: MotionProps; // motion props like initial, animate, transition
  // HTML props for normal usage
  [key: string]: any;
}

export function AppLabel({
  variant = "p",
  className,
  children,
  mode,
  ...props
}: AppLabelProps) {
  const Component =
    variant === "h1"
      ? "h1"
      : variant === "h2"
      ? "h2"
      : variant === "h3"
      ? "h3"
      : variant === "h4"
      ? "h4"
      : "p";

  const baseStyles: Record<LabelVariant, string> = {
    h1: "text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance",
    h2: "text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tight",
    h3: "text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold",
    h4: "text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight",
    p: "text-sm sm:text-base md:text-m leading-7",
  };

  if (mode) {

    const MotionComponent = motion(Component);
    return (
      <MotionComponent
        className={cn(baseStyles[variant], className)}
        {...mode}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }


  return (
    <Component className={cn(baseStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
}
