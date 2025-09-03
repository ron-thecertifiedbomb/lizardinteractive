// components/common/LizardCardStyle.tsx
import {
    LizardEmblem,
    LizardItemsList,
    LizardText,

} from "@/components/common/LizardComponents";
import { HTMLMotionProps } from "framer-motion";
import { LizardDiv } from "./layout";

interface LizardCardItem {
    label: string;
    value: string;
    labelProps?: React.ComponentProps<typeof LizardText>;
    valueProps?: React.ComponentProps<typeof LizardText>;
}

interface LizardProfileCardProps {
    svg?: React.FC<React.SVGProps<SVGSVGElement>>;
    thumbNailBg?: React.FC<React.SVGProps<SVGSVGElement>>; // optional background
    transition?: string;
    cardPosition?: string;
    animation?: HTMLMotionProps<"div">;
    cardWidth?: string;
    logoFill?: string;
    logoStroke?: string;
    logoPadding?: string;
    logoHeight?: string;
    logoWidth?: string;
    items: LizardCardItem[];
}

export function LizardProfileCard({
    svg,
    thumbNailBg,
    cardPosition = "",
    animation,
    cardWidth = "",
    transition = "",
    logoFill,
    logoStroke,
    logoHeight,
    logoWidth,
    logoPadding,
    items,
}: LizardProfileCardProps) {
    return (
        <LizardDiv
            animation={animation}
            className={`${cardPosition} ${cardWidth} ${transition}`}
        >
            <LizardEmblem
                thumbNailBg={thumbNailBg}
                svg={svg}
                logoFill={logoFill}
                logoStroke={logoStroke}
                logoHeight={logoHeight}
                logoWidth={logoWidth}
                logoPadding={logoPadding}
                borderColor="#00ff88"
                borderStyle="solid"
                topLeftHLength="40px"
                topLeftVLength="20px"
                topRightHLength="40px"
                topRightVLength="20px"
                bottomRightHLength="40px"
                bottomRightVLength="20px"
                bottomLeftHLength="40px"
                bottomLeftVLength="20px"
            />

            <LizardItemsList items={items} />
        </LizardDiv>
    );
}
