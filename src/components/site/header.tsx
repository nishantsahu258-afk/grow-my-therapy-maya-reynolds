"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

function Brand() {
  return (
    <Link href="/#top" className="block select-none" aria-label={`${site.name} — home`}>
      <span className="block font-serif text-[1.65rem] font-light leading-none tracking-[0.01em] text-espresso">
        {site.brandFirst}
      </span>
      <span className="mt-1.5 block text-[0.5625rem] font-semibold uppercase tracking-[0.42em] text-clay-deep">
        {site.brandSecond}
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="bg-cream" id="top">
      <div className="site-container flex items-center justify-between py-6 md:py-7">
        <Brand />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="pill-button !py-2.5 !px-7">
            Contact
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/25 text-espresso transition-colors hover:border-clay-deep hover:text-clay-deep lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-cream lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="site-container flex items-center justify-between py-6">
            <Brand />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/25 text-espresso"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="site-container mt-10 flex flex-col gap-8"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl font-light text-espresso"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="pill-button mt-4 self-start"
            >
              Contact
            </a>
          </nav>
          <p className="site-container mt-auto pb-10 text-sm leading-relaxed text-bark">
            In-person therapy in {site.address.city}, California &amp; secure
            telehealth across California.
          </p>
        </div>
      )}
    </header>
  );
}
