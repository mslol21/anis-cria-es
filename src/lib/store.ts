import { useState, useEffect } from 'react';
import { supabase } from './supabase';

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price?: string;
  promoprice?: string;
  description?: string;
  created_at?: string;
}

export const useStore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar produtos:', error);
      } else {
        setProducts(data || []);
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    // Opcional: ouvir mudanças em tempo real
    const channel = supabase
      .channel('products-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, () => {
        fetchProducts();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const addProduct = async (product: Omit<Product, 'id' | 'created_at'>) => {
    try {
      const { error } = await supabase
        .from('products')
        .insert([product]);

      if (error) {
        console.error('Erro ao adicionar produto:', error);
        throw error;
      }
    } catch (err) {
      console.error('Erro ao adicionar produto:', err);
      throw err;
    }
  };

  const updateProduct = async (updatedProduct: Product) => {
    try {
      // Remove campos que não devem ser enviados na atualização se necessário
      const { id, created_at, ...updateData } = updatedProduct;
      
      const { error } = await supabase
        .from('products')
        .update(updateData)
        .eq('id', id);

      if (error) {
        console.error('Erro ao atualizar produto:', error);
        throw error;
      }
    } catch (err) {
      console.error('Erro ao atualizar produto:', err);
      throw err;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Erro ao deletar produto:', error);
        throw error;
      }
    } catch (err) {
      console.error('Erro ao deletar produto:', err);
      throw err;
    }
  };

  return { products, addProduct, updateProduct, deleteProduct, loading, refresh: fetchProducts };
};

