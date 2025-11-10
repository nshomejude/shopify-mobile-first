import { Navigation } from "@/components/shop/Navigation";
import { Hero } from "@/components/landing/Hero";
import { CategoryShowcase } from "@/components/landing/CategoryShowcase";
import { FeaturedCategories } from "@/components/landing/FeaturedCategories";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryShowcase />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyBuyFromUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
