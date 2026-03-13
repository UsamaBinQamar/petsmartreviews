import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How To Deal With Separation Anxiety in Dogs"
 * Top section: gray background. Bottom section: white with white border.
 */
const ArticleSeparationAnxiety = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-6 text-center">
              How To Deal With Separation Anxiety in Dogs
            </h1>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              If you&apos;re like most dog owners, you&apos;d love nothing more than to play with your pet all day long. Unfortunately, the real world may force you to go about daily errands or take the occasional trip without your favorite pooch in tow. Some dogs handle periods of separation better than others, but full-blown separation anxiety can trigger serious stress and behavioral issues in your dog. Take a moment to learn about separation anxiety in dogs, from causes and symptoms to potential remedies.
            </p>
          </div>
        </div>

        {/* Bottom section – white from image down */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/article-separation-anxiety.png"
                  alt="Dog by door"
                  className="block w-full h-auto object-contain"
                />
              </div>

              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Symptoms of Separation Anxiety
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Dogs with separation anxiety may display seriously over-the-top reactions when their owners leave the home for significant periods of time. Even the prospect of an owner preparing to leave the home can trigger a bout of separation anxiety. Your dog may bark, howl, or try to block your way out the door. Once you&apos;ve gone, your dog may pace compulsively, dig or chew at the furniture, destroy household objects, and urinate or defecate inappropriately.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Why Dogs Develop Separation Anxiety
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Dogs experience anxiety disorders for many reasons, including underlying mental or physical health challenges that need treatment. However, most cases of separation anxiety develop simply because a dog has grown overly attached to its owner, without sufficient experience at being alone. Dogs who experienced abandonment in the past may also get triggered when their owner leaves them alone.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    From Treatment and Training to Healthy Supplements
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    If your pet displays any signs of serious anxiety, bring it to the veterinarian for a checkup. Your vet might need to prescribe medication for a neurological or physical ailment If the problem reveals itself as simple separation anxiety, schedule behavioral training with a skilled expert who can teach your dog how to be alone without feeling stress. You can also teach your dog to grow accustomed to the sound of keys jangling or the sight of humans using the front door.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Herbal and nutritional supplementation can often help an anxiety-prone dog remain calm. Examples include:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>
                      <strong>Chamomile Flower</strong> - If you&apos;ve ever felt soothed by a cup of chamomile tea, then you already know how well this flower can fight anxiety. Dogs can also benefit from powdered chamomile&apos;s nerve-settling properties.
                    </li>
                    <li>
                      <strong>Passion Flower</strong> - Passion flower boosts the brain&apos;s production of gamma-aminobutyric acid, producing a calming effect. It also helps to normalize mood-regulating substances such as dopamine and serotonin.
                    </li>
                    <li>
                      <strong>Ginger Root</strong> - Ginger doesn&apos;t just spice up food; it also boasts powerful antioxidant and stress-relieving effects for better brain health, both in humans and in dogs. Studies on animals show that ginger can influence serotonin levels.
                    </li>
                    <li>
                      <strong>L-Tryptophan</strong> - L-tryptophan occurs naturally in the body as an essential amino acid. Like passion flower and ginger root, it can help normalize serotonin levels, promoting calm and reducing destructive behaviors in dogs prone to anxiety disorders.
                    </li>
                  </ul>
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

export default ArticleSeparationAnxiety;
