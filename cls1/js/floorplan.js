/* ==========================================================================
   Modular JS: Floorplan Hotspot Pins & Coastal Walkthrough Tabs
   ========================================================================== */

import { galleryItems } from './gallery.js';

export function initFloorplan() {
  // 1. Interactive Floorplan Pins Logic
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

  const fpGraphics = document.querySelectorAll('.fpGraphic');
  const fpTabs = document.querySelectorAll('.fp-tab-btn');

  function renderFloorplan(level) {
    fpGraphics.forEach(fpGraphic => {
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

  // 2. Coastal Resort Walkthrough Tabs Engine
  const coastalTabs = document.querySelectorAll('.coastal-tab-btn');
  const coastalPanels = document.querySelectorAll('.coastal-tab-panel');

  coastalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanelId = tab.dataset.panel;
      coastalTabs.forEach(t => t.classList.remove('active'));
      coastalPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const activePanel = document.getElementById(targetPanelId);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}
