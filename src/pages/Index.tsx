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
      {/* Professional Top Info Bar */}
      <div className="bg-primary/5 border-b border-primary/10 text-foreground py-2 text-center text-xs md:text-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free Shipping Over $50
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            24/7 Customer Support
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure Checkout
          </span>
        </div>
      </div>
      
      <Navigation />
      <div className="container mx-auto px-4 pt-6">
        <DemoModeBanner />
      </div>
      <Hero />
      
      <CategoryShowcase />
      
      <div className="py-16 bg-muted/30">
        <FeaturedCategories />
      </div>
      
      <div className="py-16">
        <FeaturedProducts />
      </div>
      
      <div className="py-16 bg-muted/30">
        <WhyBuyFromUs />
      </div>
      
      <div className="py-16">
        <Testimonials />
      </div>
      
      <div className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <Newsletter />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
