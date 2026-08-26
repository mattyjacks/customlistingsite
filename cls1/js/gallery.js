/* ==========================================================================
   Modular JS: Photo Gallery & Lightbox Modal
   ========================================================================== */

export const galleryItems = [
  { title: '77 Example Road Exterior & Private Lawn', category: 'EXTERIOR', src: 'images/hero.jpg' },
  { title: 'Satellite Map View & Property Boundaries', category: 'SATELLITE MAP', src: 'images/google_map.jpg' },
  { title: 'Street View 360° Panorama Camera Angle', category: 'STREET VIEW', src: 'images/street_view.jpg' },
  { title: 'Sun-Filled Living Area with Beam Ceilings', category: 'INTERIOR', src: 'images/living_room.jpg' },
  { title: 'Gourmet Kitchen with Quartz Waterfall Countertops', category: 'KITCHEN', src: 'images/kitchen.jpg' },
  { title: 'Dining Room with Floor-to-Ceiling Forest Views', category: 'DINING', src: 'images/dining_room.jpg' },
  { title: 'Primary Suite Sanctuary & Spa Bath', category: 'BATHROOM', src: 'images/master_suite.jpg' },
  { title: 'Private Outdoor Patio & Stone Fireplace', category: 'EXTERIOR', src: 'images/patio_backyard.jpg' },
  { title: 'Aerial Estate View & Wooded Acreage', category: 'EXTERIOR', src: 'images/aerial.jpg' },
  { title: 'Architectural 2D Blueprint & Room Dimensions', category: 'FLOORPLAN', src: 'images/floorplan.jpg' }
];

let currentGalleryIndex = 0;

export function initGallery() {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const openGalleryBtns = document.querySelectorAll('.openGalleryBtn');
  const collageItems = document.querySelectorAll('.collage-item');

  function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightbox();
    if (lightboxModal) lightboxModal.classList.add('active');
  }

  function updateLightbox() {
    if (!lightboxImg || !lightboxCaption) return;
    const item = galleryItems[currentGalleryIndex];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = `${item.title} (${currentGalleryIndex + 1} of ${galleryItems.length})`;
  }

  collageItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index || '0', 10);
      openLightbox(idx);
    });
  });

  openGalleryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(0);
    });
  });

  document.getElementById('lightboxClose')?.addEventListener('click', () => {
    lightboxModal?.classList.remove('active');
  });

  document.getElementById('lightboxPrev')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
  });

  document.getElementById('lightboxNext')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    updateLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') lightboxModal.classList.remove('active');
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev')?.click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext')?.click();
  });
}
