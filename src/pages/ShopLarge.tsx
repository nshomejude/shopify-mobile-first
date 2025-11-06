import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Premium Pain Relief Tablets 500mg",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop",
    inStock: true,
    description: "Fast-acting pain relief formula for headaches, muscle aches, and minor pains. Pharmacy-grade quality."
  },
  {
    id: 2,
    name: "Vitamin D3 5000 IU - 120 Capsules",
    price: 19.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1550572017-4334f83c4eaa?w=800&h=800&fit=crop",
    inStock: true,
    description: "High-potency vitamin D3 supplement for bone health and immune support. 4-month supply."
  },
  {
    id: 3,
    name: "First Aid Kit Complete Set",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&h=800&fit=crop",
    inStock: true,
    description: "Comprehensive 200-piece first aid kit for home, office, or travel. All essential supplies included."
  },
  {
    id: 4,
    name: "Advanced Probiotic Complex",
    price: 29.99,
    rating: 4.6,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&h=800&fit=crop",
    inStock: false,
    description: "Multi-strain probiotic formula for digestive health and gut balance. 50 billion CFU per serving."
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil 1000mg",
    price: 22.99,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d6f5d5e?w=800&h=800&fit=crop",
    inStock: true,
    description: "Pure omega-3 fish oil for heart health and brain function. Molecularly distilled for purity."
  },
  {
    id: 6,
    name: "Multivitamin Daily Essentials",
    price: 16.99,
    rating: 4.4,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&h=800&fit=crop",
    inStock: true,
    description: "Complete daily multivitamin with 23 essential vitamins and minerals for overall wellness."
  }
];

const ShopLarge = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhyBuyFromUs />
      
      <section className="container mx-auto px-4 py-6 md:py-8">
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-sm text-muted-foreground">Showing 6 of 24 products</p>
          </div>
          <Select defaultValue="featured">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Best Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Large Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-muted">
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

                <h3 className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
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
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-10">
          <Button size="lg" variant="outline" className="min-w-[200px]">
            Load More Products
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ShopLarge;
