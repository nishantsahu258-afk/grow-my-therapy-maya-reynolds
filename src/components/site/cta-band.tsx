import Image from "next/image";

export default function CtaBand() {
  return (
    <section aria-label="Schedule an appointment" className="bg-cream">
      <div className="lg:grid lg:grid-cols-[11%_1fr_26%] lg:items-center">
        {/* Left sliver image — bleeds from the left edge (as in the original layout) */}
        <div className="relative hidden h-[22rem] lg:block lg:h-[24rem]">
          <Image
            src="/images/office-1.jpg"
            alt=""
            fill
            sizes="11vw"
            className="object-cover"
            aria-hidden
          />
        </div>

        {/* Copy */}
        <div className="px-6 py-24 md:px-14 md:py-32">
          <p className="eyebrow">Schedule an appointment</p>
          <h2 className="display-2 mt-9 max-w-[20ch] text-espresso md:mt-12">
            Finding the right therapist is the first step — let&rsquo;s see if
            we&rsquo;re a good <em className="script-accent not-italic">fit</em>.
          </h2>
          <p className="body-copy mt-8 max-w-xl">
            Reaching out is a courageous decision, and feeling comfortable with
            your therapist makes all the difference. If you&rsquo;re looking
            for someone who combines practical tools with depth-oriented work —
            and who understands the realities of living and working in a
            fast-paced environment — I may be a good fit.
          </p>
          <p className="body-copy mt-5">Click the button below to get started.</p>
          <div className="mt-10">
            <a href="#contact" className="pill-button">
              Book Now
            </a>
          </div>
        </div>

        {/* Right image — bleeds to the right edge (as in the original layout) */}
        <div className="relative hidden h-[26rem] lg:block lg:h-[30rem]">
          <Image
            src="/images/cta-detail.jpg"
            alt="A warm cup of tea beside a plant in the soft light of the therapy office"
            fill
            sizes="26vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
