import { 
  Check, 
  Pill, 
  Tablet, 
  FlaskConical, 
  Leaf,
  Syringe,
  CircleDot
} from "lucide-react";
import { SwatchStyle } from "@/data/products";

interface VariationSwatchIconProps {
  style: SwatchStyle;
  isSelected: boolean;
}

export const VariationSwatchIcon = ({ style, isSelected }: VariationSwatchIconProps) => {
  const iconClass = "h-5 w-5";
  
  switch (style) {
    case "pill-icon":
      return <Pill className={iconClass} />;
    case "tablet-icon":
      return <Tablet className={iconClass} />;
    case "lab-flask":
      return <FlaskConical className={iconClass} />;
    case "mushroom":
      return (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4 2 5l-1 6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2l-1-6c1-1 2-2.5 2-5 0-3.5-2.5-6-6-6z" />
          <circle cx="9" cy="8" r="1" />
          <circle cx="15" cy="8" r="1" />
        </svg>
      );
    case "cannabis-leaf":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M12 2c-1.5 2-3 3.5-3 6 0 1.5.5 2.5 1 3.5-1.5-.5-3-1-4.5-1-.5 0-1 .5-1 1 0 1 1 2 2.5 2.5 1.5.5 3 .5 4.5.5-.5.5-1 1.5-1 2.5v3c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-3c0-1-.5-2-1-2.5 1.5 0 3 0 4.5-.5 1.5-.5 2.5-1.5 2.5-2.5 0-.5-.5-1-1-1-1.5 0-3 .5-4.5 1 .5-1 1-2 1-3.5 0-2.5-1.5-4-3-6z" />
        </svg>
      );
    case "syringe":
      return <Syringe className={iconClass} />;
    case "capsule":
      return <CircleDot className={iconClass} />;
    case "checkbox-rectangular":
      return isSelected ? <Check className="h-4 w-4" strokeWidth={3} /> : null;
    default:
      return isSelected ? <Check className="h-4 w-4" strokeWidth={3} /> : null;
  }
};
