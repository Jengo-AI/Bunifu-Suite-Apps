import React from "react";
import { Hammer, Cpu, Layers, Radio, Globe, Shield } from "lucide-react";

export const StatsSection: React.FC = () => {
  const stages = [
    {
      num: "01",
      name: "BUILD",
      desc: "Prompt engineering, UI layout generation, and context structuring engines.",
      tools: "JengaPrompts, JengaUI, JengaContext, JengaForge",
      icon: Hammer,
    },
    {
      num: "02",
      name: "SHIP",
      desc: "Visual reverse-engineering, thumbnail SEO/AEO optimization, and analytics.",
      tools: "VizPrompts Studio, Thumbnail Safi, DataMambo",
      icon: Layers,
    },
    {
      num: "03",
      name: "GET SEEN",
      desc: "Vibecoded creative showcases, book swaps, and community discovery hubs.",
      tools: "VibeShareKE, BookShareKE",
      icon: Globe,
    },
    {
      num: "04",
      name: "GET PAID",
      desc: "Frictionless M-Pesa micro-settlements, QR checkouts, and prompt marketplace.",
      tools: "KahawaPay, PromptSoko",
      icon: Shield,
    },
    {
      num: "05",
      name: "AUTOMATE",
      desc: "Autonomous workflow pipelines and multi-step agent execution loops.",
      tools: "Bunifu Agent, JengaPrompts Pro, VizPrompts Pro",
      icon: Cpu,
    },
  ];

  return (
    <section id="specs" className="border-b-2 border-[#0A0A0A] bg-white py-20 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#0A0A0A]/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#6B6A63] font-semibold mb-2">
              <Radio size={14} className="text-[#0A0A0A]" />
              <span>THE BUNIFU SUITE PIPELINE</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight uppercase">
              The Creator Journey
            </h2>
          </div>

          <div className="font-mono text-xs text-[#6B6A63] max-w-sm">
            Five synchronized lifecycle stages engineered to take an idea from initial prompt structure to full monetization.
          </div>
        </div>

        {/* 5-Stage Blueprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stages.map((stage) => {
            const IconComp = stage.icon;
            return (
              <div
                key={stage.num}
                className="p-5 bg-[#FAF9F5] border-2 border-[#0A0A0A] rounded-lg flex flex-col justify-between shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#FFF6C9] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-xs px-2 py-0.5 bg-[#0A0A0A] text-[#FFD100] rounded">
                      {stage.num}
                    </span>
                    <IconComp size={18} className="text-[#0A0A0A]" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A0A0A] mb-2 uppercase">
                    {stage.name}
                  </h3>

                  <p className="font-sans text-xs text-[#0A0A0A] leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0A0A0A]/10 font-mono text-[10px] text-[#6B6A63]">
                  <span className="block text-[9px] uppercase text-[#0A0A0A] font-bold mb-0.5">DEPLOYED APPS:</span>
                  <span>{stage.tools}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Construction Philosophy Banner */}
        <div className="mt-12 p-6 bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="w-full lg:w-3 h-3 lg:h-full hazard-stripe absolute top-0 left-0" />
          
          <div className="lg:pl-6">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#FFD100] font-bold mb-1">
              INFRASTRUCTURE PRINCIPLE
            </div>
            <p className="font-sans text-sm sm:text-base text-[#FAF9F5] max-w-2xl leading-relaxed">
              <strong>JENGA (v.)</strong> — Swahili for <em>to build, to construct</em>. Every module in the Bunifu Suite is built without superficial hype, engineered with flat lines, high contrast, and direct execution.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-right">
            <span className="px-3 py-1.5 bg-[#FFD100] text-[#0A0A0A] font-bold rounded border border-[#0A0A0A]">
              NAIROBI 🇰🇪 · STUDIO JENGO
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
