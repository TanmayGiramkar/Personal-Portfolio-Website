interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionIntro({
  eyebrow,
  title,
  description
}: SectionIntroProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="section-label">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="max-w-2xl text-base sm:text-lg">{description}</p>
    </div>
  );
}

