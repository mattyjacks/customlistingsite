/* ==========================================================================
   Modular JS: Realtor ROI Calculator & Mortgage Payment Estimator Engine
   ========================================================================== */

export function initCalculator() {
  // 1. Realtor ROI Calculator
  const propPriceSlider = document.getElementById('propPriceSlider');
  const priceDisplay = document.getElementById('priceDisplay');
  const calcCommission = document.getElementById('calcCommission');
  const calcRoi = document.getElementById('calcRoi');
  const customDomainInput = document.getElementById('customDomainInput');
  const domainPreviewText = document.getElementById('domainPreviewText');

  function updateRoiCalculator() {
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
    propPriceSlider.addEventListener('input', updateRoiCalculator);
    updateRoiCalculator();
  }

  if (customDomainInput && domainPreviewText) {
    customDomainInput.addEventListener('input', () => {
      let val = customDomainInput.value.trim().toLowerCase();
      if (!val) {
        val = '77exampleroad.com';
      } else {
        val = val.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
        if (!val.includes('.')) val += '.com';
      }
      domainPreviewText.textContent = `https://www.${val}`;
    });
  }

  // 2. Interactive Mortgage & Monthly Payment Estimator
  const mortgageContainers = document.querySelectorAll('.mortgage-calculator-box');
  mortgageContainers.forEach(container => {
    const priceInput = container.querySelector('.mortgage-price-input');
    const downInput = container.querySelector('.mortgage-down-input');
    const rateInput = container.querySelector('.mortgage-rate-input');
    const termSelect = container.querySelector('.mortgage-term-select');

    const totalOutput = container.querySelector('.mortgage-total-val');
    const piOutput = container.querySelector('.mortgage-pi-val');
    const taxOutput = container.querySelector('.mortgage-tax-val');
    const insOutput = container.querySelector('.mortgage-ins-val');
    
    const barPi = container.querySelector('.bar-pi');
    const barTax = container.querySelector('.bar-tax');
    const barIns = container.querySelector('.bar-ins');

    function calculateMortgage() {
      if (!priceInput || !downInput || !rateInput || !termSelect) return;

      const homePrice = parseFloat(priceInput.value) || 849900;
      const downPercent = parseFloat(downInput.value) || 20;
      const annualRate = parseFloat(rateInput.value) || 6.5;
      const years = parseInt(termSelect.value, 10) || 30;

      const downPaymentAmount = homePrice * (downPercent / 100);
      const principal = homePrice - downPaymentAmount;
      const monthlyRate = (annualRate / 100) / 12;
      const totalPayments = years * 12;

      let monthlyPI = 0;
      if (monthlyRate > 0) {
        monthlyPI = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
      } else {
        monthlyPI = principal / totalPayments;
      }

      // Est. Property Tax (~1.2% annual) & Home Insurance (~0.3% annual)
      const monthlyTax = (homePrice * 0.012) / 12;
      const monthlyIns = (homePrice * 0.003) / 12;
      const totalMonthly = monthlyPI + monthlyTax + monthlyIns;

      if (totalOutput) totalOutput.textContent = '$' + Math.round(totalMonthly).toLocaleString() + '/mo';
      if (piOutput) piOutput.textContent = '$' + Math.round(monthlyPI).toLocaleString();
      if (taxOutput) taxOutput.textContent = '$' + Math.round(monthlyTax).toLocaleString();
      if (insOutput) insOutput.textContent = '$' + Math.round(monthlyIns).toLocaleString();

      if (barPi && barTax && barIns) {
        const piPct = (monthlyPI / totalMonthly) * 100;
        const taxPct = (monthlyTax / totalMonthly) * 100;
        const insPct = (monthlyIns / totalMonthly) * 100;

        barPi.style.width = piPct + '%';
        barTax.style.width = taxPct + '%';
        barIns.style.width = insPct + '%';
      }
    }

    [priceInput, downInput, rateInput, termSelect].forEach(input => {
      if (input) {
        input.addEventListener('input', calculateMortgage);
        input.addEventListener('change', calculateMortgage);
      }
    });

    calculateMortgage();
  });
}
