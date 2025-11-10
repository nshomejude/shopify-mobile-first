import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, FileText, Shield, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PrescriptionUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Prescription Submitted",
        description: "We'll review your prescription and contact you within 24 hours.",
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Upload Your Prescription</h1>
            <p className="text-lg text-muted-foreground">
              Submit your valid prescription to order prescription medications safely and legally.
            </p>
          </div>

          <Alert className="mb-6">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your prescription will be verified by licensed pharmacists. All information is encrypted and HIPAA compliant.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Prescription Information</CardTitle>
              <CardDescription>
                Please provide your prescription details and upload clear photos or scans of your prescription.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Full Name</Label>
                  <Input id="patientName" required placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prescribingDoctor">Prescribing Doctor</Label>
                  <Input id="prescribingDoctor" required placeholder="Dr. Smith" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medication">Medication Name</Label>
                  <Input id="medication" required placeholder="e.g., Lisinopril" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea id="notes" placeholder="Any special instructions or allergies" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prescription">Upload Prescription</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Input
                      id="prescription"
                      type="file"
                      accept="image/*,.pdf"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="prescription" className="cursor-pointer">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-sm font-medium mb-1">Click to upload prescription</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
                    </label>
                  </div>
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4" />
                          <span>{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    What happens next?
                  </h3>
                  <ul className="text-sm space-y-1 ml-7">
                    <li>• Licensed pharmacist reviews your prescription (24 hours)</li>
                    <li>• We verify with your prescribing doctor if needed</li>
                    <li>• You receive confirmation and order processing begins</li>
                    <li>• Medication ships with secure, discreet packaging</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full" disabled={uploading || files.length === 0}>
                  {uploading ? "Submitting..." : "Submit Prescription"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};
