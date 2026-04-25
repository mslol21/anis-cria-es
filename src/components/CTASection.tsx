import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/whatsapp";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6"
        >
          Pronto para fazer seu pedido?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
        >
          Não perca tempo. Monte seu carrinho e envie direto para nosso WhatsApp. Simples, rápido e prático!
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="#categorias"
          className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-slate-50 transition-all shadow-2xl active:scale-95"
        >
          <MessageCircle className="w-7 h-7" />
          Ver Catálogo agora
        </motion.a>
      </div>
    </section>

  );
};

export default CTASection;
