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
  // Uses - What is this drug used for?
  uses: {
    overview: string; // Brief overview paragraph
    conditions: string[]; // List of conditions treated with descriptions
  };
  
  // Side Effects
  sideEffects: {
    common: string[]; // Common side effects
    serious: string[]; // Serious side effects requiring medical attention
    rare?: string[]; // Rare side effects
    notes?: string; // Additional notes about side effects
  };
  
  // Warnings - Critical safety information
  warnings: {
    blackBoxWarnings?: string[]; // FDA black box warnings
    generalWarnings: string[]; // General safety warnings
    specificPopulations?: string[]; // Warnings for elderly, children, etc.
  };
  
  // Before Taking - What to tell your doctor
  beforeTaking: {
    contraindications: string[]; // Absolute contraindications
    precautions: string[]; // Conditions to discuss with doctor
    allergies?: string[]; // Allergy warnings
    pregnancy?: string; // Pregnancy category and information
    breastfeeding?: string; // Breastfeeding information
  };
  
  // Dosage Information
  dosage: {
    overview: string; // General dosing overview
    adults?: string; // Adult dosing
    children?: string; // Pediatric dosing
    elderly?: string; // Geriatric dosing
    specialPopulations?: string; // Renal/hepatic impairment
    administration: string[]; // How to take
    missedDose?: string; // What to do if miss a dose
    overdose?: string; // Overdose information
    storage?: string; // Storage instructions
    strengths?: string[]; // Available strengths
  };
  
  // Drug Interactions
  drugInteractions: {
    overview?: string; // General interaction overview
    interactions: (string | DetailedDrugInteraction)[]; // Specific interactions
    avoidWith?: string[]; // Foods/substances to avoid
  };
  
  // FAQ Section
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  
  // Additional Information
  ingredients?: {
    active: string;
    inactive?: string[];
  };
  
  // Legacy support
  contraindications?: string[]; // Deprecated - use beforeTaking.contraindications
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
