export interface FooterProps {
  activeTab: "Home" | "Settings";
  setActiveTab: (tab: "Home" | "Settings") => void;
}
