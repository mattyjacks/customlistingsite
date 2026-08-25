/* ==========================================================================
   Zillow / Redfin Style Property Detail Page - Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Promo Top Bar Dismiss
  const promoCloseBtn = document.getElementById('promoCloseBtn');
  const promoBar = document.getElementById('promoBar');
  if (promoCloseBtn && promoBar) {
    promoCloseBtn.addEventListener('click', () => {
      promoBar.style.display = 'none';
      const header = document.querySelector('.site-header');
      if (header) header.style.top = '0px';
    });
  }

  // 2. Photo Gallery & Lightbox Modal
  const galleryItems = [
    { title: '42 Lakeview Ridge Rd Unit B - Exterior & Walkway', category: 'EXTERIOR', src: 'images/hero.jpg' },
    { title: 'Empty Living Space & Window', category: 'INTERIOR', src: 'images/living_room.jpg' },
    { title: 'Kitchen with Slate-Blue Cabinets & Mosaic Tile Counter', category: 'KITCHEN', src: 'images/kitchen.jpg' },
    { title: 'Hallway Bathroom & Bifold Closet', category: 'BATHROOM', src: 'images/master_suite.jpg' },
    { title: 'Building Complex Aerial & Parking Lot', category: 'EXTERIOR', src: 'images/aerial.jpg' }
  ];

  let currentGalleryIndex = 0;
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const openGalleryBtn = document.getElementById('openGalleryBtn');
  const collageItems = document.querySelectorAll('.collage-item');

  function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightbox();
    if (lightboxModal) lightboxModal.classList.add('active');
  }

  function updateLightbox() {
    if (!lightboxImg || !lightboxCaption) return;
    const item = galleryItems[currentGalleryIndex];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = `${item.title} (${currentGalleryIndex + 1} of ${galleryItems.length})`;
  }

  collageItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index || '0', 10);
      openLightbox(idx);
    });
  });

  if (openGalleryBtn) {
    openGalleryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(0);
    });
  }

  document.getElementById('lightboxClose')?.addEventListener('click', () => {
    lightboxModal?.classList.remove('active');
  });

  document.getElementById('lightboxPrev')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
  });

  document.getElementById('lightboxNext')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    updateLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') lightboxModal.classList.remove('active');
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev')?.click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext')?.click();
  });

  // 3. Tour Type & Date Picker Toggles (Sticky Sidebar Widget)
  const tourTypeBtns = document.querySelectorAll('.tour-type-btn');
  tourTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tourTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const datePills = document.querySelectorAll('.date-pill');
  datePills.forEach(pill => {
    pill.addEventListener('click', () => {
      datePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // 4. Floorplan Interactive Tabs & Hotspot Pins
  const floorplanData = {
    main: [
      { top: '45%', left: '30%', label: 'Empty Living Space', img: 'images/living_room.jpg' },
      { top: '35%', left: '70%', label: 'Kitchen & Counter', img: 'images/kitchen.jpg' },
      { top: '65%', left: '50%', label: 'Exterior Walkway', img: 'images/hero.jpg' }
    ],
    upper: [
      { top: '40%', left: '40%', label: 'Hallway Bathroom', img: 'images/master_suite.jpg' },
      { top: '60%', left: '75%', label: 'Secondary Bedroom Space', img: 'images/living_room.jpg' }
    ],
    grounds: [
      { top: '70%', left: '25%', label: 'Asphalt Parking Lot', img: 'images/aerial.jpg' },
      { top: '50%', left: '60%', label: 'Building Entrance Bridge', img: 'images/hero.jpg' }
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
        const matchingIndex = galleryItems.findIndex(g => g.title.toLowerCase().includes(pin.label.toLowerCase().split(' ')[0]));
        openLightbox(matchingIndex !== -1 ? matchingIndex : 0);
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

  // 5. Interactive ROI & Commission Calculator
  const propPriceSlider = document.getElementById('propPriceSlider');
  const priceDisplay = document.getElementById('priceDisplay');
  const calcCommission = document.getElementById('calcCommission');
  const calcRoi = document.getElementById('calcRoi');

  function updateCalculator() {
    if (!propPriceSlider) return;
    const price = parseInt(propPriceSlider.value, 10);
    priceDisplay.textContent = '$' + price.toLocaleString();
    
    // Commission at 2.5%
    const comm = Math.round(price * 0.025);
    calcCommission.textContent = '$' + comm.toLocaleString();
    
    // Custom site cost ~$499
    const roiMultiplier = Math.round(comm / 499);
    calcRoi.textContent = roiMultiplier + 'x ROI';
  }

  if (propPriceSlider) {
    propPriceSlider.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // 6. Order / Custom Site Request Modal
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
    const card = orderModal?.querySelector('.order-modal-card');
    if (card) {
      card.innerHTML = `
        <button class="modal-close" onclick="document.getElementById('orderModal').classList.remove('active')">&times;</button>
        <span class="badge-tag">Request Received</span>
        <h3 style="color: #0f172a; margin-top: 8px; margin-bottom: 12px;">Thank You for Your Order</h3>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
          Your custom property site request has been submitted successfully to <strong>MattyJacks.com</strong>.
          We will send your preview link to <strong>Matt@MattyJacks.com</strong>.
        </p>
        <button class="btn-primary" onclick="document.getElementById('orderModal').classList.remove('active')">Done</button>
      `;
    }
  });

  // 7. Schedule Showing Modal
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
    const card = showingModal?.querySelector('.order-modal-card');
    if (card) {
      card.innerHTML = `
        <button class="modal-close" onclick="document.getElementById('showingModal').classList.remove('active')">&times;</button>
        <span class="badge-tag">Request Confirmed</span>
        <h3 style="color: #0f172a; margin-top: 8px; margin-bottom: 12px;">Showing Request Received</h3>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
          Your tour request for 42 Lakeview Ridge Rd Unit B has been submitted. Agent Matt Jacks (603 999 9420) will reach out shortly to confirm your walkthrough time.
        </p>
        <button class="btn-primary" onclick="document.getElementById('showingModal').classList.remove('active')">Done</button>
      `;
    }
  });

  // 8. Sidebar Quick Contact Form
  const sidebarForm = document.getElementById('sidebarQuickContact');
  if (sidebarForm) {
    sidebarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sidebarForm.innerHTML = `
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px; color: #166534; font-size: 0.88rem; text-align: center;">
          ✓ Question sent to Matt Jacks (Matt@MattyJacks.com / 603 999 9420)!
        </div>
      `;
    });
  }

  // 9. Save & Share Buttons
  const saveBtn = document.getElementById('savePropertyBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const icon = saveBtn.querySelector('svg');
      if (saveBtn.classList.contains('saved')) {
        saveBtn.classList.remove('saved');
        saveBtn.querySelector('span').textContent = 'Save';
        if (icon) icon.style.fill = 'none';
      } else {
        saveBtn.classList.add('saved');
        saveBtn.querySelector('span').textContent = 'Saved';
        if (icon) icon.style.fill = '#ef4444';
      }
    });
  }

  const shareBtn = document.getElementById('sharePropertyBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      navigator.clipboard?.writeText(window.location.href);
      const span = shareBtn.querySelector('span');
      if (span) {
        span.textContent = 'Link Copied!';
        setTimeout(() => { span.textContent = 'Share'; }, 2000);
      }
    });
  }

});
