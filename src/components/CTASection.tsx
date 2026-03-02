import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/whatsapp";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6"
        >
          Chame agora no WhatsApp e<br />
          faça seu orçamento! 🎉
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto"
        >
          Atendimento rápido, preço justo e qualidade garantida. Estamos prontos para transformar sua ideia em realidade!
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href={getWhatsAppGenericLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-2xl animate-pulse-glow"
        >
          <MessageCircle className="w-7 h-7" />
          Falar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
