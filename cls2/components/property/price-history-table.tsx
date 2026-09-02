import React from "react";
import { History, TrendingUp, CheckCircle2 } from "lucide-react";
import { PRICE_HISTORY } from "@/lib/property-data";

export function PriceHistoryTable() {
  return (
    <section id="price-history" className="py-16 bg-card text-foreground border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-foreground">
              Price &amp; Tax Assessment History
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Public MLS transaction records and official Rockingham County tax assessment history.
            </p>
          </div>
        </div>

        {/* Table Wrap */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-md">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <th className="p-4">Date</th>
                <th className="p-4">Event</th>
                <th className="p-4">Price</th>
                <th className="p-4">Price/SqFt</th>
                <th className="p-4">Source / Record</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs sm:text-sm">
              {PRICE_HISTORY.map((row, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono font-medium text-foreground">{row.date}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      row.event.includes("Active")
                        ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                        : "bg-blue-500/10 text-blue-500"
                    }`}>
                      {row.event}
                    </span>
                  </td>
                  <td className="p-4 font-mono font-extrabold text-foreground">
                    ${row.price.toLocaleString()}
                  </td>
                  <td className="p-4 font-mono text-muted-foreground">
                    ${row.pricePerSqft}/sqft
                  </td>
                  <td className="p-4 text-xs text-muted-foreground">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
