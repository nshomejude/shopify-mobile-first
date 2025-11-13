/**
 * Product Data Migration Helper
 * 
 * This utility helps convert legacy product data structures to the new comprehensive format
 * matching drugs.com standards for prescription drugs and industry standards for research chemicals.
 */

import { MedicalInfo } from '@/types/medicalInfo';
import { ResearchChemicalInfo } from '@/types/researchChemicalInfo';

// Legacy format (old structure)
interface LegacyMedicalInfo {
  dosage?: {
    standard?: string;
    administration?: string[];
    specialPopulations?: string;
  };
  sideEffects?: {
    common?: string[];
    serious?: string[];
  };
  contraindications?: string[];
  drugInteractions?: string[];
}

/**
 * Migrates legacy medical info to comprehensive drugs.com format
 */
export function migrateLegacyMedicalInfo(
  legacy: LegacyMedicalInfo,
  productName: string,
  additionalData?: Partial<MedicalInfo>
): MedicalInfo {
  return {
    uses: additionalData?.uses || {
      overview: `${productName} is used for various medical conditions. Consult your healthcare provider for specific indications.`,
      conditions: []
    },
    
    sideEffects: {
      common: legacy.sideEffects?.common || [],
      serious: legacy.sideEffects?.serious || [],
      notes: additionalData?.sideEffects?.notes
    },
    
    warnings: additionalData?.warnings || {
      generalWarnings: ["Consult your healthcare provider before use"],
      blackBoxWarnings: additionalData?.warnings?.blackBoxWarnings,
      specificPopulations: additionalData?.warnings?.specificPopulations
    },
    
    beforeTaking: {
      contraindications: legacy.contraindications || [],
      precautions: additionalData?.beforeTaking?.precautions || [],
      pregnancy: additionalData?.beforeTaking?.pregnancy || "Consult your healthcare provider if pregnant or planning to become pregnant.",
      breastfeeding: additionalData?.beforeTaking?.breastfeeding || "Consult your healthcare provider if breastfeeding."
    },
    
    dosage: {
      overview: legacy.dosage?.standard || "Dosage should be determined by your healthcare provider.",
      administration: legacy.dosage?.administration || [],
      specialPopulations: legacy.dosage?.specialPopulations,
      missedDose: additionalData?.dosage?.missedDose || "Take as soon as you remember. Skip if nearly time for next dose.",
      overdose: additionalData?.dosage?.overdose || "Seek emergency medical attention if overdose suspected.",
      storage: additionalData?.dosage?.storage || "Store at room temperature away from moisture and heat."
    },
    
    drugInteractions: {
      overview: additionalData?.drugInteractions?.overview || "May interact with other medications. Always inform your healthcare provider of all medications you take.",
      interactions: legacy.drugInteractions || [],
      avoidWith: additionalData?.drugInteractions?.avoidWith
    },
    
    faq: additionalData?.faq
  };
}

/**
 * Template for comprehensive drug information following drugs.com format
 */
export const drugInfoTemplate = {
  exampleDrug: (): MedicalInfo => ({
    uses: {
      overview: "Brief 2-3 sentence overview of what this medication is and what it does.",
      conditions: [
        "**Primary Indication** - Detailed description of use",
        "**Secondary Indication** - Detailed description of use",
        "**Off-label Use** - Description (if applicable)"
      ]
    },
    
    sideEffects: {
      common: [
        "Nausea",
        "Headache",
        "Dizziness",
        "Drowsiness"
      ],
      serious: [
        "Severe allergic reaction (difficulty breathing, swelling)",
        "Chest pain or irregular heartbeat",
        "Severe dizziness or fainting",
        "Signs of liver problems (yellowing of skin/eyes)"
      ],
      notes: "This is not a complete list. Call your doctor for medical advice about side effects."
    },
    
    warnings: {
      blackBoxWarnings: [
        "CRITICAL WARNING: Description of life-threatening risks"
      ],
      generalWarnings: [
        "May cause drowsiness - avoid driving",
        "Do not stop suddenly without doctor guidance",
        "May increase risk of X in patients with Y"
      ],
      specificPopulations: [
        "Elderly patients may be more sensitive to side effects",
        "Not approved for use in children under X years"
      ]
    },
    
    beforeTaking: {
      contraindications: [
        "Known allergy to this medication",
        "Severe liver or kidney disease",
        "Specific medical condition"
      ],
      precautions: [
        "History of heart disease",
        "Diabetes",
        "Glaucoma",
        "Seizure disorders"
      ],
      pregnancy: "Pregnancy Category X: Description of pregnancy risks and recommendations.",
      breastfeeding: "It is not known if this drug passes into breast milk. Consult your doctor before breastfeeding."
    },
    
    dosage: {
      overview: "Take exactly as prescribed by your doctor. Follow all directions on your prescription label.",
      adults: "Adults: Typical dosing range and frequency",
      children: "Pediatric: Dosing based on age/weight",
      elderly: "Geriatric: May require dose adjustment",
      specialPopulations: "Renal/hepatic impairment: Adjusted dosing",
      administration: [
        "Take with or without food",
        "Swallow tablets whole - do not crush or chew",
        "Use measuring device for liquid forms",
        "Take at same time each day"
      ],
      missedDose: "Take as soon as remembered unless nearly time for next dose. Do not double dose.",
      overdose: "Seek emergency medical attention. Overdose symptoms may include: [list symptoms]",
      storage: "Store at 20-25°C (68-77°F). Keep away from moisture and light.",
      strengths: ["Strength 1", "Strength 2", "Strength 3"]
    },
    
    drugInteractions: {
      overview: "Tell your doctor about all medications you use, including prescriptions, over-the-counter drugs, vitamins, and herbal products.",
      interactions: [
        "Drug A - Increases risk of side effect X",
        "Drug B - May decrease effectiveness",
        "Drug C - Contraindicated - do not use together"
      ],
      avoidWith: ["Alcohol", "Grapefruit juice", "St. John's Wort"]
    },
    
    faq: [
      {
        question: "How long does it take to work?",
        answer: "Detailed answer about onset of action and what to expect."
      },
      {
        question: "Can I drink alcohol while taking this?",
        answer: "Detailed answer about alcohol interactions."
      },
      {
        question: "What should I do if I miss a dose?",
        answer: "Specific instructions for missed doses."
      }
    ]
  })
};

