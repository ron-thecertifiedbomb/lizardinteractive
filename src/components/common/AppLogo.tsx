import { cn } from "@/lib/utils";
import { AppImage } from "@/components/common";
import { Link } from "react-router-dom";

interface AppLogoProps {
  logoUrl: string | null;
  className?: string;
}

export function AppLogo({ logoUrl, className }: AppLogoProps) {
  return (
    <div className={cn("h-12 w-12", className)}>
      <Link to="/" className="inline-flex">
        {logoUrl ? (
          <AppImage src={logoUrl} alt="logo" className="object-contain" />
        ) : (
          <span className="text-lg font-bold">RS</span>
        )}
      </Link>
    </div>
  );
}
