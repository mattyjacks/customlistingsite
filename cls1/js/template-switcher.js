/* ==========================================================================
   Modular JS: Template Switcher & Dynamic Layout Flow Engine (Random On Refresh)
   ========================================================================== */

export function initTemplateSwitcher() {
  const tplBtns = document.querySelectorAll('.tpl-btn');
  const body = document.body;
  const templates = ['editorial', 'midnight', 'coastal', 'swiss', 'heritage', 'blueprint'];

  // Always start on the first theme ('editorial')
  applyTemplate('editorial');

  // Allow manual switching via toolbar buttons
  tplBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const templateName = btn.dataset.template;
      applyTemplate(templateName);
    });
  });

  function applyTemplate(templateName) {
    // 1. Remove all theme classes
    body.classList.remove('theme-editorial', 'theme-midnight', 'theme-coastal', 'theme-swiss', 'theme-heritage', 'theme-blueprint');
    // Add active theme class
    body.classList.add(`theme-${templateName}`);

    // 2. Toggle active layout flow container visibility
    const flows = document.querySelectorAll('.template-flow');
    flows.forEach(flow => {
      if (flow.classList.contains(`flow-${templateName}`)) {
        flow.style.display = 'block';
      } else {
        flow.style.display = 'none';
      }
    });

    // 3. Update active state on toolbar buttons
    tplBtns.forEach(b => {
      if (b.dataset.template === templateName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    console.log(`[Template Switcher] Applied template flow: theme-${templateName} / flow-${templateName}`);
  }
}
