import Image from "next/image";
import { audiences } from "@/lib/site";

export default function WhoIHelp() {
  return (
    <section id="who-i-help" aria-label="Who I help" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="site-container">
        <h2 className="display-2 text-espresso">
          Who I <em className="script-accent not-italic">help</em>
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-16 md:mt-20 md:grid-cols-3 md:gap-x-12">
          {audiences.map((a) => (
            <article key={a.title}>
              <div className="relative aspect-[8/9] w-full overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="display-3 mt-9 text-espresso">{a.title}</h3>
              <p className="body-copy mt-5">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
