import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import PromotionsSection from "@/components/PromotionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Personalizados = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <HowItWorksSection />

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Personalizados;
