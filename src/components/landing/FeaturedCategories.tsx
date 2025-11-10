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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover quality products across all your health and wellness needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/shop-horizontal"
              className="group"
            >
              <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
