import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSiteData } from "../context/SiteDataContext";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" }
];

function navLinkClass(isActive: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-semibold transition duration-300",
    isActive
      ? "bg-white/[0.08] text-text"
      : "text-muted hover:bg-white/[0.05] hover:text-text"
  ].join(" ");
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { profile } = useSiteData();

  return (
    <div className="relative min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-canvas/88 backdrop-blur-xl">
        <div className="shell-container py-4">
          <motion.div
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="block">
                <p className="font-display text-lg font-bold tracking-[-0.03em] text-text">
                  Tanmay Giramkar
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-muted">
                  IT Engineering Student
                </p>
              </Link>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  end={item.to === "/"}
                  to={item.to}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2 md:hidden">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  end={item.to === "/"}
                  to={item.to}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main className="relative z-10 pb-20 pt-28 sm:pt-32">{children}</main>

      <footer className="subtle-divider relative z-10 py-8">
        <div className="shell-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-text">Tanmay Giramkar</p>
            <p className="text-sm">Bachelor of Engineering - IT</p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-muted">
            <a href={`mailto:${profile?.socials.email ?? "tanmaygiramkar@gmail.com"}`}>
              Email
            </a>
            <a
              href={
                profile?.socials.linkedin ??
                "http://www.linkedin.com/in/tanmay-giramkar-901a602b1"
              }
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            {profile?.socials.leetcode ? (
              <a href={profile.socials.leetcode} target="_blank" rel="noreferrer">
                LeetCode
              </a>
            ) : null}
            <a
              href={profile?.socials.github ?? "https://github.com/TanmayGiramkar"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
