import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone, Battery, Zap, Settings, ShoppingBag, MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink, getWhatsAppLink } from "@/lib/whatsapp";
import { useStore } from "@/lib/store";


const services = [
  { icon: Smartphone, title: "Tela", desc: "Telas originais e primeira linha com garantia." },
  { icon: Battery, title: "Bateria", desc: "Baterias de alta performance para seu smartphone." },
  { icon: Zap, title: "Conector", desc: "Reparo rápido para problemas de carregamento." },
  { icon: ShoppingBag, title: "Acessórios", desc: "Capas, películas, carregadores e cabos." },
];


const Assistencia = () => {
  const { products, loading } = useStore();
  const connectProducts = products.filter(p => p.category === "Connect");

  return (

    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center items-center gap-6 mb-8"
          >
            <img src="/logo.png" alt="Anis Criações" className="h-20 w-auto" />
            <div className="h-10 w-px bg-slate-200"></div>
            <img src="/connect-cell.png" alt="Connect Cell" className="h-16 w-auto" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm"
          >
            CONNECT CELL
          </motion.div>


          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 mb-4"
          >
            Connect Cell <span className="text-blue-600">Assistência Técnica</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Loja confiável e segura. Conserto de celulares com rapidez e transparência.
          </motion.p>

        </section>

        <section className="container mx-auto px-4 grid md:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Início: Linha Connect de Produtos Inteligentes */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
              <Zap className="w-4 h-4 text-blue-400" />
              LINHA ANIS CONNECT
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
              Produtos <span className="text-blue-600">Inteligentes</span>
            </h2>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-10">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : connectProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {connectProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-5 shadow-xl border border-slate-100 group flex flex-col h-full hover:shadow-2xl transition-all"
                >
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-[10px] md:text-xs mb-4 line-clamp-2">
                    {product.description || "Tecnologia NFC para o seu negócio."}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex flex-col gap-3">
                    <div className="flex flex-col">
                      {product.isconsultprice ? (
                        <span className="text-xl font-heading font-extrabold text-blue-600 leading-none italic">
                          Sob Consulta
                        </span>
                      ) : product.promoprice ? (
                        <>
                          <span className="text-muted-foreground line-through text-[10px] font-medium leading-none mb-1">
                            R$ {product.price}
                          </span>
                          <span className="text-xl font-heading font-extrabold text-blue-600 leading-none">
                            {product.isstartingprice && <span className="text-[10px] font-medium block text-slate-500 lowercase">a partir de</span>}
                            R$ {product.promoprice}
                          </span>
                        </>
                      ) : (
                        product.price && (
                          <span className="text-xl font-heading font-extrabold text-slate-900 leading-none">
                            {product.isstartingprice && <span className="text-[10px] font-medium block text-slate-500 lowercase">a partir de</span>}
                            R$ {product.price}
                          </span>
                        )
                      )}
                    </div>

                    
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-blue-600 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Pedir Agora
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-slate-50 rounded-[2rem] border border-dashed border-slate-300">
              <p className="text-muted-foreground text-sm font-medium">Novidades da linha Connect em breve!</p>
            </div>
          )}
        </section>


        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Orçamento via WhatsApp</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">
                Não fique desconectado! Mande uma foto do seu aparelho ou descreva o problema e respondemos na hora.
              </p>
              <a 
                href={getWhatsAppGenericLink(true)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-blue-900/20"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com Técnico
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Botão flutuante exclusivo */}
      <a
        href={getWhatsAppGenericLink(true)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 md:hidden"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default Assistencia;
