import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PageTransition } from "./components/PageTransition";
import { useSiteData } from "./context/SiteDataContext";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";

export default function App() {
  const location = useLocation();
  const { error } = useSiteData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      {error ? (
        <div className="shell-container mb-6">
          <div className="rounded-[22px] border border-red-400/20 bg-red-400/10 px-5 py-4 text-sm text-red-100">
            {error}
          </div>
        </div>
      ) : null}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="/resume"
            element={
              <PageTransition>
                <ResumePage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
