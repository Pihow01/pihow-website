"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-paper px-6 py-8">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <div key={item.href} className="border-b border-hairline py-3">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xl text-ink"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-2 flex flex-col gap-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-ink/70"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-medium text-white"
          >
            {siteConfig.booking.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
