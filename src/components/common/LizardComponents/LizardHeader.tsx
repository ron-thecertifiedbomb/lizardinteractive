
import { LizardAndTitleLogo } from ".";
import { LizardDateAndTime } from "./LizardDateAndTime";
import { LizardLogoContainer } from "./LizardLogoContainer";

export function LizardHeader() {

    return (
        <div className="flex w-full items-center gap-4 bg-black">
            <div className="flex w-full justify-between">
                <div className="px-20 py-2">
                    <LizardLogoContainer
                        svg={LizardAndTitleLogo}
                        className=" w-70 h-auto fill-[#88fb59ff] stroke-[#88fb59ff] "
                    />
                </div>

                <div className="flex gap-4 px-20">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />
                </div>
            </div>
        </div>
    );
}
