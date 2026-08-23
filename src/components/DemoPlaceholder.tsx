import type { ReactNode } from "react";

export function DemoPlaceholder({
  children,
  note,
}: {
  children: ReactNode;
  note?: string;
}) {
  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 sm:p-5">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-amber-700">
        Demo placeholder — replace before launch
      </p>
      <div className="mt-2 text-sm leading-relaxed text-amber-950/80">
        {children}
      </div>
      {note ? (
        <p className="mt-2 text-xs italic text-amber-700/80">{note}</p>
      ) : null}
    </div>
  );
}
