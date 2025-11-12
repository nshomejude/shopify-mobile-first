import { useMemo } from "react";
import { products, Product } from "@/data/products";
import { DetailedDrugInteraction, formatInteraction } from "@/types/medicalInfo";

export interface DrugInteraction extends DetailedDrugInteraction {
  drug1: string;
  drug2: string;
  interaction: string;
  severity: "critical" | "major" | "moderate" | "minor" | "unknown";
}

export const useDrugInteractions = (productIds: string[]) => {
  const interactions = useMemo(() => {
    const detectedInteractions: DrugInteraction[] = [];
    
    // Get all products in cart with medical info
    const cartProducts = productIds
      .map(id => products.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined && p.medicalInfo !== undefined);

    // Check each pair of medications for interactions
    for (let i = 0; i < cartProducts.length; i++) {
      for (let j = i + 1; j < cartProducts.length; j++) {
        const product1 = cartProducts[i];
        const product2 = cartProducts[j];
        
        if (!product1.medicalInfo || !product2.medicalInfo) continue;

        // Check if product1's interactions mention product2
        const interactions1 = product1.medicalInfo.drugInteractions;
        const interactions2 = product2.medicalInfo.drugInteractions;

        // Check for direct name matches or common drug class interactions
        interactions1.forEach(interactionRaw => {
          const interaction = formatInteraction(interactionRaw);
          const interactionText = typeof interactionRaw === 'string' ? interactionRaw : interaction.drug;
          const interactionLower = interactionText.toLowerCase();
          const product2NameLower = product2.name.toLowerCase();
          
          // Check if interaction mentions the other drug by name or class
          if (
            interactionLower.includes(product2NameLower) ||
            checkDrugClassInteraction(product2, interactionText)
          ) {
            detectedInteractions.push({
              ...interaction,
              drug1: product1.name,
              drug2: product2.name,
              interaction: interaction.clinicalSignificance || interaction.mechanism
            });
          }
        });

        // Check reverse direction
        interactions2.forEach(interactionRaw => {
          const interaction = formatInteraction(interactionRaw);
          const interactionText = typeof interactionRaw === 'string' ? interactionRaw : interaction.drug;
          const interactionLower = interactionText.toLowerCase();
          const product1NameLower = product1.name.toLowerCase();
          
          if (
            interactionLower.includes(product1NameLower) ||
            checkDrugClassInteraction(product1, interactionText)
          ) {
            // Avoid duplicates
            const isDuplicate = detectedInteractions.some(
              d => 
                (d.drug1 === product2.name && d.drug2 === product1.name) ||
                (d.drug1 === product1.name && d.drug2 === product2.name)
            );
            
            if (!isDuplicate) {
              detectedInteractions.push({
                ...interaction,
                drug1: product2.name,
                drug2: product1.name,
                interaction: interaction.clinicalSignificance || interaction.mechanism
              });
            }
          }
        });
      }
    }

    return detectedInteractions;
  }, [productIds]);

  return interactions;
};

