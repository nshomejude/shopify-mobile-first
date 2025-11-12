import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { MobileFilterDrawer } from "@/components/shop/MobileFilterDrawer";
import { SortDropdown } from "@/components/shop/SortDropdown";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Settings, Info, Package, Search } from "lucide-react";
import { products, Product } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { useProductFilters } from "@/hooks/useProductFilters";
import { formatPriceRange } from "@/lib/utils";
import { DemoModeBanner } from "@/components/DemoModeBanner";

const ShopList = () => {
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
        <DemoModeBanner />
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
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

          {/* List View Products */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">All Products</h2>
                <p className="text-sm text-muted-foreground">
                  Showing {resultCount} of {totalCount} results
                </p>
              </div>
              <SortDropdown
                value={filters.sortBy}
                onChange={(value) => updateFilter("sortBy", value)}
              />
            </div>

            <div className="space-y-4">
              {filteredAndSortedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-card cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-4 p-4 md:p-6">
                    {/* Image */}
                    <div 
                      className="relative w-full md:w-48 aspect-square md:aspect-auto md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-muted"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <img
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {product.oldPrice && (
                        <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                          -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 
                            className="font-bold text-lg md:text-xl mb-1 hover:text-primary transition-colors cursor-pointer"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <span className="font-medium">{product.subcategory}</span>
                            {product.requiresPrescription && (
                              <>
                                <span>•</span>
                                <Badge variant="outline" className="text-xs">Rx Required</Badge>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {formatPriceRange(product.variationPrices?.minPrice || product.price, product.variationPrices?.maxPrice)}
                          </div>
                          {product.oldPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              ${product.oldPrice.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
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
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {product.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                        <div className="flex items-center gap-2">
                          {product.inStock ? (
                            <Badge variant="secondary" className="bg-success/10 text-success">
                              <Package className="w-3 h-3 mr-1" />
                              In Stock
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-muted text-muted-foreground">
                              Out of Stock
                            </Badge>
                          )}
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            <Info className="w-4 h-4 mr-1" />
                            Details
                          </Button>
                        </div>

                        <Button 
                          className="w-full sm:w-auto touch-manipulation active:scale-95 transition-transform"
                          disabled={!product.inStock}
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Select Options
                        </Button>
                      </div>
                    </div>
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

            {/* Pagination */}
            {filteredAndSortedProducts.length > 12 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopList;
