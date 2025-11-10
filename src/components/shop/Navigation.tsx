import { NavLink } from "@/components/NavLink";
import { LayoutGrid, LayoutList, Columns3, Grid3x3, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

export const Navigation = () => {
  const { totalItems, setIsOpen } = useCart();
  const variants = [
    { path: "/", label: "Shop 1", icon: LayoutGrid },
    { path: "/shop-horizontal", label: "Shop 2", icon: Columns3 },
    { path: "/shop-large", label: "Shop 3", icon: Grid3x3 },
    { path: "/shop-list", label: "Shop 4", icon: LayoutList },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <h1 className="text-lg md:text-xl font-bold text-primary">Premium Pharmacy</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex gap-1 md:gap-2 overflow-x-auto scrollbar-hide">
              {variants.map((variant) => (
                <NavLink
                  key={variant.path}
                  to={variant.path}
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap"
                  activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  <variant.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{variant.label}</span>
                </NavLink>
              ))}
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
