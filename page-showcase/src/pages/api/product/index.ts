import { Product } from "@/types/product.type";
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllProducts } from "./service/productService";

type GetProductResponseData = Product[] | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetProductResponseData>
) {
  if (req.method !== "GET") {
    return res.status(401);
  }

  try {
    const product = getAllProducts();

    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the product." });
  }
}
