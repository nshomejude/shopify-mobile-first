import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDrugInteractions } from "@/hooks/useDrugInteractions";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DrugInteractionWarningsProps {
  productIds: string[];
}

export const DrugInteractionWarnings = ({ productIds }: DrugInteractionWarningsProps) => {
  const interactions = useDrugInteractions(productIds);

  if (interactions.length === 0) {
    return null;
  }

  const getSeverityIcon = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="h-4 w-4" />;
      case "medium":
        return <AlertCircle className="h-4 w-4" />;
      case "low":
        return <Info className="h-4 w-4" />;
    }
  };

  const getSeverityVariant = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "default";
    }
  };

  const getSeverityLabel = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return "Critical Warning";
      case "medium":
        return "Caution Required";
      case "low":
        return "Notice";
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-1">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <h3 className="font-semibold text-sm">
          Drug Interaction Warnings ({interactions.length})
        </h3>
      </div>
      
      <ScrollArea className="max-h-[200px]">
        <div className="space-y-2 pr-3">
          {interactions.map((interaction, index) => (
            <Alert 
              key={index} 
              variant={getSeverityVariant(interaction.severity)}
              className="text-left"
            >
              <div className="flex gap-2">
                {getSeverityIcon(interaction.severity)}
                <div className="flex-1 space-y-1">
                  <AlertTitle className="text-xs font-semibold">
                    {getSeverityLabel(interaction.severity)}
                  </AlertTitle>
                  <AlertDescription className="text-xs">
                    <span className="font-medium">
                      {interaction.drug1} + {interaction.drug2}
                    </span>
                    <br />
                    {interaction.interaction}
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          ))}
        </div>
      </ScrollArea>

      <Alert className="text-left">
        <Info className="h-4 w-4" />
        <AlertDescription className="text-xs">
          Always consult with your healthcare provider about potential drug interactions before taking multiple medications.
        </AlertDescription>
      </Alert>
    </div>
  );
};
