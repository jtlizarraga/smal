import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { insforge } from '../lib/insforge';

interface User {
    id: string;
    email?: string;
    user_metadata?: {
        full_name?: string;
        avatar_url?: string;
    };
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active session
        async function checkSession() {
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const { data } = await (insforge.auth as any).getCurrentUser();
                if (data?.user) {
                    setUser(data.user);
                }
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : 'Error checking session';
                console.error('Error checking session:', message);
            } finally {
                setLoading(false);
            }
        }

        checkSession();
    }, []);

    const signInWithGoogle = async () => {
        const { error } = await insforge.auth.signInWithOAuth({
            provider: 'google',
            redirectTo: window.location.origin,
        });
        if (error) throw error;
    };

    const signOut = async () => {
        await insforge.auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
