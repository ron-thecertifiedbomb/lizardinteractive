import { AppCarousel, AppLabel } from "@/components/common";
import { AppContentContainer } from "@/components/layout";

export function AppGallery() {
  const images = [
    { id: 1, src: "/assets/bg.jpg", alt: "Background 1" },
    { id: 2, src: "/assets/bg.jpg", alt: "Background 2" },
    { id: 3, src: "/assets/bg.jpg", alt: "Background 3" },
    { id: 4, src: "/assets/bg.jpg", alt: "Background 4" },
  ];

  return (
    <AppContentContainer className="p-4 sm:p-6 lg:p-8">
      <AppLabel variant="h2" className="mb-4">
        My Gallery
      </AppLabel>

      <AppCarousel
        items={images}
        renderItem={(img) => (
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover rounded-xl"
          />
        )}
        maxWidth="max-w-5xl"
      />
    </AppContentContainer>
  );
}
