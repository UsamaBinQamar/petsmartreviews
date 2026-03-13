import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How To Reduce Inter-Cat Aggression & Fighting"
 * By Steph J. · PetSmartReviews · Updated 24/02/2026
 */
const ArticleCatAggression = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-4 text-center">
              How To Reduce Inter-Cat Aggression &amp; Fighting
            </h1>
            <p className="text-sm md:text-base text-foreground/80 text-center mb-6">
              By Steph J. · PetSmartReviews · Updated 24/02/2026
            </p>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Inter-cat aggression is one of the most common reasons cat owners seek behavioural help. It ranges from subtle — stalking, blocking access to rooms — to dramatic and dangerous. Understanding the type of aggression is essential to addressing it correctly.
            </p>
          </div>
        </div>

        {/* Bottom section – white content */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/07_reduce_inter_cat_aggression.jpg"
                  alt="Two cats resting peacefully together — peaceful coexistence after reducing inter-cat aggression"
                  className="block w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Types of Inter-Cat Aggression
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[0.9375rem] md:text-base leading-relaxed">
                    <li><strong>Status-related aggression:</strong> One cat challenges the other for social hierarchy</li>
                    <li><strong>Territorial aggression:</strong> A cat defends specific spaces, furniture or entry points</li>
                    <li><strong>Redirected aggression:</strong> A cat aroused by an outside stimulus attacks the nearest cat</li>
                    <li><strong>Play aggression:</strong> Common in young cats, normal but can escalate</li>
                    <li><strong>Fear aggression:</strong> A cat attacks pre-emptively out of anxiety</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Identifying the Trigger
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Redirected aggression is particularly misunderstood. A cat sees a stray cat through a window, becomes aroused, cannot reach the threat — and attacks the nearest housemate. Owners often assume the cats simply dislike each other, when the actual trigger is entirely external.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Keep a short behaviour diary for one week: note when incidents occur, what preceded them, and which cat initiated. Patterns almost always emerge.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Intervention Strategies
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Never physically intervene in a cat fight — this redirects aggression onto you. Instead, use a loud noise or a thrown cushion to interrupt the behaviour without making physical contact.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    After an incident, separate the cats and allow a minimum of one hour of calm before reintroducing them. Forcing interaction too soon resets the stress cycle.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Pheromone therapy is highly effective for inter-cat aggression. The Maternal Appeasing Pheromone reduces the threat-response between cats, making peaceful coexistence significantly more likely over a 30 to 60 day period of consistent use.
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

export default ArticleCatAggression;
