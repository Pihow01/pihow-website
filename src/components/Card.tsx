import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-hairline bg-surface p-6 shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition-shadow duration-150 hover:shadow-[0_8px_24px_rgba(17,17,17,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
