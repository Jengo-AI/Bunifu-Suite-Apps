import React from "react";
import { ArrowUp, Terminal, ShieldAlert } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-[#0A0A0A] bg-[#FAF9F5] text-[#0A0A0A] relative overflow-hidden">
      {/* Bottom Hazard Stripe */}
      <div className="w-full h-2 hazard-stripe" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-[#0A0A0A]">
          
          {/* Col 1: Wordmark & Philosophy */}
          <div className="md:col-span-5">
            <div className="font-display font-bold text-3xl tracking-tight text-[#0A0A0A] flex items-baseline mb-3">
              Jengo<span className="text-[#FFD100] font-black text-4xl leading-none">.</span>AI
            </div>
            
            <p className="font-sans text-sm text-[#6B6A63] leading-relaxed max-w-sm mb-6">
              A minimalist black, yellow, and white system for every Bunifu Suite app — engineered to feel like construction-grade infrastructure.
            </p>

            <div className="p-3 bg-white border-2 border-[#0A0A0A] rounded-md font-mono text-xs text-[#0A0A0A] flex items-center gap-2 max-w-sm">
              <Terminal size={14} className="text-[#0A0A0A]" />
              <span><strong>JENGA (v.)</strong> — Swahili: <em>to build, to construct</em></span>
            </div>
          </div>

          {/* Col 2: Suite Ecosystem Links */}
          <div className="md:col-span-4 font-mono text-xs">
            <div className="font-bold uppercase tracking-wider text-[#0A0A0A] mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#FFD100] border border-[#0A0A0A]" />
              <span>DEPLOYED MODULES (14)</span>
            </div>

            <ul className="grid grid-cols-2 gap-2 text-[#6B6A63]">
              <li><a href="https://selar.com/if1n4lz5x8" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">JengaPrompts</a></li>
              <li><a href="https://selar.com/5z62422237" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">JengaPrompts Pro</a></li>
              <li><a href="https://selar.com/0he04x" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">VizPrompts Studio</a></li>
              <li><a href="https://selar.com/174557z34n" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">VizPrompts Pro</a></li>
              <li><a href="https://selar.com/33571kf42k" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">JengaForge</a></li>
              <li><a href="https://selar.com/352n7b774l" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">JengaUI</a></li>
              <li><a href="https://selar.com/s6135919e1" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">JengaContext</a></li>
              <li><a href="https://selar.com/4e0c1o4184" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">DataMambo</a></li>
              <li><a href="https://selar.com/k888588d75" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">PromptSoko</a></li>
              <li><a href="https://selar.com/7458448745" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">Thumbnail Safi</a></li>
              <li><a href="https://selar.com/5u75v17604" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">KahawaPay</a></li>
              <li><a href="https://selar.com/5x217z313s" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">Bunifu Agent</a></li>
              <li><a href="https://selar.com/t0u935792r" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">BookShareKE</a></li>
              <li><a href="https://selar.com/46352o6147" target="_blank" rel="noreferrer" className="hover:text-[#0A0A0A] hover:underline">VibeShareKE</a></li>
            </ul>
          </div>

          {/* Col 3: Specifications & Return to top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="font-mono font-bold text-xs uppercase tracking-wider text-[#0A0A0A] mb-2 flex items-center gap-1.5">
                <ShieldAlert size={14} className="text-[#0A0A0A]" />
                <span>SPECIFICATIONS</span>
              </div>
              <p className="font-mono text-[11px] text-[#6B6A63] leading-relaxed mb-4">
                Color Ratio: 60% Black / 32% White / 8% Yellow. Space Grotesk + Inter + JetBrains Mono.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-3 px-4 bg-white text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#0A0A0A] rounded-md shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#FFD100] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Return To Surface</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Legal & City Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#6B6A63]">
          <div>
            JENGO AI · BUNIFU SUITE · DESIGN LANGUAGE V1.0 · NAIROBI 🇰🇪
          </div>

          <div className="text-[#0A0A0A] font-semibold">
            ENGINEERED WITH FLAT HIGH-CONTRAST INFRASTRUCTURE
          </div>
        </div>

      </div>
    </footer>
  );
};
