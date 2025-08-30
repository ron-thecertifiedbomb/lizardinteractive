
import { LizardAndTitleLogo } from ".";
import { LizardDateAndTime } from "./LizardDateAndTime";
import { LizardLogoContainer } from "./LizardLogoContainer";

export function LizardHeader() {

    return (
        <div className="flex w-full items-center gap-4 bg-black">
            <div className="flex w-full justify-between items-center">
                {/* Logo container */}
                <div className="px-6 md:px-10 lg:px-20 py-2 flex w-full lg:w-auto justify-center">
                    <LizardLogoContainer
                        svg={LizardAndTitleLogo}
                        className="w-40 sm:w-50 lg:60 h-auto fill-[#88fb59ff] stroke-[#88fb59ff]"
                    />
                </div>

                {/* Right content (hidden on small screens) */}
                <div className="hidden lg:flex gap-4 md:px-10 lg:px-20">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />
                </div>
            </div>
        </div>
    );
}
