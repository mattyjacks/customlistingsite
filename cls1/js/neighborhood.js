/* ==========================================================================
   Modular JS: Neighborhood Amenities & School Scores Filter Engine
   ========================================================================== */

export function initNeighborhood() {
  const filterBtns = document.querySelectorAll('.nb-filter-btn');
  const items = document.querySelectorAll('.nb-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentCard = btn.closest('.section-card, .heritage-framed-card');
      if (!parentCard) return;

      const category = btn.dataset.category;
      const cardFilterBtns = parentCard.querySelectorAll('.nb-filter-btn');
      const cardItems = parentCard.querySelectorAll('.nb-item');

      cardFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cardItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
