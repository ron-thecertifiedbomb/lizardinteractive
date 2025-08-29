// app-image.tsx
interface AppImageProps {
  src: string;
  alt: string;
  className?: string; // optional additional classes
  height?: string; // Tailwind height class, default "h-full"
  width?: string; // Tailwind width class, default "w-full"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export function AppImage({
  src,
  alt,
  className = "",
  height = "h-full",
  width = "w-full",
  objectFit = "cover",
}: AppImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${width} ${height} ${className}`}
      style={{ objectFit }}
    />
  );
}
