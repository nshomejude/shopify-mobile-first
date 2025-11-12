import { Card } from "@/components/ui/card";
import { Upload, FileSearch, CheckCircle2, Package } from "lucide-react";

interface Step {
  icon: typeof Upload;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Upload,
    title: "Submit Documents",
    description: "Upload your prescription or lab license documentation securely through our portal."
  },
  {
    icon: FileSearch,
    title: "Verification Review",
    description: "Our compliance team reviews your submission within 7 business days."
  },
  {
    icon: CheckCircle2,
    title: "Approval Notification",
    description: "Receive email confirmation once your documents are verified and approved."
  },
  {
    icon: Package,
    title: "Order & Delivery",
    description: "Place your order and receive secure, discreet delivery to your location."
  }
];

export const VerificationSteps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Verification Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step verification ensures compliance and secure access
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
