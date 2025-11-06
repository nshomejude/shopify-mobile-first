import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Info, Package } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Pain Relief Tablets 500mg",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    inStock: true,
    category: "Pain Relief",
    brand: "PharmaCare",
    description: "Fast-acting pain relief formula for headaches, muscle aches, and minor pains. Pharmacy-grade quality with proven effectiveness."
  },
  {
    id: 2,
    name: "Vitamin D3 5000 IU - 120 Capsules",
    price: 19.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1550572017-4334f83c4eaa?w=400&h=400&fit=crop",
    inStock: true,
    category: "Vitamins",
    brand: "VitaLife",
    description: "High-potency vitamin D3 supplement for bone health and immune support. 4-month supply of easy-to-swallow capsules."
  },
  {
    id: 3,
    name: "First Aid Kit Complete Set",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    inStock: true,
    category: "First Aid",
    brand: "MedicoRx",
    description: "Comprehensive 200-piece first aid kit for home, office, or travel. Includes bandages, antiseptics, and essential medical supplies."
  },
  {
    id: 4,
    name: "Advanced Probiotic Complex",
    price: 29.99,
    rating: 4.6,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop",
    inStock: false,
    category: "Digestive Health",
    brand: "HealthPlus",
    description: "Multi-strain probiotic formula for digestive health and gut balance. 50 billion CFU per serving with delayed-release capsules."
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil 1000mg",
    price: 22.99,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d6f5d5e?w=400&h=400&fit=crop",
    inStock: true,
    category: "Vitamins",
    brand: "WellnessPro",
    description: "Pure omega-3 fish oil for heart health and brain function. Molecularly distilled for maximum purity and no fishy aftertaste."
  }
];

const ShopList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhyBuyFromUs />
      
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex gap-6">
          {/* Enhanced Sidebar */}
          <aside className="hidden lg:block w-72 space-y-4">
            <Card className="p-6 sticky top-4 bg-card shadow-card">
              <h3 className="text-lg font-bold mb-4">Refine Results</h3>
              
              <div className="space-y-5">
                <div>
                  <Label className="text-sm font-semibold mb-3 block">Categories</Label>
                  <div className="space-y-2">
                    {["Pain Relief", "Vitamins", "First Aid", "Digestive Health"].map((cat) => (
                      <div key={cat} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={`list-${cat}`} />
                          <label htmlFor={`list-${cat}`} className="text-sm cursor-pointer">
                            {cat}
                          </label>
                        </div>
                        <span className="text-xs text-muted-foreground">(12)</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-semibold mb-3 block">Price</Label>
                  <div className="space-y-2">
                    {["Under $20", "$20 - $40", "$40 - $60", "Over $60"].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox id={range} />
                        <label htmlFor={range} className="text-sm cursor-pointer">
                          {range}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-semibold mb-3 block">Rating</Label>
                  <div className="space-y-2">
                    {[5, 4, 3].map((stars) => (
                      <div key={stars} className="flex items-center space-x-2">
                        <Checkbox id={`${stars}-stars`} />
                        <label htmlFor={`${stars}-stars`} className="text-sm cursor-pointer flex items-center">
                          <div className="flex">
                            {[...Array(stars)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-warning text-warning" />
                            ))}
                          </div>
                          <span className="ml-1">& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* List View Products */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">All Products</h2>
              <p className="text-sm text-muted-foreground">Showing 5 of 24 results</p>
            </div>

            <div className="space-y-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
                  <div className="flex flex-col md:flex-row gap-4 p-4 md:p-6">
                    {/* Image */}
                    <div className="relative w-full md:w-48 aspect-square md:aspect-auto md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
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
                          <h3 className="font-bold text-lg md:text-xl mb-1">{product.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <span className="font-medium">{product.brand}</span>
                            <span>•</span>
                            <span>{product.category}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">
                            ${product.price.toFixed(2)}
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
                          <Button variant="ghost" size="sm" className="h-8">
                            <Info className="w-4 h-4 mr-1" />
                            Details
                          </Button>
                        </div>

                        <Button 
                          className="w-full sm:w-auto touch-manipulation active:scale-95 transition-transform"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopList;
