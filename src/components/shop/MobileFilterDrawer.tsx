import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star, SlidersHorizontal, RotateCcw } from "lucide-react";
import { ProductFilters } from "@/hooks/useProductFilters";

interface MobileFilterDrawerProps {
  filters: ProductFilters;
  categories: string[];
  onFilterChange: <K extends keyof ProductFilters>(key: K, value: ProductFilters[K]) => void;
  onToggleCategory: (category: string) => void;
  onReset: () => void;
}

export const MobileFilterDrawer = ({
  filters,
  categories,
  onFilterChange,
  onToggleCategory,
  onReset
}: MobileFilterDrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="lg:hidden w-full mb-4 sticky top-0 z-10 bg-card shadow-md"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters & Sort
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh] overflow-y-auto bg-background">
        <SheetHeader className="mb-6">
          <div className="flex items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
            <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={onReset}>
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-6 pb-6">
          {/* Categories */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Category</Label>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`mobile-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => onToggleCategory(category)}
                  />
                  <label
                    htmlFor={`mobile-${category}`}
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
                  <RadioGroupItem value="all" id="mobile-all-rx" />
                  <label htmlFor="mobile-all-rx" className="text-sm cursor-pointer">
                    All Products
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rx" id="mobile-rx-only" />
                  <label htmlFor="mobile-rx-only" className="text-sm cursor-pointer">
                    Prescription Required
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no-rx" id="mobile-no-rx" />
                  <label htmlFor="mobile-no-rx" className="text-sm cursor-pointer">
                    No Prescription Needed
                  </label>
                </div>
              </RadioGroup>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="mobile-lab-license"
                  checked={filters.requiresLabLicense === true}
                  onCheckedChange={(checked) => 
                    onFilterChange("requiresLabLicense", checked ? true : null)
                  }
                />
                <label htmlFor="mobile-lab-license" className="text-sm cursor-pointer">
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
                    id={`mobile-rating-${rating}`}
                    checked={filters.minRating === rating}
                    onCheckedChange={(checked) => 
                      onFilterChange("minRating", checked ? rating : 0)
                    }
                  />
                  <label 
                    htmlFor={`mobile-rating-${rating}`} 
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
              id="mobile-in-stock"
              checked={filters.inStockOnly}
              onCheckedChange={(checked) => onFilterChange("inStockOnly", !!checked)}
            />
            <label
              htmlFor="mobile-in-stock"
              className="text-sm cursor-pointer hover:text-primary transition-colors"
            >
              In Stock Only
            </label>
          </div>

          {/* Apply Button */}
          <Button 
            className="w-full mt-6" 
            size="lg"
            onClick={() => setOpen(false)}
          >
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
