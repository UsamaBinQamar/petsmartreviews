import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "Why Your Cat Sprays — And How To Stop It"
 * By Anna M. · PetSmartReviews · Updated 24/02/2026
 */
const ArticleCatSprays = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-4 text-center">
              Why Your Cat Sprays — And How To Stop It
            </h1>
            <p className="text-sm md:text-base text-foreground/80 text-center mb-6">
              By Anna M. · PetSmartReviews · Updated 24/02/2026
            </p>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Cat spraying is one of the most frustrating behaviours an owner can face. The smell is persistent, the mess is difficult to clean, and it often feels impossible to stop. But understanding why cats spray is the first step to solving the problem.
            </p>
          </div>
        </div>

        {/* Bottom section – white content */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/02_why_your_cat_sprays.jpg"
                  alt="Cat on bed — illustrating inappropriate urination and spraying behaviour"
                  className="block w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Spraying vs. Urinating — What&apos;s the Difference?
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Spraying is deliberate territory marking. Your cat backs up to a vertical surface — a wall, door, or sofa — and releases a small amount of urine at nose height. It&apos;s different from a litter box problem, which tends to involve larger amounts on horizontal surfaces.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Both male and female cats spray, though unneutered males are the most likely offenders. The trigger is almost always stress or territorial insecurity.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Common Causes of Spraying
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>A new cat, pet or person in the home</li>
                    <li>Seeing or smelling outdoor cats through windows</li>
                    <li>Changes to routine — moving house, new furniture, renovation</li>
                    <li>Conflict with another cat in a multi-cat household</li>
                    <li>Medical issues such as urinary tract infections</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    How To Stop It
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    First, rule out a medical cause with your vet. If your cat has a clean bill of health, the solution is almost always reducing the underlying stress rather than punishing the behaviour.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Pheromone diffusers are clinically shown to reduce spraying by signalling to your cat that their environment is safe and familiar. A dual-pheromone formula — one that combines the Feline Facial Pheromone with the Maternal Appeasing Pheromone — works on both the territorial and emotional triggers behind spraying.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Pair the diffuser with practical steps: block your cat&apos;s view of outdoor cats, ensure one litter box per cat plus one extra, and avoid punishing spray incidents, as this increases anxiety and worsens the behaviour.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleCatSprays;
