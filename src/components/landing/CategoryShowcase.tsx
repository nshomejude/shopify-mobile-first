import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredCategories } from "@/config/categories";
import { ArrowRight, FileText, Shield } from "lucide-react";

export const CategoryShowcase = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-accent/5 via-background to-primary/5">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/70 via-background to-background" />
      <div className="absolute inset-0 opacity-40 animate-pulse-glow" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Browse by <span className="text-gradient animate-gradient">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Find the right medications and research compounds for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
          {featuredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full glass-effect hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/50 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{category.name}</CardTitle>
                    <CardDescription className="line-clamp-2 min-h-[48px] text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {category.requiresPrescription && (
                        <Badge variant="secondary" className="text-xs font-medium">
                          <FileText className="w-3 h-3 mr-1" />
                          Prescription
                        </Badge>
                      )}
                      {category.requiresLabLicense && (
                        <Badge variant="secondary" className="text-xs font-medium">
                          <Shield className="w-3 h-3 mr-1" />
                          Lab License
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10 transition-colors">
                      Browse Products
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Link to="/category/prescription-drugs">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full glass-effect hover:bg-card/80 transition-all shadow-lg hover:shadow-xl border-2">
              View All Patient Categories
            </Button>
          </Link>
          <Link to="/category/research-chemicals">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full glass-effect hover:bg-card/80 transition-all shadow-lg hover:shadow-xl border-2">
              View All Research Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};