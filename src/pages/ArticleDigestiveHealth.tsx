import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How to Improve Digestive Health & Immunity in Dogs"
 * Top section: gray background. Bottom section: white with white border.
 */
const ArticleDigestiveHealth = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – above image */}
        <div className="w-full bg-[#EDF5FF] flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-6 text-center">
              How to Improve Digestive Health &amp; Immunity in Dogs
            </h1>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              If you&apos;ve ever experienced the effects of a chronic digestive issue or malfunctioning immune system, then you can understand why such issues might have a serious impact on your dog&apos;s well being. The fact that immune system functions depend heavily on digestive functions only makes it more important that you cover both bases for your beloved friend. Since a healthier gut means a healthier dog, let&apos;s look at this all-important connection and some ways you can strengthen your dog&apos;s overall wellness through proper nutritional care.
            </p>
          </div>
        </div>

        {/* Bottom section – white background from image down */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/article-digestive-health.png"
                  alt="Dog with carrot"
                  className="block w-full h-auto object-contain"
                />
              </div>

              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    The Connection Between Digestion and Disease Resistance
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    It might astonish you to learn that your dog&apos;s gastrointestinal tract hosts up to 80 percent of its immune system. There&apos;s literally a whole world in there -- a microbiome of healthy bacteria that play countless roles in maintaining wellness, from removing toxins and helping the gut digest nutrients to fighting off disease germs. It follows, then, that if your dog lacks the necessary count of these good bacteria, it may experience many kinds of health problems, including poor disease resistance. Untreated bacterial imbalances can lead to a chronic digestive problem called leaky gut syndrome.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Know the Signs of a Possible Gut Flora Imbalance
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    The flora that live in your dog&apos;s gut may be invisible to the naked eye, but the effects of a gut flora imbalance aren&apos;t. common symptoms may include anxiety, lethargy, itching, diarrhea, gas, tear staining, a drab-looking coat, and behavioral changes. Your dog may also seem to suffer from frequent illnesses and infections related to poor immune function. Your veterinarian can conduct various diagnostic tests to determine the exact state of your dog&apos;s gastrointestinal system and any treatment that might be required.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Helpful Digestive/Immune System Supplements
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Fortunately, nature provides a wealth of solutions to help you boost your dog&apos;s digestive health and immune function. Here are three examples.
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>
                      <strong>Probiotics</strong> - If your dog&apos;s gut needs more healthy bacteria, probiotics can help correct that imbalance safely and effectively. Probiotics are foods and supplements that introduce a fresh supply of good bacteria into the intestines. These good bacteria take up space that would otherwise be commandeered by disease-causing bacteria while also helping the digestive and immune systems do their work more efficiently.
                    </li>
                    <li>
                      <strong>Turmeric</strong> - Turmeric can help a dog suffering from gastric distress related to a gut flora imbalance. The active ingredient in this root, curcumin, boosts bile production for easier digestion of fats with less gas, diarrhea, and other side effects.
                    </li>
                    <li>
                      <strong>Yucca Schidigera</strong> - If your dog&apos;s digestive issues cause foul-smelling stools, yucca schidigera can help counteract this problem. This plant contains substances called saponins that may help the intestines absorb nutrients.
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

export default ArticleDigestiveHealth;
