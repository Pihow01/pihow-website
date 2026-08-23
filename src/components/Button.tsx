import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-white px-6 py-3 hover:bg-teal-dark",
  secondary:
    "border border-teal text-teal px-6 py-3 hover:bg-teal hover:text-white",
  text: "text-teal underline-offset-4 hover:underline px-0 py-0",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
