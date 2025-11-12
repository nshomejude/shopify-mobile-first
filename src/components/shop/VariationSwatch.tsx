import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface VariationSwatchProps {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const VariationSwatch = ({ 
  value, 
  isSelected, 
  onClick, 
  disabled = false 
}: VariationSwatchProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300",
        "border-2 flex items-center gap-2 min-w-[100px] justify-center",
        "hover:scale-105 active:scale-95",
        isSelected
          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
          : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent",
        disabled && "opacity-50 cursor-not-allowed hover:scale-100"
      )}
    >
      {isSelected && (
        <Check 
          className="h-4 w-4 animate-scale-in" 
          strokeWidth={3}
        />
      )}
      <span className={cn(
        "transition-all duration-200",
        isSelected && "font-semibold"
      )}>
        {value}
      </span>
    </button>
  );
};
