/* ==========================================================================
   Custom Listing Site by MattyJacks.com - Interactive Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Promo Top Bar Close
  const promoCloseBtn = document.getElementById('promoCloseBtn');
  const promoBar = document.getElementById('promoBar');
  if (promoCloseBtn && promoBar) {
    promoCloseBtn.addEventListener('click', () => {
      promoBar.style.display = 'none';
      document.querySelector('.site-header').style.top = '0px';
    });
  }

  // 2. Features Accordion
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 3. Gallery Filtering & Lightbox
  const galleryItems = [
    { title: 'Golden Hour Shoreline View', category: 'exterior', src: 'images/hero.jpg' },
    { title: 'Great Room with Stone Fireplace', category: 'interior', src: 'images/living_room.jpg' },
    { title: 'Gourmet Chef\'s Kitchen', category: 'kitchen', src: 'images/kitchen.jpg' },
    { title: 'Primary Master Suite & Balcony', category: 'master', src: 'images/master_suite.jpg' },
    { title: 'Aerial Lakefront Overview', category: 'aerial', src: 'images/aerial.jpg' }
  ];

  let currentGalleryIndex = 0;
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    
    galleryItems.forEach((item, index) => {
      if (filter === 'all' || item.category === filter) {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
          <div class="gallery-card-overlay">
            <div>
              <div class="gallery-card-category">${item.category}</div>
              <div class="gallery-card-title">${item.title}</div>
            </div>
          </div>
        `;
        card.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(card);
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightbox();
    lightboxModal.classList.add('active');
  }

  function updateLightbox() {
    const item = galleryItems[currentGalleryIndex];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.title + ` (${item.category.toUpperCase()})`;
  }

  document.getElementById('lightboxClose')?.addEventListener('click', () => {
    lightboxModal.classList.remove('active');
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
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') lightboxModal.classList.remove('active');
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });

  renderGallery('all');

  // 4. Floorplan Interactive Tabs & Pins
  const floorplanData = {
    main: [
      { top: '45%', left: '30%', label: 'Great Room & Fireplace', img: 'images/living_room.jpg' },
      { top: '35%', left: '70%', label: 'Gourmet Chef Kitchen', img: 'images/kitchen.jpg' },
      { top: '65%', left: '50%', label: 'Lakefront Covered Terrace', img: 'images/hero.jpg' }
    ],
    upper: [
      { top: '40%', left: '40%', label: 'Primary Master Suite', img: 'images/master_suite.jpg' },
      { top: '60%', left: '75%', label: 'Guest Suite 1 & Bath', img: 'images/master_suite.jpg' }
    ],
    grounds: [
      { top: '70%', left: '25%', label: 'Private Mahogany Dock & Slip', img: 'images/aerial.jpg' },
      { top: '50%', left: '60%', label: 'Granite Stone Fire Pit', img: 'images/hero.jpg' }
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
      
      pinEl.innerHTML += `
        <div class="pin-tooltip">
          <strong>${pin.label}</strong>
          <br/><span style="color:var(--primary-gold)">Click to preview view</span>
        </div>
      `;
      
      pinEl.addEventListener('click', () => {
        alert(`📍 Room Hotspot Preview: ${pin.label}`);
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
      orderModal.classList.add('active');
    });
  });

  closeOrderBtn?.addEventListener('click', () => {
    orderModal.classList.remove('active');
  });

  orderModal?.addEventListener('click', (e) => {
    if (e.target === orderModal) {
      orderModal.classList.remove('active');
    }
  });

  orderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('🎉 Thank you! Your custom listing site request has been submitted to MattyJacks.com. Our AI crafting engine is initializing your draft site. Check your email for a preview link within 24 hours!');
    orderModal.classList.remove('active');
    orderForm.reset();
  });
});
