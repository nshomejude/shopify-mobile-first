import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/components/landing/Footer";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = {
    ordering: [
      {
        q: "How do I place an order?",
        a: "Browse our shop, add items to cart, proceed to checkout, upload your prescription if required, enter shipping information, and complete payment. You'll receive a confirmation email immediately."
      },
      {
        q: "Do I need a prescription for all medications?",
        a: "Prescription medications require a valid prescription from a licensed healthcare provider. OTC medications, supplements, and research chemicals (with lab license) don't require prescriptions."
      },
      {
        q: "Can I modify or cancel my order?",
        a: "You can modify or cancel orders within 1 hour of placement. Contact support immediately at 1-800-PHARMACY or support@pharmacy.com."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, debit cards, PayPal, cryptocurrency, and HSA/FSA cards for eligible items."
      }
    ],
    prescriptions: [
      {
        q: "How do I submit my prescription?",
        a: "Upload your prescription through our secure portal, have your doctor send it directly via fax or electronic prescribing, or mail the original prescription to our pharmacy."
      },
      {
        q: "What if my prescription needs refills?",
        a: "Log into your account to request refills. We'll contact your doctor if refills aren't available or authorization is needed."
      },
      {
        q: "How long does prescription verification take?",
        a: "Most prescriptions are verified within 2-4 hours during business hours. Complex prescriptions may take up to 24 hours."
      },
      {
        q: "Can you transfer my prescription from another pharmacy?",
        a: "Yes! Provide your current pharmacy information and prescription details. We'll handle the transfer process, typically completed within 24 hours."
      }
    ],
    shipping: [
      {
        q: "What are your shipping options?",
        a: "Standard (3-5 business days, free over $50), Express (1-2 business days, $15), Overnight ($30). Controlled substances may have shipping restrictions."
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we only ship within the United States and Puerto Rico due to prescription medication regulations."
      },
      {
        q: "How do you package medications?",
        a: "All medications are shipped in discreet, unmarked packaging with no pharmacy branding. Temperature-controlled packaging is used when required."
      },
      {
        q: "Can I track my order?",
        a: "Yes! You'll receive a tracking number via email once your order ships. Track in real-time through your account dashboard."
      }
    ],
    research: [
      {
        q: "What is required to purchase research chemicals?",
        a: "Valid laboratory license, DEA registration (for controlled substances), institutional documentation, and signed terms acknowledging research-only use."
      },
      {
        q: "Are research chemicals tested for purity?",
        a: "Yes. All research chemicals include Certificates of Analysis (COA) with purity testing via HPLC, GC/MS, or NMR spectroscopy."
      },
      {
        q: "Can individuals purchase research chemicals?",
        a: "No. Research chemicals are restricted to licensed laboratories, research institutions, and qualified scientific personnel only."
      },
      {
        q: "What is your return policy for research chemicals?",
        a: "Due to the nature of these products, returns aren't accepted unless there's a verified quality issue. Contact us within 48 hours of receipt."
      }
    ],
    safety: [
      {
        q: "Are your medications FDA approved?",
        a: "All prescription medications are FDA-approved and sourced from licensed manufacturers. Supplements and research chemicals are appropriately labeled for their intended use."
      },
      {
        q: "How do you ensure medication authenticity?",
        a: "We source exclusively from FDA-approved distributors, verify lot numbers, maintain chain of custody, and conduct random quality testing."
      },
      {
        q: "What about drug interactions?",
        a: "Our pharmacists review all prescriptions for interactions. Use our Drug Interaction Checker tool or consult with our pharmacists before ordering."
      },
      {
        q: "Are my health records secure?",
        a: "Yes. We're HIPAA compliant with 256-bit encryption, secure servers, and strict access controls. Your information is never shared without consent."
      }
    ],
    account: [
      {
        q: "How do I create an account?",
        a: "Click 'Sign Up' in the top right, enter your information, verify your email, and complete your profile with your shipping and prescription insurance details."
      },
      {
        q: "I forgot my password. What do I do?",
        a: "Click 'Forgot Password' on the login page, enter your email, and follow the reset link sent to your inbox."
      },
      {
        q: "Can I save my prescription insurance information?",
        a: "Yes! Add your insurance information in Account Settings. We'll automatically check coverage for eligible medications."
      },
      {
        q: "How do I delete my account?",
        a: "Contact support to request account deletion. Note that prescription records must be retained for 7 years per federal regulations."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about ordering, prescriptions, and more
            </p>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for answers..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="ordering" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="ordering">Ordering</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            {Object.entries(faqCategories).map(([key, faqs]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{key} Questions</CardTitle>
                    <CardDescription>
                      Common questions about {key.replace('-', ' ')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Still Need Help */}
          <Card className="max-w-5xl mx-auto mt-12">
            <CardHeader className="text-center">
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>
                Our support team is available 24/7 to assist you
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Contact Support
                </button>
              </a>
              <a href="tel:1-800-742-7622">
                <button className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors">
                  Call 1-800-PHARMACY
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
