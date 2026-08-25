/* ==========================================================================
   Modular JS: Realtor ROI & Commission Calculator
   ========================================================================== */

export function initCalculator() {
  const propPriceSlider = document.getElementById('propPriceSlider');
  const priceDisplay = document.getElementById('priceDisplay');
  const calcCommission = document.getElementById('calcCommission');
  const calcRoi = document.getElementById('calcRoi');

  function updateCalculator() {
    if (!propPriceSlider) return;
    const price = parseInt(propPriceSlider.value, 10);
    if (priceDisplay) priceDisplay.textContent = '$' + price.toLocaleString();
    
    // Commission at 2.5%
    const comm = Math.round(price * 0.025);
    if (calcCommission) calcCommission.textContent = '$' + comm.toLocaleString();
    
    // Custom site cost ~$499
    const roiMultiplier = Math.round(comm / 499);
    if (calcRoi) calcRoi.textContent = roiMultiplier + 'x ROI';
  }

  if (propPriceSlider) {
    propPriceSlider.addEventListener('input', updateCalculator);
    updateCalculator();
  }
}
