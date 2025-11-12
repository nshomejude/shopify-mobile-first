import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/config/categories";

interface SubcategoryGridProps {
  subcategories: Category[];
  parentSlug: string;
}

export const SubcategoryGrid = ({ subcategories, parentSlug }: SubcategoryGridProps) => {
  if (!subcategories.length) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse Subcategories
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore specialized product categories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {subcategories.map((subcategory) => {
            const Icon = subcategory.icon;
            return (
              <Link 
                key={subcategory.id} 
                to={`/category/${subcategory.slug}`}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {subcategory.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {subcategory.description}
                      </p>
                      <div className="flex items-center gap-1 text-primary mt-3 text-sm font-medium">
                        Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
