// AppMainContainer.tsx
import React from "react";
import { cn } from "@/lib/utils"; // optional, if you have a classnames helper

interface AppMainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function AppMainContainer({
  children,
  className = "",
}: AppMainContainerProps) {
  return (
    <main
      id="app-main-container"
      className={`h-screen w-full overflow-y-auto flex flex-col items-center justify-start scroll-smooth ${className}`}
    >
      {children}
    </main>
  );
}
