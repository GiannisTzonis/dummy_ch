import type { GalleryImage } from "~/content/types";
import { useLocale } from "~/lib/locale";
import { responsive } from "~/lib/img";

const label = { en: "Open photo", el: "Άνοιγμα φωτογραφίας" } as const;

// Legacy news galleries: justified rows of photos at their natural width, each
// opening the full-size image.
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const locale = useLocale();
  if (images.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-[30px]">
      {images.map((img) => (
        <a key={img.src} href={img.src} target="_blank" rel="noreferrer" className="block" aria-label={label[locale]}>
          <img {...responsive(img.src, "300px")} alt={img.alt ?? ""} className="h-[206px] w-auto max-w-full" loading="lazy" />
        </a>
      ))}
    </div>
  );
}
