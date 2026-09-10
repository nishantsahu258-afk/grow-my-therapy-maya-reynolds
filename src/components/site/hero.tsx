import Image from "next/image";

export default function Hero() {
  return (
    <section aria-label="Welcome" className="bg-cream">
      <div className="lg:flex lg:min-h-[82vh] lg:items-stretch">
        {/* Portrait — bleeds from the left edge (as in the original layout) */}
        <div className="relative h-[54vh] w-full lg:h-auto lg:w-[34%] lg:self-stretch">
          <Image
            src="/images/maya-portrait.jpg"
            alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, California"
            fill
            priority
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Copy block */}
        <div className="flex flex-1 flex-col justify-center px-6 py-16 md:px-14 lg:py-24 xl:px-20">
          <p className="eyebrow max-w-md leading-[2]">
            In-person &amp; telehealth therapy in Santa Monica &amp; across
            California
          </p>
          <h1 className="display-1 mt-10 max-w-[17ch] text-espresso md:mt-14">
            <em className="script-accent not-italic">Grounded</em> therapy for
            anxiety, trauma, and burnout in Santa Monica.
          </h1>
          <p className="body-copy mt-8 max-w-xl">
            Warm, evidence-based counseling for adults in Santa Monica &amp;
            across California — so you can finally begin to heal.
          </p>
          <div className="mt-10">
            <a href="#contact" className="link-underline">
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Sliver image — bleeds from the right edge (as in the original layout) */}
        <div className="relative hidden h-auto w-[7.5%] lg:block">
          <Image
            src="/images/detail-light.jpg"
            alt="Soft morning light falling across a linen curtain in a calm therapy space"
            fill
            sizes="8vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
