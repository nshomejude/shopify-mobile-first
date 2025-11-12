import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FlaskConical } from "lucide-react";

interface VerificationBadgeProps {
  requiresPrescription?: boolean;
  requiresLabLicense?: boolean;
  verificationDays?: number;
  size?: "sm" | "md" | "lg";
}

export const VerificationBadge = ({
  requiresPrescription,
  requiresLabLicense,
  verificationDays = 7,
  size = "md"
}: VerificationBadgeProps) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5"
  };

  if (requiresPrescription) {
    return (
      <Badge variant="secondary" className={sizeClasses[size]}>
        <ShieldCheck className="w-3 h-3 mr-1" />
        Prescription Required ({verificationDays} days verification)
      </Badge>
    );
  }

  if (requiresLabLicense) {
    return (
      <Badge variant="outline" className={`${sizeClasses[size]} border-primary text-primary`}>
        <FlaskConical className="w-3 h-3 mr-1" />
        Lab License Required ({verificationDays} days verification)
      </Badge>
    );
  }

  return null;
};
