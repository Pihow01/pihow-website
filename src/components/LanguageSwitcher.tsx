"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { languageOptions } from "@/lib/site";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Choose language"
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink"
      >
        <Globe size={16} />
        EN
      </button>
      {open ? (
        <>
          <button
            type="button"
            aria-label="Close language menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-hairline bg-surface p-2 shadow-lg">
            {languageOptions.map((lang) => (
              <div
                key={lang.code}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                  lang.available ? "text-ink" : "text-ink/40"
                }`}
              >
                <span>{lang.name}</span>
                {lang.available ? (
                  <Check size={14} className="text-teal" />
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-wide">soon</span>
                )}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
