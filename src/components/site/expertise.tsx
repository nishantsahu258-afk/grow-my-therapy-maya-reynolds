import { expertise } from "@/lib/site";

export default function Expertise() {
  const half = Math.ceil(expertise.length / 2);
  const colA = expertise.slice(0, half);
  const colB = expertise.slice(half);

  return (
    <section aria-label="Areas of expertise" className="bg-white py-24 md:py-32">
      <div className="site-container grid gap-14 lg:grid-cols-[24%_1fr] lg:gap-20">
        {/* Label */}
        <h2 className="font-serif text-[clamp(1.9rem,2.6vw,2.4rem)] font-light leading-[1.25] text-espresso">
          My areas of
          <br />
          <em className="script-accent not-italic">expertise</em>
        </h2>

        {/* Two-column hairline list (as in the original layout) */}
        <div className="grid gap-x-16 sm:grid-cols-2">
          {[colA, colB].map((col, i) => (
            <ul key={i} className="border-t border-linen">
              {col.map((item) => (
                <li key={item}>
                  <span className="expertise-item">{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
