"use client";

import { Product } from "@/app/types/product/product.type";
import { cn } from "@/app/utils/mergeClassName";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ProductCardProps = {
  item: Product;
};

function ProductCard({ item }: ProductCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const r = useRouter();

  return (
    <div
      className={cn(
        "py-2 bg-white rounded-sm m-3 flex flex-col  items-center px-8 gap-6",
        isSelected &&
          "py-2 bg-zinc-300 rounded-sm m-3 flex flex-col justify-center items-center px-8 gap-6"
      )}
    >
      <Image
        width={200}
        height={200}
        src={item.images?.at(0)?.url!}
        alt={item.brandName}
        placeholder="empty"
      />
      <div className="flex text-xs gap-8">
        <button
          className="px-2  border-cyan-300 border text-cyan-300 rounded-lg"
          onClick={() => setIsPreviewing((p) => !p)}
        >
          Preview
        </button>
        <button
          className="px-2 py-1 border-cyan-300 border text-cyan-300 rounded-lg"
          onClick={() => {
            r.push(item.code);
          }}
        >
          Details
        </button>
      </div>
      <p className="text-black font-bold text-xs inline-block">{item.name}</p>
      {isPreviewing ? (
        <>
          <div className="align-middle text-center">
            <p className="text-sm font-semibold">{item.code}</p>
            <p className="font-bold text">{item.price?.formattedValue}</p>
          </div>
          <button
            onClick={() => setIsSelected((p) => !p)}
            className={cn(
              "border text-cyan-300 border-cyan-300 text-xs px-2 py-1 rounded-lg",
              isSelected ? "bg-rose-300" : ""
            )}
          >
            {isSelected ? "Cancel" : "Select"}
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductCard;
