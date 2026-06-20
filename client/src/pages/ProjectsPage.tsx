import { SectionIntro } from "../components/SectionIntro";
import { ProjectCard } from "../components/ProjectCard";
import { useSiteData } from "../context/SiteDataContext";

export function ProjectsPage() {
  const { projects } = useSiteData();

  return (
    <div className="shell-container space-y-16">
      <section className="max-w-3xl">
        <SectionIntro
          eyebrow="Projects"
          title="Project work that shows how I build."
          description="These are the projects I would usually share with recruiters to show my frontend work, backend understanding, and overall full-stack approach."
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
    </div>
  );
}
