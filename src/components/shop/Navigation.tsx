import { NavLink } from "@/components/NavLink";
import { LayoutGrid, LayoutList, Columns3, Grid3x3 } from "lucide-react";

export const Navigation = () => {
  const variants = [
    { path: "/", label: "Sidebar Grid", icon: LayoutGrid },
    { path: "/shop-horizontal", label: "Top Filters", icon: Columns3 },
    { path: "/shop-large", label: "Large Cards", icon: Grid3x3 },
    { path: "/shop-list", label: "List View", icon: LayoutList },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <h1 className="text-lg md:text-xl font-bold text-primary">Premium Pharmacy</h1>
          
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
        </div>
      </div>
    </nav>
  );
};
