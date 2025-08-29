import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AppSectionContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // basic HTML attributes
  id?: string;
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
  mode?: HTMLMotionProps<"section">; // motion props
}

export function AppSectionContainer({
  id,
  children,
  className,
  fluid = false,
  mode,
  ...props
}: AppSectionContainerProps) {
  // Use motion.section only if mode exists
  const SectionComponent: any = mode ? motion.section : "section";

  return (
    <SectionComponent
      id={id}
      className={cn(
        "w-full mx-auto ",
        fluid ? "max-w-full" : "max-w-7xl",
        className
      )}
      {...(mode || {})} // motion props
      {...props} // other HTML props
    >
      {children}
    </SectionComponent>
  );
}
