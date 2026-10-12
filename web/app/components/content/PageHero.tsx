import type { ReactNode } from "react";
import { responsive } from "~/lib/img";

// The legacy site's cover banner (.banner-area in css/main.css): img/MainCover.jpg,
// centred and cropped to fill, under a 10% black overlay, with the fixed navbar
// on top of it. Inner pages show a 300px strip; the home page fills the window.
export function CoverBanner({ fullscreen = false, children }: { fullscreen?: boolean; children?: ReactNode }) {
  return (
    <section
      className={`relative w-full bg-[url(/img/MainCover.webp)] bg-cover bg-center ${fullscreen ? "h-svh min-h-[560px]" : "h-[300px]"}`}
    >
      <div className="absolute inset-0 bg-black/10" />
      {children}
    </section>
  );
}

// Cover banner, then the page title (and optional sub-line and photo) at the top
// of the content, where the legacy pages print them.
export function PageHero({
  title,
  subtitle,
  image,
}: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  if (!title && !subtitle && !image) return <CoverBanner />;
  return (
    <>
      <CoverBanner />
      <div className="mx-auto max-w-[1140px] px-[15px] pt-[50px]">
        {title && <h1 className="type-h1 max-w-[30ch]">{title}</h1>}
        {subtitle && <p className="type-lead mt-3 whitespace-pre-line text-muted">{subtitle}</p>}
        {image && <img {...responsive(image, "(min-width: 768px) 600px, 100vw")} alt="" className="mt-6 max-h-[32rem] w-auto max-w-full" />}
      </div>
    </>
  );
}
