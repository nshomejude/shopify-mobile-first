import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const rotatingTexts = [
  { main: "Your Health, Our Priority", sub: "Quality pharmaceuticals and health products delivered to your doorstep." },
  { main: "Trusted Healthcare Solutions", sub: "Licensed, certified, and trusted by healthcare professionals nationwide." },
  { main: "Wellness Delivered Daily", sub: "From prescriptions to vitamins, everything you need for a healthier life." },
  { main: "Your Family's Health Partner", sub: "Professional care and genuine products you can trust for everyone." },
  { main: "Spring Sale - Up to 40% Off", sub: "Save big on vitamins, supplements, and wellness essentials this season." },
  { main: "New Arrivals Just Added", sub: "Discover the latest health innovations and premium wellness products." },
  { main: "Stay Healthy This Winter", sub: "Stock up on immunity boosters, cold remedies, and essential vitamins." },
  { main: "Free Shipping on Orders Over $50", sub: "Get your medications and health products delivered with no extra cost." },
  { main: "Boost Your Immunity Today", sub: "Explore our curated selection of vitamins, minerals, and immune support." },
  { main: "Expert Health Advice Available", sub: "Our licensed pharmacists are here to help with all your health questions." },
  { main: "Summer Wellness Collection", sub: "Sunscreen, hydration, and outdoor health essentials for the perfect summer." },
  { main: "Back to School Health Essentials", sub: "Everything your family needs to stay healthy during the school year." },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Trusted by 50,000+ Customers
              </span>
            </div>
            
            <div className="min-h-[200px] md:min-h-[240px] flex flex-col justify-center">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 transition-all duration-500 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {rotatingTexts[currentIndex].main.split(" ").map((word, i) => {
                  const isHighlight = word === "Priority" || word === "Solutions" || word === "Daily" || 
                                     word === "Partner" || word === "Off" || word === "Added" || 
                                     word === "Winter" || word === "$50" || word === "Today" || 
                                     word === "Available" || word === "Collection" || word === "Essentials";
                  return isHighlight ? (
                    <span key={i} className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  );
                })}
              </h1>
              
              <p 
                className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto transition-all duration-500 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {rotatingTexts[currentIndex].sub}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-12 border-t border-border/50 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 text-center">
                <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <span className="text-sm md:text-base font-medium">Certified</span>
                <span className="text-xs text-muted-foreground">FDA Approved</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <span className="text-sm md:text-base font-medium">Fast Delivery</span>
                <span className="text-xs text-muted-foreground">2-3 Days</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Clock className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <span className="text-sm md:text-base font-medium">24/7 Support</span>
                <span className="text-xs text-muted-foreground">Always Here</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">4.9</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">12K+</p>
                <p className="text-sm text-muted-foreground">Reviews</p>
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
