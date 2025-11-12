import { products, Product } from "@/data/products";

// Helper to calculate price range based on variations
const calculatePriceRange = (basePrice: number, hasStrength: boolean, hasForm: boolean): { minPrice: number; maxPrice: number } => {
  let minPrice = basePrice;
  let maxPrice = basePrice;
  
  if (hasStrength) {
    // Higher strengths typically cost more (20-100% more depending on base price)
    if (basePrice < 10) {
      maxPrice = basePrice * 1.8; // 80% increase for cheap items
    } else if (basePrice < 30) {
      maxPrice = basePrice * 1.5; // 50% increase for mid-range
    } else if (basePrice < 100) {
      maxPrice = basePrice * 1.4; // 40% increase
    } else {
      maxPrice = basePrice * 1.3; // 30% increase for expensive items
    }
  }
  
  if (hasForm) {
    // Extended-release, injections, etc. add 15-25% more
    maxPrice = maxPrice * 1.2;
  }
  
  return {
    minPrice: Math.round(minPrice * 100) / 100,
    maxPrice: Math.round(maxPrice * 100) / 100
  };
};

// Add default variations to products missing them
const addDefaultVariations = (product: Product): Product => {
  const updated = { ...product };
  
  // Determine if product needs variations
  const needsVariations = !product.strengthOptions && !product.formOptions;
  
  if (needsVariations) {
    const category = product.category.toLowerCase();
    const subcategory = product.subcategory?.toLowerCase() || "";
    const tags = product.tags || [];
    
    // SARMs
    if (tags.includes("sarm") || subcategory.includes("sarm")) {
      updated.strengthOptions = ["5mg", "10mg", "25mg"];
      updated.formOptions = ["Capsule", "Powder"];
    }
    // Peptides
    else if (tags.includes("peptide") || subcategory.includes("peptide")) {
      updated.strengthOptions = ["2mg", "5mg", "10mg"];
      updated.formOptions = ["Powder", "Injectable"];
    }
    // Nootropics
    else if (tags.includes("nootropic") || subcategory.includes("nootropic")) {
      updated.strengthOptions = ["100mg", "250mg", "500mg"];
      updated.formOptions = ["Capsule", "Powder"];
    }
    // Psychedelics
    else if (tags.includes("psychedelic") || subcategory.includes("psychedelic")) {
      updated.strengthOptions = ["100mg", "250mg", "500mg", "1g"];
      updated.formOptions = ["Capsule", "Powder"];
    }
    // Cannabinoids
    else if (tags.includes("cannabinoid") || subcategory.includes("cannabinoid")) {
      updated.strengthOptions = ["10mg", "25mg", "50mg", "100mg"];
      updated.formOptions = ["Gummy", "Tincture", "Capsule"];
    }
    // Research chemicals
    else if (category.includes("research") || tags.includes("research-chemical")) {
      updated.strengthOptions = ["100mg", "250mg", "500mg", "1g"];
      updated.formOptions = ["Powder", "Solution"];
    }
    // Vitamins & Supplements
    else if (category.includes("supplement") || category.includes("vitamin")) {
      updated.strengthOptions = ["500mg", "1000mg", "2000mg"];
      updated.formOptions = ["Capsule", "Tablet", "Gummy"];
    }
    // Wellness products
    else if (category.includes("wellness")) {
      updated.strengthOptions = ["Regular", "Extra Strength", "Maximum"];
      updated.formOptions = ["Capsule", "Tablet"];
    }
    // Default for any other products
    else {
      updated.strengthOptions = ["Low Dose", "Standard", "High Dose"];
      updated.formOptions = ["Capsule", "Tablet"];
    }
  }
  
  // Calculate price range based on variations
  const hasStrength = !!(updated.strengthOptions && updated.strengthOptions.length > 0);
  const hasForm = !!(updated.formOptions && updated.formOptions.length > 0);
  
  if (hasStrength || hasForm) {
    updated.variationPrices = calculatePriceRange(product.price, hasStrength, hasForm);
  }
  
  return updated;
};

// Generate updated products array
export const updatedProducts = products.map(addDefaultVariations);

// Log statistics
const productsWithVariations = updatedProducts.filter(p => p.strengthOptions || p.formOptions).length;
const productsWithPriceRanges = updatedProducts.filter(p => p.variationPrices).length;

console.log(`Updated ${updatedProducts.length} products`);
console.log(`Products with variations: ${productsWithVariations}`);
console.log(`Products with price ranges: ${productsWithPriceRanges}`);
