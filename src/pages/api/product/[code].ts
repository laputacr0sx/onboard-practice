import { Product } from "@/types/product.type";
import type { NextApiRequest, NextApiResponse } from "next";
import { getProductByProductCode } from "./service/productService";
import { ConciseProduct } from "@/types/conciseProduct.type";

type GetProductResponseData = ConciseProduct | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetProductResponseData>
) {
  if (req.method !== "GET") {
    return res.status(401);
  }

  const { code } = req.query;

  if (code === undefined) {
    return res.status(400);
  }

  try {
    const product = getProductByProductCode(code);

    const { code: productCode, name, images, description } = product;

    res.status(200).json(product);

    // res.status(200).json({
    //   code: productCode,
    //   name,
    //   images,
    //   description,
    // });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the product." });
  }
}
