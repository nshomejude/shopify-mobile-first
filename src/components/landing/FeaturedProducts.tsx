import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const featuredProducts = products.slice(0, 4);

export const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Handpicked bestsellers trusted by thousands of customers
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="mt-4 md:mt-0 group">
            <Link to="/shop-horizontal">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
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
      </div>
    </section>
  );
};
