import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  FileText, 
  Pill, 
  ShieldAlert,
  Info,
  MessageSquare,
  FlaskConical
} from "lucide-react";
import { MedicalInfo } from "@/types/medicalInfo";
import { cn } from "@/lib/utils";

interface DrugInformationTabsProps {
  medicalInfo: MedicalInfo;
  productName: string;
}

export function DrugInformationTabs({ medicalInfo, productName }: DrugInformationTabsProps) {
  return (
    <Tabs defaultValue="uses" className="w-full">
      <TabsList className="grid grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-1">
        <TabsTrigger value="uses" className="text-xs">Uses</TabsTrigger>
        <TabsTrigger value="side-effects" className="text-xs">Side Effects</TabsTrigger>
        <TabsTrigger value="warnings" className="text-xs">Warnings</TabsTrigger>
        <TabsTrigger value="before-taking" className="text-xs">Before Taking</TabsTrigger>
        <TabsTrigger value="dosage" className="text-xs">Dosage</TabsTrigger>
        <TabsTrigger value="interactions" className="text-xs">Interactions</TabsTrigger>
        {medicalInfo.faq && medicalInfo.faq.length > 0 && (
          <TabsTrigger value="faq" className="text-xs">FAQ</TabsTrigger>
        )}
      </TabsList>

      {/* Uses Tab */}
      <TabsContent value="uses" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              What is {productName} used for?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {medicalInfo.uses?.overview && (
              <p className="text-muted-foreground leading-relaxed">
                {medicalInfo.uses.overview}
              </p>
            )}
            
            {medicalInfo.uses?.conditions && medicalInfo.uses.conditions.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Approved Uses:</h4>
                <ul className="space-y-2">
                  {medicalInfo.uses.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Side Effects Tab */}
      <TabsContent value="side-effects" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              {productName} Side Effects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Common Side Effects */}
            {medicalInfo.sideEffects?.common && medicalInfo.sideEffects.common.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Badge variant="secondary">Common</Badge>
                  Most Common Side Effects
                </h4>
                <ul className="grid gap-2">
                  {medicalInfo.sideEffects.common.map((effect, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-muted-foreground mt-1">•</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />

            {/* Serious Side Effects */}
            {medicalInfo.sideEffects?.serious && medicalInfo.sideEffects.serious.length > 0 && (
              <Alert className="border-destructive/50 bg-destructive/5">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription>
                  <h4 className="font-semibold mb-3 text-destructive">
                    Serious Side Effects - Seek Medical Attention
                  </h4>
                  <ul className="space-y-2">
                    {medicalInfo.sideEffects.serious.map((effect, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-destructive mt-1">⚠</span>
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {medicalInfo.sideEffects?.notes && (
              <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                {medicalInfo.sideEffects.notes}
              </p>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Warnings Tab */}
      <TabsContent value="warnings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-destructive" />
              Important Warnings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {medicalInfo.warnings?.blackBoxWarnings && medicalInfo.warnings.blackBoxWarnings.length > 0 && (
              <Alert className="border-2 border-destructive bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <AlertDescription>
                  <h4 className="font-bold mb-2 text-destructive uppercase">Black Box Warning</h4>
                  <ul className="space-y-2">
                    {medicalInfo.warnings.blackBoxWarnings.map((warning, idx) => (
                      <li key={idx} className="text-sm font-medium">{warning}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {medicalInfo.warnings?.generalWarnings && medicalInfo.warnings.generalWarnings.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">General Warnings:</h4>
                <ul className="space-y-3">
                  {medicalInfo.warnings.generalWarnings.map((warning, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-warning flex-shrink-0 mt-1" />
                      <span className="text-sm">{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {medicalInfo.warnings?.specificPopulations && medicalInfo.warnings.specificPopulations.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold mb-3">Special Population Warnings:</h4>
                <ul className="space-y-2">
                  {medicalInfo.warnings.specificPopulations.map((warning, idx) => (
                    <li key={idx} className="text-sm border-l-2 border-warning pl-3 py-1">
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Before Taking Tab */}
      <TabsContent value="before-taking" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Before Taking {productName}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {medicalInfo.beforeTaking?.contraindications && medicalInfo.beforeTaking.contraindications.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-destructive">Do Not Take If:</h4>
                <ul className="space-y-2">
                  {medicalInfo.beforeTaking.contraindications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />

            {medicalInfo.beforeTaking?.precautions && medicalInfo.beforeTaking.precautions.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Tell Your Doctor If You Have:</h4>
                <ul className="grid gap-2">
                  {medicalInfo.beforeTaking.precautions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(medicalInfo.beforeTaking?.pregnancy || medicalInfo.beforeTaking?.breastfeeding) && (
              <>
                <Separator />
                <div className="space-y-3">
                  {medicalInfo.beforeTaking.pregnancy && (
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Pregnancy:</strong> {medicalInfo.beforeTaking.pregnancy}
                      </AlertDescription>
                    </Alert>
                  )}
                  {medicalInfo.beforeTaking.breastfeeding && (
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Breastfeeding:</strong> {medicalInfo.beforeTaking.breastfeeding}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Dosage Tab */}
      <TabsContent value="dosage" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-primary" />
              Dosage Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {medicalInfo.dosage?.overview && (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>{medicalInfo.dosage.overview}</AlertDescription>
              </Alert>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {medicalInfo.dosage?.adults && (
                <div className="space-y-2">
                  <h4 className="font-semibold">Adult Dosage:</h4>
                  <p className="text-sm text-muted-foreground">{medicalInfo.dosage.adults}</p>
                </div>
              )}
              {medicalInfo.dosage?.children && (
                <div className="space-y-2">
                  <h4 className="font-semibold">Pediatric Dosage:</h4>
                  <p className="text-sm text-muted-foreground">{medicalInfo.dosage.children}</p>
                </div>
              )}
              {medicalInfo.dosage?.elderly && (
                <div className="space-y-2">
                  <h4 className="font-semibold">Geriatric Dosage:</h4>
                  <p className="text-sm text-muted-foreground">{medicalInfo.dosage.elderly}</p>
                </div>
              )}
              {medicalInfo.dosage?.specialPopulations && (
                <div className="space-y-2">
                  <h4 className="font-semibold">Special Populations:</h4>
                  <p className="text-sm text-muted-foreground">{medicalInfo.dosage.specialPopulations}</p>
                </div>
              )}
            </div>

            {medicalInfo.dosage?.administration && medicalInfo.dosage.administration.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-3">How to Take:</h4>
                  <ul className="space-y-2">
                    {medicalInfo.dosage.administration.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {(medicalInfo.dosage?.missedDose || medicalInfo.dosage?.overdose) && (
              <>
                <Separator />
                <div className="grid md:grid-cols-2 gap-4">
                  {medicalInfo.dosage.missedDose && (
                    <Alert>
                      <AlertDescription>
                        <strong>Missed Dose:</strong><br />
                        {medicalInfo.dosage.missedDose}
                      </AlertDescription>
                    </Alert>
                  )}
                  {medicalInfo.dosage.overdose && (
                    <Alert className="border-destructive/50">
                      <AlertDescription>
                        <strong className="text-destructive">Overdose:</strong><br />
                        {medicalInfo.dosage.overdose}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </>
            )}

            {medicalInfo.dosage?.storage && (
              <>
                <Separator />
                <Alert>
                  <AlertDescription>
                    <strong>Storage:</strong> {medicalInfo.dosage.storage}
                  </AlertDescription>
                </Alert>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Interactions Tab */}
      <TabsContent value="interactions" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-warning" />
              Drug Interactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {medicalInfo.drugInteractions?.overview && (
              <Alert className="border-warning/50 bg-warning/5">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <AlertDescription>{medicalInfo.drugInteractions.overview}</AlertDescription>
              </Alert>
            )}

            {medicalInfo.drugInteractions?.interactions && medicalInfo.drugInteractions.interactions.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Known Drug Interactions:</h4>
                <ul className="space-y-2">
                  {medicalInfo.drugInteractions.interactions.map((interaction, idx) => (
                    <li key={idx} className="text-sm border-l-2 border-warning pl-3 py-1">
                      {typeof interaction === 'string' ? interaction : interaction.mechanism}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {medicalInfo.drugInteractions?.avoidWith && medicalInfo.drugInteractions.avoidWith.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-3">Avoid With:</h4>
                  <div className="flex flex-wrap gap-2">
                    {medicalInfo.drugInteractions.avoidWith.map((item, idx) => (
                      <Badge key={idx} variant="destructive">{item}</Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* FAQ Tab */}
      {medicalInfo.faq && medicalInfo.faq.length > 0 && (
        <TabsContent value="faq" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {medicalInfo.faq.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-semibold text-primary">{item.question}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                    {item.answer}
                  </p>
                  {idx < medicalInfo.faq!.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </Tabs>
  );
}
