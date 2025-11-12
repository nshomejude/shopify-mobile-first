import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const featuredProducts = products.slice(0, 4);

export const FeaturedProducts = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 animate-fade-in">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Handpicked bestsellers trusted by thousands of customers
            </p>
          </div>
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group self-start md:self-end">
            <Link to="/shop-horizontal">
              <span className="relative z-10">View All Products</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard 
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
