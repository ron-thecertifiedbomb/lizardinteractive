import { AnimatePresence } from "framer-motion";
import { LizardDiv } from '@/components/common/LizardComponents/layout/LizardDiv';
import { LizardText } from '../LizardText';
import { useNavigationStore, useSectionStore } from '@/store';

export function LizardCenterScreen() {
  const { currentSectionData } = useSectionStore();
  const { section, setSection } = useNavigationStore();

  console.log('currentSectionData', currentSectionData);

  return (
    <AnimatePresence>
      {section && (
        <LizardDiv
          key="lizard-center"
          animation={{
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.9 },
            transition: {
              duration: 1, // ⏩ slightly faster
              ease: "easeInOut",
              opacity: { duration: 0.15 },
              scale: { duration: 0.2 },
            },
          }}
          className="relative z-20 flex flex-col w-full flex-1 mx-auto overflow-hidden justify-center items-center gap-2"
        >
          <LizardText className="uppercase text-4xl">
            Lizard Center Screen
          </LizardText>
          <LizardText className="uppercase">
            Current Section Data: {section}
          </LizardText>

          {/* Reset button */}
          <button
            onClick={() => setSection(null)}
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer"
          >
            Reset Section
          </button>
        </LizardDiv>
      )}
    </AnimatePresence>
  );
}
