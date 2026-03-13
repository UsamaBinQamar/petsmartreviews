import { motion } from "framer-motion";

const Features = () => {
  return (
    <section id="features" className="bg-[#EDF5FF] py-24">
      <div className="container mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="about-section-heading">About PetSmartReviews</h2>
          <p className="about-section-intro">
            Our articles are sourced from content writers with a passion for cats and include advice
            and insights from feline behaviour specialists and veterinary professionals. We work
            hard to deliver up-to-date advice and products to help best support your cat. From
            stress and anxiety to multi-cat household management, we offer our readers an inside look
            into extensive knowledge to boost your cat&apos;s wellbeing.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-6"
          >
            <div className="shrink-0">
              <img
                src="https://www.smartpetreviews.com/assets/img/professional.svg"
                alt="Professional"
                className="h-16 w-auto"
              />
            </div>
            <div className="flex-1">
              <h3 className="about-feature-title">PROFESSIONAL</h3>
              <p className="about-feature-text">
                We strive to offer our personal advice based on research and third-party sources for
                all topics related to your cat. We offer guidance on various issues as well as
                product reviews. In some cases, we may receive compensation to sponsor certain
                products in our rankings, but we still promise to transparently show the
                product&apos;s ingredients and attributes so you can be well-informed.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-start gap-6"
          >
            <div className="shrink-0">
              <img
                src="https://www.smartpetreviews.com/assets/img/honest.svg"
                alt="Cat Lovers"
                className="h-16 w-16"
              />
            </div>
            <div className="flex-1">
              <h3 className="about-feature-title">CAT LOVERS</h3>
              <p className="about-feature-text">
                As cat owners ourselves, we would never recommend something that could put your cat
                in danger or harm. We do recommend, however, for any medical issues or health
                related topics, that you check with a veterinarian or qualified health professional
                if you have any doubts about your cat&apos;s specific condition or circumstances.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
