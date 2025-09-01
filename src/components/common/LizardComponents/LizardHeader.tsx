
import { LizardTitle, LizardDiv } from ".";
import { LizardDateAndTime } from "./LizardDateAndTime";
import { LizardLogoContainer } from "./LizardLogoContainer";

export function LizardHeader() {

    return (
        <LizardDiv className="flex w-full max-w-[1700px] items-center gap-4 bg-black">
            <LizardDiv direction="row" className="flex w-full justify-between items-center">
                {/* Logo container */}
                <LizardDiv className=" w-full py-4 flex items-center justify-center md:w-auto  lg:w-auto">
                    <LizardDiv className="w-40 h-auto sm:w-50 lg:w-60">   <LizardLogoContainer
                        svg={LizardTitle}
                        className=";
    [#88fb59ff] fill-[#88fb59ff] stroke-[#88fb59ff] text-center"
                    /></LizardDiv>

                </LizardDiv>

                {/* Right content (hidden on small screens) */}
                <LizardDiv direction="row" className="hidden  sm:flex lg:flex gap-4 md:px-10 lg:px-20 lg:py-4">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />
                </LizardDiv>
            </LizardDiv>
        </LizardDiv>
    );
}
