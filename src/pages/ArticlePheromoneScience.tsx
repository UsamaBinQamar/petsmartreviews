import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How Pheromone Diffusers Work — The Science Explained"
 * By Sarah M. · PetSmartReviews · Updated 24/02/2026
 */
const ArticlePheromoneScience = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-4 text-center">
              How Pheromone Diffusers Work — The Science Explained
            </h1>
            <p className="text-sm md:text-base text-foreground/80 text-center mb-6">
              By Sarah M. · PetSmartReviews · Updated 24/02/2026
            </p>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Pheromone diffusers have moved from niche veterinary tool to mainstream cat care product in the last decade. But how exactly do they work? The answer lies in your cat&apos;s vomeronasal organ and the chemical language cats use to communicate.
            </p>
          </div>
        </div>

        {/* Bottom section – white content */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/04_how_pheromone_diffusers_work_science.jpg"
                  alt="Two cats indoors — multi-cat household and pheromone diffuser context"
                  className="block w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    What Are Cat Pheromones?
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Pheromones are chemical signals produced and detected within the same species. Unlike regular scents, pheromones are processed by the <strong>vomeronasal organ</strong> — a dedicated sensory structure located in the roof of the mouth — and bypass the conscious brain entirely. They trigger instinctive, emotional responses.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    When your cat rubs their face against furniture or your leg, they are depositing the Feline Facial Pheromone — a signal that says &quot;this is mine, this is safe.&quot; This is why face-rubbing is a comfort behaviour, not an aggression behaviour.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    The Two Key Pheromones
                  </h2>
                  <ul className="space-y-4 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>
                      <strong>Feline Facial Pheromone (FFP):</strong> Produced by glands around the cheeks and chin. Signals familiarity and territorial security. Reduces marking and spraying.
                    </li>
                    <li>
                      <strong>Maternal Appeasing Pheromone (MAP):</strong> Released by nursing mother cats from glands near their mammary tissue. Promotes calm and reduces stress-related behaviours in adult cats as well as kittens.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    How Diffusers Deliver These Signals
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    A pheromone diffuser uses low heat to evaporate a synthetic version of these pheromones into the surrounding air. The cat detects the signals, the vomeronasal organ processes them, and the brain responds as if the environment has been marked as safe.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    The critical difference between products is whether they use both pheromones or just one. Dual-pheromone formulas address both territorial stress (FFP) and emotional distress (MAP) simultaneously, making them significantly more effective for complex or persistent behaviour problems.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    How Long Until It Works?
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Most cat owners notice a reduction in stress behaviours within two to four weeks. For deeply established behaviours like chronic spraying, a full 60-day course is recommended to allow the pheromones to fully recalibrate your cat&apos;s perception of their environment.
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

export default ArticlePheromoneScience;
