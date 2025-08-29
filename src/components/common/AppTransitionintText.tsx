import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContentContainer } from "../layout/AppContentContainer";
import { AppLabel } from "@/components/common";
export type TransitioningTextItem = {
  id: number | string;
  title?: ReactNode;
  description?: ReactNode;
};

export type AppTransitioningTextProps = {
  items: TransitioningTextItem[];
  interval?: number;
  transitionDuration?: number;
  className?: string;
};

export function AppTransitioningText({
  items,
  interval = 5000,
  transitionDuration = 1.5,
  className = "",
}: AppTransitioningTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(id);
  }, [items, interval]);

  if (!items || items.length === 0) return null; // ❌ Prevents rendering if no items

  const currentItem = items[currentIndex];

  return (
    <AppContentContainer
      className={`
        relative
        inline-block
        p-10
        rounded-3xl
        bg-white/5 dark:bg-black/5
        shadow-2xl shadow-black/60
        text-center
        ${className}
      `}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          className="flex flex-col items-center justify-center relative z-10"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: transitionDuration }}
        >
          {currentItem.title && (
            <AppLabel
              variant="h1"
              className={`
    leading-tight
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-[var(--primary)] via-[var(--secondary)] to-[var(--muted)]
    dark:from-white dark:via-gray-300 dark:to-gray-500
    font-extrabold tracking-tight drop-shadow-lg
  `}
            >
              {currentItem.title}
            </AppLabel>
          )}
          {currentItem.description && (
            <AppLabel
              variant="p"
              className="text-[var(--foreground)]/80 dark:text-gray-100/80 font-medium drop-shadow-md"
            >
              {currentItem.description}
            </AppLabel>
          )}
        </motion.div>
      </AnimatePresence>
    </AppContentContainer>
  );
}
