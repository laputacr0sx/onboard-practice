"use client";

import { useState } from "react";

import { productData } from "@/db/data";

import ProductCard from "@/app/components/product/ProductCard";

export default function Home() {
  return (
    <>
      <main className="flex w-screen">
        <div className="bg-zinc-200 m-2 rounded-md p-2">Menu</div>
        <div className="bg-zinc-200 m-2 rounded-md grid grid-cols-3 w-screen">
          {productData.products.map((item, idx) => (
            <ProductCard item={item} key={item.code} />
          ))}
        </div>
        <div className="bg-zinc-200 m-2 rounded-md p-2">Right</div>
      </main>
    </>
  );
}
