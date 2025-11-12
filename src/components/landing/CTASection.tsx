import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Upload, FlaskConical } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  requiresPrescription?: boolean;
  requiresLabLicense?: boolean;
}

export const CTASection = ({
  title = "Ready to Get Started?",
  description,
  requiresPrescription = false,
  requiresLabLicense = false
}: CTASectionProps) => {
  const defaultDescription = requiresPrescription
    ? "Upload your prescription and place your order today"
    : requiresLabLicense
    ? "Submit your laboratory credentials to access our research catalog"
    : "Browse our complete catalog of authorized pharmaceutical products";

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description || defaultDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {requiresPrescription && (
              <Button size="lg" asChild>
                <Link to="/upload-prescription">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Prescription
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
            {requiresLabLicense && (
              <Button size="lg" asChild>
                <Link to="/lab-verification">
                  <FlaskConical className="w-5 h-5 mr-2" />
                  Verify Lab License
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
            {!requiresPrescription && !requiresLabLicense && (
              <Button size="lg" asChild>
                <Link to="/shop-horizontal">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
            <Button size="lg" variant="outline" asChild>
              <Link to="/safety-compliance">Learn About Safety</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
