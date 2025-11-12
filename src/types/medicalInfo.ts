export interface DetailedDrugInteraction {
  drug: string;
  drug1?: string;
  drug2?: string;
  severity: "critical" | "major" | "moderate" | "minor" | "unknown";
  mechanism: string;
  clinicalSignificance: string;
  managementStrategy: string;
  evidenceLevel: "A" | "B" | "C" | "D";
  references?: string[];
  onset?: "immediate" | "hours" | "days" | "weeks";
  interaction?: string;
}

export interface MedicalInfo {
  uses: string[];
  dosage: {
    standard: string;
    maximum: string;
    administration: string[];
  };
  sideEffects: {
    common: string[];
    serious: string[];
    rare: string[];
  };
  contraindications: string[];
  drugInteractions: (string | DetailedDrugInteraction)[];
  warnings: string[];
  pregnancyCategory?: string;
  storage?: string;
}

export const formatInteraction = (interaction: string | DetailedDrugInteraction): DetailedDrugInteraction => {
  if (typeof interaction === 'string') {
    // Legacy string format - convert to detailed format
    return {
      drug: extractDrugName(interaction),
      severity: determineSeverity(interaction),
      mechanism: interaction,
      clinicalSignificance: interaction,
      managementStrategy: "Consult healthcare provider",
      evidenceLevel: "C",
      onset: "days"
    };
  }
  return interaction;
};

const extractDrugName = (interaction: string): string => {
  // Extract drug name from interaction string
  const match = interaction.match(/^([A-Za-z\s-]+?)(?:\s+\(|:|\s+-)/);
  return match ? match[1].trim() : "Unknown";
};

const determineSeverity = (interaction: string): "critical" | "major" | "moderate" | "minor" | "unknown" => {
  const interactionLower = interaction.toLowerCase();
  
  const criticalKeywords = [
    "contraindicated", "life-threatening", "fatal", "emergency",
    "dangerous", "avoid", "do not combine", "absolute contraindication",
    "serotonin syndrome", "hypertensive crisis"
  ];
  
  const majorKeywords = [
    "severe", "increased risk of death", "serious", "significant risk"
  ];
  
  const moderateKeywords = [
    "caution", "monitor", "increased risk", "may increase",
    "may decrease", "adjust dose", "use with caution"
  ];
  
  const minorKeywords = [
    "minor", "unlikely", "minimal", "slight"
  ];
  
  if (criticalKeywords.some(keyword => interactionLower.includes(keyword))) {
    return "critical";
  }
  if (majorKeywords.some(keyword => interactionLower.includes(keyword))) {
    return "major";
  }
  if (moderateKeywords.some(keyword => interactionLower.includes(keyword))) {
    return "moderate";
  }
  if (minorKeywords.some(keyword => interactionLower.includes(keyword))) {
    return "minor";
  }
  
  return "unknown";
};
