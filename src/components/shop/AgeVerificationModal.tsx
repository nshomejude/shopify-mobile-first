import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const AgeVerificationModal = () => {
  const [open, setOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const isVerified = localStorage.getItem("ageVerified");
    if (!isVerified) {
      setOpen(true);
    }
  }, []);

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleVerify = () => {
    setError("");

    if (!dateOfBirth) {
      setError("Please enter your date of birth");
      return;
    }

    if (!agreedToTerms) {
      setError("You must agree to the terms and conditions");
      return;
    }

    const age = calculateAge(dateOfBirth);

    if (age < 18) {
      setError("You must be 18 or older to access this site");
      return;
    }

    localStorage.setItem("ageVerified", "true");
    setOpen(false);
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl">Age Verification Required</DialogTitle>
          <DialogDescription className="text-base">
            This website contains pharmaceutical products. You must be 18 years or older to access this site.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
            />
            <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
              I confirm that I am 18 years or older and agree to the terms and conditions of this site. I understand that pharmaceutical products should only be used under medical supervision.
            </Label>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="flex gap-3">
          <Button onClick={handleVerify} className="flex-1">
            Enter Site
          </Button>
          <Button onClick={handleExit} variant="outline" className="flex-1">
            Exit
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          By entering this site, you certify that you are of legal age and agree to our privacy policy and terms of service.
        </p>
      </DialogContent>
    </Dialog>
  );
};
