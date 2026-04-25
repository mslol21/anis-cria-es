import { motion } from "framer-motion";
import { Plus, ShoppingCart, Check } from "lucide-react";
import { useStore } from "@/lib/store";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { useState } from "react";

const CategoriesSection = () => {
  const { products } = useStore();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setAddedItems(prev => [...prev, product.id]);
    toast.success(`${product.name} adicionado ao carrinho!`);
    
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  return (
    <section id="categorias" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">
            Nosso <span className="text-primary">Catálogo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha os itens que deseja, adicione ao carrinho e finalize seu pedido direto no nosso WhatsApp.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
            <ShoppingCart className="w-4 h-4" />
            Pedido enviado direto para o WhatsApp do vendedor
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => {

            const isAdded = addedItems.includes(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.promoprice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      Promoção
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-foreground font-heading font-bold text-xl leading-tight mb-2">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                      {product.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <div className="flex flex-col">
                      {product.isconsultprice ? (
                        <span className="text-slate-500 font-bold text-sm italic">
                          Sob Consulta
                        </span>
                      ) : product.promoprice ? (
                        <>
                          <span className="text-muted-foreground text-[10px] line-through leading-none">
                            R$ {product.price}
                          </span>
                          <span className="text-foreground font-bold text-xl leading-none mt-1">
                            {product.isstartingprice && <span className="text-[8px] font-medium block text-muted-foreground lowercase">a partir</span>}
                            R$ {product.promoprice}
                          </span>
                        </>
                      ) : (
                        product.price && (
                          <span className="text-foreground font-bold text-xl leading-none">
                            {product.isstartingprice && <span className="text-[8px] font-medium block text-muted-foreground lowercase">a partir</span>}
                            R$ {product.price}
                          </span>
                        )
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
                        isAdded 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-primary text-primary-foreground hover:opacity-90 active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          Adicionado
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          Adicionar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default CategoriesSection;

