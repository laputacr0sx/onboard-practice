import ProductGrid from '@/components/product/ProductGrid';

export default function Home() {
    return (
        <main className="flex w-screen">
            <div className="bg-zinc-200 m-2 rounded-md p-2">Menu</div>
            <li className="bg-zinc-200 m-2 rounded-md grid grid-cols-3 w-screen">
                <ProductGrid />
            </li>
            <div className="bg-zinc-200 m-2 rounded-md p-2">Right</div>
        </main>
    );
}
