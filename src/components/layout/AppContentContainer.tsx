import { cn } from "@/lib/utils";

interface AppContentContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function AppContentContainer({
  children,
  id,
  className,
}: AppContentContainerProps) {
  return (
    <div id={id} className={cn("px-1 sm:px-1", className)}>
      {children}
    </div>
  );
}
