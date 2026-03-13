import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Article: "How to Improve Joint Health & Mobility in Dogs"
 * Exact text as provided; layout: title, intro, image, sections with bullet list.
 */
const ArticleJointHealth = () => {
  return (
    <div className="article-page min-h-screen bg-[#EDF5FF]">
      <Header />

      <article className="pt-24 pb-16 flex flex-col items-center">
        {/* Above image – #EDF5FF */}
        <div className="w-full bg-[#EDF5FF] flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-10 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-6 text-center">
              How to Improve Joint Health &amp; Mobility in Dogs
            </h1>
            <p className="text-base md:text-lg text-[#5a6c7d] leading-relaxed text-center">
              When you think of dogs enjoying their everyday lives, you probably envision them running, jumping, playing, or at least going for walks. Sadly, many dogs find it difficult or impossible to experience this quality of life due to joint problems that cause them chronic pain and limit their ability to move around. If your dog has developed a painful, debilitating joint problem, take a closer look at why such problems occur, how your veterinarian can treat them, and how proper nutritional support can ease that pain and stiffness.
            </p>
          </div>
        </div>

        {/* From image – #FFFFFF */}
        <div className="w-full bg-[#FFFFFF] flex justify-center">
          <div className="w-full max-w-3xl mx-auto px-6 py-6 md:py-10">
            <div className="w-full mx-auto mb-10">
              <img
                src="/article-joint-health.png"
                alt="Light-colored dog running on green grass"
                className="block w-full h-auto object-contain rounded-lg border border-black"
              />
            </div>

            <div className="space-y-10 text-[#222]">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                Common Joint Issues That Limit a Dog&apos;s Mobility
              </h2>
              <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                Dog joints work very much like human joints do, with assemblies of bone and cartilage articulated by muscles, tendons, and ligaments. This similarity means that dogs can suffer from arthritis (a blanket term for joint pain and inflammation) just as their owners can. In the most common form of degenerative joint disease, osteoarthritis, the cartilage between bone ends wears out and grows brittle, producing painful friction and inflammation within the joint. Osteoarthritis often develops with age, and obesity can worsen joint pain.
              </p>
              <p className="text-[0.9375rem] md:text-base leading-relaxed">
                Large breeds such as German Shepherds, Labrador Retrievers, and Great Danes, face elevated risks for an inherited condition called hip dysplasia. Poor alignment between the bone and socket of the hip joint allows for too much play within the joint, leading to painful deterioration. In addition to the general signs of pain and stiffness you&apos;d see from arthritis, your dog may display symptoms such as reduced thigh muscle mass and an odd bunny-hop gait.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                Treatment and Nutritional Support for Aching Joints
              </h2>
              <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                Veterinary medicine offers some helpful treatments for dogs suffering from chronic joint conditions. Options include non-steroidal anti-inflammatory drugs, steroid medications, and surgery to stabilize or modify a damaged joint. Obese dogs with joint pain often go on weight loss diets to ease the pressure on their joints. A gentle exercise routine can also help keep the joints as supple as possible.
              </p>
              <p className="text-[0.9375rem] md:text-base leading-relaxed mb-4">
                Nutritional supplementation can also help your dog regain mobility and experience less discomfort. Look for products that contain:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-[0.9375rem] md:text-base leading-relaxed">
                <li>
                  Glucosamine and Chondroitin - These two naturally-occurring substances work together to protect cartilage. Glucosamine may help the joint produce new collagen (connective tissue) while reducing inflammation. Chondroitin hydrates the cartilage to make it more elastic.
                </li>
                <li>
                  MSM - Methylsulfonylmethane, better known as MSM, can reduce inflammatory stress. In addition to reducing inflammation within the tendons, ligaments, and cartilage, MSM can ease pain and stiffness in the muscles that support and articulate the joints.
                </li>
                <li>
                  Fish Oil - Fish oil is rich in omega-3 fatty acids. These fatty acids have natural anti-inflammatory effects, easing your dog&apos;s pain and stiffness and potentially allowing your dog to take fewer drugs such as NSAIDs.
                </li>
                <li>
                  Manganese - Manganese may appear in small quantities in a dog&apos;s body, but this trace mineral can make a big impact on joint health. Supplemental manganese can help the joints produce and retain more collagen, cartilage, and bone.
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

export default ArticleJointHealth;
