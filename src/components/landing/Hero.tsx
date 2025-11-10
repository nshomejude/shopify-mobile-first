import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pharmacy.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Trusted by 50,000+ Customers
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Health, Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Priority
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Quality pharmaceuticals and health products delivered to your doorstep. 
              Licensed, certified, and trusted by healthcare professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base group">
                <Link to="/shop-horizontal">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/shop-list">Browse Products</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage}
              alt="Professional pharmacy with certified pharmacist"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Rating</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Reviews</p>
                  <p className="text-2xl font-bold">12,450+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
