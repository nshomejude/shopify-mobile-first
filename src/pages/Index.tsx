import { Navigation } from "@/components/shop/Navigation";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { MobileFilterDrawer } from "@/components/shop/MobileFilterDrawer";
import { ProductCard } from "@/components/shop/ProductCard";

// Mock product data - this will be replaced with WooCommerce data
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhyBuyFromUs />
      
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex gap-6">
          <FilterSidebar />
          
          <div className="flex-1">
            <MobileFilterDrawer />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
