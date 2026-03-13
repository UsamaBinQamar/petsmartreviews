import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How To Reduce Fighting Between Cats in the Same Home"
 * By Emma R · PetSmartReviews · Updated 24/02/2026
 */
const ArticleCatFighting = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-4 text-center">
              How To Reduce Fighting Between Cats in the Same Home
            </h1>
            <p className="text-sm md:text-base text-foreground/80 text-center mb-6">
              By Emma R · PetSmartReviews · Updated 24/02/2026
            </p>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Two cats living under one roof doesn&apos;t always mean two cats living in harmony. Hissing, chasing, ambushing and full-scale fighting can make home life stressful for both cats and owners. The good news is that most inter-cat conflict is manageable with the right approach.
            </p>
          </div>
        </div>

        {/* Bottom section – white content */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/03_reduce_fighting_between_cats.jpg"
                  alt="Two cats in a tense confrontation — illustrating inter-cat aggression"
                  className="block w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Why Do Cats Fight at Home?
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Cats are naturally solitary hunters. Unlike dogs, they are not pack animals and do not automatically accept other cats as companions. Fighting in the home usually comes down to one of three things: competition over resources, unresolved hierarchy, or redirected stress from outside the home.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>Limited food bowls, litter boxes or resting spots create competition</li>
                    <li>Outdoor cats visible through windows trigger indoor redirected aggression</li>
                    <li>A new cat introduced too quickly will almost always cause conflict</li>
                    <li>Illness, pain or stress in one cat can make them more reactive</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Practical Steps To Reduce Fighting
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    The foundation is resource separation. Each cat should have their own food bowl, water source and litter box, with one extra box for the household. Feeding stations should be in separate locations so neither cat feels threatened while eating.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Vertical space matters too. Cats feel safer when they can observe from height. Cat trees, shelves and window perches reduce conflict by allowing cats to avoid each other without confrontation.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    The Role of Pheromone Diffusers
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Pheromone diffusers address the emotional root of inter-cat aggression. The Maternal Appeasing Pheromone in particular has been shown to reduce tension between cats sharing a home, as it mimics the calming signal a mother cat uses with her litter — promoting association and reducing threat responses.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Place the diffuser in the room where conflict most commonly occurs and allow at least 30 days of consistent use before assessing results.
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

export default ArticleCatFighting;
