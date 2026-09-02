"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, Filter } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/lib/property-data";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

export function PhotoGalleryModal({
  isOpen,
  initialIndex = 0,
  onClose
}: PhotoGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, activeCategory]);

  if (!isOpen) return null;

  // Filter categories
  const categories = ["All", "Exterior", "Interior", "Kitchen", "Dining", "Suite", "Map", "Blueprint"];

  const filteredPhotos = activeCategory === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  const safeIndex = currentIndex < filteredPhotos.length ? currentIndex : 0;
  const currentPhoto = filteredPhotos[safeIndex] || GALLERY_PHOTOS[0];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-200 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      
      {/* Top Controls Bar */}
      <div className="w-full px-4 sm:px-6 py-4 border-b border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500 text-slate-950">
              {currentPhoto.badge}
            </span>
            <div className="text-white text-sm font-semibold truncate max-w-md hidden sm:block">
              {currentPhoto.title}
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300 font-mono">
            <span>
              {safeIndex + 1} / {filteredPhotos.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Close Gallery (Esc)"
              aria-label="Close photo gallery modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-amber-400" />
            <span>Filter:</span>
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-white/10 text-slate-300 hover:text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Image Stage with Nav Buttons */}
      <div className="relative flex-1 flex items-center justify-center p-4 max-h-[70vh]">
        {filteredPhotos.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 transition-all active:scale-95"
            title="Previous Image (←)"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="max-w-5xl max-h-full flex flex-col items-center justify-center">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.title}
            className="max-h-[62vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all"
          />
          <div className="text-center text-slate-300 text-xs sm:text-sm mt-3 font-medium">
            {currentPhoto.title}
          </div>
        </div>

        {filteredPhotos.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 transition-all active:scale-95"
            title="Next Image (→)"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="w-full bg-black/60 border-t border-white/10 py-3 px-4 overflow-x-auto scrollbar-thin">
        <div className="max-w-7xl mx-auto flex items-center gap-2 justify-center">
          {filteredPhotos.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-16 sm:w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                idx === safeIndex
                  ? "border-amber-400 scale-105 shadow-md shadow-amber-400/20"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              title={photo.title}
              aria-label={`View photo ${idx + 1}`}
            >
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
