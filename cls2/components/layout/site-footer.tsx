import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Server, 
  ExternalLink,
  ArrowUpRight
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full bg-obsidian-950 text-slate-300 border-t border-white/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-amber-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                CustomListingSite<span className="text-amber-400">.com</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The high-performance single-property website platform by <strong className="text-slate-200">MattyJacks LLC</strong>. Engineered with Next.js edge performance, self-optimizing multi-armed bandits, and hyper-local SEO schemas that out-convert standard MLS portals.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Chester, New Hampshire 03036, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href="mailto:Matt@MattyJacks.com" 
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  Matt@MattyJacks.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Platform & Tools
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  77 Example Rd Showcase
                </Link>
              </li>
              <li>
                <Link href="/control-panel" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Free Control Panel</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">
                    NEW
                  </span>
                </Link>
              </li>
              <li>
                <a href="/#features" className="hover:text-amber-400 transition-colors">
                  Working Feature Catalog
                </a>
              </li>
              <li>
                <a href="/#pipeline" className="hover:text-amber-400 transition-colors">
                  Agentic AI Pipeline Demo
                </a>
              </li>
              <li>
                <a href="/#mortgage" className="hover:text-amber-400 transition-colors">
                  Mortgage & ROI Modeler
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Strategy & Sales */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Intelligence & Sales
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/research" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <span>Strategic Business Plan</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/research#luxury-presence" className="hover:text-blue-400 transition-colors">
                  Luxury Presence Teardown
                </Link>
              </li>
              <li>
                <Link href="/playbook" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <span>Cold Calling Decision Tree</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/playbook#psychology" className="hover:text-blue-400 transition-colors">
                  Sales Psychology Masterclass
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Privacy Policy (NH RSA 507-H)</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy#cookie-policy" className="hover:text-emerald-400 transition-colors">
                  Cookie Policy & Telemetry
                </Link>
              </li>
              <li>
                <Link href="/privacy#consumer-rights" className="hover:text-emerald-400 transition-colors">
                  NH Consumer Rights Notice
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:Matt@MattyJacks.com?subject=NH%20RSA%20507-H%20Data%20Request" 
                  className="hover:text-emerald-400 transition-colors text-xs text-slate-500"
                >
                  Submit Privacy Request
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Infrastructure Badges Ribbon */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Infrastructure Stack:</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                Vercel Edge Global CDN
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                Cloudflare DNS / TLS 1.3
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                Next.js 15 Server Components
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                Google Antigravity Cloud Harness
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold font-mono text-[11px]">
              Edge Status: 100% Operational (TTFB &lt; 90ms)
            </span>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong>MattyJacks LLC</strong> &bull; CustomListingSite.com. All Rights Reserved. Fully compliant with New Hampshire Data Privacy Law (NH RSA 507-H).
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/privacy#cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
            <span>&bull;</span>
            <a 
              href="mailto:Matt@MattyJacks.com" 
              className="hover:text-slate-300 transition-colors"
            >
              Contact Officer: Matt@MattyJacks.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
