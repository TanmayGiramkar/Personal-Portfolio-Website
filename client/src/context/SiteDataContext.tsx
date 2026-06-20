import { createContext, useContext, useMemo } from "react";
import type { Profile, Project } from "../../../shared/types";
import { profile, projects } from "../data/portfolioData";

interface SiteDataContextValue {
  profile: Profile | null;
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const SiteDataContext = createContext<SiteDataContextValue | undefined>(undefined);

export function SiteDataProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(
    () =>
      ({
        profile,
        projects,
        loading: false,
        error: null
      }) satisfies SiteDataContextValue,
    []
  );

  return (
    <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteDataContext);

  if (!context) {
    throw new Error("useSiteData must be used inside SiteDataProvider.");
  }

  return context;
}

