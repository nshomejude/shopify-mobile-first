import { cn } from "@/lib/utils";
import { SwatchStyle } from "@/data/products";
import { VariationSwatchIcon } from "./VariationSwatchIcon";

interface VariationSwatchProps {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
  style?: SwatchStyle;
}

export const VariationSwatch = ({ 
  value, 
  isSelected, 
  onClick, 
  disabled = false,
  style = "default"
}: VariationSwatchProps) => {
  
  // Different styles based on swatch type
  const getSwatchClasses = () => {
    const baseClasses = "relative font-medium text-sm transition-all duration-300 flex items-center gap-2 justify-center";
    const interactionClasses = "hover:scale-105 active:scale-95";
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : "";
    
    switch (style) {
      case "checkbox-rectangular":
        return cn(
          baseClasses,
          interactionClasses,
          "px-5 py-3 rounded-lg border-2 min-w-[120px]",
          isSelected
            ? "border-primary bg-primary/10 text-primary shadow-md ring-2 ring-primary/20"
            : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent",
          disabledClasses
        );
      
      case "pill-icon":
      case "tablet-icon":
      case "capsule":
        return cn(
          baseClasses,
          interactionClasses,
          "px-5 py-3.5 rounded-2xl border-2 min-w-[110px]",
          isSelected
            ? "border-primary bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30"
            : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent",
          disabledClasses
        );
      
      case "lab-flask":
        return cn(
          baseClasses,
          interactionClasses,
          "px-5 py-3.5 rounded-xl border-2 min-w-[110px]",
          isSelected
            ? "border-cyan-500 bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
            : "border-border bg-background text-foreground hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-cyan-950",
          disabledClasses
        );
      
      case "mushroom":
        return cn(
          baseClasses,
          interactionClasses,
          "px-5 py-3.5 rounded-2xl border-2 min-w-[110px]",
          isSelected
            ? "border-purple-500 bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
            : "border-border bg-background text-foreground hover:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-950",
          disabledClasses
        );
      
      case "cannabis-leaf":
        return cn(
          baseClasses,
          interactionClasses,
          "px-5 py-3.5 rounded-2xl border-2 min-w-[110px]",
          isSelected
            ? "border-green-500 bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30"
            : "border-border bg-background text-foreground hover:border-green-500/50 hover:bg-green-50 dark:hover:bg-green-950",
          disabledClasses
        );
      
      case "syringe":
        return cn(
          baseClasses,
          interactionClasses,
          "px-5 py-3.5 rounded-xl border-2 min-w-[110px]",
          isSelected
            ? "border-red-500 bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/30"
            : "border-border bg-background text-foreground hover:border-red-500/50 hover:bg-red-50 dark:hover:bg-red-950",
          disabledClasses
        );
      
      default:
        return cn(
          baseClasses,
          interactionClasses,
          "px-6 py-3 rounded-full border-2 min-w-[100px]",
          isSelected
            ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
            : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent",
          disabledClasses
        );
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getSwatchClasses()}
    >
      {style !== "default" && style !== "checkbox-rectangular" && (
        <VariationSwatchIcon style={style} isSelected={isSelected} />
      )}
      
      {style === "checkbox-rectangular" && isSelected && (
        <VariationSwatchIcon style={style} isSelected={isSelected} />
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
