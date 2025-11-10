import { useState } from "react";
import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Star, ShoppingCart, Info, Package, Search } from "lucide-react";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const ShopList = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(product.subcategory || "");
    return matchesSearch && matchesCategory;
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

        <div className="flex gap-6">
          {/* Enhanced Sidebar */}
          <aside className="hidden lg:block w-72 space-y-4">
            <Card className="p-6 sticky top-4 bg-card shadow-card">
              <h3 className="text-lg font-bold mb-4">Refine Results</h3>
              
              <div className="space-y-5">
                <div>
                  <Label className="text-sm font-semibold mb-3 block">Categories</Label>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <div key={cat} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`list-${cat}`}
                          checked={selectedCategories.includes(cat)}
                          onCheckedChange={(checked) => {
                            setSelectedCategories(
                              checked 
                                ? [...selectedCategories, cat]
                                : selectedCategories.filter(c => c !== cat)
                            );
                          }}
                        />
                        <label htmlFor={`list-${cat}`} className="text-sm cursor-pointer">
                          {cat}
                        </label>
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
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} results
              </p>
            </div>

            <div className="space-y-4">
              {filteredProducts.map((product) => (
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
                          onClick={() => handleAddToCart(product)}
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
