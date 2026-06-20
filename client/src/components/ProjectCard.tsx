import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../../../shared/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="panel-surface flex h-full flex-col p-6"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <p className="section-label">{project.year}</p>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-text">
        {project.name}
      </h3>

      <p className="mt-4 text-sm text-mist">{project.tagline}</p>
      <p className="mt-4 text-sm">{project.outcome}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span key={tag} className="badge-chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="button-secondary"
        >
          GitHub
        </a>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
