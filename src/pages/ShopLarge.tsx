import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { MobileFilterDrawer } from "@/components/shop/MobileFilterDrawer";
import { SortDropdown } from "@/components/shop/SortDropdown";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Settings, Heart, Eye, Search } from "lucide-react";
import { products, Product } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { useProductFilters } from "@/hooks/useProductFilters";
import { formatPriceRange } from "@/lib/utils";

const ShopLarge = () => {
  const navigate = useNavigate();
  
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhyBuyFromUs />
      
      <section className="container mx-auto px-4 py-6 md:py-8">
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
            {/* Header with Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Products</h2>
                <p className="text-sm text-muted-foreground">
                  Showing {resultCount} of {totalCount} products
                </p>
              </div>
              <SortDropdown
                value={filters.sortBy}
                onChange={(value) => updateFilter("sortBy", value)}
              />
            </div>

            {/* Large Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredAndSortedProducts.slice(0, 12).map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div 
                className="relative aspect-square overflow-hidden bg-muted"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
                    <Badge variant="secondary" className="text-base px-4 py-2">Out of Stock</Badge>
                  </div>
                )}
                {product.oldPrice && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                    Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </Badge>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-lg">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-lg">
                    <Eye className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-warning text-warning"
                          : "text-muted"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <h3 
                  className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem] hover:text-primary transition-colors cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {formatPriceRange(product.variationPrices?.minPrice || product.price, product.variationPrices?.maxPrice)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-base text-muted-foreground line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <Button 
                  className="w-full h-12 text-base touch-manipulation active:scale-95 transition-transform" 
                  disabled={!product.inStock}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <Settings className="w-5 h-5 mr-2" />
                  {product.inStock ? "Select Options" : "Out of Stock"}
                </Button>
              </div>
            </Card>
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

            {/* Load More */}
            {filteredAndSortedProducts.length > 12 && (
              <div className="flex justify-center mt-10">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopLarge;
