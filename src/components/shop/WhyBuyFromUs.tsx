import { Package, Shield, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Discreet Delivery",
    description: "Plain packaging with no branding for complete privacy"
  },
  {
    icon: Shield,
    title: "Refund Policy",
    description: "30-day money-back guarantee on all products"
  },
  {
    icon: Headphones,
    title: "24/7 Customer Service",
    description: "Expert support team available round the clock"
  },
  {
    icon: Award,
    title: "Pharmacy Grade",
    description: "100% certified and tested pharmaceutical quality"
  }
];

export const WhyBuyFromUs = () => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-muted/20 to-card" />
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Why Buy <span className="text-gradient">From Us</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience excellence in every aspect of your healthcare journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group flex flex-col items-center text-center p-8 rounded-2xl glass-effect border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
