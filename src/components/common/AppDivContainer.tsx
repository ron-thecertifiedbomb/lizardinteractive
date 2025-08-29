import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AppDivContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
  mode?: HTMLMotionProps<"div">; // motion props
}

export function AppDivContainer({
  children,
  className,
  fluid = false,
  mode,
  ...props
}: AppDivContainerProps) {
  const DivComponent: any = mode ? motion.div : "div";

  return (
    <DivComponent
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        fluid ? "max-w-full" : "max-w-7xl",
        className
      )}
      {...(mode || {})}
      {...props}
    >
      {children}
    </DivComponent>
  );
}
