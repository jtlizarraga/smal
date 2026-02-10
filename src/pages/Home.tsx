import { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, ShoppingBag, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insforge } from '../lib/insforge';
import { Product } from '../lib/types';

export function Home() {
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const { data } = await insforge.database
                    .from('products')
                    .select('*')
                    .limit(4);
                setFeaturedProducts((data as Product[]) || []);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatured();
    }, []);

    return (
        <div className="bg-soft-pink min-h-screen font-sans text-deep-brown">
            {/* Hero Section - Spanish: "Rendimiento que es Poesía" */}
            <section className="relative h-[90vh] flex items-center overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                        alt="SMAL Boutique Hero"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-xl">
                        <div className="flex items-center space-x-2 mb-6 animate-fade-in">
                            <span className="h-[1px] w-8 bg-accent-pink"></span>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-pink">Nueva Colección 2026</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                            Rendimiento <br />
                            <span className="font-serif italic text-accent-pink font-light">que es</span> <br />
                            Poesía
                        </h1>
                        <p className="text-lg text-deep-brown/70 mb-10 max-w-md leading-relaxed font-medium">
                            Descubre una estética diseñada para moverte. Ropa deportiva de lujo con la suavidad que mereces.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link to="/catalog" className="btn-primary flex items-center justify-center group shadow-xl hover:shadow-accent-pink/40">
                                Explorar Colección
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="px-8 py-4 rounded-full border-2 border-deep-brown/10 font-bold text-sm tracking-widest uppercase hover:bg-deep-brown hover:text-white transition-all flex items-center justify-center">
                                Nuestra Historia
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-12 right-12 hidden lg:block">
                    <div className="flex items-center space-x-4 text-deep-brown/30">
                        <div className="text-right">
                            <p className="text-[10px] font-black uppercase tracking-widest">Diseñado en</p>
                            <p className="text-sm font-serif italic">Mérida, Yucatán</p>
                        </div>
                        <div className="h-12 w-[1px] bg-deep-brown/10"></div>
                        <Sparkles className="h-6 w-6 opacity-20" />
                    </div>
                </div>
            </section>

            {/* Content Division - Benefit Bar */}
            <div className="bg-soft-pink py-12 border-y border-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="p-3 bg-white rounded-full shadow-sm mb-2 text-accent-pink">
                                <Award className="h-5 w-5" />
                            </div>
                            <h4 className="text-[11px] font-black uppercase tracking-widest">Calidad Premium</h4>
                            <p className="text-[10px] text-deep-brown/50 font-medium">Telas de alta tecnología</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="p-3 bg-white rounded-full shadow-sm mb-2 text-accent-pink">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h4 className="text-[11px] font-black uppercase tracking-widest">Confianza</h4>
                            <p className="text-[10px] text-deep-brown/50 font-medium">Hecho para durar</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="p-3 bg-white rounded-full shadow-sm mb-2 text-accent-pink">
                                <ShoppingBag className="h-5 w-5" />
                            </div>
                            <h4 className="text-[11px] font-black uppercase tracking-widest">Envío Local</h4>
                            <p className="text-[10px] text-deep-brown/50 font-medium">Puntos de entrega en Mérida</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="p-3 bg-white rounded-full shadow-sm mb-2 text-accent-pink">
                                <Heart className="h-5 w-5" />
                            </div>
                            <h4 className="text-[11px] font-black uppercase tracking-widest">Ética</h4>
                            <p className="text-[10px] text-deep-brown/50 font-medium">Procesos conscientes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Piezas Clave Section (Featured Products) */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
                        <div>
                            <span className="text-accent-pink text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Imprescindibles</span>
                            <h2 className="text-5xl font-black tracking-tighter">
                                Piezas <span className="font-serif italic font-light text-accent-pink/60">Clave</span>
                            </h2>
                        </div>
                        <Link to="/catalog" className="text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-accent-pink pb-1 hover:text-accent-pink transition-colors">
                            Ver Catálogo Completo
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {loading ? (
                            [1, 2, 3, 4].map((i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="aspect-[3/4] rounded-3xl bg-soft-pink/30 mb-6"></div>
                                    <div className="h-4 bg-soft-pink/30 w-3/4 mb-2"></div>
                                    <div className="h-3 bg-soft-pink/30 w-1/2"></div>
                                </div>
                            ))
                        ) : (
                            featuredProducts.map((product) => (
                                <Link key={product.id} to="/catalog" className="group cursor-pointer">
                                    <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-soft-pink mb-6 relative shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 border border-white">
                                        <img
                                            src={product.images[0]}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            alt={product.name}
                                        />
                                        <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="p-3 bg-white/90 backdrop-blur rounded-full text-deep-brown hover:bg-accent-pink hover:text-white transition-colors">
                                                <ShoppingBag className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-accent-pink text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                                                {product.category || 'SMAL'}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black tracking-tight mb-1">{product.name}</h3>
                                    <p className="text-[10px] text-deep-brown/40 uppercase tracking-widest font-bold mb-3">
                                        {product.category} • SMAL Merida
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-serif italic font-medium">${product.price}.00 MXN</span>
                                        <div className="flex items-center text-yellow-400">
                                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-current" />)}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Promo Banner - Únete al Círculo */}
            <section className="py-24 bg-soft-pink border-y border-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white">
                        <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                            <span className="text-accent-pink text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">Comunidad SMAL</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                                Únete al <br />
                                <span className="font-serif italic font-light text-accent-pink">Círculo</span>
                            </h2>
                            <p className="text-deep-brown/60 mb-10 leading-relaxed font-medium">
                                Recibe acceso exclusivo a lanzamientos, eventos locales en Mérida y un 10% de descuento en tu primera compra.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="px-8 py-4 bg-soft-pink rounded-full border-none focus:ring-2 focus:ring-accent-pink/20 text-sm font-medium flex-grow"
                                />
                                <button className="btn-primary">
                                    Suscribirme
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-80 lg:h-auto">
                            <img
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                                className="w-full h-full object-cover"
                                alt="Comunidad SMAL"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
