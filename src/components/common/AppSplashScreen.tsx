import { useEffect } from "react";
import { motion } from "framer-motion";
import { AppImage, AppLabel } from "@/components/common";

interface AppSplashScreenProps {
  logoUrl?: string;
  text?: string;
  className?: string;
  onFinish?: () => void;
  duration?: number; // optional, default 10s
}

export function AppSplashScreen({
  logoUrl,
  text = "",
  className = "",
  onFinish,
  duration = 10, // default 10 seconds
}: AppSplashScreenProps) {
  useEffect(() => {
    if (onFinish) {
      const timer = setTimeout(() => {
        onFinish();
      }, duration * 1000); // convert seconds to ms
      return () => clearTimeout(timer);
    }
  }, [onFinish, duration]);

  return (
    <div
      className={`h-screen w-screen flex items-center justify-center ${className}`}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        {logoUrl && (
          <AppImage
            src={logoUrl}
            alt="logo"
            className="w-15 max-w-[40vw] sm:w-18 sm:max-w-[25vw] h-auto object-contain"
          />
        )}
        <AppLabel variant="h2">{text}</AppLabel>
      </motion.div>
    </div>
  );
}
