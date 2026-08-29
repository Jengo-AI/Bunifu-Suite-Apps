import React from "react";
import { ArrowUpRight, CheckCircle2, FileText } from "lucide-react";
import { AppItem } from "../types";

interface AppCardListProps {
  apps: AppItem[];
  onOpenSpecs: (app: AppItem) => void;
}

export const AppCardList: React.FC<AppCardListProps> = ({ apps, onOpenSpecs }) => {
  return (
    <div className="divide-y-2 divide-[#0A0A0A] border-b-2 border-[#0A0A0A]">
      {apps.map((app) => {
        const IconComponent = app.icon;
        return (
          <article
            key={app.id}
            className="py-12 sm:py-16 px-6 lg:px-16 transition-colors hover:bg-[#FFF6C9]/40 relative group"
          >
            {/* Top Coordinate & Metadata Row */}
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                
                {/* Left Area: Icon + Title & Spec Data */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                    
                    {/* Icon in yellow-tint square with 2px black border */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFF6C9] border-2 border-[#0A0A0A] rounded-md relative flex items-center justify-center shrink-0 shadow-[3px_3px_0px_#0A0A0A]">
                      <IconComponent size={32} strokeWidth={1.75} className="text-[#0A0A0A]" />
                      <div className="absolute bottom-1 right-1.5 font-mono text-[9px] font-bold text-[#0A0A0A]/60">
                        {app.id}
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Monospace Eyebrow & Status Signals */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-2 font-mono text-[11px] uppercase tracking-wider">
                        <span className="text-[#6B6A63] font-semibold">REF // {app.code}</span>
                        <span className="text-[#DCDACF]">•</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#0A0A0A] text-[#FFD100] font-bold rounded-sm text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" />
                          {app.status}
                        </span>
                        <span className="px-2 py-0.5 bg-white border border-[#0A0A0A] rounded-sm text-[#0A0A0A] font-semibold text-[10px]">
                          {app.version}
                        </span>
                        {app.isPro && (
                          <span className="px-2 py-0.5 bg-[#FFD100] text-[#0A0A0A] font-black border border-[#0A0A0A] rounded-sm text-[10px] tracking-widest shadow-[1px_1px_0px_#0A0A0A]">
                            PRO EDITION
                          </span>
                        )}
                      </div>

                      {/* Headline: Space Grotesk 700 */}
                      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight group-hover:text-[#0A0A0A] flex items-center gap-3">
                        <span>{app.name}</span>
                        <span className="font-mono text-xs text-[#6B6A63] font-normal hidden sm:inline-block">
                          [{app.stageTag}]
                        </span>
                      </h2>
                    </div>
                  </div>

                  {/* Body Paragraph: Inter 400 with high readability */}
                  <div className="sm:ml-26 max-w-3xl">
                    <p className="font-sans text-base text-[#0A0A0A] leading-relaxed mb-6">
                      {app.description}
                    </p>

                    {/* Key Technical Capabilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {app.keyFeatures.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 font-mono text-xs text-[#6B6A63]">
                          <CheckCircle2 size={14} className="text-[#0A0A0A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags / Pills: JetBrains Mono with 1px black border */}
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
                      <span className="text-[#6B6A63] text-[10px]">TAGS:</span>
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-white border border-[#0A0A0A] rounded-full text-[#0A0A0A] text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Area: Target Audience & Direct Action CTAs */}
                <div className="lg:w-72 flex flex-col justify-between self-stretch pt-2 lg:pt-0 lg:border-l lg:border-[#0A0A0A]/10 lg:pl-8">
                  <div className="mb-6">
                    <div className="font-mono text-[10px] uppercase text-[#6B6A63] tracking-widest mb-1">
                      SECTOR // DOMAIN
                    </div>
                    <div className="font-mono font-bold text-xs text-[#0A0A0A] uppercase mb-4">
                      {app.category}
                    </div>

                    <div className="font-mono text-[10px] uppercase text-[#6B6A63] tracking-widest mb-1">
                      DESIGNED FOR
                    </div>
                    <div className="font-sans font-semibold text-xs text-[#0A0A0A]">
                      {app.forText}
                    </div>
                  </div>

                  {/* Button Group: Primary Yellow CTA + Technical Spec Drawer */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 bg-[#FFD100] text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#0A0A0A] rounded-md shadow-[3px_3px_0px_#0A0A0A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0A0A0A] transition-all flex items-center justify-between group/btn cursor-pointer text-center"
                    >
                      <span>Get Tool / Launch</span>
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      onClick={() => onOpenSpecs(app)}
                      className="w-full px-4 py-2.5 bg-white text-[#0A0A0A] font-mono text-xs uppercase tracking-wider border-2 border-[#0A0A0A] rounded-md hover:bg-[#FFF6C9] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileText size={14} />
                      <span>View Monograph Specs</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
