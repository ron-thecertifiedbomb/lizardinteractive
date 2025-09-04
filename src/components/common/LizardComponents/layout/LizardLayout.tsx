import { profile} from "@/config/appData";
import { LizardMainContainer } from "./LizardMainContainer";
import { LizardHeader } from "./LizardHeader";
import { LizardSubContainer } from "./LizardSubContainer";
import { LizardFooter } from "./LizardFooter";
import { Center,  LizardTitle } from "@/components/icons";
import { useControlPanelStore } from "@/store/ControlPanelStore";
import { LizardProfileCard } from "../LizardProfileCard";
import { slideRight, slideUp } from "@/lib/motionMode";
import { Outlet } from "react-router-dom";


export function LizardLayout() {

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
