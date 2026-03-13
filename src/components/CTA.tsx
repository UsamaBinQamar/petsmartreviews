import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="   ">
      <div className="container mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading-image">Editor&apos;s Choice</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Link
            to="/article/pheromone-diffusers-science"
            className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="overflow-hidden">
              <img
                src="/04_how_pheromone_diffusers_work_science.jpg"  // TODO: Change to the actual article
                alt=""
                className="w-full h-[170px] object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="card-title-image">
                How Pheromone Diffusers Work — <br />
                The Science Explained
              </h3>
            </div>
          </Link>

          <Link
            to="/article/cat-separation-anxiety"
            className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="overflow-hidden">
              <img
                src="/05_separation_anxiety_in_cats.jpg"  // TODO: Change to the actual article
                alt=""
                className="w-full h-[170px] object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="card-title-image">
                How To Deal With Separation <br />
                Anxiety in Cats <br />  <br />
              </h3>
            </div>
          </Link>

          <Link
            to="/article/multi-cat-calm"  // TODO: Change to the actual article
            className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="overflow-hidden">
              <img
                src="/06_maintain_calm_in_multi_cat_home.jpg"  // TODO: Change to the actual article
                alt="How To Maintain Your Cat's Calm in a Multi-Cat Home"  // TODO: Change to the actual article
                className="w-full h-[170px] object-cover rounded-xl"  // TODO: Change to the actual article
              />
            </div>
            <div className="p-4">
              <h3 className="card-title-image">
                How To Maintain Your Cat&apos;s <br />
                Calm in a Multi-Cat Home
              </h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="food-nutrition-section pt-12 pb-0 mt-8 bg-[#EDF5FF] py-24">
        <div className="container mx-auto px-6 py-24 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="section-heading-image">Cat Behaviour &amp; Health</h2>
          </motion.div>

          <div className="food-nutrition-cards mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link
              to="/article/inter-cat-aggression"      // TODO: Change to the actual article
              className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden bg-transparent"
            >
              <div className="overflow-hidden">
                <img
                  src="/07_reduce_inter_cat_aggression.jpg"
                  alt="How To Reduce Inter-Cat Aggression &amp; Fighting"  // TODO: Change to the actual article
                  className="w-full h-[170px] object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="card-title-image">
                  How To Reduce Inter-Cat <br />
                  Aggression &amp; Fighting
                </h3>
              </div>
            </Link>

            <Link
              to="/article/why-cat-sprays"  // TODO: Change to the actual article
              className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden bg-transparent"
            >
              <div className="overflow-hidden">
                <img
                  src="/02_why_your_cat_sprays.jpg"  // TODO: Change to the actual article
                  alt="Why Is My Cat Spraying Indoors? Causes &amp; Solutions"  // TODO: Change to the actual article
                  className="w-full h-[170px] object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="card-title-image">
                  Why Is My Cat Spraying <br />
                  Indoors? Causes &amp; Solutions
                </h3>
              </div>
            </Link>

            <Link
              to="/article/pheromone-diffusers-cats"  // TODO: Change to the actual article
              className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden bg-transparent"
            >
              <div className="overflow-hidden">
                <img
                  src="/01_do_pheromone_diffusers_really_work.jpg"  // TODO: Change to the actual article
                  alt="Do Pheromone Diffusers Really Work For Cats?"  // TODO: Change to the actual article
                  className="w-full h-[170px] object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="card-title-image">
                  Do Pheromone Diffusers <br />
                  Really Work For Cats?
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
