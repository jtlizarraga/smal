import { useEffect, useState, useCallback } from 'react';
import { insforge } from '../lib/insforge';
import { Product } from '../lib/types';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, Edit, Plus, Package, Image as ImageIcon, ArrowLeft } from 'lucide-react';

const ADMIN_EMAILS = ['corpdatac@gmail.com', 'Sandylizarraga2@gmail.com'];

export function AdminDashboard() {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: 0,
        category: '',
        imageUrl: '',
        description: ''
    });
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (!authLoading) {
            if (!user) {
                navigate('/login');
            } else if (!ADMIN_EMAILS.includes(user.email || '')) {
                navigate('/');
            }
        }
    }, [user, authLoading, navigate]);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await insforge.database.from('products').select('*');
            setProducts((data as Product[]) || []);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (user) fetchProducts();
    }, [user, fetchProducts]);

    const handleSaveProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Convertir link de ImgBB si es necesario
            let finalImageUrl = newProduct.imageUrl;
            if (finalImageUrl.includes('ibb.co/') && !finalImageUrl.includes('i.ibb.co')) {
                // Intento básico de conversión o al menos avisar al sistema
                console.log('Detectado link de ImgBB no directo');
            }

            const productData = {
                name: newProduct.name,
                price: newProduct.price,
                category: newProduct.category,
                description: newProduct.description || 'Nueva prenda de SMAL',
                images: [finalImageUrl || 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
                sizes: ['S', 'M', 'L']
            };

            if (editingProduct) {
                const { error } = await insforge.database
                    .from('products')
                    .update(productData)
                    .eq('id', editingProduct.id);
                if (error) throw error;
            } else {
                const { error } = await insforge.database
                    .from('products')
                    .insert([productData]);
                if (error) throw error;
            }

            setIsAddModalOpen(false);
            setEditingProduct(null);
            setNewProduct({ name: '', price: 0, category: '', imageUrl: '', description: '' });
            fetchProducts();
        } catch (err) {
            console.error('Error saving product:', err);
            alert('Error al guardar el producto');
        }
    };

    const startEdit = (product: Product) => {
        setEditingProduct(product);
        setNewProduct({
            name: product.name,
            price: product.price,
            category: product.category || '',
            imageUrl: product.images[0] || '',
            description: product.description || ''
        });
        setIsAddModalOpen(true);
    };

    const startAdd = () => {
        setEditingProduct(null);
        setNewProduct({ name: '', price: 0, category: '', imageUrl: '', description: '' });
        setIsAddModalOpen(true);
    };

    const handleDeleteProduct = async (id: string) => {
        if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) return;
        try {
            const { error } = await insforge.database.from('products').delete().eq('id', id);
            if (error) throw error;
            fetchProducts();
        } catch (err) {
            console.error('Error deleting product:', err);
            alert('Error al eliminar el producto');
        }
    };

    if (loading || authLoading) return <div className="p-8 text-center min-h-screen flex items-center justify-center bg-soft-pink"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-pink"></div></div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen bg-soft-pink">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                    <Link to="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-deep-brown/40 hover:text-accent-pink mb-6 transition-colors group">
                        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Regresar al Inicio
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black text-deep-brown tracking-tighter leading-none mb-4">
                        Panel de <br />
                        <span className="font-serif italic font-light text-accent-pink">Administración</span>
                    </h1>
                    <p className="text-deep-brown/40 font-bold uppercase text-[11px] tracking-[0.3em] ml-1">SMAL Merida • Boutique Digital</p>
                </div>
                <div className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white">
                    <div className="text-right">
                        <p className="text-xs font-black text-deep-brown uppercase tracking-widest">{user?.email?.split('@')[0]}</p>
                        <p className="text-[10px] text-accent-pink font-bold">Administrador</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white shadow-sm">
                        <img src="/logo.jpeg" alt="SMAL Logo" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <div className="bg-white rounded-[32px] shadow-2xl shadow-accent-pink/5 overflow-hidden border border-white">
                    <div className="px-8 py-6 flex justify-between items-center bg-cream/30 border-b border-soft-pink">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-accent-pink/10 rounded-lg text-accent-pink">
                                <Package className="h-5 w-5" />
                            </div>
                            <h2 className="text-xl font-bold text-deep-brown">Productos en Catálogo</h2>
                        </div>
                        <button
                            onClick={startAdd}
                            className="btn-primary flex items-center shadow-lg"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Nuevo Producto
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-soft-pink/20">
                                    <th className="px-8 py-4 text-xs font-black text-deep-brown uppercase tracking-widest">Producto</th>
                                    <th className="px-8 py-4 text-xs font-black text-deep-brown uppercase tracking-widest">Categoría</th>
                                    <th className="px-8 py-4 text-xs font-black text-deep-brown uppercase tracking-widest">Precio</th>
                                    <th className="px-8 py-4 text-xs font-black text-deep-brown uppercase tracking-widest text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-soft-pink/30">
                                {products.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center text-deep-brown opacity-40 italic">
                                            No hay productos registrados en el catálogo.
                                        </td>
                                    </tr>
                                )}
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-soft-pink/10 transition-colors">
                                        <td className="px-8 py-4">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    className="h-16 w-16 rounded-2xl object-cover bg-cream border border-soft-pink shadow-sm"
                                                    src={product.images[0] || 'https://via.placeholder.com/100'}
                                                    alt={product.name}
                                                />
                                                <span className="font-bold text-deep-brown">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <span className="text-xs font-bold text-accent-pink bg-accent-pink/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                                                {product.category || 'Sin categoría'}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-lg font-black text-deep-brown">
                                            ${product.price}
                                        </td>
                                        <td className="px-8 py-4 text-right">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    onClick={() => startEdit(product)}
                                                    className="p-3 text-deep-brown/40 hover:text-accent-pink hover:bg-accent-pink/10 rounded-xl transition-all"
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProduct(product.id)}
                                                    className="p-3 text-deep-brown/40 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal de Nuevo Producto Refinado - ARQUITECTURA SIMPLIFICADA PARA VISIBILIDAD */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-deep-brown/60 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 z-[100]">
                    <div className="bg-white w-full max-w-lg h-full sm:h-auto sm:max-h-[90vh] sm:rounded-[40px] shadow-2xl flex flex-col overflow-hidden border border-white">

                        {/* Header Fijo */}
                        <div className="p-8 pb-4 flex justify-between items-center bg-white shrink-0">
                            <h2 className="text-3xl font-black text-deep-brown tracking-tight">
                                {editingProduct ? 'Editar Prenda' : 'Nueva Prenda'}
                            </h2>
                            <div className="p-3 bg-soft-pink rounded-2xl">
                                <ImageIcon className="text-accent-pink h-6 w-6" />
                            </div>
                        </div>

                        {/* Contenido con Scroll */}
                        <div className="flex-1 overflow-y-auto px-8 py-2 custom-scrollbar">
                            <form id="productForm" onSubmit={handleSaveProduct} className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-black text-deep-brown/40 uppercase tracking-widest mb-2 ml-1">Nombre</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-4 bg-soft-pink/20 border border-soft-pink/30 rounded-2xl font-bold text-deep-brown outline-none focus:ring-2 focus:ring-accent-pink/20"
                                        value={newProduct.name}
                                        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-black text-deep-brown/40 uppercase tracking-widest mb-2 ml-1">Precio</label>
                                        <input
                                            type="number"
                                            required
                                            className="w-full px-5 py-4 bg-soft-pink/20 border border-soft-pink/30 rounded-2xl font-bold text-deep-brown outline-none"
                                            value={newProduct.price}
                                            onChange={e => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-deep-brown/40 uppercase tracking-widest mb-2 ml-1">Categoría</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-5 py-4 bg-soft-pink/20 border border-soft-pink/30 rounded-2xl font-bold text-deep-brown outline-none"
                                            value={newProduct.category}
                                            onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black text-deep-brown/40 uppercase tracking-widest mb-2 ml-1">URL de Imagen (ImgBB Directo)</label>
                                    <input
                                        type="url"
                                        required
                                        className="w-full px-5 py-4 bg-soft-pink/20 border border-soft-pink/30 rounded-2xl font-bold text-deep-brown outline-none"
                                        value={newProduct.imageUrl}
                                        onChange={e => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                                    />
                                    <p className="mt-2 text-[10px] text-accent-pink font-bold italic uppercase tracking-wider">* Usa "Enlace Directo" en ImgBB</p>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black text-deep-brown/40 uppercase tracking-widest mb-2 ml-1">Descripción</label>
                                    <textarea
                                        className="w-full px-5 py-4 bg-soft-pink/20 border border-soft-pink/30 rounded-2xl font-bold text-deep-brown h-24 resize-none outline-none"
                                        value={newProduct.description}
                                        onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                                    ></textarea>
                                </div>
                                <div className="h-4"></div> {/* Espaciador final */}
                            </form>
                        </div>

                        {/* Footer Fijo con Botones - SIEMPRE VISIBLES */}
                        <div className="p-8 pt-4 border-t border-soft-pink/20 bg-white shrink-0 flex space-x-4">
                            <button
                                type="button"
                                onClick={() => setIsAddModalOpen(false)}
                                className="flex-1 py-5 text-[10px] font-black uppercase tracking-widest text-deep-brown/40 bg-soft-pink/30 rounded-[20px] hover:bg-soft-pink/50 transition-all"
                            >
                                Cancelar
                            </button>
                            <button
                                form="productForm"
                                type="submit"
                                className="flex-1 py-5 text-[11px] font-black uppercase tracking-widest text-white bg-[#D63384] rounded-[20px] shadow-lg shadow-[#D63384]/30 hover:bg-[#B52A6F] transition-all flex items-center justify-center border-none"
                            >
                                {editingProduct ? 'Actualizar Prenda' : 'Publicar Prenda'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
