import { Navigation } from "@/components/shop/Navigation";
import { Hero } from "@/components/landing/Hero";
import { CategoryShowcase } from "@/components/landing/CategoryShowcase";
import { FeaturedCategories } from "@/components/landing/FeaturedCategories";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { WhyBuyFromUs } from "@/components/shop/WhyBuyFromUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";
import { DemoModeBanner } from "@/components/DemoModeBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Promo Banner */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x text-primary-foreground py-3 text-center font-bold text-sm md:text-base shadow-lg">
        🎉 FLASH SALE: 40% OFF All Products + FREE Shipping | Limited Time Only! 🎉
      </div>
      
      <Navigation />
      <div className="container mx-auto px-4 pt-6">
        <DemoModeBanner />
      </div>
      <Hero />
      
      {/* Subtle Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <CategoryShowcase />
      
      {/* Subtle Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50 my-12" />
      
      <FeaturedCategories />
      
      {/* Subtle Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50 my-12" />
      
      <FeaturedProducts />
      
      {/* Subtle Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50 my-12" />
      
      <WhyBuyFromUs />
      
      {/* Subtle Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50 my-12" />
      
      <Testimonials />
      
      {/* Subtle Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50 my-12" />
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
