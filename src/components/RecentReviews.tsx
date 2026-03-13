import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecentReviews = () => {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-5 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="most-recent-heading"
        >
          Most Recent Reviews
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-[2fr_1fr] items-stretch"
        >
          {/* Left: one large block – dog/supplements image with blue overlay, white text */}
          <Link
            to="/article/supplements-help-your-dog"
            className="relative overflow-hidden bg-[#4D6DD7] text-white shadow-elevated block transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4D6DD7] min-h-[280px]"
          >
            <img
              src="/article-supplements.png"
              alt="Light-colored dog (Labrador puppy) looking up"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-[#4D6DD7]/70" aria-hidden />
            <div className="relative z-10 px-8 md:px-10 py-10 md:py-14 max-w-xl">
              <h3 className="featured-card-heading">
                How Can Supplements <br />
                Help Your Dog?
              </h3>
              <p className="featured-card-text">
                Many dogs don&apos;t seem to care much what they eat as long as they get plenty of it. If
                your dog follows this trend, you might assume that it gets all the nutrition it
                needs from regular store-bought &quot;chow.&quot;
              </p>
            </div>
          </Link>

          {/* Right: two stacked blocks – image left, text right */}
          <div className="flex flex-col gap-6 md:gap-8">
            <Link
              to="/article/healthy-eyes-clear-vision"
              className="grid grid-cols-[140px_1fr] gap-6 items-center rounded-xl transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6DD7] focus-visible:ring-offset-2"
            >
              <div className="overflow-hidden flex-shrink-0 w-[140px] h-[92px]">
                <img
                  src="/article-healthy-eyes.png"
                  alt="Close-up of a dog's eye"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="popular-tag">
                  POPULAR
                </div>
                <h3 className="recent-card-title">
                  Your Dog Needs <br />
                  Healthy Eyes and <br />
                  Clear Vision
                </h3>
              </div>
            </Link>

            <Link
              to="/article/joint-health-mobility"
              className="grid grid-cols-[140px_1fr] gap-6 items-center rounded-xl transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6DD7] focus-visible:ring-offset-2"
            >
              <div className="overflow-hidden flex-shrink-0 w-[140px] h-[92px]">
                <img
                  src="/article-joint-health.png"
                  alt="Dog running on green grass"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="recent-card-title">
                  How to Improve <br />
                  Joint Health &amp; <br />
                  Mobility in Dogs
                </h3>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentReviews;

