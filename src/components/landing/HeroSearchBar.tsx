import { useState, useEffect, useRef } from "react";
import { Search, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof products>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = products.filter((product) => {
        const searchLower = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.subcategory?.toLowerCase().includes(searchLower)
        );
      }).slice(0, 6);
      
      setSuggestions(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setQuery("");
    setIsOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop-horizontal?search=${encodeURIComponent(query)}`);
      setQuery("");
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for medicines, vitamins, or health products..."
            className="w-full h-14 pl-12 pr-24 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-lg hover:shadow-xl"
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 px-6"
          >
            Search
          </Button>
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="py-2">
            {suggestions.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="w-full px-4 py-3 flex items-center gap-4 hover:bg-accent/50 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {product.description}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
          
          {query.trim() && (
            <div className="border-t border-border px-4 py-3 bg-muted/30">
              <button
                onClick={handleSearch}
                className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-2"
              >
                See all results for "{query}"
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
