import Image from "next/image";

export default function QuoteBand() {
  return (
    <section aria-label="A note on therapy" className="relative overflow-hidden">
      {/* Warm office photograph under a deep espresso overlay (as in the original layout) */}
      <Image
        src="/images/office-2.jpg"
        alt="Tranquil, grounded therapy room interior at Dr. Maya Reynolds' Santa Monica clinical psychology office"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-coffee/85" aria-hidden />

      <div className="relative">
        <div className="site-container flex min-h-[58vh] items-center py-24 md:min-h-[64vh] md:py-32">
          <blockquote className="max-w-3xl">
            <p className="font-serif text-[clamp(1.7rem,3vw,2.55rem)] font-light leading-[1.35] text-cream">
              You deserve a place where you feel respected, understood, and
              actively involved —{" "}
              <em className="italic">
                a space to slow down, reconnect, and begin to feel at ease
                again.
              </em>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
