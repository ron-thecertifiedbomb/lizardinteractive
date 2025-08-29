import { LizardImage, LizardText } from "@/components/common/LizardComponents";
import { appData } from "@/config/appData";
import { useNavigationStore } from "@/store";

type DisabledItem = {
  label: string;
  value: string;
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
  heading?: string; // optional heading for disabled card
  positionClassName?: string;
  cardClassName?: string; // optional additional classes for the card container
};

export function LizardInteractivePanel({
  disabled = false,
  items = [],
  heading,
  cardClassName,
  positionClassName = "fixed bottom-17 flex justify-center",
}: LizardInteractivePanelProps) {
  const { setCurrentScreen, activePanel, setActivePanel, showPanel, setShowPanel } =
    useNavigationStore();

  // Panels to render
  const panelsToRender: (Panel | { key: string; items: DisabledItem[]; heading?: string })[] =
    disabled && items.length > 0
      ? [{ key: "single-disabled", items, heading }] // single card
      : appData.navigationPanels;

  return (
    <div
      className={`overflow-hidden flex justify-center 
        ${disabled ? "relative opacity-50 pointer-events-none" : positionClassName}`}
    >
      <div
        className={`inline-flex justify-center gap-4 transition-transform duration-500 ease-in-out
          ${disabled ? "translate-y-0" : showPanel ? "translate-y-0" : "translate-y-full pointer-events-none"}
        `}
      >
        {panelsToRender.map((panel) => {
          const isDisabledCard = "items" in panel;
          const isActive = !isDisabledCard && activePanel === panel.key;

          return (
            <div
              key={panel.key}
              className={` min-h-0 h-auto box-content rounded-sm flex flex-col pl-2 transition-colors duration-300 ease-in-out
                ${disabled ? "cursor-not-allowed bg-[#E84A4A] " : "cursor-pointer hover:scale-105 hover:shadow-lg "}
                ${isActive ? "bg-[#E84A4A]" : "bg-[#242425] hover:bg-white/10"}    ${cardClassName || ""}
              `}
              onClick={() => {
                if (disabled || isDisabledCard) return;
                if (!("screen" in panel)) return;
                setCurrentScreen(panel.screen!);
                setActivePanel(panel.key);
                setShowPanel(false);
              }}
            >
              {/* Header — always show, use heading prop if disabled */}
              <div className="w-full relative overflow-hidden">
                {isDisabledCard ? (
                  heading && (
                    <div className="text-[25px] pl-3 py-1 text-white font-light">
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
                  {("content" in panel) && (
                    <LizardText
                      variant="h1"
                      className="text-[14px] p-3 text-[#b3b3b3] font-light"
                    >
                      {panel.content.toUpperCase()}
                    </LizardText>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
