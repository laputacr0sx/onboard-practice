import { ConciseProduct } from '@/types/conciseProduct.type';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getProductByProductCode } from './service/productService';

type GetProductResponseData = ConciseProduct | { error: string };

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetProductResponseData>
) {
    if (req.method !== 'GET') {
        return res.status(401);
    }

    const { code } = req.query;

    if (code === undefined) {
        return res.status(400);
    }

    try {
        const product = getProductByProductCode(code);
        return res.status(200).json(product);
    } catch (error) {
        return res
            .status(500)
            .json({ error: 'An error occurred while fetching the product.' });
    }
}
