import { useState, useMemo, useRef } from "react";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { AppCardList } from "./components/AppCardList";
import { AppCardGrid } from "./components/AppCardGrid";
import { AppModal } from "./components/AppModal";
import { StatsSection } from "./components/StatsSection";
import { Footer } from "./components/Footer";
import { APPS_DATA } from "./data/appsData";
import { AppItem, ViewMode } from "./types";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [onlyPro, setOnlyPro] = useState<boolean>(false);
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);

  const catalogRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Filter and search logic
  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((app) => {
      // Pro filter
      if (onlyPro && !app.isPro) {
        return false;
      }

      // Sector Tab filter
      if (activeTab !== "All") {
        if (activeTab === "AI Tools" && app.sectorGroup !== "AI Tools") return false;
        if (activeTab === "Creator" && app.sectorGroup !== "Creator") return false;
        if (activeTab === "Social" && app.sectorGroup !== "Social") return false;
        if (activeTab === "Business" && app.sectorGroup !== "Business") return false;
        if (activeTab === "Payments" && app.sectorGroup !== "Payments") return false;
        if (activeTab === "Marketplace" && app.sectorGroup !== "Marketplace") return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = app.name.toLowerCase().includes(q);
        const matchesDesc = app.description.toLowerCase().includes(q);
        const matchesCategory = app.category.toLowerCase().includes(q);
        const matchesTags = app.tags.some((tag) => tag.toLowerCase().includes(q));
        const matchesAudience = app.forText.toLowerCase().includes(q);
        const matchesCode = app.code.toLowerCase().includes(q);

        return matchesName || matchesDesc || matchesCategory || matchesTags || matchesAudience || matchesCode;
      }

      return true;
    });
  }, [activeTab, searchQuery, onlyPro]);

  const handleResetFilters = () => {
    setActiveTab("All");
    setSearchQuery("");
    setOnlyPro(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#0A0A0A] font-sans antialiased selection:bg-[#FFD100] selection:text-[#0A0A0A]">
      {/* Header */}
      <Header onExploreClick={handleExploreClick} activeCount={APPS_DATA.length} />

      {/* Catalog Anchor */}
      <div ref={catalogRef} id="catalog">
        {/* Sticky Filter & Search Bar */}
        <FilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onlyPro={onlyPro}
          onToggleOnlyPro={() => setOnlyPro((prev) => !prev)}
          totalResults={filteredApps.length}
        />

        {/* Main Catalog Section */}
        <main className="min-h-[500px] bg-blueprint-grid">
          {filteredApps.length === 0 ? (
            <div className="max-w-xl mx-auto px-6 py-24 text-center">
              <div className="w-16 h-16 bg-[#FFF6C9] border-2 border-[#0A0A0A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0px_#0A0A0A]">
                <AlertCircle size={28} className="text-[#0A0A0A]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A0A0A] uppercase mb-2">
                No Modules Located
              </h3>
              <p className="font-sans text-sm text-[#6B6A63] leading-relaxed mb-6">
                No active tools match your criteria: &ldquo;{searchQuery}&rdquo; in sector &ldquo;{activeTab}&rdquo;. Try resetting the filters or modifying your search query.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-[#FFD100] text-[#0A0A0A] font-mono text-xs uppercase font-bold tracking-wider border-2 border-[#0A0A0A] rounded shadow-[2px_2px_0px_#0A0A0A] hover:bg-[#FFF6C9] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw size={14} />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : viewMode === "list" ? (
            <AppCardList apps={filteredApps} onOpenSpecs={(app) => setSelectedApp(app)} />
          ) : (
            <AppCardGrid apps={filteredApps} onOpenSpecs={(app) => setSelectedApp(app)} />
          )}
        </main>
      </div>

      {/* Creator Journey Specs Section */}
      <StatsSection />

      {/* Footer */}
      <Footer />

      {/* Technical Spec Drawer Modal */}
      <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
    </div>
  );
}
