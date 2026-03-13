import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How To Maintain Your Cat's Calm in a Multi-Cat Home"
 * By Steph J. · PetSmartReviews · Updated 24/02/2026
 */
const ArticleMultiCatCalm = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-4 text-center">
              How To Maintain Your Cat&apos;s Calm in a Multi-Cat Home
            </h1>
            <p className="text-sm md:text-base text-foreground/80 text-center mb-6">
              By Steph J. · PetSmartReviews · Updated 24/02/2026
            </p>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Managing a multi-cat household is both rewarding and challenging. With the right environment and tools, cats that would otherwise be in constant conflict can coexist — and even bond.
            </p>
          </div>
        </div>

        {/* Bottom section – white content */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/06_maintain_calm_in_multi_cat_home.jpg"
                  alt="Cat sleeping peacefully on a bed — calm multi-cat home environment"
                  className="block w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    The Multi-Cat Challenge
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Cats are territorial by nature. In the wild, each cat would maintain a home range with minimal overlap. In a home, they are forced to share every resource — food, water, litter, sleeping spots, and your attention. Without careful management, this compression of territory causes chronic low-level stress that eventually erupts into visible conflict.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Setting Up the Space
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>One litter box per cat, plus one extra — never fewer</li>
                    <li>Multiple feeding stations in separate rooms or areas</li>
                    <li>At least one elevated resting spot per cat (cat trees, shelves)</li>
                    <li>Multiple scratch posts to allow scent-marking without conflict</li>
                    <li>Safe hiding spots where each cat can retreat and feel invisible</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Managing Introductions
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    If you are introducing a new cat, slow and structured introductions are essential. Begin with scent swapping — exchanging bedding between cats before they meet. Progress to visual access under a door gap, then supervised face-to-face meetings in a neutral space. Rushing this process is the single biggest cause of lasting hostility between cats.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Using Pheromones to Maintain Peace
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    A dual-pheromone diffuser running continuously in a shared living space creates a baseline of calm that makes conflict less likely. The Feline Facial Pheromone reduces territorial tension, while the Maternal Appeasing Pheromone promotes the kind of relaxed association cats experience in stable family groups.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    For best results in a multi-cat home, use one diffuser per main shared room and replace refills consistently every 30 days.
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

export default ArticleMultiCatCalm;
