import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPriceRange = (minPrice: number, maxPrice?: number): string => {
  if (!maxPrice || minPrice === maxPrice) return `$${minPrice.toFixed(2)}`;
  return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
};
