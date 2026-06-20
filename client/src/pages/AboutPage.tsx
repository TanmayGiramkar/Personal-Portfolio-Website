import { useSiteData } from "../context/SiteDataContext";

export function AboutPage() {
  const { profile } = useSiteData();

  return (
    <div className="shell-container space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="section-label">About</span>
          <h1 className="section-title mt-4">A little more about me.</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg">
            {profile?.summary ??
              "I'm a final-year IT engineering student who enjoys building clean, useful web applications and learning by actually shipping projects."}
          </p>
          <p className="mt-4 max-w-2xl text-base sm:text-lg">
            My main focus right now is full-stack development with the MERN stack, along with regular DSA practice and interview preparation for placements and early-career software roles.
          </p>
        </div>

        <div className="panel-surface p-7 sm:p-8">
          <p className="section-label">Looking For</p>
          <p className="mt-4 text-base sm:text-lg">
            {profile?.availability ??
              "Open to placements, internships, and entry-level software developer roles."}
          </p>

          <div className="mt-6 space-y-3">
            {(profile?.strengths ?? []).map((item) => (
              <p key={item} className="text-base text-mist">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
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
                {item.notes ? <p className="mt-3 text-sm">{item.notes}</p> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="panel-surface p-7 sm:p-8">
          <p className="section-label">How I Work</p>
          <div className="mt-5 space-y-4">
            {(profile?.workflow ?? []).map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="font-display text-lg font-bold text-accent">0{index + 1}</span>
                <p className="text-base text-mist">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
