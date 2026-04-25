import { CheckCircle2 } from "lucide-react";

export const TrustSection = () => {
  return (
    <div className="bg-white py-6 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>Pedido direto no WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 text-foreground font-bold">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>Sem complicação</span>
          </div>
          <div className="flex items-center gap-2 text-foreground font-bold">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>Ideal para pequenos negócios</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConversionHighlight = () => {
  return (
    <div className="bg-slate-50 py-16 text-center border-y border-slate-100 my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-foreground max-w-3xl mx-auto leading-tight">
          "Seu cliente monta o pedido sozinho e já chega pronto pra comprar"
        </h2>
      </div>
    </div>
  );
};
