import { motion } from "framer-motion";
import { MessageCircle, Flame } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useStore } from "@/lib/store";

const PromotionsSection = () => {
  const { products } = useStore();
  const promoProducts = products.filter(p => p.promoprice);
  
  // Se não houver promoções, mostrar os primeiros 4 produtos do catálogo por padrão
  const displayProducts = promoProducts.length > 0 ? promoProducts : products.slice(0, 4);

  if (displayProducts.length === 0) return null;

  return (
    <section id="promocoes" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Flame className="w-4 h-4" />
            {promoProducts.length > 0 ? "PROMOÇÕES DA SEMANA" : "NOSSOS PRODUTOS"}
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
            {promoProducts.length > 0 ? (
              <>Ofertas <span className="text-primary">Imperdíveis</span></>
            ) : (
              <>Confira <span className="text-primary">Destaques</span></>
            )}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 group relative overflow-hidden h-full flex flex-col"
            >
              {promo.promoprice && (
                <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                  OFERTA
                </div>
              )}

              
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-slate-100 flex items-center justify-center">
                <img 
                  src={promo.image} 
                  alt={promo.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                {promo.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                {promo.description || "Personalize do seu jeito com o melhor acabamento!"}
              </p>
              
              <div className="mb-6 flex flex-col mt-auto">
                {promo.promoprice ? (
                  <>
                    <span className="text-muted-foreground line-through text-xs font-medium">
                      R$ {promo.price}
                    </span>
                    <span className="text-3xl font-heading font-extrabold text-primary leading-tight">
                      R$ {promo.promoprice}
                    </span>
                  </>
                ) : (
                  promo.price && (
                    <span className="text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                      R$ {promo.price}
                    </span>
                  )
                )}
              </div>
              
              <a
                href={getWhatsAppLink(promo.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-whatsapp text-white py-4 rounded-2xl font-bold text-sm hover:opacity-90 shadow-lg shadow-whatsapp/20 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
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

