import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SortOption } from "@/hooks/useProductFilters";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] bg-card">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border z-50">
        <SelectItem value="featured">Featured</SelectItem>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="rating">Highest Rated</SelectItem>
        <SelectItem value="name-asc">Name: A to Z</SelectItem>
        <SelectItem value="name-desc">Name: Z to A</SelectItem>
      </SelectContent>
    </Select>
  );
};
