


import { LizardTitle } from "@/components/icons";
import { LizardDiv } from ".";
import { LizardDateAndTime } from "../LizardDateAndTime";
import { LizardLogoContainer } from "../LizardLogoContainer";

export function LizardHeader() {

    return (
        <LizardDiv className="flex w-full max-w-[1700px] items-center gap-4 bg-transparent">
            <LizardDiv direction="row" className="flex w-full justify-between items-center">
                <LizardDiv className=" w-full py-4 flex items-center justify-center md:w-auto  lg:w-auto">
                    <LizardDiv >
                        <LizardLogoContainer
                            svg={LizardTitle}
                            // logoWidth="w-80"
                            // logoHeight="h-10"
                            logoStroke="stroke-[#00ff88] stroke-2"
                            logoFill=""
                            className="
drop-shadow-[0_0_20px_#00ff88]
    hover:drop-shadow-[0_0_25px_#00ff88]
    transition-all duration-300
    opacity-90
   
  "
                        /></LizardDiv>

                </LizardDiv>
                <LizardDiv direction="row" className="hidden  sm:flex lg:flex gap-4 md:px-10 lg:px-20 lg:py-4">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />
                </LizardDiv>
            </LizardDiv>
        </LizardDiv>
    );
}
