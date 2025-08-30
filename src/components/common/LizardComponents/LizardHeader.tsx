
import { LizardAndTitleLogo } from ".";
import { LizardDateAndTime } from "./LizardDateAndTime";
import { LizardLogoContainer } from "./LizardLogoContainer";

export function LizardHeader() {

    return (
        <div className="flex w-full items-center gap-4 bg-black">
            <div className="flex w-full justify-between items-center">
                {/* Logo container */}
                <div className="px-6 md:px-10 lg:px-20 py-2 flex w-full sm:justify-center justify-center">
                    <LizardLogoContainer
                        svg={LizardAndTitleLogo}
                        className="w-50 sm:w-70 h-auto fill-[#88fb59ff] stroke-[#88fb59ff]"
                    />
                </div>

                {/* Right content (hidden on small screens) */}
                <div className="hidden sm:hidden gap-4 md:px-10 lg:px-20">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />
                </div>
            </div>
        </div>
    );
}
