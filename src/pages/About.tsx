import { Link } from 'react-router-dom';
import { Sparkles, Award, Heart, ArrowRight } from 'lucide-react';

export function About() {
    return (
        <div className="bg-white min-h-screen font-sans text-deep-brown">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-soft-pink">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1541004995602-b3e89b7829fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                        alt="Boutique SMAL"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-accent-pink text-xs font-black uppercase tracking-[0.5em] mb-4 block">Nuestra Esencia</span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
                        Poesía en <br />
                        <span className="font-serif italic font-light text-accent-pink">Movimiento</span>
                    </h1>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Nuestra Historia"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-soft-pink rounded-full -z-0 blur-3xl opacity-50"></div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-accent-pink text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">Nuestra Historia</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter">
                                Del sueño al <br />
                                <span className="font-serif italic font-light text-accent-pink">bienestar diario</span>
                            </h2>
                            <div className="space-y-6 text-lg text-deep-brown/70 leading-relaxed font-medium">
                                <p>
                                    SMAL nació en el corazón de Mérida con un propósito claro: redefinir la relación entre la mujer y su ropa deportiva. Creemos que el rendimiento no tiene por qué sacrificar la elegancia.
                                </p>
                                <p>
                                    Cada pieza de nuestra colección es seleccionada pensando en la suavidad sensorial, la durabilidad técnica y esa estética atemporal que te acompaña tanto en el gimnasio como en tu día a día.
                                </p>
                                <p>
                                    Somos más que una boutique; somos una comunidad que celebra el movimiento consciente y el autocuidado extraído de la calma y la belleza.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-soft-pink border-y border-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black tracking-tighter">Nuestros <span className="font-serif italic font-light text-accent-pink">Valores</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-white hover:shadow-xl transition-all">
                            <div className="inline-flex p-4 bg-soft-pink text-accent-pink rounded-full mb-6">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-4">Calidad</h3>
                            <p className="text-sm text-deep-brown/60 font-medium leading-relaxed">
                                Seleccionamos telas de alta tecnología que se sienten como una segunda piel y perduran en el tiempo.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-white hover:shadow-xl transition-all">
                            <div className="inline-flex p-4 bg-soft-pink text-accent-pink rounded-full mb-6">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-4">Elegancia</h3>
                            <p className="text-sm text-deep-brown/60 font-medium leading-relaxed">
                                Estética minimalista y cortes refinados que realzan tu figura con sofisticación natural.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-white hover:shadow-xl transition-all">
                            <div className="inline-flex p-4 bg-soft-pink text-accent-pink rounded-full mb-6">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-4">Movimiento</h3>
                            <p className="text-sm text-deep-brown/60 font-medium leading-relaxed">
                                Diseñamos para la libertad. Ropa que fluye contigo en cada asana, zancada o momento de relax.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="aspect-square rounded-[2rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Lifestyle" />
                        </div>
                        <div className="aspect-square rounded-[2rem] overflow-hidden translate-y-8">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Yoga" />
                        </div>
                        <div className="aspect-square rounded-[2rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Boutique" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black tracking-tighter mb-10">
                        Únete a nuestro <br />
                        <span className="font-serif italic font-light text-accent-pink">movimiento</span>
                    </h2>
                    <Link to="/catalog" className="btn-primary inline-flex items-center space-x-3">
                        <span>Ver Colección actual</span>
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
