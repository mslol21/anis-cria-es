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
          alt="Produtos PedidoZap"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>





      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
        >
          Monte seu pedido e finalize direto no <span className="text-[#25D366]">WhatsApp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-body"
        >
          Escolha os produtos, adicione ao carrinho e envie o pedido pronto em segundos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <a
            href="#categorias"
            className="inline-flex flex-col items-center gap-1 bg-[#25D366] text-white px-10 py-6 rounded-2xl font-bold text-xl sm:text-2xl hover:bg-[#20ba59] transition-all shadow-2xl active:scale-95 text-center w-full sm:w-auto"
          >
            <span>Finalizar pedido no WhatsApp</span>
            <span className="text-sm font-normal opacity-90">Simples, rápido e sem complicação</span>
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
