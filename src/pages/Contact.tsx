import { MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';

export function Contact() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            Contacto
                        </h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                ¿Tienes dudas sobre tallas o disponibilidad? Estamos aquí para ayudarte. Escríbenos por WhatsApp para una atención rápida.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <MessageCircle className="h-6 w-6 text-green-500" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>WhatsApp: +52 1 999 918 7152</p>
                                    <p className="mt-1">Atención inmediata</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <Mail className="h-6 w-6 text-smal-pink-500" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>Email: contacto@sandi-smal.com</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-smal-pink-500" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>Showroom: Mérida, Yucatán, México</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0 md:pl-8">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            Síguenos
                        </h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Descubre las últimas colecciones y promociones en nuestras redes sociales.
                            </p>
                        </div>
                        <div className="mt-9">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-smal-pink-600 hover:text-smal-pink-700 transition-colors"
                            >
                                <Instagram className="h-6 w-6 mr-2" />
                                <span className="text-lg font-medium">@sandi.smal</span>
                            </a>
                        </div>
                        <div className="mt-12">
                            <a
                                href="https://wa.me/5219999187152"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-all"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Chat con nosotros
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
