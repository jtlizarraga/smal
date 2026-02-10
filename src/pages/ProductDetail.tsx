import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { insforge } from '../lib/insforge';
import { Product } from '../lib/types';
import { ArrowLeft, ShieldAlert, MessageCircle } from 'lucide-react';

export function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { data, error } = await insforge.database
                    .from('products')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setProduct(data as Product);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : 'Error al cargar el producto';
                console.error('Error fetching product:', err);
                setError(message);
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchProduct();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-smal-pink-500"></div></div>;
    if (error || !product) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error || 'Producto no encontrado'}</div>;

    const whatsappMessage = `Hola, me interesa el producto ${product.name} en talla ${selectedSize}. ¿Está disponible?`;
    const whatsappLink = `https://wa.me/5219999187152?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">
                <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Link to="/catalog" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al catálogo
                    </Link>
                </nav>
                <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <div className="flex flex-col-reverse">
                            <div className="aspect-w-1 aspect-h-1 w-full">
                                <img
                                    src={product.images[0] || 'https://via.placeholder.com/600'}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center sm:rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <div className="flex items-baseline gap-4">
                                    <p className="text-3xl tracking-tight text-smal-pink-600">${product.price.toFixed(2)}</p>
                                    {product.original_price && product.original_price > product.price && (
                                        <p className="text-xl text-gray-400 line-through">${product.original_price.toFixed(2)}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: product.description || '' }} />
                            </div>

                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-900">Talla</h3>
                                <div className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`
                            border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none 
                            ${selectedSize === size
                                                    ? 'bg-smal-pink-600 border-transparent text-white hover:bg-smal-pink-700'
                                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'}
                        `}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Policies Warning */}
                            <div className="mt-8 rounded-md bg-red-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <ShieldAlert className="h-5 w-5 text-red-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">Importante: Sin Cambios ni Devoluciones</h3>
                                        <div className="mt-2 text-sm text-red-700">
                                            <ul role="list" className="list-disc space-y-1 pl-5">
                                                <li>Por razones de higiene, esta prenda no tiene cambio.</li>
                                                <li>No se permite probar la prenda al momento de la entrega.</li>
                                                <li>Revisa bien tu talla antes de confirmar.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full transition-all 
                    ${selectedSize ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed pointer-events-none'}
                  `}
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    {selectedSize ? 'Cotizar en WhatsApp' : 'Selecciona una talla'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
