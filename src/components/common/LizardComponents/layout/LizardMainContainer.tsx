import React from "react";
import { cn } from "@/lib/utils";




interface LizardMainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LizardMainContainer({ children, className = "" }: LizardMainContainerProps) {


  return (
    <main
      id="lizard-main-container"
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto scroll-smooth",
        className
      )}
    >
   

      {children}
    </main>
  );
}
