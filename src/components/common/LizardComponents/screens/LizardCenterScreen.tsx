  import { AnimatePresence } from "framer-motion";
  import { LizardDiv } from "@/components/common/LizardComponents/layout/LizardDiv";
  import { useControlPanelStore } from "@/store/ControlPanelStore";
  import { LizardInteractive } from "./LizardInteractive";
  import { LizardMap } from "./LizardMap";


interface LizardCenterScreen {
  className?: string;
}

export function LizardCenterScreen({ className= ""}: LizardCenterScreen ) {

    const { activeComponent, setActiveComponent } = useControlPanelStore();

    const renderContent = () => {
      switch (activeComponent) {
        case "map":
          return <LizardMap className="w-full h-[500px] xl:h-[700px] p-2" />;
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
          className={`${className}`}
        >
          {renderContent()}
          {activeComponent && (
            <button
              onClick={() => setActiveComponent(null)}
              className="px-4 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer"
            >
              Close
            </button>
          )}
        </LizardDiv>

      </AnimatePresence>
    );
  }
