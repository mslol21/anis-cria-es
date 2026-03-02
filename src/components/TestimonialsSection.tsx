import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda S.",
    text: "As canecas ficaram lindas! Meus clientes amaram. Super recomendo a Anis Criações!",
    role: "Empreendedora",
  },
  {
    name: "Pastor Ricardo",
    text: "Fizemos os uniformes da igreja e ficaram perfeitos. Ótimo atendimento e preço justo.",
    role: "Igreja Batista",
  },
  {
    name: "Camila O.",
    text: "As lembrancinhas do chá de bebê ficaram um encanto! Entrega rápida e qualidade top.",
    role: "Cliente",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">
            O que dizem nossos <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
