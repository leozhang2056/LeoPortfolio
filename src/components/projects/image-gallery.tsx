"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const total = allImages.length;

  const goTo = useCallback(
    (idx: number) => {
      setSelectedImage(idx);
      setImgError(false);
    },
    []
  );

  const goPrev = useCallback(() => {
    if (total > 1) goTo(selectedImage <= 0 ? total - 1 : selectedImage - 1);
  }, [total, selectedImage, goTo]);

  const goNext = useCallback(() => {
    if (total > 1) goTo(selectedImage >= total - 1 ? 0 : selectedImage + 1);
  }, [total, selectedImage, goTo]);

  // Keyboard navigation
  useEffect(() => {
    if (total <= 1) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total, goPrev, goNext]);

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
      <div
        className="group relative w-full rounded-xl overflow-hidden bg-muted flex items-center justify-center"
        style={{ minHeight: "300px", maxHeight: "500px" }}
      >
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
            className="max-w-full object-contain bg-muted"
            style={{ maxHeight: "500px" }}
            onError={() => setImgError(true)}
          />
        )}

        {/* Left arrow */}
        {total > 1 && (
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {/* Right arrow */}
        {total > 1 && (
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}

        {/* Caption + counter */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 flex items-end justify-between">
          <p className="text-white text-sm font-medium">{current.caption}</p>
          {total > 1 && (
            <span className="text-white/70 text-xs shrink-0 ml-3">
              {selectedImage + 1} / {total}
            </span>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allImages.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => goTo(idx)}
              className={cn(
                "shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all",
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
