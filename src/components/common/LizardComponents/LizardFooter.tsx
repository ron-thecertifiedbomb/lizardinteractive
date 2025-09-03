
import { LizardInteractivePanel } from "./LizardInteractivePanel";
import { LizardDiv } from "./layout/LizardDiv";
import { LizardInteractiveNavigationControlSection } from "./LizardInteractiveNavigationControlSection";
import { HTMLMotionProps } from "framer-motion";

type LizardFooterProps = {
    footerStyle: string
    animation?: HTMLMotionProps<"div">;
}

export function LizardFooter({ footerStyle, animation }: LizardFooterProps) {
    return (
        <LizardDiv className={`w-full ${footerStyle} `}>
            <LizardDiv
                animation={animation}
                className="relative w-full flex justify-center items-center overflow-hidden pointer-events-auto"
            >
                <LizardInteractivePanel cardClassName="w-full max-w-[230px]" />
            </LizardDiv>
            <LizardDiv
                animation={animation}
                className="flex justify-center w-full pointer-events-auto"
            >
                <LizardInteractiveNavigationControlSection />
            </LizardDiv>

        </LizardDiv>

    );
}
