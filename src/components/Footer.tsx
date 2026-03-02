import { Instagram, MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold mb-1">Anis Criações</h3>
            <p className="text-primary-foreground/60 text-sm">
              Personalizados que vendem e encantam
            </p>
          </div>
          <div className="flex items-center gap-4">
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
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © 2026 Anis Criações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
