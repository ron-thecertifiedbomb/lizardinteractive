import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LizardProfileCard, } from "@/components/common/LizardComponents";
import { LizardSplashScreen } from "../LizardSplashScreen";
import { LizardLoadingBar } from "../LizardLoadingBar";
import { slideLeft, slideRight, slideUp } from "@/lib/motionMode";
import { useScreenType } from "@/hooks/useScreenType";
import { profile, tools } from "@/config/appData";
import { LizardMainContainer } from "./LizardMainContainer";
import { LizardHeader } from "./LizardHeader";
import { LizardSubContainer } from "./LizardSubContainer";
import { LizardFooter } from "./LizardFooter";
import { Center, Cover, Lizard, LizardTitle } from "@/components/icons";
import { useControlPanelStore } from "@/store/ControlPanelStore";


export function LizardLayout() {
    const location = useLocation();
    const { isMobile } = useScreenType();

    // // First-time splash screen
    // const [firstLoad, setFirstLoad] = useState(() => {
    //     const splashShown = sessionStorage.getItem("splashShown");
    //     return splashShown ? false : true;
    // });

    // // Route-change loading screen
    // const [routeLoading, setRouteLoading] = useState(false);

    // // Handle first-time splash
    // useEffect(() => {
    //     if (firstLoad) {
    //         sessionStorage.setItem("splashShown", "true");
    //         const timer = setTimeout(() => setFirstLoad(false), 10000); // 10s splash
    //         return () => clearTimeout(timer);
    //     }
    // }, [firstLoad]);

    // // Handle route-change loading (after first splash)
    // useEffect(() => {
    //     if (!firstLoad) {
    //         setRouteLoading(true);
    //         const timer = setTimeout(() => setRouteLoading(false), 2000); // 2s loading
    //         return () => clearTimeout(timer);
    //     }
    // }, [location.pathname, firstLoad]);

    // // Show first-time splash
    // if (firstLoad) {
    //     return (
    //         <LizardSplashScreen
    //             logoUrl="/assets/splash.png"
    //             onFinish={() => setFirstLoad(false)}
    //             duration={5}
    //         />
    //     );
    // }

    // // Show route-change loading
    // if (routeLoading) {
    //     return (
    //         <LizardLoadingBar
    //             logoUrl="/assets/lizardinteractive.png"
    //             text="Loading..."
    //             duration={1.5}
    //             onFinish={() => setRouteLoading(false)}
    //         />
    //     );
    // }


    const { showRightPanel, showLeftPanel } = useControlPanelStore()
    return (
        <LizardMainContainer className="bg-black justify-center items-center">
            <LizardHeader />
            <LizardSubContainer className="flex flex-1 w-full  max-w-[1380px] relative overflow-hidden">
                <LizardProfileCard
                    cardPosition={`
       absolute top-14 left-4 z-50 top-14 left-4
    transition-transform duration-900 ease-in-out
    ${showRightPanel ? "translate-x-0" : "-translate-x-[210px]"}
  `}
                    animation={slideRight}
                    thumbNailBg={Center}
                    svg={LizardTitle}
                    items={profile}
                    logoFill="fill-none"
                    logoPadding=""
                    logoHeight="h-20"
                    logoWidth="w-20"
                    logoStroke="stroke-[#00ff88] stroke-4"
                    cardWidth="w-40"
                /> 
                <Outlet />
                 <LizardProfileCard
                    cardPosition={`
    absolute top-14 right-4
    transition-transform duration-900 ease-in-out
    ${showLeftPanel ? "translate-x-0" : "translate-x-[210px]"}
  `}
                    animation={slideRight}
                    svg={LizardTitle}
                    items={profile}
                    logoFill="fill-none"
                    logoPadding=""
                    logoHeight="h-20"
                    logoWidth="w-20"
                    logoStroke="stroke-[#00ff88] stroke-4"
                    cardWidth="w-40"
                /> 
                <LizardFooter animation={slideUp} footerStyle='absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none' />
            </LizardSubContainer>
        </LizardMainContainer>
    );
}
