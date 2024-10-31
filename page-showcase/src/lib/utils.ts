import { Product } from "@/types/product.type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateImageUrl(images: Product["images"]): string {
  if (!images) {
    return "https://placehold.co/200x200.png";
  }

  if (images.length === 0) {
    return "https://placehold.co/200x200.png";
  }

  const validImages = images.filter((img) => img.url.length > 0);

  if (validImages.length === 0) {
    return "https://placehold.co/200x200.png";
  }

  return validImages[0].url;
}
