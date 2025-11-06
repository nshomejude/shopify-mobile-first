import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

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

export const FilterSidebar = () => {
  return (
    <aside className="hidden lg:block w-64 bg-card rounded-lg p-6 h-fit sticky top-4 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="h-8 text-xs">
          <RotateCcw className="w-3 h-3 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Category</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
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
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox id={brand} />
                <label
                  htmlFor={brand}
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
          <Checkbox id="in-stock" />
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
