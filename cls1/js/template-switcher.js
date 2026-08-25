/* ==========================================================================
   Modular JS: Template Switcher Engine
   ========================================================================== */

export function initTemplateSwitcher() {
  const tplBtns = document.querySelectorAll('.tpl-btn');
  const body = document.body;

  // Retrieve stored template or default to 'editorial'
  const savedTemplate = localStorage.getItem('selected_property_template') || 'editorial';
  applyTemplate(savedTemplate);

  tplBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const templateName = btn.dataset.template;
      applyTemplate(templateName);
      localStorage.setItem('selected_property_template', templateName);
    });
  });

  function applyTemplate(templateName) {
    // Remove all theme classes
    body.classList.remove('theme-editorial', 'theme-midnight', 'theme-coastal', 'theme-swiss', 'theme-heritage');
    // Add active theme class
    body.classList.add(`theme-${templateName}`);

    // Update active state on toolbar buttons
    tplBtns.forEach(b => {
      if (b.dataset.template === templateName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    console.log(`[Template Switcher] Applied template: theme-${templateName}`);
  }
}
