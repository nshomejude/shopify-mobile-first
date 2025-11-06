import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Pain Relief Tablets 500mg",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 2,
    name: "Vitamin D3 5000 IU - 120 Capsules",
    price: 19.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1550572017-4334f83c4eaa?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 3,
    name: "First Aid Kit Complete Set",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 4,
    name: "Advanced Probiotic Complex",
    price: 29.99,
    rating: 4.6,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&h=500&fit=crop",
    inStock: false
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil 1000mg",
    price: 22.99,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d6f5d5e?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 6,
    name: "Multivitamin Daily Essentials",
    price: 16.99,
    rating: 4.4,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 7,
    name: "Cold & Flu Relief Syrup",
    price: 12.99,
    oldPrice: 17.99,
    rating: 4.3,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 8,
    name: "Hydrating Face Cream SPF 30",
    price: 26.99,
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 9,
    name: "Digestive Enzyme Supplement",
    price: 21.99,
    rating: 4.5,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=500&h=500&fit=crop",
    inStock: true
  },
  {
    id: 10,
    name: "Allergy Relief Antihistamine",
    price: 14.99,
    rating: 4.6,
    reviews: 221,
    image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?w=500&h=500&fit=crop",
    inStock: true
  }
];

const ShopHorizontal = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhyBuyFromUs />
      
      <section className="container mx-auto px-4 py-6 md:py-8">
        {/* Top Filters Bar */}
        <div className="bg-card rounded-lg p-4 mb-6 shadow-card">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">24 Products</span>
              <span>•</span>
              <span>Page 1 of 3</span>
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
                        {["Pain Relief", "Vitamins", "First Aid", "Skin Care"].map((cat) => (
                          <div key={cat} className="flex items-center space-x-2">
                            <Checkbox id={`h-${cat}`} />
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

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
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
