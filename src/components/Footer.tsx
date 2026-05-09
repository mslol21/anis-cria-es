import { Instagram, MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 relative z-10 w-full">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="bg-white p-2 rounded-xl">
                <img src="/logo.png" alt="Anis Criações" className="h-12 w-auto" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Anis Criações</h3>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Especializada em canecas, camisetas, brindes e material gráfico personalizado.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href={getWhatsAppGenericLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <MessageCircle className="w-5 h-5 text-whatsapp-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li><Link to="/produtos-personalizados" className="hover:text-primary transition-colors">Produtos</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Contato</h4>
            <div className="flex flex-col items-center md:items-end text-sm text-primary-foreground/60 space-y-3">
              <div className="flex flex-col items-center md:items-end">
                <span className="font-bold text-primary-foreground/80 text-[10px] uppercase">WhatsApp</span>
                <a href={getWhatsAppGenericLink()} className="hover:text-primary transition-colors">(16) 99155-1200</a>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © 2024 Anis Criações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

