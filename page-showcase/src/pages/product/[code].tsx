import { encode } from "querystring";

import useGetProductByProductCode from "@/hooks/useFetchProductByProductCode";
import parse from "html-react-parser";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Product } from "@/types/product.type";
import { validateImageUrl } from "@/lib/utils";

function ProductDetail({
  productPage: { code },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    data: product,
    isSuccess,
    isLoading,
  } = useGetProductByProductCode(code);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isSuccess) {
    return <p>Product not found.</p>;
  }

  const { name, images, description } = product;

  const imageUrl = validateImageUrl(images);

  return (
    <div className="mx-20 py-10">
      <p className="text-5xl font-bold">{product.name}</p>
      <section className="">
        <Image
          placeholder="empty"
          src={imageUrl}
          alt={name ?? ""}
          width={300}
          height={300}
        />
        <div className="m-10 p-10">{parse(description)}</div>
      </section>
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
