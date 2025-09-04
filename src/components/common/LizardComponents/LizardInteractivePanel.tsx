import { LizardLogoContainer, LizardText } from "@/components/common/LizardComponents";
import { navigationPanels } from "@/config/navigationPanels";
import { useNavigationStore } from "@/store";
import { AppData } from "@/types/appData";
import { LizardDiv } from "./layout";
import { Lizard } from "@/components/icons";

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
  overview: string;
  section?: string;
  isActive?: boolean
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



  const { activePanelKey, setSection, setActivePanel, showPanel, } =
    useNavigationStore();



  const panelsToRender: (Panel | { heading: string; items: DisabledItem[]; overview?: string })[] =
    disabled && items.length > 0
      ? [{ heading: "single-disabled", items, overview: "" }]
      : navigationPanels;

  return (
    <LizardDiv direction="row"
      className={`overflow-hidden inline-flex justify-center gap-1 lg:gap-4 transition-transform duration-500 ease-in-out
        ${disabled ? "relative pointer-events-none translate-y-0" : showPanel ? "translate-y-0" : "translate-y-full pointer-events-none"}
        ${positionClassName}
      `}
    >


      {panelsToRender.map((panel) => {
        const isDisabledCard = "items" in panel;
        const isActive = !isDisabledCard && activePanelKey === panel.key;

        return (
          <LizardDiv
            key={panel.heading}
            className={`min-h-0 h-auto box-content rounded-sm flex flex-col pl-1 lg:pl-2 transition-colors duration-300 ease-in-out
    ${disabled || isDisabledCard
                ? "cursor-not-allowed bg-[#E84A4A] text-gray-400"
                : "cursor-pointer hover:opacity-[0.8] hover:shadow-lg"}
    ${!disabled && !isDisabledCard && isActive
                ? "bg-[#E84A4A] text-white"
                : !disabled && !isDisabledCard
                  ? "bg-[#242425] hover:bg-white/10"
                  : ""}
    ${cardClassName || ""}
  `}
            style={{
              background: !disabled && !isDisabledCard && isActive
                ? "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)"
                : "radial-gradient(circle at top, #1c1c1c, #000000)",
            }}
            onClick={() => {
              if (disabled || isDisabledCard) return;

              setSection(panel.heading as keyof AppData);
              setActivePanel(panel.key);
              // if (isMobile) {
              //   setShowPanel(false);
              // }
            }}
          >
            {/* Header */}
            <LizardDiv className="w-full relative overflow-hidden">
              {isDisabledCard ? (
                heading && (
                  <LizardDiv className="text-[14px] lg:text-[25px] pl-1 lg:pl-3 py-1 text-white font-light">
                    <LizardText variant="h1">{heading.toUpperCase()}</LizardText>
                  </LizardDiv>
                )
              ) : (
                <LizardDiv direction="row" className="text-[12px] w-full justify-between sm:text-[18px] lg:text-[20px] sm:pl-2 pl-1 pr-1 lg:pl-2 lg:pr-3 py-1 text-white font-light ">
                  <LizardText variant="h1">{panel.heading.toUpperCase()}</LizardText>
                  <LizardLogoContainer
                    svg={Lizard}
                    logoStroke="stroke-[#ffffff] stroke-[5]"
                    logoHeight="h-4"
                    logoWidth="w-4"
                    logoFill="fill-[#b3b3b3]"
                    className="opacity-80"
                  />

                </LizardDiv>
              )}





            </LizardDiv>

            {/* Body */}
            {isDisabledCard ? (
              <LizardDiv className="bg-transparent flex-1 flex flex-col px-3 py-2 min-h-[100px]">
                {panel.items.map((item, index) => (
                  <LizardDiv key={index} className="mb-3">
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
                  </LizardDiv>
                ))}
              </LizardDiv>
            ) : (
              <LizardDiv className="bg-black/40 flex-1 flex px-1 lg:px-2  border-t-1 border-l-1 rounded-sm">
                {"overview" in panel && (
                  <LizardText
                    variant="p"
                    className="text-[8px] sm:text-[12px] lg:text-[14px] p-1 sm:p-2 lg:p-3 text-[#b3b3b3] font-light"
                  >
                    {panel.overview.toUpperCase()}
                  </LizardText>
                )}
              </LizardDiv>
            )}
          </LizardDiv>
        );
      })}
    </LizardDiv>
  );
}
