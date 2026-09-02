"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, Percent, ShieldCheck, Home } from "lucide-react";

export function MortgageEstimator() {
  const [homePrice, setHomePrice] = useState(849900);
  const [downPercent, setDownPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanYears, setLoanYears] = useState(30);

  // Financial calculations
  const downPaymentAmount = homePrice * (downPercent / 100);
  const principal = Math.max(0, homePrice - downPaymentAmount);
  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = loanYears * 12;

  let monthlyPI = 0;
  if (monthlyRate > 0 && totalMonths > 0) {
    monthlyPI =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  } else {
    monthlyPI = principal / totalMonths;
  }

  // Est. NH Property Tax (~1.2% annual) & Insurance (~0.3% annual)
  const monthlyTax = (homePrice * 0.012) / 12;
  const monthlyIns = (homePrice * 0.003) / 12;
  const totalMonthly = monthlyPI + monthlyTax + monthlyIns;

  const piPct = Math.round((monthlyPI / totalMonthly) * 100) || 75;
  const taxPct = Math.round((monthlyTax / totalMonthly) * 100) || 18;
  const insPct = Math.max(1, 100 - piPct - taxPct);

  return (
    <section id="mortgage" className="py-16 bg-card text-foreground border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500">
            <Calculator className="w-3.5 h-3.5" />
            <span>PAYMENT CALCULATOR</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-foreground">
            Interactive Mortgage &amp; Monthly Payment Estimator
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Calculate your estimated monthly payment for 77 Example Road based on down payment and current loan terms.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="p-6 sm:p-8 rounded-3xl bg-background border border-border shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="space-y-4 text-xs">
              
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Home Purchase Price</span>
                  <span className="font-mono text-primary font-bold">
                    ${homePrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="1500000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Down Payment ({downPercent}%)</span>
                  <span className="font-mono text-foreground font-bold">
                    ${Math.round(downPaymentAmount).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={downPercent}
                  onChange={(e) => setDownPercent(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Interest Rate</span>
                  <span className="font-mono text-foreground font-bold">
                    {interestRate.toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="4.5"
                  max="10.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-foreground block">Loan Term</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLoanYears(30)}
                    className={`py-2 rounded-xl font-bold transition-all text-xs ${
                      loanYears === 30
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    30-Year Fixed
                  </button>
                  <button
                    onClick={() => setLoanYears(15)}
                    className={`py-2 rounded-xl font-bold transition-all text-xs ${
                      loanYears === 15
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    15-Year Fixed
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Payment Output & Stacked Bar */}
            <div className="p-6 rounded-2xl bg-card border border-border space-y-6 shadow-sm">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold">
                  ESTIMATED TOTAL PAYMENT
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-foreground">
                  ${Math.round(totalMonthly).toLocaleString()}<span className="text-base text-muted-foreground font-normal">/mo</span>
                </div>
              </div>

              {/* Stacked Breakdown Bar */}
              <div className="space-y-2">
                <div className="w-full h-3.5 rounded-full overflow-hidden flex bg-muted shadow-inner">
                  <div style={{ width: `${piPct}%` }} className="bg-blue-600 transition-all duration-300" title="Principal & Interest" />
                  <div style={{ width: `${taxPct}%` }} className="bg-emerald-500 transition-all duration-300" title="Property Tax" />
                  <div style={{ width: `${insPct}%` }} className="bg-amber-500 transition-all duration-300" title="Home Insurance" />
                </div>

                <div className="space-y-2 text-xs pt-1">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                      <span>Principal &amp; Interest ({loanYears}yr)</span>
                    </span>
                    <span className="font-mono font-bold text-foreground">
                      ${Math.round(monthlyPI).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Rockingham County Property Tax</span>
                    </span>
                    <span className="font-mono font-bold text-foreground">
                      ${Math.round(monthlyTax).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                      <span>Homeowner&apos;s Insurance (Est.)</span>
                    </span>
                    <span className="font-mono font-bold text-foreground">
                      ${Math.round(monthlyIns).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-muted-foreground pt-1 border-t border-border">
                *Estimated based on current NH rates. Consult with a qualified mortgage lender for exact loan pre-approval.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
