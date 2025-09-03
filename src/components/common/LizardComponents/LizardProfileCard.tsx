// components/common/LizardCardStyle.tsx
import {
    LizardCardBorder,
    LizardLogoContainer,
    LizardText,
} from "@/components/common/LizardComponents";
import { HTMLMotionProps } from "framer-motion";
import { LizardDiv } from "./layout";


interface LizardCardItem {
    label: string;
    value: string;
    valueClassName?: string;
    labelProps?: React.ComponentProps<typeof LizardText>;
    valueProps?: React.ComponentProps<typeof LizardText>;
}

interface LizardProfileCardProps {
    svg?: React.FC<React.SVGProps<SVGSVGElement>>;
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
    cardPosition,
    animation,
    cardWidth,
    transition,
    logoFill,
    logoStroke,
    logoHeight,
    logoWidth,
    logoPadding,
    items,
}: LizardProfileCardProps) {
    return (

        <LizardDiv animation={animation} className={`className  ${cardPosition} ${cardWidth} ${transition}`} >
            <LizardCardBorder
                borderColor="#00ff88"
                borderStyle="solid"
                topLeftHLength="40px"
                topLeftVLength="20px"
                topRightHLength="40px"
                topRightVLength="20px"
                bottomRightHLength="40px"
                bottomRightVLength="20px"
                bottomLeftHLength="40px"
                bottomLeftVLength="20px">
                <LizardDiv className={`border w-full justify-center items-center ${logoPadding}`}>
                    <LizardLogoContainer svg={svg} logoFill={logoFill} logoStroke={logoStroke} logoHeight={logoHeight} logoWidth={logoWidth} />
                </LizardDiv>
            </LizardCardBorder>

            {items.map((item, index) => (
                <LizardDiv key={index} className="mb-2 sm:mb-3">
                    <LizardText
                        variant="h1"
                        className={`text-[12px] sm:text-[14px] lg:text-[16px] uppercase w-full mb-1 ${item.labelProps?.className || ""
                            }`}
                        {...item.labelProps}
                    >
                        {item.label}
                    </LizardText>
                    <LizardText
                        variant="p"
                        className={`text-[12px] sm:text-[14px] md:text-[16px] uppercase text-[#E84A4A] w-full leading-none ${item.valueProps?.className || ""
                            }`}
                        {...item.valueProps}
                    >
                        {item.value}
                    </LizardText>
                </LizardDiv>
            ))}
        </LizardDiv>


    );
}
