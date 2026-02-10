import { Link, Outlet } from 'react-router-dom';
import { Menu, X, User, Facebook, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BrandLogo } from './BrandLogo';

export function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOut } = useAuth();
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-soft-pink font-sans text-deep-brown">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center group">
                                <BrandLogo className="h-20 w-20" />
                                <span className="ml-2 text-2xl font-black text-deep-brown tracking-tighter uppercase font-sans">
                                    SMAL
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-10 items-center">
                            <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/60 hover:text-accent-pink transition-all">Inicio</Link>
                            <Link to="/catalog" className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/60 hover:text-accent-pink transition-all">Catálogo</Link>
                            <Link to="/about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/60 hover:text-accent-pink transition-all">Nosotros</Link>
                            <Link to="/faq" className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/60 hover:text-accent-pink transition-all">FAQ</Link>
                            <Link to="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/60 hover:text-accent-pink transition-all">Contacto</Link>
                            {user && <Link to="/admin" className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-pink font-serif italic hover:text-deep-brown transition-all">Panel Admin</Link>}
                        </div>

                        {/* Mobile Menu Button - Cart Removed */}
                        <div className="flex items-center space-x-4">

                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                        className="p-2 text-deep-brown/60 hover:text-accent-pink transition-colors relative"
                                    >
                                        {user.user_metadata?.avatar_url ? (
                                            <img src={user.user_metadata.avatar_url} alt="Profile" className="h-8 w-8 rounded-full" />
                                        ) : (
                                            <User className="h-6 w-6" />
                                        )}
                                    </button>
                                    {showUserMenu && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                                            <div className="px-4 py-2 text-sm text-gray-700 border-b">
                                                {user.user_metadata?.full_name || user.email}
                                            </div>
                                            <button
                                                onClick={() => { signOut(); setShowUserMenu(false); }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Cerrar Sesión
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to="/login" className="p-2 text-gray-600 hover:text-smal-pink-500 transition-colors">
                                    <User className="h-6 w-6" />
                                </Link>
                            )}

                            <button
                                className="md:hidden p-2 text-gray-600"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-smal-pink-100">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                className="block px-3 py-2 rounded-md text-base font-medium text-deep-brown hover:text-accent-pink hover:bg-soft-pink"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/catalog"
                                className="block px-3 py-2 rounded-md text-base font-medium text-deep-brown hover:text-accent-pink hover:bg-soft-pink"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Catálogo
                            </Link>
                            <Link
                                to="/about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-deep-brown hover:text-accent-pink hover:bg-soft-pink"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Nosotros
                            </Link>
                            <Link
                                to="/faq"
                                className="block px-3 py-2 rounded-md text-base font-medium text-deep-brown hover:text-accent-pink hover:bg-soft-pink"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQ
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 rounded-md text-base font-medium text-deep-brown hover:text-accent-pink hover:bg-soft-pink"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white pt-20 mt-auto border-t border-soft-pink">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                        {/* Info Column */}
                        <div className="flex flex-col items-center md:items-start">
                            <Link to="/" className="flex items-center mb-8">
                                <BrandLogo className="h-10 w-10 mr-3" />
                                <span className="text-2xl font-black text-deep-brown tracking-tighter uppercase font-sans">
                                    SMAL
                                </span>
                            </Link>
                            <div className="space-y-3 text-[10px] font-bold text-deep-brown/40 leading-relaxed uppercase tracking-[0.15em]">
                                <p>123 Calle Principal, Mérida, Yucatán</p>
                                <p>Lun-Vie: 9:00 - 18:00</p>
                                <p className="pt-2">Contacto:</p>
                                <p>Email: <a href="mailto:hola@sandi-boutique.com" className="text-accent-pink hover:underline">hola@sandi-boutique.com</a></p>
                                <p>WhatsApp: <a href="https://wa.me/5219999187152" className="text-accent-pink hover:underline">+52 999 912 3456</a></p>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-[11px] font-black text-deep-brown uppercase tracking-[0.3em] mb-8">Enlaces Rápidos</h4>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-[10px] font-bold text-deep-brown/40 hover:text-accent-pink uppercase tracking-[0.2em] transition-colors">Inicio</Link></li>
                                <li><Link to="/catalog" className="text-[10px] font-bold text-deep-brown/40 hover:text-accent-pink uppercase tracking-[0.2em] transition-colors">Comprar</Link></li>
                                <li><Link to="/about" className="text-[10px] font-bold text-deep-brown/40 hover:text-accent-pink uppercase tracking-[0.2em] transition-colors">Nosotros</Link></li>
                                <li><Link to="/faq" className="text-[10px] font-bold text-deep-brown/40 hover:text-accent-pink uppercase tracking-[0.2em] transition-colors">Preguntas Frecuentes</Link></li>
                            </ul>
                        </div>

                        {/* Follow Us Column */}
                        <div className="flex flex-col items-center md:items-end">
                            <h4 className="text-[11px] font-black text-deep-brown uppercase tracking-[0.3em] mb-8">Síguenos</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/smal2nail?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="p-4 bg-soft-pink text-accent-pink rounded-full hover:bg-accent-pink hover:text-white transition-all transform hover:scale-110 shadow-sm">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="https://www.instagram.com/smal_ropa_deportiva" target="_blank" rel="noopener noreferrer" className="p-4 bg-soft-pink text-accent-pink rounded-full hover:bg-accent-pink hover:text-white transition-all transform hover:scale-110 shadow-sm">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="https://wa.me/5219999187152" className="p-4 bg-soft-pink text-accent-pink rounded-full hover:bg-accent-pink hover:text-white transition-all transform hover:scale-110 shadow-sm">
                                    <Phone className="h-5 w-5" />
                                </a>
                            </div>
                            <p className="mt-8 text-[10px] font-medium text-deep-brown/30 italic font-serif">
                                Mérida, Yucatán — México
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="bg-soft-pink py-6 text-center border-t border-white">
                    <p className="text-[10px] font-bold text-deep-brown/20 uppercase tracking-[0.5em]">
                        © 2026 SMAL BOUTIQUE. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                </div>
            </footer>
        </div>
    );
}
