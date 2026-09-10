import Image from "next/image";
import { site } from "@/lib/site";

export default function Office() {
  return (
    <section
      id="office"
      aria-label="Our office in Santa Monica"
      className="scroll-mt-20 bg-sand py-24 md:py-32"
    >
      <div className="site-container">
        <p className="eyebrow">Our Santa Monica office</p>

        <div className="mt-10 grid gap-16 lg:mt-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          {/* Copy + details */}
          <div className="flex flex-col justify-center">
            <h2 className="display-2 max-w-[16ch] text-espresso">
              A quiet, private space designed to feel{" "}
              <em className="script-accent not-italic">calm</em>.
            </h2>
            <p className="body-copy mt-8">
              In-person sessions take place at my office at{" "}
              {site.address.full} — a quiet, private space with natural light
              and a comfortable, uncluttered environment. Clients often share
              that the space itself helps them feel more at ease when they
              arrive.
            </p>
            <p className="body-copy mt-5">
              If it&rsquo;s easier to meet from home, I also offer secure
              telehealth sessions for clients located anywhere in California —
              whatever works best for you.
            </p>

            <ul className="mt-10 border-t border-linen">
              <li className="detail-row">
                <span className="w-28 shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-clay-deep">
                  Where
                </span>
                <span className="text-espresso">{site.address.full}</span>
              </li>
              <li className="detail-row">
                <span className="w-28 shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-clay-deep">
                  How
                </span>
                <span className="text-espresso">
                  In-person sessions in Santa Monica &amp; secure telehealth
                  across California
                </span>
              </li>
              <li className="detail-row">
                <span className="w-28 shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-clay-deep">
                  The feel
                </span>
                <span className="text-espresso">
                  Natural light, comfortable seating, and an uncluttered,
                  grounding environment — calm, comfortable, and fully private
                </span>
              </li>
            </ul>
          </div>

          {/* Office photographs from the profile, in a soft asymmetric collage */}
          <div className="relative pb-16 pr-6 sm:pr-12 lg:pb-20 lg:pr-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/office-1.jpg"
                alt="The main seating area of the Santa Monica therapy office, with a soft sofa, armchair, and large sunny windows"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 aspect-[4/3] w-1/2 overflow-hidden border-[10px] border-sand sm:border-[14px] lg:w-[46%]">
              <Image
                src="/images/office-2.jpg"
                alt="A second view of the office showing the bookshelf, sofa, and warm hardwood floors"
                fill
                sizes="(min-width: 1024px) 26vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
