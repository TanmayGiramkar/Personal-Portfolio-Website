import { useState } from "react";

interface HeroPortraitProps {
  photoUrl: string;
  name: string;
}

export function HeroPortrait({ photoUrl, name }: HeroPortraitProps) {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="portrait-shell aspect-[4/5]">
      {!hasError && photoUrl ? (
        <img
          src={photoUrl}
          alt={`${name} portrait`}
          className="portrait-image"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-[linear-gradient(180deg,#1a2230_0%,#111722_100%)]">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] font-display text-4xl font-bold text-text">
            {initials}
          </div>
        </div>
      )}
    </div>
  );
}
