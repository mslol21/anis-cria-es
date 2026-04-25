import { ShoppingCart, Trash2, Plus, Minus, MessageCircle, X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { getWhatsAppCartLink } from "@/lib/whatsapp";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Barra Fixa Inferior (Mobile/Desktop) - Apenas se houver itens */}
      {itemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white border-t border-slate-200 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)] flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-300">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Total do pedido</span>
            <span className="text-xl font-extrabold text-foreground">R$ {total.toFixed(2)}</span>
          </div>
          
          <Button 
            onClick={() => setIsCartOpen(true)}
            className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold h-14 px-6 rounded-xl flex-grow sm:flex-grow-0 gap-2 text-lg shadow-lg active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
            Finalizar pedido
          </Button>
        </div>
      )}

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="flex items-center gap-2 text-2xl font-heading font-bold">
              <ShoppingCart className="w-6 h-6 text-primary" />
              Meu Pedido
            </SheetTitle>
          </SheetHeader>

          <ScrollArea className="flex-grow">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[60vh] p-8 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Seu carrinho está vazio</h3>
                <p className="text-muted-foreground text-sm">
                  Explore nosso catálogo e adicione produtos para montar seu pedido.
                </p>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-border flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-sm leading-tight pr-4">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-primary font-bold text-sm mb-3">
                        R$ {parseFloat(item.promoprice || item.price || '0').toFixed(2)}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-lg bg-slate-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-slate-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-slate-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-muted-foreground">
                          Subtotal: R$ {(parseFloat(item.promoprice || item.price || '0') * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          {items.length > 0 && (
            <SheetFooter className="p-6 border-t bg-slate-50/50 flex-col sm:flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total do pedido</span>
                  <span className="text-primary">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <a
                  href={getWhatsAppCartLink(items, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-5 rounded-xl font-extrabold text-xl hover:bg-[#20ba59] transition-all shadow-lg active:scale-[0.98]"
                >
                  <MessageCircle className="w-6 h-6" />
                  Finalizar no WhatsApp
                </a>
                <p className="text-[10px] text-center text-muted-foreground uppercase font-bold tracking-wider">
                  Seu pedido será enviado pronto para o vendedor
                </p>
                <button 
                  onClick={clearCart}
                  className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
                >
                  Limpar meu pedido
                </button>
              </div>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
      {/* Botão flutuante tradicional (apenas se a barra fixa estiver oculta por algum motivo, ou em desktop se preferir) */}
      {/* Para simplificar conforme pedido de conversão, vamos focar na barra fixa se houver itens */}
    </>
  );
};


