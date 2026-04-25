import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import { TrustSection, ConversionHighlight } from "@/components/ConversionElements";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Cart } from "@/components/Cart";

const Personalizados = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <CategoriesSection />
      
      <ConversionHighlight />
      
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      
      {/* Carrinho flutuante */}
      <Cart />
    </div>
  );
};



export default Personalizados;
