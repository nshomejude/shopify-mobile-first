import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Premium pharmacy products" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
            Premium Pharmacy-Grade Products
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 md:mb-8">
            Trusted by thousands. Discrete delivery. Guaranteed quality.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
