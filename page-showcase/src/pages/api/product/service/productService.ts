import { Product } from "@/types/product.type";
import { productData } from "../db/data";

export function getProductByProductCode(code: string | string[]): Product {
  const foundProduct = productData.products.filter(
    (item) => item.code === code
  );

  if (foundProduct.length === 0) {
    throw new Error(`Product with code "${code}" not found.`);
  }

  return foundProduct[0];
}

export function getAllProducts(): Product[] {
  return productData.products;
}
