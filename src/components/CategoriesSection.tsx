import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { useStore } from "@/lib/store";

const CategoriesSection = () => {
  const { products } = useStore();

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
          {products.filter(p => p.category !== 'Connect Cell').map((cat, i) => {
            const priceText = cat.isconsultprice 
              ? undefined 
              : (cat.promoprice || cat.price) 
                ? `${cat.isstartingprice ? 'a partir de ' : ''}R$ ${cat.promoprice || cat.price}`
                : undefined;

            return (
            <motion.a
              key={cat.id}
              href={getWhatsAppLink(cat.name, priceText)}
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
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] text-white/70 uppercase font-bold tracking-widest mb-1">
                  {cat.category}
                </span>
                <h3 className="text-white font-heading font-bold text-base md:text-xl leading-tight mb-1">
                  {cat.name}
                </h3>
                {cat.description && (
                  <p className="text-white/80 text-[10px] md:text-xs line-clamp-2 mb-3 font-medium">
                    {cat.description}
                  </p>
                )}
                
                <div className="flex items-end justify-between gap-2">
                  <div className="flex flex-col">
                    {cat.isconsultprice ? (
                      <span className="text-secondary font-bold text-sm leading-none italic">
                        Sob Consulta
                      </span>
                    ) : cat.promoprice ? (
                      <>
                        <span className="text-white/50 text-[10px] line-through leading-none">
                          R$ {cat.price}
                        </span>
                        <span className="text-secondary font-bold text-lg leading-none mt-1">
                          {cat.isstartingprice && <span className="text-[8px] font-medium block text-white/40 lowercase">a partir</span>}
                          R$ {cat.promoprice}
                        </span>
                      </>
                    ) : (
                      cat.price && (
                        <span className="text-white font-bold text-lg leading-none">
                          {cat.isstartingprice && <span className="text-[8px] font-medium block text-white/40 lowercase">a partir</span>}
                          R$ {cat.price}
                        </span>
                      )
                    )}

                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] bg-whatsapp text-whatsapp-foreground px-3 py-1.5 rounded-full font-bold shadow-lg transform group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-3 h-3" />
                    Pedir
                  </span>
                </div>
              </div>

            </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

