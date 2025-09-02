import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LizardProfileCard, } from "@/components/common/LizardComponents";
import { LizardSplashScreen } from "../LizardSplashScreen";
import { LizardLoadingBar } from "../LizardLoadingBar";
import { slideLeft, slideRight, slideUp } from "@/lib/motionMode";
import { useScreenType } from "@/hooks/useScreenType";
import { profile, tools } from "@/config/appData";
import { LizardMainContainer } from "./LizardMainContainer";
import { LizardHeader } from "../LizardHeader";
import { LizardSubContainer } from "./LizardSubContainer";
import { LizardFooter } from "../LizardFooter";
import { Lizard, LizardTitle } from "@/components/icons";


export function LizardLayout() {
    const location = useLocation();
    const { isMobile } = useScreenType();

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
            <LizardSubContainer className="flex-1 w-full max-w-[1380px] relative overflow-hidden  ">
                <LizardProfileCard
                    cardPosition={'absolute top-14 left-[12px]'}
                    animation={slideRight}
                    svg={LizardTitle}
                    items={profile}
                    logoFill="fill-none"
                    logoPadding=""
                    logoHeight="h-30"
                    logoWidth="w-40"
                    logoStroke=" stroke-[#E84A4A] stroke-[3]"
                    cardWidth="w-40"
                    transition='duration-500 ease-in-out '
                />
                <Outlet />
                {/* <LizardProfileCard
                    animation={slideLeft}
                    selectedLogo={5}
                    items={tools}
                    logoFill=" fill-none"
                    logoPadding="p-1"
                    logoHeight="h-30"
                    logoWidth="w-30"
                    cardPosition={'absolute top-14 right-[-170px]'}
                    logoStroke=" stroke-[#E84A4A]  stroke-[0.3]"
                    cardWidth="w-40"
                    transition='duration-500 ease-in-out '
                /> */}
                <LizardFooter animation={slideUp} footerStyle='absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none' screenType={isMobile} />
            </LizardSubContainer>
        </LizardMainContainer>
    );
}
