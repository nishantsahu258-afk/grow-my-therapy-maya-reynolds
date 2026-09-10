import Image from "next/image";

export default function Approach() {
  return (
    <section
      id="about"
      aria-label="My approach"
      className="scroll-mt-20 bg-sand py-24 md:py-32"
    >
      {/* Grid: container gutter | text | image bleeding to the right edge */}
      <div className="lg:grid lg:grid-cols-[max(1.5rem,calc((100%-80rem)/2+2.5rem))_minmax(0,1fr)_24%]">
        <div aria-hidden className="hidden lg:block" />

        <div className="px-6 lg:px-0 lg:pr-20 xl:pr-24">
          <p className="eyebrow">How we&rsquo;ll work together</p>
          <h2 className="display-2 mt-10 max-w-[22ch] text-espresso md:mt-14">
            A warm, collaborative, and grounded approach.
          </h2>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
            <div>
              <p className="caps-lead">
                Sessions are structured enough to feel supportive, while still
                leaving space for reflection and depth.
              </p>
              <p className="body-copy mt-6">
                I integrate evidence-based methods — including
                cognitive-behavioral therapy (CBT), EMDR, mindfulness-based
                practices, and body-oriented techniques — to help you
                understand both the emotional and physiological sides of what
                you&rsquo;re experiencing. You won&rsquo;t find a
                one-size-fits-all plan here; our work is shaped around your
                story, your pace, and your goals.
              </p>
            </div>
            <p className="body-copy md:pt-[4.3rem]">
              In trauma work especially, we move carefully, with an emphasis
              on safety, stabilization, and helping you feel more regulated in
              your daily life — not just during sessions. My goal is not only
              symptom relief, but helping you build insight, resilience, and a
              stronger relationship with yourself over time.
            </p>
          </div>

          <div className="mt-14">
            <a href="#contact" className="link-underline">
              Start the Conversation
            </a>
          </div>
        </div>

        {/* Image — bleeds to the right edge (as in the original layout) */}
        <div className="relative mt-14 h-[52vh] w-full lg:mt-0 lg:h-auto lg:min-h-[36rem]">
          <Image
            src="/images/approach.jpg"
            alt="Two comfortable armchairs facing each other in a warm, inviting therapy room"
            fill
            sizes="(min-width: 1024px) 24vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
