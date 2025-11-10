import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, Lock, FileCheck, AlertTriangle, Building2, Users } from "lucide-react";

export const SafetyCompliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Safety & Compliance</h1>
            <p className="text-lg text-muted-foreground">
              Our commitment to safety, security, and regulatory compliance.
            </p>
          </div>

          <Alert className="mb-6">
            <Shield className="h-4 w-4" />
            <AlertTitle>Fully Licensed & Regulated</AlertTitle>
            <AlertDescription>
              We operate under strict federal and state regulations to ensure the highest standards of pharmaceutical safety.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Licensing & Accreditation
                </CardTitle>
                <CardDescription>Official certifications and regulatory compliance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">DEA Registration</h3>
                  <p className="text-sm text-muted-foreground">
                    Registered with the Drug Enforcement Administration for controlled substance handling and distribution.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">State Pharmacy License</h3>
                  <p className="text-sm text-muted-foreground">
                    Licensed in all 50 states to dispense prescription medications under state board oversight.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">FDA Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    All medications sourced from FDA-approved manufacturers and distributors. Regular inspections ensure ongoing compliance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Data Security & Privacy
                </CardTitle>
                <CardDescription>Protecting your personal health information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">HIPAA Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    All patient data is protected under HIPAA regulations. We never share your information without explicit consent.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Encryption Standards</h3>
                  <p className="text-sm text-muted-foreground">
                    256-bit SSL encryption for all data transmission. Medical records stored in HIPAA-compliant, encrypted databases.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Secure Payment Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    PCI DSS Level 1 compliant payment processing. We never store complete credit card information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  Prescription Verification
                </CardTitle>
                <CardDescription>How we ensure prescription validity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Licensed Pharmacist Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Every prescription is reviewed by a licensed pharmacist before dispensing. Drug interactions and contraindications are checked.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Doctor Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    We verify prescribing physicians through state medical boards and may contact them for confirmation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Prescription Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Participation in state prescription drug monitoring programs (PDMPs) to prevent abuse and diversion.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Research Chemical Controls
                </CardTitle>
                <CardDescription>Laboratory verification and safety protocols</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Laboratory Credential Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    All research facilities must provide valid DEA registration, institutional affiliation, and research authorization.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Usage Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Research chemical purchases are tracked and reported to federal authorities as required by law.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Safety Data Sheets</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete SDS documentation provided with every research chemical order, including handling and disposal protocols.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Quality Assurance
                </CardTitle>
                <CardDescription>Ensuring medication quality and authenticity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Authorized Distributors</h3>
                  <p className="text-sm text-muted-foreground">
                    All medications sourced exclusively from licensed, FDA-approved manufacturers and authorized distributors.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Temperature-Controlled Storage</h3>
                  <p className="text-sm text-muted-foreground">
                    Climate-controlled facilities with 24/7 monitoring. All medications stored per manufacturer specifications.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Batch Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete chain of custody documentation. Ability to track any medication back to original manufacturer lot.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Professional Standards
                </CardTitle>
                <CardDescription>Our team and training requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Licensed Pharmacists</h3>
                  <p className="text-sm text-muted-foreground">
                    All pharmacists are state-licensed with current certifications. Continuing education requirements met annually.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Background Checks</h3>
                  <p className="text-sm text-muted-foreground">
                    All staff undergo comprehensive background screening and controlled substance handling training.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Consultation Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Free pharmacist consultations available for all customers. Medication therapy management when appropriate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
