import { NavLink } from "@/components/NavLink";
import { LayoutGrid, LayoutList, Columns3, Grid3x3, ShoppingCart, ChevronDown, Pill, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { prescriptionCategories, researchCategories } from "@/config/categories";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="text-lg md:text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            Premium Pharmacy
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Category Mega Menu */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    <Pill className="w-4 h-4 mr-2" />
                    For Patients
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {prescriptionCategories.slice(0, 8).map((category) => {
                        const Icon = category.icon;
                        return (
                          <Link
                            key={category.id}
                            to={`/category/${category.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="w-4 h-4 text-primary" />
                              <div className="text-sm font-medium leading-none">{category.name}</div>
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    <FlaskConical className="w-4 h-4 mr-2" />
                    For Laboratories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {researchCategories.slice(0, 8).map((category) => {
                        const Icon = category.icon;
                        return (
                          <Link
                            key={category.id}
                            to={`/category/${category.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="w-4 h-4 text-primary" />
                              <div className="text-sm font-medium leading-none">{category.name}</div>
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Category Links */}
            <div className="flex lg:hidden gap-2">
              <Link to="/category/prescription-drugs">
                <Button variant="ghost" size="sm" className="text-xs">
                  <Pill className="w-4 h-4 mr-1" />
                  Patients
                </Button>
              </Link>
              <Link to="/category/research-chemicals">
                <Button variant="ghost" size="sm" className="text-xs">
                  <FlaskConical className="w-4 h-4 mr-1" />
                  Labs
                </Button>
              </Link>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="relative flex-shrink-0"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
