import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LizardFooter, LizardHeader, LizardMainContainer, LizardProfileCard, LizardSubContainer } from "@/components/common/LizardComponents";
import { LizardSplashScreen } from "../LizardSplashScreen";
import { LizardLoadingBar } from "../LizardLoadingBar";
import { slideUp } from "@/lib/motionMode";
import { useScreenType } from "@/hooks/useScreenType";
import { profile, tools } from "@/config/appData";



export function LizardLayout() {
    const location = useLocation();
    const { isMobile, isDesktop } = useScreenType();

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

    // Show first-time splash
    if (firstLoad) {
        return (
            <LizardSplashScreen
                logoUrl="/assets/splash.png"
                onFinish={() => setFirstLoad(false)}
                duration={5}
            />
        );
    }

    // Show route-change loading
    if (routeLoading) {
        return (
            <LizardLoadingBar
                logoUrl="/assets/lizardinteractive.png"
                text="Loading..."
                duration={1.5}
                onFinish={() => setRouteLoading(false)}
            />
        );
    }

    return (
        <LizardMainContainer className="bg-black">
            <LizardHeader />
            <LizardSubContainer className="flex-1 w-full max-w-[1700px] relative bg-[url('/assets/cover.svg')] bg-center bg-no-repeat  overflow-hidden ">
                <LizardProfileCard
                    screenType={isDesktop}
                    items={profile}
                    logoClassName=" fill-white w-10 md:w-16 lg:w-20 h-auto"
                    className="absolute top-12 transition-transform duration-500 ease-in-out left-[0px]"
                />

                <Outlet />
                <LizardProfileCard
                    screenType={isDesktop}
                    items={tools}
                    logoClassName=" fill-white w-10 md:w-16 lg:w-20 h-auto"
                    className="absolute top-12 transition-transform duration-500 ease-in-out right-[0px]"
                />
                <LizardFooter animation="slideup" footerStyle='absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none' screenType={isMobile} />
            </LizardSubContainer>
        </LizardMainContainer>
    );
}
