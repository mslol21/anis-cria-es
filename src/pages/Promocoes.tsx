import Header from "@/components/Header";
import PromotionsSection from "@/components/PromotionsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Promocoes = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="container mx-auto px-4 text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 mb-4"
          >
            Nossas <span className="text-primary">Ofertas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Aproveite os melhores preços em produtos personalizados selecionados para você.
          </motion.p>
        </section>

        <PromotionsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Promocoes;
