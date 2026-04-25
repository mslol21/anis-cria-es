import { motion } from "framer-motion";
import { ShoppingBag, Palette, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "1. Escolha",
    desc: "Navegue e adicione o que você precisa ao carrinho.",
  },
  {
    icon: Palette,
    title: "2. Confira",
    desc: "Veja os itens e o valor total do seu pedido.",
  },
  {
    icon: CheckCircle,
    title: "3. Envie",
    desc: "Mande o pedido pronto direto para o nosso WhatsApp.",
  },
  {
    icon: Truck,
    title: "4. Receba",
    desc: "Combinamos a entrega e o pagamento por lá mesmo.",
  },
];



const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">
            Peça em <span className="text-primary">4 Passos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sem cadastro, sem login. Só escolher e pedir.
          </p>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-9 h-9 text-primary" />
              </div>
              <div className="text-sm font-bold text-secondary mb-2">
                Passo {i + 1}
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
