import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section bg-[#f5f6f8] pt-24 w-full" style={{ overflow: "visible" }}>
      <div className="container mx-auto px-5 md:px-6">
        <h2
          id="most-recent-reviews"
          className="mb-6 block w-full text-left"
          style={{
            color: "#222222",
            fontFamily: "Satoshi, sans-serif",
            fontSize: "36px",
            fontWeight: 600,
            lineHeight: 1.2,
            visibility: "visible",
            display: "block",
            opacity: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          Most Recent Reviews
        </h2>

        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] items-stretch overflow-hidden">
          <div className="flex flex-col gap-6 h-full">
            <Link
              to="/article/pheromone-diffusers-cats"
              className="hero-first-card relative overflow-hidden bg-[#4D6DD7] text-white shadow-elevated block transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4D6DD7] min-h-[220px] h-full rounded-xl"
              aria-label="Do Pheromone Diffusers Really Work For Cats?"
            >
              <img
                src="/01_do_pheromone_diffusers_really_work.jpg"      // TODO: Change to the actual article
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-[#4D6DD7]/70" aria-hidden />
              <div className="relative z-10 px-6 md:px-8 py-6 md:py-8 max-w-xl">
                <h3 className="featured-card-heading">
                  Do Pheromone Diffusers <br />
                  Really Work For Cats?
                </h3>
                <p className="featured-card-text">
                  Thousands of cat owners are turning to pheromone diffusers to stop spraying,
                  fighting and hiding. But do they actually work — and what does the science say? We
                  reviewed the research and tested the top products so you don&apos;t have to.
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 h-full">
            <Link
              to="/article/why-cat-sprays"
              className="grid grid-cols-[180px_1fr] gap-6 items-start transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6DD7] focus-visible:ring-offset-2 rounded-xl flex-1"
              aria-label="Why Your Cat Sprays — And How To Stop It"
            >
              <div className="overflow-hidden flex-shrink-0 w-[180px] h-full rounded-lg">
                <img
                  src="/02_why_your_cat_sprays.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col justify-start pt-0">
                <div className="popular-tag">POPULAR</div>
                <h3 className="recent-card-title">
                  Why Your Cat Sprays — <br />
                  And How To Stop It
                </h3>
              </div>
            </Link>

            <Link
              to="/article/reduce-cat-fighting"  // Change to the actual article 
              className="grid grid-cols-[180px_1fr] gap-6 items-start transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6DD7] focus-visible:ring-offset-2 rounded-xl flex-1"
              aria-label="How To Reduce Fighting Between Cats in the Same Home"
            >
              <div className="overflow-hidden flex-shrink-0 w-[180px] h-full rounded-lg">
                <img
                  src="/03_reduce_fighting_between_cats.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col justify-start pt-0">
                <div className="popular-tag">POPULAR</div>
                <h3 className="recent-card-title">
                  How To Reduce Fighting <br />
                  Between Cats in the <br />
                  Same Home
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
