import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ShieldCheck, Clock, FileCheck } from "lucide-react";

interface AboutSectionProps {
  title: string;
  description: string;
  complianceNotice?: string;
  verificationProcess?: string;
  image?: string;
}

export const AboutSection = ({
  title,
  description,
  complianceNotice,
  verificationProcess,
  image
}: AboutSectionProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          {complianceNotice && (
            <Alert className="mb-8 border-warning bg-warning/10">
              <ShieldCheck className="h-5 w-5 text-warning" />
              <AlertDescription className="text-warning-foreground">
                <strong>Compliance Notice:</strong> {complianceNotice}
              </AlertDescription>
            </Alert>
          )}

          {verificationProcess && (
            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Verification Process
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {verificationProcess}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
