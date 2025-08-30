// AppMainContainer.tsx
import React from "react";


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
