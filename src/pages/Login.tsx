import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export function Login() {
    const { signInWithGoogle, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error('Login error:', error);
            alert('Error al iniciar sesión con Google');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-smal-pink-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <div className="mx-auto h-12 w-12 text-smal-pink-600 flex justify-center">
                        <ShoppingBag size={48} />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Inicia sesión en SMAL
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Accede a tu cuenta para gestionar tus pedidos
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <button
                        onClick={handleLogin}
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            {/* Google Icon SVG */}
                            <svg className="h-5 w-5 text-red-500 group-hover:text-red-400 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 4.63c1.69 0 3.26.58 4.54 1.76l3.41-3.41C17.46.96 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                        </span>
                        Continuar con Google
                    </button>
                </div>
            </div>
        </div>
    );
}
