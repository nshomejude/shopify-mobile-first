import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProducts = [
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
    id: 5,
    name: "Omega-3 Fish Oil 1000mg",
    price: 22.99,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d6f5d5e?w=500&h=500&fit=crop",
    inStock: true
  },
];

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
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
