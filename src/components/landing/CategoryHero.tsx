import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Upload, FlaskConical, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { VerificationBadge } from "./VerificationBadge";

interface CategoryHeroProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  requiresPrescription?: boolean;
  requiresLabLicense?: boolean;
  verificationDays?: number;
  backgroundImage?: string;
}

export const CategoryHero = ({
  title,
  subtitle,
  icon: Icon,
  requiresPrescription,
  requiresLabLicense,
  verificationDays = 7,
  backgroundImage
}: CategoryHeroProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <VerificationBadge 
              requiresPrescription={requiresPrescription}
              requiresLabLicense={requiresLabLicense}
              verificationDays={verificationDays}
              size="lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {requiresPrescription && (
              <Button 
                size="lg" 
                onClick={() => navigate('/upload-prescription')}
                className="gap-2"
              >
                <Upload className="w-5 h-5" />
                Upload Prescription
              </Button>
            )}
            
            {requiresLabLicense && (
              <Button 
                size="lg" 
                onClick={() => navigate('/lab-verification')}
                className="gap-2"
              >
                <FlaskConical className="w-5 h-5" />
                Verify Lab License
              </Button>
            )}

            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
              className="gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
