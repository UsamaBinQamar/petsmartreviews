import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8eef5]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-5 md:px-6 flex flex-col items-center">
          <div className="w-full max-w-4xl flex flex-col items-center">
            <div className="w-full bg-[#e6f0fa] rounded-xl py-8 md:py-10 px-6 md:px-8 text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#222] uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                About Us
              </h1>
            </div>
            <div className="w-full bg-white rounded-xl p-8 md:p-12 shadow-md text-left">
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                <p>
                  SmartPetReviews is a website in which we talk about the latest and greatest in pet wellbeing. We highlight ways to support your dog or cat&apos;s quality of life and on the best tips &amp; tricks to give them a great day. We also offer product reviews or highlights, in which we curate a list of some of the top products in a certain category. These lists are not-exhaustive and do not include every product in a certain category. We hand-pick products we believe (in our subjective opinion), to be high quality or notable.
                </p>
                <p>
                  In these reviews, we may receive compensation from sponsored or affiliated companies and this may influence where they are ranked or their position. However, we believe in transparency and in these cases, sponsored or affiliated products will be marked &quot;Sponsored&quot; wherever they may appear. It is also important to note for the sake of transparency, that this website receives financial compensation from Pawfy and is affiliated with that company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
