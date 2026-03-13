import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How to Maintain Your Dog's Skin & Coat"
 * Top section: gray background. Bottom section: white with white border.
 */
const ArticleSkinCoat = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-10 flex flex-col items-center">
        {/* Top section – gray background */}
        <div className="w-full bg-gray-200 flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="font-display text-[1.75rem] md:text-[2.5rem] font-bold text-black leading-tight mb-6 text-center">
              How to Maintain Your Dog&apos;s Skin &amp; Coat
            </h1>
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              You probably understand the value of looking after your dog&apos;s overall health and cleanliness, from veterinary wellness exams and flea control to regular bathing and brushing. However, you should also know that dogs, like humans, can suffer from allergic reactions, immune system issues, hormonal imbalances, and other problems that can impact their skin and coat. Fortunately, you can take steps to counteract these issues and help your dog remain healthy, comfortable, and good-looking for years to come.
            </p>
          </div>
        </div>

        {/* Bottom section – white from image down */}
        <div className="w-full bg-[#EDF5FF] px-4 pb-6 flex justify-center">
          <div className="w-full max-w-3xl mx-auto border border-white bg-[#FFFFFF] shadow-sm">
            <div className="px-4 md:px-6 py-4 md:py-6">
              <div className="w-full mx-auto mb-6">
                <img
                  src="/article-skin-coat.png"
                  alt="Dog grooming"
                  className="block w-full h-auto object-contain"
                />
              </div>

              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    What Can Go Wrong With Your Dog&apos;s Skin or Coat?
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    If your dog doesn&apos;t harbor fleas, ticks, mites, or a fungal infection, you may wonder where that red, itchy skin and dry, sparse coat came from. In many cases, the problem lies with nutritional problems. For instance, some health challenges can interfere with the body&apos;s ability to digest nutrients in normal quantities. Many dogs develop dermatitis and itching due to allergic reactions or sensitivities to certain food ingredients, requiring them to go on special diets.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    If you notice unexplained changes in your dog&apos;s skin or coat, take it to the vet for an exam. Your pal might need treatment for an internal imbalance, or it may suffer from an allergy or sensitivity that responds to a combination of medication, dietary changes, and home care.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[1.25rem] md:text-[1.5rem] font-bold text-black leading-tight mb-4">
                    Nutritional Support to Fight Itching, Dryness, and Other Problems
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    While your veterinarian examines your dog for underlying disorders and/or recommends dietary or lifestyle changes as needed, you can safely give your canine friend some healthy nutritional supplementation to ease dry, scaly, itchy skin and rejuvenate its coat. Start with the following inflammation fighters.
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-[0.9375rem] md:text-base leading-relaxed">
                    <li>
                      <strong>Omega-3 Fatty Acids</strong> - These fatty acids occur naturally in fatty fish such as salmon. Omega-3 fatty acids convey powerful antioxidant and anti-inflammatory effects that support skin and coat health while reducing dermatitis symptoms.
                    </li>
                    <li>
                      <strong>Primrose Oil</strong> - Primrose oil contains omega-6 fatty acids, which can help support immune system function and skin health. Most importantly, it&apos;s rich in gamma-linolenic
                    </li>
                    <li>
                      <strong>Sunflower Oil</strong> - Like primrose oil, sunflower oil contains lots of omega-6 fatty acids to support normal immune function and help treat skin and coat issues. This particular supplement works its best magic for dogs who already consume home-cooked or specialized anti-inflammatory diets.
                    </li>
                    <li>
                      <strong>Turmeric</strong> - This common yellow-orange root doubles as a spice and natural medicine. Its most important ingredient, curcumin, offers antihistamine, antioxidant, and anti-inflammatory properties. However, if you simply feed your dog turmeric, its body probably won&apos;t absorb much of the curcumin. Instead, give your dog a supplement that combines turmeric with other helpful ingredients for maximum absorption.
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

export default ArticleSkinCoat;
