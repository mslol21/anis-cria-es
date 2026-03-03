import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useStore } from "@/lib/store";
import { MessageCircle, Link as LinkIcon } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Connect = () => {
  const { products, loading } = useStore();
  const connectProducts = products.filter(p => p.category === "Connect");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="container mx-auto px-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-4"
          >
            <LinkIcon className="w-4 h-4" />
            LINHA CONNECT
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 mb-4"
          >
            Anis <span className="text-primary">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Sua identidade digital em um toque. Conheça nossa linha de produtos inteligentes.
          </motion.p>
        </section>

        <section className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : connectProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {connectProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 group flex flex-col h-full"
                >
                  <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {product.description || "Inovação e conectividade para o seu negócio."}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50">
                    <div className="mb-6 flex flex-col">
                      {product.promoPrice ? (
                        <>
                          <span className="text-muted-foreground line-through text-xs font-medium">
                            R$ {product.price}
                          </span>
                          <span className="text-3xl font-heading font-extrabold text-primary leading-tight">
                            R$ {product.promoPrice}
                          </span>
                        </>
                      ) : (
                        product.price && (
                          <span className="text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                            R$ {product.price}
                          </span>
                        )
                      )}
                    </div>
                    
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-2xl font-bold text-sm hover:opacity-90 shadow-lg shadow-primary/20 transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Pedir Connect
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-300">
              <p className="text-muted-foreground text-lg">Em breve, novidades da linha Connect aqui!</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Connect;
