/* ==========================================================================
   Modular JS: Satellite Map & Street View Dual Split Engine
   ========================================================================== */

export function initStreetView() {
  const panLeftBtns = document.querySelectorAll('.svPanLeft');
  const panRightBtns = document.querySelectorAll('.svPanRight');
  const zoomInBtns = document.querySelectorAll('.svZoomIn');
  const zoomOutBtns = document.querySelectorAll('.svZoomOut');
  const svImages = document.querySelectorAll('.svImage');
  
  const mapZoomInBtns = document.querySelectorAll('.mapZoomIn');
  const mapZoomOutBtns = document.querySelectorAll('.mapZoomOut');
  const mapImages = document.querySelectorAll('.mapImage');

  const mediaTabBtns = document.querySelectorAll('.media-tab-btn');
  const mediaPanels = document.querySelectorAll('.media-view-panel');
  const toggleSplitBtns = document.querySelectorAll('.toggleSplitBtn');

  let currentPanX = 0;
  let currentZoom = 1;
  let currentMapZoom = 1;

  // 1. Street View Pan & Zoom Controls
  panLeftBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentPanX += 15;
      updateSvTransform();
    });
  });

  panRightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentPanX -= 15;
      updateSvTransform();
    });
  });

  zoomInBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentZoom < 1.6) {
        currentZoom += 0.15;
        updateSvTransform();
      }
    });
  });

  zoomOutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentZoom > 0.85) {
        currentZoom -= 0.15;
        updateSvTransform();
      }
    });
  });

  function updateSvTransform() {
    svImages.forEach(img => {
      img.style.transform = `scale(${currentZoom}) translateX(${currentPanX}px)`;
      img.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  }

  // 2. Map Zoom Controls
  mapZoomInBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentMapZoom < 1.5) {
        currentMapZoom += 0.15;
        updateMapTransform();
      }
    });
  });

  mapZoomOutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentMapZoom > 0.85) {
        currentMapZoom -= 0.15;
        updateMapTransform();
      }
    });
  });

  function updateMapTransform() {
    mapImages.forEach(img => {
      img.style.transform = `scale(${currentMapZoom})`;
      img.style.transition = 'transform 0.3s ease';
    });
  }

  // 3. Dual Split View Toggle
  toggleSplitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentContainer = btn.closest('.section-card')?.querySelector('.dual-google-split');
      if (parentContainer) {
        parentContainer.classList.toggle('stacked-mode');
        btn.textContent = parentContainer.classList.contains('stacked-mode') 
          ? '🔄 Side-by-Side Dual View' 
          : '↕ Stacked View';
      }
    });
  });

  // 4. Media View Tab Switcher (Photos / Dual Map-StreetView / Street View / Maps / Embed / Blueprint)
  mediaTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentCard = btn.closest('.section-card');
      if (!parentCard) return;

      const targetView = btn.dataset.view;
      const cardTabBtns = parentCard.querySelectorAll('.media-tab-btn');
      const cardPanels = parentCard.querySelectorAll('.media-view-panel');

      cardTabBtns.forEach(b => b.classList.remove('active'));
      cardPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = parentCard.querySelector(`.media-panel-${targetView}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}
