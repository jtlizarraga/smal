import { useEffect, useState } from 'react';
import { insforge } from '../lib/insforge';
import { Product } from '../lib/types';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';

export function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Extract unique categories from products
    const categories = ['all', ...Array.from(new Set(products.map(p => p.category?.toLowerCase()).filter((c): c is string => !!c)))];

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await insforge.database
                    .from('products')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setProducts(data || []);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="bg-white min-h-screen font-sans text-deep-brown">
            {/* Header Section - Crisp White */}
            <header className="pt-20 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="h-[1px] w-8 bg-accent-pink"></span>
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-accent-pink">SMAL Boutique</span>
                        <span className="h-[1px] w-8 bg-accent-pink"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                        Nuestros <span className="font-serif italic font-light text-accent-pink/60">Esenciales</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-deep-brown/50 font-medium leading-relaxed">
                        Una curaduría de piezas diseñadas para elevar tu práctica diaria. <br />
                        Elegancia sensorial, rendimiento excepcional.
                    </p>
                </div>
            </header>

            {/* Filter Bar - Floating in white */}
            <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-y border-soft-pink shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8 relative">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className={`flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${isFilterOpen || selectedCategory !== 'all' ? 'text-accent-pink' : 'text-deep-brown/60 hover:text-accent-pink'}`}
                            >
                                <SlidersHorizontal className="h-4 w-4" />
                                <span>{selectedCategory === 'all' ? 'Filtrar' : `Filtrado: ${selectedCategory}`}</span>
                                <ChevronDown className={`h-3 w-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isFilterOpen && (
                                <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-3xl shadow-2xl border border-soft-pink py-4 z-50 animate-fade-in">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                setIsFilterOpen(false);
                                            }}
                                            className={`w-full text-left px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-soft-pink ${selectedCategory === cat ? 'text-accent-pink' : 'text-deep-brown/40'}`}
                                        >
                                            {cat === 'all' ? 'Ver Todo' : cat}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid Area - Blush Pink Background for contrast */}
            <section className="bg-blush-pink py-20 min-h-[60vh] relative">
                {/* Decorative background shape */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 -right-24 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 animate-pulse">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="space-y-6">
                                    <div className="aspect-[4/5] bg-white/50 rounded-[2rem]"></div>
                                    <div className="h-4 bg-white/50 rounded-full w-3/4 mx-auto"></div>
                                    <div className="h-4 bg-white/50 rounded-full w-1/2 mx-auto"></div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-white/50 backdrop-blur rounded-[3rem] border border-white">
                            <h3 className="text-2xl font-black text-red-400 mb-4">Ups, algo salió mal</h3>
                            <p className="text-deep-brown/60 font-medium">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-8 btn-primary"
                            >
                                Reintentar
                            </button>
                        </div>
                    ) : products.length === 0 ? (
                        <div className="text-center py-20 bg-white/50 backdrop-blur rounded-[3rem] border border-white">
                            <div className="inline-flex p-6 bg-white rounded-full shadow-sm mb-8">
                                <Filter className="h-8 w-8 text-accent-pink opacity-20" />
                            </div>
                            <h3 className="text-3xl font-black tracking-tight mb-4">No hay productos aún</h3>
                            <p className="text-deep-brown/50 font-medium">Pronto tendremos nuevas piezas para ti.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                            {products
                                .filter(p => selectedCategory === 'all' || p.category?.toLowerCase() === selectedCategory)
                                .map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section with division */}
            <section className="bg-white py-24 border-t border-soft-pink">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <span className="text-accent-pink text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Newsletter</span>
                        <h2 className="text-4xl font-black tracking-tighter mb-6">Sé parte del <span className="font-serif italic font-light text-accent-pink/60">Círculo SMAL</span></h2>
                        <p className="text-deep-brown/50 font-medium mb-10 leading-relaxed">
                            Recibe noticias exclusivas sobre nuevas piezas, preventas y eventos en Mérida Yucatán.
                        </p>
                        <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-grow px-8 py-4 bg-soft-pink rounded-full border-none focus:ring-2 focus:ring-accent-pink/20 text-sm"
                                required
                            />
                            <button type="submit" className="btn-primary whitespace-nowrap">
                                Suscribirme
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
