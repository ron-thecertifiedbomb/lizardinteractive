// components/common/LizardCardStyle.tsx

import { LizardCardBorder, LizardDiv, LizardLogo, LizardText } from "@/components/common/LizardComponents";
import { slideRight } from "@/lib/motionMode";

interface LizardCardItem {
    label: string;
    value: string;
    valueClassName?: string;
    labelProps?: React.ComponentProps<typeof LizardText>; // extra props for label
    valueProps?: React.ComponentProps<typeof LizardText>; // extra props for value
}
interface LizardProfileCardProps {
    className?: string;
    logoClassName?: string;
    items: LizardCardItem[];
}

export function LizardProfileCard({ className, logoClassName, items }: LizardProfileCardProps) {
    return (

        <LizardDiv direction="column" animation={slideRight} className={`${className}`}>
            {/* Logo inside border */}
            <LizardCardBorder className="mb-6 sm:mb-8">
                <div className="border w-full flex items-center justify-center p-2 lg:p-4">
                    <LizardLogo
                        className={logoClassName }
                    />
                </div>
            </LizardCardBorder>

            {items.map((item, index) => (
                <div key={index} className="mb-2 sm:mb-3">
                    <LizardText
                        variant="h1"
                        className={`text-[12px] sm:text-[14px] lg:text-[16px] uppercase  w-full mb-1 ${item.labelProps?.className || ""}`}
                        {...item.labelProps}
                    >
                        {item.label}
                    </LizardText>
                    <LizardText
                        variant="p"
                        {...item.valueProps}
                        className={`text-[12px] sm:text-[14px] md:text-[16px] uppercase text-[#E84A4A] w-full leading-none ${item.valueProps?.className || ""}`}
                    >
                        {item.value}
                    </LizardText>
                </div>
            ))}
        </LizardDiv>
    );
}
