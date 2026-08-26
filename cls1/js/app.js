/* ==========================================================================
   Master JS Launcher: Initializes Modular Components
   ========================================================================== */

import { initTemplateSwitcher } from './template-switcher.js';
import { initGallery } from './gallery.js';
import { initFloorplan } from './floorplan.js';
import { initCalculator } from './calculator.js';
import { initModals } from './modals.js';
import { initStreetView } from './street-view.js';
import { initNeighborhood } from './neighborhood.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('[App] Initializing Bespoke Custom Property Site Engine with Street View...');
  initTemplateSwitcher();
  initGallery();
  initFloorplan();
  initCalculator();
  initModals();
  initStreetView();
  initNeighborhood();
});
