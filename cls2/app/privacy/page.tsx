"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { ClarityMouseTracker } from "@/components/analytics/clarity-mouse-tracker";
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  FileText, 
  Server, 
  Cpu, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink,
  Cookie,
  Activity
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [isHeatmapActive, setIsHeatmapActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
      <SiteHeader
        onToggleHeatmap={() => setIsHeatmapActive(!isHeatmapActive)}
        isHeatmapActive={isHeatmapActive}
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-10">
        
        {/* Title Header Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-950 via-slate-900 to-obsidian-950 text-white border border-white/15 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4" />
            <span>STATUTORY COMPLIANCE: NEW HAMPSHIRE RSA 507-H</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white">
            Privacy Policy &amp; Cookie Policy
          </h1>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-2 border-t border-white/10 font-mono">
            <div>Effective Date: <strong className="text-amber-400">August 25, 2026</strong></div>
            <div>Company: <strong className="text-slate-200">MattyJacks LLC</strong></div>
            <div>Jurisdiction: <strong className="text-slate-200">New Hampshire, USA (NH RSA 507-H)</strong></div>
          </div>
        </div>

        {/* Section 1: Overview & New Hampshire Jurisdiction */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <span>1. Overview &amp; Statutory Jurisdiction</span>
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            At <strong>MattyJacks LLC</strong> (operating single-property showcase websites including <em>CustomListingSite</em> and <em>77 Example Road Showcase</em>), we respect your personal privacy. This Privacy Policy describes how we collect, store, safeguard, and process information when you visit our property websites, test our interactive control panel studio, or schedule private property showings.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            This policy has been authored to directly adhere to the statutory consumer data protections established under the <strong>New Hampshire Data Privacy Act (NHDPA, codified at NH RSA 507-H)</strong>. <strong>MattyJacks LLC does NOT sell personal data to data brokers, advertising networks, or unauthorized third parties.</strong>
          </p>
        </section>

        {/* Section 2: Hosting & Infrastructure Providers */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <Server className="w-5 h-5 text-purple-500" />
            <span>2. Cloud Infrastructure &amp; Technical Processors</span>
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            To deliver global sub-100ms speeds, DDoS protection, and high-availability uptime, our web platform utilizes certified enterprise infrastructure providers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                <span>Vercel Inc. (Edge Web Hosting)</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our Next.js 15 server components and static assets are hosted on Vercel Inc. Vercel processes standard HTTP requests, temporary IP logs, and edge routing caches under strict data processing addendums.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                <span>Cloudflare, Inc. (DNS &amp; TLS 1.3 Security)</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our domains are registered and safeguarded via Cloudflare, Inc. Cloudflare acts as our DNS, Content Delivery Network (CDN), and Web Application Firewall (WAF) to encrypt traffic and block malicious bot traffic.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Categories of Data Collected */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-500" />
            <span>3. Categories of Personal Data We Collect</span>
          </h2>

          <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-5">
            <li>
              <strong className="text-foreground">Voluntarily Provided Tour &amp; Order Information:</strong> When scheduling a private residence walkthrough or configuring a custom listing site, you may provide your full name, email address, mobile phone number, buyer representation status, and preferred tour appointment time.
            </li>
            <li>
              <strong className="text-foreground">Automatically Collected Edge Telemetry:</strong> Standard HTTP request headers (IP address, device viewport, browser user-agent, referring URL, time of access) collected automatically by Vercel and Cloudflare for routing and security.
            </li>
            <li>
              <strong className="text-foreground">Client-Side Dwell &amp; Interaction Telemetry:</strong> Anonymized client-side mouse trajectory and dwell duration used exclusively by our local Multi-Armed Bandit algorithm to optimize layout display weights without transmitting identifiable personal records.
            </li>
          </ul>
        </section>

        {/* Section 4: Consumer Rights Under NH RSA 507-H */}
        <section id="consumer-rights" className="p-6 sm:p-8 rounded-2xl bg-card border-2 border-emerald-500/30 space-y-4 shadow-sm">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>4. Your Consumer Rights Under New Hampshire Law (NH RSA 507-H)</span>
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Pursuant to the <strong>New Hampshire Data Privacy Act (NH RSA 507-H:4)</strong>, consumers residing in New Hampshire possess the following guaranteed statutory rights:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
              <div className="font-bold text-foreground">Right to Confirm &amp; Access</div>
              <p className="text-muted-foreground">Confirm whether MattyJacks LLC processes your personal data and obtain a copy of such data.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
              <div className="font-bold text-foreground">Right to Correct Inaccuracies</div>
              <p className="text-muted-foreground">Request correction of any inaccurate or outdated personal data retained in our records.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
              <div className="font-bold text-foreground">Right to Delete</div>
              <p className="text-muted-foreground">Request the complete deletion of personal data provided by or collected about you.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
              <div className="font-bold text-foreground">Right to Data Portability</div>
              <p className="text-muted-foreground">Obtain your personal data in a portable, readily usable format (JSON or CSV).</p>
            </div>

            <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
              <div className="font-bold text-foreground">Right to Opt-Out</div>
              <p className="text-muted-foreground">Opt out of targeted advertising, sale of personal data, or automated profiling. (MattyJacks LLC never sells data).</p>
            </div>

            <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
              <div className="font-bold text-foreground">Right to Non-Discrimination</div>
              <p className="text-muted-foreground">We will never deny services, charge different prices, or degrade quality for exercising your privacy rights.</p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground pt-2">
            <strong>Statutory Response Timeline:</strong> MattyJacks LLC shall respond to consumer rights requests within <strong>45 days</strong> of receipt as required by NH RSA 507-H:4(III). In the event of an appeal, consumers may file a complaint with the New Hampshire Attorney General&apos;s Consumer Protection Bureau.
          </p>
        </section>

        {/* Section 5: Cookie Policy */}
        <section id="cookie-policy" className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <Cookie className="w-5 h-5 text-amber-500" />
            <span>5. Comprehensive Cookie Policy</span>
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            We employ cookies and local browser storage (such as <code>localStorage</code> and <code>sessionStorage</code>) for three transparent purposes:
          </p>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-muted/30 border border-border flex justify-between items-center">
              <div>
                <strong className="text-foreground">1. Strictly Necessary (Essential):</strong>
                <span className="text-muted-foreground ml-1">Session tokens, security verification, theme preference.</span>
              </div>
              <span className="font-mono font-bold text-emerald-500 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                ALWAYS ACTIVE
              </span>
            </div>

            <div className="p-3 rounded-xl bg-muted/30 border border-border flex justify-between items-center">
              <div>
                <strong className="text-foreground">2. Multi-Armed Bandit Telemetry:</strong>
                <span className="text-muted-foreground ml-1">Client-side dwell time, variant selection seeds, and scroll telemetry.</span>
              </div>
              <span className="font-mono text-muted-foreground text-[10px]">
                Configurable in Cookie Banner
              </span>
            </div>

            <div className="p-3 rounded-xl bg-muted/30 border border-border flex justify-between items-center">
              <div>
                <strong className="text-foreground">3. Anonymous Performance Analytics:</strong>
                <span className="text-muted-foreground ml-1">Aggregated Core Web Vitals page response metrics.</span>
              </div>
              <span className="font-mono text-muted-foreground text-[10px]">
                Configurable in Cookie Banner
              </span>
            </div>
          </div>
        </section>

        {/* Section 6: Official Privacy Contact Box */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-card to-card border-2 border-amber-500/30 space-y-4 shadow-lg">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-500" />
            <span>6. Official Privacy Contact &amp; Submitting Requests</span>
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            To submit an official consumer rights request under NH RSA 507-H (access, deletion, correction, or opt-out), or for inquiries regarding data governance, please reach our designated Privacy Official directly:
          </p>

          <div className="p-5 rounded-2xl bg-background border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-bold text-foreground text-sm">
                MattyJacks LLC &bull; Privacy Official
              </div>
              <div className="text-xs text-muted-foreground">
                Chester, New Hampshire 03036, USA
              </div>
              <div className="text-xs font-mono text-amber-500 font-bold">
                Matt@MattyJacks.com
              </div>
            </div>

            <a
              href="mailto:Matt@MattyJacks.com?subject=NH%20RSA%20507-H%20Privacy%20Inquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20 shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Privacy Officer</span>
            </a>
          </div>
        </section>

      </main>

      <SiteFooter />
      <CookieConsentBanner />
      <ClarityMouseTracker isActive={isHeatmapActive} />
    </div>
  );
}
