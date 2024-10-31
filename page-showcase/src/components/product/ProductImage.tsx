import React from "react";
import Image from "next/image";

type ProductImageProps = {
  imgUrl: string;
  altName: string;
  width?: number;
  height?: number;
};

function ProductImage({
  imgUrl,
  altName,
  width = 200,
  height = 200,
}: ProductImageProps) {
  return (
    <Image
      width={width}
      height={height}
      src={imgUrl}
      alt={altName}
      placeholder="empty"
    />
  );
}

export default ProductImage;
