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
                    logoFill="#fafaf9"
                    logoStroke="#00FF88"
                    logoHeight="50"
                    logoWidth="50"
                    className={`
    drop-shadow-[0_0_8px_rgba(255,255,255,3)] opacity-60 hover:drop-shadow-[0_0_10px_#ffffff]
    origin-center
    transition-gradual delay-300
    ${hideControlPanelButton
                            ? "scale-150 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                />

                {/* LizardTitle icon */}
                <LizardLogoContainer
                    svg={LizardTitle}
                    logoStroke="#00FF88"
                    logoHeight="200"
                    logoWidth="200"
                    className={`
    absolute drop-shadow-[0_0_10px_#00ff88] hover:drop-shadow-[0_0_10px_#00ff88]
    origin-center
    transition-[opacity,transform] duration-700 ease-in-out delay-400
    ${hideControlPanelButton
                            ? "scale-0 opacity-0"
                            : "scale-100 opacity-100"
                        }`}
                />

            </LizardDiv>
        </LizardDiv>
    );
}
