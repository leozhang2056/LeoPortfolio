"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  caption: string;
}

export function ImageGallery({
  images,
  coverImage,
  title,
  gradient,
}: {
  images: GalleryImage[];
  coverImage: string;
  title: string;
  gradient: string;
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imgError, setImgError] = useState(false);

  const allImages = coverImage
    ? [{ src: coverImage, caption: "Cover" }, ...images]
    : images;

  if (allImages.length === 0) {
    return (
      <div
        className={cn(
          "w-full aspect-video rounded-xl bg-gradient-to-br flex items-center justify-center",
          gradient
        )}
      >
        <span className="text-white/80 text-2xl font-bold">{title}</span>
      </div>
    );
  }

  const current = allImages[selectedImage];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted">
        {imgError ? (
          <div
            className={cn(
              "w-full h-full bg-gradient-to-br flex items-center justify-center",
              gradient
            )}
          >
            <span className="text-white/80 text-2xl font-bold">{title}</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={current.src}
            src={current.src}
            alt={current.caption}
            className="w-full h-full object-contain bg-muted"
            onError={() => setImgError(true)}
          />
        )}
        {current.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
            <p className="text-white text-sm font-medium">{current.caption}</p>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allImages.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => {
                setSelectedImage(idx);
                setImgError(false);
              }}
              className={cn(
                "shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all",
                selectedImage === idx
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
