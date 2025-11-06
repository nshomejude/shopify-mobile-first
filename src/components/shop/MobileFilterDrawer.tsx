import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

const categories = [
  "Pain Relief",
  "Vitamins & Supplements",
  "First Aid",
  "Skin Care",
  "Digestive Health",
  "Cold & Flu"
];

const brands = [
  "PharmaCare",
  "HealthPlus",
  "MedicoRx",
  "VitaLife",
  "WellnessPro"
];

export const MobileFilterDrawer = () => {
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
      <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
        <SheetHeader className="mb-6">
          <div className="flex items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-6 pb-6">
          {/* Categories */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Category</Label>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-${category}`} />
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
            <Slider defaultValue={[0, 100]} max={100} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$100+</span>
            </div>
          </div>

          <Separator />

          {/* Brands */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Brand</Label>
            <div className="space-y-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-${brand}`} />
                  <label
                    htmlFor={`mobile-${brand}`}
                    className="text-sm cursor-pointer hover:text-primary transition-colors"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* In Stock */}
          <div className="flex items-center space-x-2">
            <Checkbox id="mobile-in-stock" />
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
