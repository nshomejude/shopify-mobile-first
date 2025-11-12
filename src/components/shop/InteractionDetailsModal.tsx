import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertTriangle,
  AlertCircle,
  Info,
  Clock,
  FileText,
  Shield,
  Zap
} from "lucide-react";
import { DetailedDrugInteraction } from "@/types/medicalInfo";

interface InteractionDetailsModalProps {
  interaction: DetailedDrugInteraction;
  open: boolean;
  onClose: () => void;
}

export const InteractionDetailsModal = ({
  interaction,
  open,
  onClose,
}: InteractionDetailsModalProps) => {
  const getSeverityIcon = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-6 w-6 text-destructive" />;
      case "major":
        return <AlertTriangle className="h-6 w-6 text-orange-500" />;
      case "moderate":
        return <AlertCircle className="h-6 w-6 text-yellow-500" />;
      case "minor":
        return <Info className="h-6 w-6 text-blue-500" />;
      case "unknown":
        return <Info className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getSeverityColor = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return "bg-destructive text-destructive-foreground";
      case "major":
        return "bg-orange-500 text-white";
      case "moderate":
        return "bg-yellow-500 text-white";
      case "minor":
        return "bg-blue-500 text-white";
      case "unknown":
        return "bg-muted text-muted-foreground";
    }
  };

  const getEvidenceLevelDescription = (level: "A" | "B" | "C" | "D") => {
    switch (level) {
      case "A":
        return "Established - Multiple well-controlled studies";
      case "B":
        return "Probable - Limited controlled studies or case reports";
      case "C":
        return "Possible - Expert opinion or theoretical";
      case "D":
        return "Unlikely - Limited or conflicting data";
    }
  };

  const getOnsetDescription = (onset?: "immediate" | "hours" | "days" | "weeks") => {
    switch (onset) {
      case "immediate":
        return "Within minutes to 1 hour";
      case "hours":
        return "Within 1-24 hours";
      case "days":
        return "Within 1-7 days";
      case "weeks":
        return "More than 7 days";
      default:
        return "Variable";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-start gap-3">
            {getSeverityIcon(interaction.severity)}
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">
                Drug Interaction Details
              </DialogTitle>
              <DialogDescription className="text-base">
                {interaction.drug1 || interaction.drug} + {interaction.drug2 || "Other Medication"}
              </DialogDescription>
            </div>
            <Badge className={getSeverityColor(interaction.severity)}>
              {interaction.severity.toUpperCase()}
            </Badge>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Clinical Significance */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Clinical Significance</h3>
              </div>
              <Alert>
                <AlertDescription className="text-sm">
                  {interaction.clinicalSignificance}
                </AlertDescription>
              </Alert>
            </div>

            <Separator />

            {/* Mechanism of Action */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Mechanism of Action</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {interaction.mechanism}
              </p>
            </div>

            <Separator />

            {/* Management Strategy */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Management Strategy</h3>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm leading-relaxed">
                  {interaction.managementStrategy}
                </p>
              </div>
            </div>

            <Separator />

            {/* Evidence & Timing */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Evidence Level</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-base px-3 py-1">
                    Level {interaction.evidenceLevel}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    {getEvidenceLevelDescription(interaction.evidenceLevel)}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Expected Onset</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {interaction.onset?.charAt(0).toUpperCase() + interaction.onset?.slice(1) || "Variable"}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    {getOnsetDescription(interaction.onset)}
                  </p>
                </div>
              </div>
            </div>

            {/* References */}
            {interaction.references && interaction.references.length > 0 && (
              <>
                <Separator />
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">References</h3>
                  </div>
                  <ul className="space-y-2">
                    {interaction.references.map((ref, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {index + 1}. {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Disclaimer */}
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="text-xs">
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only 
                and does not replace professional medical advice. Individual responses to drug interactions 
                may vary based on dosage, timing, duration of treatment, and personal health factors. 
                Always consult your healthcare provider or pharmacist before combining medications.
              </AlertDescription>
            </Alert>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
