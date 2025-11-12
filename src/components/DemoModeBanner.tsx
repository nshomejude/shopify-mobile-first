import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const DemoModeBanner = () => {
  return (
    <Alert className="border-warning bg-warning/10 mb-6">
      <Info className="h-4 w-4 text-warning" />
      <AlertDescription className="text-warning-foreground">
        <strong>Demo Mode:</strong> This is a demonstration pharmacy catalog. All products, prices, and verification workflows are for testing and theme demonstration purposes only. No actual medications will be dispensed.
      </AlertDescription>
    </Alert>
  );
};
