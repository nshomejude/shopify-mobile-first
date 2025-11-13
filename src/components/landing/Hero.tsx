import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSearchBar } from "./HeroSearchBar";

export const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column - Content */}
          <div className="space-y-8 max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Trusted by 50,000+ customers nationwide</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health,{" "}
                <span className="text-primary">Our Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Quality pharmaceuticals and health products delivered to your doorstep. Licensed, certified, and trusted by healthcare professionals.
              </p>
            </div>

            {/* Search Bar */}
            <div className="pt-2">
              <HeroSearchBar />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="text-base px-8 h-12">
                <Link to="/shop-horizontal">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 h-12">
                <Link to="/shop-list">Browse Products</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-semibold text-foreground">FDA Certified</span>
                </div>
                <p className="text-sm text-muted-foreground">Licensed pharmacy</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Truck className="h-5 w-5" />
                  <span className="font-semibold text-foreground">Fast Delivery</span>
                </div>
                <p className="text-sm text-muted-foreground">2-3 business days</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold text-foreground">24/7 Support</span>
                </div>
                <p className="text-sm text-muted-foreground">Always available</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-border/20">
            <img 
              src="/src/assets/hero-pharmacy.jpg"
              alt="Professional pharmacy workspace with medications and healthcare products"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
              <div className="bg-card/95 backdrop-blur-sm p-4 rounded-xl border border-border/40 shadow-lg">
                <p className="text-2xl font-bold text-primary">4.9</p>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
              <div className="bg-card/95 backdrop-blur-sm p-4 rounded-xl border border-border/40 shadow-lg">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-xs text-muted-foreground">Customers</p>
              </div>
              <div className="bg-card/95 backdrop-blur-sm p-4 rounded-xl border border-border/40 shadow-lg">
                <p className="text-2xl font-bold text-primary">12K+</p>
                <p className="text-xs text-muted-foreground">Reviews</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
