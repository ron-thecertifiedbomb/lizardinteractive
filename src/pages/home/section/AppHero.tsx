import { useEffect, useState } from "react";
import {
  AppTransitioningText,
  AppImageScreensaver,
  AppDialog,
} from "@/components/common";

import { fetchHeroImages, fetchHeroQuotes } from "@/hooks/fetchHeroData";
import { AppSectionContainer } from "@/components/layout";

interface HeroQuote {
  id: number;
  title: string;
  description: string;
}

interface ScreensaverImage {
  src: string;
  alt?: string;
}

export function AppHero() {
  const [images, setImages] = useState<ScreensaverImage[]>([]);
  const [phrases, setPhrases] = useState<HeroQuote[]>([]);

  useEffect(() => {
    fetchHeroImages().then((data) => setImages(data));
    fetchHeroQuotes().then((data) => setPhrases(data));
  }, []);

  return (
    <AppSectionContainer id="hero" className="my-16 px-4 relative">
      <AppImageScreensaver
        images={images}
        auto={true}
        interval={7000}
        transitionDuration={2}
        className="
          h-[300px]  
          sm:h-[400px] 
          md:h-[500px] 
          lg:h-[600px] 
          w-full 
         rounded-xl     "
      >
        <div className="flex flex-col gap-">
          <AppTransitioningText
            items={phrases}
            interval={6000}
            transitionDuration={2}
          />
          <AppDialog />
        </div>
      </AppImageScreensaver>
    </AppSectionContainer>
  );
}
