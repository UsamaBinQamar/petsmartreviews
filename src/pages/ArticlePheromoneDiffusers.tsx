import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "Do Pheromone Diffusers Really Work For Cats?"
 * By Sarah M. · PetSmartReviews · Updated 24/02/2026
 */
const ArticlePheromoneDiffusers = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-4 text-center">
              Do Pheromone Diffusers Really Work For Cats?
            </h1>
            <p className="text-sm md:text-base text-foreground/80 text-center mb-6">
              By Sarah M. · PetSmartReviews · Updated 24/02/2026
            </p>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              If you&apos;ve been struggling with a cat that sprays, hides, fights or scratches obsessively, you&apos;ve probably come across pheromone diffusers. But do they actually work, or are they just expensive air fresheners? Here&apos;s what the science says.
            </p>
          </div>
        </div>

        {/* Bottom section – white content */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/01_do_pheromone_diffusers_really_work.jpg"
                  alt="Cat yawning — relaxed and calm, illustrating the calming effects of pheromone diffusers"
                  className="block w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    What Are Pheromone Diffusers?
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Pheromone diffusers plug into a standard wall socket and release synthetic versions of the natural chemical signals cats produce. The two most important are the <strong>Feline Facial Pheromone (FFP)</strong>, which cats deposit when they rub their face on objects to mark their territory as safe, and the <strong>Maternal Appeasing Pheromone (MAP)</strong>, produced by nursing mother cats to calm their kittens.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    When a cat detects these signals, their nervous system interprets the environment as safe and familiar — reducing the need to spray, fight or hide.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    What Does the Research Say?
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Multiple peer-reviewed studies have found pheromone therapy to be effective in reducing stress-related behaviours in cats. A 2019 study published in the <em>Journal of Feline Medicine and Surgery</em> found that cats exposed to synthetic facial pheromones showed significantly reduced urine marking compared to a control group.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    The key word here is <strong>combination</strong>. Products that use both FFP and MAP — a dual-pheromone formula — consistently outperform single-pheromone products in clinical settings, as they address both territorial anxiety and deeper emotional stress.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    What Can You Realistically Expect?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>Reduction in urine spraying within 2 to 4 weeks</li>
                    <li>Calmer behaviour around visitors or changes in the home</li>
                    <li>Reduced inter-cat tension in multi-cat households</li>
                    <li>Less hiding and more normal social behaviour</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    The Bottom Line
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    The evidence is clear: pheromone diffusers do work — but the quality of the formula matters enormously. A dual-pheromone diffuser with both FFP and MAP, used consistently over a 60-day period, gives cat owners the best chance of seeing lasting results. Single-pheromone or low-quality products are unlikely to deliver the same outcome.
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

export default ArticlePheromoneDiffusers;
