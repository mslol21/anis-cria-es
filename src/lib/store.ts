import { useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
}

const DEFAULT_PRODUCTS: Product[] = [
  { id: '1', name: "Canecas Personalizadas", image: "/cat-canecas.jpg", category: "Personalizados" },
  { id: '2', name: "Camisetas e Uniformes", image: "/cat-camisetas.jpg", category: "Personalizados" },
  { id: '3', name: "Brindes Promocionais", image: "/cat-brindes.jpg", category: "Personalizados" },
  { id: '4', name: "Cartões de Visita", image: "/cat-cartoes.jpg", category: "Impressos" },
  { id: '5', name: "Panfletos e Banners", image: "/cat-panfletos.jpg", category: "Impressos" },
  { id: '6', name: "Lembrancinhas para Festas", image: "/cat-lembrancinhas.jpg", category: "Personalizados" },
  { id: '7', name: "Kits Promocionais", image: "/cat-kits.jpg", category: "Promocional" },
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
