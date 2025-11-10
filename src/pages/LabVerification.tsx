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
import { Upload, FileText, Building2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LabVerification = () => {
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
        title: "Verification Submitted",
        description: "We'll review your credentials and contact you within 48 hours.",
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
            <h1 className="text-4xl font-bold mb-4">Laboratory Verification</h1>
            <p className="text-lg text-muted-foreground">
              Register your laboratory to access research chemicals and specialized compounds.
            </p>
          </div>

          <Alert className="mb-6">
            <Building2 className="h-4 w-4" />
            <AlertDescription>
              Only verified research facilities, universities, and licensed laboratories can purchase research chemicals. All credentials are verified through official channels.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Laboratory Information</CardTitle>
              <CardDescription>
                Please provide your laboratory details and upload official documentation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="labName">Laboratory/Institution Name</Label>
                  <Input id="labName" required placeholder="ABC Research Institute" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseNumber">DEA/License Number</Label>
                  <Input id="licenseNumber" required placeholder="ABC123456" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="labAddress">Laboratory Address</Label>
                  <Textarea id="labAddress" required placeholder="123 Research Blvd..." rows={3} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Primary Contact Name</Label>
                    <Input id="contactName" required placeholder="Dr. Jane Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactTitle">Title/Position</Label>
                    <Input id="contactTitle" required placeholder="Lab Director" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="contact@lab.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="researchPurpose">Research Purpose</Label>
                  <Textarea id="researchPurpose" required placeholder="Brief description of research activities..." rows={4} />
                </div>

                <div className="space-y-2">
                  <Label>Upload License & Documentation</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Input
                      id="documents"
                      type="file"
                      accept="image/*,.pdf"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="documents" className="cursor-pointer">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-sm font-medium mb-1">Click to upload documents</p>
                      <p className="text-xs text-muted-foreground">Required: DEA License, Lab Registration, Insurance Certificate</p>
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
                    Verification Process
                  </h3>
                  <ul className="text-sm space-y-1 ml-7">
                    <li>• Credential verification with DEA and licensing authorities (48-72 hours)</li>
                    <li>• Phone verification with primary contact</li>
                    <li>• Account activation and wholesale pricing access</li>
                    <li>• Secure ordering portal for research chemicals</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full" disabled={uploading || files.length === 0}>
                  {uploading ? "Submitting..." : "Submit Verification Application"}
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
