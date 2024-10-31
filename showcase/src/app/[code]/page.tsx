import { productData } from "@/data/data";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import parse from "html-react-parser";

function ProductDetail() {
  const { code } = useParams<{ code: string }>();
  const r = useRouter();

  const getProductByCode = (code: string) => {
    const data = productData.products.filter(
      (product, idx) => product.code === code
    )[0];

    return data;
  };

  const product = getProductByCode(code);

  const imageUrl =
    product?.images === undefined
      ? "https://placehold.co/600x400"
      : product?.images?.[0].url;

  return (
    <>
      <p className="text-5xl font-bold">{product?.name}</p>
      <section className="">
        <Image
          src={imageUrl}
          alt={product?.name ?? ""}
          width={300}
          height={300}
        />
        <div className="m-10 p-10">{parse(product?.description)}</div>
      </section>
    </>
  );
}

export default ProductDetail;