/**
 * Template for research chemical information
 */
export const researchChemicalTemplate = (): ResearchChemicalInfo => ({
  chemicalProperties: {
    iupacName: "Full IUPAC chemical name",
    molecularFormula: "C₁₀H₁₅N",
    molecularWeight: "149.23 g/mol",
    casNumber: "XXX-XX-X",
    appearance: "White to off-white crystalline powder",
    purity: "≥98% (HPLC)",
    solubility: ["DMSO", "Ethanol", "Water (sparingly soluble)"]
  },
  
  researchApplications: {
    overview: "Brief description of research compound and its applications in scientific research.",
    primaryUses: [
      "Neuroscience research",
      "Pharmacological studies",
      "Biochemical assays"
    ],
    studyAreas: ["Neuropharmacology", "Receptor binding studies", "Cell signaling"],
    mechanism: "Detailed description of mechanism of action and receptor interactions."
  },
  
  safetyHandling: {
    hazardStatements: [
      "H302: Harmful if swallowed",
      "H315: Causes skin irritation",
      "H319: Causes serious eye irritation",
      "H335: May cause respiratory irritation"
    ],
    precautionaryStatements: [
      "P261: Avoid breathing dust/fume/gas/mist/vapors/spray",
      "P280: Wear protective gloves/eye protection/face protection",
      "P305+P351+P338: IF IN EYES: Rinse cautiously with water for several minutes",
      "P312: Call a doctor if you feel unwell"
    ],
    storageConditions: "Store at -20°C in a dry, dark place. Protect from moisture and light.",
    shelfLife: "2-3 years when stored properly",
    disposalGuidelines: "Dispose of in accordance with local, state, and federal regulations for chemical waste.",
    ppe: ["Laboratory coat", "Safety goggles", "Nitrile gloves", "Fume hood"]
  },
  
  laboratoryGuidelines: {
    recommendedConcentrations: ["1 µM", "10 µM", "100 µM"],
    preparationNotes: [
      "Dissolve in DMSO to create 10 mM stock solution",
      "Dilute to working concentration in appropriate buffer",
      "Vortex thoroughly to ensure complete dissolution",
      "Prepare fresh solutions when possible"
    ],
    stabilityData: "Stable for 6 months at -20°C. Solutions in DMSO stable for 1 month at -20°C.",
    incompatibilities: ["Strong oxidizing agents", "Strong acids", "Strong bases"]
  },
  
  regulatory: {
    legalStatus: "FOR RESEARCH AND ANALYTICAL PURPOSES ONLY - NOT FOR HUMAN OR VETERINARY USE",
    restrictions: [
      "Valid laboratory credentials required for purchase",
      "End-user declaration may be required",
      "Not for use in humans or animals"
    ],
    certifications: ["ISO 9001:2015", "GMP Certified"],
    complianceNotes: [
      "Purchaser agrees to use only for legitimate research purposes",
      "Compliant with federal and state research chemical regulations"
    ]
  },
  
  documentation: {
    coa: true,
    msds: true,
    nmr: true,
    hplc: true,
    references: [
      "Author et al. (2023). Title of study. Journal Name. DOI:XXX",
      "Author et al. (2022). Title of study. Journal Name. DOI:XXX"
    ]
  }
});

/**
 * Quick reference guide for updating products
 */
export const migrationGuide = `
PRODUCT DATA MIGRATION GUIDE
============================

## For Prescription Drugs (rx-XXX):

Update medicalInfo to include ALL sections:
1. uses: { overview, conditions[] }
2. sideEffects: { common[], serious[], notes? }
3. warnings: { blackBoxWarnings[], generalWarnings[], specificPopulations[] }
4. beforeTaking: { contraindications[], precautions[], pregnancy, breastfeeding }
5. dosage: { overview, adults, children, elderly, specialPopulations, administration[], missedDose, overdose, storage }
6. drugInteractions: { overview, interactions[], avoidWith[] }
7. faq: [{ question, answer }]

## For Research Chemicals (rc-XXX):

Add researchChemicalInfo with:
1. chemicalProperties: { iupacName, molecularFormula, molecularWeight, casNumber, appearance, purity, solubility[] }
2. researchApplications: { overview, primaryUses[], studyAreas[], mechanism }
3. safetyHandling: { hazardStatements[], precautionaryStatements[], storageConditions, shelfLife, disposalGuidelines, ppe[] }
4. laboratoryGuidelines: { recommendedConcentrations[], preparationNotes[], stabilityData, incompatibilities[] }
5. regulatory: { legalStatus, restrictions[], certifications[], complianceNotes[] }
6. documentation: { coa, msds, nmr, hplc, references[] }

## Content Standards:

- Drug descriptions: Minimum 2000 words covering all aspects
- Professional medical terminology with clear explanations
- Follow drugs.com format and structure
- Research chemicals: Follow industry standard MSDS/COA format
- Include all safety information prominently
- Add FAQ section with 3-5 common questions

## Priority Order:

1. High-traffic/featured products first
2. Products with existing medical info
3. Remaining products by category
`;

console.log(migrationGuide);
