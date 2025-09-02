
import { slideUp } from "@/lib/motionMode";

import { LizardInteractivePanel } from "./LizardInteractivePanel";
import { LizardDiv } from "./layout/LizardDiv";
import { LizardInteractiveNavigationControlSection } from "./LizardInteractiveNavigationControlSection";
import { HTMLMotionProps } from "framer-motion";


type LizardFooterProps = {
    screenType: boolean
    footerStyle: string
    animation?: HTMLMotionProps<"div">;
}



export function LizardFooter({ screenType, footerStyle, animation }: LizardFooterProps) {
    return (


        <LizardDiv className={`w-full ${footerStyle} `}>
            <LizardDiv
                animation={animation}
                className="relative w-full flex justify-center items-center overflow-hidden pointer-events-auto"
            >
                <LizardInteractivePanel cardClassName="w-full max-w-[230px]" />
            </LizardDiv>

            {screenType && (
                <LizardDiv
                    animation={animation}
                    className="flex justify-center w-full pointer-events-auto"
                >
                    <LizardInteractiveNavigationControlSection />
                </LizardDiv>
            )}
        </LizardDiv>

    );
}
