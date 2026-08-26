/* ==========================================================================
   Modular JS: Google Maps & Street View Dual Split Engine
   ========================================================================== */

export function initStreetView() {
  const panLeftBtn = document.getElementById('svPanLeft');
  const panRightBtn = document.getElementById('svPanRight');
  const zoomInBtn = document.getElementById('svZoomIn');
  const zoomOutBtn = document.getElementById('svZoomOut');
  const svImage = document.getElementById('svImage');
  
  const mapZoomInBtn = document.getElementById('mapZoomIn');
  const mapZoomOutBtn = document.getElementById('mapZoomOut');
  const mapImage = document.getElementById('mapImage');

  const mediaTabBtns = document.querySelectorAll('.media-tab-btn');
  const mediaPanels = document.querySelectorAll('.media-view-panel');
  const toggleSplitBtn = document.getElementById('toggleSplitBtn');
  const dualViewContainer = document.getElementById('dualViewContainer');

  let currentPanX = 0;
  let currentZoom = 1;
  let currentMapZoom = 1;

  // 1. Street View Pan & Zoom Controls
  if (panLeftBtn && svImage) {
    panLeftBtn.addEventListener('click', () => {
      currentPanX += 15;
      updateSvTransform();
    });
  }

  if (panRightBtn && svImage) {
    panRightBtn.addEventListener('click', () => {
      currentPanX -= 15;
      updateSvTransform();
    });
  }

  if (zoomInBtn && svImage) {
    zoomInBtn.addEventListener('click', () => {
      if (currentZoom < 1.6) {
        currentZoom += 0.15;
        updateSvTransform();
      }
    });
  }

  if (zoomOutBtn && svImage) {
    zoomOutBtn.addEventListener('click', () => {
      if (currentZoom > 0.85) {
        currentZoom -= 0.15;
        updateSvTransform();
      }
    });
  }

  function updateSvTransform() {
    if (svImage) {
      svImage.style.transform = `scale(${currentZoom}) translateX(${currentPanX}px)`;
      svImage.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  }

  // 2. Google Maps Zoom Controls
  if (mapZoomInBtn && mapImage) {
    mapZoomInBtn.addEventListener('click', () => {
      if (currentMapZoom < 1.5) {
        currentMapZoom += 0.15;
        updateMapTransform();
      }
    });
  }

  if (mapZoomOutBtn && mapImage) {
    mapZoomOutBtn.addEventListener('click', () => {
      if (currentMapZoom > 0.85) {
        currentMapZoom -= 0.15;
        updateMapTransform();
      }
    });
  }

  function updateMapTransform() {
    if (mapImage) {
      mapImage.style.transform = `scale(${currentMapZoom})`;
      mapImage.style.transition = 'transform 0.3s ease';
    }
  }

  // 3. Dual Split View Toggle
  if (toggleSplitBtn && dualViewContainer) {
    toggleSplitBtn.addEventListener('click', () => {
      dualViewContainer.classList.toggle('stacked-mode');
      if (dualViewContainer.classList.contains('stacked-mode')) {
        toggleSplitBtn.textContent = '🔄 Side-by-Side Dual View';
      } else {
        toggleSplitBtn.textContent = '↕ Stacked View';
      }
    });
  }

  // 4. Media View Tab Switcher (Photos / Dual Map-StreetView / Street View / Maps / Aerial / Blueprint)
  mediaTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.dataset.view;
      mediaTabBtns.forEach(b => b.classList.remove('active'));
      mediaPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`media-panel-${targetView}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}
