import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-2 text-center bg-[#EDF5FF] border-b border-[#cce0f5]">
        <div className="container mx-auto px-5 md:px-6">
          <Link to="/article/pheromone-diffusers-cats" className="text-[#316DFF] font-semibold underline hover:no-underline">
            Do Pheromone Diffusers Really Work For Cats? →
          </Link>
        </div>
      </div>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
