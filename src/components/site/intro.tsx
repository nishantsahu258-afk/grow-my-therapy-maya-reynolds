import Image from "next/image";

export default function Intro() {
  return (
    <section aria-label="Introduction" className="bg-cream pb-24 md:pb-32">
      {/* Grid: container gutter | text | image bleeding to the right edge */}
      <div className="lg:grid lg:grid-cols-[max(1.5rem,calc((100%-80rem)/2+2.5rem))_minmax(0,1fr)_30%]">
        <div aria-hidden className="hidden lg:block" />

        <div className="px-6 lg:px-0 lg:pr-16 xl:pr-20">
          <h2 className="display-2 max-w-[24ch] text-espresso">
            You look like you&rsquo;re holding it all together. Inside, you
            feel exhausted.
          </h2>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
            <div>
              <p className="caps-lead">
                At my Santa Monica practice, that exhaustion is taken
                seriously.
              </p>
              <p className="body-copy mt-6">
                Whether you&rsquo;re living with constant worry, tension you
                can&rsquo;t shake, difficulty sleeping, or the lingering
                effects of past experiences, therapy offers a compassionate
                and safe space to slow down and make sense of it all.
              </p>
            </div>
            <p className="body-copy md:pt-[2.9rem]">
              Many of the people I work with are high-achieving, thoughtful,
              and self-aware — yet feel stuck in overthinking or emotionally
              on edge. Together, we&rsquo;ll help you understand what
              you&rsquo;re carrying, feel more regulated in your daily life,
              and take a steady path forward with insight and resilience.
            </p>
          </div>
        </div>

        {/* Image — bleeds to the right edge (as in the original layout) */}
        <div className="relative mt-14 h-[46vh] w-full lg:mt-0 lg:h-auto lg:min-h-[34rem]">
          <Image
            src="/images/office-1.jpg"
            alt="The bright, quiet therapy office of Dr. Maya Reynolds in Santa Monica, with natural light and comfortable seating"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
