# Product Data Migration Checklist

## Overview
This platform has **520+ products** that need comprehensive medical/research information updates to match industry standards (drugs.com format for drugs, standard MSDS format for research chemicals).

## Current Status
- ✅ New data structures created (`MedicalInfo`, `ResearchChemicalInfo`)
- ✅ Display components created (`DrugInformationTabs`, `ResearchChemicalTabs`)
- ✅ Migration helper utilities created
- ⏳ Product data updates in progress

## Products by Category

### Prescription Drugs (161 products: rx-001 to rx-080e)
**Format:** Full drugs.com structure with Uses, Side Effects, Warnings, Before Taking, Dosage, Interactions, FAQ

#### Pain Management (12 products)
- [x] rx-001: Paracetamol - ✅ Has basic info, needs expansion
- [x] rx-002: Ibuprofen - ✅ Has comprehensive description
- [ ] rx-003: Naproxen - ⏳ Needs full update
- [ ] rx-004 to rx-012 - Pending

#### Psychiatric Medications (30+ products)
- [ ] rx-013 to rx-043d - Pending

#### Cardiovascular Drugs (20+ products)
- [ ] rx-044 to rx-064 - Pending

#### Metabolic/Endocrine (15+ products)
- [ ] rx-065 to rx-080e - Pending

### Research Chemicals (360+ products: rc-081 onwards)
**Format:** Industry standard with Chemical Properties, Research Applications, Safety/Handling, Lab Guidelines, Regulatory, Documentation

#### SARMs (40+ products)
- [ ] rc-081 to rc-120 - Pending

#### Peptides (30+ products)
- [ ] rc-176 to rc-205 - Pending

#### Nootropics (50+ products)
- [ ] rc-206 to rc-255 - Pending

#### Additional Research Chemicals (240+ products)
- [ ] rc-256 to rc-XXX - Pending

## Migration Strategy

### Phase 1: High-Priority Products (Week 1)
1. Top 10 best-selling products
2. Featured products on homepage
3. Products with existing partial data

### Phase 2: Category Leaders (Week 2-3)
1. One comprehensive example per category
2. Most popular in each subcategory
3. Products with high traffic

### Phase 3: Bulk Migration (Ongoing)
1. Systematic category-by-category update
2. Use migration helper templates
3. Batch updates for similar products

## Content Requirements

### For Each Drug (Minimum Standards):
- **Description:** 2000+ words comprehensive overview
- **Uses:** Detailed conditions with explanations
- **Side Effects:** Common (5+), Serious (5+), with notes
- **Warnings:** Black box if applicable, 3+ general warnings
- **Before Taking:** 5+ contraindications, 5+ precautions, pregnancy/breastfeeding info
- **Dosage:** Adult/pediatric/geriatric with detailed administration
- **Interactions:** 5+ specific interactions with mechanisms
- **FAQ:** 3-5 common questions with detailed answers

### For Each Research Chemical (Minimum Standards):
- **Chemical Properties:** Complete IUPAC name, formula, molecular weight, CAS, purity
- **Research Applications:** 3+ primary uses, study areas, mechanism
- **Safety Handling:** GHS statements, PPE requirements, storage
- **Lab Guidelines:** Concentrations, preparation notes, stability
- **Regulatory:** Legal status, restrictions, certifications
- **Documentation:** COA, MSDS, NMR, HPLC availability

## Resources

- Migration Helper: `src/utils/productMigrationHelper.ts`
- Templates: Use `drugInfoTemplate()` and `researchChemicalTemplate()`
- Reference: https://www.drugs.com for drug format
- Type Definitions: `src/types/medicalInfo.ts`, `src/types/researchChemicalInfo.ts`

## Notes

- Each product update is a separate commit
- Test display on ProductDetail page after each update
- Verify all required sections are complete
- Ensure professional medical/scientific terminology
- Demo mode banners must remain prominent
- All data is FOR DEMONSTRATION PURPOSES ONLY
