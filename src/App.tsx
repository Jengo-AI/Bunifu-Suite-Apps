import { useState } from "react";
import {
  Sparkles,
  Zap,
  ImageIcon,
  Clapperboard,
  Wrench,
  Palette,
  Brain,
  BarChart2,
  ShoppingCart,
  MonitorPlay,
  CreditCard,
  Bot,
  Library,
  Waves,
  ArrowUpRight
} from "lucide-react";

type AppData = {
  id: string;
  name: string;
  isPro?: boolean;
  category: string;
  categoryColor: string;
  iconId: any;
  iconBgMap: string;
  iconColorMap: string;
  description: string;
  tags: string[];
  forText: string;
  link: string;
};

const appsData: AppData[] = [
  {
    id: "01",
    name: "JengaPrompts",
    category: "AI",
    categoryColor: "text-purple-400 bg-purple-400/10",
    iconId: Sparkles,
    iconBgMap: "bg-purple-500/10",
    iconColorMap: "text-purple-400",
    description: "Builds, refines & optimizes AI prompts for consistently better outputs.",
    tags: ["Prompt structuring", "Rewriting", "Templates"],
    forText: "Creators • Devs • Beginners",
    link: "https://selar.com/if1n4lz5x8"
  },
  {
    id: "02",
    name: "JengaPrompts Pro",
    isPro: true,
    category: "AI",
    categoryColor: "text-purple-400 bg-purple-400/10",
    iconId: Zap,
    iconBgMap: "bg-yellow-500/10",
    iconColorMap: "text-yellow-400",
    description: "Professional-grade prompt workflows with automation and reusable pipelines.",
    tags: ["Prompt pipelines", "Batch generation", "Adv. templates"],
    forText: "Power users • Teams • Agencies",
    link: "https://selar.com/5z62422237"
  },
  {
    id: "03",
    name: "VizPrompts Studio",
    category: "VISUAL AI",
    categoryColor: "text-cyan-400 bg-cyan-400/10",
    iconId: ImageIcon,
    iconBgMap: "bg-cyan-500/10",
    iconColorMap: "text-cyan-400",
    description: "Converts images into detailed, usable prompts with style extraction.",
    tags: ["Image analysis", "Prompt from visual", "Style extraction"],
    forText: "Designers • Creators • AI artists",
    link: "https://selar.com/0he04x"
  },
  {
    id: "04",
    name: "VizPrompts Pro",
    isPro: true,
    category: "VISUAL AI",
    categoryColor: "text-cyan-400 bg-cyan-400/10",
    iconId: Clapperboard,
    iconBgMap: "bg-emerald-500/10",
    iconColorMap: "text-emerald-400",
    description: "High-performance visual prompt generation with video remixing & bulk control.",
    tags: ["Multi-image", "Video remixing", "Bulk generation"],
    forText: "Studios • Creative pros",
    link: "https://selar.com/174557z34n"
  },
  {
    id: "05",
    name: "JengaForge",
    category: "REPOSITORY",
    categoryColor: "text-emerald-400 bg-emerald-400/10",
    iconId: Wrench,
    iconBgMap: "bg-emerald-500/10",
    iconColorMap: "text-emerald-400",
    description: "Central hub for discovering and using AI tools built and curated by Jengo AI.",
    tags: ["Tool library", "Categorized AI", "Quick workflows"],
    forText: "Builders • Devs • Enthusiasts",
    link: "https://selar.com/33571kf42k"
  },
  {
    id: "06",
    name: "JengaUI",
    category: "UI GEN",
    categoryColor: "text-orange-400 bg-orange-400/10",
    iconId: Palette,
    iconBgMap: "bg-orange-500/10",
    iconColorMap: "text-orange-400",
    description: "Generates multiple responsive UI layouts from a single idea or prompt.",
    tags: ["Multi-UI output", "Responsive layouts", "Code export"],
    forText: "Developers • Designers • Startups",
    link: "https://selar.com/352n7b774l"
  },
  {
    id: "07",
    name: "JengaContext",
    category: "AI",
    categoryColor: "text-purple-400 bg-purple-400/10",
    iconId: Brain,
    iconBgMap: "bg-pink-500/10",
    iconColorMap: "text-pink-400",
    description: "Structures and optimizes input context for token-efficient AI responses.",
    tags: ["Context cleaning", "Input structuring", "Token efficiency"],
    forText: "Adv. AI users • Developers",
    link: "https://selar.com/s6135919e1"
  },
  {
    id: "08",
    name: "DataMambo",
    category: "ANALYTICS",
    categoryColor: "text-emerald-400 bg-emerald-400/10",
    iconId: BarChart2,
    iconBgMap: "bg-emerald-500/10",
    iconColorMap: "text-emerald-400",
    description: "Tracks and analyzes social media performance, engagement, and growth.",
    tags: ["Engagement tracking", "Growth analytics", "Perf. insights"],
    forText: "Creators • Marketers • Brands",
    link: "https://selar.com/4e0c1o4184"
  },
  {
    id: "09",
    name: "PromptSoko",
    category: "MARKETPLACE",
    categoryColor: "text-orange-400 bg-orange-400/10",
    iconId: ShoppingCart,
    iconBgMap: "bg-orange-500/10",
    iconColorMap: "text-orange-400",
    description: "Platform to buy, sell, and discover prompts — with creator monetization built in.",
    tags: ["Prompt listings", "Monetization", "Discovery"],
    forText: "Prompt engineers • Creators",
    link: "https://selar.com/k888588d75"
  },
  {
    id: "10",
    name: "Thumbnail Safi",
    category: "CREATOR",
    categoryColor: "text-orange-400 bg-orange-400/10",
    iconId: MonitorPlay,
    iconBgMap: "bg-yellow-500/10",
    iconColorMap: "text-yellow-400",
    description: "Generates thumbnails, descriptions, and SEO/GEO/AEO tags for content creators.",
    tags: ["Thumbnail gen", "SEO/GEO/AEO", "Tag suggestions"],
    forText: "YouTubers • Content creators",
    link: "https://selar.com/7458448745"
  },
  {
    id: "11",
    name: "KahawaPay",
    category: "PAYMENTS",
    categoryColor: "text-red-400 bg-red-400/10",
    iconId: CreditCard,
    iconBgMap: "bg-yellow-600/10",
    iconColorMap: "text-yellow-500",
    description: "Simple digital payments with M-Pesa-style flows, QR codes, and creator tipping.",
    tags: ["QR payments", "Creator tipping", "Microtransactions"],
    forText: "Creators • Small businesses",
    link: "https://selar.com/5u75v17604"
  },
  {
    id: "12",
    name: "Bunifu Agent",
    category: "AI AGENT",
    categoryColor: "text-purple-400 bg-purple-400/10",
    iconId: Bot,
    iconBgMap: "bg-indigo-500/10",
    iconColorMap: "text-indigo-400",
    description: "Handles tasks, workflows, and creative processes automatically end-to-end.",
    tags: ["Task automation", "Workflow exec.", "Idea generation"],
    forText: "Professionals • Creators • Teams",
    link: "https://selar.com/5x217z313s"
  },
  {
    id: "13",
    name: "BookShareKE",
    category: "COMMUNITY",
    categoryColor: "text-cyan-400 bg-cyan-400/10",
    iconId: Library,
    iconBgMap: "bg-emerald-500/10",
    iconColorMap: "text-emerald-400",
    description: "Enables users to share, swap, and discover books locally within their community.",
    tags: ["Book listings", "Swap system", "Discovery"],
    forText: "Readers • Students • Communities",
    link: "https://selar.com/t0u935792r"
  },
  {
    id: "14",
    name: "VibeShareKE",
    category: "SOCIAL",
    categoryColor: "text-blue-400 bg-blue-400/10",
    iconId: Waves,
    iconBgMap: "bg-cyan-500/10",
    iconColorMap: "text-cyan-400",
    description: "Platform for sharing vibecoded projects and creative work with a builder community.",
    tags: ["Project sharing", "Community", "Creative discovery"],
    forText: "Developers • Creators • Builders",
    link: "https://selar.com/46352o6147"
  }
];

