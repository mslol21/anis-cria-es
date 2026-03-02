import { useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price?: string;
  promoPrice?: string;
  description?: string;
}

const DEFAULT_PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: "Canecas Personalizadas", 
    image: "/cat-canecas.jpg", 
    category: "Personalizados", 
    price: "35,00", 
    promoPrice: "29,90",
    description: "Canecas de cerâmica de alta qualidade com sua arte favorita."
  },
  { 
    id: '2', 
    name: "Camisetas e Uniformes", 
    image: "/cat-camisetas.jpg", 
    category: "Personalizados", 
    price: "55,00", 
    promoPrice: "45,00",
    description: "Tecidos premium com estamparia durável e cores vibrantes."
  },
  { 
    id: '3', 
    name: "Brindes Promocionais", 
    image: "/cat-brindes.jpg", 
    category: "Personalizados", 
    price: "15,00",
    description: "Chaveiros, canetas e diversos brindes para sua empresa."
  },
  { 
    id: '4', 
    name: "Cartões de Visita", 
    image: "/cat-cartoes.jpg", 
    category: "Impressos", 
    price: "120,00", 
    promoPrice: "99,00",
    description: "Papel couchê 300g com verniz localizado ou total."
  },
  { 
    id: '5', 
    name: "Panfletos e Banners", 
    image: "/cat-panfletos.jpg", 
    category: "Impressos", 
    price: "180,00",
    description: "Material gráfico em diversos tamanhos e acabamentos."
  },
  { 
    id: '6', 
    name: "Lembrancinhas para Festas", 
    image: "/cat-lembrancinhas.jpg", 
    category: "Personalizados", 
    price: "8,50", 
    promoPrice: "6,99",
    description: "Pequenos mimos personalizados para seus convidados."
  },
  { 
    id: '7', 
    name: "Kits Promocionais", 
    image: "/cat-kits.jpg", 
    category: "Promocional",
    description: "Kits completos com caneta, bloco e sacola personalizada."
  },
];



export const useStore = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('anis_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(DEFAULT_PRODUCTS);
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('anis_products', JSON.stringify(newProducts));
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    saveProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct: Product) => {
    saveProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    saveProducts(products.filter(p => p.id !== id));
  };

  return { products, addProduct, updateProduct, deleteProduct };
};
