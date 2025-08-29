import { useEffect } from "react";

export function useScrollToHeroOnLoad() {
  useEffect(() => {
    const container = document.getElementById("app-main-container");
    const header = document.getElementById("app-header");
    const target = document.getElementById("hero");

    // Guard: stop if any element is missing
    if (!container || !target) return;

    const headerHeight = header?.offsetHeight ?? 0;
    const targetPosition = target.offsetTop - headerHeight;

    const start = container.scrollTop;
    const distance = targetPosition - start;
    const duration = 600; // in ms
    let startTime: number | null = null;

    function animate(time: number) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOut quadratic
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      container!.scrollTop = start + distance * ease;

      if (elapsed < duration) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);
}
