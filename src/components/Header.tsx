import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppGenericLink } from "@/lib/whatsapp";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Personalizados", href: "/produtos-personalizados" },
  { label: "Assistência Técnica", href: "/assistencia-tecnica" },


  { label: "Contato", href: "/contato" },

];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isAssistencia = location.pathname === "/assistencia-tecnica";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Anis Criações" className="h-14 w-auto group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-primary leading-none">
              Anis Criações
            </span>
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
              Personalizados e acessórios
            </span>
          </div>

        </Link>



        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href 
                ? (isAssistencia ? 'text-blue-600' : 'text-primary') 
                : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppGenericLink(isAssistencia)}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity animate-pulse-glow ${
              isAssistencia ? 'bg-blue-600' : 'bg-whatsapp'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            {isAssistencia ? "Falar com Técnico" : "Peça pelo WhatsApp"}
          </a>


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.href 
                    ? (isAssistencia ? 'text-blue-600' : 'text-primary') 
                    : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={getWhatsAppGenericLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-full font-semibold text-sm mt-2 ${
                  isAssistencia ? 'bg-blue-600' : 'bg-whatsapp'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {isAssistencia ? "Falar com Técnico" : "Peça pelo WhatsApp"}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

