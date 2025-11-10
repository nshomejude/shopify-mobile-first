import { useState } from "react";
import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, ShoppingCart, Heart, Eye, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const ShopLarge = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           product.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleAddToCart = (product: Product) => {
    addItem({
      id: parseInt(product.id.split("-")[1]),
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

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
        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
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
          {filteredProducts.map((product) => (
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
                  onClick={() => handleAddToCart(product)}
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
