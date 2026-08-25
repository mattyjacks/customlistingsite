/* ==========================================================================
   Master JS Launcher: Initializes Modular Components
   ========================================================================== */

import { initTemplateSwitcher } from './template-switcher.js';
import { initGallery } from './gallery.js';
import { initFloorplan } from './floorplan.js';
import { initCalculator } from './calculator.js';
import { initModals } from './modals.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('[App] Initializing Bespoke Custom Property Site Engine...');
  initTemplateSwitcher();
  initGallery();
  initFloorplan();
  initCalculator();
  initModals();
});
