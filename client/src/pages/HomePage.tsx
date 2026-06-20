import { Link } from "react-router-dom";
import { SectionIntro } from "../components/SectionIntro";
import { ProjectCard } from "../components/ProjectCard";
import { HeroPortrait } from "../components/HeroPortrait";
import { useSiteData } from "../context/SiteDataContext";

export function HomePage() {
  const { profile, projects, loading } = useSiteData();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="shell-container space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <div className="space-y-6">
          <span className="section-label">Tanmay Giramkar</span>
          <h1 className="display-title">IT Engineering Student building clean web products.</h1>
          <p className="max-w-2xl text-lg text-mist sm:text-xl">
            {profile?.headline ??
              "I'm a final-year IT engineering student building full-stack web apps with the MERN stack and looking for placement and entry-level opportunities."}
          </p>
          <p className="max-w-2xl text-base sm:text-lg">
            {profile?.summary ??
              "I enjoy building practical projects, especially interfaces that feel clear and easy to use. Most of my recent work has been around React, Node.js, Express, and MongoDB."}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={profile?.resumeUrl ?? "/resume/tanmay-giramkar-resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Download Resume
            </a>
            <Link to="/projects" className="button-secondary">
              View Projects
            </Link>
            <Link to="/contact" className="button-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <HeroPortrait photoUrl={profile?.photoUrl ?? ""} name={profile?.name ?? "Tanmay Giramkar"} />
      </section>

      <section className="panel-surface p-7 sm:p-9 lg:p-10">
        <span className="section-label">A Quick Intro</span>
        <h2 className="section-title mt-4">Simple, practical, and placement focused.</h2>
        <p className="mt-4 max-w-3xl text-base sm:text-lg">
          I like working on projects that solve real problems and feel good to use. Right now my focus is on strengthening my full-stack fundamentals, improving problem solving, and being ready for software roles through placements or internships.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {(profile?.strengths ?? []).map((item) => (
            <p key={item} className="text-base text-mist">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionIntro
          eyebrow="Featured Projects"
          title="A few projects I usually share with recruiters."
          description="These projects give a clear look at how I work across frontend, backend, and overall product thinking."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {loading
            ? [1, 2, 3].map((item) => (
                <div key={item} className="panel-surface h-[280px] animate-pulse bg-white/[0.04]" />
              ))
            : featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
        </div>
      </section>
    </div>
  );
}