const TABS = [
  { id: "All", label: "All 14", categories: [] },
  { id: "AI Tools", label: "AI Tools", categories: ["AI", "VISUAL AI", "UI GEN", "AI AGENT", "REPOSITORY"] },
  { id: "Creator", label: "Creator", categories: ["CREATOR"] },
  { id: "Social", label: "Social", categories: ["SOCIAL", "COMMUNITY"] },
  { id: "Business", label: "Business", categories: ["ANALYTICS"] },
  { id: "Payments", label: "Payments", categories: ["PAYMENTS"] },
  { id: "Marketplace", label: "Marketplace", categories: ["MARKETPLACE"] },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredApps = appsData.filter(app => {
    if (activeTab === "All") return true;
    const tab = TABS.find(t => t.id === activeTab);
    return tab?.categories.includes(app.category);
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif border-8 border-yellow-400 box-border selection:bg-yellow-400 selection:text-black relative overflow-hidden">
      {/* Design Elements */}
      <div className="hidden lg:block absolute top-[15%] right-[25%] h-[85%] w-[1px] bg-white/10 pointer-events-none"></div>

      {/* Header */}
      <header className="relative pt-24 pb-20 px-8 lg:px-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-baseline mb-20">
          <div className="text-2xl font-bold tracking-tighter italic mb-8 md:mb-0 text-yellow-400">JENGO.</div>
          <nav className="flex flex-wrap gap-8 font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
            <a href="#" className="border-b border-yellow-400 text-yellow-400 pb-1">Suite</a>
            <a href="#" className="opacity-50 hover:opacity-100 hover:text-yellow-400 transition-colors">Creators</a>
            <a href="#" className="opacity-50 hover:opacity-100 hover:text-yellow-400 transition-colors">Community</a>
          </nav>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] tracking-tight font-black mb-12 uppercase text-white">
            14 Apps.<br />
            <span className="italic ml-0 sm:ml-12 text-yellow-400">One Ecosystem.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
            <div className="md:col-span-7">
               <div className="max-w-md sm:ml-12">
                 <p className="font-sans text-sm leading-relaxed text-zinc-400">
                   From prompt engineering to payments — an exploration of full-stack creative workflows intersecting with robust AI paradigms, examined through a minimalist lens. Built for builders, creators, and communities.
                 </p>
               </div>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-12 font-sans text-[10px] uppercase tracking-[0.2em]">
               <div>
                 <p className="mb-2 text-zinc-500">Apps</p>
                 <p className="text-white font-semibold text-xl leading-none">14</p>
               </div>
               <div>
                 <p className="mb-2 text-zinc-500">Categories</p>
                 <p className="text-white font-semibold text-xl leading-none">6</p>
               </div>
               <div>
                 <p className="mb-2 text-zinc-500">State</p>
                 <p className="text-yellow-400 font-semibold text-xl leading-none">∞</p>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters (Sticky Bar) */}
      <div className="py-6 px-8 lg:px-20 sticky top-0 z-20 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-6xl mx-auto flex gap-8 font-sans text-[10px] uppercase tracking-[0.2em] font-medium overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`transition-colors pb-1 cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b border-yellow-400 text-yellow-400"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {tab.id === "All" ? `All ${appsData.length}` : tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <main className="py-12 px-8 lg:px-20 relative min-h-[50vh]">
        <div className="hidden lg:block absolute top-[40%] left-0 w-full h-[1px] bg-white/10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto flex flex-col relative z-10">
          {filteredApps.length === 0 && (
            <div className="pt-20 pb-32 text-center font-sans text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
              No applications deployed in this sector yet.
            </div>
          )}
          {filteredApps.map((app) => (
            <div key={app.id} className="border-b border-white/10 py-16 flex flex-col md:flex-row gap-8 group hover:bg-white/[0.03] transition-colors -mx-4 px-4 rounded-xl">
              <div className="flex-1">
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                    <div className="w-20 h-20 bg-yellow-400 relative flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 border-r-[4px] border-b-[4px] border-black/20"></div>
                      <app.iconId size={32} strokeWidth={1.5} className="text-black relative z-10" />
                      <div className="absolute bottom-1 left-1 font-sans text-[7px] uppercase tracking-tighter text-black/60 font-bold">
                         Pl. {app.id}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-500">Issue No. {app.id}</span>
                        {app.isPro && (
                          <span className="bg-yellow-400 text-black px-2 py-0.5 text-[8px] uppercase tracking-widest font-bold">PRO Edition</span>
                        )}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black tracking-tighter group-hover:italic group-hover:text-yellow-400 transition-all text-white">
                        {app.name}
                      </h3>
                    </div>
                  </div>
                  <div className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.2em] text-white font-semibold text-right">
                    <p className="text-zinc-500 mb-1 font-normal">Sector</p>
                    {app.category}
                  </div>
                </div>
                
                <div className="sm:hidden font-sans text-[10px] uppercase tracking-[0.2em] text-white font-semibold mb-6">
                  <span className="text-zinc-500 font-normal mr-2">Sector</span>
                  {app.category}
                </div>

                <div className="sm:ml-[120px] max-w-2xl">
                  <p className="font-sans text-sm leading-relaxed text-zinc-300 mb-8">
                    {app.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 font-sans text-[9px] uppercase tracking-widest text-zinc-500">
                    {app.tags.map((tag, i) => (
                      <span key={tag} className="flex items-center gap-4">
                        {i > 0 && <span>/</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 mt-8 sm:ml-[120px]">
                  <div className="font-sans text-[9px] uppercase tracking-[0.2em] text-white">
                    <span className="text-zinc-500">Designed For</span> <span className="font-semibold ml-2">{app.forText.replace(/•/g, '/')}</span>
                  </div>
                  <a href={app.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/btn">
                    <span className="w-8 h-[1px] bg-yellow-400 group-hover/btn:w-16 transition-all"></span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Read the Monograph</span>
                    <div className="w-8 h-8 rounded-full border border-yellow-400/30 flex items-center justify-center bg-transparent group-hover/btn:bg-yellow-400 group-hover/btn:text-black transition-colors">
                      <ArrowUpRight size={12} strokeWidth={1.5} className="text-current" />
                    </div>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative w-full px-8 lg:px-20 py-12 flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 bg-[#0A0A0A] border-t border-white/10">
        <div className="flex gap-4 items-center mb-8 sm:mb-0">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors cursor-pointer text-white">
            <span className="text-[10px] font-bold">↑</span>
          </button>
          <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-500 italic">Scroll for Perspective</span>
        </div>
        
        <div className="text-left sm:text-right">
          <p className="text-5xl md:text-7xl font-black text-white/[0.03] leading-none tracking-tighter">AX-24</p>
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] mt-4 text-zinc-600">©MMXXIV Studio Jengo</p>
        </div>
      </footer>
    </div>
  );
}

