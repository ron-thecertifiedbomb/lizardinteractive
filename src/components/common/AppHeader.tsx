// AppHeader.tsx
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AppLogo, AppSidebar } from "@/components/common";
import { useFetchLogo } from "@/hooks/fetchLogo";

export function AppHeader() {
  const logoUrl = useFetchLogo("portfolio-assets", "logoRound.png");
  const finalLogo = logoUrl ?? "/avatars/logoRound.png";

  const [visible, setVisible] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setVisible(true), 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <motion.div
      id="app-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 w-full z-50 flex justify-center"
    >
      <motion.header
       
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{
          backgroundColor: visible ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
        }}
        className="rounded-b-lg flex items-center justify-between h-16 max-w-7xl w-full border-b-2 border-white/30 dark:border-neutral-500/30 px-4 sm:px-6 lg:px-8"
      >
        <AppLogo logoUrl={finalLogo} />
        <div className="flex items-center justify-center">
          <AppSidebar />
        </div>
      </motion.header>
    </motion.div>
  );
}
