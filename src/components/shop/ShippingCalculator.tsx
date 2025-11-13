import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Zap, Package, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShippingMethod {
  id: string;
  name: string;
  icon: typeof Truck;
  basePrice: number;
  pricePerUnit: number;
  deliveryDays: string;
  features: string[];
}

interface ShippingCalculatorProps {
  quantity: number;
  unit: string;
  selectedMethod?: string;
  onMethodSelect?: (methodId: string) => void;
}

const shippingMethods: ShippingMethod[] = [
  {
    id: "standard",
    name: "Standard Shipping",
    icon: Package,
    basePrice: 15,
    pricePerUnit: 0.05,
    deliveryDays: "7-10",
    features: ["Tracking included", "Signature required", "Insurance up to $500"]
  },
  {
    id: "express",
    name: "Express Shipping",
    icon: Zap,
    basePrice: 35,
    pricePerUnit: 0.10,
    deliveryDays: "2-3",
    features: ["Priority handling", "Real-time tracking", "Insurance up to $1000"]
  }
];

export function ShippingCalculator({ 
  quantity, 
  unit, 
  selectedMethod = "standard",
  onMethodSelect 
}: ShippingCalculatorProps) {
  const calculateShipping = (method: ShippingMethod) => {
    // Calculate based on quantity
    const total = method.basePrice + (quantity * method.pricePerUnit);
    return Math.max(total, method.basePrice); // Minimum is base price
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Truck className="w-5 h-5 text-primary" />
          Shipping Calculator
        </CardTitle>
        <p className="text-xs text-muted-foreground mt-1">
          Shipping costs for {quantity} {unit}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {shippingMethods.map((method) => {
          const cost = calculateShipping(method);
          const Icon = method.icon;
          const isSelected = selectedMethod === method.id;
          
          return (
            <button
              key={method.id}
              onClick={() => onMethodSelect?.(method.id)}
              className={cn(
                "w-full p-4 rounded-lg border-2 transition-all text-left",
                "hover:border-primary/50 hover:shadow-md",
                isSelected 
                  ? "border-primary bg-primary/5 shadow-sm" 
                  : "border-border bg-card"
              )}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className={cn(
                    "w-5 h-5",
                    isSelected ? "text-primary" : "text-muted-foreground"
                  )} />
                  <div>
                    <h4 className={cn(
                      "font-semibold",
                      isSelected && "text-primary"
                    )}>
                      {method.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {method.deliveryDays} business days
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={cn(
                    "text-xl font-bold",
                    isSelected ? "text-primary" : "text-foreground"
                  )}>
                    ${cost.toFixed(2)}
                  </div>
                  {quantity > 100 && (
                    <Badge variant="secondary" className="text-[10px] mt-1">
                      Bulk rate
                    </Badge>
                  )}
                </div>
              </div>
              <ul className="space-y-1 mt-3 border-t border-border/50 pt-2">
                {method.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/60" />
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
        
        {quantity >= 500 && (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mt-3">
            <p className="text-sm font-medium text-green-600 dark:text-green-400">
              🎉 Free shipping upgrade available for bulk orders over 500 {unit}!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
