import ProductImage from '@/components/product/ProductImage';
import useFetchProductByProductCode from '@/hooks/useFetchProductByProductCode';
import { validateImageUrl, validateName } from '@/lib/utils';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

export default function ProductDetail() {
  const r = useRouter();
  const { code } = r.query;

  const { data: product, isSuccess, isLoading } = useFetchProductByProductCode(code);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isSuccess) {
    return <p>Product not found.</p>;
  }

  const { images, description } = product;

  const imageUrl = validateImageUrl(images);
  const productName = validateName(product);

  return (
    <div className="mx-20 py-10">
      <p className="text-5xl font-bold my-4">{productName}</p>
      <ProductImage imgUrl={imageUrl} altName={product.brandName} width={300} height={300} />
      <div className="m-10 p-10">{parse(description)}</div>
    </div>
  );
}
