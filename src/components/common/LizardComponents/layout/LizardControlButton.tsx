import { LizardLogoContainer } from "@/components/common/LizardComponents";
import { bounceIn } from "@/lib/motionMode";
import { Lizard, LizardTitle } from "@/components/icons";
import { LizardDiv } from "./LizardDiv";
import { useControlPanelStore } from "@/store/ControlPanelStore";
import { useNavigationStore } from "@/store";

export function LizardControlButton() {
    const {
        hideControlPanelButton,
        showHeaderPanel,
        setShowHeaderPanel,
        showLeftPanel,
        showRightPanel,
        setHideControlPanelButton,
        setShowRightPanel,
        setShowLeftPanel,
    } = useControlPanelStore();

    const { showPanel, setShowPanel, section } = useNavigationStore();

    if (section) {
        return null;
    }

    return (
        <LizardDiv
            animation={bounceIn}
            className="flex flex-col flex-1 w-full items-center justify-center lg:px-10 bg-transparent"
        >
            <LizardDiv
                onClick={() => {
                    setShowHeaderPanel(!showHeaderPanel)
                    setHideControlPanelButton(!hideControlPanelButton);
                    setShowRightPanel(!showRightPanel);
                    setShowLeftPanel(!showLeftPanel);
                    setShowPanel(!showPanel);
                }}
                className="cursor-pointer relative flex items-center justify-center"
            >
                {/* Lizard icon */}
                <LizardLogoContainer
                    svg={Lizard}
                    logoStroke="stroke-[#2aff2aff] stroke-[5]"
                    logoHeight="h-[100px]"
                    logoWidth="w-[100px]"
                    logoFill="fill-[#ffffff]"
                    className={`drop-shadow-[0_0_8px_rgba(255,255,255,3)] opacity-60 hover:drop-shadow-[0_0_10px_#ffffff]
    transition-[max-height,transform,opacity] duration-150 ease-in-out overflow-hidden
    ${hideControlPanelButton
                            ? "max-h-20 scale-100 opacity-100"
                            : "max-h-0 scale-0 opacity-0"
                        }`}
                />



                {/* LizardTitle icon */}
                <LizardLogoContainer
                    svg={LizardTitle}
                    logoStroke="stroke-[#ffffff] stroke-[3]"
                    logoWidth="w-60"
                    logoFill="fill-white"
                    className={`absolute drop-shadow-[0_0_10px_#00ff88] hover:drop-shadow-[0_0_10px_#00ff88]
            transition-[max-height,transform,opacity] duration-900 ease-in-out overflow-hidden
            ${hideControlPanelButton
                            ? "max-h-0 scale-0 opacity-0"
                            : "max-h-20 scale-100 opacity-100"
                        }`}
                />
            </LizardDiv>
        </LizardDiv>
    );
}
