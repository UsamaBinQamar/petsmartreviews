import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Simple checkmark icon (no lucide dependency) */
const CheckIcon = ({ className = "h-5 w-5", strokeWidth = 2.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/** X icon for cons */
const XIcon = ({ className = "h-5 w-5", strokeWidth = 2.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/** Close icon for modal */
const CloseIcon = ({ className = "h-6 w-6", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/** Filled star for ratings */
const StarIcon = ({ className = "h-5 w-5", filled = true }: { className?: string; filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 1.5} className={className} aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/** Badge check icon for ingredient list */
const BadgeCheckIcon = ({ className = "h-7 w-7", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7.2 15.3A4 4 0 0 1 4 12a4 4 0 0 1 3.2-3.7 4 4 0 0 1 3.6-5.4 4 4 0 0 1 6.4 0 4 4 0 0 1 3.6 5.4A4 4 0 0 1 20 12a4 4 0 0 1-3.2 3.7 4 4 0 0 1-3.6 5.4 4 4 0 0 1-6.4 0 4 4 0 0 1-3.6-5.4z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/**
 * Combined page: The Best 5 Cat Calming Diffusers in 2026
 * All sections from the provided screenshots and copy in one page.
 */
const ItchReliefDogs2025 = () => {
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const [isCouponVisible, setIsCouponVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDisclosureOpen) {
        setIsDisclosureOpen(false);
      }
    };

    if (isDisclosureOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isDisclosureOpen]);

  const openDisclosure = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDisclosureOpen(true);
  };

  const closeDisclosure = () => {
    setIsDisclosureOpen(false);
  };

  const closeCoupon = () => {
    setIsCouponVisible(false);
  };

  return (
    <div id="top" className="mt-16 article-page min-h-screen bg-[#EDF5FF]" style={{ overflow: "visible" }}>
      <Header />

      {/* Disclosure Modal */}
      {isDisclosureOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-in fade-in duration-200"
          onClick={closeDisclosure}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#0b1324]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Disclosure</h2>
              <button
                onClick={closeDisclosure}
                className="text-[#666] hover:text-[#0b1324] transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close disclosure"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="text-base leading-relaxed text-[#222] space-y-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <p>
                SmartPetReviews is a website which ranks and reviews certain products. It does not review all products in a specific category and our reviews are not exhaustive. It is also important to note that this website is sponsored and affiliated with Pawfy. Any products for which we receive compensation to rank or review will be marked as &quot;Sponsored&quot;. All opinions or judgements are purely the subjective opinion of our writers.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero pt-12 md:pt-24 pb-6 md:pb-16 px-4 md:px-8 flex flex-col items-center" style={{ background: '#EDF5FF', textAlign: 'center' }}>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
          {/* Sponsored disclaimer above title */}
          <p className="text-xs md:text-sm font-bold uppercase tracking-[1.2px] text-[#1e2a3b] mb-4 md:mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Sponsored Advertising Content
          </p>
          {/* Main Title */}
          <h1 className="text-[28px] md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6" style={{ color: "#0b1324", fontFamily: 'Satoshi, sans-serif', fontWeight: 800 }}>
            The Best 5 Cat Calming Diffusers in 2026
          </h1>

          {/* Subtitle */}
          <h4 className="text-[14px] md:text-base text-[#222] leading-relaxed mb-4 md:mb-8 font-normal max-w-md md:max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Discover the most effective products to stop your cat from spraying, scratching, stress &amp; more!
          </h4>

          {/* Skip To Navigation */}
          <ul className="hidden md:flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-6 md:mb-8 list-none pl-0 max-w-md md:max-w-none mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <li>
              <span className="text-sm md:text-base font-semibold text-[#0b1324] mr-2">Skip To:</span>
            </li>
            <li>
              <a
                href="#top5"
                className="inline-flex items-center px-4 md:px-5 py-2 rounded-full border border-[#C7D5F2] bg-[#EAF2FF] text-[#0b1324] text-sm md:text-base font-semibold hover:bg-[#DDE9FF] transition-colors shadow-none"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Top 5
              </a>
            </li>
            <li>
              <a
                href="#definitive"
                className="inline-flex items-center px-4 md:px-5 py-2 rounded-full border border-[#C7D5F2] bg-[#EAF2FF] text-[#0b1324] text-sm md:text-base font-semibold hover:bg-[#DDE9FF] transition-colors shadow-none"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Product Checklist
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="inline-flex items-center px-4 md:px-5 py-2 rounded-full border border-[#C7D5F2] bg-[#EAF2FF] text-[#0b1324] text-sm md:text-base font-semibold hover:bg-[#DDE9FF] transition-colors shadow-none"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Benefits
              </a>
            </li>
          </ul>

          {/* Advertising Disclaimer */}
          <div className="rounded-lg border border-[#8FA3BF] overflow-hidden max-w-md md:max-w-3xl mx-auto text-center bg-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <div className="bg-[#EAF2FF] py-2 px-4">
              <span className="font-extrabold uppercase text-[13px] md:text-base text-[#0b1324] tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800 }}>
                ADVERTISING DISCLAIMER
              </span>
            </div>
            <div className="py-3 px-4 text-[12px] md:text-sm font-semibold text-[#1e2a3b] leading-relaxed">
              This is a subjective round-up and it is not exhaustive of all products on the market. We may receive referral fees and we are affiliated with some brands we mention, such as TheraPet. For more information, see <a href="#" onClick={openDisclosure} className="disclosure-popup underline cursor-pointer text-[#316DFF] hover:text-[#1e4ed8] transition-colors font-semibold">disclosure.</a>
            </div>
          </div>
        </div>
      </section>

      <article className="pt-8 pb-16 flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto px-5 md:px-6">
          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <p className="text-sm text-[#666]">Updated on 24/02/2026</p>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-[#EAF2FF] flex items-center justify-center text-[#0b1324] font-bold text-sm shrink-0" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                SARAH M.
              </div>
              <p className="text-sm text-[#222] leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Sarah is our resident pet health and behaviour expert who recently retired from a 14-year career in veterinary teaching to pursue writing and researching.
              </p>
            </div>

            {/* Section: The Importance of Stopping Your Cat From Spraying & Stress Behaviours */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                The Importance of Stopping Your Cat From Spraying &amp; Stress Behaviours
              </h2>
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#222]">
                <p>
                  Your cat&apos;s behaviour is an indicator of their overall health, as well as having an important role to play in actually keeping your cat healthy. A calm, settled cat feels safe in their environment and is easy to live with. Chronic stress can cause <strong>damage to your home, injury to other pets and even lead to health complications and disease.</strong>
                </p>
                <p>
                  The dangers of letting your cat spray and scratch unabated are numerous. Besides the fact that stress behaviours are very disruptive for your household, they can also cause secondary health issues, since <strong>their stress forms a vital part of the problem, since it directly weakens your cat&apos;s immune system.</strong>
                </p>
                <p>
                  Luckily, many spraying or stress behaviours can be helped by using a <strong>high-quality pheromone diffuser.</strong> Read on to discover our Top 5 Cat Calming Diffusers.
                </p>
              </div>
            </section>

            {/* Section: Symptoms of a Stressed or Territorial Cat */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Symptoms of a Stressed or Territorial Cat
              </h2>
              <p className="mb-6 text-base md:text-lg leading-relaxed text-[#222]">
                There are lots of ways to tell if your cat has stress and territorial problems. Look out for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-start">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6 text-base md:text-lg leading-relaxed space-y-2 text-[#222]">
                  <li>Spraying or urinating outside the litter box</li>
                  <li>Repetitive scratching or attacking of other cats</li>
                  <li>Hiding, hissing or excessive vocalisation</li>
                  <li>Redness &amp; sore spots on skin from overgrooming</li>
                  <li>Swelling or inflammation from fighting injuries</li>
                  <li>Hair loss or excessive shedding from stress</li>
                </ul>
                <div className="flex justify-center md:justify-end">
                  <img
                    src="/02_why_your_cat_sprays.jpg"
                    alt="Cat on bed next to urine stain"
                    className="w-full max-w-[300px] md:max-w-[250px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </section>

          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222] mt-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {/* Section: Benefits of Cat Pheromone Diffusers */}
            <section id="benefits" className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Benefits of Cat Pheromone Diffusers
              </h2>
              <p className="mb-6 text-base md:text-lg leading-relaxed text-[#222] max-w-3xl mx-auto">
                There is a large amount of scientific research highlighting the benefits of pheromone diffusers for cats in supporting stress behaviours and boosting overall calm.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                High Quality Cat Pheromone Diffusers Can:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  "Support spraying & territorial marking",
                  "Calm & settle anxious or reactive cats",
                  "Support inter-cat aggression & fighting",
                  "Reduce hiding and encourage normal behaviour",
                  "Reduce stress-related overgrooming and hair loss",
                  "Support litter box use and reduce avoidance",
                  "Support immune system through reduced chronic stress",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#DDEBFF] border border-[#C7D7F2] text-left"
                  >
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#CFE0FF]" aria-hidden>
                      <CheckIcon className="h-4 w-4 text-[#2F5BD7]" strokeWidth={3} />
                    </span>
                    <span className="text-sm md:text-base font-semibold text-[#1E2A3B] leading-snug">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222] mt-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {/* Section: What To Look For In Cat Pheromone Diffusers */}
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-[#62C48F]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                What To Look For In Cat Pheromone Diffusers
              </h2>
              <p className="mb-8 text-base md:text-lg leading-relaxed text-[#222] max-w-3xl mx-auto">
                It can be confusing to determine which natural ingredients to look for in a diffuser We recommend:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {[
                  { name: "Dual Pheromone Formula", desc: "Choose diffusers which provide both the Feline Facial Pheromone and the Maternal Appeasing Pheromone." },
                  { name: "Odour-Free Formula", desc: "The best diffusers are completely odourless to humans and will not cause any unpleasant smells in your home." },
                  { name: "60-Day Supply Per Kit", desc: "Look for kits that include at least 60 days of coverage to reduce cost and the need to reorder frequently." },
                  { name: "Money-Back Guarantee", desc: "Brands with a 30 day money back guarantee commonly have higher quality products and lower risk." },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <img
                        src="/check-good.svg"
                        alt=""
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                      <h4 className="font-bold text-[#111] text-base md:text-lg">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-[#333] leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222] mt-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {/* Section: Your Definitive Checklist For Cat Pheromone Diffusers */}
            <section id="definitive">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Your Definitive Checklist For Cat Pheromone Diffusers
              </h2>
              <p className="mb-6 text-base md:text-lg leading-relaxed text-[#222]">
                These are some signs of a good quality product and may improve your chances of seeing results:
              </p>
              <details open className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <summary className="cursor-pointer text-sm md:text-base font-semibold text-[#316DFF]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Close/Open the Checklist
                </summary>
                <div className="mt-5 space-y-6">
                  {[
                    { title: "Dual Pheromone Technology", desc: "Feline Facial & Maternal Appeasing pheromones are the most effective combination that has been shown to reduce spraying & calm the cat." },
                    { title: "Money Back Guarantee", desc: "Brands with a 30 day money back guarantee commonly have higher quality products and lower risk." },
                    { title: "Vet-Recommended Formula", desc: "Look for diffusers that are reviewed and recommended by credentialed veterinary professionals, such as DVMs and RVTs which can bring further credibility." },
                    { title: "US-Based Company", desc: "We recommend companies headquartered and operating in the USA to ensure your product meets the highest safety and quality standards." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="flex-shrink-0 text-[#316DFF]" aria-hidden>
                        <CheckIcon className="h-5 w-5" strokeWidth={2.5} />
                      </span>
                      <div>
                        <h4 className="font-bold text-[#222] text-base mb-1">{item.title}</h4>
                        <p className="text-[0.9375rem] md:text-base text-[#444] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>
          </div>



          {/* Section: Top 5 Cat Calming Diffusers */}
          <section id="top5" className="mt-12 w-full">
            <div className="w-full px-3 md:px-6 lg:px-8">
              {/* How We Evaluated the Top 5 */}
              <h2 className="text-xl md:text-2xl font-bold text-[#0b1324] mb-4 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                How We Evaluated the Top 5
              </h2>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
                {["Effectiveness", "Ingredients", "Value for Money", "Customer Service"].map((label) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF2FF] border border-[#C7D5F2] text-[#0b1324] font-semibold text-sm md:text-base"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    <span className="text-amber-500" aria-hidden>⭐</span>
                    {label}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0b1324] leading-tight mb-6 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Top 5 Cat Calming Diffusers of 2026
              </h2>

              {/* Product Card: #1 TheraPet */}
              <div className="bg-white rounded-xl border-2 border-[#5FCE92] p-6 md:p-10 mb-8 shadow-sm">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <span className="text-amber-600">#1</span> Cat Calming Diffuser Kit <span className="text-[#666] font-normal italic">by TheraPet</span>
                  </h3>
                  <div className="h-0.5 w-full bg-amber-500/60 mt-2 max-w-md" aria-hidden />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-start">
                  <div className="flex flex-col items-center justify-center bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 min-h-[200px] md:min-h-[260px]">
                    <img
                      src="/81TsubHEjKL._AC_SL1500_-removebg-preview.png"
                      alt="TheraPet Cat Calming Diffuser Kit - box, diffuser unit and pheromone refill bottles"
                      className="w-full max-w-[220px] h-auto object-contain"
                    />
                    <p className="text-center text-[#0b1324] font-semibold text-sm mt-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>TheraPet Cat Calming Diffuser Kit</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="text-4xl md:text-5xl font-bold text-[#22c55e] mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>A+</div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Overall Grade</div>
                    </div>
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="flex justify-center gap-0.5 mb-2" aria-label="5 out of 5 stars">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <StarIcon key={i} className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                        ))}
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Total Ranking</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros</h4>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Contains Dual Pheromones (Feline Facial + Maternal Appeasing)",
                        "Contains 60-Day Starter Kit",
                        "Endorsed by 4 Vet Professionals by name",
                        "US-Based Company, Operated from the USA",
                        "Diffuser Form",
                        "30 Day Money Back Guarantee",
                      ].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-lg font-bold text-red-600 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons</h4>
                    <ul className="space-y-3">
                      {["Only Available Online", "Sometimes Out of Stock"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 mb-6">
                  <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                  <div className="space-y-4 text-base leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <p>
                      Of all cat calming diffusers that we tested on the market, TheraPet&apos;s Vet-Recommended Cat Calming Diffuser Kit is the clear winner.
                    </p>
                    <p>
                      With a powerful combination of 2 pheromones, Feline Facial and Maternal Appeasing, this diffuser contains a potent dose of highly beneficial signals and has shown superior efficacy for cat owners looking to solve a range of stress behaviours. By using multiple types of calming pheromones, TheraPet&apos;s Cat Calming Diffuser Kit comes with a wider range of benefits than competing products.
                    </p>
                    <p>
                      This diffuser contains the only dual-pheromone formula on this list and also includes the Maternal Appeasing Pheromone, a powerful calming signal derived from nursing mother cats, which many other brands failed to include.
                    </p>
                    <p>
                      The Maternal Appeasing Pheromone in the formula directly addresses territorial stress and helps combat spraying, fighting and hiding in the home.
                    </p>
                    <p>
                      It is clear that TheraPet has one of the most robust formulas to reduce stress-related behaviours and its associated symptoms, such as spraying, scratching, hiding, fighting &amp; more.
                    </p>
                    <p>
                      TheraPet is a <strong>US-Based Company, Headquartered and Operated in the USA</strong> and comes with a <strong>30 Day Money Back Guarantee + Bundle Discount</strong>. This helps ensure the safety and accuracy of their formula and allows cat owners to try them risk-free.
                    </p>
                    <p>
                      Overall, we have rated TheraPet as having the <strong>best cat calming diffuser on the market in 2026</strong> from all those that we tested.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#666] mb-6 leading-relaxed italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                </p>

                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-10 py-3 rounded-full bg-[#5AA247] text-white font-bold text-base hover:bg-[#4a8f3c] transition-colors shadow-sm"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    VISIT WEBSITE &gt;&gt;
                  </a>
                </div>
              </div>

              {/* Product Card: #2 Relaxivet */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-10 mb-8 shadow-sm">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <span className="text-amber-600">#2</span> Calming Pheromone Diffuser Kit <span className="text-[#666] font-normal italic">by Relaxivet</span>
                  </h3>
                  <div className="h-0.5 w-full bg-gray-300 mt-2 max-w-md" aria-hidden />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-start">
                  <div className="flex flex-col items-center justify-center bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 min-h-[200px] md:min-h-[260px]">
                    <img
                      src="/81iaJN-eo1L._AC_SL1500_-removebg-preview.png"
                      alt="Relaxivet Calming Pheromone Diffuser Kit"
                      className="w-full max-w-[220px] h-auto object-contain"
                    />
                    <p className="text-center text-[#0b1324] font-semibold text-sm mt-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Relaxivet Diffuser Kit</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="text-4xl md:text-5xl font-bold text-black mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>B+</div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Overall Grade</div>
                    </div>
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="flex justify-center gap-0.5 mb-2" aria-label="4 out of 5 stars">
                        {[1, 2, 3, 4].map((i) => (
                          <StarIcon key={i} className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                        ))}
                        <StarIcon filled={false} className="w-6 h-6 md:w-7 md:h-7 text-gray-300" />
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Total Ranking</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-[#22c55e] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros</h4>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Contains Pheromone Formula",
                        "Available on Amazon",
                        "Treat & Diffuser versions available",
                        "Drug-free Formula",
                      ].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-lg font-bold text-red-600 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons</h4>
                    <ul className="space-y-3">
                      {["No Dual Pheromone Formula", "No Maternal Appeasing Pheromone", "No Money-Back Guarantee"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 mb-6">
                  <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                  <div className="space-y-4 text-base leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <p>
                      Relaxivet is a pet wellness brand and their calming diffuser is well-rated. Their product contains a simple formula of just one active pheromone type.
                    </p>
                    <p>
                      The Feline Facial Pheromone is known to be beneficial for overall territorial comfort meanwhile their single-pheromone formula may help reduce mild anxiety. Their formula does not contain the Maternal Appeasing Pheromone however.
                    </p>
                    <p>
                      In addition, their pheromone is sourced from a single signal but it does not specify the full formulation, which may be worth knowing as some combinations, such as dual-pheromone blends, may be more beneficial or effective for a wider range of stress behaviours.*
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#666] mb-6 leading-relaxed italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    READ MORE
                  </a>
                </div>
              </div>

              {/* Product Card: #3 Zenpaws */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-10 mb-8 shadow-sm">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <span className="text-amber-600">#3</span> Cat Calming Pheromone Diffuser <span className="text-[#666] font-normal italic">by Zenpaws</span>
                  </h3>
                  <div className="h-0.5 w-full bg-gray-300 mt-2 max-w-md" aria-hidden />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-start">
                  <div className="flex flex-col items-center justify-center bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 min-h-[200px] md:min-h-[260px]">
                    <img
                      src="https://m.media-amazon.com/images/I/714tVoYgE0L._SL1500_.jpg"
                      alt="Zenpaws Cat Calming Pheromone Diffuser"
                      className="w-full max-w-[220px] h-auto object-contain"
                    />
                    <p className="text-center text-[#0b1324] font-semibold text-sm mt-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Zenpaws Cat Diffuser</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="text-4xl md:text-5xl font-bold text-black mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>B</div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Overall Grade</div>
                    </div>
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="flex justify-center gap-0.5 mb-2" aria-label="4 out of 5 stars">
                        {[1, 2, 3, 4].map((i) => (
                          <StarIcon key={i} className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                        ))}
                        <StarIcon filled={false} className="w-6 h-6 md:w-7 md:h-7 text-gray-300" />
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Total Ranking</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-[#22c55e] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros</h4>
                    <ul className="space-y-3 mb-6">
                      {["60-Day Kit Included", "Budget-Friendly Price Point", "Drug-Free"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-lg font-bold text-red-600 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons</h4>
                    <ul className="space-y-3">
                      {["Strong Unpleasant Odour Reported", "No Dual Pheromone Formula", "No Money-Back Guarantee"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 mb-6">
                  <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                  <p className="text-base leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    This diffuser contains a single-pheromone formula at a competitive price point. However, it fails to include the Maternal Appeasing Pheromone which is essential in calming territorial stress, and multiple reviewers report a strong unpleasant odour with no money-back guarantee to fall back on.*
                  </p>
                </div>

                <p className="text-xs text-[#666] mb-6 leading-relaxed italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    READ MORE &gt;
                  </a>
                </div>
              </div>

              {/* Product Card: #4 TriOak */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-10 mb-8 shadow-sm">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <span className="text-amber-600">#4</span> Cat Pheromones Calming Diffuser <span className="text-[#666] font-normal italic">by TriOak</span>
                  </h3>
                  <div className="h-0.5 w-full bg-gray-300 mt-2 max-w-md" aria-hidden />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-start">
                  <div className="flex flex-col items-center justify-center bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 min-h-[200px] md:min-h-[260px]">
                    <img
                      src="https://m.media-amazon.com/images/I/71WZfMshldL._AC_SL1500_.jpg"
                      alt="TriOak Cat Pheromones Calming Diffuser"
                      className="w-full max-w-[220px] h-auto object-contain"
                    />
                    <p className="text-center text-[#0b1324] font-semibold text-sm mt-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>TriOak Cat Diffuser</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="text-4xl md:text-5xl font-bold text-black mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>C</div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Overall Grade</div>
                    </div>
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="flex justify-center gap-0.5 mb-2" aria-label="3 out of 5 stars">
                        {[1, 2, 3].map((i) => (
                          <StarIcon key={i} className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                        ))}
                        {[4, 5].map((i) => (
                          <StarIcon key={i} filled={false} className="w-6 h-6 md:w-7 md:h-7 text-gray-300" />
                        ))}
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Total Ranking</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-[#22c55e] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros</h4>
                    <ul className="space-y-3 mb-6">
                      {["Very Affordable Price Point", "Odour-Free", "Drug-Free"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-lg font-bold text-red-600 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons</h4>
                    <ul className="space-y-3">
                      {["Overheating & Fire Hazard Reports", "No Dual Pheromone Formula", "No Money-Back Guarantee"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 mb-6">
                  <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                  <div className="space-y-4 text-base leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <p>
                      The main benefit of this diffuser is that it is odour-free, however, it falls short on numerous fronts. Firstly, it has documented overheating reports, which raise serious safety concerns for a device left plugged in overnight. Furthermore, it lacks the Maternal Appeasing Pheromone which is essential in calming territorial stress. It does however contain a pheromone formula which may provide some basic calming benefit.*
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#666] mb-6 leading-relaxed italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    READ MORE &gt;
                  </a>
                </div>
              </div>

              {/* Product Card: #5 bSerene */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-10 mb-8 shadow-sm">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    <span className="text-amber-600">#5</span> Advanced Pheromone Calming Diffuser <span className="text-[#666] font-normal italic">by bSerene</span>
                  </h3>
                  <div className="h-0.5 w-full bg-gray-300 mt-2 max-w-md" aria-hidden />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-start">
                  <div className="flex flex-col items-center justify-center bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 min-h-[200px] md:min-h-[260px]">
                    <img
                      src="https://m.media-amazon.com/images/I/61NSvjyNqQL._AC_SL1080_.jpg"
                      alt="bSerene Advanced Pheromone Calming Diffuser"
                      className="w-full max-w-[220px] h-auto object-contain"
                    />
                    <p className="text-center text-[#0b1324] font-semibold text-sm mt-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>bSerene Cat Diffuser</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="text-4xl md:text-5xl font-bold text-black mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>D+</div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Overall Grade</div>
                    </div>
                    <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                      <div className="flex justify-center gap-0.5 mb-2" aria-label="1 out of 5 stars">
                        <StarIcon className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                        {[2, 3, 4, 5].map((i) => (
                          <StarIcon key={i} filled={false} className="w-6 h-6 md:w-7 md:h-7 text-gray-300" />
                        ))}
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>Total Ranking</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-[#22c55e] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros</h4>
                    <ul className="space-y-3 mb-6">
                      {["Dual Pheromone Formula (F3 + Maternal)", "UL-Certified Unit", "Larger Coverage Area"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-lg font-bold text-red-600 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons</h4>
                    <ul className="space-y-3">
                      {["Cracking & Leaking Oil Reported", "Human Respiratory Reactions Reported", "Bad Value For Money"].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-6 md:p-8 mb-6">
                  <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                  <p className="text-base leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    While this product does contain a dual pheromone formula, it does at least include both the Feline Facial and Maternal Appeasing Pheromones, which are critical in addressing territorial stress. It does however fall short on the reliability of its hardware, with documented cracking and leaking reports, which could impact its safety and effectiveness.*
                  </p>
                </div>

                <p className="text-xs text-[#666] mb-6 leading-relaxed italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    READ MORE &gt;
                  </a>
                </div>
              </div>

              <div className="text-center mb-6">
                <a href="#top5" className="text-sm md:text-base font-semibold text-[#316DFF] underline" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Skip To Top 5
                </a>
              </div>

              {/* Our Recommendation Section */}
              <div className="bg-[#EDF5FF] rounded-xl p-6 md:p-8 mt-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#666] mb-2 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Our Recommendation
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0b1324] mb-8 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Top Cat Calming Diffuser of 2026
                </h3>
                <div className="bg-white rounded-xl border-2 border-[#4D6DD7] p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6">
                    <div className="flex flex-col items-center justify-center flex-shrink-0 w-full md:w-auto">
                      <div className="bg-[#EAF2FF] rounded-xl border border-[#C7D5F2] p-4 md:p-6 w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center mb-4 overflow-hidden">
                        <img
                          src="/81TsubHEjKL._AC_SL1500_-removebg-preview.png"
                          alt="TheraPet Cat Calming Diffuser Kit"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-[#0b1324] text-center md:text-left" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        Cat Calming Diffuser Kit by TheraPet
                      </h4>
                    </div>
                    <ul className="text-sm md:text-base font-semibold text-[#0b1324] space-y-2 text-left w-full md:max-w-xs">
                      {[
                        { label: "Effectiveness", grade: "A+" },
                        { label: "Ingredients", grade: "A+" },
                        { label: "Value for Money", grade: "A+" },
                        { label: "Customer Service", grade: "A+" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-center justify-between gap-4 bg-[#dcfce7] border border-[#bbf7d0] rounded-md px-3 py-2">
                          <span style={{ fontFamily: 'Satoshi, sans-serif' }}>{item.label}</span>
                          <span className="font-bold text-[#166534]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{item.grade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-[#222] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Overall, <strong>TheraPet&apos;s Cat Calming Diffuser Kit</strong> provides the best bang for your buck. With science-backed pheromones which have been thoroughly-researched, they also come with a money-back guarantee and bundle discount. We highly recommend these to support a wide range of stress and territorial behaviours or for long term prevention.
                  </p>
                  <div className="text-center mb-8">
                    <a
                      href="#"
                      className="inline-block px-10 py-4 bg-[#0b1324] text-white font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      SHOP NOW
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center border-t border-[#E5ECF4] pt-6">
                    <p className="font-bold text-[#0b1324] text-sm md:text-base" style={{ fontFamily: 'Satoshi, sans-serif' }}>US-Based Company</p>
                    <p className="font-bold text-[#0b1324] text-sm md:text-base" style={{ fontFamily: 'Satoshi, sans-serif' }}>Money-Back Guarantee</p>
                    <p className="font-bold text-[#0b1324] text-sm md:text-base" style={{ fontFamily: 'Satoshi, sans-serif' }}>Bundle Discount</p>
                  </div>
                </div>
              </div>

              {/* Sources Section */}
              <div className="mt-8 mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-[#0b1324] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Sources:
                </h2>
                <ul className="space-y-2 list-disc pl-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6766488/" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6766488/
                    </a>
                  </li>
                  <li>
                    <a href="https://academic.oup.com/jn/article/128/12/2730S/4724343" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      https://academic.oup.com/jn/article/128/12/2730S/4724343
                    </a>
                  </li>
                  <li>
                    <a href="https://www.akc.org/expert-advice/health/stress-in-cats/" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      https://www.akc.org/expert-advice/health/stress-in-cats/
                    </a>
                  </li>
                  <li>
                    <a href="https://vcahospitals.com/know-your-pet/pheromone-therapy-in-cats" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      https://vcahospitals.com/know-your-pet/pheromone-therapy-in-cats
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </section>
        </div>
      </article>

      <a
        href="#top"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-white/90 border border-[#DCEBFF] px-4 py-2 text-sm font-semibold text-[#316DFF] shadow-md hover:bg-white"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
        aria-label="Return to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 15l-6-6-6 6" />
        </svg>
        Return to Top
      </a>

      {isCouponVisible && (
        <div className="fixed bottom-6 right-6 z-40 max-w-xs w-full bg-white rounded-xl border border-[#DCEBFF] shadow-xl p-4 md:p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h4 className="text-sm md:text-base font-bold text-[#0b1324]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              We Found a Coupon For #1! Get 10% off with code: <span className="text-[#316DFF]">10OFF</span>
            </h4>
            <button
              type="button"
              onClick={closeCoupon}
              className="text-[#666] hover:text-[#0b1324] transition-colors"
              aria-label="Close coupon"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-[#5FCE92] text-white font-bold text-sm hover:bg-[#4db87a] transition-colors"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Claim Offer
          </a>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ItchReliefDogs2025;
