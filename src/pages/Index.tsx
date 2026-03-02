import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gift, Smartphone, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Gradient Background - Fixed to be more distinct and not break in the middle */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 to-blue-500/10 pointer-events-none" />
      
      {/* Decorative gradient blur for a premium look */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-primary/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-blue-500/15 blur-[120px] rounded-full" />
      </div>

      <header className="py-4 border-b border-border bg-gradient-to-r from-primary/5 to-blue-500/5 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/produtos-personalizados" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Anis Criações" className="h-12 w-auto" />
            <div className="flex flex-col leading-tight hidden sm:flex">
              <h1 className="text-xl font-heading font-extrabold text-primary">Anis Criações</h1>
              <span className="text-[10px] text-muted-foreground font-medium">Personalizados e acessórios</span>
            </div>
          </Link>

          <Link 
            to="/assistencia-tecnica" 
            className="hidden md:flex items-center gap-3 text-sm text-slate-700 font-bold bg-white/40 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/60 transition-all"
          >
            <img src="/connect-cell.png" alt="Connect Cell Logo" className="h-8 w-auto" />
            <div className="flex flex-col leading-tight">
              <span>Connect Cell</span>
              <span className="text-[10px] text-muted-foreground font-normal">Loja confiável e segura</span>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center py-20 px-4 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-10"
          >
            <img src="/logo.png" alt="Anis Criações Logo" className="h-48 w-auto drop-shadow-2xl" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-foreground mb-4"
          >
            Como podemos te ajudar <span className="text-primary">hoje?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Escolha uma de nossas frentes de atendimento e encontre exatamente o que você precisa.
          </motion.p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Bloco 1: Produtos Personalizados */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden bg-white rounded-[2rem] border border-border p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 flex flex-col h-full text-center items-center">
              <div className="w-24 h-24 bg-primary/20 text-primary rounded-[2rem] flex items-center justify-center mb-8 overflow-hidden self-center shadow-lg shadow-primary/10">
                <img src="/logo.png" alt="Personalizados" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                Personalizados <span className="text-primary block text-xl">Anis Criações</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8 flex-grow">
                Camisetas, canecas, brindes, cartões, panfletos e lembrancinhas feitas com carinho.
              </p>
              <Link
                to="/produtos-personalizados"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg"
              >
                Ver Produtos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Bloco 2: Assistência Técnica */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden bg-white rounded-[2rem] border border-border p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="relative z-10 flex flex-col h-full text-center items-center">
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-[2rem] flex items-center justify-center mb-8 overflow-hidden self-center shadow-lg shadow-blue-100/50">
                <img src="/connect-cell.png" alt="Assistência Técnica" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                Connect Cell <span className="text-blue-600 block text-xl">Assistência Técnica</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8 flex-grow">
                Loja confiável e segura. Troca de tela, bateria, conector e venda de acessórios.
              </p>

              <Link
                to="/assistencia-tecnica"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

