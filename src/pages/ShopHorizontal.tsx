import { useState } from "react";
import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { products } from "@/data/products";

const ShopHorizontal = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(product.subcategory || "");
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(products.map(p => p.subcategory).filter(Boolean)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhyBuyFromUs />
      
      <section className="container mx-auto px-4 py-6 md:py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {/* Top Filters Bar */}
          <div className="bg-card rounded-lg p-4 mb-6 shadow-card">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProducts.length} Products</span>
            </div>

            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    All Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div>
                      <Label className="text-sm font-semibold mb-3 block">Category</Label>
                      <div className="space-y-2">
                        {categories.map((cat) => (
                          <div key={cat} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`h-${cat}`}
                              checked={selectedCategories.includes(cat)}
                              onCheckedChange={(checked) => {
                                setSelectedCategories(
                                  checked 
                                    ? [...selectedCategories, cat]
                                    : selectedCategories.filter(c => c !== cat)
                                );
                              }}
                            />
                            <label htmlFor={`h-${cat}`} className="text-sm cursor-pointer">
                              {cat}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-semibold mb-3 block">Price Range</Label>
                      <Slider defaultValue={[0, 100]} max={100} step={1} />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>$0</span>
                        <span>$100+</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              <span>In Stock</span>
              <button className="hover:bg-primary/20 rounded-full p-0.5">
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              <span>$10 - $50</span>
              <button className="hover:bg-primary/20 rounded-full p-0.5">
                <X className="w-3 h-3" />
              </button>
            </div>
            <Button variant="ghost" size="sm" className="text-xs h-7">
              Clear All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
              reviews={product.reviews}
              inStock={product.inStock}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="default" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ShopHorizontal;
