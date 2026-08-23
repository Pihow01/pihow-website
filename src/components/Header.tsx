import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-teal">
          Pihow Services
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-teal"
              >
                {item.label}
                {item.children ? <ChevronDown size={14} className="opacity-60" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-xl border border-hairline bg-surface p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-paper"
                    >
                      <span className="font-medium">{child.label}</span>
                      {child.description ? (
                        <span className="mt-0.5 block text-xs text-ink/60">{child.description}</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-dark sm:inline-flex"
          >
            {siteConfig.booking.label}
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
