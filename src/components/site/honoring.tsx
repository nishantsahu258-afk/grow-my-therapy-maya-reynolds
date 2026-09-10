import Image from "next/image";

export default function Honoring() {
  return (
    <section aria-label="Honoring your story" className="bg-white py-24 md:py-32">
      {/* Grid: image bleeding from the left edge | text | container gutter */}
      <div className="lg:grid lg:grid-cols-[46%_minmax(0,1fr)_max(1.5rem,calc((100%-80rem)/2+2.5rem))] lg:items-center">
        <div className="relative h-[46vh] w-full lg:h-[30rem] xl:h-[34rem]">
          <Image
            src="/images/honoring.jpg"
            alt="A soft coastal walking path at sunrise near the Santa Monica hills, looking toward the ocean"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 px-6 lg:mt-0 lg:px-0 lg:pl-20 xl:pl-24">
          <h2 className="display-2 max-w-[18ch] text-espresso">
            Making sense of where you&rsquo;ve been{" "}
            <em className="script-accent not-italic">&amp;</em> where
            you&rsquo;re headed.
          </h2>
          <p className="body-copy mt-8 max-w-md">
            Earlier experiences can quietly shape your relationships, your
            confidence, and your sense of safety. Therapy is where we make
            space to understand them — so your past informs your path forward,
            without defining it.
          </p>
        </div>

        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
