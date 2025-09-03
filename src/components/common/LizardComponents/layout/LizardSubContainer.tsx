import React from "react";
import { cn } from "@/lib/utils";
import { LizardDiv } from "./LizardDiv";
import { fadeIn } from "@/lib/motionMode";

interface LizardSubContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LizardSubContainer({ children, className = "" }: LizardSubContainerProps) {
  return (
    <LizardDiv
      animation={fadeIn}
      id="lizard-sub-container"
      className={cn(
        "relative flex flex-col justify-items-start items-start ",
        className
      )}
    >
      {children}
    </LizardDiv>
  );
}
