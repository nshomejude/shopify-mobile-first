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
            <h1 className="text-4xl font-bold mb-4">Prescription & Licensing Compliance Policy</h1>
            <p className="text-lg text-muted-foreground">
              At HealthStore, we operate strictly within national and international pharmaceutical laws. We do not sell or dispense any medication or research chemical without verified authorization.
            </p>
          </div>

          <Alert className="mb-6">
            <Shield className="h-4 w-4" />
            <AlertTitle>Fully Licensed & Regulated</AlertTitle>
            <AlertDescription>
              We operate under strict federal and state regulations to ensure the highest standards of pharmaceutical safety. All transactions require verification and authorization.
            </AlertDescription>
          </Alert>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                Official Policy Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Prescription Medications</h3>
                <p className="text-sm text-muted-foreground">
                  All prescription drugs listed on this website require a valid, verifiable prescription from a licensed medical practitioner. Prescriptions are manually reviewed by our licensed pharmacists before any order is processed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Licensed Laboratories & Research Institutions</h3>
                <p className="text-sm text-muted-foreground">
                  For research chemicals, analytical reagents, and controlled laboratory compounds, purchases are restricted to verified laboratories and authorized institutions only. Applicants must submit valid company registration documents, pharmaceutical or research licenses, and official authorization letters before any sale or shipment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verification Period</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Document and license verification takes up to 7 business days</li>
                  <li>License validation and approval take an additional 5–7 business days</li>
                  <li>Only after successful verification is your account activated for orders</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">No Sales to Individuals Without Verification</h3>
                <p className="text-sm text-muted-foreground">
                  We do not ship to individuals, entities, or addresses that fail verification. Any attempt to falsify documents or prescriptions will result in permanent blacklisting and reporting to relevant authorities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Ongoing Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Periodic license renewals and audits are required for continued access. Our verification system automatically flags expired or revoked licenses to prevent unauthorized transactions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Verification Workflow
              </CardTitle>
              <CardDescription>Complete process timeline for account authorization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Account Creation</h4>
                    <p className="text-sm text-muted-foreground">Upload your company documents or medical prescription during registration.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Preliminary Review (Week 1)</h4>
                    <p className="text-sm text-muted-foreground">Our compliance team verifies the authenticity of your business documents or prescription.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">License Validation (Week 2)</h4>
                    <p className="text-sm text-muted-foreground">We contact the issuing authority or medical board to validate your license or prescription authenticity.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Approval Notification</h4>
                    <p className="text-sm text-muted-foreground">Once verified, your account is upgraded to an Authorized Buyer or Verified Patient.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h4 className="font-semibold mb-1">Order Processing</h4>
                    <p className="text-sm text-muted-foreground">Authorized accounts can now browse, order, and schedule delivery through our secure pharmacy portal.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
