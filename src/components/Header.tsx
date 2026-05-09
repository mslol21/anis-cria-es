import { useState } from "react";
import { Menu, X, MessageCircle, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppGenericLink } from "@/lib/whatsapp";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import {
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, setIsCartOpen } = useCart();

  const location = useLocation();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Anis Criações" className="h-14 w-auto group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold text-primary leading-none">
              Anis Criações
            </span>
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">
              Personalizados que vendem e encantam
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
                ? 'text-primary' 
                : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Finalizar pedido
          </button>


          {itemCount > 0 && (
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group"
            >
              <ShoppingCart className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-background">
                {itemCount}
              </span>
            </button>
          )}



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
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-4 rounded-xl font-bold text-base mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Finalizar pedido
              </button>


            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

