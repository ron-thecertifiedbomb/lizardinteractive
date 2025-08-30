import { LizardText } from "@/components/common/LizardComponents/LizardText";
import { LizardLogo } from "./LizardLogo";

interface LizardThumbnailProps {
  title: string;
  content?: string;
}

export function LizardThumbnail({
  title,
  content,
}: LizardThumbnailProps) {
  return (
    <div
      className="relative max-w-[184px]
    h-auto
    w-full
    
  bg-transparent"
    >
      <div className="flex flex-col">
        <div className="rounded-sm overflow-hidden border border-white/10 flex flex-col items-center justify-center p-4 mb-4 space-y-2">
          <LizardLogo className=" fill-[#E84A4A]"/>
          
          <LizardText className="text-[16px]  text-[#7A7A7A]  font-light uppercase">
            {title}
          </LizardText>
        </div>

        <div>
          {content && (
            <LizardText
              variant="p"
              className="text-[14px] text-[#7A7A7A]  font-light leading-snug tracking-wide uppercase"
            >
              {content}
            </LizardText>
          )}
        </div>
      </div>
    </div>
  );
}
