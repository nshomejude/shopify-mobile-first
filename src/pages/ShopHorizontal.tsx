import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { ProductCard } from "@/components/shop/ProductCard";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { MobileFilterDrawer } from "@/components/shop/MobileFilterDrawer";
import { SortDropdown } from "@/components/shop/SortDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useProductFilters } from "@/hooks/useProductFilters";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DemoModeBanner } from "@/components/DemoModeBanner";

const ShopHorizontal = () => {
  const [searchParams] = useSearchParams();
  const {
    filters,
    updateFilter,
    resetFilters,
    toggleCategory,
    filteredAndSortedProducts,
    uniqueCategories,
    resultCount,
    totalCount
  } = useProductFilters(products);

  // Apply URL params on mount
  useEffect(() => {
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const prescription = searchParams.get("prescription");

    if (search) updateFilter("searchQuery", search);
    if (category) updateFilter("categories", [category]);
    if (minPrice && maxPrice) updateFilter("priceRange", [Number(minPrice), Number(maxPrice)]);
    if (prescription) {
      updateFilter("requiresPrescription", 
        prescription === "prescription" ? true : prescription === "no-prescription" ? false : null
      );
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhyBuyFromUs />
      
      <section className="container mx-auto px-4 py-6 md:py-8">
        <DemoModeBanner />
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search medicines, supplements, and more..."
              className="pl-10 h-12"
              value={filters.searchQuery}
              onChange={(e) => updateFilter("searchQuery", e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <MobileFilterDrawer
          filters={filters}
          categories={uniqueCategories}
          onFilterChange={updateFilter}
          onToggleCategory={toggleCategory}
          onReset={resetFilters}
        />

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <FilterSidebar
            filters={filters}
            categories={uniqueCategories}
            onFilterChange={updateFilter}
            onToggleCategory={toggleCategory}
            onReset={resetFilters}
          />

          {/* Results and Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {resultCount} of {totalCount} products
              </p>
              <SortDropdown
                value={filters.sortBy}
                onChange={(value) => updateFilter("sortBy", value)}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredAndSortedProducts.slice(0, 12).map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.variationPrices?.minPrice || product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                  inStock={product.inStock}
                  maxPrice={product.variationPrices?.maxPrice}
                  hasVariations={!!(product.strengthOptions || product.formOptions)}
                />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
                <Button onClick={resetFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredAndSortedProducts.length > 12 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button variant="outline" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopHorizontal;
