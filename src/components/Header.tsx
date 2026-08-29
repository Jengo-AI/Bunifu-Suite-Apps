import React from "react";
import { Hammer, Sparkles, Compass, ShieldCheck } from "lucide-react";
import { ECOSYSTEM_METRICS } from "../data/appsData";

interface HeaderProps {
  onExploreClick: () => void;
  activeCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onExploreClick, activeCount }) => {
  return (
    <header className="relative border-b-2 border-[#0A0A0A] bg-[#FAF9F5] overflow-hidden">
      {/* Top Construction Hazard Line */}
      <div className="w-full h-2 hazard-stripe" />

      {/* Top Utility Bar */}
      <div className="border-b border-[#0A0A0A]/10 px-6 lg:px-16 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-[#6B6A63]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#FFD100] text-[#0A0A0A] font-bold rounded-sm border border-[#0A0A0A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-ping" />
            LIVE SPEC
          </span>
          <span className="hidden sm:inline">JENGA (v.) — SWAHILI: <strong className="text-[#0A0A0A]">TO BUILD, TO CONSTRUCT</strong></span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline-flex items-center gap-1">
            <Compass size={13} className="text-[#0A0A0A]" />
            <span>NAIROBI 🇰🇪 · EAST AFRICA INFRASTRUCTURE</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#0A0A0A] font-semibold">
            <ShieldCheck size={13} className="text-[#0A0A0A]" />
            <span>BUNIFU SUITE v1.0</span>
          </span>
        </div>
      </div>

      {/* Main Brand & Hero Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-20 relative">
        {/* Architectural Grid Watermark */}
        <div className="absolute right-6 top-10 pointer-events-none opacity-5 hidden lg:block font-mono text-[140px] font-black text-[#0A0A0A] leading-none select-none">
          J.AI
        </div>

        {/* Wordmark Navigation Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 mb-12 border-b border-[#0A0A0A]/10">
          <div className="flex items-center gap-3">
            {/* Wordmark: Space Grotesk 700 with yellow dot */}
            <div className="font-display font-bold text-3xl md:text-4xl tracking-tight text-[#0A0A0A] flex items-baseline">
              Jengo<span className="text-[#FFD100] font-black text-4xl md:text-5xl leading-none">.</span>AI
            </div>
            <div className="px-2 py-0.5 bg-[#FFF6C9] border border-[#0A0A0A] rounded font-mono text-[10px] font-bold text-[#0A0A0A] tracking-widest uppercase">
              BUNIFU SUITE
            </div>
          </div>

          {/* Quick Stage Signals */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="px-3 py-1 bg-white border border-[#0A0A0A] rounded-full text-[#0A0A0A] font-medium shadow-[2px_2px_0px_#0A0A0A]">
              01 / BUILD
            </span>
            <span className="text-[#6B6A63]">→</span>
            <span className="px-3 py-1 bg-white border border-[#0A0A0A] rounded-full text-[#0A0A0A] font-medium shadow-[2px_2px_0px_#0A0A0A]">
              02 / SHIP
            </span>
            <span className="text-[#6B6A63]">→</span>
            <span className="px-3 py-1 bg-white border border-[#0A0A0A] rounded-full text-[#0A0A0A] font-medium shadow-[2px_2px_0px_#0A0A0A]">
              03 / GET PAID
            </span>
            <span className="text-[#6B6A63]">→</span>
            <span className="px-3 py-1 bg-[#FFD100] border-2 border-[#0A0A0A] rounded-full text-[#0A0A0A] font-bold shadow-[2px_2px_0px_#0A0A0A]">
              04 / AUTOMATE
            </span>
          </div>
        </div>

        {/* Hero Display Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#6B6A63] font-semibold">
              <Hammer size={14} className="text-[#0A0A0A]" />
              <span>Construction-Grade AI Ecosystem</span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[86px] leading-[0.92] tracking-tight text-[#0A0A0A] uppercase mb-8">
              14 Apps.<br />
              <span className="inline-block relative">
                <span className="relative z-10 text-[#0A0A0A]">One Ecosystem.</span>
                <span className="absolute bottom-2 left-0 right-0 h-4 md:h-6 bg-[#FFD100] -z-0 transform -rotate-0.5" />
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#6B6A63] max-w-2xl leading-relaxed mb-8">
              Engineered like infrastructure. From deterministic prompt compiler pipelines and computer-vision styling to M-Pesa micro-payments and autonomous agents — built for developers, creators, and community builders.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#FFD100] text-[#0A0A0A] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#0A0A0A] rounded-md shadow-[4px_4px_0px_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles size={16} />
                <span>Explore Full Suite ({activeCount} Tools)</span>
              </button>

              <a
                href="#specs"
                className="px-6 py-3.5 bg-transparent text-[#0A0A0A] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#0A0A0A] rounded-md hover:bg-[#FFF6C9] transition-colors cursor-pointer"
              >
                System Specs
              </a>
            </div>
          </div>

          {/* Metric Telemetry Box */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-white border-2 border-[#0A0A0A] rounded-lg p-5 shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex items-center justify-between pb-3 border-b border-[#0A0A0A]/10 font-mono text-[11px] uppercase tracking-wider text-[#6B6A63]">
                <span>INFRASTRUCTURE METRICS</span>
                <span className="px-1.5 py-0.5 bg-[#FFD100] text-[#0A0A0A] font-bold rounded text-[10px]">
                  ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#6B6A63] mb-1">TOTAL MODULES</div>
                  <div className="font-display font-bold text-3xl text-[#0A0A0A]">{ECOSYSTEM_METRICS.totalApps} APPS</div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase text-[#6B6A63] mb-1">PIPELINE SECTORS</div>
                  <div className="font-display font-bold text-3xl text-[#0A0A0A]">{ECOSYSTEM_METRICS.totalCategories} DOMAINS</div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase text-[#6B6A63] mb-1">DEPLOYED STATUS</div>
                  <div className="font-mono font-bold text-sm text-[#0A0A0A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                    {ECOSYSTEM_METRICS.status}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase text-[#6B6A63] mb-1">ENGINEERING HUB</div>
                  <div className="font-mono font-bold text-sm text-[#0A0A0A]">
                    {ECOSYSTEM_METRICS.hub}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick construction signal tag */}
            <div className="px-4 py-2.5 bg-[#FFF6C9] border border-[#0A0A0A] rounded-md font-mono text-[11px] text-[#0A0A0A] flex items-center justify-between">
              <span>DESIGN SPEC: <strong>JENGO DS v1.0</strong></span>
              <span className="font-bold">60% BLK / 32% WHT / 8% YLW</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
