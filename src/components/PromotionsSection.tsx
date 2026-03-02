import { motion } from "framer-motion";
import { MessageCircle, Flame } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const promos = [
  {
    name: "Caneca Personalizada",
    oldPrice: "R$ 45,00",
    newPrice: "R$ 29,90",
    desc: "Com sua foto ou arte",
  },
  {
    name: "100 Cartões de Visita",
    oldPrice: "R$ 80,00",
    newPrice: "R$ 49,90",
    desc: "Frente e verso, papel couchê",
  },
  {
    name: "Camiseta Personalizada",
    oldPrice: "R$ 65,00",
    newPrice: "R$ 39,90",
    desc: "Sublimação total",
  },
  {
    name: "Kit Brinde Empresarial",
    oldPrice: "R$ 120,00",
    newPrice: "R$ 89,90",
    desc: "Caneca + caneta + sacola",
  },
];

const PromotionsSection = () => {
  return (
    <section id="promocoes" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Flame className="w-4 h-4" />
            PROMOÇÕES DA SEMANA
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Ofertas <span className="text-accent">Imperdíveis</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, i) => (
            <motion.div
              key={promo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-promo transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                OFERTA
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                {promo.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{promo.desc}</p>
              <div className="mb-5">
                <span className="text-muted-foreground line-through text-sm mr-2">
                  {promo.oldPrice}
                </span>
                <span className="text-3xl font-heading font-extrabold text-accent">
                  {promo.newPrice}
                </span>
              </div>
              <a
                href={getWhatsAppLink(promo.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-whatsapp text-whatsapp-foreground py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                Quero esse!
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
