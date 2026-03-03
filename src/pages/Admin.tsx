import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Check, Lock, LogOut, Image as ImageIcon } from "lucide-react";
import { useStore, Product } from "@/lib/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Admin = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({ 
    name: "", 
    image: "", 
    category: "Personalizados", 
    price: "", 
    promoprice: "", 
    description: "" 
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "anis123") { // Hardcoded simple password
      setIsLoggedIn(true);
    } else {
      alert("Senha incorreta!");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await updateProduct({ ...editingProduct, ...formData });
      } else {
        await addProduct(formData);
      }
      setIsModalOpen(false);
      setEditingProduct(null);
      setFormData({ name: "", image: "", category: "Personalizados", price: "", promoprice: "", description: "" });
    } catch (error) {
      alert("Erro ao salvar produto. Verifique sua conexão ou se a tabela no Supabase foi criada.");
    }
  };


  const openEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({ 
      name: product.name, 
      image: product.image, 
      category: product.category,
      price: product.price || "",
      promoprice: product.promoprice || "",
      description: product.description || ""
    });
    setIsModalOpen(true);
  };
// ... (previous handleFileChange stays same)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isLoggedIn) {
// ... (isLoggedIn login view stays same)
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-md w-full text-center"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-heading font-bold mb-2">Acesso Restrito</h1>
            <p className="text-muted-foreground mb-8 text-sm">Digite a senha para gerenciar o catálogo de produtos.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Senha de acesso"
                className="w-full px-5 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
              >
                Entrar no Painel
              </button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-heading font-bold text-slate-900">Gerenciar Catálogo</h1>
              <p className="text-muted-foreground">Adicione, edite ou remova produtos da vitrine.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setFormData({ name: "", image: "", category: "Personalizados", price: "", promoprice: "", description: "" });
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all"
              >
                <Plus className="w-5 h-5" />
                Novo Produto
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="p-3 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                title="Sair"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                layout
                className="bg-white p-4 rounded-[1.5rem] border border-slate-100 shadow-sm flex items-center gap-4 group"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow overflow-hidden">
                  <h3 className="font-bold text-slate-900 truncate">{product.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap mt-1">
                    <span className="text-[10px] text-muted-foreground bg-slate-100 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                      {product.category}
                    </span>
                    {product.price && (
                      <span className="text-[10px] font-bold text-primary">
                        R$ {product.price}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openEdit(product)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={async () => {
                      if (confirm("Tem certeza que deseja excluir?")) {
                        try {
                          await deleteProduct(product.id);
                        } catch (error) {
                          alert("Erro ao excluir produto.");
                        }
                      }
                    }}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-[100] overflow-y-auto bg-black/40 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6"
            onClick={() => { setIsModalOpen(false); setEditingProduct(null); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.5rem] p-6 md:p-10 w-full max-w-lg shadow-2xl relative my-auto"
            >
              <button 
                onClick={() => { setIsModalOpen(false); setEditingProduct(null); }}
                className="absolute top-6 right-6 p-2 text-muted-foreground hover:bg-slate-50 rounded-full transition-colors z-10"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>

              
              <h2 className="text-2xl font-heading font-bold mb-6">
                {editingProduct ? "Editar Produto" : "Novo Produto"}
              </h2>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nome do Produto</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Ex: Caneca Mágica"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Descrição Curta</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 h-20 resize-none"
                      placeholder="Detalhes sobre o material, tamanho, etc."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Preço (R$)</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="35,00"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Preço Promo (R$)</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="29,90"
                      value={formData.promoprice}
                      onChange={(e) => setFormData({ ...formData, promoprice: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Imagem do Produto</label>
                  <div className="space-y-3">
                    {formData.image && (
                      <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-100">
                        <img src={formData.image} alt="Preview" className="w-full h-full object-contain bg-slate-50" />
                      </div>
                    )}
                    <div className="flex gap-2">
                      <div className="relative flex-grow">
                        <input
                          required
                          type="text"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                          placeholder="Link da imagem ou upload"
                          value={formData.image}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        />
                        <ImageIcon className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                      <label className="flex items-center justify-center px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl cursor-pointer transition-all border border-slate-200" title="Upload de Arquivo">
                        <Plus className="w-5 h-5" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Categoria</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none bg-white"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Personalizados">Personalizados</option>
                    <option value="Connect">Connect</option>
                    <option value="Impressos">Impressos</option>
                    <option value="Promocional">Promocional</option>
                    <option value="Outros">Outros</option>

                  </select>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="submit"
                    className="flex-grow bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    {editingProduct ? "Salvar Alterações" : "Criar Produto"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Admin;

