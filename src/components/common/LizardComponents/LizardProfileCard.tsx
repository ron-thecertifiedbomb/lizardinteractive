// components/common/LizardCardStyle.tsx

import {
    LizardCardBorder,
    LizardDiv,

    LizardLogo,

    LizardText,
} from "@/components/common/LizardComponents";

import { HTMLMotionProps } from "framer-motion";

interface LizardCardItem {
    label: string;
    value: string;
    valueClassName?: string;
    labelProps?: React.ComponentProps<typeof LizardText>; // extra props for label
    valueProps?: React.ComponentProps<typeof LizardText>; // extra props for value
}

interface LizardProfileCardProps {
    transition?: string;
    cardPosition?: string;
    animation?: HTMLMotionProps<"div">;
    cardWidth?: string;
    logoFill: string;   
    logoStroke: string;
    logoPadding: string;
    selectedLogo: number;
    logoHeight: string;
    logoWidth: string;
    items: LizardCardItem[];
}

export function LizardProfileCard({
    cardPosition,
    animation,
    cardWidth,
    transition,
    logoFill,
    logoStroke,
    logoHeight,
    logoWidth,
    logoPadding,
    selectedLogo,
    items,
}: LizardProfileCardProps) {
    return (

        <LizardDiv animation={animation} className={`className  ${cardPosition} ${cardWidth} ${transition}`} >

            <LizardCardBorder className="mb-6 sm:mb-8">
                <LizardDiv className={`border w-full justify-center items-center ${logoPadding}`}>
                    <LizardLogo selectedLogo={selectedLogo} logoFill={logoFill} logoStroke={logoStroke} logoHeight={logoHeight} logoWidth={logoWidth} />
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
