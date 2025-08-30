import { LizardDiv, LizardImage, LizardText } from "@/components/common/LizardComponents";
import { appData } from "@/config/appData";
import { useScreenType } from "@/hooks/useScreenType";

import { useNavigationStore } from "@/store";

type DisabledItem = {
  label: string;
  value: string;
  labelProps?: React.ComponentProps<typeof LizardText>;
  valueProps?: React.ComponentProps<typeof LizardText>;
  valueClassName?: string;
};

type Panel = {
  key: string;
  heading: string;
  content: string;
  screen?: string;
};

type LizardInteractivePanelProps = {
  disabled?: boolean;
  items?: DisabledItem[];
  heading?: string;
  positionClassName?: string;
  cardClassName?: string;
};

export function LizardInteractivePanel({
  disabled = false,
  items = [],
  heading,
  cardClassName,
  positionClassName = "",
}: LizardInteractivePanelProps) {
  const { setCurrentScreen, activePanel, setActivePanel, showPanel, setShowPanel } =
    useNavigationStore();
  
  
  const { isMobile } = useScreenType();

  
  const panelsToRender: (Panel | { key: string; items: DisabledItem[]; heading?: string })[] =
    disabled && items.length > 0
      ? [{ key: "single-disabled", items, heading }]
      : appData.navigationPanels;

  return (
    <LizardDiv direction="row"
      className={`overflow-hidden inline-flex justify-center gap-4 transition-transform duration-500 ease-in-out
        ${disabled ? "relative pointer-events-none translate-y-0" : showPanel ? "translate-y-0" : "translate-y-full pointer-events-none"}
        ${positionClassName}
      `}
    >
      {panelsToRender.map((panel) => {
        const isDisabledCard = "items" in panel;
        const isActive = !isDisabledCard && activePanel === panel.key;

        return (
          <LizardDiv
            key={panel.key}
            className={`min-h-0 h-auto box-content rounded-sm flex flex-col pl-2 transition-colors duration-300 ease-in-out
    ${disabled || isDisabledCard
              ? "cursor-not-allowed bg-[#E84A4A] text-gray-400"
                : "cursor-pointer hover:scale-105 hover:shadow-lg"}
    ${!disabled && !isDisabledCard && isActive
                ? "bg-[#E84A4A] text-white"
                : !disabled && !isDisabledCard
                  ? "bg-[#242425] hover:bg-white/10"
                  : ""}
    ${cardClassName || ""}
  `}
            onClick={() => {
              if (disabled || isDisabledCard) return;
              if (!("screen" in panel)) return;
              setCurrentScreen(panel.screen!);
              setActivePanel(panel.key);
              if (isMobile) {
                setShowPanel(false);
              }
            }}
          >
            {/* Header */}
            <div className="w-full relative overflow-hidden">
              {isDisabledCard ? (
                heading && (
                  <div className="text-[14px] lg:text-[25px] pl-3 py-1 text-white font-light">
                    <LizardText variant="h1">{heading.toUpperCase()}</LizardText>
                  </div>
                )
              ) : (
                <div className="text-[25px] pl-3 py-1 text-white font-light">
                  <LizardText variant="h1">{panel.heading.toUpperCase()}</LizardText>
                </div>
              )}
              <LizardImage
                src="/assets/union.png"
                alt="logo"
                objectFit="contain"
                className="h-15 w-15 absolute right-[-20px] top-[-3px] rotate-62 invert opacity-10"
              />
            </div>

            {/* Body */}
            {isDisabledCard ? (
              <div className="bg-black flex-1 flex flex-col px-3 py-2 min-h-[100px]">
                {panel.items.map((item, index) => (
                  <div key={index} className="mb-3">
                    <LizardText
                      variant="h1"
                      className={`text-[16px] uppercase text-[#b3b3b3] w-full mb-1 ${item.labelProps?.className || ""}`}
                      {...item.labelProps}
                    >
                      {item.label}
                    </LizardText>
                    <LizardText
                      variant="p"
                      className={`text-[16px] uppercase text-[#E84A4A] w-full leading-none ${item.valueClassName || "mb-1"} ${item.valueProps?.className || ""}`}
                      {...item.valueProps}
                    >
                      {item.value}
                    </LizardText>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-black flex-1 flex px-2">
                {"content" in panel && (
                  <LizardText
                    variant="h1"
                    className="text-[14px] p-3 text-[#b3b3b3] font-light"
                  >
                    {panel.content.toUpperCase()}
                  </LizardText>
                )}
              </div>
            )}
          </LizardDiv>
        );
      })}
    </LizardDiv>
  );
}
