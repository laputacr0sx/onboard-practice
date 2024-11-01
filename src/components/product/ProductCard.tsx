import { cn, validateImageUrl, validateName } from '@/lib/utils';
import { Product } from '@/types/product.type';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { Button } from '../ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '../ui/card';
import ProductImage from './ProductImage';

type PreviewProps = {
    item: Product;
    setIsSelected: Dispatch<SetStateAction<boolean>>;
    isSelected: boolean;
};

function Preview({ item, setIsSelected, isSelected }: PreviewProps) {
    return (
        <>
            <CardDescription className="flex flex-col justify-center align-middle text-center">
                <p className="text-sm font-semibold">{item.code}</p>
                <p className="font-bold text">{item.price?.formattedValue}</p>
            </CardDescription>
            <CardFooter>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSelected((p) => !p)}
                    className={cn(
                        'text-cyan-300 border-cyan-300',
                        isSelected ? 'bg-rose-300' : ''
                    )}
                >
                    {isSelected ? 'Cancel' : 'Select'}
                </Button>
            </CardFooter>
        </>
    );
}

type ProductCardProps = {
    item: Product;
};

export default function ProductCard({ item }: ProductCardProps) {
    const [isSelected, setIsSelected] = useState(false);
    const [isPreviewing, setIsPreviewing] = useState(false);

    const r = useRouter();

    const memoImageUrl = useMemo(() => validateImageUrl(item.images), [item]);
    const productName = validateName(item);

    return (
        <Card
            className={cn(
                'py-2 bg-white rounded-sm m-3 flex flex-col items-center px-8 gap-6',
                isSelected &&
                    'py-2 bg-zinc-300 rounded-sm m-3 flex flex-col justify-center items-center px-8 gap-6'
            )}
        >
            <CardHeader>
                <ProductImage imgUrl={memoImageUrl} altName={item.brandName} />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <section className="flex text-xs gap-8">
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-cyan-300 border-cyan-300"
                        onClick={() => setIsPreviewing((p) => !p)}
                    >
                        Preview
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-cyan-300 border-cyan-300"
                        onClick={() => {
                            r.push(`product/${item.code}`);
                        }}
                    >
                        Detail
                    </Button>
                </section>
                <CardTitle>{productName}</CardTitle>
            </CardContent>
            {isPreviewing && (
                <Preview
                    item={item}
                    setIsSelected={setIsSelected}
                    isSelected={isSelected}
                />
            )}
        </Card>
    );
}
