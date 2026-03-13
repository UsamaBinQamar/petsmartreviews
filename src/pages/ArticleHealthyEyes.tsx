import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "Your Dog Needs Healthy Eyes and Clear Vision"
 * Centered title and intro, main image, then left-aligned sections.
 */
const ArticleHealthyEyes = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-16 flex flex-col items-center">
        {/* Above image – #EDF5FF */}
        <div className="w-full bg-[#EDF5FF] flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-6 text-center">
              Your Dog Needs Healthy Eyes and Clear Vision
            </h1>
            <p className="text-base md:text-lg text-[#5a6c7d] leading-relaxed text-center">
              We all know that dogs depend heavily on their sense of smell and hearing to take in the world around them. But dogs also depend on optimal eyesight to navigate obstacles safely, see potential prey or predators, and enjoy those countless games of catch with their beloved humans. As a concerned dog owner, you should understand some key points about how you and your vet can help your dog keep seeing clearly for many years to come.
            </p>
          </div>
        </div>

        {/* From image – #FFFFFF */}
        <div className="w-full bg-[#FFFFFF] flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-6 md:py-10">
            <div className="w-full mx-auto mb-10">
              <img
                src="/article-healthy-eyes.png"
                alt="Close-up of a dog's healthy brown eye"
                className="block w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="space-y-10 text-[#222]">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                    Common Threats to Your Dog&apos;s Eyes
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    A dog&apos;s eyes can suffer from many of the same issues as human eyes. For instance, an injury or infection can cause corneal redness, eye discharge, and irritation. Dry eyes from insufficient water or oil in the tears can lead to blurry vision and potential corneal damage. Older (or diabetic) dogs can develop cataracts that cloud the lenses of their eyes. Certain species of dogs, including Chow Chows, Poodles, and Cocker Spaniels, face an elevated risk of glaucoma.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                    Nutritional Support to Fight Itching, Dryness, and Other Problems
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    While your veterinarian examines your dog for underlying disorders and/or recommends dietary or lifestyle changes as needed, you can safely give your canine friend some healthy nutritional supplementation to ease dry, scaly, itchy skin and rejuvenate its coat. Start with the following inflammation fighters.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                    Symptoms That Merit Evaluation and Treatment
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                    Some eye problems cause visible changes in the eyes themselves. Cataracts, for instance, make the eyes appear white or cloudy, while infections or injuries can turn the affected eye red. Even if you don&apos;t see obvious eye symptoms, watch for behavioral changes such as bumping into objects, hesitation when it comes to navigating household obstacles, easy startling, confusion, and pawing at a painful eye.
                  </p>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Thankfully, veterinarians can treat many eye issues with antibiotics, lubricant eye drops, and other medications. Surgery can sometimes fix a damaged eye or replace a cataract-clouded lens. If your dog&apos;s vision can&apos;t be saved or corrected, your veterinarian can recommend home care strategies for helping your dog get through life more easily and confidently.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                    Preventative Care and Nutritional Support
                  </h2>
                  <p className="text-[0.9375rem] md:text-base leading-relaxed">
                    Even if your dog&apos;s eyes and vision seem fine at the moment, you&apos;ll want to keep scheduling regular veterinary wellness checks. Proper nutrition can help preserve and optimize your dog&apos;s vision. Feed your dog sweet potatoes, kale, broccoli, carrots, and blueberries. Omega-3 fatty acids from sardines and other fatty fish help support eye health.
                  </p>
                </section>
          </div>
        </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleHealthyEyes;
