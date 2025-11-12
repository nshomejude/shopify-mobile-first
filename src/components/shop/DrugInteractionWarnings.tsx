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

  const getSeverityIcon = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "major":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case "moderate":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "minor":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "unknown":
        return <Info className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getSeverityVariant = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return "destructive";
      case "major":
      case "moderate":
      case "minor":
      case "unknown":
        return "default";
    }
  };

  const getSeverityColor = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return "border-destructive/50";
      case "major":
        return "border-orange-500/50 bg-orange-500/5";
      case "moderate":
        return "border-yellow-500/50 bg-yellow-500/5";
      case "minor":
        return "border-blue-500/50 bg-blue-500/5";
      case "unknown":
        return "";
    }
  };

  const getSeverityLabel = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return "CRITICAL";
      case "major":
        return "MAJOR";
      case "moderate":
        return "MODERATE";
      case "minor":
        return "MINOR";
      case "unknown":
        return "UNKNOWN";
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
          {interactions
            .sort((a, b) => {
              const severityOrder = { critical: 0, major: 1, moderate: 2, minor: 3, unknown: 4 };
              return severityOrder[a.severity] - severityOrder[b.severity];
            })
            .map((interaction, index) => (
              <Alert 
                key={index} 
                variant={getSeverityVariant(interaction.severity)}
                className={`text-left border-2 ${getSeverityColor(interaction.severity)}`}
              >
                <div className="flex gap-2">
                  {getSeverityIcon(interaction.severity)}
                  <div className="flex-1 space-y-1">
                    <AlertTitle className="text-xs font-semibold">
                      {getSeverityLabel(interaction.severity)} - {interaction.drug1} + {interaction.drug2}
                    </AlertTitle>
                    <AlertDescription className="text-xs">
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
