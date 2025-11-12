import { useMemo } from "react";
import { products, Product } from "@/data/products";

export interface DrugInteraction {
  drug1: string;
  drug2: string;
  interaction: string;
  severity: "high" | "medium" | "low";
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
        interactions1.forEach(interaction => {
          const interactionLower = interaction.toLowerCase();
          const product2NameLower = product2.name.toLowerCase();
          
          // Check if interaction mentions the other drug by name or class
          if (
            interactionLower.includes(product2NameLower) ||
            checkDrugClassInteraction(product2, interaction)
          ) {
            detectedInteractions.push({
              drug1: product1.name,
              drug2: product2.name,
              interaction: interaction,
              severity: determineSeverity(interaction)
            });
          }
        });

        // Check reverse direction
        interactions2.forEach(interaction => {
          const interactionLower = interaction.toLowerCase();
          const product1NameLower = product1.name.toLowerCase();
          
          if (
            interactionLower.includes(product1NameLower) ||
            checkDrugClassInteraction(product1, interaction)
          ) {
            // Avoid duplicates
            const isDuplicate = detectedInteractions.some(
              d => 
                (d.drug1 === product2.name && d.drug2 === product1.name) ||
                (d.drug1 === product1.name && d.drug2 === product2.name)
            );
            
            if (!isDuplicate) {
              detectedInteractions.push({
                drug1: product2.name,
                drug2: product1.name,
                interaction: interaction,
                severity: determineSeverity(interaction)
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
  
  // Common drug class keywords and their tags
  const drugClasses: Record<string, string[]> = {
    "ssri": ["ssri", "antidepressant"],
    "maoi": ["maoi", "antidepressant"],
    "benzodiazepine": ["benzodiazepine", "anxiolytic", "sedative"],
    "opioid": ["opioid", "pain-management"],
    "nsaid": ["nsaid", "anti-inflammatory"],
    "anticoagulant": ["anticoagulant", "blood-thinner"],
    "beta-blocker": ["beta-blocker", "cardiovascular"],
    "ace inhibitor": ["ace-inhibitor", "cardiovascular"],
    "arb": ["arb", "angiotensin", "cardiovascular"],
    "diuretic": ["diuretic"],
    "statin": ["statin", "cholesterol"],
    "pde5 inhibitor": ["erectile-dysfunction", "pde5"],
    "antipsychotic": ["antipsychotic"],
    "antibiotic": ["antibiotic"],
    "antiviral": ["antiviral"],
    "corticosteroid": ["corticosteroid", "steroid"],
    "stimulant": ["stimulant", "adhd"],
    "anticonvulsant": ["anticonvulsant", "epilepsy"],
    "proton pump inhibitor": ["ppi", "acid-reducer"],
    "warfarin": ["anticoagulant", "blood-thinner"],
    "insulin": ["insulin", "diabetes"],
    "oral hypoglycemic": ["diabetes", "antidiabetic"]
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

// Determine severity based on interaction text
const determineSeverity = (interaction: string): "high" | "medium" | "low" => {
  const interactionLower = interaction.toLowerCase();
  
  // High severity keywords
  const highSeverityKeywords = [
    "contraindicated",
    "severe",
    "life-threatening",
    "fatal",
    "emergency",
    "dangerous",
    "avoid",
    "do not combine",
    "absolute contraindication",
    "increased risk of death",
    "serotonin syndrome",
    "hypertensive crisis"
  ];
  
  // Medium severity keywords
  const mediumSeverityKeywords = [
    "caution",
    "monitor",
    "increased risk",
    "may increase",
    "may decrease",
    "adjust dose",
    "use with caution"
  ];
  
  if (highSeverityKeywords.some(keyword => interactionLower.includes(keyword))) {
    return "high";
  }
  
  if (mediumSeverityKeywords.some(keyword => interactionLower.includes(keyword))) {
    return "medium";
  }
  
  return "low";
};
