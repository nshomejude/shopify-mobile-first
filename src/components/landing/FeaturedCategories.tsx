import { 
  Pill, Heart, Baby, Sparkles, Activity, User, 
  TestTube, Brain, Scale, Moon, Stethoscope, Shield,
  Syringe, Droplets, Package, Thermometer, Eye, Microscope
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Pill,
    name: "Prescription Meds",
    description: "Doctor-Approved",
    link: "/category/prescription-drugs",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Package,
    name: "Over-the-Counter",
    description: "No Prescription",
    link: "/shop-horizontal",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    name: "Vitamins & Supplements",
    description: "Daily Nutrition",
    link: "/category/vitamins-supplements",
    color: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-500",
  },
  {
    icon: Brain,
    name: "Mental Health",
    description: "Mind & Wellness",
    link: "/category/anxiety-depression",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
  },
  {
    icon: Scale,
    name: "Weight Management",
    description: "Healthy Living",
    link: "/category/weight-metabolic",
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-500",
  },
  {
    icon: Moon,
    name: "Sleep & Rest",
    description: "Better Sleep",
    link: "/category/sleeping-insomnia",
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-500",
  },
  {
    icon: Stethoscope,
    name: "Chronic Conditions",
    description: "Long-term Care",
    link: "/category/cardiovascular",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: TestTube,
    name: "Lab & Diagnostics",
    description: "Health Testing",
    link: "/lab-verification",
    color: "from-teal-500/20 to-teal-500/5",
    iconColor: "text-teal-500",
  },
  {
    icon: Baby,
    name: "Mother & Baby",
    description: "Family Care",
    link: "/shop-horizontal",
    color: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-500",
  },
  {
    icon: Sparkles,
    name: "Beauty & Skincare",
    description: "Personal Care",
    link: "/shop-horizontal",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-500",
  },
  {
    icon: Syringe,
    name: "Vaccines & Immunization",
    description: "Prevention",
    link: "/shop-horizontal",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-500",
  },
  {
    icon: Shield,
    name: "Medical Devices",
    description: "Equipment & Tools",
    link: "/shop-horizontal",
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-500",
  },
];

export const FeaturedCategories = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Complete Healthcare <span className="text-gradient">Platform</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From prescription medications to wellness products - everything you need for your health journey
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative p-6 md:p-8 rounded-2xl glass-effect border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden min-h-[180px] md:min-h-[200px] flex flex-col">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <category.icon className={`w-7 h-7 md:w-8 md:h-8 ${category.iconColor}`} />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-sm md:text-base mb-2 group-hover:text-primary transition-colors leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-4">
            Need help finding the right products? Our pharmacists are here to assist you.
          </p>
          <Link to="/contact">
            <button className="text-primary hover:text-primary-light transition-colors font-semibold text-sm">
              Contact Healthcare Team →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
