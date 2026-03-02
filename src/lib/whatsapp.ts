const WHATSAPP_NUMBER = "5500000000000"; // Replace with actual number

export const getWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(`Olá, quero orçamento para ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getWhatsAppGenericLink = () => {
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
