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
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-all group active:scale-95">
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-primary">
                {itemCount}
              </span>
            )}
          </div>
        </button>
      </SheetTrigger>
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
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">
                        Total: R$ {(parseFloat(item.promoprice || item.price || '0') * item.quantity).toFixed(2)}
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
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Subtotal</span>
                <span className="font-medium">R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <a
                href={getWhatsAppCartLink(items, total)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#20ba59] transition-all shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="w-6 h-6" />
                Finalizar no WhatsApp
              </a>
              <p className="text-[10px] text-center text-muted-foreground">
                Ao clicar em finalizar, você será redirecionado para o WhatsApp com seu pedido pronto.
              </p>
              <button 
                onClick={clearCart}
                className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Limpar carrinho
              </button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
