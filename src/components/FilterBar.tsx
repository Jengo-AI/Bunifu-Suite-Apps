import React from "react";
import { Search, X, LayoutGrid, List, Zap } from "lucide-react";
import { ViewMode } from "../types";

interface FilterBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onlyPro: boolean;
  onToggleOnlyPro: () => void;
  totalResults: number;
}

const SECTOR_TABS = [
  { id: "All", label: "All 14 Apps" },
  { id: "AI Tools", label: "AI Tools" },
  { id: "Creator", label: "Creator" },
  { id: "Social", label: "Social & Community" },
  { id: "Business", label: "Analytics & Business" },
  { id: "Payments", label: "Payments" },
  { id: "Marketplace", label: "Marketplace" },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onlyPro,
  onToggleOnlyPro,
  totalResults,
}) => {
  return (
    <div className="sticky top-0 z-30 bg-[#FAF9F5]/95 backdrop-blur-md border-y-2 border-[#0A0A0A] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        {/* Top Controls Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Search Input (2px solid black border, no fill, gray placeholder) */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B6A63]">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search tools, capabilities, tags (e.g. 'prompt', 'm-pesa')..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border-2 border-[#0A0A0A] rounded-md font-sans text-sm text-[#0A0A0A] placeholder-[#6B6A63] focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:border-[#0A0A0A] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6B6A63] hover:text-[#0A0A0A] cursor-pointer"
                title="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Right Action Tools: Pro Filter & View Mode Switcher */}
          <div className="flex items-center flex-wrap gap-3 font-mono text-xs">
            {/* Pro Filter Toggle */}
            <button
              onClick={onToggleOnlyPro}
              className={`px-3 py-2 border-2 border-[#0A0A0A] rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                onlyPro
                  ? "bg-[#FFD100] text-[#0A0A0A] font-bold shadow-[2px_2px_0px_#0A0A0A]"
                  : "bg-white text-[#6B6A63] hover:text-[#0A0A0A] hover:bg-[#FFF6C9]"
              }`}
            >
              <Zap size={14} className={onlyPro ? "fill-[#0A0A0A]" : ""} />
              <span>PRO EDITIONS ONLY</span>
            </button>

            {/* View Mode Toggle */}
            <div className="inline-flex bg-white border-2 border-[#0A0A0A] rounded-md p-0.5 shadow-[2px_2px_0px_#0A0A0A]">
              <button
                onClick={() => onViewModeChange("list")}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === "list"
                    ? "bg-[#0A0A0A] text-[#FFD100] font-bold"
                    : "text-[#6B6A63] hover:text-[#0A0A0A]"
                }`}
                title="Editorial Monograph List View"
              >
                <List size={14} />
                <span className="hidden sm:inline">MONOGRAPH</span>
              </button>

              <button
                onClick={() => onViewModeChange("grid")}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#0A0A0A] text-[#FFD100] font-bold"
                    : "text-[#6B6A63] hover:text-[#0A0A0A]"
                }`}
                title="Blueprint Grid View"
              >
                <LayoutGrid size={14} />
                <span className="hidden sm:inline">BLUEPRINT</span>
              </button>
            </div>

            {/* Results Count Chip */}
            <div className="px-3 py-2 bg-white border border-[#DCDACF] rounded-md text-[#6B6A63] font-mono text-[11px]">
              SHOWING: <strong className="text-[#0A0A0A]">{totalResults} APPS</strong>
            </div>
          </div>
        </div>

        {/* Sector Tabs Bar */}
        <div className="mt-4 pt-3 border-t border-[#0A0A0A]/10 flex gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-mono text-xs uppercase tracking-wider">
          {SECTOR_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3.5 py-1.5 rounded-md border-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FFD100] text-[#0A0A0A] border-[#0A0A0A] font-bold shadow-[2px_2px_0px_#0A0A0A]"
                    : "bg-transparent text-[#6B6A63] border-transparent hover:border-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
