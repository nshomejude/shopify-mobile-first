import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Clock, Pill, TestTube, Microscope, Stethoscope, Activity, Heart, FlaskConical, Syringe, Cross } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HeroSearchBar } from "./HeroSearchBar";

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
    <section className="relative min-h-[700px] md:min-h-[850px] overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-60" style={{ background: 'var(--gradient-mesh)' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-10s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl animate-pulse-glow" />
      </div>

      {/* Floating Medical Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Pill className="absolute top-20 left-[10%] w-12 h-12 text-primary/20 animate-float drop-shadow-lg" style={{ animationDelay: '0s' }} />
        <TestTube className="absolute top-40 right-[15%] w-16 h-16 text-accent/20 animate-float drop-shadow-lg" style={{ animationDelay: '1s' }} />
        <Microscope className="absolute bottom-40 left-[20%] w-14 h-14 text-primary/20 animate-float drop-shadow-lg" style={{ animationDelay: '2s' }} />
        <Stethoscope className="absolute top-60 right-[25%] w-12 h-12 text-accent/20 animate-float drop-shadow-lg" style={{ animationDelay: '3s' }} />
        <FlaskConical className="absolute bottom-60 right-[10%] w-16 h-16 text-primary/20 animate-float drop-shadow-lg" style={{ animationDelay: '1.5s' }} />
        <Cross className="absolute top-32 right-[40%] w-10 h-10 text-accent/20 animate-float drop-shadow-lg" style={{ animationDelay: '2.5s' }} />
        <Syringe className="absolute bottom-32 left-[35%] w-12 h-12 text-primary/20 animate-float drop-shadow-lg" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute top-[50%] left-[8%] w-10 h-10 text-accent/20 animate-float drop-shadow-lg" style={{ animationDelay: '3.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 md:space-y-10 text-center relative z-10">
            <div className="inline-block animate-fade-in">
              <span className="px-6 py-2.5 glass-effect text-primary rounded-full text-sm font-bold tracking-wide shadow-lg border border-primary/20">
                ✨ Trusted by 50,000+ Customers Worldwide
              </span>
            </div>
            
            <div className="min-h-[240px] md:min-h-[280px] flex flex-col justify-center">
              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 transition-all duration-500 ${
                  isAnimating ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                {rotatingTexts[currentIndex].main.split(" ").map((word, i) => {
                  const isHighlight = word === "Priority" || word === "Solutions" || word === "Daily" || 
                                     word === "Partner" || word === "Off" || word === "Added" || 
                                     word === "Winter" || word === "$50" || word === "Today" || 
                                     word === "Available" || word === "Collection" || word === "Essentials";
                  return isHighlight ? (
                    <span key={i} className="inline-block text-gradient animate-gradient">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i} className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                      {word}{" "}
                    </span>
                  );
                })}
              </h1>
              
              <p 
                className={`text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 max-w-4xl mx-auto font-light leading-relaxed transition-all duration-500 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {rotatingTexts[currentIndex].sub}
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <HeroSearchBar />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                <Link to="/shop-horizontal">
                  <span className="relative z-10">Shop Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full glass-effect hover:bg-card/80 transition-all shadow-lg hover:shadow-xl border-2">
                <Link to="/shop-list">Browse Products</Link>
              </Button>
            </div>
            
            {/* Enhanced Trust Indicators with Medical Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-16 max-w-5xl mx-auto">
              <div className="group flex flex-col items-center gap-3 text-center p-6 rounded-2xl glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/20">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground">FDA Certified</span>
                <span className="text-xs text-muted-foreground leading-tight">Licensed Pharmacy</span>
              </div>
              <div className="group flex flex-col items-center gap-3 text-center p-6 rounded-2xl glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/20">
                <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <Pill className="h-7 w-7 text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground">Quality Meds</span>
                <span className="text-xs text-muted-foreground leading-tight">Verified Products</span>
              </div>
              <div className="group flex flex-col items-center gap-3 text-center p-6 rounded-2xl glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/20">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <TestTube className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground">Lab Tested</span>
                <span className="text-xs text-muted-foreground leading-tight">Research Grade</span>
              </div>
              <div className="group flex flex-col items-center gap-3 text-center p-6 rounded-2xl glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/20">
                <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <Truck className="h-7 w-7 text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground">Fast Delivery</span>
                <span className="text-xs text-muted-foreground leading-tight">2-3 Days</span>
              </div>
            </div>
            
            {/* Medical Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-12 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-xl glass-effect border border-border/20 hover:border-primary/30 transition-all hover:scale-105 group">
                <Activity className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">Health Monitoring</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-effect border border-border/20 hover:border-accent/30 transition-all hover:scale-105 group">
                <Stethoscope className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">Expert Consultation</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-effect border border-border/20 hover:border-primary/30 transition-all hover:scale-105 group">
                <Microscope className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">Lab Services</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-effect border border-border/20 hover:border-accent/30 transition-all hover:scale-105 group">
                <Heart className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">Patient Care</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-effect border border-border/20 hover:border-primary/30 transition-all hover:scale-105 group">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-effect border border-border/20 hover:border-accent/30 transition-all hover:scale-105 group">
                <Cross className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">Emergency Ready</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 pt-12 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-2xl glass-effect border border-border/20 hover:border-primary/30 transition-all hover:scale-105 group">
                <p className="text-4xl md:text-5xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform inline-block">4.9</p>
                <p className="text-sm font-medium text-muted-foreground">Average Rating</p>
              </div>
              <div className="text-center p-6 rounded-2xl glass-effect border border-border/20 hover:border-accent/30 transition-all hover:scale-105 group">
                <p className="text-4xl md:text-5xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform inline-block">50K+</p>
                <p className="text-sm font-medium text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center p-6 rounded-2xl glass-effect border border-border/20 hover:border-primary/30 transition-all hover:scale-105 group">
                <p className="text-4xl md:text-5xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform inline-block">12K+</p>
                <p className="text-sm font-medium text-muted-foreground">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
