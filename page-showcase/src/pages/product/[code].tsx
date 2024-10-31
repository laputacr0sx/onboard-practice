import { encode } from "querystring";

import ProductImage from "@/components/product/ProductImage";
import useFetchProductByProductCode from "@/hooks/useFetchProductByProductCode";
import { validateImageUrl, validateName } from "@/lib/utils";
import parse from "html-react-parser";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function ProductDetail({
  productPage: { code },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    data: product,
    isSuccess,
    isLoading,
  } = useFetchProductByProductCode(code);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isSuccess) {
    return <p>Product not found.</p>;
  }

  const { name, images, description } = product;

  const imageUrl = validateImageUrl(images);

  const productName = validateName(product);

  return (
    <div className="mx-20 py-10">
      <p className="text-5xl font-bold my-4">{productName}</p>
      <ProductImage
        imgUrl={imageUrl}
        altName={product.brandName}
        width={300}
        height={300}
      />
      <div className="m-10 p-10">{parse(description)}</div>
    </div>
  );
}

export default ProductDetail;

type ProductPageServerSideProps = {
  code: string | null;
};

export const getServerSideProps = (async (ctx) => {
  const { query } = ctx;

  const urlQueryString = encode(query);
  const searchParams = new URLSearchParams(urlQueryString);
  const code = searchParams.get("code");

  const productPage: ProductPageServerSideProps = {
    code,
  };

  return { props: { productPage: productPage } };
}) satisfies GetServerSideProps<{ productPage: ProductPageServerSideProps }>;
