// src/components/app-dynamicicon.tsx
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

type Props = {
  name: keyof typeof Icons; // ensure the name exists in Icons
  className?: string;
};

export function AppIcon({ name, className }: Props) {
  const IconComponent = Icons[name] as unknown as LucideIcon | undefined;

  return IconComponent ? (
    <IconComponent className={className ?? "size-4"} />
  ) : null;
}
