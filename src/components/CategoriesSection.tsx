import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

import catCanecas from "@/assets/cat-canecas.jpg";
import catCamisetas from "@/assets/cat-camisetas.jpg";
import catBrindes from "@/assets/cat-brindes.jpg";
import catCartoes from "@/assets/cat-cartoes.jpg";
import catPanfletos from "@/assets/cat-panfletos.jpg";
import catLembrancinhas from "@/assets/cat-lembrancinhas.jpg";
import catKits from "@/assets/cat-kits.jpg";

const categories = [
  { name: "Canecas Personalizadas", image: catCanecas },
  { name: "Camisetas e Uniformes", image: catCamisetas },
  { name: "Brindes Promocionais", image: catBrindes },
  { name: "Cartões de Visita", image: catCartoes },
  { name: "Panfletos e Banners", image: catPanfletos },
  { name: "Lembrancinhas para Festas", image: catLembrancinhas },
  { name: "Kits Promocionais", image: catKits },
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha a categoria e peça seu orçamento
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={getWhatsAppLink(cat.name)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl overflow-hidden shadow-lg aspect-square"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-primary-foreground font-heading font-bold text-sm md:text-lg leading-tight mb-2">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs bg-whatsapp text-whatsapp-foreground px-3 py-1.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <MessageCircle className="w-3 h-3" />
                  Pedir orçamento
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
