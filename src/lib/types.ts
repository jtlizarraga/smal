export interface Product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    original_price: number | null;
    images: string[];
    sizes: string[];
    category: string | null;
    stock: number;
    created_at: string;
}
