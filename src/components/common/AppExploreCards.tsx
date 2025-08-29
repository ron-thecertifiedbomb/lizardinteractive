import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AppLabel, AppImage } from "@/components/common";

export interface AppExploreCardsProps {
  id: string | number;
  imgUrl: string;
  title: string;
  description: string;
  index: number;
  active: string | number | null;
  handleClick: (id: string | number) => void;
}

export function AppExploreCards({
  id,
  imgUrl,
  title,
  index,
  active,
  description,
  handleClick,
}: AppExploreCardsProps) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileTablet = windowWidth < 1024;
  const isActive = active === id;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      layout
      animate={{
        flex: windowWidth >= 1024 ? (isActive ? 4.2 : 1) : isActive ? 3 : 0.5,
        height: windowWidth >= 1024 ? 450 : isActive ? 300 : 120,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[160px] cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <div className="relative w-full h-full rounded-[17px] overflow-hidden">
        <AppImage
          objectFit="cover"
          src={imgUrl}
          alt={title}
          className={`w-full h-full transition-transform duration-300 ${
            !isActive && isMobileTablet ? "scale-90" : "scale-100"
          }`}
        />
        {!isActive && isMobileTablet && (
          <div
            className="absolute top-0 left-0 w-full h-full rounded-[17px]"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          />
        )}
      </div>

      {isActive && (
        <div className="absolute bottom-0 w-full p-4 sm:p-8 lg:p-10 flex flex-col justify-start bg-black/90 rounded-b-[12px]">
          <AppLabel
            variant="h3"
            className="font-bold leading-5 tracking-wide lg:leading-8 mb-2 sm:mb-4 lg:mb-6"
          >
            {title}
          </AppLabel>
          <AppLabel variant="p" className="font-light tracking-wide leading-4">
            {description}
          </AppLabel>
        </div>
      )}

      {!isActive && isMobileTablet && (
        <AppLabel
          variant="p"
          className="absolute z-10 text-white text-[14px] sm:text-[16px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          click to view
        </AppLabel>
      )}
    </motion.div>
  );
}