// Helper function to check if a drug belongs to a class mentioned in interactions
const checkDrugClassInteraction = (product: Product, interaction: string): boolean => {
  if (!product.tags) return false;
  
  const interactionLower = interaction.toLowerCase();
  
  // Comprehensive drug class keywords and their tags
  const drugClasses: Record<string, string[]> = {
    // Psychiatric medications
    "ssri": ["ssri", "antidepressant"],
    "snri": ["snri", "antidepressant"],
    "maoi": ["maoi", "antidepressant"],
    "tricyclic": ["tricyclic", "antidepressant"],
    "benzodiazepine": ["benzodiazepine", "anxiolytic", "sedative"],
    "antipsychotic": ["antipsychotic", "typical-antipsychotic", "atypical-antipsychotic"],
    "mood stabilizer": ["mood-stabilizer", "bipolar"],
    "stimulant": ["stimulant", "adhd", "amphetamine", "methylphenidate"],
    
    // Pain & Inflammation
    "opioid": ["opioid", "pain-management", "narcotic"],
    "nsaid": ["nsaid", "anti-inflammatory", "cox-inhibitor"],
    "acetaminophen": ["acetaminophen", "pain-relief"],
    "muscle relaxant": ["muscle-relaxant"],
    
    // Cardiovascular
    "anticoagulant": ["anticoagulant", "blood-thinner"],
    "antiplatelet": ["antiplatelet", "blood-thinner"],
    "beta-blocker": ["beta-blocker", "cardiovascular"],
    "ace inhibitor": ["ace-inhibitor", "cardiovascular"],
    "arb": ["arb", "angiotensin", "cardiovascular"],
    "calcium channel blocker": ["calcium-channel-blocker", "cardiovascular"],
    "diuretic": ["diuretic", "water-pill"],
    "statin": ["statin", "cholesterol", "hmg-coa"],
    "nitrate": ["nitrate", "cardiovascular"],
    "alpha blocker": ["alpha-blocker", "cardiovascular"],
    
    // Metabolic & Endocrine
    "insulin": ["insulin", "diabetes"],
    "oral hypoglycemic": ["diabetes", "antidiabetic", "metformin", "sulfonylurea"],
    "thyroid": ["thyroid", "levothyroxine"],
    "corticosteroid": ["corticosteroid", "steroid", "glucocorticoid"],
    
    // Gastrointestinal
    "proton pump inhibitor": ["ppi", "acid-reducer", "omeprazole"],
    "h2 blocker": ["h2-blocker", "acid-reducer"],
    "antacid": ["antacid"],
    
    // Antimicrobials
    "antibiotic": ["antibiotic", "antibacterial", "penicillin", "fluoroquinolone", "macrolide"],
    "antiviral": ["antiviral", "antihiv", "protease-inhibitor"],
    "antifungal": ["antifungal", "azole"],
    
    // Neurological
    "anticonvulsant": ["anticonvulsant", "epilepsy", "antiepileptic"],
    "dopamine agonist": ["dopamine-agonist", "parkinsons"],
    "anticholinergic": ["anticholinergic"],
    
    // Sexual Health
    "pde5 inhibitor": ["erectile-dysfunction", "pde5", "sildenafil"],
    "alpha reductase inhibitor": ["alpha-reductase", "prostate"],
    
    // CYP450 Interactions (metabolic pathways)
    "cyp3a4 inhibitor": ["cyp3a4-inhibitor", "enzyme-inhibitor"],
    "cyp3a4 inducer": ["cyp3a4-inducer", "enzyme-inducer"],
    "cyp2d6 inhibitor": ["cyp2d6-inhibitor"],
    "cyp2c9 inhibitor": ["cyp2c9-inhibitor"],
    
    // Others
    "immunosuppressant": ["immunosuppressant", "transplant"],
    "chemotherapy": ["chemotherapy", "cancer"],
    "warfarin": ["anticoagulant", "blood-thinner", "warfarin"],
    "sarm": ["sarm", "research-chemical"],
    "peptide": ["peptide", "growth-hormone"],
    "nootropic": ["nootropic", "cognitive-enhancer"]
  };

  // Check if any drug class in the interaction matches product tags
  for (const [className, tags] of Object.entries(drugClasses)) {
    if (interactionLower.includes(className)) {
      if (tags.some(tag => product.tags?.includes(tag))) {
        return true;
      }
    }
  }

  return false;
};

// Determine severity based on interaction text (kept for backward compatibility)
const determineSeverity = (interaction: string): "critical" | "major" | "moderate" | "minor" | "unknown" => {
  const interactionLower = interaction.toLowerCase();
  
  // Critical severity keywords
  const criticalKeywords = [
    "contraindicated",
    "life-threatening",
    "fatal",
    "emergency",
    "dangerous",
    "avoid",
    "do not combine",
    "absolute contraindication",
    "increased risk of death",
    "serotonin syndrome",
    "hypertensive crisis",
    "respiratory depression",
    "cardiac arrest"
  ];
  
  // Major severity keywords
  const majorKeywords = [
    "severe",
    "significant risk",
    "serious",
    "major interaction",
    "requires monitoring",
    "may be contraindicated"
  ];
  
  // Moderate severity keywords
  const moderateKeywords = [
    "caution",
    "monitor",
    "increased risk",
    "may increase",
    "may decrease",
    "adjust dose",
    "use with caution",
    "moderate interaction"
  ];
  
  // Minor severity keywords
  const minorKeywords = [
    "minor",
    "unlikely",
    "minimal",
    "slight",
    "not clinically significant"
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
