import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How Can Supplements Help Your Dog?"
 * Exact text as provided; layout: title, intro, image, sections with bullet list.
 */
const ArticleSupplements = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-16 flex flex-col items-center">
        {/* Above image – #EDF5FF */}
        <div className="w-full bg-[#EDF5FF] flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-6 text-center">
              How Can Supplements Help Your Dog?
            </h1>
            <p className="text-base md:text-lg text-[#5a6c7d] leading-relaxed text-center">
              Many dogs don&apos;t seem to care much what they eat as long as they get plenty of it. If your dog follows this trend, you might assume that it gets all the nutrition it needs from regular store-bought &quot;chow.&quot; in reality, however, these products may not provide enough of certain key nutrients to optimize your canine friend&apos;s health and wellness, especially if special health problems call for some additional nutritional support. Let&apos;s examine the many important ways nutritional supplements can help your dog.
            </p>
          </div>
        </div>

        {/* From image – #FFFFFF */}
        <div className="w-full bg-[#FFFFFF] flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-6 md:py-10">
            <div className="w-full mx-auto mb-10">
              <img
                src="/article-supplements.png"
                alt="Light-colored dog with person holding supplement, offering to dog"
                className="block w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="space-y-10 text-[#222]">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                Why Nutrients Matter So Much
              </h2>
              <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                Nutrients are the substances that make an animal&apos;s body work. These substances play critical roles in everything from hormone production and tissue building to mood, digestion, and immune system management.
              </p>
              <p className="text-[0.9375rem] md:text-base leading-relaxed">
                Macronutrients include food components such as proteins, fats, and carbohydrates, while micronutrients include individual vitamins, minerals, and amino acids. Your dog needs the right quantities of both categories to enjoy optimal wellness. While most commercial dog foods aim for a sound nutritional balance, dogs that face particular diseases or disorders may require more than the usual amount of this or that nutrient.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                Supplementation for Different Health Challenges
              </h2>
              <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                Supplements can help your dog cope with a variety of health concerns more successfully, with different nutrients offering different benefits. Take a look at how you might use supplements to ease specific problems.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-[0.9375rem] md:text-base leading-relaxed">
                <li>
                  Chronic pain - Pain usually involves inflammation. If your dog suffers from chronic pain, supplements such as fish oil, willow bark, and cat&apos;s claw can all come to the rescue.
                </li>
                <li>
                  Joint problems - Dogs can struggle with degenerative joint problems such as arthritis and hip dysplasia. You can ease your dog&apos;s joint pain and mobility issues with glucosamine, chondroitin, MSM, fish oil, and manganese.
                </li>
                <li>
                  Eye health - Dogs can develop a variety of eye and vision problems. Fight back by supplementing your dog&apos;s diet with antioxidants such as zeaxanthin and lutein.
                </li>
                <li>
                  Digestive and immune conditions - Your dog&apos;s immune system relies heavily on its digestive system, the storehouse for healthy bacteria that govern both types of functions. Consider optimizing your pet&apos;s gut health with probiotics, turmeric, and yucca schidigera.
                </li>
                <li>
                  Skin and coat health - If your dog displays a dry-looking coat and scaly, itchy skin, nutritional supplementation may help. The nutrients in question may include fish oil, primrose oil, sunflower oil, and turmeric.
                </li>
                <li>
                  Stress and anxiety - Dogs may seem to have an easy life, but a combination of external stress triggers and hormonal imbalances can cause them to struggle with anxiety. If your dog needs more help that you can provide through behavioral training or veterinary treatment, consider supplements such as chamomile flower, passion flower, ginger root, and l-tryptophan.
                </li>
              </ul>
            </section>
          </div>
        </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleSupplements;
