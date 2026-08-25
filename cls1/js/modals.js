/* ==========================================================================
   Modular JS: Order Site Modal & Tour Showing Booking Modal
   ========================================================================== */

export function initModals() {
  // 1. Order Custom Property Site Modal
  const orderModal = document.getElementById('orderModal');
  const openOrderBtns = document.querySelectorAll('.open-order-modal');
  const closeOrderBtn = document.getElementById('closeOrderModal');
  const orderForm = document.getElementById('orderForm');

  openOrderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      orderModal?.classList.add('active');
    });
  });

  closeOrderBtn?.addEventListener('click', () => {
    orderModal?.classList.remove('active');
  });

  orderModal?.addEventListener('click', (e) => {
    if (e.target === orderModal) {
      orderModal.classList.remove('active');
    }
  });

  orderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your custom property website order has been received. Our team will send your preview link within 24 hours.');
    orderModal?.classList.remove('active');
    orderForm.reset();
  });

  // 2. Private Tour Showing Request Modal
  const showingModal = document.getElementById('showingModal');
  const openShowingBtns = document.querySelectorAll('.open-showing-modal');
  const closeShowingBtn = document.getElementById('closeShowingModal');
  const showingForm = document.getElementById('showingForm');

  openShowingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showingModal?.classList.add('active');
    });
  });

  closeShowingBtn?.addEventListener('click', () => {
    showingModal?.classList.remove('active');
  });

  showingModal?.addEventListener('click', (e) => {
    if (e.target === showingModal) {
      showingModal.classList.remove('active');
    }
  });

  showingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Tour Request Sent! Example Realty has received your request for 77 Example Road, Chester NH.');
    showingModal?.classList.remove('active');
    showingForm.reset();
  });
}
