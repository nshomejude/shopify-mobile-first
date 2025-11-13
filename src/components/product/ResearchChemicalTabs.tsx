import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FlaskConical, 
  FileText, 
  ShieldAlert,
  Microscope,
  Scale,
  BookOpen
} from "lucide-react";
import { ResearchChemicalInfo } from "@/types/researchChemicalInfo";

interface ResearchChemicalTabsProps {
  researchInfo: ResearchChemicalInfo;
  productName: string;
}

export function ResearchChemicalTabs({ researchInfo, productName }: ResearchChemicalTabsProps) {
  return (
    <Tabs defaultValue="properties" className="w-full">
      <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-1">
        <TabsTrigger value="properties" className="text-xs">Properties</TabsTrigger>
        <TabsTrigger value="applications" className="text-xs">Applications</TabsTrigger>
        <TabsTrigger value="safety" className="text-xs">Safety</TabsTrigger>
        <TabsTrigger value="laboratory" className="text-xs">Lab Guidelines</TabsTrigger>
        <TabsTrigger value="regulatory" className="text-xs">Regulatory</TabsTrigger>
        {researchInfo.documentation && (
          <TabsTrigger value="documentation" className="text-xs">Documentation</TabsTrigger>
        )}
      </TabsList>

      {/* Chemical Properties */}
      <TabsContent value="properties" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Chemical Properties
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-muted-foreground">IUPAC Name:</span>
                  <p className="text-sm mt-1">{researchInfo.chemicalProperties.iupacName}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-muted-foreground">Molecular Formula:</span>
                  <p className="text-sm mt-1 font-mono">{researchInfo.chemicalProperties.molecularFormula}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-muted-foreground">Molecular Weight:</span>
                  <p className="text-sm mt-1">{researchInfo.chemicalProperties.molecularWeight}</p>
                </div>
                {researchInfo.chemicalProperties.casNumber && (
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground">CAS Number:</span>
                    <p className="text-sm mt-1 font-mono">{researchInfo.chemicalProperties.casNumber}</p>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-muted-foreground">Appearance:</span>
                  <p className="text-sm mt-1">{researchInfo.chemicalProperties.appearance}</p>
                </div>
                {researchInfo.chemicalProperties.purity && (
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground">Purity:</span>
                    <Badge variant="secondary" className="mt-1">{researchInfo.chemicalProperties.purity}</Badge>
                  </div>
                )}
                {researchInfo.chemicalProperties.solubility && researchInfo.chemicalProperties.solubility.length > 0 && (
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground">Solubility:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {researchInfo.chemicalProperties.solubility.map((solvent, idx) => (
                        <Badge key={idx} variant="outline">{solvent}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Research Applications */}
      <TabsContent value="applications" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Microscope className="w-5 h-5 text-primary" />
              Research Applications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {researchInfo.researchApplications.overview}
            </p>

            {researchInfo.researchApplications.primaryUses.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-3">Primary Research Uses:</h4>
                  <ul className="space-y-2">
                    {researchInfo.researchApplications.primaryUses.map((use, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {researchInfo.researchApplications.studyAreas.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-3">Study Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {researchInfo.researchApplications.studyAreas.map((area, idx) => (
                      <Badge key={idx} variant="secondary">{area}</Badge>
                    ))}
                  </div>
                </div>
              </>
            )}

            {researchInfo.researchApplications.mechanism && (
              <>
                <Separator />
                <Alert>
                  <FlaskConical className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Mechanism of Action:</strong><br />
                    {researchInfo.researchApplications.mechanism}
                  </AlertDescription>
                </Alert>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Safety & Handling */}
      <TabsContent value="safety" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-destructive" />
              Safety & Handling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {researchInfo.safetyHandling.hazardStatements.length > 0 && (
              <Alert className="border-destructive/50 bg-destructive/5">
                <ShieldAlert className="h-4 w-4 text-destructive" />
                <AlertDescription>
                  <h4 className="font-semibold mb-2 text-destructive">Hazard Statements (GHS):</h4>
                  <ul className="space-y-1">
                    {researchInfo.safetyHandling.hazardStatements.map((statement, idx) => (
                      <li key={idx} className="text-sm">• {statement}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {researchInfo.safetyHandling.precautionaryStatements.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Precautionary Statements:</h4>
                <ul className="space-y-2">
                  {researchInfo.safetyHandling.precautionaryStatements.map((statement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">✓</span>
                      <span>{statement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />

            <div className="grid md:grid-cols-2 gap-4">
              <Alert>
                <AlertDescription>
                  <strong>Storage:</strong><br />
                  {researchInfo.safetyHandling.storageConditions}
                </AlertDescription>
              </Alert>
              {researchInfo.safetyHandling.shelfLife && (
                <Alert>
                  <AlertDescription>
                    <strong>Shelf Life:</strong><br />
                    {researchInfo.safetyHandling.shelfLife}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <Alert>
              <AlertDescription>
                <strong>Disposal:</strong><br />
                {researchInfo.safetyHandling.disposalGuidelines}
              </AlertDescription>
            </Alert>

            {researchInfo.safetyHandling.ppe && researchInfo.safetyHandling.ppe.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Required PPE:</h4>
                <div className="flex flex-wrap gap-2">
                  {researchInfo.safetyHandling.ppe.map((item, idx) => (
                    <Badge key={idx} variant="outline">{item}</Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Laboratory Guidelines */}
      <TabsContent value="laboratory" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-primary" />
              Laboratory Use Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {researchInfo.laboratoryGuidelines.recommendedConcentrations && 
             researchInfo.laboratoryGuidelines.recommendedConcentrations.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Recommended Concentrations:</h4>
                <div className="flex flex-wrap gap-2">
                  {researchInfo.laboratoryGuidelines.recommendedConcentrations.map((conc, idx) => (
                    <Badge key={idx} variant="secondary">{conc}</Badge>
                  ))}
                </div>
              </div>
            )}

            <Separator />

            {researchInfo.laboratoryGuidelines.preparationNotes.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Preparation Notes:</h4>
                <ul className="space-y-2">
                  {researchInfo.laboratoryGuidelines.preparationNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {researchInfo.laboratoryGuidelines.stabilityData && (
              <>
                <Separator />
                <Alert>
                  <AlertDescription>
                    <strong>Stability Data:</strong><br />
                    {researchInfo.laboratoryGuidelines.stabilityData}
                  </AlertDescription>
                </Alert>
              </>
            )}

            {researchInfo.laboratoryGuidelines.incompatibilities && 
             researchInfo.laboratoryGuidelines.incompatibilities.length > 0 && (
              <>
                <Separator />
                <Alert className="border-warning/50 bg-warning/5">
                  <ShieldAlert className="h-4 w-4 text-warning" />
                  <AlertDescription>
                    <strong>Chemical Incompatibilities:</strong>
                    <ul className="mt-2 space-y-1">
                      {researchInfo.laboratoryGuidelines.incompatibilities.map((item, idx) => (
                        <li key={idx} className="text-sm">• {item}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Regulatory */}
      <TabsContent value="regulatory" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Regulatory & Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-warning/50 bg-warning/5">
              <ShieldAlert className="h-4 w-4 text-warning" />
              <AlertDescription>
                <strong className="text-lg">{researchInfo.regulatory.legalStatus}</strong>
              </AlertDescription>
            </Alert>

            {researchInfo.regulatory.restrictions && researchInfo.regulatory.restrictions.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-3">Restrictions:</h4>
                  <ul className="space-y-2">
                    {researchInfo.regulatory.restrictions.map((restriction, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-warning mt-1">⚠</span>
                        <span>{restriction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {researchInfo.regulatory.certifications && researchInfo.regulatory.certifications.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-3">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {researchInfo.regulatory.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary">{cert}</Badge>
                    ))}
                  </div>
                </div>
              </>
            )}

            {researchInfo.regulatory.complianceNotes && researchInfo.regulatory.complianceNotes.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-3">Compliance Notes:</h4>
                  <ul className="space-y-2">
                    {researchInfo.regulatory.complianceNotes.map((note, idx) => (
                      <li key={idx} className="text-sm border-l-2 border-primary pl-3 py-1">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Documentation */}
      {researchInfo.documentation && (
        <TabsContent value="documentation" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Technical Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {researchInfo.documentation.coa && (
                  <Badge className="justify-center p-4 text-sm">
                    ✓ COA Available
                  </Badge>
                )}
                {researchInfo.documentation.msds && (
                  <Badge className="justify-center p-4 text-sm">
                    ✓ MSDS Available
                  </Badge>
                )}
                {researchInfo.documentation.nmr && (
                  <Badge className="justify-center p-4 text-sm">
                    ✓ NMR Spectrum
                  </Badge>
                )}
                {researchInfo.documentation.hplc && (
                  <Badge className="justify-center p-4 text-sm">
                    ✓ HPLC Data
                  </Badge>
                )}
              </div>

              {researchInfo.documentation.references && researchInfo.documentation.references.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3">Scientific References:</h4>
                    <ul className="space-y-2">
                      {researchInfo.documentation.references.map((ref, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground border-l-2 border-primary/30 pl-3 py-1">
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </Tabs>
  );
}
