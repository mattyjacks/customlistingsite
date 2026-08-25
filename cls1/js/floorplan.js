/* ==========================================================================
   Modular JS: Floorplan Hotspot Pins & Levels
   ========================================================================== */

import { galleryItems } from './gallery.js';

export function initFloorplan() {
  const floorplanData = {
    main: [
      { top: '45%', left: '30%', label: 'Sun-Filled Living Area', img: 'images/living_room.jpg' },
      { top: '35%', left: '70%', label: 'Gourmet Kitchen', img: 'images/kitchen.jpg' },
      { top: '65%', left: '50%', label: 'Exterior Walkway', img: 'images/hero.jpg' }
    ],
    upper: [
      { top: '40%', left: '40%', label: 'Primary Suite Sanctuary', img: 'images/master_suite.jpg' },
      { top: '60%', left: '75%', label: 'Living Area View', img: 'images/living_room.jpg' }
    ],
    grounds: [
      { top: '70%', left: '25%', label: 'Aerial Wooded Acreage', img: 'images/aerial.jpg' },
      { top: '50%', left: '60%', label: 'Main Residence Frontage', img: 'images/hero.jpg' }
    ]
  };

  const fpGraphic = document.getElementById('fpGraphic');
  const fpTabs = document.querySelectorAll('.fp-tab-btn');

  function renderFloorplan(level) {
    if (!fpGraphic) return;
    fpGraphic.innerHTML = '';
    
    const pins = floorplanData[level] || [];
    pins.forEach((pin, i) => {
      const pinEl = document.createElement('div');
      pinEl.className = 'fp-pin';
      pinEl.style.top = pin.top;
      pinEl.style.left = pin.left;
      pinEl.textContent = i + 1;
      pinEl.title = pin.label;
      
      pinEl.addEventListener('click', () => {
        const lightboxModal = document.getElementById('lightboxModal');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        if (lightboxModal && lightboxImg && lightboxCaption) {
          lightboxImg.src = pin.img;
          lightboxCaption.textContent = `Room Preview: ${pin.label}`;
          lightboxModal.classList.add('active');
        }
      });
      
      fpGraphic.appendChild(pinEl);
    });
  }

  fpTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      fpTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFloorplan(tab.dataset.level);
    });
  });

  renderFloorplan('main');
}
