export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className="mb-3">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
