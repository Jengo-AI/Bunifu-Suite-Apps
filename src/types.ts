import { LucideIcon } from "lucide-react";

export type AppStatus = "LIVE" | "BUILDING" | "SHIPPED";

export type AppCategory = 
  | "AI" 
  | "VISUAL AI" 
  | "REPOSITORY" 
  | "UI GEN" 
  | "ANALYTICS" 
  | "MARKETPLACE" 
  | "CREATOR" 
  | "PAYMENTS" 
  | "AI AGENT" 
  | "COMMUNITY" 
  | "SOCIAL";

export interface AppItem {
  id: string;
  code: string;
  name: string;
  isPro?: boolean;
  category: AppCategory;
  sectorGroup: "AI Tools" | "Creator" | "Social" | "Business" | "Payments" | "Marketplace";
  status: AppStatus;
  version: string;
  icon: LucideIcon;
  description: string;
  fullSpecs?: string;
  keyFeatures: string[];
  tags: string[];
  forText: string;
  link: string;
  stageTag: "BUILD" | "SHIP" | "MONETIZE" | "AUTOMATE" | "CONNECT";
}

export type ViewMode = "list" | "grid";

export interface FilterTab {
  id: string;
  label: string;
  count?: number;
}
