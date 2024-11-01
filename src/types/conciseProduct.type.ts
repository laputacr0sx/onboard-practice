import { Product } from './product.type';

export type ConciseProduct = Pick<
    Product,
    'code' | 'name' | 'images' | 'description'
>;
