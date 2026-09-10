import { services } from "@/lib/site";

export default function Specialties() {
  return (
    <section id="services" aria-label="Services" className="scroll-mt-20 bg-white pb-24 md:pb-32">
      <div className="site-container grid gap-14 lg:grid-cols-[24%_1fr] lg:gap-20">
        {/* Label (sticky on desktop, as in the original layout) */}
        <h2 className="font-serif text-[clamp(1.9rem,2.6vw,2.4rem)] font-light leading-[1.3] text-espresso lg:sticky lg:top-16 lg:self-start">
          My <em className="script-accent not-italic">specialties</em>
          <br />
          include&hellip;
        </h2>

        {/* Service cards in a two-column grid (as in the original layout) */}
        <div className="grid gap-x-16 gap-y-16 md:gap-y-20 sm:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug}>
              <h3 className="display-3 text-espresso">{s.title}</h3>
              <p className="body-copy mt-5">{s.text}</p>
              <div className="mt-7">
                <a
                  href="#contact"
                  className="link-underline"
                  aria-label={`Learn more about ${s.title} and book an appointment`}
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
