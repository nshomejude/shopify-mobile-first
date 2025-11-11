import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star, RotateCcw } from "lucide-react";
import { ProductFilters } from "@/hooks/useProductFilters";

interface FilterSidebarProps {
  filters: ProductFilters;
  categories: string[];
  onFilterChange: <K extends keyof ProductFilters>(key: K, value: ProductFilters[K]) => void;
  onToggleCategory: (category: string) => void;
  onReset: () => void;
}

export const FilterSidebar = ({
  filters,
  categories,
  onFilterChange,
  onToggleCategory,
  onReset
}: FilterSidebarProps) => {
  return (
    <aside className="hidden lg:block w-72 bg-card rounded-lg p-6 h-fit sticky top-4 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={onReset}>
          <RotateCcw className="w-3 h-3 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Category</Label>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={category}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() => onToggleCategory(category)}
                />
                <label
                  htmlFor={category}
                  className="text-sm cursor-pointer hover:text-primary transition-colors"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Price Range</Label>
          <Slider 
            value={filters.priceRange} 
            onValueChange={(value) => onFilterChange("priceRange", value as [number, number])}
            max={500} 
            step={10} 
            className="mb-2" 
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}+</span>
          </div>
        </div>

        <Separator />

        {/* Prescription Requirements */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Requirements</Label>
          <div className="space-y-3">
            <RadioGroup 
              value={
                filters.requiresPrescription === null ? "all" : 
                filters.requiresPrescription ? "rx" : "no-rx"
              }
              onValueChange={(value) => 
                onFilterChange(
                  "requiresPrescription", 
                  value === "all" ? null : value === "rx"
                )
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all-rx" />
                <label htmlFor="all-rx" className="text-sm cursor-pointer">
                  All Products
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rx" id="rx-only" />
                <label htmlFor="rx-only" className="text-sm cursor-pointer">
                  Prescription Required
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no-rx" id="no-rx" />
                <label htmlFor="no-rx" className="text-sm cursor-pointer">
                  No Prescription Needed
                </label>
              </div>
            </RadioGroup>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="lab-license"
                checked={filters.requiresLabLicense === true}
                onCheckedChange={(checked) => 
                  onFilterChange("requiresLabLicense", checked ? true : null)
                }
              />
              <label htmlFor="lab-license" className="text-sm cursor-pointer">
                Lab License Required Only
              </label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Rating */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Minimum Rating</Label>
          <div className="space-y-2">
            {[4, 3, 2, 0].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox 
                  id={`rating-${rating}`}
                  checked={filters.minRating === rating}
                  onCheckedChange={(checked) => 
                    onFilterChange("minRating", checked ? rating : 0)
                  }
                />
                <label 
                  htmlFor={`rating-${rating}`} 
                  className="text-sm cursor-pointer flex items-center"
                >
                  {rating > 0 ? (
                    <>
                      <div className="flex mr-1">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-warning text-warning" />
                        ))}
                      </div>
                      & Up
                    </>
                  ) : (
                    "All Ratings"
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Stock Status */}
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="in-stock"
            checked={filters.inStockOnly}
            onCheckedChange={(checked) => onFilterChange("inStockOnly", !!checked)}
          />
          <label
            htmlFor="in-stock"
            className="text-sm cursor-pointer hover:text-primary transition-colors"
          >
            In Stock Only
          </label>
        </div>
      </div>
    </aside>
  );
};
