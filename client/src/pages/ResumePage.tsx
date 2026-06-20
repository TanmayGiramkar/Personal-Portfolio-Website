import { useSiteData } from "../context/SiteDataContext";

export function ResumePage() {
  const { profile } = useSiteData();

  return (
    <div className="shell-container space-y-16">
      <section className="panel-surface flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="section-label">Resume</span>
          <h1 className="section-title mt-4">A short, clear summary of my profile.</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg">
            This page gives a quick overview of my education, project work, skills, and current focus. The full resume is available as a PDF as well.
          </p>
        </div>

        <a
          href={profile?.resumeUrl ?? "/resume/tanmay-giramkar-resume.pdf"}
          target="_blank"
          rel="noreferrer"
          className="button-primary"
        >
          Open Resume PDF
        </a>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="panel-surface p-7 sm:p-8">
          <p className="section-label">Education</p>
          <div className="mt-5 space-y-5">
            {profile?.education.map((item) => (
              <div key={`${item.degree}-${item.period}`}>
                <p className="text-sm uppercase tracking-[0.22em] text-muted/75">{item.period}</p>
                <p className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-text">
                  {item.degree}
                </p>
                <p className="mt-2 text-sm text-mist">{item.institution}</p>
                {item.score ? <p className="mt-3 text-sm">Score: {item.score}</p> : null}
                {item.notes ? <p className="mt-3 text-sm">{item.notes}</p> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="panel-surface p-7 sm:p-8">
          <p className="section-label">Experience & Practice</p>
          <div className="mt-5 space-y-6">
            {profile?.experience.map((item) => (
              <div key={`${item.role}-${item.period}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-display text-2xl font-bold tracking-[-0.04em] text-text">
                      {item.role}
                    </p>
                    <p className="mt-1 text-sm text-mist">{item.organization}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.22em] text-muted/75">{item.period}</p>
                </div>
                <p className="mt-4 text-base">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span key={highlight} className="badge-chip">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="panel-surface p-7 sm:p-8">
          <p className="section-label">Skills & Tech</p>
          <div className="mt-5 space-y-6">
            {profile?.skills.map((category) => (
              <div key={category.label}>
                <p className="font-display text-2xl font-bold tracking-[-0.04em] text-text">
                  {category.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="badge-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-surface p-7 sm:p-8">
          <p className="section-label">Highlights</p>
          <div className="mt-5 space-y-3">
            {profile?.achievements.map((item) => (
              <p key={item} className="text-base text-mist">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 subtle-divider">
            <p className="section-label">Major Certifications</p>
            <div className="mt-5 space-y-3">
              {profile?.certifications.map((item, index) => (
                <p key={item} className="text-base text-mist">
                  {index + 1}. {item}
                </p>
              ))}
            </div>
            <p className="mt-5 text-base text-mist">
              More licenses and certificates are available on LinkedIn.
            </p>
            {profile?.certificationsUrl ? (
              <a
                href={profile.certificationsUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary mt-5"
              >
                View Certifications on LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
