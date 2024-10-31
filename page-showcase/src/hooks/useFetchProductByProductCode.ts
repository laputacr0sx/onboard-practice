import axios from "axios";

import { Product } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";

const fetchProductByProductCode = async (
  productCode: string | null
): Promise<Product> => {
  const res = await axios.get<Product>(`/api/product/${productCode}`);

  return res.data;
};

export default function useFetchProductByProductCode(
  productCode: string | null
) {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchProductByProductCode(productCode),
    enabled: !!productCode,
    retry: true,
  });
}
