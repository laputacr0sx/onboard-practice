import { Product } from '@/types/product.type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchAllProducts(): Promise<Product[]> {
    const res = await axios.get('/api/product');

    return res.data;
}

export default function useFetchAllProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchAllProducts,
        retry: true
    });
}
