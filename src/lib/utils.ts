import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: string | undefined): string {
  if (!value) return "";
  
  // Remove tudo que não for dígito
  const digits = value.replace(/\D/g, "");
  
  // Converte para centavos
  const amount = parseInt(digits) || 0;
  
  // Formata com duas casas decimais e vírgula
  return (amount / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

