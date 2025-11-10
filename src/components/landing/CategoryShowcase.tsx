import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredCategories } from "@/config/categories";
import { ArrowRight, FileText, Shield } from "lucide-react";

export const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the right medications and research compounds for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} to={`/category/${category.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                    <CardDescription className="line-clamp-2 min-h-[40px]">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {category.requiresPrescription && (
                        <Badge variant="secondary" className="text-xs">
                          <FileText className="w-3 h-3 mr-1" />
                          Prescription
                        </Badge>
                      )}
                      {category.requiresLabLicense && (
                        <Badge variant="secondary" className="text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Lab License
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" className="w-full justify-between group">
                      Browse Products
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/category/prescription-drugs">
            <Button size="lg" variant="outline" className="mr-4">
              View All Patient Categories
            </Button>
          </Link>
          <Link to="/category/research-chemicals">
            <Button size="lg" variant="outline">
              View All Research Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};