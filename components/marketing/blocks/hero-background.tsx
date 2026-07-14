"use client";

import Image from "next/image";

export interface HeroBackgroundProps {
  bgImage?: string;
  bgVideo?: string;
}

function isVideoUrl(url?: string): boolean {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
}

export function HeroBackground({ bgImage, bgVideo }: HeroBackgroundProps) {
  const videoSrc = bgVideo || (isVideoUrl(bgImage) ? bgImage : undefined);
  const imageSrc = !videoSrc ? bgImage : undefined;
  const posterSrc = bgVideo && bgImage ? bgImage : undefined;

  if (!videoSrc && !imageSrc) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-25 dark:opacity-70"
        />
      ) : (
        imageSrc && (
          <Image src={imageSrc} alt="" fill className="object-cover opacity-25 dark:opacity-20" priority={false} />
        )
      )}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white dark:to-zinc-950" />
    </div>
  );
}
