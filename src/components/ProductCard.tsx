import { Link } from 'react-router-dom';
import { Product } from '../lib/types';
import { ShoppingBag, Star, Heart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const hasDiscount = product.original_price && product.original_price > product.price;

    return (
        <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-soft-pink/20">
            {/* Image Container */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-soft-pink relative">
                {product.images && product.images[0] ? (
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full bg-cream text-deep-brown/20 uppercase text-[10px] font-bold tracking-widest">
                        Sin Imagen
                    </div>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {hasDiscount && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-accent-pink text-white shadow-sm">
                            Oferta
                        </span>
                    )}
                    {product.stock <= 5 && product.stock > 0 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-deep-brown text-white shadow-sm">
                            Pocas piezas
                        </span>
                    )}
                    {product.stock === 0 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-gray-400 text-white shadow-sm">
                            Agotado
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-deep-brown hover:text-accent-pink transition-colors opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <Heart className="h-4 w-4" />
                </button>

                {/* Quick Add Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white/90 backdrop-blur-md text-deep-brown py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-accent-pink hover:text-white transition-all flex items-center justify-center space-x-2">
                        <ShoppingBag className="h-4 w-4" />
                        <span>Ver Detalles</span>
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                    <div className="flex text-accent-pink">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-3 w-3 fill-current" />
                        ))}
                    </div>
                    <span className="text-[9px] font-bold text-deep-brown/30 uppercase tracking-widest leading-none">(12 Reseñas)</span>
                </div>

                <h3 className="text-lg font-black tracking-tight text-deep-brown group-hover:text-accent-pink transition-colors truncate">
                    <Link to="/catalog">
                        {product.name}
                    </Link>
                </h3>

                <p className="mt-1 text-[10px] font-bold text-deep-brown/40 uppercase tracking-[0.2em]">
                    {product.category || 'Colección SMAL'}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-serif italic font-medium text-deep-brown">
                            ${product.price.toLocaleString()} MXN
                        </span>
                        {hasDiscount && (
                            <span className="text-xs text-deep-brown/30 line-through font-medium">
                                ${product.original_price?.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
