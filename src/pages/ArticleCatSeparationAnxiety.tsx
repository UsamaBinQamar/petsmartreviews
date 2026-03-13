import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How To Deal With Separation Anxiety in Cats"
 * By Sarah M. · PetSmartReviews · Updated 24/02/2026
 */
const ArticleCatSeparationAnxiety = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-4 text-center">
              How To Deal With Separation Anxiety in Cats
            </h1>
            <p className="text-sm md:text-base text-foreground/80 text-center mb-6">
              By Sarah M. · PetSmartReviews · Updated 24/02/2026
            </p>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Cats have a reputation for independence, but separation anxiety is more common than most owners realise. If your cat vocalises excessively, destroys furniture, or stops using the litter box when you leave the house, anxiety may be the cause.
            </p>
          </div>
        </div>

        {/* Bottom section – white content */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/05_separation_anxiety_in_cats.jpg"
                  alt="Cat looking out the window — illustrating separation anxiety and observation of the outside"
                  className="block w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Signs of Separation Anxiety in Cats
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>Excessive vocalisation before or after you leave</li>
                    <li>Destructive scratching of doors, furniture or carpets</li>
                    <li>Urinating or defecating outside the litter box</li>
                    <li>Overgrooming leading to bald patches or sore skin</li>
                    <li>Refusing food while alone or immediately after you return</li>
                    <li>Excessive clinginess or following you from room to room</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Why Some Cats Are More Prone to Anxiety
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Cats raised as single pets, hand-reared kittens, and cats with a history of rehoming are significantly more likely to develop attachment-based anxiety. A sudden change in routine — a return to the office after working from home, for example — can trigger anxiety even in previously settled cats.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    How To Help an Anxious Cat
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Environmental enrichment is the foundation. Puzzle feeders, window perches, and background audio (radio or TV) all reduce the perceived emptiness of the home when you are absent.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Gradual desensitisation helps too — practice short absences and extend them slowly over several weeks to rebuild your cat&apos;s confidence in being alone.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Pheromone diffusers are a clinically recommended support for anxious cats. The Maternal Appeasing Pheromone mimics the calming signal of a nursing mother, reducing emotional stress at its neurological root. Use the diffuser in the room your cat spends the most time in while you are away.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    When To See a Vet
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    If anxiety is severe — your cat is not eating, is self-harming through overgrooming, or is showing signs of physical deterioration — consult your vet. In some cases, short-term anti-anxiety medication alongside behavioural support can make a significant difference.
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

export default ArticleCatSeparationAnxiety;
