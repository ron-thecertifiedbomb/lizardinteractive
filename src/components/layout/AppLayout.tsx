import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import {
  AppLoadingBar,
  AppSplashScreen,
} from "@/components/common";
import { LizardHeader, LizardInteractiveNavigationControlSection, LizardInteractivePanel, LizardMainContainer, LizardSubContainer } from "@/components/common/LizardComponents";

import { useNavigationStore } from "@/store";

export function AppLayout() {
  const location = useLocation();
  const { showPanel, setShowPanel } = useNavigationStore();
  const panelWrapperRef = useRef<HTMLDivElement>(null);

  // First-time splash screen
  const [firstLoad, setFirstLoad] = useState(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    return splashShown ? false : true;
  });

  // Route-change loading screen
  const [routeLoading, setRouteLoading] = useState(false);

  // Handle first-time splash
  useEffect(() => {
    if (firstLoad) {
      sessionStorage.setItem("splashShown", "true");
      const timer = setTimeout(() => setFirstLoad(false), 10000); // 10s splash
      return () => clearTimeout(timer);
    }
  }, [firstLoad]);

  // Handle route-change loading (after first splash)
  useEffect(() => {
    if (!firstLoad) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 2000); // 2s loading
      return () => clearTimeout(timer);
    }
  }, [location.pathname, firstLoad]);

  // Outside click to close panel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelWrapperRef.current && !panelWrapperRef.current.contains(event.target as Node)) {
        setShowPanel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPanel]);

  // Show first-time splash
  if (firstLoad) {
    return (
      <AppSplashScreen
        logoUrl="/assets/splash.png"
        onFinish={() => setFirstLoad(false)}
        duration={5}
      />
    );
  }

  // Show route-change loading
  if (routeLoading) {
    return (
      <AppLoadingBar
        logoUrl="/assets/lizardinteractive.png"
        text="Loading..."
        duration={1.5}
        onFinish={() => setRouteLoading(false)}
      />
    );
  }

  return (
    <LizardMainContainer>
      <LizardHeader />
      <LizardSubContainer className="flex-1 w-full max-w-[1700px]">
      <Outlet />

      {/* Panel wrapper to detect outside clicks */}
      <div ref={panelWrapperRef} className="relative w-full flex justify-center items-center ">
          <LizardInteractivePanel cardClassName="w-full max-w-[300px] " />
        <LizardInteractiveNavigationControlSection />
        </div>
      </LizardSubContainer>
    </LizardMainContainer>
  );
}
