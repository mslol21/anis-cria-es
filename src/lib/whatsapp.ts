export const WHATSAPP_NUMBERS = {
  pedidozap: "5516991551200",
};


export const getWhatsAppLink = (productName: string, priceText?: string) => {
  let message = `Olá PedidoZap! Vi no site e quero orçamento para ${productName}`;

  if (priceText) {
    message += ` no valor de ${priceText}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBERS.pedidozap}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppGenericLink = () => {
  const target = WHATSAPP_NUMBERS.pedidozap;
  const message = encodeURIComponent("Olá PedidoZap! Gostaria de solicitar um orçamento para produtos.");
  return `https://wa.me/${target}?text=${message}`;
};
export const getWhatsAppCartLink = (items: any[], total: number) => {
  const itemsList = items
    .map((item) => `- ${item.quantity}x ${item.name} (R$ ${(parseFloat(item.promoprice || item.price || '0') * item.quantity).toFixed(2)})`)
    .join("\n");

  const message = `Olá! Quero fazer esse pedido:\n\n${itemsList}\n\nTotal: R$ ${total.toFixed(2)}\n\nPode confirmar?`;
  
  return `https://wa.me/${WHATSAPP_NUMBERS.pedidozap}?text=${encodeURIComponent(message)}`;
};
