import React from "react";
import { X, ArrowUpRight, CheckCircle, ExternalLink, Copy, Check } from "lucide-react";
import { AppItem } from "../types";

interface AppModalProps {
  app: AppItem | null;
  onClose: () => void;
}

export const AppModal: React.FC<AppModalProps> = ({ app, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!app) return null;

  const IconComponent = app.icon;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(app.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A0A]/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F5] border-3 border-[#0A0A0A] rounded-xl shadow-[8px_8px_0px_#0A0A0A] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hazard Stripe Header */}
        <div className="w-full h-3 hazard-stripe" />

        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b-2 border-[#0A0A0A] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#6B6A63]">
            <span className="px-2 py-0.5 bg-[#FFD100] text-[#0A0A0A] font-bold rounded border border-[#0A0A0A]">
              ARCHITECTURAL MONOGRAPH
            </span>
            <span>SPEC // {app.code}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded border-2 border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] hover:bg-[#FFD100] transition-colors cursor-pointer"
            title="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* Header Block */}
          <div className="flex items-start gap-5 mb-6">
            <div className="w-18 h-18 bg-[#FFF6C9] border-2 border-[#0A0A0A] rounded-lg flex items-center justify-center shrink-0 shadow-[3px_3px_0px_#0A0A0A]">
              <IconComponent size={36} strokeWidth={1.75} className="text-[#0A0A0A]" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase">
                  {app.category}
                </span>
                <span className="text-[#DCDACF]">•</span>
                <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#FFD100] font-mono text-[10px] font-bold rounded">
                  {app.status} · {app.version}
                </span>
                {app.isPro && (
                  <span className="px-2 py-0.5 bg-[#FFD100] text-[#0A0A0A] font-mono text-[10px] font-black border border-[#0A0A0A] rounded">
                    PRO SPEC
                  </span>
                )}
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                {app.name}
              </h2>
            </div>
          </div>

          {/* Primary Description */}
          <div className="bg-white border-2 border-[#0A0A0A] rounded-lg p-4 mb-6 shadow-[2px_2px_0px_#0A0A0A]">
            <div className="font-mono text-[10px] uppercase text-[#6B6A63] tracking-wider mb-1">
              SYSTEM OVERVIEW
            </div>
            <p className="font-sans text-sm sm:text-base text-[#0A0A0A] leading-relaxed">
              {app.fullSpecs || app.description}
            </p>
          </div>

          {/* Technical Capabilities Matrix */}
          <div className="mb-6">
            <div className="font-mono text-xs font-bold uppercase text-[#0A0A0A] tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFD100] border border-[#0A0A0A]" />
              <span>CORE SYSTEM CAPABILITIES</span>
            </div>

            <div className="space-y-2.5">
              {app.keyFeatures.map((feat, index) => (
                <div 
                  key={index}
                  className="p-3 bg-white border border-[#0A0A0A] rounded-md flex items-start gap-3 text-xs font-mono text-[#0A0A0A]"
                >
                  <CheckCircle size={15} className="text-[#0A0A0A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specification Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-3.5 bg-white border border-[#0A0A0A] rounded-md">
              <div className="font-mono text-[10px] text-[#6B6A63] uppercase mb-1">STAGE // WORKFLOW</div>
              <div className="font-mono font-bold text-xs text-[#0A0A0A]">{app.stageTag} PIPELINE</div>
            </div>

            <div className="p-3.5 bg-white border border-[#0A0A0A] rounded-md">
              <div className="font-mono text-[10px] text-[#6B6A63] uppercase mb-1">TARGET AUDIENCE</div>
              <div className="font-sans font-semibold text-xs text-[#0A0A0A]">{app.forText}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="font-mono text-[10px] uppercase text-[#6B6A63] tracking-wider mb-2">
              INDEX TAXONOMY
            </div>
            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white border border-[#0A0A0A] rounded-full font-mono text-[11px] uppercase text-[#0A0A0A]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t-2 border-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-4 py-2.5 bg-white border-2 border-[#0A0A0A] rounded-md font-mono text-xs uppercase tracking-wider text-[#0A0A0A] hover:bg-[#FFF6C9] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-600" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Selar Link</span>
                </>
              )}
            </button>

            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#FFD100] text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#0A0A0A] rounded-md shadow-[3px_3px_0px_#0A0A0A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0A0A0A] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Launch Product / Order</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
