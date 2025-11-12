// Helper to add variations and price ranges to products
export const addVariationsAndPrices = (products: any[]) => {
  return products.map(product => {
    const updated = { ...product };
    
    // Calculate price range for existing or new variations
    const hasStrengthOptions = product.strengthOptions && product.strengthOptions.length > 0;
    const hasFormOptions = product.formOptions && product.formOptions.length > 0;
    
    // Add variations if missing
    if (!hasStrengthOptions && !hasFormOptions) {
      const tags = product.tags || [];
      const subcategory = product.subcategory?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";
      
      // SARMs
      if (tags.includes("sarm") || tags.includes("muscle-building") || tags.includes("strength") || 
          subcategory.includes("sarm") || subcategory.includes("peptide")) {
        updated.strengthOptions = ["5mg", "10mg", "25mg"];
        updated.formOptions = ["Capsule", "Powder"];
      }
      // Peptides
      else if (tags.includes("peptide") || tags.includes("gh-secretagogue")) {
        updated.strengthOptions = ["2mg", "5mg", "10mg"];
        updated.formOptions = ["Powder", "Solution"];
      }
      // Nootropics
      else if (tags.includes("nootropic") || tags.includes("cognitive") || category.includes("cognitive")) {
        updated.strengthOptions = ["100mg", "250mg", "500mg"];
        updated.formOptions = ["Capsule", "Powder"];
      }
      // Research chemicals
      else if (tags.includes("research-chemical") || category.includes("research") || subcategory.includes("research")) {
        updated.strengthOptions = ["100mg", "250mg", "500mg", "1g"];
        updated.formOptions = ["Powder", "Solution"];
      }
      // Psychedelics
      else if (tags.includes("psychedelic") || subcategory.includes("psychedelic")) {
        updated.strengthOptions = ["100mg", "250mg", "500mg", "1g"];
        updated.formOptions = ["Capsule", "Powder"];
      }
      // Cannabinoids
      else if (tags.includes("cannabinoid") || tags.includes("cbd") || tags.includes("thc")) {
        updated.strengthOptions = ["10mg", "25mg", "50mg"];
        updated.formOptions = ["Gummy", "Tincture", "Capsule"];
      }
      // Supplements and vitamins
      else if (category.includes("supplement") || category.includes("vitamin") || category.includes("wellness")) {
        updated.strengthOptions = ["500mg", "1000mg", "2000mg"];
        updated.formOptions = ["Capsule", "Tablet"];
      }
    }
    
    // Calculate and add price range
    const finalHasStrength = updated.strengthOptions && updated.strengthOptions.length > 0;
    const finalHasForm = updated.formOptions && updated.formOptions.length > 0;
    
    if ((finalHasStrength || finalHasForm) && !updated.variationPrices) {
      const basePrice = product.price;
      let maxPrice = basePrice;
      
      // Price multipliers based on variations
      if (finalHasStrength) {
        // Higher strengths cost more
        if (basePrice < 10) {
          maxPrice = basePrice * 1.8; // 80% increase for cheap items
        } else if (basePrice < 30) {
          maxPrice = basePrice * 1.6; // 60% increase
        } else if (basePrice < 50) {
          maxPrice = basePrice * 1.5; // 50% increase
        } else if (basePrice < 100) {
          maxPrice = basePrice * 1.4; // 40% increase
        } else {
          maxPrice = basePrice * 1.3; // 30% increase for expensive items
        }
      }
      
      if (finalHasForm) {
        // Different forms add extra cost
        maxPrice = maxPrice * 1.2; // 20% more for premium forms
      }
      
      updated.variationPrices = {
        minPrice: Math.round(basePrice * 100) / 100,
        maxPrice: Math.round(maxPrice * 100) / 100
      };
    }
    
    return updated;
  });
};
