// Research Chemical Information Structure
// Industry-recognized format for research chemicals

export interface ResearchChemicalInfo {
  // Chemical Properties
  chemicalProperties: {
    iupacName: string;
    molecularFormula: string;
    molecularWeight: string;
    casNumber?: string;
    appearance: string; // e.g., "White crystalline powder"
    purity?: string; // e.g., "≥98%"
    solubility?: string[]; // e.g., ["Water", "Ethanol", "DMSO"]
  };
  
  // Research Applications
  researchApplications: {
    overview: string;
    primaryUses: string[];
    studyAreas: string[]; // e.g., ["Neuroscience", "Pharmacology"]
    mechanism?: string; // Mechanism of action
  };
  
  // Safety & Handling
  safetyHandling: {
    hazardStatements: string[]; // GHS hazard statements
    precautionaryStatements: string[];
    storageConditions: string;
    shelfLife?: string;
    disposalGuidelines: string;
    ppe?: string[]; // Personal protective equipment
  };
  
  // Laboratory Use Guidelines
  laboratoryGuidelines: {
    recommendedConcentrations?: string[];
    preparationNotes: string[];
    stabilityData?: string;
    incompatibilities?: string[]; // Chemical incompatibilities
  };
  
  // Regulatory & Compliance
  regulatory: {
    legalStatus: string; // e.g., "Research use only - not for human consumption"
    restrictions?: string[];
    certifications?: string[]; // e.g., ["ISO 9001", "GMP"]
    complianceNotes?: string[];
  };
  
  // Technical Documentation
  documentation?: {
    coa?: boolean; // Certificate of Analysis available
    msds?: boolean; // Material Safety Data Sheet available
    nmr?: boolean; // NMR spectrum available
    hplc?: boolean; // HPLC chromatogram available
    references?: string[]; // Scientific references
  };
  
  // Research Notes
  researchNotes?: {
    knownMetabolites?: string[];
    pharmacokinetics?: string;
    similarCompounds?: string[];
    studyProtocols?: string[];
  };
}

// Example usage template
export const createResearchChemicalTemplate = (): Partial<ResearchChemicalInfo> => ({
  chemicalProperties: {
    iupacName: "",
    molecularFormula: "",
    molecularWeight: "",
    appearance: "White crystalline powder",
    purity: "≥98%",
    solubility: ["DMSO", "Ethanol"]
  },
  researchApplications: {
    overview: "For research purposes only",
    primaryUses: [],
    studyAreas: []
  },
  safetyHandling: {
    hazardStatements: [],
    precautionaryStatements: [
      "Wear protective gloves/eye protection",
      "Use only in well-ventilated areas",
      "Avoid contact with skin and eyes"
    ],
    storageConditions: "Store at -20°C in a dry, dark place",
    disposalGuidelines: "Dispose according to local regulations for chemical waste"
  },
  regulatory: {
    legalStatus: "FOR RESEARCH AND ANALYTICAL PURPOSES ONLY - NOT FOR HUMAN OR VETERINARY USE",
    restrictions: ["Requires valid laboratory credentials"]
  }
});
