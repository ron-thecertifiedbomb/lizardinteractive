import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LizardImage } from "./LizardImage";
import { LizardDiv } from "./layout/LizardDiv";

interface CarouselItemType {
  id: number;
  src: string;
  alt: string;
}

interface LizardCarouselProps {
  items: CarouselItemType[];
  renderItem: (item: CarouselItemType) => React.ReactNode;
  maxWidth?: string;
}

export function LizardCarousel({ items }: LizardCarouselProps) {
  return (
    <LizardDiv className=" pl-5 pr-6">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id}>
              <LizardImage
                src={item.src}
                alt={item.alt}
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious hidden />
        <CarouselNext hidden />
      </Carousel>
      </LizardDiv>
  );
}
