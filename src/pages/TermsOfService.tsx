import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileText, AlertTriangle, Scale, Shield, Users, Ban } from "lucide-react";

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: January 2024
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Legal Agreement</AlertTitle>
            <AlertDescription>
              By accessing or using HealthStore services, you agree to be bound by these Terms of Service. If you do not agree, you must not use our services.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Acceptance of Terms
                </CardTitle>
                <CardDescription>Your agreement to these terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Binding Agreement</h3>
                  <p className="text-sm text-muted-foreground">
                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and HealthStore ("Company," "we," "us," or "our"). By creating an account, placing an order, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Amendments</h3>
                  <p className="text-sm text-muted-foreground">
                    We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent notice on our website. Continued use of our services after such modifications constitutes acceptance of the updated Terms. We recommend reviewing these Terms periodically.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Eligibility</h3>
                  <p className="text-sm text-muted-foreground">
                    You must be at least 18 years of age to use our services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into this agreement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Service Description & Restrictions
                </CardTitle>
                <CardDescription>What we offer and limitations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Prescription Medications</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    We provide prescription medication dispensing services exclusively to individuals with valid prescriptions from licensed healthcare providers. All prescriptions are subject to verification by our licensed pharmacists.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Valid prescription required for all controlled and prescription medications</li>
                    <li>Prescriptions must be issued by a licensed practitioner within their scope of practice</li>
                    <li>We reserve the right to refuse any prescription we deem invalid or fraudulent</li>
                    <li>Prescriptions are verified with the issuing healthcare provider when necessary</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Research Chemicals & Laboratory Supplies</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Research chemicals and controlled laboratory compounds are available exclusively to verified laboratories and authorized research institutions. These products are for research purposes only and not for human or animal consumption.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Valid institutional affiliation and research license required</li>
                    <li>DEA registration may be required for certain controlled substances</li>
                    <li>End-use certificates and import permits may be required for international orders</li>
                    <li>Sales restricted to qualified researchers and institutions only</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verification Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    All users must complete our verification process before placing orders. Verification typically takes 7–14 business days and requires submission of valid documentation. We reserve the right to request additional information or reject applications that do not meet our standards.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Responsibilities & Prohibited Conduct
                </CardTitle>
                <CardDescription>Your obligations and restrictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Account Security</h3>
                  <p className="text-sm text-muted-foreground">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use or security breach.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Accurate Information</h3>
                  <p className="text-sm text-muted-foreground">
                    You agree to provide accurate, current, and complete information during registration and throughout your use of our services. Providing false information, including fraudulent prescriptions or credentials, is strictly prohibited and may result in legal action.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Prohibited Activities</h3>
                  <p className="text-sm text-muted-foreground mb-2">You may not:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Submit fraudulent prescriptions or forged documentation</li>
                    <li>Attempt to purchase medications without valid authorization</li>
                    <li>Resell, redistribute, or transfer medications obtained through our service</li>
                    <li>Use research chemicals for human consumption or illegal purposes</li>
                    <li>Interfere with or disrupt our services or servers</li>
                    <li>Attempt to circumvent verification or security measures</li>
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Compliance with Laws</h3>
                  <p className="text-sm text-muted-foreground">
                    You agree to comply with all applicable federal, state, and local laws and regulations, including but not limited to the Controlled Substances Act, FDA regulations, and HIPAA. You are responsible for understanding and complying with laws in your jurisdiction.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ban className="h-5 w-5" />
                  Limitation of Liability
                </CardTitle>
                <CardDescription>Our legal protections and limitations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service "As Is"</h3>
                  <p className="text-sm text-muted-foreground">
                    Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free from viruses or other harmful components.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Medical Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    We are a dispensing pharmacy and do not provide medical advice, diagnosis, or treatment. Information on our website is for informational purposes only and should not replace consultation with a qualified healthcare provider. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Limitation of Damages</h3>
                  <p className="text-sm text-muted-foreground">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL HEALTHSTORE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OR INABILITY TO USE OUR SERVICES.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Maximum Liability</h3>
                  <p className="text-sm text-muted-foreground">
                    Our total liability to you for any damages arising from or related to these Terms or your use of our services shall not exceed the amount you paid to us in the twelve (12) months preceding the event giving rise to the liability, or $100, whichever is greater.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Indemnification</h3>
                  <p className="text-sm text-muted-foreground">
                    You agree to indemnify, defend, and hold harmless HealthStore and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from: (a) your violation of these Terms; (b) your violation of any law or regulation; (c) your violation of any third-party rights; or (d) any fraudulent or illegal activity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Dispute Resolution
                </CardTitle>
                <CardDescription>How disputes are handled</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Informal Resolution</h3>
                  <p className="text-sm text-muted-foreground">
                    Before initiating any formal dispute resolution proceeding, you agree to first contact us at legal@healthstore.com to attempt to resolve the dispute informally. We will attempt to resolve disputes in good faith through direct communication within thirty (30) days.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Binding Arbitration</h3>
                  <p className="text-sm text-muted-foreground">
                    If informal resolution fails, any dispute, claim, or controversy arising out of or relating to these Terms or your use of our services shall be resolved exclusively through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Arbitration Procedures</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Arbitration will be conducted by a single arbitrator selected in accordance with AAA rules</li>
                    <li>The arbitration shall take place in New York, NY, or another mutually agreed location</li>
                    <li>The arbitrator's decision shall be final and binding on both parties</li>
                    <li>Each party shall bear its own costs and fees unless otherwise awarded by the arbitrator</li>
                    <li>The arbitrator may award injunctive or other equitable relief</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Class Action Waiver</h3>
                  <p className="text-sm text-muted-foreground">
                    YOU AGREE THAT DISPUTES WILL BE RESOLVED ON AN INDIVIDUAL BASIS ONLY. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT, CLASS ARBITRATION, OR ANY OTHER REPRESENTATIVE PROCEEDING. This waiver applies to all claims whether in court or arbitration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Exceptions to Arbitration</h3>
                  <p className="text-sm text-muted-foreground">
                    Either party may seek equitable relief in court for infringement or misappropriation of intellectual property rights, or to enforce arbitration provisions. Additionally, disputes may be brought in small claims court if they qualify.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Governing Law</h3>
                  <p className="text-sm text-muted-foreground">
                    These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any arbitration or court proceeding shall be conducted in New York, NY.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Termination & Account Suspension
                </CardTitle>
                <CardDescription>How accounts may be terminated</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Termination by You</h3>
                  <p className="text-sm text-muted-foreground">
                    You may terminate your account at any time by contacting customer service. Upon termination, you remain responsible for any outstanding orders and obligations incurred prior to termination.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Termination by Us</h3>
                  <p className="text-sm text-muted-foreground">
                    We reserve the right to suspend or terminate your account immediately, without prior notice or liability, for any reason, including but not limited to: violation of these Terms, fraudulent activity, failure to pass verification, expired credentials, or behavior that we deem harmful to our business, other users, or third parties.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Effect of Termination</h3>
                  <p className="text-sm text-muted-foreground">
                    Upon termination, your right to use our services ceases immediately. We may retain certain information as required by law or for legitimate business purposes. Sections of these Terms that by their nature should survive termination shall survive, including but not limited to liability limitations, indemnification, and dispute resolution provisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Miscellaneous Provisions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Entire Agreement</h3>
                  <p className="text-sm text-muted-foreground">
                    These Terms, together with our Privacy Policy and any other legal notices published by us, constitute the entire agreement between you and HealthStore concerning our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Severability</h3>
                  <p className="text-sm text-muted-foreground">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Waiver</h3>
                  <p className="text-sm text-muted-foreground">
                    Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Assignment</h3>
                  <p className="text-sm text-muted-foreground">
                    You may not assign or transfer these Terms or your account without our prior written consent. We may assign or transfer these Terms without restriction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Force Majeure</h3>
                  <p className="text-sm text-muted-foreground">
                    We shall not be liable for any failure to perform due to causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, pandemic, government actions, or natural disasters.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Questions about these Terms?</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> legal@healthstore.com</p>
                  <p><strong>Phone:</strong> 1-800-HEALTH-1</p>
                  <p><strong>Address:</strong> 123 Medical Plaza, New York, NY 10001</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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