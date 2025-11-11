import { useState, useEffect, useRef } from "react";
import { Search, ArrowRight, Filter } from "lucide-react";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

export const HeroSearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof products>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [prescriptionStatus, setPrescriptionStatus] = useState<string>("all");
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Get unique categories from products
  const categories = Array.from(new Set(products.map(p => p.subcategory).filter(Boolean))).sort();

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
        const matchesSearch = (
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.subcategory?.toLowerCase().includes(searchLower)
        );

        // Apply filters
        const matchesCategory = selectedCategory === "all" || product.subcategory === selectedCategory;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesPrescription = 
          prescriptionStatus === "all" || 
          (prescriptionStatus === "prescription" && product.requiresPrescription) ||
          (prescriptionStatus === "no-prescription" && !product.requiresPrescription);

        return matchesSearch && matchesCategory && matchesPrice && matchesPrescription;
      }).slice(0, 6);
      
      setSuggestions(filtered);
      setIsOpen(filtered.length > 0);
      setShowFilters(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
      setShowFilters(false);
    }
  }, [query, selectedCategory, priceRange, prescriptionStatus]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setQuery("");
    setIsOpen(false);
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      const params = new URLSearchParams();
      params.set("search", query);
      if (selectedCategory !== "all") params.set("category", selectedCategory);
      if (priceRange[0] !== 0 || priceRange[1] !== 500) {
        params.set("minPrice", priceRange[0].toString());
        params.set("maxPrice", priceRange[1].toString());
      }
      if (prescriptionStatus !== "all") params.set("prescription", prescriptionStatus);
      
      navigate(`/shop-horizontal?${params.toString()}`);
      setQuery("");
      setIsOpen(false);
      setShowFilters(false);
    }
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setPriceRange([0, 500]);
    setPrescriptionStatus("all");
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

      {/* Filters Panel */}
      {showFilters && (
        <div className="absolute z-50 w-full mt-2 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Filters</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-7 text-xs">
                Reset
              </Button>
            </div>

            <Separator />

            {/* Category Filter */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-muted-foreground">Category</Label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">All Categories</option>
                {categories.slice(0, 8).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-semibold text-muted-foreground">Price Range</Label>
                <span className="text-xs text-muted-foreground">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={500}
                step={10}
                className="w-full"
              />
            </div>

            {/* Prescription Status Filter */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-muted-foreground">Prescription Status</Label>
              <RadioGroup value={prescriptionStatus} onValueChange={setPrescriptionStatus}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="text-sm cursor-pointer">All Products</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="prescription" id="prescription" />
                  <Label htmlFor="prescription" className="text-sm cursor-pointer">Requires Prescription</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no-prescription" id="no-prescription" />
                  <Label htmlFor="no-prescription" className="text-sm cursor-pointer">No Prescription Needed</Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={() => handleSearch()} className="w-full" size="sm">
              Apply Filters & Search
            </Button>
          </div>

          {/* Suggestions below filters */}
          {suggestions.length > 0 && (
            <>
              <Separator />
              <div className="py-2 max-h-64 overflow-y-auto">
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
            </>
          )}
        </div>
      )}
    </div>
  );
};
