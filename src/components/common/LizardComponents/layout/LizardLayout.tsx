import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LizardDiv, LizardHeader, LizardInteractiveNavigationControlSection, LizardInteractivePanel, LizardMainContainer, LizardSubContainer } from "@/components/common/LizardComponents";
import { LizardSplashScreen } from "../LizardSplashScreen";
import { LizardLoadingBar } from "../LizardLoadingBar";
import { slideUp } from "@/lib/motionMode";
import { useScreenType } from "@/hooks/useScreenType";



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
        <LizardMainContainer>
            <LizardHeader />
            <LizardSubContainer className="flex-1 w-full max-w-[1700px] relative ">
                <Outlet />

                {/* Panel wrapper to detect outside clicks */}
                <LizardDiv className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-full">
                    <LizardDiv
                        animation={slideUp}
                        className="relative w-full flex justify-center items-center overflow-hidden pointer-events-auto"
                    >
                        <LizardInteractivePanel cardClassName="w-full max-w-[230px]" />
                    </LizardDiv>

                    {isMobile && (
                        <LizardDiv
                            animation={slideUp}
                            className="flex justify-center w-full pointer-events-auto"
                        >
                            <LizardInteractiveNavigationControlSection />
                        </LizardDiv>
                    )}
                </LizardDiv>
            </LizardSubContainer>
        </LizardMainContainer>
    );
}
