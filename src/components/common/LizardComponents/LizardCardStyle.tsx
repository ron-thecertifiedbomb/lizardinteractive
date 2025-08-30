// components/common/LizardCardStyle.tsx
import { LizardLogo } from "@/components/common";
import { LizardCardBorder, LizardText } from "@/components/common/LizardComponents";

interface LizardCardItem {
    label: string;
    value: string;
    valueClassName?: string;
    labelProps?: React.ComponentProps<typeof LizardText>; // extra props for label
    valueProps?: React.ComponentProps<typeof LizardText>; // extra props for value
}
interface LizardCardStyleProps {
    className?: string;
    logoClassName?: string;
    items: LizardCardItem[];
}

export function LizardCardStyle({ className, logoClassName, items }: LizardCardStyleProps) {
    return (

        <div className={`flex flex-col  ${className}`}>
            {/* Logo inside border */}
            <LizardCardBorder className="mb-6 sm:mb-8">
                <div className="border w-full flex items-center justify-center p-2 sm:p-4">
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
        </div>
    );
}
