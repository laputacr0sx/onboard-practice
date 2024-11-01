import useFetchAllProducts from '@/hooks/useFetchAllProducts';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const { data: products, isSuccess, isLoading } = useFetchAllProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isSuccess) {
    return <p>Failed to load products.</p>;
  }

  return products.map((product) => <ProductCard item={product} key={product.code} />);
}
