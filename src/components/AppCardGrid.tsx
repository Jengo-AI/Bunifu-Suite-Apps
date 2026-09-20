import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { AppItem } from "../types";

interface AppCardGridProps {
  apps: AppItem[];
  onOpenSpecs: (app: AppItem) => void;
}

export const AppCardGrid: React.FC<AppCardGridProps> = ({ apps, onOpenSpecs }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => {
          const IconComponent = app.icon;
          const isLive = app.status === "LIVE";
          return (
            <div
              key={app.id}
              className="bg-white border-2 border-[#0A0A0A] rounded-[8px] p-6 flex flex-col justify-between relative group"
            >
              {/* Pro Badge Top-Right Corner Offset: yellow fill, black bold text, small rectangular tag */}
              {app.isPro && (
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[#FFD100] text-[#0A0A0A] font-mono font-bold text-[10px] uppercase border-2 border-[#0A0A0A] rounded-[4px] tracking-wider">
                  PRO SPEC
                </div>
              )}

              {/* Card Top Section */}
              <div>
                {/* Header Row: Icon + Ref Code + Status */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  {/* Icon in yellow-tint square with 2px black border, 6px radius, no shadow */}
                  <div className="w-14 h-14 bg-[#FFF6C9] border-2 border-[#0A0A0A] rounded-[6px] flex items-center justify-center shrink-0">
                    <IconComponent size={26} strokeWidth={1.75} className="text-[#0A0A0A]" />
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-[10px] text-[#6B6A63] block uppercase font-semibold">
                      REF // {app.code}
                    </span>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 font-mono font-bold text-[9px] uppercase rounded-full border ${
                        isLive
                          ? "bg-[#0A0A0A] text-[#FFD100] border-[#0A0A0A]"
                          : "bg-white text-[#0A0A0A] border-[#0A0A0A]"
                      }`}
                    >
                      {app.status} · {app.version}
                    </span>
                  </div>
                </div>

                {/* App Name: Space Grotesk 700 */}
                <h3 className="font-display font-bold text-2xl text-[#0A0A0A] tracking-tight mb-2">
                  {app.name}
                </h3>

                {/* Category & Stage Tag */}
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#6B6A63] mb-4">
                  <span className="font-bold text-[#0A0A0A]">{app.category}</span>
                  <span>//</span>
                  <span className="px-1.5 py-0.5 bg-[#FAF9F5] border border-[#DCDACF] rounded-[4px] text-[#0A0A0A]">
                    {app.stageTag}
                  </span>
                </div>

                {/* Description: gray body copy */}
                <p className="font-sans text-sm text-[#6B6A63] leading-relaxed mb-6 line-clamp-3">
                  {app.description}
                </p>

                {/* Tags: JetBrains Mono, uppercase, 1px black border, pill radius */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#FAF9F5] border border-[#0A0A0A] rounded-full font-mono text-[9px] uppercase text-[#0A0A0A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Audience & Action Buttons */}
              <div className="pt-4 border-t border-[#0A0A0A]/10">
                <div className="font-mono text-[10px] text-[#6B6A63] uppercase mb-3">
                  FOR: <strong className="text-[#0A0A0A] font-sans">{app.forText}</strong>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenSpecs(app)}
                    className="px-3 py-2 bg-transparent text-[#0A0A0A] font-mono text-[11px] uppercase tracking-wider border-2 border-[#0A0A0A] rounded-[6px] hover:bg-[#FFF6C9] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <FileText size={12} />
                    <span>Specs</span>
                  </button>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-[#FFD100] text-[#0A0A0A] font-display font-bold text-[11px] uppercase tracking-wider border-2 border-[#0A0A0A] rounded-[6px] hover:bg-[#0A0A0A] hover:text-[#FFD100] transition-colors flex items-center justify-center gap-1 cursor-pointer text-center"
                  >
                    <span>Launch</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
