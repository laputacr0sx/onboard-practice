import ProductCard from "@/components/product/ProductCard";
import useFetchAllProducts from "@/hooks/useFetchAllProducts";

export default function Home() {
  return (
    <main className="flex w-screen">
      <div className="bg-zinc-200 m-2 rounded-md p-2">Menu</div>
      <div className="bg-zinc-200 m-2 rounded-md grid grid-cols-3 w-screen">
        <AllProducts />
      </div>
      <div className="bg-zinc-200 m-2 rounded-md p-2">Right</div>
    </main>
  );
}

function AllProducts() {
  const { data: products, isSuccess, isLoading } = useFetchAllProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isSuccess) {
    return <p>Failed to load products.</p>;
  }

  return products.map((product) => (
    <ProductCard item={product} key={product.code} />
  ));
}
