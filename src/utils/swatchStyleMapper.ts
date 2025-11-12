import { SwatchStyle } from "@/data/products";

/**
 * Maps product categories and subcategories to their default swatch styles
 */
export const getSwatchStyleForProduct = (
  category: string,
  subcategory?: string,
  tags?: string[]
): SwatchStyle => {
  // Check tags first for more specific matching
  if (tags) {
    if (tags.includes("injectable") || tags.includes("injection")) {
      return "syringe";
    }
    if (tags.includes("capsule")) {
      return "capsule";
    }
    if (tags.includes("tablet")) {
      return "tablet-icon";
    }
  }

  // Research chemicals
  if (category === "research-chemicals") {
    return "lab-flask";
  }

  // Psychedelics
  if (
    category === "psychedelics" ||
    subcategory?.includes("psychedelic") ||
    tags?.includes("psychedelic")
  ) {
    return "mushroom";
  }

  // Cannabis and cannabinoids
  if (
    category === "cannabis" ||
    category === "cannabinoids" ||
    subcategory?.includes("cannabis") ||
    subcategory?.includes("cannabinoid") ||
    tags?.includes("cannabis") ||
    tags?.includes("cannabinoid") ||
    tags?.includes("cbd") ||
    tags?.includes("thc")
  ) {
    return "cannabis-leaf";
  }

  // Prescription drugs - check form
  if (category === "prescription-drugs") {
    if (subcategory === "pain-management" || tags?.includes("opioid")) {
      return "pill-icon";
    }
    if (tags?.includes("injectable") || tags?.includes("injection")) {
      return "syringe";
    }
    if (tags?.includes("capsule")) {
      return "capsule";
    }
    // Default for prescription drugs
    return "tablet-icon";
  }

  // Supplements and vitamins
  if (category === "supplements" || category === "vitamins") {
    return "capsule";
  }

  // Wellness and recovery
  if (category === "wellness-recovery") {
    return "pill-icon";
  }

  // Default fallback
  return "checkbox-rectangular";
};
