import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, XIcon, InstagramIcon } from "./BrandIcons";
import { Container } from "./Container";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold text-teal">
            Pihow Services
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
            {siteConfig.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pihow Services on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink/70 hover:border-teal hover:text-teal"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pihow Services on X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink/70 hover:border-teal hover:text-teal"
            >
              <XIcon size={16} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pihow Services on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink/70 hover:border-teal hover:text-teal"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/50">
            Company
          </p>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink/70 hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/50">
            Services
          </p>
          <ul className="mt-4 space-y-3">
            {footerNav.services.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink/70 hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/50">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-ink/40" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-ink/40" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-teal">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-ink/40" />
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-teal">
                {siteConfig.contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-hairline">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-ink/50">
            © {new Date().getFullYear()} Pihow Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-ink/50 hover:text-teal">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
