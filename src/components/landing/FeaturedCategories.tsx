import { Pill, Heart, Baby, Sparkles, Activity, User } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Pill,
    name: "Medicines",
    description: "Prescription & OTC",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    name: "Vitamins",
    description: "Health Supplements",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Baby,
    name: "Baby Care",
    description: "Mother & Child",
    color: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-500",
  },
  {
    icon: Sparkles,
    name: "Beauty",
    description: "Skincare & Cosmetics",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
  },
  {
    icon: Activity,
    name: "Wellness",
    description: "Fitness & Nutrition",
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-500",
  },
  {
    icon: User,
    name: "Personal Care",
    description: "Daily Essentials",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
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
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover quality products across all your health and wellness needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to="/shop-horizontal"
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative p-6 md:p-8 rounded-2xl glass-effect border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <category.icon className={`w-8 h-8 md:w-10 md:h-10 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
