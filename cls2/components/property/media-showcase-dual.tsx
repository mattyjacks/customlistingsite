"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Car, 
  Camera, 
  Globe, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  ArrowLeft, 
  ArrowRight, 
  Maximize2, 
  Columns, 
  Rows,
  ExternalLink,
  RotateCcw
} from "lucide-react";
import { GALLERY_PHOTOS } from "@/lib/property-data";

interface MediaShowcaseDualProps {
  onOpenPhotoLightbox: (index: number) => void;
}

export function MediaShowcaseDual({ onOpenPhotoLightbox }: MediaShowcaseDualProps) {
  const [activeTab, setActiveTab] = useState<"dual" | "photos" | "streetview" | "satellite" | "embed" | "blueprint">("dual");
  const [isStacked, setIsStacked] = useState(false);
  const [svPanX, setSvPanX] = useState(0);
  const [svZoom, setSvZoom] = useState(1);
  const [mapZoom, setMapZoom] = useState(1);
  const [mapPanX, setMapPanX] = useState(0);

  const handleSvPan = (direction: "left" | "right") => {
    setSvPanX(prev => (direction === "left" ? prev + 60 : prev - 60));
  };

  const handleSvZoom = (type: "in" | "out") => {
    setSvZoom(prev => {
      if (type === "in") return Math.min(2.0, prev + 0.2);
      return Math.max(0.8, prev - 0.2);
    });
  };

  const handleMapPan = (direction: "left" | "right") => {
    setMapPanX(prev => (direction === "left" ? prev + 40 : prev - 40));
  };

  const handleMapZoom = (type: "in" | "out") => {
    setMapZoom(prev => {
      if (type === "in") return Math.min(2.0, prev + 0.2);
      return Math.max(0.8, prev - 0.2);
    });
  };

  const handleResetControls = () => {
    setSvPanX(0);
    setSvZoom(1);
    setMapZoom(1);
    setMapPanX(0);
  };

  return (
    <section id="media-showcase" className="py-16 bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>GEOSPATIAL &amp; 360° MEDIA</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-foreground">
              Interactive Map, 360° Street View &amp; Media
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Inspect satellite boundary imagery, pan 360° Street View, high-res photography, and live Google Maps embed.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === "dual" && (
              <button
                onClick={() => setIsStacked(!isStacked)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-muted hover:bg-muted/80 border border-border text-foreground transition-colors"
                aria-label={isStacked ? "Switch to side-by-side view" : "Switch to stacked view"}
              >
                {isStacked ? <Columns className="w-3.5 h-3.5 text-blue-500" /> : <Rows className="w-3.5 h-3.5 text-blue-500" />}
                <span>{isStacked ? "Side-by-Side View" : "Stacked View"}</span>
              </button>
            )}

            <button
              onClick={handleResetControls}
              className="p-1.5 rounded-xl bg-muted hover:bg-muted/80 border border-border text-muted-foreground hover:text-foreground transition-colors"
              title="Reset Zoom & Pan"
              aria-label="Reset Zoom and Pan"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-border">
          <button
            onClick={() => setActiveTab("dual")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === "dual"
                ? "bg-primary text-primary-foreground shadow-sm font-bold"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Dual Map &amp; Street View</span>
          </button>

          <button
            onClick={() => setActiveTab("photos")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === "photos"
                ? "bg-primary text-primary-foreground shadow-sm font-bold"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Photo Gallery (10)</span>
          </button>

          <button
            onClick={() => setActiveTab("streetview")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === "streetview"
                ? "bg-primary text-primary-foreground shadow-sm font-bold"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Street View 360°</span>
          </button>

          <button
            onClick={() => setActiveTab("satellite")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === "satellite"
                ? "bg-primary text-primary-foreground shadow-sm font-bold"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Satellite Map</span>
          </button>

          <button
            onClick={() => setActiveTab("embed")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === "embed"
                ? "bg-primary text-primary-foreground shadow-sm font-bold"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Live Google Maps</span>
          </button>

          <button
            onClick={() => setActiveTab("blueprint")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === "blueprint"
                ? "bg-primary text-primary-foreground shadow-sm font-bold"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="font-mono text-cyan-400">CAD</span>
            <span>2D CAD Blueprint</span>
          </button>
        </div>

        {/* TAB 1: DUAL SPLIT VIEW */}
        {activeTab === "dual" && (
          <div className={`grid gap-4 ${isStacked ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>
            
            {/* Satellite Map Panel */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-slate-900 h-[380px] sm:h-[460px] group shadow-md">
              <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/10 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Chester, NH &bull; Satellite Boundary Survey</span>
              </div>

              <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/images/google_map.jpg"
                  alt="Satellite Map of 77 Example Road"
                  style={{ 
                    transform: `scale(${mapZoom}) translateX(${mapPanX}px)`, 
                    transition: "transform 0.3s ease" 
                  }}
                  className="w-full h-full object-cover min-w-[110%]"
                />
              </div>

              {/* Map Pan & Zoom Controls */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/15">
                <button
                  onClick={() => handleMapPan("left")}
                  className="p-1.5 text-white hover:text-amber-400 transition-colors"
                  title="Pan Map Left"
                  aria-label="Pan map left"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleMapPan("right")}
                  className="p-1.5 text-white hover:text-amber-400 transition-colors"
                  title="Pan Map Right"
                  aria-label="Pan map right"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-4 bg-white/20" />
                <button
                  onClick={() => handleMapZoom("in")}
                  className="p-1.5 text-white hover:text-amber-400 transition-colors"
                  title="Zoom In"
                  aria-label="Zoom in map"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleMapZoom("out")}
                  className="p-1.5 text-white hover:text-amber-400 transition-colors"
                  title="Zoom Out"
                  aria-label="Zoom out map"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Street View Panel */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-slate-900 h-[380px] sm:h-[460px] group shadow-md">
              <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <Car className="w-3.5 h-3.5 text-cyan-400" />
                <span>Street View 360° Panorama Approach</span>
              </div>

              <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/images/street_view.jpg"
                  alt="Street View Approach"
                  style={{
                    transform: `scale(${svZoom}) translateX(${svPanX}px)`,
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  className="w-full h-full object-cover min-w-[120%]"
                />
              </div>

              {/* Pan and Zoom Controls */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/15">
                <button
                  onClick={() => handleSvPan("left")}
                  className="px-2 py-1 text-xs text-white hover:text-cyan-400 flex items-center gap-0.5"
                  title="Pan Left"
                  aria-label="Pan Street View left"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Pan</span>
                </button>
                <button
                  onClick={() => handleSvPan("right")}
                  className="px-2 py-1 text-xs text-white hover:text-cyan-400 flex items-center gap-0.5"
                  title="Pan Right"
                  aria-label="Pan Street View right"
                >
                  <span>Pan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-4 bg-white/20" />
                <button
                  onClick={() => handleSvZoom("in")}
                  className="p-1.5 text-white hover:text-cyan-400"
                  title="Zoom In"
                  aria-label="Zoom in Street View"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSvZoom("out")}
                  className="p-1.5 text-white hover:text-cyan-400"
                  title="Zoom Out"
                  aria-label="Zoom out Street View"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PHOTO COLLAGE GRID (10 PHOTOS) */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => onOpenPhotoLightbox(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm hover:shadow-md transition-all ${
                  idx === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                }`}
                title={`Click to view ${photo.title}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onOpenPhotoLightbox(idx);
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
                  <span className="self-start text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/15">
                    {photo.badge}
                  </span>

                  <div className="text-white">
                    <p className="text-xs font-semibold line-clamp-1">{photo.title}</p>
                    <span className="text-[10px] text-amber-400 font-mono">Click to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: STANDALONE STREET VIEW 360 */}
        {activeTab === "streetview" && (
          <div className="relative rounded-2xl overflow-hidden border border-border bg-slate-900 h-[500px] shadow-lg">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/street_view.jpg"
                alt="Street View 360 Panorama"
                style={{
                  transform: `scale(${svZoom}) translateX(${svPanX}px)`,
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="w-full h-full object-cover min-w-[130%]"
              />
            </div>

            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-mono border border-white/15">
              360° Street View Exterior Viewport
            </div>

            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-xl border border-white/15">
              <button
                onClick={() => handleSvPan("left")}
                className="px-2.5 py-1 text-xs text-white hover:text-cyan-400 flex items-center gap-1"
                title="Pan Left"
                aria-label="Pan left"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Pan Left</span>
              </button>
              <button
                onClick={() => handleSvPan("right")}
                className="px-2.5 py-1 text-xs text-white hover:text-cyan-400 flex items-center gap-1"
                title="Pan Right"
                aria-label="Pan right"
              >
                <span>Pan Right</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="w-px h-5 bg-white/20" />
              <button
                onClick={() => handleSvZoom("in")}
                className="p-1.5 text-white hover:text-cyan-400"
                title="Zoom In"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSvZoom("out")}
                className="p-1.5 text-white hover:text-cyan-400"
                title="Zoom Out"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: SATELLITE MAP */}
        {activeTab === "satellite" && (
          <div className="relative rounded-2xl overflow-hidden border border-border bg-slate-900 h-[500px] shadow-lg">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/google_map.jpg"
                alt="Satellite Map Boundary"
                style={{ 
                  transform: `scale(${mapZoom}) translateX(${mapPanX}px)`, 
                  transition: "transform 0.3s ease" 
                }}
                className="w-full h-full object-cover min-w-[110%]"
              />
            </div>
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-mono border border-white/15">
              High-Resolution Satellite Property Boundary
            </div>
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1.5 rounded-xl border border-white/15">
              <button onClick={() => handleMapPan("left")} className="p-1.5 hover:text-amber-400" title="Pan left" aria-label="Pan left"><ArrowLeft className="w-4 h-4" /></button>
              <button onClick={() => handleMapPan("right")} className="p-1.5 hover:text-amber-400" title="Pan right" aria-label="Pan right"><ArrowRight className="w-4 h-4" /></button>
              <div className="w-px h-5 bg-white/20" />
              <button onClick={() => handleMapZoom("in")} className="p-1.5 hover:text-amber-400" title="Zoom in" aria-label="Zoom in"><ZoomIn className="w-4 h-4" /></button>
              <button onClick={() => handleMapZoom("out")} className="p-1.5 hover:text-amber-400" title="Zoom out" aria-label="Zoom out"><ZoomOut className="w-4 h-4" /></button>
            </div>
          </div>
        )}

        {/* TAB 5: LIVE GOOGLE MAPS EMBED */}
        {activeTab === "embed" && (
          <div className="rounded-2xl overflow-hidden border border-border h-[500px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11686.353381650388!2d-71.26620577749454!3d42.95779644053229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2501a355fb5cb%3A0x6fb84e8e19c0175b!2sChester%2C%20NH%2003036!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed for 77 Example Road, Chester NH"
            />
          </div>
        )}

        {/* TAB 6: 2D CAD BLUEPRINT */}
        {activeTab === "blueprint" && (
          <div className="rounded-2xl p-6 bg-obsidian-950 border-2 border-cyan-500/40 bg-cad-grid shadow-2xl space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
              <span>ARCHITECTURAL CAD BLUEPRINT • SCALE 1/4&quot; = 1&apos;-0&quot;</span>
            </div>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-900 shadow-xl">
              <img
                src="/images/floorplan.jpg"
                alt="2D Architectural Blueprint"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
