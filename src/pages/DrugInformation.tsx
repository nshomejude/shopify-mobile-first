import { useState } from "react";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, AlertTriangle, Info, FileText, Shield, Activity } from "lucide-react";

const drugDatabase = [
  {
    id: 1,
    name: "Lisinopril",
    genericName: "Lisinopril",
    brandNames: ["Prinivil", "Zestril"],
    category: "ACE Inhibitor",
    uses: "Treatment of high blood pressure, heart failure, and to improve survival after a heart attack.",
    dosage: "Typical starting dose is 10mg once daily. May be increased to 40mg daily based on response.",
    sideEffects: ["Dizziness", "Dry cough", "Headache", "Fatigue", "Nausea"],
    warnings: "Do not use during pregnancy. May cause serious harm or death to developing fetus. Not suitable for patients with history of angioedema.",
    interactions: ["NSAIDs may reduce effectiveness", "Potassium supplements may cause hyperkalemia", "Diuretics may enhance blood pressure lowering effect"],
  },
  {
    id: 2,
    name: "Metformin",
    genericName: "Metformin Hydrochloride",
    brandNames: ["Glucophage", "Fortamet", "Glumetza"],
    category: "Antidiabetic Agent",
    uses: "Treatment of type 2 diabetes mellitus to improve glycemic control.",
    dosage: "Starting dose: 500mg twice daily or 850mg once daily with meals. Maximum dose: 2550mg daily.",
    sideEffects: ["Diarrhea", "Nausea", "Vomiting", "Gas", "Stomach upset", "Metallic taste"],
    warnings: "Risk of lactic acidosis in patients with renal impairment. Discontinue before surgery or contrast procedures. Not for type 1 diabetes.",
    interactions: ["Alcohol increases lactic acidosis risk", "Contrast dyes require temporary discontinuation", "Cimetidine may increase metformin levels"],
  },
  {
    id: 3,
    name: "Sertraline",
    genericName: "Sertraline Hydrochloride",
    brandNames: ["Zoloft"],
    category: "SSRI Antidepressant",
    uses: "Treatment of depression, anxiety disorders, OCD, PTSD, panic disorder, and PMDD.",
    dosage: "Starting dose: 50mg once daily. May increase to 200mg daily. Take with or without food.",
    sideEffects: ["Nausea", "Insomnia", "Drowsiness", "Dry mouth", "Dizziness", "Sexual dysfunction"],
    warnings: "Increased risk of suicidal thoughts in young adults. Do not use with MAOIs. May cause serotonin syndrome.",
    interactions: ["MAOIs - contraindicated", "Other serotonergic drugs increase serotonin syndrome risk", "NSAIDs and aspirin increase bleeding risk"],
  },
];

export const DrugInformation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDrug, setSelectedDrug] = useState(drugDatabase[0]);

  const filteredDrugs = drugDatabase.filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drug.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drug.brandNames.some(brand => brand.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Drug Information Center</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive medication information, usage guidelines, and safety warnings.
            </p>
          </div>

          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              This information is for educational purposes only. Always consult your healthcare provider before starting, stopping, or changing any medication.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Drug List Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Medications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search drugs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>

                  <div className="space-y-2">
                    {filteredDrugs.map((drug) => (
                      <button
                        key={drug.id}
                        onClick={() => setSelectedDrug(drug)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedDrug.id === drug.id
                            ? "bg-primary text-primary-foreground border-primary"
                            : "hover:bg-muted border-border"
                        }`}
                      >
                        <div className="font-medium">{drug.name}</div>
                        <div className="text-xs opacity-80">{drug.category}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Drug Details */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl mb-2">{selectedDrug.name}</CardTitle>
                      <CardDescription className="text-base">
                        Generic: {selectedDrug.genericName}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">{selectedDrug.category}</Badge>
                        {selectedDrug.brandNames.map((brand) => (
                          <Badge key={brand} variant="secondary">
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="uses" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="uses">
                        <FileText className="h-4 w-4 mr-2" />
                        Uses
                      </TabsTrigger>
                      <TabsTrigger value="dosage">
                        <Activity className="h-4 w-4 mr-2" />
                        Dosage
                      </TabsTrigger>
                      <TabsTrigger value="side-effects">
                        <Info className="h-4 w-4 mr-2" />
                        Side Effects
                      </TabsTrigger>
                      <TabsTrigger value="warnings">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Warnings
                      </TabsTrigger>
                      <TabsTrigger value="interactions">
                        <Shield className="h-4 w-4 mr-2" />
                        Interactions
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="uses" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Medical Uses</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedDrug.uses}
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="dosage" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Dosage Information</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedDrug.dosage}
                        </p>
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            Dosing should be individualized based on patient response and tolerability. Always follow your healthcare provider's instructions.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </TabsContent>

                    <TabsContent value="side-effects" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Common Side Effects</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedDrug.sideEffects.map((effect, index) => (
                            <li key={index} className="flex items-center gap-2 p-2 rounded bg-muted">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{effect}</span>
                            </li>
                          ))}
                        </ul>
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            Contact your doctor immediately if you experience severe or persistent side effects.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </TabsContent>

                    <TabsContent value="warnings" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Important Warnings</h3>
                        <Alert variant="destructive">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription className="text-base leading-relaxed">
                            {selectedDrug.warnings}
                          </AlertDescription>
                        </Alert>
                      </div>
                    </TabsContent>

                    <TabsContent value="interactions" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Drug Interactions</h3>
                        <div className="space-y-3">
                          {selectedDrug.interactions.map((interaction, index) => (
                            <Card key={index}>
                              <CardContent className="p-4">
                                <p className="text-sm">{interaction}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        <Alert>
                          <Shield className="h-4 w-4" />
                          <AlertDescription>
                            Inform your doctor and pharmacist about all medications, supplements, and herbal products you are taking.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
