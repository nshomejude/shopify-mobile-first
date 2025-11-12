import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatPriceRange } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  maxPrice?: number;
  hasVariations?: boolean;
}

export const ProductCard = ({ 
  id,
  image, 
  name, 
  price, 
  oldPrice, 
  rating, 
  reviews,
  inStock,
  maxPrice,
  hasVariations = true
}: ProductCardProps) => {
  const navigate = useNavigate();

  const handleSelectOptions = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card className="group overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div 
        className="relative aspect-square overflow-hidden bg-muted"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="text-sm font-semibold text-muted-foreground">Out of Stock</span>
          </div>
        )}
        {oldPrice && (
          <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
            -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
          </div>
        )}
      </div>
      
      <div className="p-3 md:p-4">
        <h3 
          className="font-semibold text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] cursor-pointer hover:text-primary transition-colors"
          onClick={() => navigate(`/product/${id}`)}
        >
          {name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 ${
                i < Math.floor(rating)
                  ? "fill-warning text-warning"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
        </div>
        
        <div className="flex flex-col gap-1 mb-3">
          <span className="text-lg md:text-xl font-bold text-primary">
            {formatPriceRange(price, maxPrice)}
          </span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        <Button 
          className="w-full touch-manipulation active:scale-95 transition-transform" 
          size="sm"
          disabled={!inStock}
          onClick={handleSelectOptions}
        >
          <Settings className="w-4 h-4 mr-2" />
          Select Options
        </Button>
      </div>
    </Card>
  );
};
