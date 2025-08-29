import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AppContentContainer } from "../layout/AppContentContainer";
import { AppImage } from "./AppImage";

interface CarouselItemType {
  id: number;
  src: string;
  alt: string;
}

interface AppCarouselProps {
  items: CarouselItemType[];
  renderItem: (item: CarouselItemType) => React.ReactNode;
  maxWidth?: string;
}

export function AppCarousel({ items }: AppCarouselProps) {
  return (
    <AppContentContainer className=" pl-5 pr-6">
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
              <AppImage
                src={item.src}
                alt={item.alt}
                height="h-50 md:h-90"
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious hidden />
        <CarouselNext hidden />
      </Carousel>
    </AppContentContainer>
  );
}
