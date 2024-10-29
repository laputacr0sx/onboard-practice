"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function ProductDetail({
  params: { productCode },
}: {
  params: { productCode: string };
}) {
  return (
    <div>
      <p>{productCode}</p>
      <p>Name</p>
      <Image src={""} alt={""} width={200} height={200} />
      <p>description</p>
    </div>
  );
}

export default ProductDetail;
