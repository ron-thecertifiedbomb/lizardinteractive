
import { LizardDiv, LizardDateAndTime, LizardLogo } from ".";


export function LizardHeader() {

    return (
        <LizardDiv className="flex w-full max-w-[1380px] items-center  bg-black">
            <LizardDiv direction="row" className="flex w-full justify-between items-center">
                {/* Logo container */}
                <LizardDiv className=" w-full flex items-center justify-center md:w-auto py-1  lg:w-auto">
                    <LizardDiv >

                        {/* <LizardLogoContainer
                        svg={LizardTitle}
                        className=";
    [#88fb59ff] fill-[#88fb59ff] stroke-[#88fb59ff] text-center"
                        />
                     */}
                        <LizardLogo selectedLogo={5} logoStroke="stroke-[#88fb59ff] stroke-[0.4]" logoWidth="w-18" logoHeight="h-18" />
                    </LizardDiv>

                </LizardDiv>

                {/* Right content (hidden on small screens) */}
                <LizardDiv direction="row" className="hidden  sm:flex lg:flex gap-4 ">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />
                </LizardDiv>
            </LizardDiv>
        </LizardDiv>
    );
}
