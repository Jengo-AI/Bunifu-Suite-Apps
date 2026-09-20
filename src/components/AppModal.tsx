import React, { useEffect } from "react";
import { X, ExternalLink, Copy, Check, CheckCircle2 } from "lucide-react";
import { AppItem } from "../types";

interface AppModalProps {
  app: AppItem | null;
  onClose: () => void;
}

export const AppModal: React.FC<AppModalProps> = ({ app, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (app) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [app, onClose]);

  if (!app) return null;

  const IconComponent = app.icon;
  const isLive = app.status === "LIVE";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(app.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A0A]/75 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F5] border-2 border-[#0A0A0A] rounded-[8px] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hazard Stripe Header */}
        <div className="w-full h-2.5 hazard-stripe" />

        {/* Modal Top Bar */}
        <div className="px-6 py-3.5 border-b-2 border-[#0A0A0A] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#6B6A63]">
            <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#FFD100] font-bold rounded-[4px] border border-[#0A0A0A]">
              ARCHITECTURAL MONOGRAPH
            </span>
            <span>SPEC // {app.code}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-[4px] border-2 border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] hover:bg-[#FFD100] transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* Header Block */}
          <div className="flex items-start gap-5 mb-6">
            <div className="w-18 h-18 bg-[#FFF6C9] border-2 border-[#0A0A0A] rounded-[6px] flex items-center justify-center shrink-0">
              <IconComponent size={36} strokeWidth={1.75} className="text-[#0A0A0A]" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase">
                  {app.category}
                </span>
                <span className="text-[#DCDACF]">•</span>
                <span
                  className={`px-2 py-0.5 font-mono text-[10px] font-bold rounded-full border ${
                    isLive
                      ? "bg-[#0A0A0A] text-[#FFD100] border-[#0A0A0A]"
                      : "bg-white text-[#0A0A0A] border-[#0A0A0A]"
                  }`}
                >
                  {app.status} · {app.version}
                </span>
                {app.isPro && (
                  <span className="px-2 py-0.5 bg-[#FFD100] text-[#0A0A0A] font-mono text-[10px] font-bold border border-[#0A0A0A] rounded-[4px]">
                    PRO SPEC
                  </span>
                )}
              </div>

              <h2 id="modal-title" className="font-display font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                {app.name}
              </h2>
            </div>
          </div>

          {/* Primary Description */}
          <div className="bg-white border-2 border-[#0A0A0A] rounded-[6px] p-4 mb-6">
            <div className="font-mono text-[10px] uppercase text-[#6B6A63] tracking-wider mb-1 font-semibold">
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

            <div className="space-y-2">
              {app.keyFeatures.map((feat, index) => (
                <div 
                  key={index}
                  className="p-3 bg-white border border-[#0A0A0A] rounded-[6px] flex items-start gap-3 text-xs font-mono text-[#0A0A0A]"
                >
                  <CheckCircle2 size={15} className="text-[#0A0A0A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specification Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-3.5 bg-white border border-[#0A0A0A] rounded-[6px]">
              <div className="font-mono text-[10px] text-[#6B6A63] uppercase mb-1 font-semibold">STAGE // WORKFLOW</div>
              <div className="font-mono font-bold text-xs text-[#0A0A0A]">{app.stageTag} PIPELINE</div>
            </div>

            <div className="p-3.5 bg-white border border-[#0A0A0A] rounded-[6px]">
              <div className="font-mono text-[10px] text-[#6B6A63] uppercase mb-1 font-semibold">TARGET AUDIENCE</div>
              <div className="font-sans font-semibold text-xs text-[#0A0A0A]">{app.forText}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="font-mono text-[10px] uppercase text-[#6B6A63] tracking-wider mb-2 font-semibold">
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
              className="w-full sm:w-auto px-4 py-2.5 bg-transparent border-2 border-[#0A0A0A] rounded-[6px] font-mono text-xs uppercase tracking-wider text-[#0A0A0A] hover:bg-[#FFF6C9] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-[#0A0A0A]" />
                  <span className="font-bold">Link Copied</span>
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
              className="w-full sm:w-auto px-6 py-3 bg-[#FFD100] text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#0A0A0A] rounded-[6px] hover:bg-[#0A0A0A] hover:text-[#FFD100] transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
