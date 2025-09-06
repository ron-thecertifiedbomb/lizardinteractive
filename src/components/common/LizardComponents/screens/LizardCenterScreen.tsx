  import { AnimatePresence } from "framer-motion";
  import { LizardDiv } from "@/components/common/LizardComponents/layout/LizardDiv";
  import { useControlPanelStore } from "@/store/ControlPanelStore";
  import { LizardInteractive } from "./LizardInteractive";
  import { LizardMap } from "./LizardMap";
import { LizardTranslator } from "./LizardTranslator";


interface LizardCenterScreen {
  className?: string;
}

export function LizardCenterScreen({ className= ""}: LizardCenterScreen ) {

  const { activeComponent, setActiveComponent } = useControlPanelStore();
  



    const renderContent = () => {
      switch (activeComponent) {
        case "map":
          return <LizardMap className="w-full h-[500px] xl:h-[700px] p-2" />;
        case "translator":
          return <LizardTranslator className="w-full h-[400px]  py-6" />;
        case "lizardinteractive":
          return <LizardInteractive className="w-full h-[500px] xl:h-[700px] p-2" />;
        default:
          return null;
      }
    };

    return (
      <AnimatePresence>
        <LizardDiv
          key="lizard-center"
          animation={{
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.9 },
            transition: {
              duration: 0.6,
              ease: "easeInOut",
              opacity: { duration: 0.9 },
              scale: { duration: 0.9 },
            },
          }}
          className={`relative ${className}`} // 👈 anchor for absolute children
        >
          {renderContent()}
          {activeComponent && (
            <button
              onClick={() => setActiveComponent(null)}
              className="absolute top-4 right-4 z-700 px-2 py-1 text-[13px] uppercase sm:text-[18px] border border-[#14532d] bg-[#14532d] text-white rounded-4xl hover:bg-gray-700 transition cursor-pointer shadow-md"
            >
            close
            </button>
          )}
        </LizardDiv>
      </AnimatePresence>

    );
  }
