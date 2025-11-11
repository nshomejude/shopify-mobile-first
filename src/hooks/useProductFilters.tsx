import { useState, useMemo } from "react";
import { Product } from "@/data/products";

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "name-asc" | "name-desc";

export interface ProductFilters {
  searchQuery: string;
  categories: string[];
  priceRange: [number, number];
  requiresPrescription: boolean | null;
  requiresLabLicense: boolean | null;
  inStockOnly: boolean;
  minRating: number;
  sortBy: SortOption;
}

const initialFilters: ProductFilters = {
  searchQuery: "",
  categories: [],
  priceRange: [0, 500],
  requiresPrescription: null,
  requiresLabLicense: null,
  inStockOnly: false,
  minRating: 0,
  sortBy: "featured"
};

export const useProductFilters = (allProducts: Product[]) => {
  const [filters, setFilters] = useState<ProductFilters>(initialFilters);

  const uniqueCategories = useMemo(() => {
    const cats = new Set<string>();
    allProducts.forEach(p => {
      if (p.subcategory) cats.add(p.subcategory);
    });
    return Array.from(cats).sort();
  }, [allProducts]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      // Search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesSearch = 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.subcategory?.toLowerCase().includes(query)) ||
          (product.tags?.some(tag => tag.toLowerCase().includes(query)));
        if (!matchesSearch) return false;
      }

      // Categories
      if (filters.categories.length > 0) {
        if (!product.subcategory || !filters.categories.includes(product.subcategory)) {
          return false;
        }
      }

      // Price range
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Prescription requirement
      if (filters.requiresPrescription !== null) {
        if (product.requiresPrescription !== filters.requiresPrescription) {
          return false;
        }
      }

      // Lab license requirement
      if (filters.requiresLabLicense !== null) {
        if (product.requiresLabLicense !== filters.requiresLabLicense) {
          return false;
        }
      }

      // Stock status
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      // Rating
      if (product.rating < filters.minRating) {
        return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "featured":
        default:
          // Featured: prioritize in-stock, then rating
          if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [allProducts, filters]);

  const updateFilter = <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const toggleCategory = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  return {
    filters,
    updateFilter,
    resetFilters,
    toggleCategory,
    filteredAndSortedProducts,
    uniqueCategories,
    resultCount: filteredAndSortedProducts.length,
    totalCount: allProducts.length
  };
};
