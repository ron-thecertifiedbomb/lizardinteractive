// src/components/app-tint.tsx
type AppTintProps = {
  className?: string;
};

export function AppTint({ className = "" }: AppTintProps) {
  return <div className={`absolute inset-0 ${className}`} />;
}
