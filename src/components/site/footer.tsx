import Link from "next/link";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" aria-label="Contact and practice information" className="scroll-mt-20 bg-white">
      <div className="site-container grid gap-14 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr_1.1fr_1.3fr] lg:gap-10">
        {/* Brand */}
        <div>
          <Link href="/#top" className="inline-block select-none">
            <span className="block font-serif text-[2.1rem] font-light leading-none text-espresso">
              {site.brandFirst}
            </span>
            <span className="mt-2 block text-[0.625rem] font-semibold uppercase tracking-[0.42em] text-clay-deep">
              {site.brandSecond}
            </span>
          </Link>
          <p className="body-copy mt-7 max-w-sm">
            I offer in-person therapy from my office in Santa Monica and secure
            telehealth sessions for clients located anywhere in California —
            whatever works best for you.
          </p>
        </div>

        {/* Navigate */}
        <nav aria-label="Footer">
          <h3 className="eyebrow !text-[0.75rem]">Navigate</h3>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.95rem] text-bark transition-colors hover:text-clay-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="eyebrow !text-[0.75rem]">Services</h3>
          <ul className="mt-6 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href="#services"
                  className="text-[0.95rem] text-bark transition-colors hover:text-clay-deep"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="eyebrow !text-[0.75rem]">Contact</h3>
          <address className="mt-6 not-italic">
            <p className="text-[0.95rem] leading-[1.9] text-bark">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
              <br />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-clay-deep"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-5 text-[0.95rem] italic leading-[1.9] text-bark">
              {site.serving}
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar (as in the original layout) */}
      <div className="bg-coffee">
        <div className="site-container flex flex-col gap-2 py-4 text-[0.8rem] tracking-wide text-cream/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} — {site.tagline}</p>
          <p>{site.address.city}, {site.address.state}</p>
        </div>
      </div>
    </footer>
  );
}
