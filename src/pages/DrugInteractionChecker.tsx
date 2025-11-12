import { useState, useMemo } from "react";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  X,
  Search,
  Shield,
  FileText,
  Download
} from "lucide-react";
import { products, Product } from "@/data/products";
import { useDrugInteractions } from "@/hooks/useDrugInteractions";
import { InteractionDetailsModal } from "@/components/shop/InteractionDetailsModal";
import { DetailedDrugInteraction } from "@/types/medicalInfo";

export const DrugInteractionChecker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedInteraction, setSelectedInteraction] = useState<DetailedDrugInteraction | null>(null);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return [];
    return products
      .filter(p => 
        p.medicalInfo && 
        (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         p.subcategory?.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .slice(0, 8);
  }, [searchTerm]);

  const interactions = useDrugInteractions(selectedProducts.map(p => p.id));

  const addProduct = (product: Product) => {
    if (!selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
      setSearchTerm("");
    }
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const getSeverityIcon = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "major":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case "moderate":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "minor":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "unknown":
        return <Info className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getSeverityColor = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return "bg-destructive/10 border-destructive/50 text-destructive";
      case "major":
        return "bg-orange-500/10 border-orange-500/50 text-orange-700 dark:text-orange-400";
      case "moderate":
        return "bg-yellow-500/10 border-yellow-500/50 text-yellow-700 dark:text-yellow-400";
      case "minor":
        return "bg-blue-500/10 border-blue-500/50 text-blue-700 dark:text-blue-400";
      case "unknown":
        return "bg-muted border-border text-muted-foreground";
    }
  };

  const getSeverityLabel = (severity: "critical" | "major" | "moderate" | "minor" | "unknown") => {
    switch (severity) {
      case "critical":
        return "CRITICAL";
      case "major":
        return "MAJOR";
      case "moderate":
        return "MODERATE";
      case "minor":
        return "MINOR";
      case "unknown":
        return "UNKNOWN";
    }
  };

  const exportReport = () => {
    const report = `
DRUG INTERACTION REPORT
Generated: ${new Date().toLocaleDateString()}

MEDICATIONS CHECKED:
${selectedProducts.map((p, i) => `${i + 1}. ${p.name}`).join('\n')}

INTERACTIONS FOUND: ${interactions.length}

${interactions.map((interaction, i) => `
${i + 1}. ${interaction.drug1} + ${interaction.drug2}
   Severity: ${getSeverityLabel(interaction.severity)}
   ${interaction.interaction}
`).join('\n')}

DISCLAIMER:
This report is for informational purposes only and does not replace professional medical advice.
Always consult with your healthcare provider about potential drug interactions.
    `.trim();

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `drug-interaction-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold">Drug Interaction Checker</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Check for potential interactions between medications before purchase. 
              Add multiple medications to see if they can be safely taken together.
            </p>
          </div>

          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Medical Disclaimer:</strong> This tool is for informational purposes only and does not replace professional medical advice. 
              Always consult with your healthcare provider before starting, stopping, or combining medications.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Product Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Select Medications</CardTitle>
                  <CardDescription>
                    Search and add medications to check for interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search medications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>

                  {/* Search Results */}
                  {searchTerm && filteredProducts.length > 0 && (
                    <ScrollArea className="h-64 border rounded-md">
                      <div className="p-2 space-y-1">
                        {filteredProducts.map(product => (
                          <button
                            key={product.id}
                            onClick={() => addProduct(product)}
                            className="w-full text-left p-3 rounded hover:bg-muted transition-colors"
                            disabled={selectedProducts.some(p => p.id === product.id)}
                          >
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.subcategory}</p>
                          </button>
                        ))}
                      </div>
                    </ScrollArea>
                  )}

                  {/* Selected Products */}
                  <div>
                    <p className="text-sm font-semibold mb-2">
                      Selected Medications ({selectedProducts.length})
                    </p>
                    <div className="space-y-2">
                      {selectedProducts.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          No medications selected
                        </p>
                      ) : (
                        selectedProducts.map(product => (
                          <div
                            key={product.id}
                            className="flex items-center justify-between p-3 bg-muted rounded-lg"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.subcategory}</p>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 flex-shrink-0"
                              onClick={() => removeProduct(product.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Interaction Results */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Interaction Results</CardTitle>
                      <CardDescription>
                        {interactions.length === 0 
                          ? "No interactions detected" 
                          : `${interactions.length} potential interaction${interactions.length !== 1 ? 's' : ''} found`}
                      </CardDescription>
                    </div>
                    {interactions.length > 0 && (
                      <Button onClick={exportReport} variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export Report
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {selectedProducts.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Select at least two medications to check for interactions
                      </p>
                    </div>
                  ) : selectedProducts.length === 1 ? (
                    <div className="text-center py-12">
                      <Info className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Add one more medication to check for interactions
                      </p>
                    </div>
                  ) : interactions.length === 0 ? (
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>No Interactions Detected</AlertTitle>
                      <AlertDescription>
                        Based on available data, no significant interactions were found between the selected medications. 
                        However, always consult your healthcare provider for personalized advice.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-4">
                        {interactions
                          .sort((a, b) => {
                            const severityOrder = { critical: 0, major: 1, moderate: 2, minor: 3, unknown: 4 };
                            return severityOrder[a.severity] - severityOrder[b.severity];
                          })
                          .map((interaction, index) => (
                            <Card 
                              key={index}
                              className={`border-2 cursor-pointer hover:shadow-md transition-shadow ${getSeverityColor(interaction.severity)}`}
                              onClick={() => setSelectedInteraction(interaction)}
                            >
                              <CardContent className="p-4">
                                <div className="flex gap-3">
                                  <div className="flex-shrink-0">
                                    {getSeverityIcon(interaction.severity)}
                                  </div>
                                  <div className="flex-1 space-y-2">
                                    <div className="flex items-start justify-between gap-2">
                                      <div>
                                        <Badge variant="outline" className="mb-2">
                                          {getSeverityLabel(interaction.severity)}
                                        </Badge>
                                        <p className="font-semibold text-sm">
                                          {interaction.drug1} + {interaction.drug2}
                                        </p>
                                      </div>
                                    </div>
                                    <p className="text-sm">
                                      {interaction.interaction}
                                    </p>
                                    {interaction.managementStrategy && (
                                      <>
                                        <Separator />
                                        <div>
                                          <p className="text-xs font-semibold mb-1">Management:</p>
                                          <p className="text-xs">{interaction.managementStrategy}</p>
                                        </div>
                                      </>
                                    )}
                                    <p className="text-xs text-muted-foreground">
                                      Click for detailed information
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </ScrollArea>
                  )}
                </CardContent>
              </Card>

              {interactions.length > 0 && (
                <Alert className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>Important:</strong> These interactions are based on known pharmacological data. 
                    Your individual risk may vary based on dosage, timing, duration of use, and your personal health conditions. 
                    Always discuss medication combinations with your healthcare provider or pharmacist.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {selectedInteraction && (
        <InteractionDetailsModal
          interaction={selectedInteraction}
          open={!!selectedInteraction}
          onClose={() => setSelectedInteraction(null)}
        />
      )}
    </div>
  );
};
