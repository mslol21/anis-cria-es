import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-final.png"
          alt="Produtos personalizados Anis Criações"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>





      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-primary-foreground leading-tight mb-6"
        >
          Personalizados que{" "}
          <span className="text-gradient-gold">vendem</span> e{" "}
          <span className="text-gradient-gold">encantam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 font-body"
        >
          Canecas, camisetas, brindes e material gráfico com preço promocional
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={getWhatsAppGenericLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento Agora
          </a>
          <a
            href="#categorias"
            className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            Ver Produtos
          </a>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full fill-background">
          <path d="M0,60 C360,100 720,0 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
