export const WHATSAPP_NUMBERS = {
  anis: "5511914378109",
  connectCell: "5511966159084",
};

export const getWhatsAppLink = (productName: string, priceText?: string) => {
  let message = `Olá Anis Criações! Vi no site e quero orçamento para ${productName}`;
  if (priceText) {
    message += ` no valor de ${priceText}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBERS.anis}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppGenericLink = (isConnectCell = false) => {
  const target = isConnectCell ? WHATSAPP_NUMBERS.connectCell : WHATSAPP_NUMBERS.anis;
  const message = encodeURIComponent(
    isConnectCell 
      ? "Olá Connect Cell! Gostaria de solicitar um orçamento para assistência técnica." 
      : "Olá Anis Criações! Gostaria de solicitar um orçamento para personalizados."
  );
  return `https://wa.me/${target}?text=${message}`;
};


