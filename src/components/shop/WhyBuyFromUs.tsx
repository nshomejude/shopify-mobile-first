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
    <section className="w-full bg-card py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          Why Buy From Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-b from-card to-secondary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
