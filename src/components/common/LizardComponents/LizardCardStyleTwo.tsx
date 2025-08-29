import { LizardImage, LizardText } from "@/components/common/LizardComponents";
import { appData } from "@/config/appData";
import { useNavigationStore } from "@/store";

type DisabledItem = {
    label: string;
    value: string;
    valueClassName?: string;
};

type LizardInteractivePanelProps = {
    disabled?: boolean;
    items?: DisabledItem[];
};

export function LizardInteractivePanel({ disabled = false, items = [] }: LizardInteractivePanelProps) {
    const { setCurrentScreen, activePanel, setActivePanel, showPanel, setShowPanel } =
        useNavigationStore();

    return (
        <div className="fixed bottom-17 overflow-hidden flex justify-center">
            <div
                className={`inline-flex justify-center gap-4 transition-transform duration-500 ease-in-out
        ${showPanel ? "translate-y-0" : "translate-y-full pointer-events-none"}
        ${disabled ? "opacity-50" : ""}
      `}
            >
                {appData.navigationPanels.map((panel) => {
                    const isActive = activePanel === panel.key;

                    return (
                        <div
                            key={panel.key}
                            className={`box-content rounded-sm w-full max-w-[300px] flex flex-col pl-2 transition-colors duration-300 ease-in-out
                ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:scale-105 hover:shadow-lg"}
                ${isActive ? "bg-[#E84A4A]" : "bg-[#242425] hover:bg-white/10"}
              `}
                            onClick={() => {
                                if (disabled) return;
                                setCurrentScreen(panel.screen);
                                setActivePanel(panel.key);
                                setShowPanel(false);
                            }}
                        >
                            {/* Header */}
                            <div className="w-full relative overflow-hidden">
                                <div className="text-[25px] pl-3 py-1 text-white font-light">
                                    <LizardText variant="h1">{panel.heading.toUpperCase()}</LizardText>
                                </div>
                                <LizardImage
                                    src="/assets/union.png"
                                    alt="logo"
                                    objectFit="contain"
                                    className="h-15 w-15 absolute right-[-20px] top-[-3px] rotate-62 invert opacity-10"
                                />
                            </div>

                            {/* Body → Switch if disabled */}
                            {disabled ? (
                                <div className="bg-black flex-1 flex flex-col px-3 py-2 min-h-[100px]">
                                    {items.map((item, index) => (
                                        <div key={index} className="mb-3">
                                            <LizardText
                                                variant="h1"
                                                className="text-[16px] uppercase text-[#b3b3b3] w-full mb-1"
                                            >
                                                {item.label}
                                            </LizardText>
                                            <LizardText
                                                variant="p"
                                                className={`text-[16px] uppercase text-[#E84A4A] w-full leading-none ${item.valueClassName || "mb-1"
                                                    }`}
                                            >
                                                {item.value}
                                            </LizardText>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-black flex-1 flex px-2 min-h-[100px]">
                                    <LizardText
                                        variant="h1"
                                        className="text-[14px] p-3 text-[#b3b3b3] font-light"
                                    >
                                        {panel.content.toUpperCase()}
                                    </LizardText>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
