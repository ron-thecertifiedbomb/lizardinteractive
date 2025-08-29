
import {  LizardCardStyle } from "@/components/common/LizardComponents";

export function PlayGround() {


  const cardData = [
    { label: "name", value: "ronan sibunga" },
    { label: "occupation", value: "fullstack developer" },
    { label: "corporation", value: "lizard interactive" },
    { label: "availability", value: "open for hire", valueClassName: "text-[25px] px-2 uppercase tracking-tight text-black bg-[#E84A4A] w-full leading-none mb-2" },
    { label: "social", value: "open connection", valueClassName: "text-[25px] px-2 uppercase tracking-tight text-[#E84A4A] border-2 border-[#E84A4A] w-full leading-none" },
  ];
  return (
    <>
      <LizardCardStyle items={cardData} logoClassName={'w-20 h-20 fill-white'} /> 
    </>
  );
}
