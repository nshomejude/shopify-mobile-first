export interface MedicalInfo {
  dosage: {
    standard: string;
    administration: string[];
    specialPopulations?: string;
  };
  sideEffects: {
    common: string[];
    serious: string[];
  };
  contraindications: string[];
  drugInteractions: string[];
}

export type SwatchStyle = 
  | "checkbox-rectangular" 
  | "pill-icon" 
  | "tablet-icon" 
  | "lab-flask" 
  | "mushroom" 
  | "cannabis-leaf"
  | "syringe"
  | "capsule"
  | "default";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  subcategory?: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  requiresPrescription?: boolean;
  requiresLabLicense?: boolean;
  strengthOptions?: string[];
  formOptions?: string[];
  tags?: string[];
  medicalInfo?: MedicalInfo;
  swatchStyle?: SwatchStyle;
  variationPrices?: {
    minPrice: number;
    maxPrice: number;
  };
}

export const products: Product[] = [
  // I. PRESCRIPTION DRUGS - Pain, Psychiatric, Metabolic, Cardiovascular (1-80)
  
  // Pain & Analgesics (1-12)
  {
    id: "rx-001",
    name: "Paracetamol / Acetaminophen",
    description: "Effective painkiller and fever reducer for mild to moderate pain",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.8,
    reviews: 1247,
    requiresPrescription: false,
    strengthOptions: ["325mg", "500mg", "650mg"],
    formOptions: ["Tablet", "Capsule", "Liquid"],
    tags: ["pain-relief", "fever"],
    variationPrices: {
      minPrice: 4.99,
      maxPrice: 9.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 325-650mg every 4-6 hours as needed. Maximum 4000mg per day.",
        administration: [
          "Take with or without food",
          "Swallow tablets whole with water",
          "For liquid form, use measuring device provided",
          "Do not exceed recommended dosage"
        ],
        specialPopulations: "Reduced doses for liver disease. Children: dose based on weight (10-15mg/kg every 4-6 hours)."
      },
      sideEffects: {
        common: ["Nausea", "Stomach upset", "Headache"],
        serious: ["Severe allergic reactions (rash, itching, swelling)", "Liver damage with overdose", "Dark urine or yellowing of skin/eyes", "Unusual bleeding or bruising"]
      },
      contraindications: [
        "Severe liver disease or liver failure",
        "Known hypersensitivity to acetaminophen",
        "Active alcohol use disorder"
      ],
      drugInteractions: [
        "Warfarin - may increase bleeding risk",
        "Alcohol - increases risk of liver damage",
        "Other acetaminophen-containing products - risk of overdose",
        "Carbamazepine, phenytoin - may reduce effectiveness"
      ]
    }
  },
  {
    id: "rx-002",
    name: "Ibuprofen",
    description: "NSAID for pain relief and inflammation reduction",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.8,
    reviews: 789,
    requiresPrescription: false,
    strengthOptions: ["200mg", "400mg", "600mg", "800mg"],
    formOptions: ["Tablet", "Capsule"],
    tags: ["pain-relief", "anti-inflammatory"],
    variationPrices: {
      minPrice: 6.99,
      maxPrice: 12.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 200-400mg every 4-6 hours. Maximum 1200mg daily (OTC) or 3200mg daily (prescription).",
        administration: [
          "Take with food or milk to reduce stomach upset",
          "Swallow tablets whole with full glass of water",
          "Do not lie down for 10 minutes after taking",
          "Use lowest effective dose for shortest duration"
        ],
        specialPopulations: "Avoid in third trimester of pregnancy. Reduce dose in elderly and renal impairment."
      },
      sideEffects: {
        common: ["Upset stomach", "Heartburn", "Nausea", "Dizziness", "Mild headache"],
        serious: ["GI bleeding or ulcers", "Heart attack or stroke", "Severe allergic reactions", "Kidney problems", "Liver damage", "High blood pressure"]
      },
      contraindications: [
        "History of peptic ulcer or GI bleeding",
        "Severe heart failure",
        "Active inflammatory bowel disease",
        "Third trimester of pregnancy",
        "Allergy to NSAIDs or aspirin"
      ],
      drugInteractions: [
        "Aspirin - may reduce cardioprotective effect",
        "Warfarin, anticoagulants - increased bleeding risk",
        "ACE inhibitors, ARBs - reduced effectiveness, kidney issues",
        "Lithium - increased lithium levels",
        "Methotrexate - increased toxicity",
        "Corticosteroids - increased GI bleeding risk"
      ]
    }
  },
  {
    id: "rx-003",
    name: "Naproxen",
    description: "Long-acting NSAID for pain and inflammation",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.7,
    reviews: 456,
    requiresPrescription: false,
    strengthOptions: ["220mg", "375mg", "500mg"],
    formOptions: ["Tablet"],
    tags: ["pain-relief", "anti-inflammatory"],
    variationPrices: {
      minPrice: 8.99,
      maxPrice: 14.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 220-550mg twice daily. Maximum 1500mg per day.",
        administration: [
          "Take with food or antacid to minimize GI upset",
          "Swallow tablet whole with full glass of water",
          "Take at same times each day for chronic conditions",
          "May take 2 weeks for full anti-inflammatory effect"
        ],
        specialPopulations: "Avoid in pregnancy, especially third trimester. Reduce dose in elderly patients and those with kidney disease."
      },
      sideEffects: {
        common: ["Heartburn", "Stomach pain", "Nausea", "Headache", "Dizziness", "Drowsiness"],
        serious: ["Stomach/intestinal bleeding", "Heart attack or stroke", "Kidney failure", "Severe skin reactions", "Liver problems"]
      },
      contraindications: [
        "History of asthma, urticaria with NSAIDs",
        "Active peptic ulcer disease",
        "Severe renal or hepatic impairment",
        "Post-CABG surgery",
        "Third trimester pregnancy"
      ],
      drugInteractions: [
        "Anticoagulants (warfarin) - increased bleeding risk",
        "Aspirin - reduced cardiovascular protective effect",
        "SSRIs - increased GI bleeding risk",
        "ACE inhibitors/ARBs - reduced antihypertensive effect",
        "Methotrexate - increased toxicity",
        "Cyclosporine - increased nephrotoxicity"
      ]
    }
  },
  {
    id: "rx-004",
    name: "Diclofenac",
    description: "Potent NSAID for pain and inflammation",
    price: 11.99,
    oldPrice: 19.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.6,
    reviews: 334,
    requiresPrescription: true,
    strengthOptions: ["50mg", "75mg", "100mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["pain-relief", "anti-inflammatory"],
    variationPrices: {
      minPrice: 11.99,
      maxPrice: 19.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 50mg 2-3 times daily or 75mg twice daily. Maximum 150mg per day.",
        administration: [
          "Take with food or milk to reduce GI upset",
          "Swallow tablets whole with water",
          "Extended-release: take once or twice daily",
          "Use lowest effective dose for shortest duration"
        ],
        specialPopulations: "Avoid in elderly due to increased CV and GI risk. Not recommended during pregnancy, especially third trimester."
      },
      sideEffects: {
        common: ["Nausea", "Dyspepsia", "Abdominal pain", "Headache", "Dizziness"],
        serious: ["Cardiovascular events (MI, stroke)", "GI bleeding/perforation", "Hepatotoxicity", "Renal impairment", "Severe skin reactions"]
      },
      contraindications: [
        "Active peptic ulcer or GI bleeding",
        "Severe heart failure",
        "Post-CABG surgery",
        "Third trimester pregnancy",
        "Hypersensitivity to NSAIDs"
      ],
      drugInteractions: [
        "Anticoagulants - increased bleeding risk",
        "ACE inhibitors/ARBs - reduced efficacy, nephrotoxicity",
        "Diuretics - reduced effectiveness",
        "Methotrexate - increased toxicity",
        "Cyclosporine - increased nephrotoxicity"
      ]
    }
  },
  {
    id: "rx-005",
    name: "Aspirin",
    description: "Analgesic and antiplatelet agent for pain and cardiovascular protection",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.7,
    reviews: 892,
    requiresPrescription: false,
    strengthOptions: ["81mg", "325mg", "500mg"],
    formOptions: ["Tablet", "Chewable"],
    tags: ["pain-relief", "heart-health"],
    variationPrices: {
      minPrice: 5.99,
      maxPrice: 10.99
    },
    medicalInfo: {
      dosage: {
        standard: "Pain: 325-650mg every 4 hours. Cardioprotection: 81-325mg once daily.",
        administration: [
          "Take with food or milk if stomach upset occurs",
          "For heart protection, take at same time daily",
          "Chewable form: chew thoroughly before swallowing",
          "Do not exceed recommended dose"
        ],
        specialPopulations: "Children: use only for specific conditions under medical supervision (Reye's syndrome risk). Elderly: use lower doses."
      },
      sideEffects: {
        common: ["Heartburn", "Upset stomach", "Nausea"],
        serious: ["GI bleeding", "Hemorrhagic stroke", "Severe allergic reactions", "Reye's syndrome in children", "Tinnitus with overdose"]
      },
      contraindications: [
        "Active peptic ulcer disease",
        "Hemophilia or bleeding disorders",
        "Children with viral infections (Reye's syndrome risk)",
        "Severe renal or hepatic impairment",
        "Third trimester pregnancy"
      ],
      drugInteractions: [
        "Warfarin, anticoagulants - increased bleeding risk",
        "Other NSAIDs - increased GI toxicity",
        "Methotrexate - increased toxicity",
        "ACE inhibitors - reduced antihypertensive effect",
        "Alcohol - increased GI bleeding risk"
      ]
    }
  },
  {
    id: "rx-006",
    name: "Tramadol",
    description: "Opioid analgesic for moderate to moderately severe pain",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.5,
    reviews: 178,
    requiresPrescription: true,
    strengthOptions: ["50mg", "100mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["pain-relief", "opioid", "controlled"],
    variationPrices: {
      minPrice: 28.99,
      maxPrice: 42.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 50-100mg every 4-6 hours as needed. Maximum 400mg per day. Start with lowest dose.",
        administration: [
          "Take with or without food",
          "Swallow tablets whole, do not crush or break",
          "For extended-release: take once daily at same time",
          "Taper dose gradually when discontinuing after long-term use"
        ],
        specialPopulations: "Avoid in children under 12. Reduce dose in elderly, renal or hepatic impairment. Not recommended during pregnancy or breastfeeding."
      },
      sideEffects: {
        common: ["Dizziness", "Nausea", "Constipation", "Headache", "Drowsiness", "Dry mouth"],
        serious: ["Respiratory depression", "Seizures", "Serotonin syndrome", "Severe allergic reactions", "Addiction and dependence", "Withdrawal symptoms"]
      },
      contraindications: [
        "Acute intoxication with alcohol, hypnotics, or opioids",
        "Severe respiratory depression",
        "Uncontrolled epilepsy or seizure disorder",
        "Use of MAOIs within 14 days",
        "Children under 12 years"
      ],
      drugInteractions: [
        "MAOIs - risk of serotonin syndrome",
        "SSRIs, SNRIs - increased seizure risk and serotonin syndrome",
        "CNS depressants (benzodiazepines, alcohol) - enhanced sedation and respiratory depression",
        "Carbamazepine - reduced tramadol effectiveness",
        "Warfarin - may increase bleeding risk",
        "CYP2D6 inhibitors (quinidine, fluoxetine) - altered tramadol metabolism"
      ]
    }
  },
  {
    id: "rx-007",
    name: "Morphine",
    description: "Potent opioid analgesic for severe pain management",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.8,
    reviews: 234,
    requiresPrescription: true,
    strengthOptions: ["15mg", "30mg", "60mg", "100mg"],
    formOptions: ["Tablet", "Extended-Release", "Injectable"],
    tags: ["pain-relief", "opioid", "controlled"],
    variationPrices: {
      minPrice: 45.99,
      maxPrice: 74.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: Immediate-release: 10-30mg every 4 hours. Extended-release: Start 15mg every 12 hours, titrate carefully.",
        administration: [
          "Take with or without food",
          "Extended-release: swallow whole, do not crush, chew or dissolve",
          "Individualize dosing based on pain severity and response",
          "Taper gradually when discontinuing to avoid withdrawal"
        ],
        specialPopulations: "Not for children under 18 for extended-release. Reduce dose in elderly, renal/hepatic impairment. Avoid in pregnancy."
      },
      sideEffects: {
        common: ["Constipation", "Nausea", "Vomiting", "Drowsiness", "Dizziness", "Itching"],
        serious: ["Respiratory depression", "Addiction and dependence", "Hypotension", "Severe constipation/bowel obstruction", "Seizures", "Anaphylaxis"]
      },
      contraindications: [
        "Significant respiratory depression",
        "Acute or severe bronchial asthma",
        "Known or suspected GI obstruction",
        "Concurrent MAO inhibitor use",
        "Hypersensitivity to morphine"
      ],
      drugInteractions: [
        "CNS depressants (benzodiazepines, alcohol) - severe sedation, respiratory depression",
        "MAOIs - serotonin syndrome",
        "Muscle relaxants - increased respiratory depression",
        "Anticholinergics - increased constipation, urinary retention",
        "CYP450 inducers - reduced morphine levels"
      ]
    }
  },
  {
    id: "rx-008",
    name: "Oxycodone",
    description: "Opioid analgesic for moderate to severe pain",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.7,
    reviews: 189,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "15mg", "20mg", "30mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["pain-relief", "opioid", "controlled"],
    variationPrices: {
      minPrice: 52.99,
      maxPrice: 84.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: Immediate-release: 5-15mg every 4-6 hours. Extended-release: 10mg every 12 hours, titrate as needed.",
        administration: [
          "Take with or without food",
          "Extended-release tablets: swallow whole, do not crush or chew",
          "Use lowest effective dose",
          "Taper dose gradually when stopping after prolonged use"
        ],
        specialPopulations: "Start with lower doses in elderly. Reduce dose with hepatic/renal impairment. Not recommended in pregnancy or breastfeeding."
      },
      sideEffects: {
        common: ["Constipation", "Nausea", "Vomiting", "Drowsiness", "Dizziness", "Dry mouth", "Sweating"],
        serious: ["Respiratory depression", "Physical dependence and addiction", "Hypotension", "Seizures", "Adrenal insufficiency"]
      },
      contraindications: [
        "Significant respiratory depression",
        "Acute or severe bronchial asthma",
        "Known or suspected paralytic ileus",
        "Hypersensitivity to oxycodone"
      ],
      drugInteractions: [
        "CNS depressants (benzodiazepines, alcohol) - fatal respiratory depression",
        "CYP3A4 inhibitors (ketoconazole, erythromycin) - increased oxycodone levels",
        "CYP3A4 inducers (rifampin, carbamazepine) - reduced effectiveness",
        "Anticholinergics - severe constipation",
        "MAOIs - serotonin syndrome"
      ]
    }
  },
  {
    id: "rx-009",
    name: "Hydrocodone",
    description: "Opioid analgesic often combined with acetaminophen for pain relief",
    price: 48.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.6,
    reviews: 267,
    requiresPrescription: true,
    strengthOptions: ["5mg", "7.5mg", "10mg"],
    formOptions: ["Tablet", "Capsule"],
    tags: ["pain-relief", "opioid", "controlled"],
    variationPrices: {
      minPrice: 48.99,
      maxPrice: 74.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 5-10mg every 4-6 hours as needed. Maximum depends on formulation (often combined with acetaminophen).",
        administration: [
          "Take with food or milk to reduce nausea",
          "Swallow tablets/capsules whole",
          "Monitor total daily acetaminophen if in combination product",
          "Reduce dose gradually when stopping"
        ],
        specialPopulations: "Lower doses for elderly. Reduce with renal or hepatic impairment. Avoid during pregnancy and breastfeeding."
      },
      sideEffects: {
        common: ["Constipation", "Nausea", "Vomiting", "Dizziness", "Drowsiness", "Lightheadedness"],
        serious: ["Respiratory depression", "Addiction and abuse", "Hepatotoxicity (if combined with acetaminophen)", "Severe hypotension", "Seizures"]
      },
      contraindications: [
        "Significant respiratory depression",
        "Acute or severe asthma",
        "Known or suspected GI obstruction",
        "Hypersensitivity to hydrocodone or acetaminophen"
      ],
      drugInteractions: [
        "CNS depressants (benzodiazepines, alcohol) - severe respiratory depression",
        "CYP3A4 inhibitors - increased hydrocodone levels",
        "CYP3A4 inducers - decreased effectiveness",
        "Anticholinergics - increased constipation and urinary retention",
        "MAOIs - serotonin syndrome risk"
      ]
    }
  },
  {
    id: "rx-010",
    name: "Fentanyl",
    description: "Potent opioid analgesic for severe pain (transdermal/injectable)",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.9,
    reviews: 145,
    requiresPrescription: true,
    strengthOptions: ["12mcg/hr", "25mcg/hr", "50mcg/hr", "75mcg/hr", "100mcg/hr"],
    formOptions: ["Transdermal Patch", "Injectable"],
    tags: ["pain-relief", "opioid", "controlled"],
    medicalInfo: {
      dosage: {
        standard: "Transdermal: Start 12-25mcg/hr patch every 72 hours. Only for opioid-tolerant patients. Injectable: highly variable, medical supervision required.",
        administration: [
          "Patches: Apply to flat, non-irritated skin on upper body",
          "Rotate application sites",
          "Do not cut patches",
          "Dispose of used patches by folding sticky sides together",
          "Only for patients already on opioids (opioid-tolerant)"
        ],
        specialPopulations: "Not for opioid-naive patients. Extreme caution in elderly. Not for acute or postoperative pain. Contraindicated in pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Vomiting", "Constipation", "Drowsiness", "Dizziness", "Application site reactions"],
        serious: ["Life-threatening respiratory depression", "Severe addiction potential", "Hypotension", "Bradycardia", "Chest wall rigidity", "Fatal overdose"]
      },
      contraindications: [
        "Opioid non-tolerant patients",
        "Acute or intermittent pain",
        "Postoperative pain",
        "Severe respiratory disease",
        "Known hypersensitivity"
      ],
      drugInteractions: [
        "CNS depressants - fatal respiratory depression",
        "CYP3A4 inhibitors (ritonavir, ketoconazole) - dangerous increase in fentanyl levels",
        "CYP3A4 inducers - reduced effectiveness",
        "Serotonergic drugs - serotonin syndrome",
        "Muscle relaxants - increased respiratory depression"
      ]
    }
  },
  {
    id: "rx-011",
    name: "Codeine",
    description: "Opioid analgesic and antitussive for mild to moderate pain",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.5,
    reviews: 378,
    requiresPrescription: true,
    strengthOptions: ["15mg", "30mg", "60mg"],
    formOptions: ["Tablet", "Liquid"],
    tags: ["pain-relief", "opioid", "cough"],
    medicalInfo: {
      dosage: {
        standard: "Adults: Pain: 15-60mg every 4-6 hours as needed. Cough: 10-20mg every 4-6 hours. Maximum 360mg per day.",
        administration: [
          "Take with food or milk to reduce nausea",
          "Liquid: use measuring device provided",
          "Do not exceed recommended dose",
          "Avoid in children under 12"
        ],
        specialPopulations: "Contraindicated in children under 12 and all children after tonsillectomy. Not recommended in pregnancy or breastfeeding."
      },
      sideEffects: {
        common: ["Constipation", "Nausea", "Vomiting", "Drowsiness", "Dizziness", "Lightheadedness"],
        serious: ["Respiratory depression", "Dependence and addiction", "Severe hypotension", "Life-threatening respiratory depression in ultra-rapid metabolizers"]
      },
      contraindications: [
        "Children under 12 years",
        "Post-tonsillectomy/adenoidectomy in pediatric patients",
        "Significant respiratory depression",
        "Acute or severe asthma",
        "Ultra-rapid CYP2D6 metabolizers"
      ],
      drugInteractions: [
        "CNS depressants (alcohol, benzodiazepines) - enhanced sedation",
        "CYP2D6 inhibitors (fluoxetine, paroxetine) - reduced analgesic effect",
        "Anticholinergics - severe constipation",
        "MAOIs - serotonin syndrome risk",
        "Quinidine - reduced codeine effectiveness"
      ]
    }
  },
  {
    id: "rx-012",
    name: "Celecoxib",
    description: "COX-2 inhibitor for pain and inflammation with reduced GI side effects",
    price: 34.99,
    oldPrice: 59.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "pain-management",
    inStock: true,
    rating: 4.7,
    reviews: 234,
    requiresPrescription: true,
    strengthOptions: ["100mg", "200mg"],
    formOptions: ["Capsule"],
    tags: ["pain-relief", "anti-inflammatory"],
    medicalInfo: {
      dosage: {
        standard: "Osteoarthritis: 200mg once daily or 100mg twice daily. Rheumatoid arthritis: 100-200mg twice daily. Acute pain: 400mg initially, then 200mg if needed.",
        administration: [
          "Take with or without food",
          "Swallow capsules whole with water",
          "Use lowest effective dose for shortest duration",
          "May take with food if stomach upset occurs"
        ],
        specialPopulations: "Reduce dose by 50% in poor CYP2C9 metabolizers. Use caution in elderly. Avoid in pregnancy, especially third trimester."
      },
      sideEffects: {
        common: ["Dyspepsia", "Diarrhea", "Abdominal pain", "Nausea", "Headache", "Upper respiratory infection"],
        serious: ["Cardiovascular thrombotic events (MI, stroke)", "GI bleeding/perforation", "Hepatotoxicity", "Renal toxicity", "Serious skin reactions", "Hypertension"]
      },
      contraindications: [
        "Sulfonamide allergy",
        "Aspirin or NSAID-induced asthma",
        "Post-CABG surgery",
        "Third trimester pregnancy",
        "Severe hepatic impairment"
      ],
      drugInteractions: [
        "Warfarin, anticoagulants - increased bleeding risk",
        "ACE inhibitors/ARBs - reduced antihypertensive effect, nephrotoxicity",
        "Fluconazole - increased celecoxib levels",
        "Lithium - increased lithium levels",
        "Methotrexate - increased methotrexate toxicity"
      ]
    }
  },

  // Neuropathic Pain & Anticonvulsants (13-15)
  {
    id: "rx-013",
    name: "Amitriptyline",
    description: "Tricyclic antidepressant for neuropathic pain and migraine prevention",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.6,
    reviews: 445,
    requiresPrescription: true,
    strengthOptions: ["10mg", "25mg", "50mg", "75mg"],
    formOptions: ["Tablet"],
    tags: ["pain-relief", "neuropathic", "depression"],
    medicalInfo: {
      dosage: {
        standard: "Neuropathic pain: Start 10-25mg at bedtime, gradually increase to 75-150mg. Depression: 50-150mg daily. Maximum 300mg per day.",
        administration: [
          "Take at bedtime due to sedation",
          "Swallow tablets whole with water",
          "May take 2-4 weeks for pain relief",
          "Taper gradually when discontinuing"
        ],
        specialPopulations: "Lower doses for elderly. Avoid in acute recovery phase of MI. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Dry mouth", "Drowsiness", "Constipation", "Blurred vision", "Weight gain", "Dizziness"],
        serious: ["Cardiac arrhythmias", "Orthostatic hypotension", "Seizures", "Increased suicidal thoughts", "Urinary retention", "Angle-closure glaucoma"]
      },
      contraindications: [
        "Recent myocardial infarction",
        "Concurrent MAOI use",
        "Known hypersensitivity",
        "Acute recovery from MI",
        "Uncontrolled angle-closure glaucoma"
      ],
      drugInteractions: [
        "MAOIs - hypertensive crisis, serotonin syndrome",
        "CNS depressants - enhanced sedation",
        "Anticholinergics - additive anticholinergic effects",
        "SSRIs - increased amitriptyline levels",
        "Tramadol - increased seizure risk",
        "Alcohol - enhanced CNS depression"
      ]
    }
  },
  {
    id: "rx-014",
    name: "Gabapentin",
    description: "Anticonvulsant for neuropathic pain and seizure management",
    price: 18.99,
    oldPrice: 34.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "anticonvulsants",
    inStock: true,
    rating: 4.7,
    reviews: 678,
    requiresPrescription: true,
    strengthOptions: ["100mg", "300mg", "400mg", "600mg", "800mg"],
    formOptions: ["Capsule", "Tablet"],
    tags: ["neuropathic-pain", "seizures"],
    variationPrices: {
      minPrice: 22.99,
      maxPrice: 36.99
    },
    medicalInfo: {
      dosage: {
        standard: "Start 300mg once daily, then 300mg twice daily on day 2, then 300mg three times daily on day 3. Titrate up to 1800-3600mg per day in 3 divided doses.",
        administration: [
          "Take with or without food",
          "Swallow capsules/tablets whole with water",
          "Take doses at evenly spaced intervals (maximum 12 hours apart)",
          "Do not stop suddenly - taper gradually to avoid seizures"
        ],
        specialPopulations: "Reduce dose with renal impairment (CrCl-based). Lower doses in elderly. Limited data in pregnancy."
      },
      sideEffects: {
        common: ["Dizziness", "Somnolence", "Peripheral edema", "Ataxia", "Fatigue", "Nystagmus"],
        serious: ["Increased suicidal thoughts", "Severe allergic reactions", "Respiratory depression (with CNS depressants)", "Withdrawal seizures"]
      },
      contraindications: [
        "Known hypersensitivity to gabapentin"
      ],
      drugInteractions: [
        "CNS depressants (opioids, benzodiazepines) - increased sedation and respiratory depression",
        "Antacids - reduced gabapentin absorption (space 2 hours apart)",
        "Morphine - increased gabapentin levels",
        "Alcohol - enhanced CNS depression"
      ]
    }
  },
  {
    id: "rx-015",
    name: "Pregabalin",
    description: "Anticonvulsant for neuropathic pain, fibromyalgia, and anxiety",
    price: 28.99,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "anticonvulsants",
    inStock: true,
    rating: 4.8,
    reviews: 567,
    requiresPrescription: true,
    strengthOptions: ["25mg", "50mg", "75mg", "100mg", "150mg", "200mg", "300mg"],
    formOptions: ["Capsule"],
    tags: ["neuropathic-pain", "anxiety", "fibromyalgia"],
    variationPrices: {
      minPrice: 28.99,
      maxPrice: 44.99
    },
    medicalInfo: {
      dosage: {
        standard: "Neuropathic pain: Start 150mg per day in 2-3 divided doses. May increase to 300mg per day within 1 week. Maximum 600mg per day.",
        administration: [
          "Take with or without food",
          "Swallow capsules whole",
          "Take 2-3 times daily at regular intervals",
          "Taper gradually when stopping to minimize withdrawal"
        ],
        specialPopulations: "Adjust dose based on renal function. Elderly may require lower doses. Limited data in pregnancy."
      },
      sideEffects: {
        common: ["Dizziness", "Somnolence", "Peripheral edema", "Dry mouth", "Weight gain", "Blurred vision"],
        serious: ["Angioedema", "Hypersensitivity reactions", "Increased suicidal thoughts", "Respiratory depression (with CNS depressants)", "Heart failure exacerbation"]
      },
      contraindications: [
        "Known hypersensitivity to pregabalin or gabapentin"
      ],
      drugInteractions: [
        "CNS depressants (opioids, benzodiazepines, alcohol) - increased sedation and respiratory depression",
        "ACE inhibitors - increased angioedema risk",
        "Thiazolidinediones - may potentiate weight gain and peripheral edema",
        "Alcohol - enhanced cognitive and motor impairment"
      ]
    }
  },

  // Antidepressants & Mental Health (16-27)
  {
    id: "rx-016",
    name: "Duloxetine",
    description: "SNRI for depression, anxiety, and chronic pain management",
    price: 32.99,
    oldPrice: 62.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.7,
    reviews: 489,
    requiresPrescription: true,
    strengthOptions: ["20mg", "30mg", "60mg"],
    formOptions: ["Capsule"],
    tags: ["depression", "anxiety", "pain"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 49.99
    },
    medicalInfo: {
      dosage: {
        standard: "Depression/Anxiety: 40-60mg once daily or in 2 divided doses. Chronic pain: Start 30mg once daily, may increase to 60mg. Maximum 120mg per day.",
        administration: [
          "Swallow capsules whole, do not crush or chew",
          "Take with or without food",
          "For once daily dosing, take at same time each day",
          "Taper gradually when discontinuing to avoid withdrawal"
        ],
        specialPopulations: "Not recommended with severe renal impairment (CrCl <30) or hepatic impairment. Use caution in elderly."
      },
      sideEffects: {
        common: ["Nausea", "Dry mouth", "Somnolence", "Fatigue", "Constipation", "Decreased appetite", "Hyperhidrosis"],
        serious: ["Serotonin syndrome", "Hepatotoxicity", "Orthostatic hypotension", "Increased suicidal thoughts", "Severe skin reactions", "Hyponatremia", "Bleeding risk"]
      },
      contraindications: [
        "Concurrent MAOI use or within 14 days",
        "Uncontrolled narrow-angle glaucoma",
        "Severe hepatic impairment",
        "Concurrent use with linezolid or IV methylene blue"
      ],
      drugInteractions: [
        "MAOIs - serotonin syndrome (contraindicated)",
        "Serotonergic drugs (SSRIs, triptans, tramadol) - serotonin syndrome",
        "NSAIDs, aspirin, anticoagulants - increased bleeding risk",
        "CYP1A2 inhibitors (fluvoxamine, ciprofloxacin) - increased duloxetine levels",
        "Alcohol - increased hepatotoxicity risk",
        "Thioridazine - QT prolongation"
      ]
    }
  },
  {
    id: "rx-017",
    name: "Sertraline",
    description: "SSRI antidepressant for depression, anxiety, OCD, and PTSD",
    price: 16.99,
    oldPrice: 34.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.7,
    reviews: 567,
    requiresPrescription: true,
    strengthOptions: ["25mg", "50mg", "100mg"],
    formOptions: ["Tablet"],
    tags: ["depression", "anxiety", "ssri"],
    variationPrices: {
      minPrice: 16.99,
      maxPrice: 26.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: Start 50mg once daily. May increase by 50mg increments weekly. Maximum 200mg daily.",
        administration: [
          "Take once daily, morning or evening",
          "Can be taken with or without food",
          "Swallow tablet whole with water",
          "May take 4-6 weeks for full therapeutic effect",
          "Do not stop abruptly - taper dose gradually"
        ],
        specialPopulations: "Children 6-12: start 25mg daily. Elderly: use lower doses. Avoid in pregnancy first trimester; weigh risks/benefits in later pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Diarrhea", "Insomnia", "Drowsiness", "Dry mouth", "Sexual dysfunction", "Increased sweating", "Tremor"],
        serious: ["Serotonin syndrome", "Increased suicidal thoughts (especially in young adults)", "Severe allergic reactions", "Seizures", "Abnormal bleeding", "Hyponatremia", "QT prolongation"]
      },
      contraindications: [
        "Use of MAOIs within 14 days",
        "Use of pimozide",
        "Hypersensitivity to sertraline",
        "Concurrent use with disulfiram (liquid formulation)"
      ],
      drugInteractions: [
        "MAOIs - risk of serotonin syndrome (contraindicated)",
        "Other serotonergic drugs (tramadol, triptans) - increased serotonin syndrome risk",
        "NSAIDs, aspirin, anticoagulants - increased bleeding risk",
        "Pimozide - QT prolongation",
        "Tricyclic antidepressants - increased TCA levels",
        "Benzodiazepines - may increase sedation",
        "Alcohol - avoid concurrent use"
      ]
    }
  },
  {
    id: "rx-018",
    name: "Fluoxetine",
    description: "SSRI antidepressant for depression, OCD, and bulimia",
    price: 15.99,
    oldPrice: 32.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.6,
    reviews: 623,
    requiresPrescription: true,
    strengthOptions: ["10mg", "20mg", "40mg"],
    formOptions: ["Capsule", "Tablet"],
    tags: ["depression", "anxiety", "ssri"],
    variationPrices: {
      minPrice: 15.99,
      maxPrice: 25.99
    },
    medicalInfo: {
      dosage: {
        standard: "Depression: Start 20mg once daily in morning. May increase after several weeks. Maximum 80mg per day. OCD: May require 60-80mg.",
        administration: [
          "Take once daily in the morning",
          "Can be taken with or without food",
          "Swallow capsules/tablets whole",
          "May take 4-6 weeks for full effect",
          "Taper gradually when discontinuing"
        ],
        specialPopulations: "Children 8+ for OCD. Lower doses for elderly or hepatic impairment. Weigh risks/benefits in pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Insomnia", "Drowsiness", "Anxiety", "Sexual dysfunction", "Loss of appetite", "Tremor", "Sweating"],
        serious: ["Serotonin syndrome", "Increased suicidal thoughts", "Mania/hypomania", "Seizures", "Abnormal bleeding", "Hyponatremia", "Serotonin syndrome"]
      },
      contraindications: [
        "Concurrent MAOI use or within 14 days (5 weeks after stopping fluoxetine)",
        "Use with pimozide or thioridazine",
        "Known hypersensitivity"
      ],
      drugInteractions: [
        "MAOIs - serotonin syndrome (contraindicated)",
        "Pimozide, thioridazine - QT prolongation (contraindicated)",
        "Other serotonergic drugs - serotonin syndrome",
        "NSAIDs, aspirin, anticoagulants - increased bleeding risk",
        "CYP2D6 substrates (TCAs, antiarrhythmics) - increased levels",
        "Tamoxifen - reduced effectiveness"
      ]
    }
  },
  {
    id: "rx-019",
    name: "Citalopram",
    description: "SSRI antidepressant for depression and anxiety disorders",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.6,
    reviews: 512,
    requiresPrescription: true,
    strengthOptions: ["10mg", "20mg", "40mg"],
    formOptions: ["Tablet"],
    tags: ["depression", "anxiety", "ssri"],
    variationPrices: {
      minPrice: 14.99,
      maxPrice: 23.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: Start 20mg once daily. May increase to 40mg after 1 week. Maximum 40mg per day (20mg for >60 years or poor CYP2C19 metabolizers).",
        administration: [
          "Take once daily, morning or evening",
          "Take with or without food",
          "Swallow tablets whole with water",
          "May take 1-4 weeks to notice improvement",
          "Taper gradually when stopping"
        ],
        specialPopulations: "Maximum 20mg for patients >60 years, hepatic impairment, or poor CYP2C19 metabolizers. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Dry mouth", "Somnolence", "Insomnia", "Increased sweating", "Sexual dysfunction", "Tremor"],
        serious: ["QT prolongation and Torsades de Pointes", "Serotonin syndrome", "Increased suicidal thoughts", "Abnormal bleeding", "Hyponatremia", "Seizures"]
      },
      contraindications: [
        "Concurrent MAOI use or within 14 days",
        "Concurrent pimozide use",
        "Known hypersensitivity",
        "Congenital long QT syndrome"
      ],
      drugInteractions: [
        "MAOIs - serotonin syndrome (contraindicated)",
        "Pimozide - QT prolongation (contraindicated)",
        "Other serotonergic drugs - serotonin syndrome",
        "QT-prolonging drugs - increased QT prolongation risk",
        "NSAIDs, aspirin, anticoagulants - increased bleeding risk",
        "CYP2C19 inhibitors - increased citalopram levels"
      ]
    }
  },
  {
    id: "rx-020",
    name: "Escitalopram",
    description: "SSRI antidepressant for depression and generalized anxiety disorder",
    price: 18.99,
    oldPrice: 36.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.8,
    reviews: 734,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "20mg"],
    formOptions: ["Tablet"],
    tags: ["depression", "anxiety", "ssri"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 29.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: Start 10mg once daily. May increase to 20mg after 1 week. Maximum 20mg per day.",
        administration: [
          "Take once daily, morning or evening",
          "Take with or without food",
          "Swallow tablets whole",
          "Full effect may take 4-6 weeks",
          "Taper gradually to discontinue"
        ],
        specialPopulations: "Maximum 10mg for elderly and hepatic impairment. Adolescents 12-17: start 10mg. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Insomnia", "Ejaculation disorder", "Fatigue", "Increased sweating", "Decreased libido", "Somnolence"],
        serious: ["Serotonin syndrome", "Increased suicidal thoughts", "Abnormal bleeding", "Hyponatremia", "QT prolongation", "Seizures", "Mania activation"]
      },
      contraindications: [
        "Concurrent MAOI use or within 14 days",
        "Concurrent pimozide use",
        "Known hypersensitivity to escitalopram or citalopram"
      ],
      drugInteractions: [
        "MAOIs - serotonin syndrome (contraindicated)",
        "Pimozide - QT prolongation (contraindicated)",
        "Other serotonergic drugs - serotonin syndrome",
        "NSAIDs, aspirin, anticoagulants - increased bleeding risk",
        "Cimetidine - increased escitalopram levels",
        "QT-prolonging drugs - additive QT prolongation"
      ]
    }
  },
  {
    id: "rx-021",
    name: "Venlafaxine",
    description: "SNRI antidepressant for depression and anxiety disorders",
    price: 24.99,
    oldPrice: 48.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.5,
    reviews: 445,
    requiresPrescription: true,
    strengthOptions: ["37.5mg", "75mg", "150mg"],
    formOptions: ["Extended-Release Capsule"],
    tags: ["depression", "anxiety", "snri"],
    variationPrices: {
      minPrice: 24.99,
      maxPrice: 37.99
    },
    medicalInfo: {
      dosage: {
        standard: "Extended-release: Start 75mg once daily with food. May increase by 75mg increments every 4 days. Maximum 225mg per day.",
        administration: [
          "Take once daily with food at same time",
          "Swallow capsules whole, do not crush or chew",
          "For discontinuation, taper gradually over at least 4 weeks",
          "Full effect may take several weeks"
        ],
        specialPopulations: "Reduce dose with renal or hepatic impairment. Use caution in elderly. Not recommended during pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Somnolence", "Dry mouth", "Sweating", "Sexual dysfunction", "Dizziness", "Insomnia", "Constipation"],
        serious: ["Hypertension (dose-related)", "Serotonin syndrome", "Increased suicidal thoughts", "Abnormal bleeding", "Seizures", "Hyponatremia", "Mydriasis/angle-closure glaucoma"]
      },
      contraindications: [
        "Concurrent MAOI use or within 14 days",
        "Hypersensitivity to venlafaxine",
        "Uncontrolled hypertension (relative contraindication)"
      ],
      drugInteractions: [
        "MAOIs - serotonin syndrome (contraindicated)",
        "Other serotonergic drugs - serotonin syndrome",
        "NSAIDs, aspirin, anticoagulants - increased bleeding risk",
        "CYP2D6 inhibitors - increased venlafaxine levels",
        "Alcohol - enhanced CNS depression",
        "Antihypertensives - may require dose adjustment"
      ]
    }
  },
  {
    id: "rx-022",
    name: "Bupropion",
    description: "Antidepressant and smoking cessation aid",
    price: 26.99,
    oldPrice: 52.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.7,
    reviews: 589,
    requiresPrescription: true,
    strengthOptions: ["75mg", "100mg", "150mg", "300mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["depression", "smoking-cessation"],
    variationPrices: {
      minPrice: 26.99,
      maxPrice: 41.99
    },
    medicalInfo: {
      dosage: {
        standard: "Depression: Extended-release 150mg once daily, may increase to 300mg. Smoking cessation: 150mg once daily for 3 days, then 150mg twice daily.",
        administration: [
          "Take with or without food",
          "Swallow tablets whole, do not crush or chew",
          "Take doses at least 8 hours apart to reduce seizure risk",
          "Avoid taking at bedtime (may cause insomnia)"
        ],
        specialPopulations: "Reduce dose with hepatic impairment. Not recommended with seizure disorders. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Insomnia", "Dry mouth", "Nausea", "Headache", "Dizziness", "Constipation", "Tremor", "Weight loss"],
        serious: ["Seizures (dose-related)", "Hypertension", "Psychiatric symptoms (agitation, psychosis)", "Increased suicidal thoughts", "Severe allergic reactions", "Angle-closure glaucoma"]
      },
      contraindications: [
        "Seizure disorder",
        "Bulimia or anorexia nervosa",
        "Abrupt discontinuation of alcohol/benzodiazepines",
        "Concurrent MAOI use or within 14 days",
        "Known hypersensitivity"
      ],
      drugInteractions: [
        "MAOIs - hypertensive crisis",
        "CYP2D6 substrates (TCAs, antiarrhythmics) - increased levels",
        "Alcohol, benzodiazepines - increased seizure risk if discontinued abruptly",
        "Other drugs that lower seizure threshold",
        "Dopaminergic drugs (levodopa, amantadine) - increased side effects"
      ]
    }
  },
  {
    id: "rx-023",
    name: "Lithium",
    description: "Mood stabilizer for bipolar disorder",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.6,
    reviews: 334,
    requiresPrescription: true,
    strengthOptions: ["300mg", "450mg", "600mg"],
    formOptions: ["Capsule", "Tablet", "Extended-Release"],
    tags: ["bipolar", "mood-stabilizer"],
    variationPrices: {
      minPrice: 19.99,
      maxPrice: 31.99
    },
    medicalInfo: {
      dosage: {
        standard: "Acute mania: 1800mg per day in divided doses. Maintenance: 900-1200mg per day. Dose based on serum levels (target 0.6-1.2 mEq/L).",
        administration: [
          "Take with food or milk to reduce GI upset",
          "Maintain adequate hydration and stable salt intake",
          "Regular blood level monitoring required",
          "Swallow extended-release tablets whole"
        ],
        specialPopulations: "Reduce dose in elderly and renal impairment. Contraindicated in pregnancy (Ebstein's anomaly risk). Avoid in breastfeeding."
      },
      sideEffects: {
        common: ["Hand tremor", "Increased thirst", "Polyuria", "Nausea", "Diarrhea", "Weight gain", "Cognitive dulling"],
        serious: ["Lithium toxicity (>1.5 mEq/L)", "Renal dysfunction", "Hypothyroidism", "Cardiac arrhythmias", "Neurotoxicity", "Nephrogenic diabetes insipidus"]
      },
      contraindications: [
        "Severe renal impairment",
        "Severe cardiovascular disease",
        "Severe dehydration or sodium depletion",
        "Pregnancy (especially first trimester)",
        "Breastfeeding"
      ],
      drugInteractions: [
        "Diuretics (especially thiazides) - increased lithium levels and toxicity",
        "NSAIDs - increased lithium levels",
        "ACE inhibitors, ARBs - increased lithium levels",
        "Serotonergic drugs - serotonin syndrome risk",
        "Calcium channel blockers - neurotoxicity",
        "Sodium-containing drugs - affect lithium levels"
      ]
    }
  },
  {
    id: "rx-024",
    name: "Quetiapine",
    description: "Atypical antipsychotic for bipolar disorder and schizophrenia",
    price: 38.99,
    oldPrice: 74.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.5,
    reviews: 423,
    requiresPrescription: true,
    strengthOptions: ["25mg", "50mg", "100mg", "200mg", "300mg", "400mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["antipsychotic", "bipolar"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 62.99
    },
    medicalInfo: {
      dosage: {
        standard: "Schizophrenia: Start 25mg twice daily, titrate by 25-50mg increments. Target 300-400mg/day in 2-3 doses. Maximum 800mg/day. Bipolar: 50-800mg/day.",
        administration: [
          "Take with or without food",
          "Extended-release: swallow whole, do not crush or chew",
          "Immediate-release: typically twice daily",
          "Taper gradually when discontinuing"
        ],
        specialPopulations: "Reduce dose in elderly and hepatic impairment. Use caution in pregnancy and breastfeeding."
      },
      sideEffects: {
        common: ["Somnolence", "Dry mouth", "Constipation", "Dizziness", "Weight gain", "Dyspepsia"],
        serious: ["Metabolic syndrome (hyperglycemia, dyslipidemia)", "Tardive dyskinesia", "Neuroleptic malignant syndrome", "QT prolongation", "Orthostatic hypotension", "Increased suicidal thoughts"]
      },
      contraindications: [
        "Known hypersensitivity to quetiapine",
        "Concurrent use with strong CYP3A4 inhibitors (relative)"
      ],
      drugInteractions: [
        "CYP3A4 inhibitors (ketoconazole, erythromycin) - increased quetiapine levels",
        "CYP3A4 inducers (carbamazepine, phenytoin) - decreased quetiapine levels",
        "CNS depressants - enhanced sedation",
        "Antihypertensives - enhanced hypotensive effects",
        "QT-prolonging drugs - additive QT prolongation"
      ]
    }
  },
  {
    id: "rx-025",
    name: "Olanzapine",
    description: "Atypical antipsychotic for schizophrenia and bipolar disorder",
    price: 42.99,
    oldPrice: 82.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.6,
    reviews: 378,
    requiresPrescription: true,
    strengthOptions: ["2.5mg", "5mg", "7.5mg", "10mg", "15mg", "20mg"],
    formOptions: ["Tablet"],
    tags: ["antipsychotic", "bipolar"],
    variationPrices: {
      minPrice: 42.99,
      maxPrice: 67.99
    },
    medicalInfo: {
      dosage: {
        standard: "Schizophrenia: Start 5-10mg once daily, adjust by 5mg increments. Target 10-15mg/day. Maximum 20mg/day. Bipolar: 10-15mg/day.",
        administration: [
          "Take once daily, with or without food",
          "Can be taken at bedtime due to sedation",
          "Orally disintegrating tablet available (no water needed)",
          "Taper gradually when stopping"
        ],
        specialPopulations: "Lower starting dose (5mg) for elderly or debilitated patients. Not recommended in pregnancy or breastfeeding."
      },
      sideEffects: {
        common: ["Weight gain", "Somnolence", "Dry mouth", "Constipation", "Dizziness", "Increased appetite"],
        serious: ["Metabolic syndrome (hyperglycemia, diabetes, dyslipidemia)", "Tardive dyskinesia", "Neuroleptic malignant syndrome", "Orthostatic hypotension", "Hyperprolactinemia", "Agranulocytosis"]
      },
      contraindications: [
        "Known hypersensitivity to olanzapine"
      ],
      drugInteractions: [
        "CNS depressants (alcohol, benzodiazepines) - enhanced sedation",
        "Fluvoxamine - increased olanzapine levels",
        "Carbamazepine - decreased olanzapine levels",
        "Antihypertensives - enhanced hypotensive effects",
        "Anticholinergics - additive anticholinergic effects"
      ]
    }
  },
  {
    id: "rx-026",
    name: "Risperidone",
    description: "Atypical antipsychotic for schizophrenia and bipolar mania",
    price: 36.99,
    oldPrice: 69.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.5,
    reviews: 345,
    requiresPrescription: true,
    strengthOptions: ["0.5mg", "1mg", "2mg", "3mg", "4mg"],
    formOptions: ["Tablet", "Oral Solution"],
    tags: ["antipsychotic"],
    medicalInfo: {
      dosage: {
        standard: "Schizophrenia: Start 2mg/day in 1-2 doses. Titrate by 1-2mg/day. Target 4-8mg/day. Maximum 16mg/day. Bipolar: 2-6mg/day.",
        administration: [
          "Take once or twice daily with or without food",
          "Oral solution: use measuring device provided",
          "Can be taken with food if stomach upset",
          "Taper gradually when discontinuing"
        ],
        specialPopulations: "Start 0.5mg twice daily in elderly and renal/hepatic impairment. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Parkinsonism", "Akathisia", "Dystonia", "Somnolence", "Weight gain", "Hyperprolactinemia symptoms"],
        serious: ["Tardive dyskinesia", "Neuroleptic malignant syndrome", "Metabolic changes", "Orthostatic hypotension", "Stroke in elderly with dementia", "QT prolongation"]
      },
      contraindications: [
        "Known hypersensitivity to risperidone or paliperidone"
      ],
      drugInteractions: [
        "CYP2D6 inhibitors (fluoxetine, paroxetine) - increased risperidone levels",
        "Carbamazepine - decreased risperidone levels",
        "CNS depressants - enhanced sedation",
        "Antihypertensives - enhanced hypotensive effects",
        "Levodopa, dopamine agonists - antagonism of effects"
      ]
    }
  },
  {
    id: "rx-027",
    name: "Aripiprazole",
    description: "Atypical antipsychotic for schizophrenia and bipolar disorder",
    price: 44.99,
    oldPrice: 86.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.7,
    reviews: 412,
    requiresPrescription: true,
    strengthOptions: ["2mg", "5mg", "10mg", "15mg", "20mg", "30mg"],
    formOptions: ["Tablet"],
    tags: ["antipsychotic", "bipolar"],
    variationPrices: {
      minPrice: 44.99,
      maxPrice: 69.99
    },
    medicalInfo: {
      dosage: {
        standard: "Schizophrenia: Start 10-15mg once daily. Target 10-15mg/day. Maximum 30mg/day. Bipolar: 15-30mg/day. Depression adjunct: 2-15mg/day.",
        administration: [
          "Take once daily with or without food",
          "Consistent timing recommended",
          "Orally disintegrating tablet available",
          "May take 1-2 weeks for full effect"
        ],
        specialPopulations: "Reduce dose by 50% with strong CYP2D6 or CYP3A4 inhibitors. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Akathisia", "Headache", "Insomnia", "Nausea", "Weight gain (less than other antipsychotics)", "Anxiety"],
        serious: ["Neuroleptic malignant syndrome", "Tardive dyskinesia", "Metabolic changes", "Orthostatic hypotension", "Seizures", "Compulsive behaviors (gambling, eating)"]
      },
      contraindications: [
        "Known hypersensitivity to aripiprazole"
      ],
      drugInteractions: [
        "CYP3A4 inhibitors (ketoconazole) - increase aripiprazole dose up to double",
        "CYP2D6 inhibitors (quinidine, fluoxetine) - reduce aripiprazole dose by half",
        "CYP3A4 inducers (carbamazepine) - reduce aripiprazole levels",
        "CNS depressants - enhanced sedation",
        "Antihypertensives - enhanced hypotensive effects"
      ]
    }
  },

  // Benzodiazepines & Sleep (28-34)
  {
    id: "rx-028",
    name: "Alprazolam",
    description: "Benzodiazepine for anxiety and panic disorders",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.4,
    reviews: 223,
    requiresPrescription: true,
    strengthOptions: ["0.25mg", "0.5mg", "1mg", "2mg"],
    formOptions: ["Tablet"],
    tags: ["anxiety", "benzodiazepine", "controlled"],
    variationPrices: {
      minPrice: 22.99,
      maxPrice: 34.99
    },
    medicalInfo: {
      dosage: {
        standard: "Anxiety: Start 0.25-0.5mg three times daily. Maximum 4mg/day. Panic disorder: Start 0.5mg three times daily, may increase. Maximum 10mg/day.",
        administration: [
          "Take with or without food",
          "Immediate-release: 2-3 times daily",
          "Extended-release: once daily",
          "NEVER stop abruptly - taper slowly to avoid seizures"
        ],
        specialPopulations: "Reduce dose in elderly and hepatic impairment. Contraindicated in pregnancy. Avoid in breastfeeding."
      },
      sideEffects: {
        common: ["Drowsiness", "Dizziness", "Fatigue", "Memory impairment", "Coordination problems", "Slurred speech"],
        serious: ["Physical dependence", "Withdrawal seizures", "Respiratory depression", "Cognitive impairment", "Increased fall risk", "Paradoxical agitation"]
      },
      contraindications: [
        "Acute narrow-angle glaucoma",
        "Concurrent ketoconazole or itraconazole use",
        "Known hypersensitivity to benzodiazepines",
        "Pregnancy"
      ],
      drugInteractions: [
        "CYP3A4 inhibitors (ketoconazole, itraconazole) - contraindicated, severe toxicity",
        "CNS depressants (opioids, alcohol) - severe respiratory depression, death",
        "Other benzodiazepines - additive effects",
        "Antifungals, macrolides - increased alprazolam levels",
        "Grapefruit juice - increased levels"
      ]
    }
  },
  {
    id: "rx-029",
    name: "Diazepam",
    description: "Benzodiazepine for anxiety, muscle spasms, and seizures",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.6,
    reviews: 456,
    requiresPrescription: true,
    strengthOptions: ["2mg", "5mg", "10mg"],
    formOptions: ["Tablet"],
    tags: ["anxiety", "benzodiazepine", "controlled"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 28.99
    },
    medicalInfo: {
      dosage: {
        standard: "Anxiety: 2-10mg 2-4 times daily. Muscle spasms: 2-15mg 3-4 times daily. Status epilepticus: IV 5-10mg (hospital setting).",
        administration: [
          "Take with or without food",
          "Can be taken with food to reduce GI upset",
          "Long half-life allows flexible dosing",
          "Taper slowly when discontinuing - do NOT stop abruptly"
        ],
        specialPopulations: "Reduce dose in elderly, debilitated, and hepatic impairment. Contraindicated in pregnancy."
      },
      sideEffects: {
        common: ["Drowsiness", "Fatigue", "Muscle weakness", "Ataxia", "Confusion", "Memory impairment"],
        serious: ["Physical dependence and addiction", "Withdrawal seizures", "Respiratory depression", "Paradoxical reactions (aggression)", "Cognitive impairment", "Falls"]
      },
      contraindications: [
        "Acute narrow-angle glaucoma",
        "Severe respiratory insufficiency",
        "Sleep apnea syndrome",
        "Severe hepatic insufficiency",
        "Myasthenia gravis",
        "Pregnancy and breastfeeding"
      ],
      drugInteractions: [
        "CNS depressants (opioids, alcohol) - severe respiratory depression",
        "CYP3A4 inhibitors - increased diazepam levels",
        "Phenytoin, carbamazepine - decreased diazepam levels",
        "Antacids - may alter absorption",
        "Cimetidine - increased diazepam levels"
      ]
    }
  },
  {
    id: "rx-030",
    name: "Lorazepam",
    description: "Benzodiazepine for anxiety disorders",
    price: 20.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.5,
    reviews: 389,
    requiresPrescription: true,
    strengthOptions: ["0.5mg", "1mg", "2mg"],
    formOptions: ["Tablet"],
    tags: ["anxiety", "benzodiazepine", "controlled"],
    variationPrices: {
      minPrice: 20.99,
      maxPrice: 31.99
    },
    medicalInfo: {
      dosage: {
        standard: "Anxiety: 2-3mg daily in 2-3 divided doses. Maximum 10mg/day. Insomnia: 2-4mg at bedtime.",
        administration: [
          "Take with or without food",
          "Can be taken 2-3 times daily",
          "Intermediate half-life (10-20 hours)",
          "Taper slowly over weeks when discontinuing"
        ],
        specialPopulations: "Start 1-2mg/day in elderly. Reduce dose in hepatic impairment. Contraindicated in pregnancy."
      },
      sideEffects: {
        common: ["Sedation", "Dizziness", "Weakness", "Unsteadiness", "Memory problems", "Confusion (especially elderly)"],
        serious: ["Physical dependence", "Withdrawal syndrome", "Respiratory depression", "Increased fall risk", "Cognitive decline", "Paradoxical reactions"]
      },
      contraindications: [
        "Acute narrow-angle glaucoma",
        "Sleep apnea",
        "Severe respiratory insufficiency",
        "Known hypersensitivity",
        "Pregnancy and breastfeeding"
      ],
      drugInteractions: [
        "CNS depressants (opioids, alcohol, barbiturates) - enhanced sedation, respiratory depression",
        "Probenecid - decreased lorazepam clearance",
        "Valproate - increased lorazepam levels",
        "Other benzodiazepines - additive effects",
        "Scopolamine - increased sedation and hallucinations"
      ]
    }
  },
  {
    id: "rx-031",
    name: "Clonazepam",
    description: "Benzodiazepine for anxiety and seizure disorders",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "mental-health",
    inStock: true,
    rating: 4.6,
    reviews: 412,
    requiresPrescription: true,
    strengthOptions: ["0.5mg", "1mg", "2mg"],
    formOptions: ["Tablet"],
    tags: ["anxiety", "benzodiazepine", "seizures", "controlled"],
    medicalInfo: {
      dosage: {
        standard: "Panic disorder: Start 0.25mg twice daily, increase to 1mg/day after 3 days. Maximum 4mg/day. Seizures: Start 1.5mg/day in 3 doses, increase gradually.",
        administration: [
          "Take with or without food",
          "Usually 2-3 times daily",
          "Orally disintegrating tablet available",
          "Long half-life (30-40 hours) - taper very slowly"
        ],
        specialPopulations: "Start with lower doses in elderly. Reduce dose in hepatic impairment. Avoid in pregnancy."
      },
      sideEffects: {
        common: ["Somnolence", "Dizziness", "Coordination problems", "Memory impairment", "Depression", "Fatigue"],
        serious: ["Physical dependence and addiction", "Severe withdrawal (including seizures)", "Respiratory depression", "Cognitive impairment", "Suicidal thoughts", "Paradoxical reactions"]
      },
      contraindications: [
        "Significant hepatic disease",
        "Acute narrow-angle glaucoma",
        "Known hypersensitivity to benzodiazepines",
        "Pregnancy and breastfeeding"
      ],
      drugInteractions: [
        "CNS depressants (opioids, alcohol) - severe respiratory depression, death",
        "CYP3A4 inhibitors - increased clonazepam levels",
        "Phenytoin, carbamazepine - decreased clonazepam efficacy",
        "Other anticonvulsants - additive CNS depression",
        "Valproic acid - may trigger absence seizures"
      ]
    }
  },
  {
    id: "rx-032",
    name: "Zolpidem",
    description: "Hypnotic medication for short-term treatment of insomnia",
    price: 24.99,
    oldPrice: 44.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "sleep-aids",
    inStock: true,
    rating: 4.5,
    reviews: 678,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["insomnia", "sleep"],
    variationPrices: {
      minPrice: 24.99,
      maxPrice: 37.99
    },
    medicalInfo: {
      dosage: {
        standard: "Immediate-release: 5mg (women) or 5-10mg (men) at bedtime. Extended-release: 6.25mg (women) or 6.25-12.5mg (men). Maximum 10-12.5mg/night.",
        administration: [
          "Take immediately before bedtime with at least 7-8 hours of sleep time",
          "Take on empty stomach for faster onset",
          "Do NOT take with or after a meal",
          "Use for short-term only (2-4 weeks)"
        ],
        specialPopulations: "5mg for elderly, hepatic impairment, or concurrent CNS depressants. Not recommended in pregnancy."
      },
      sideEffects: {
        common: ["Drowsiness", "Dizziness", "Diarrhea", "Drugged feeling", "Headache"],
        serious: ["Complex sleep behaviors (sleep-driving, sleep-eating)", "Next-morning impairment", "Amnesia", "Hallucinations", "Worsening depression/suicidal thoughts", "Anaphylaxis", "Dependence"]
      },
      contraindications: [
        "Known hypersensitivity to zolpidem"
      ],
      drugInteractions: [
        "CNS depressants (opioids, benzodiazepines, alcohol) - enhanced sedation, respiratory depression",
        "CYP3A4 inhibitors (ketoconazole) - increased zolpidem levels",
        "Rifampin - decreased zolpidem efficacy",
        "Sertraline - increased zolpidem effect",
        "Food - delays and reduces absorption"
      ]
    }
  },
  {
    id: "rx-033",
    name: "Zopiclone / Eszopiclone",
    description: "Hypnotic for insomnia treatment",
    price: 26.99,
    oldPrice: 48.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "sleep-aids",
    inStock: true,
    rating: 4.6,
    reviews: 534,
    requiresPrescription: true,
    strengthOptions: ["1mg", "2mg", "3mg"],
    formOptions: ["Tablet"],
    tags: ["insomnia", "sleep"],
    variationPrices: {
      minPrice: 26.99,
      maxPrice: 39.99
    },
    medicalInfo: {
      dosage: {
        standard: "Zopiclone: 7.5mg at bedtime (3.75mg for elderly). Eszopiclone: Start 1mg, may increase to 2-3mg at bedtime. Maximum 3mg.",
        administration: [
          "Take immediately before bedtime",
          "Ensure 7-8 hours available for sleep",
          "Can be taken with or without food",
          "Use for short-term treatment (typically 2-4 weeks)"
        ],
        specialPopulations: "Reduce dose by half in elderly and hepatic impairment. Avoid in severe renal impairment. Not recommended in pregnancy."
      },
      sideEffects: {
        common: ["Metallic/bitter taste", "Dry mouth", "Drowsiness", "Dizziness", "Headache"],
        serious: ["Complex sleep behaviors", "Next-day impairment", "Memory impairment", "Depression", "Dependence and withdrawal", "Respiratory depression"]
      },
      contraindications: [
        "Myasthenia gravis",
        "Severe respiratory insufficiency",
        "Severe sleep apnea syndrome",
        "Severe hepatic insufficiency",
        "Known hypersensitivity"
      ],
      drugInteractions: [
        "CNS depressants (opioids, alcohol, benzodiazepines) - enhanced sedation",
        "CYP3A4 inhibitors (clarithromycin, ketoconazole) - increased levels",
        "CYP3A4 inducers (rifampin, carbamazepine) - decreased efficacy",
        "Erythromycin - increased eszopiclone levels",
        "Antidepressants - additive CNS depression"
      ]
    }
  },
  {
    id: "rx-034",
    name: "Temazepam",
    description: "Benzodiazepine hypnotic for sleep disorders",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "sleep-aids",
    inStock: true,
    rating: 4.5,
    reviews: 445,
    requiresPrescription: true,
    strengthOptions: ["7.5mg", "15mg", "22.5mg", "30mg"],
    formOptions: ["Capsule"],
    tags: ["insomnia", "sleep", "benzodiazepine", "controlled"],
    variationPrices: {
      minPrice: 22.99,
      maxPrice: 34.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 15-30mg at bedtime. Elderly/debilitated: 7.5mg initially. Maximum 30mg.",
        administration: [
          "Take at bedtime",
          "Swallow capsules whole",
          "Short-term use only (7-10 days)",
          "Taper gradually if used for more than a few weeks"
        ],
        specialPopulations: "Start 7.5mg in elderly and debilitated. Contraindicated in pregnancy. Avoid in breastfeeding."
      },
      sideEffects: {
        common: ["Drowsiness", "Dizziness", "Lethargy", "Confusion", "Euphoria", "Weakness"],
        serious: ["Physical dependence", "Withdrawal syndrome", "Respiratory depression", "Anterograde amnesia", "Complex sleep behaviors", "Falls (especially elderly)"]
      },
      contraindications: [
        "Known hypersensitivity to benzodiazepines",
        "Pregnancy",
        "Sleep apnea (relative)",
        "Severe respiratory insufficiency"
      ],
      drugInteractions: [
        "CNS depressants (opioids, alcohol) - severe respiratory depression",
        "Other benzodiazepines - additive sedation",
        "CYP3A4 inhibitors - may increase temazepam levels",
        "Probenecid - decreased temazepam clearance",
        "Theophylline - may decrease sedative effects"
      ]
    }
  },

  // ADHD Medications (35-38)
  {
    id: "rx-035",
    name: "Methylphenidate",
    description: "Stimulant for ADHD treatment (Ritalin)",
    price: 42.99,
    oldPrice: 82.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "adhd-focus",
    inStock: true,
    rating: 4.7,
    reviews: 892,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "20mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["adhd", "stimulant", "controlled"],
    variationPrices: {
      minPrice: 42.99,
      maxPrice: 64.99
    },
    medicalInfo: {
      dosage: {
        standard: "ADHD: Start 5mg twice daily before breakfast and lunch. Increase by 5-10mg weekly. Maximum 60mg/day. Extended-release: 18-72mg once daily in morning.",
        administration: [
          "Take 30-45 minutes before meals",
          "Last dose should be before 6 PM to avoid insomnia",
          "Extended-release: swallow whole, do not crush or chew",
          "Can be taken with or without food"
        ],
        specialPopulations: "Not recommended in children <6 years. Use caution in elderly. Avoid in pregnancy unless benefits outweigh risks."
      },
      sideEffects: {
        common: ["Decreased appetite", "Insomnia", "Nervousness", "Headache", "Stomach pain", "Weight loss"],
        serious: ["Cardiovascular events (sudden death, MI, stroke)", "Psychiatric symptoms (psychosis, mania)", "Priapism", "Peripheral vasculopathy", "Seizures", "Growth suppression in children"]
      },
      contraindications: [
        "Hypersensitivity to methylphenidate",
        "Glaucoma",
        "Motor tics or Tourette's syndrome",
        "Use of MAOIs within 14 days",
        "Severe anxiety, tension, or agitation"
      ],
      drugInteractions: [
        "MAOIs - hypertensive crisis (contraindicated)",
        "Pressor agents - increased blood pressure",
        "Anticoagulants (warfarin) - increased levels",
        "Antidepressants (TCAs, SSRIs) - increased antidepressant levels",
        "Antihypertensives - may decrease effectiveness",
        "Alcohol - impaired judgment with long-acting forms"
      ]
    }
  },
  {
    id: "rx-036",
    name: "Amphetamine Salts",
    description: "Mixed amphetamine stimulant for ADHD (Adderall)",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "adhd-focus",
    inStock: true,
    rating: 4.8,
    reviews: 1023,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "15mg", "20mg", "30mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["adhd", "stimulant", "controlled"],
    variationPrices: {
      minPrice: 48.99,
      maxPrice: 74.99
    },
    medicalInfo: {
      dosage: {
        standard: "ADHD (ages 6+): Start 5mg once or twice daily. Increase by 5mg weekly. Maximum 40mg/day. Adults: Start 5mg 1-2 times daily, max 40mg. Extended-release: 20mg once daily.",
        administration: [
          "Take upon awakening",
          "Can take with or without food",
          "Avoid afternoon/evening doses (insomnia risk)",
          "Extended-release: swallow whole, do not crush",
          "May open capsules and sprinkle on applesauce"
        ],
        specialPopulations: "Not recommended in children <3 years. Use caution in elderly. Avoid in pregnancy."
      },
      sideEffects: {
        common: ["Loss of appetite", "Insomnia", "Dry mouth", "Weight loss", "Irritability", "Increased heart rate"],
        serious: ["Sudden cardiac death", "Stroke", "Myocardial infarction", "Psychiatric disorders (psychosis, mania, aggression)", "Seizures", "Peripheral vasculopathy", "Serotonin syndrome", "Growth suppression"]
      },
      contraindications: [
        "Advanced arteriosclerosis",
        "Symptomatic cardiovascular disease",
        "Moderate to severe hypertension",
        "Hyperthyroidism",
        "Glaucoma",
        "Agitated states",
        "History of drug abuse",
        "MAOI use within 14 days"
      ],
      drugInteractions: [
        "MAOIs - hypertensive crisis (contraindicated)",
        "Serotonergic drugs - serotonin syndrome",
        "Acidifying agents (vitamin C) - decreased absorption",
        "Alkalinizing agents (sodium bicarbonate) - increased absorption",
        "Antihypertensives - may decrease effectiveness",
        "TCAs - increased cardiovascular effects",
        "Proton pump inhibitors - may affect absorption"
      ]
    }
  },
  {
    id: "rx-037",
    name: "Lisdexamfetamine",
    description: "Prodrug stimulant for ADHD and binge eating disorder (Vyvanse)",
    price: 54.99,
    oldPrice: 108.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "adhd-focus",
    inStock: true,
    rating: 4.9,
    reviews: 967,
    requiresPrescription: true,
    strengthOptions: ["20mg", "30mg", "40mg", "50mg", "60mg", "70mg"],
    formOptions: ["Capsule"],
    tags: ["adhd", "stimulant", "controlled"],
    variationPrices: {
      minPrice: 54.99,
      maxPrice: 84.99
    },
    medicalInfo: {
      dosage: {
        standard: "ADHD (ages 6+): Start 30mg once daily in morning. Titrate by 10-20mg weekly. Maximum 70mg/day. Binge eating disorder: Start 30mg, target 50-70mg/day.",
        administration: [
          "Take once daily in the morning",
          "Can take with or without food",
          "Swallow capsule whole or open and dissolve in water",
          "Do not divide dose"
        ],
        specialPopulations: "Not recommended in children <6 years. Severe renal impairment: max 50mg/day. ESRD: max 30mg/day. Avoid in pregnancy."
      },
      sideEffects: {
        common: ["Decreased appetite", "Insomnia", "Dry mouth", "Diarrhea", "Nausea", "Anxiety", "Weight loss"],
        serious: ["Sudden death in patients with cardiac abnormalities", "Serious cardiovascular reactions", "Psychiatric adverse reactions (psychosis, mania)", "Seizures", "Peripheral vasculopathy", "Serotonin syndrome", "Growth suppression"]
      },
      contraindications: [
        "Hypersensitivity to amphetamine products",
        "MAOI use within 14 days or during treatment",
        "Not for use in severe hypertension or advanced arteriosclerosis"
      ],
      drugInteractions: [
        "MAOIs - hypertensive crisis (contraindicated)",
        "Serotonergic drugs (SSRIs, SNRIs) - serotonin syndrome",
        "Acidifying agents - decreased blood levels",
        "Alkalinizing agents - increased blood levels",
        "TCAs - enhanced sympathomimetic effects",
        "Proton pump inhibitors - may alter absorption"
      ]
    }
  },
  {
    id: "rx-038",
    name: "Atomoxetine",
    description: "Non-stimulant ADHD medication",
    price: 38.99,
    oldPrice: 74.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "adhd-focus",
    inStock: true,
    rating: 4.5,
    reviews: 567,
    requiresPrescription: true,
    strengthOptions: ["10mg", "18mg", "25mg", "40mg", "60mg", "80mg", "100mg"],
    formOptions: ["Capsule"],
    tags: ["adhd", "non-stimulant"],
    medicalInfo: {
      dosage: {
        standard: "Children/adolescents ≤70kg: Start 0.5mg/kg/day, increase after 3 days to 1.2mg/kg/day. Maximum 1.4mg/kg or 100mg. Adults: Start 40mg/day, target 80-100mg/day.",
        administration: [
          "Take once daily in morning or divided twice daily",
          "Can be taken with or without food",
          "Swallow capsules whole",
          "Full effect may take 2-4 weeks"
        ],
        specialPopulations: "Reduce dose by 50% in moderate hepatic impairment, 75% in severe. Reduce dose with CYP2D6 inhibitors. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Vomiting", "Decreased appetite", "Fatigue", "Dizziness", "Dry mouth", "Constipation", "Insomnia"],
        serious: ["Suicidal ideation", "Severe liver injury", "Cardiovascular effects (increased HR and BP)", "Priapism", "Aggressive behavior", "Psychotic/manic symptoms", "Allergic reactions"]
      },
      contraindications: [
        "Narrow-angle glaucoma",
        "Use of MAOIs within 14 days",
        "Severe cardiovascular disorders",
        "Pheochromocytoma"
      ],
      drugInteractions: [
        "MAOIs - contraindicated due to hypertensive reactions",
        "CYP2D6 inhibitors (paroxetine, fluoxetine, quinidine) - increased atomoxetine levels",
        "Pressor agents (albuterol) - increased cardiovascular effects",
        "Antihypertensives - may affect blood pressure control"
      ]
    }
  },

  // Diabetes & Metabolic (39-43)
  {
    id: "rx-039",
    name: "Modafinil",
    description: "Wakefulness-promoting agent for narcolepsy and shift work sleep disorder",
    price: 58.99,
    oldPrice: 112.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "adhd-focus",
    inStock: true,
    rating: 4.8,
    reviews: 734,
    requiresPrescription: true,
    strengthOptions: ["100mg", "200mg"],
    formOptions: ["Tablet"],
    tags: ["wakefulness", "cognitive", "narcolepsy"],
    medicalInfo: {
      dosage: {
        standard: "Narcolepsy/OSA: 200mg once daily in morning. Shift work sleep disorder: 200mg 1 hour before work shift. Maximum 400mg/day.",
        administration: [
          "Take in morning for narcolepsy/OSA",
          "Take 1 hour before shift for shift work disorder",
          "Can be taken with or without food",
          "Food may delay absorption by ~1 hour"
        ],
        specialPopulations: "Consider lower dose in elderly. Reduce dose 50% in severe hepatic impairment. Use caution in pregnancy."
      },
      sideEffects: {
        common: ["Headache", "Nausea", "Nervousness", "Anxiety", "Insomnia", "Dizziness"],
        serious: ["Serious rash (Stevens-Johnson syndrome)", "Psychiatric symptoms (depression, mania, hallucinations)", "Cardiovascular effects", "Angioedema", "Multi-organ hypersensitivity"]
      },
      contraindications: [
        "Known hypersensitivity to modafinil or armodafinil",
        "History of left ventricular hypertrophy (relative)"
      ],
      drugInteractions: [
        "CYP3A4 substrates (cyclosporine) - decreased levels",
        "CYP2C19 substrates (phenytoin, diazepam) - increased levels",
        "Hormonal contraceptives - decreased effectiveness",
        "Warfarin - monitor INR",
        "MAOIs - use caution"
      ]
    }
  },
  {
    id: "rx-040",
    name: "Metformin",
    description: "First-line medication for type 2 diabetes management",
    price: 8.99,
    oldPrice: 19.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "diabetes",
    inStock: true,
    rating: 4.9,
    reviews: 412,
    requiresPrescription: true,
    strengthOptions: ["500mg", "850mg", "1000mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["diabetes", "blood-sugar"],
    medicalInfo: {
      dosage: {
        standard: "Adults: Start 500mg twice daily or 850mg once daily with meals. Gradually increase. Maximum 2550mg daily in divided doses.",
        administration: [
          "Take with meals to reduce GI side effects",
          "Swallow extended-release tablets whole, do not crush or chew",
          "For immediate-release: take 2-3 times daily with meals",
          "Increase dose gradually every 1-2 weeks as tolerated",
          "Monitor blood glucose regularly"
        ],
        specialPopulations: "Not recommended for children under 10. Elderly: use conservative dosing and monitor renal function. Contraindicated in severe renal impairment (eGFR <30)."
      },
      sideEffects: {
        common: ["Diarrhea", "Nausea", "Upset stomach", "Gas", "Bloating", "Loss of appetite", "Metallic taste"],
        serious: ["Lactic acidosis (rare but serious)", "Vitamin B12 deficiency with long-term use", "Hypoglycemia (especially with other diabetes meds)", "Severe allergic reactions"]
      },
      contraindications: [
        "Severe renal impairment (eGFR <30 mL/min/1.73m²)",
        "Acute or chronic metabolic acidosis",
        "Diabetic ketoacidosis",
        "Severe hepatic impairment",
        "Acute heart failure or unstable heart failure",
        "Conditions predisposing to lactic acidosis"
      ],
      drugInteractions: [
        "Contrast dyes (iodinated) - hold metformin 48hrs before/after procedure",
        "Alcohol - increases lactic acidosis risk",
        "Cimetidine - increases metformin levels",
        "Insulin, sulfonylureas - increased hypoglycemia risk",
        "Carbonic anhydrase inhibitors - increased lactic acidosis risk",
        "Diuretics - may affect kidney function and metformin clearance",
        "Corticosteroids - may reduce glucose-lowering effect"
      ]
    }
  },
  {
    id: "rx-041",
    name: "Insulin",
    description: "Injectable hormone for diabetes management (various formulations)",
    price: 64.99,
    oldPrice: 124.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "diabetes",
    inStock: true,
    rating: 4.8,
    reviews: 789,
    requiresPrescription: true,
    strengthOptions: ["Rapid-Acting", "Short-Acting", "Intermediate", "Long-Acting"],
    formOptions: ["Injectable", "Pen"],
    tags: ["diabetes", "insulin", "injectable"],
    variationPrices: {
      minPrice: 64.99,
      maxPrice: 149.99
    },
    medicalInfo: {
      dosage: {
        standard: "Highly individualized. Type 1 DM: 0.4-1.0 units/kg/day. Type 2 DM: Start basal insulin 10 units/day or 0.1-0.2 units/kg, titrate based on glucose.",
        administration: [
          "Subcutaneous injection (abdomen, thigh, upper arm, buttocks)",
          "Rotate injection sites to prevent lipodystrophy",
          "Rapid: with meals. Long-acting: once daily, same time",
          "Never share pens or needles",
          "Store unopened in refrigerator; in-use at room temp"
        ],
        specialPopulations: "Adjust for renal function, illness, activity. Pregnancy: insulin is preferred. Elderly: higher hypoglycemia risk."
      },
      sideEffects: {
        common: ["Hypoglycemia", "Weight gain", "Injection site reactions", "Lipodystrophy"],
        serious: ["Severe hypoglycemia (seizures, coma, death)", "Hypokalemia", "Severe allergic reactions"]
      },
      contraindications: [
        "During episodes of hypoglycemia",
        "Hypersensitivity to insulin or excipients"
      ],
      drugInteractions: [
        "Antidiabetic agents - increased hypoglycemia risk",
        "Beta-blockers - mask hypoglycemia symptoms",
        "ACE inhibitors - increased insulin sensitivity",
        "Corticosteroids, thiazides - decrease effectiveness",
        "Alcohol - unpredictable glucose effects"
      ]
    }
  },
  {
    id: "rx-042",
    name: "Sitagliptin",
    description: "DPP-4 inhibitor for type 2 diabetes",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "diabetes",
    inStock: true,
    rating: 4.7,
    reviews: 334,
    requiresPrescription: true,
    strengthOptions: ["25mg", "50mg", "100mg"],
    formOptions: ["Tablet"],
    tags: ["diabetes", "blood-sugar"],
    variationPrices: {
      minPrice: 48.99,
      maxPrice: 74.99
    },
    medicalInfo: {
      dosage: {
        standard: "100mg once daily with or without food. Renal impairment: eGFR 30-50: 50mg daily. eGFR <30 or ESRD: 25mg daily.",
        administration: [
          "Take once daily at any time",
          "Can be taken with or without food",
          "Swallow tablets whole",
          "Dose adjustment needed for renal impairment"
        ],
        specialPopulations: "Adjust dose based on renal function. Use caution in elderly. Limited data in pregnancy."
      },
      sideEffects: {
        common: ["Nasopharyngitis", "Upper respiratory infection", "Headache"],
        serious: ["Pancreatitis", "Severe joint pain", "Heart failure", "Hypersensitivity reactions (angioedema, anaphylaxis)", "Hypoglycemia (with insulin/sulfonylureas)"]
      },
      contraindications: [
        "History of serious hypersensitivity to sitagliptin",
        "Type 1 diabetes",
        "Diabetic ketoacidosis"
      ],
      drugInteractions: [
        "Insulin, sulfonylureas - increased hypoglycemia risk",
        "Digoxin - slight increase in digoxin levels"
      ]
    }
  },
  {
    id: "rx-043",
    name: "Liraglutide",
    description: "GLP-1 receptor agonist for diabetes and weight management",
    price: 124.99,
    oldPrice: 248.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "weight-loss",
    inStock: true,
    rating: 4.8,
    reviews: 567,
    requiresPrescription: true,
    strengthOptions: ["0.6mg", "1.2mg", "1.8mg"],
    formOptions: ["Injectable Pen"],
    tags: ["diabetes", "weight-loss", "glp1"],
    variationPrices: {
      minPrice: 124.99,
      maxPrice: 194.99
    },
    medicalInfo: {
      dosage: {
        standard: "Diabetes: Start 0.6mg SC once daily for 1 week, then 1.2mg. May increase to 1.8mg. Weight management: up to 3mg daily.",
        administration: [
          "Subcutaneous injection once daily, any time",
          "Inject in abdomen, thigh, or upper arm",
          "Rotate injection sites",
          "Can be given with or without food"
        ],
        specialPopulations: "Not recommended in severe renal impairment. Not recommended in pregnancy. Use caution in elderly."
      },
      sideEffects: {
        common: ["Nausea", "Vomiting", "Diarrhea", "Decreased appetite", "Constipation"],
        serious: ["Thyroid C-cell tumors (medullary thyroid carcinoma)", "Pancreatitis", "Hypoglycemia (with sulfonylureas/insulin)", "Renal impairment", "Gallbladder disease", "Suicidal thoughts"]
      },
      contraindications: [
        "Personal or family history of medullary thyroid carcinoma",
        "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
        "Serious hypersensitivity to liraglutide"
      ],
      drugInteractions: [
        "Insulin, sulfonylureas - increased hypoglycemia",
        "Oral medications - may delay gastric emptying",
        "Warfarin - may require INR monitoring"
      ]
    }
  },

  // Cardiovascular (44-53)
  {
    id: "rx-044",
    name: "Atorvastatin",
    description: "Statin medication to lower cholesterol and prevent cardiovascular disease",
    price: 15.99,
    oldPrice: 29.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.7,
    reviews: 189,
    requiresPrescription: true,
    strengthOptions: ["10mg", "20mg", "40mg", "80mg"],
    formOptions: ["Tablet"],
    tags: ["cholesterol", "heart-health"],
    variationPrices: {
      minPrice: 15.99,
      maxPrice: 25.99
    },
    medicalInfo: {
      dosage: {
        standard: "Start 10-20mg once daily. May increase to 40-80mg for aggressive LDL reduction. Take at same time daily.",
        administration: [
          "Take once daily at any time, with or without food",
          "Swallow tablets whole",
          "Consistent timing recommended",
          "Full effect seen in 2-4 weeks"
        ],
        specialPopulations: "Use lower doses in renal impairment. Avoid in active liver disease. Contraindicated in pregnancy and breastfeeding."
      },
      sideEffects: {
        common: ["Muscle pain", "Diarrhea", "Nausea", "Headache", "Joint pain"],
        serious: ["Rhabdomyolysis", "Myopathy", "Hepatotoxicity", "New-onset diabetes", "Cognitive impairment"]
      },
      contraindications: [
        "Active liver disease",
        "Pregnancy and breastfeeding",
        "Known hypersensitivity"
      ],
      drugInteractions: [
        "CYP3A4 inhibitors (clarithromycin, itraconazole) - increased statin levels, myopathy risk",
        "Gemfibrozil - increased myopathy risk",
        "Digoxin - increased digoxin levels",
        "Oral contraceptives - increased hormone levels",
        "Grapefruit juice - increased atorvastatin levels"
      ]
    }
  },
  {
    id: "rx-045",
    name: "Simvastatin",
    description: "Statin for cholesterol management",
    price: 12.99,
    oldPrice: 24.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.6,
    reviews: 234,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "20mg", "40mg", "80mg"],
    formOptions: ["Tablet"],
    tags: ["cholesterol", "heart-health"],
    medicalInfo: {
      dosage: {
        standard: "Start 10-20mg once daily in evening. Range: 5-40mg. Maximum 80mg (reserved for specific patients). Take with evening meal.",
        administration: [
          "Take once daily in the evening",
          "Can take with or without food",
          "80mg dose: use only in patients on 80mg chronically",
          "Avoid grapefruit juice"
        ],
        specialPopulations: "Lower starting dose in elderly. Contraindicated in pregnancy. Chinese patients: limit to 20mg with niacin."
      },
      sideEffects: {
        common: ["Headache", "Muscle pain", "Abdominal pain", "Constipation"],
        serious: ["Rhabdomyolysis (especially at 80mg dose)", "Myopathy", "Hepatotoxicity", "Interstitial lung disease"]
      },
      contraindications: [
        "Active liver disease",
        "Pregnancy and breastfeeding",
        "Concurrent use with strong CYP3A4 inhibitors"
      ],
      drugInteractions: [
        "Strong CYP3A4 inhibitors (itraconazole, clarithromycin) - contraindicated",
        "Gemfibrozil - increased myopathy risk",
        "Amiodarone - limit simvastatin to 20mg",
        "Diltiazem, verapamil - limit to 10mg",
        "Grapefruit juice - avoid large amounts"
      ]
    }
  },
  {
    id: "rx-046",
    name: "Rosuvastatin",
    description: "High-potency statin for cholesterol reduction",
    price: 18.99,
    oldPrice: 36.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.8,
    reviews: 312,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "20mg", "40mg"],
    formOptions: ["Tablet"],
    tags: ["cholesterol", "heart-health"],
    medicalInfo: {
      dosage: {
        standard: "Start 5-10mg once daily. May increase to 20-40mg. Maximum 40mg for severe hypercholesterolemia. Take at any time of day.",
        administration: [
          "Take once daily at any time",
          "Can be taken with or without food",
          "Swallow tablets whole",
          "Allow 2-4 weeks for full effect"
        ],
        specialPopulations: "Start 5mg in Asian patients. Reduce dose in severe renal impairment. Contraindicated in pregnancy."
      },
      sideEffects: {
        common: ["Headache", "Myalgia", "Abdominal pain", "Nausea", "Asthenia"],
        serious: ["Rhabdomyolysis", "Myopathy", "Hepatotoxicity", "Proteinuria", "Hematuria"]
      },
      contraindications: [
        "Active liver disease",
        "Pregnancy and breastfeeding",
        "Hypersensitivity to rosuvastatin"
      ],
      drugInteractions: [
        "Cyclosporine - contraindicated",
        "Gemfibrozil - limit rosuvastatin to 10mg",
        "Atazanavir/ritonavir - limit to 10mg",
        "Warfarin - monitor INR",
        "Antacids - take 2 hours apart"
      ]
    }
  },
  {
    id: "rx-047",
    name: "Amlodipine",
    description: "Calcium channel blocker for high blood pressure and angina",
    price: 9.99,
    oldPrice: 19.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.7,
    reviews: 445,
    requiresPrescription: true,
    strengthOptions: ["2.5mg", "5mg", "10mg"],
    formOptions: ["Tablet"],
    tags: ["blood-pressure", "heart-health"],
    medicalInfo: {
      dosage: {
        standard: "Hypertension: Start 5mg once daily. May increase to 10mg. Angina: 5-10mg once daily. Elderly/hepatic impairment: start 2.5mg.",
        administration: [
          "Take once daily at same time each day",
          "Can be taken with or without food",
          "Swallow tablets whole",
          "Full effect in 6-8 weeks"
        ],
        specialPopulations: "Start 2.5mg in elderly, small/frail, or hepatic impairment. Use caution in severe aortic stenosis."
      },
      sideEffects: {
        common: ["Peripheral edema", "Dizziness", "Flushing", "Palpitations", "Fatigue"],
        serious: ["Hypotension", "Worsening angina", "Myocardial infarction (rare)", "Severe allergic reactions"]
      },
      contraindications: [
        "Known hypersensitivity to amlodipine or dihydropyridines"
      ],
      drugInteractions: [
        "CYP3A4 inhibitors (clarithromycin, ketoconazole) - increased amlodipine levels",
        "CYP3A4 inducers (rifampin) - decreased amlodipine levels",
        "Simvastatin - limit simvastatin to 20mg",
        "Grapefruit juice - may increase levels"
      ]
    }
  },
  {
    id: "rx-048",
    name: "Lisinopril",
    description: "ACE inhibitor for high blood pressure and heart failure treatment",
    price: 12.99,
    oldPrice: 24.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.8,
    reviews: 234,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "20mg", "40mg"],
    formOptions: ["Tablet"],
    tags: ["blood-pressure", "heart-health"],
    medicalInfo: {
      dosage: {
        standard: "Hypertension: Start 10mg once daily. Usual range 20-40mg. Maximum 80mg. Heart failure: Start 5mg once daily, titrate up.",
        administration: [
          "Take once daily at same time",
          "Can be taken with or without food",
          "Swallow tablets whole",
          "Monitor blood pressure and renal function"
        ],
        specialPopulations: "Reduce dose in renal impairment (CrCl <30). Contraindicated in pregnancy. Use caution in elderly."
      },
      sideEffects: {
        common: ["Dizziness", "Headache", "Fatigue", "Cough (dry, persistent)", "Hypotension"],
        serious: ["Angioedema", "Hyperkalemia", "Renal impairment", "Hypotension", "Hepatic failure", "Fetal toxicity"]
      },
      contraindications: [
        "History of angioedema with ACE inhibitors",
        "Concurrent use with aliskiren in diabetes",
        "Pregnancy (2nd and 3rd trimesters)",
        "Bilateral renal artery stenosis"
      ],
      drugInteractions: [
        "NSAIDs - reduced antihypertensive effect, renal impairment",
        "Potassium supplements, K-sparing diuretics - hyperkalemia",
        "Lithium - increased lithium levels",
        "Aliskiren (in diabetes) - contraindicated",
        "Neprilysin inhibitors (sacubitril) - increased angioedema risk"
      ]
    }
  },
  {
    id: "rx-049",
    name: "Metoprolol",
    description: "Beta-blocker for high blood pressure, angina, and heart rhythm disorders",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.6,
    reviews: 156,
    requiresPrescription: true,
    strengthOptions: ["25mg", "50mg", "100mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["blood-pressure", "heart-rhythm"],
    medicalInfo: {
      dosage: {
        standard: "Hypertension: Start 50mg twice daily or 100mg ER once daily. Titrate weekly. Maximum 400mg/day. Angina: 50-200mg twice daily.",
        administration: [
          "Immediate-release: 2-3 times daily with meals",
          "Extended-release: once daily, swallow whole",
          "Take at same time each day",
          "Do NOT stop abruptly - taper gradually"
        ],
        specialPopulations: "Use caution in hepatic impairment. Reduce dose in elderly. Not recommended in pregnancy unless necessary."
      },
      sideEffects: {
        common: ["Fatigue", "Dizziness", "Depression", "Bradycardia", "Cold extremities"],
        serious: ["Heart block", "Severe bradycardia", "Heart failure exacerbation", "Bronchospasm", "Mask hypoglycemia symptoms"]
      },
      contraindications: [
        "Severe bradycardia or heart block",
        "Cardiogenic shock",
        "Decompensated heart failure",
        "Sick sinus syndrome",
        "Severe peripheral arterial disease"
      ],
      drugInteractions: [
        "CYP2D6 inhibitors (fluoxetine, paroxetine) - increased metoprolol levels",
        "Verapamil, diltiazem - bradycardia, heart block",
        "Clonidine - severe rebound hypertension if stopped",
        "NSAIDs - reduced antihypertensive effect",
        "Insulin, oral hypoglycemics - mask hypoglycemia"
      ]
    }
  },
  {
    id: "rx-050",
    name: "Propranolol",
    description: "Beta-blocker for blood pressure, anxiety, and migraine prevention",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.7,
    reviews: 389,
    requiresPrescription: true,
    strengthOptions: ["10mg", "20mg", "40mg", "60mg", "80mg"],
    formOptions: ["Tablet", "Extended-Release"],
    tags: ["blood-pressure", "anxiety", "migraine"],
    medicalInfo: {
      dosage: {
        standard: "Hypertension: Start 40mg twice daily, increase to 120-240mg/day. Anxiety: 10-40mg 3-4 times daily. Migraine: 80-240mg/day in divided doses.",
        administration: [
          "Immediate-release: 2-4 times daily",
          "Extended-release: once daily at bedtime",
          "Take with food",
          "NEVER stop abruptly - taper over 1-2 weeks"
        ],
        specialPopulations: "Reduce dose in hepatic impairment and elderly. Use caution in renal impairment. Not recommended in pregnancy."
      },
      sideEffects: {
        common: ["Fatigue", "Bradycardia", "Cold extremities", "Dizziness", "Insomnia", "Nausea"],
        serious: ["Severe bradycardia", "Heart block", "Bronchospasm (especially in asthma)", "Heart failure", "Hypoglycemia (masked symptoms)", "Depression"]
      },
      contraindications: [
        "Asthma or severe COPD",
        "Severe bradycardia or heart block",
        "Cardiogenic shock",
        "Uncompensated heart failure",
        "Sick sinus syndrome"
      ],
      drugInteractions: [
        "CYP2D6 inhibitors - increased propranolol levels",
        "Calcium channel blockers - severe hypotension, bradycardia",
        "Insulin, oral hypoglycemics - mask hypoglycemia",
        "Clonidine - rebound hypertension if stopped",
        "NSAIDs - reduced antihypertensive effect"
      ]
    }
  },
  {
    id: "rx-051",
    name: "Clopidogrel",
    description: "Antiplatelet agent to prevent blood clots",
    price: 24.99,
    oldPrice: 48.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.6,
    reviews: 267,
    requiresPrescription: true,
    strengthOptions: ["75mg"],
    formOptions: ["Tablet"],
    tags: ["antiplatelet", "blood-clots"],
    medicalInfo: {
      dosage: {
        standard: "75mg once daily with or without food. ACS: loading dose 300-600mg, then 75mg daily.",
        administration: [
          "Take once daily at same time",
          "Can be taken with or without food",
          "Swallow tablets whole",
          "Continue as directed, even if feeling well"
        ],
        specialPopulations: "No dose adjustment for renal or mild-moderate hepatic impairment. Use caution in elderly. Not recommended in pregnancy."
      },
      sideEffects: {
        common: ["Bleeding", "Bruising", "Nosebleeds", "Rash", "Diarrhea", "Abdominal pain"],
        serious: ["Thrombotic thrombocytopenic purpura (TTP)", "Severe bleeding", "Intracranial hemorrhage", "Neutropenia"]
      },
      contraindications: [
        "Active pathological bleeding (peptic ulcer, intracranial hemorrhage)",
        "Hypersensitivity to clopidogrel"
      ],
      drugInteractions: [
        "Proton pump inhibitors (omeprazole, esomeprazole) - reduced clopidogrel effectiveness",
        "NSAIDs, aspirin - increased bleeding risk",
        "Anticoagulants (warfarin) - increased bleeding risk",
        "CYP2C19 inhibitors - reduced efficacy"
      ]
    }
  },
  {
    id: "rx-052",
    name: "Warfarin",
    description: "Anticoagulant to prevent blood clots (requires monitoring)",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.5,
    reviews: 223,
    requiresPrescription: true,
    strengthOptions: ["1mg", "2mg", "2.5mg", "3mg", "4mg", "5mg", "6mg", "7.5mg", "10mg"],
    formOptions: ["Tablet"],
    tags: ["anticoagulant", "blood-clots"],
    medicalInfo: {
      dosage: {
        standard: "Individualized based on INR monitoring. Initial: 2-5mg once daily. Target INR typically 2-3. Adjust based on weekly INR initially, then monthly.",
        administration: [
          "Take once daily at same time (usually evening)",
          "Can be taken with or without food",
          "Regular INR monitoring required",
          "Maintain consistent vitamin K intake"
        ],
        specialPopulations: "Lower doses in elderly. Contraindicated in pregnancy. Use caution in renal/hepatic impairment."
      },
      sideEffects: {
        common: ["Bleeding", "Bruising", "Nosebleeds"],
        serious: ["Major hemorrhage", "Intracranial bleeding", "Skin necrosis", "Purple toe syndrome", "Fetal warfarin syndrome (in pregnancy)"]
      },
      contraindications: [
        "Pregnancy",
        "Active bleeding",
        "Severe liver disease",
        "Recent or planned surgery",
        "Uncontrolled hypertension"
      ],
      drugInteractions: [
        "NSAIDs, aspirin - increased bleeding risk",
        "Antibiotics (many) - alter INR",
        "Amiodarone - increases warfarin effect",
        "Vitamin K - antagonizes warfarin",
        "Cranberry juice - may increase INR",
        "St. John's wort - decreases warfarin effect"
      ]
    }
  },
  {
    id: "rx-053",
    name: "Apixaban",
    description: "Direct oral anticoagulant (DOAC) to prevent blood clots",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.8,
    reviews: 378,
    requiresPrescription: true,
    strengthOptions: ["2.5mg", "5mg"],
    formOptions: ["Tablet"],
    tags: ["anticoagulant", "blood-clots"],
    medicalInfo: {
      dosage: {
        standard: "Atrial fibrillation: 5mg twice daily. Reduce to 2.5mg twice daily if 2+ of: age ≥80, weight ≤60kg, SCr ≥1.5. DVT/PE: 10mg twice daily for 7 days, then 5mg twice daily.",
        administration: [
          "Take twice daily at same times",
          "Can be taken with or without food",
          "If dose missed, take immediately then continue normal schedule",
          "Do NOT double dose"
        ],
        specialPopulations: "Reduce dose based on age, weight, renal function. Not recommended in CrCl <15. Avoid in pregnancy."
      },
      sideEffects: {
        common: ["Bleeding", "Bruising", "Nausea", "Anemia"],
        serious: ["Major bleeding", "Intracranial hemorrhage", "Gastrointestinal bleeding", "Spinal/epidural hematoma"]
      },
      contraindications: [
        "Active pathological bleeding",
        "Severe hypersensitivity",
        "Prosthetic heart valves (not studied)"
      ],
      drugInteractions: [
        "Strong dual inhibitors of CYP3A4 and P-gp (ketoconazole, ritonavir) - avoid or reduce dose",
        "Strong dual inducers (rifampin, carbamazepine) - avoid",
        "Antiplatelet agents, NSAIDs - increased bleeding risk",
        "Other anticoagulants - contraindicated"
      ]
    }
  },

  // Hormonal & Endocrine (54-80)
  {
    id: "rx-054",
    name: "Levothyroxine",
    description: "Thyroid hormone replacement for hypothyroidism",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.7,
    reviews: 567,
    requiresPrescription: true,
    strengthOptions: ["25mcg", "50mcg", "75mcg", "88mcg", "100mcg", "112mcg", "125mcg", "150mcg"],
    formOptions: ["Tablet"],
    tags: ["thyroid", "hormone"],
    variationPrices: {
      minPrice: 14.99,
      maxPrice: 23.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: Start 1.6 mcg/kg/day. Typical range 100-125mcg/day. Adjust by 12.5-25mcg every 4-6 weeks based on TSH. Elderly: start 25-50mcg.",
        administration: [
          "Take on empty stomach, 30-60 minutes before breakfast",
          "Take consistently at same time daily",
          "Swallow tablet with water",
          "Separate from calcium, iron, antacids by 4 hours"
        ],
        specialPopulations: "Lower starting dose in elderly and cardiovascular disease. Pregnancy: may need increased dose. Monitor TSH regularly."
      },
      sideEffects: {
        common: ["Weight loss", "Increased appetite", "Nervousness", "Tremor", "Palpitations", "Insomnia"],
        serious: ["Cardiac arrhythmias", "Angina", "Myocardial infarction (if excessive dose)", "Osteoporosis (chronic overdose)", "Adrenal crisis (if untreated adrenal insufficiency)"]
      },
      contraindications: [
        "Untreated adrenal insufficiency",
        "Acute myocardial infarction",
        "Untreated thyrotoxicosis"
      ],
      drugInteractions: [
        "Calcium, iron supplements - decreased absorption (separate by 4 hours)",
        "PPIs, H2 blockers - may decrease absorption",
        "Warfarin - may increase warfarin effect",
        "Diabetes medications - may need adjustment",
        "Estrogens - may increase levothyroxine requirements"
      ]
    }
  },
  {
    id: "rx-055",
    name: "Prednisolone",
    description: "Systemic corticosteroid for inflammation and immune suppression",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.6,
    reviews: 412,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "20mg", "40mg"],
    formOptions: ["Tablet"],
    tags: ["corticosteroid", "inflammation"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 29.99
    },
    medicalInfo: {
      dosage: {
        standard: "Highly variable based on condition. Anti-inflammatory: 5-60mg/day. Autoimmune: up to 1mg/kg/day. Taper gradually when discontinuing long-term use.",
        administration: [
          "Take with food or milk to reduce GI upset",
          "Take morning dose to mimic natural cortisol rhythm",
          "Do NOT stop abruptly after long-term use",
          "Taper dose gradually under medical supervision"
        ],
        specialPopulations: "Use lowest effective dose. Monitor growth in children. Use caution in elderly (increased adverse effect risk)."
      },
      sideEffects: {
        common: ["Increased appetite", "Weight gain", "Insomnia", "Mood changes", "Elevated blood sugar", "Fluid retention"],
        serious: ["Adrenal suppression", "Immunosuppression/infections", "Osteoporosis", "Avascular necrosis", "Peptic ulcers", "Hyperglycemia/diabetes", "Cataracts", "Growth suppression in children"]
      },
      contraindications: [
        "Systemic fungal infections",
        "Known hypersensitivity",
        "Live vaccines (relative contraindication)"
      ],
      drugInteractions: [
        "NSAIDs - increased GI bleeding risk",
        "Warfarin - variable effects on INR",
        "Diabetes medications - may decrease effectiveness",
        "CYP3A4 inducers (rifampin) - decreased prednisolone levels",
        "Live vaccines - contraindicated",
        "Diuretics - increased potassium loss"
      ]
    }
  },
  {
    id: "rx-056",
    name: "Fluticasone (Inhaled)",
    description: "Inhaled corticosteroid for asthma and COPD",
    price: 32.99,
    oldPrice: 62.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "respiratory",
    inStock: true,
    rating: 4.7,
    reviews: 534,
    requiresPrescription: true,
    strengthOptions: ["44mcg", "110mcg", "220mcg"],
    formOptions: ["Inhaler"],
    tags: ["asthma", "copd", "inhaler"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 49.99
    },
    medicalInfo: {
      dosage: {
        standard: "Asthma: Adults: 88-880mcg twice daily. Children 4-11: 88mcg twice daily. COPD: 250-500mcg twice daily. Titrate to lowest effective dose.",
        administration: [
          "Inhale by mouth twice daily, 12 hours apart",
          "Rinse mouth with water after each use (do not swallow)",
          "Shake well before each use",
          "Prime inhaler before first use or if not used for 7+ days",
          "Not for acute bronchospasm - use rescue inhaler"
        ],
        specialPopulations: "Use lowest effective dose in children to minimize growth effects. Use caution in pregnancy. Monitor growth in pediatric patients."
      },
      sideEffects: {
        common: ["Oral thrush", "Hoarseness", "Cough", "Headache", "Upper respiratory infection"],
        serious: ["Adrenal suppression", "Immunosuppression", "Decreased bone mineral density", "Glaucoma", "Cataracts", "Paradoxical bronchospasm", "Hypercorticism"]
      },
      contraindications: [
        "Primary treatment of status asthmaticus or acute asthma episodes",
        "Hypersensitivity to fluticasone"
      ],
      drugInteractions: [
        "Strong CYP3A4 inhibitors (ritonavir, ketoconazole) - increased systemic corticosteroid effects",
        "Other corticosteroids - additive effects"
      ]
    }
  },
  {
    id: "rx-057",
    name: "Salbutamol / Albuterol",
    description: "Short-acting bronchodilator for asthma and COPD",
    price: 22.99,
    oldPrice: 42.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "respiratory",
    inStock: true,
    rating: 4.8,
    reviews: 892,
    requiresPrescription: true,
    strengthOptions: ["90mcg", "100mcg"],
    formOptions: ["Inhaler"],
    tags: ["asthma", "bronchodilator", "rescue-inhaler"],
    variationPrices: {
      minPrice: 22.99,
      maxPrice: 32.99
    },
    medicalInfo: {
      dosage: {
        standard: "Acute bronchospasm: 2 inhalations (180-200mcg) every 4-6 hours as needed. Exercise-induced: 2 inhalations 15-30 minutes before exercise. Maximum: 12 inhalations/24 hours.",
        administration: [
          "Shake well before each use",
          "Exhale fully, then inhale deeply while pressing inhaler",
          "Hold breath for 10 seconds, then exhale slowly",
          "Wait 1 minute between puffs if taking multiple",
          "Prime before first use or if not used for 2+ weeks"
        ],
        specialPopulations: "Use caution in cardiovascular disorders, diabetes, hyperthyroidism. Safe in pregnancy when needed."
      },
      sideEffects: {
        common: ["Tremor", "Nervousness", "Headache", "Tachycardia", "Palpitations", "Throat irritation"],
        serious: ["Paradoxical bronchospasm", "Severe cardiovascular effects", "Hypokalemia", "Hyperglycemia"]
      },
      contraindications: [
        "Hypersensitivity to albuterol or any component"
      ],
      drugInteractions: [
        "Beta-blockers - antagonize bronchodilator effect",
        "MAOIs, tricyclic antidepressants - potentiate cardiovascular effects",
        "Digoxin - may decrease serum digoxin levels",
        "Loop/thiazide diuretics - increased risk of hypokalemia"
      ]
    }
  },
  {
    id: "rx-058",
    name: "Tiotropium",
    description: "Long-acting bronchodilator for COPD",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "respiratory",
    inStock: true,
    rating: 4.7,
    reviews: 345,
    requiresPrescription: true,
    strengthOptions: ["18mcg"],
    formOptions: ["Inhaler"],
    tags: ["copd", "bronchodilator"],
    medicalInfo: {
      dosage: {
        standard: "COPD: 2 inhalations (18mcg total) once daily at same time. Not for acute bronchospasm.",
        administration: [
          "Inhale once daily at same time",
          "Do not swallow capsules - for inhalation only",
          "Pierce capsule and inhale contents",
          "Not a rescue medication",
          "Allow time for maintenance effect (days to weeks)"
        ],
        specialPopulations: "Use caution in narrow-angle glaucoma, prostatic hyperplasia, bladder neck obstruction. Monitor renal function."
      },
      sideEffects: {
        common: ["Dry mouth", "Constipation", "Upper respiratory tract infection", "Cough"],
        serious: ["Paradoxical bronchospasm", "Immediate hypersensitivity reactions", "Angioedema", "Acute narrow-angle glaucoma", "Urinary retention"]
      },
      contraindications: [
        "Hypersensitivity to tiotropium or atropine derivatives"
      ],
      drugInteractions: [
        "Anticholinergic drugs - may increase anticholinergic effects",
        "Use caution with other inhaled medications"
      ]
    }
  },
  {
    id: "rx-059",
    name: "Omeprazole",
    description: "Proton pump inhibitor for acid reflux and ulcers",
    price: 11.99,
    oldPrice: 22.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "gastrointestinal",
    inStock: true,
    rating: 4.7,
    reviews: 734,
    requiresPrescription: false,
    strengthOptions: ["10mg", "20mg", "40mg"],
    formOptions: ["Capsule"],
    tags: ["acid-reflux", "gerd", "ppi"],
    variationPrices: {
      minPrice: 11.99,
      maxPrice: 19.99
    },
    medicalInfo: {
      dosage: {
        standard: "GERD: 20mg once daily for 4-8 weeks. H. pylori: 20mg twice daily with antibiotics. Erosive esophagitis: 20-40mg once daily. Maximum 40mg/day.",
        administration: [
          "Take 30-60 minutes before first meal of the day",
          "Swallow capsules whole, do not crush or chew",
          "Can open capsule and sprinkle on applesauce if needed",
          "Use for shortest duration necessary"
        ],
        specialPopulations: "Consider dose reduction in severe hepatic impairment. Use lowest effective dose. Not recommended long-term without reassessment."
      },
      sideEffects: {
        common: ["Headache", "Abdominal pain", "Nausea", "Diarrhea", "Vomiting", "Flatulence"],
        serious: ["Clostridium difficile infection", "Bone fractures (long-term use)", "Hypomagnesemia", "Vitamin B12 deficiency", "Acute interstitial nephritis", "Fundic gland polyps"]
      },
      contraindications: [
        "Hypersensitivity to omeprazole or substituted benzimidazoles",
        "Concurrent use with rilpivirine"
      ],
      drugInteractions: [
        "Clopidogrel - decreased clopidogrel effectiveness (avoid)",
        "Warfarin - may increase INR",
        "Methotrexate - increased methotrexate levels",
        "Rilpivirine - contraindicated",
        "Drugs requiring acid for absorption (ketoconazole, iron) - decreased absorption"
      ]
    }
  },
  {
    id: "rx-060",
    name: "Pantoprazole",
    description: "Proton pump inhibitor for GERD and erosive esophagitis",
    price: 14.99,
    oldPrice: 28.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "gastrointestinal",
    inStock: true,
    rating: 4.6,
    reviews: 623,
    requiresPrescription: true,
    strengthOptions: ["20mg", "40mg"],
    formOptions: ["Tablet"],
    tags: ["acid-reflux", "gerd", "ppi"],
    variationPrices: {
      minPrice: 14.99,
      maxPrice: 22.99
    },
    medicalInfo: {
      dosage: {
        standard: "GERD: 40mg once daily for up to 8 weeks. Erosive esophagitis: 40mg once daily for 8 weeks. Maintenance: 40mg once daily. Zollinger-Ellison: 40mg twice daily.",
        administration: [
          "Take 30 minutes before a meal",
          "Swallow tablets whole, do not crush, chew, or split",
          "Can be taken with or without food",
          "Best taken before breakfast"
        ],
        specialPopulations: "No dose adjustment for renal impairment. Use caution in severe hepatic impairment. Use shortest duration necessary."
      },
      sideEffects: {
        common: ["Headache", "Diarrhea", "Nausea", "Abdominal pain", "Vomiting", "Flatulence"],
        serious: ["C. difficile infection", "Bone fractures", "Hypomagnesemia", "Vitamin B12 deficiency", "Fundic gland polyps", "Acute interstitial nephritis", "Cutaneous/systemic lupus"]
      },
      contraindications: [
        "Hypersensitivity to pantoprazole or substituted benzimidazoles",
        "Concurrent use with rilpivirine-containing products"
      ],
      drugInteractions: [
        "Warfarin - may increase INR",
        "Methotrexate - increased methotrexate levels",
        "Rilpivirine - decreased rilpivirine levels (contraindicated)",
        "Drugs dependent on gastric pH (atazanavir, ketoconazole) - altered absorption"
      ]
    }
  },
  {
    id: "rx-061",
    name: "Famotidine",
    description: "H2 antagonist for heartburn and acid control",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "gastrointestinal",
    inStock: true,
    rating: 4.6,
    reviews: 512,
    requiresPrescription: false,
    strengthOptions: ["10mg", "20mg", "40mg"],
    formOptions: ["Tablet"],
    tags: ["acid-reflux", "heartburn"],
    medicalInfo: {
      dosage: {
        standard: "Heartburn relief/prevention: 10-20mg 15-60 minutes before meals. GERD: 20mg twice daily for 6 weeks. Ulcers: 40mg at bedtime for 4-8 weeks.",
        administration: [
          "Can be taken with or without food",
          "For prevention: take 15-60 minutes before eating",
          "Swallow tablets whole with water",
          "Do not exceed recommended dose"
        ],
        specialPopulations: "Reduce dose in severe renal impairment (CrCl <10). Safe in pregnancy. Use caution in elderly."
      },
      sideEffects: {
        common: ["Headache", "Dizziness", "Constipation", "Diarrhea"],
        serious: ["QT prolongation (high doses)", "Confusion (especially in elderly/renal impairment)", "Thrombocytopenia", "Agranulocytosis"]
      },
      contraindications: [
        "Known hypersensitivity to famotidine or other H2 blockers"
      ],
      drugInteractions: [
        "Drugs requiring acidic pH (ketoconazole, itraconazole) - decreased absorption",
        "Antacids - may decrease famotidine absorption (separate by 1-2 hours)"
      ]
    }
  },
  {
    id: "rx-062",
    name: "Azithromycin",
    description: "Macrolide antibiotic for bacterial infections",
    price: 24.99,
    oldPrice: 48.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "antibiotics",
    inStock: true,
    rating: 4.7,
    reviews: 678,
    requiresPrescription: true,
    strengthOptions: ["250mg", "500mg"],
    formOptions: ["Tablet", "Suspension"],
    tags: ["antibiotic", "bacterial-infection"],
    variationPrices: {
      minPrice: 24.99,
      maxPrice: 38.99
    },
    medicalInfo: {
      dosage: {
        standard: "Respiratory infections: 500mg on day 1, then 250mg daily for days 2-5 (Z-Pak). STIs: 1g single dose. Typical: total 1500mg over 5 days.",
        administration: [
          "Can be taken with or without food",
          "Take at same time each day",
          "Complete full course even if feeling better",
          "Suspension: shake well before each use"
        ],
        specialPopulations: "Use caution in hepatic impairment. No adjustment for renal impairment. Safe in pregnancy when needed."
      },
      sideEffects: {
        common: ["Diarrhea", "Nausea", "Abdominal pain", "Vomiting"],
        serious: ["QT prolongation", "Torsades de pointes", "Hepatotoxicity", "C. difficile colitis", "Severe allergic reactions", "Infantile hypertrophic pyloric stenosis (infants)"]
      },
      contraindications: [
        "History of cholestatic jaundice/hepatic dysfunction with prior azithromycin",
        "Hypersensitivity to macrolides"
      ],
      drugInteractions: [
        "QT-prolonging drugs - increased risk of arrhythmias",
        "Warfarin - increased bleeding risk",
        "Nelfinavir - increased azithromycin levels",
        "Antacids - decreased azithromycin absorption (separate by 2 hours)"
      ]
    }
  },
  {
    id: "rx-063",
    name: "Amoxicillin",
    description: "Penicillin antibiotic for various bacterial infections",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "antibiotics",
    inStock: true,
    rating: 4.8,
    reviews: 892,
    requiresPrescription: true,
    strengthOptions: ["250mg", "500mg", "875mg"],
    formOptions: ["Capsule", "Tablet", "Suspension"],
    tags: ["antibiotic", "bacterial-infection"],
    variationPrices: {
      minPrice: 12.99,
      maxPrice: 21.99
    },
    medicalInfo: {
      dosage: {
        standard: "Adults: 250-500mg every 8 hours or 500-875mg every 12 hours. Children: 20-40 mg/kg/day in divided doses. H. pylori: 1000mg twice daily with other agents.",
        administration: [
          "Can be taken with or without food",
          "Take at evenly spaced intervals (every 8 or 12 hours)",
          "Complete full course of therapy",
          "Suspension: shake well, refrigerate, discard after 14 days"
        ],
        specialPopulations: "Adjust dose for severe renal impairment (CrCl <30). Generally safe in pregnancy. Monitor for rash in infectious mononucleosis."
      },
      sideEffects: {
        common: ["Diarrhea", "Nausea", "Vomiting", "Rash"],
        serious: ["Anaphylaxis", "C. difficile colitis", "Stevens-Johnson syndrome", "Seizures (high doses)", "Crystalluria"]
      },
      contraindications: [
        "Serious hypersensitivity to penicillins",
        "History of penicillin-associated cholestatic jaundice"
      ],
      drugInteractions: [
        "Oral contraceptives - may decrease effectiveness",
        "Warfarin - may increase INR",
        "Allopurinol - increased risk of rash",
        "Methotrexate - increased methotrexate toxicity",
        "Probenecid - increased amoxicillin levels"
      ]
    }
  },
  {
    id: "rx-064",
    name: "Ciprofloxacin",
    description: "Fluoroquinolone antibiotic for various infections",
    price: 28.99,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "antibiotics",
    inStock: true,
    rating: 4.6,
    reviews: 445,
    requiresPrescription: true,
    strengthOptions: ["250mg", "500mg", "750mg"],
    formOptions: ["Tablet"],
    tags: ["antibiotic", "bacterial-infection"],
    variationPrices: {
      minPrice: 28.99,
      maxPrice: 44.99
    },
    medicalInfo: {
      dosage: {
        standard: "UTI (uncomplicated): 250mg twice daily for 3 days. Complicated infections: 500-750mg twice daily for 7-14 days. Adjust for renal impairment.",
        administration: [
          "Take twice daily, 12 hours apart",
          "Can be taken with or without food, but avoid dairy",
          "Drink plenty of fluids",
          "Take 2 hours before or 6 hours after antacids, supplements",
          "Avoid sun exposure"
        ],
        specialPopulations: "Reduce dose in renal impairment. Avoid in children/adolescents (musculoskeletal effects). Not recommended in pregnancy."
      },
      sideEffects: {
        common: ["Nausea", "Diarrhea", "Dizziness", "Headache", "Insomnia"],
        serious: ["Tendon rupture", "Peripheral neuropathy", "CNS effects (seizures, psychosis)", "QT prolongation", "Aortic dissection/aneurysm", "Hypoglycemia", "C. difficile colitis", "Myasthenia gravis exacerbation"]
      },
      contraindications: [
        "Hypersensitivity to fluoroquinolones",
        "Concurrent tizanidine use",
        "Myasthenia gravis"
      ],
      drugInteractions: [
        "Tizanidine - contraindicated",
        "Theophylline - increased theophylline levels",
        "Warfarin - increased INR",
        "Antacids, iron, zinc, calcium - decreased absorption",
        "NSAIDs - increased seizure risk",
        "QT-prolonging drugs - additive effects"
      ]
    }
  },
  {
    id: "rx-065",
    name: "Doxycycline",
    description: "Tetracycline antibiotic for bacterial infections and acne",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "antibiotics",
    inStock: true,
    rating: 4.7,
    reviews: 567,
    requiresPrescription: true,
    strengthOptions: ["50mg", "75mg", "100mg", "150mg"],
    formOptions: ["Capsule", "Tablet"],
    tags: ["antibiotic", "acne"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 30.99
    },
    medicalInfo: {
      dosage: {
        standard: "Infections: 100mg twice daily on day 1, then 100mg once or twice daily. Acne: 50-100mg once or twice daily. Malaria prophylaxis: 100mg once daily.",
        administration: [
          "Take with full glass of water",
          "Can take with food to reduce GI upset",
          "Avoid lying down for 30 minutes after dose",
          "Avoid dairy products, antacids, iron within 2 hours",
          "Use sun protection"
        ],
        specialPopulations: "Avoid in children <8 years (tooth discoloration). Contraindicated in pregnancy. Reduce dose in hepatic impairment."
      },
      sideEffects: {
        common: ["Nausea", "Vomiting", "Diarrhea", "Photosensitivity", "Rash"],
        serious: ["Esophageal ulceration", "C. difficile colitis", "Intracranial hypertension", "Hepatotoxicity", "Severe skin reactions", "Tooth discoloration (children)"]
      },
      contraindications: [
        "Pregnancy",
        "Children under 8 years",
        "Hypersensitivity to tetracyclines"
      ],
      drugInteractions: [
        "Isotretinoin - increased intracranial pressure",
        "Warfarin - increased INR",
        "Oral contraceptives - may decrease effectiveness",
        "Antacids, calcium, iron, magnesium - decreased absorption",
        "Penicillins - may interfere with bactericidal action",
        "Barbiturates, carbamazepine, phenytoin - decreased doxycycline levels"
      ]
    }
  },
  {
    id: "rx-066",
    name: "Valacyclovir",
    description: "Antiviral for herpes simplex and zoster infections",
    price: 34.99,
    oldPrice: 68.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "antivirals",
    inStock: true,
    rating: 4.8,
    reviews: 623,
    requiresPrescription: true,
    strengthOptions: ["500mg", "1000mg"],
    formOptions: ["Tablet"],
    tags: ["antiviral", "herpes"],
    variationPrices: {
      minPrice: 34.99,
      maxPrice: 52.99
    },
    medicalInfo: {
      dosage: {
        standard: "Herpes zoster: 1000mg three times daily for 7 days. Genital herpes (initial): 1000mg twice daily for 10 days. Recurrent: 500mg twice daily for 3 days. Suppression: 500-1000mg once daily.",
        administration: [
          "Can be taken with or without food",
          "Start at earliest sign of infection",
          "Take with plenty of water",
          "Complete full course of therapy"
        ],
        specialPopulations: "Reduce dose based on renal function (CrCl). Generally safe in pregnancy for herpes treatment. Use caution in elderly."
      },
      sideEffects: {
        common: ["Headache", "Nausea", "Abdominal pain"],
        serious: ["Thrombotic thrombocytopenic purpura/hemolytic uremic syndrome (TTP/HUS) in immunocompromised", "Acute renal failure", "CNS effects (confusion, hallucinations, seizures)"]
      },
      contraindications: [
        "Hypersensitivity to valacyclovir or acyclovir"
      ],
      drugInteractions: [
        "Nephrotoxic drugs - increased risk of renal impairment",
        "Cimetidine, probenecid - increased valacyclovir levels"
      ]
    }
  },
  {
    id: "rx-067",
    name: "Acyclovir",
    description: "Antiviral for herpes infections",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "antivirals",
    inStock: true,
    rating: 4.7,
    reviews: 534,
    requiresPrescription: true,
    strengthOptions: ["200mg", "400mg", "800mg"],
    formOptions: ["Tablet", "Capsule"],
    tags: ["antiviral", "herpes"],
    variationPrices: {
      minPrice: 22.99,
      maxPrice: 36.99
    },
    medicalInfo: {
      dosage: {
        standard: "Herpes zoster: 800mg 5 times daily for 7-10 days. Genital herpes (initial): 200mg 5 times daily or 400mg 3 times daily for 7-10 days. Suppression: 400mg twice daily.",
        administration: [
          "Can be taken with or without food",
          "Start at earliest sign/symptom",
          "Space doses evenly throughout day",
          "Maintain adequate hydration",
          "Complete full course"
        ],
        specialPopulations: "Adjust dose for renal impairment (CrCl-based). Generally safe in pregnancy. Use caution in dehydration or pre-existing renal disease."
      },
      sideEffects: {
        common: ["Nausea", "Diarrhea", "Headache", "Malaise"],
        serious: ["Renal failure (especially with inadequate hydration)", "TTP/HUS in immunocompromised", "Neurotoxicity (confusion, hallucinations, seizures)", "Crystalluria"]
      },
      contraindications: [
        "Hypersensitivity to acyclovir or valacyclovir"
      ],
      drugInteractions: [
        "Nephrotoxic drugs - increased renal toxicity risk",
        "Probenecid - increased acyclovir levels",
        "Mycophenolate mofetil - increased levels of both drugs"
      ]
    }
  },
  {
    id: "rx-068",
    name: "Tamoxifen",
    description: "Selective estrogen receptor modulator for breast cancer treatment",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.6,
    reviews: 234,
    requiresPrescription: true,
    strengthOptions: ["10mg", "20mg"],
    formOptions: ["Tablet"],
    tags: ["cancer", "serm", "hormone"],
    variationPrices: {
      minPrice: 48.99,
      maxPrice: 72.99
    },
    medicalInfo: {
      dosage: {
        standard: "Breast cancer treatment: 20mg once daily for 5-10 years. Breast cancer risk reduction: 20mg once daily for 5 years.",
        administration: [
          "Take once daily at same time",
          "Can be taken with or without food",
          "Swallow tablets whole with water",
          "Continue as directed even if feeling well"
        ],
        specialPopulations: "Contraindicated in pregnancy. Use caution in women with history of thromboembolic events. Monitor for endometrial changes."
      },
      sideEffects: {
        common: ["Hot flashes", "Vaginal discharge", "Irregular menses", "Nausea", "Fatigue"],
        serious: ["Endometrial cancer", "Uterine sarcoma", "Stroke", "Pulmonary embolism", "Deep vein thrombosis", "Cataracts", "Retinopathy"]
      },
      contraindications: [
        "Pregnancy",
        "History of or active thromboembolic disease (when used for risk reduction)",
        "Concurrent warfarin for risk reduction",
        "Known hypersensitivity"
      ],
      drugInteractions: [
        "CYP2D6 inhibitors (paroxetine, fluoxetine) - decreased tamoxifen efficacy",
        "Warfarin - increased bleeding risk",
        "Aromatase inhibitors - avoid concomitant use",
        "Rifampin - decreased tamoxifen levels"
      ]
    }
  },
  {
    id: "rx-069",
    name: "Methotrexate",
    description: "Antimetabolite for autoimmune diseases and cancer",
    price: 38.99,
    oldPrice: 74.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "immunomodulators",
    inStock: true,
    rating: 4.5,
    reviews: 312,
    requiresPrescription: true,
    strengthOptions: ["2.5mg", "5mg", "7.5mg", "10mg", "15mg"],
    formOptions: ["Tablet", "Injectable"],
    tags: ["autoimmune", "cancer"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 62.99
    },
    medicalInfo: {
      dosage: {
        standard: "Rheumatoid arthritis: 7.5-15mg once weekly. Psoriasis: 10-25mg once weekly. Cancer: varies widely. Always taken with folic acid supplementation (1mg daily except MTX day).",
        administration: [
          "Take once weekly on same day each week",
          "Can be taken with or without food",
          "Take folic acid supplement daily (except on MTX day)",
          "Avoid alcohol",
          "Regular blood monitoring required"
        ],
        specialPopulations: "Contraindicated in pregnancy and breastfeeding. Reduce dose in renal impairment. Avoid in significant hepatic disease or alcoholism."
      },
      sideEffects: {
        common: ["Nausea", "Stomatitis", "Fatigue", "Elevated liver enzymes"],
        serious: ["Bone marrow suppression", "Hepatotoxicity/cirrhosis", "Pulmonary toxicity", "Renal failure", "Severe infections", "GI perforation", "Stevens-Johnson syndrome"]
      },
      contraindications: [
        "Pregnancy and breastfeeding",
        "Alcoholism or chronic liver disease",
        "Immunodeficiency syndromes",
        "Blood dyscrasias",
        "Hypersensitivity"
      ],
      drugInteractions: [
        "NSAIDs - increased methotrexate toxicity",
        "Proton pump inhibitors - may increase methotrexate levels",
        "Trimethoprim-sulfamethoxazole - increased bone marrow suppression",
        "Penicillins - decreased methotrexate clearance",
        "Folic acid (high dose) - may decrease methotrexate efficacy"
      ]
    }
  },
  {
    id: "rx-070",
    name: "Hydroxychloroquine",
    description: "Immunomodulator for rheumatoid arthritis and lupus",
    price: 32.99,
    oldPrice: 62.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "immunomodulators",
    inStock: true,
    rating: 4.6,
    reviews: 389,
    requiresPrescription: true,
    strengthOptions: ["200mg"],
    formOptions: ["Tablet"],
    tags: ["autoimmune", "lupus", "arthritis"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 49.99
    },
    medicalInfo: {
      dosage: {
        standard: "Rheumatoid arthritis/Lupus: 200-400mg daily (≤5 mg/kg actual body weight). Malaria prophylaxis: 400mg weekly. Full effect may take 3-6 months.",
        administration: [
          "Take with food or milk to reduce GI upset",
          "Take once daily or divided into two doses",
          "Swallow tablets whole",
          "Regular eye exams required (every 6-12 months)"
        ],
        specialPopulations: "Adjust dose based on actual body weight. Use caution in renal/hepatic impairment. Monitor in G6PD deficiency. Use in pregnancy only if benefits outweigh risks."
      },
      sideEffects: {
        common: ["Nausea", "Stomach cramps", "Headache", "Dizziness", "Skin rash"],
        serious: ["Retinopathy (irreversible)", "Cardiomyopathy", "QT prolongation", "Hypoglycemia", "Blood dyscrasias", "Seizures", "Myopathy"]
      },
      contraindications: [
        "Retinal or visual field changes",
        "Known hypersensitivity to 4-aminoquinoline compounds",
        "Long-term use in children (retinopathy risk)"
      ],
      drugInteractions: [
        "QT-prolonging drugs - additive effects",
        "Digoxin - increased digoxin levels",
        "Insulin, antidiabetic drugs - increased hypoglycemia risk",
        "Mefloquine - increased seizure risk",
        "Antacids - decreased hydroxychloroquine absorption"
      ]
    }
  },
  {
    id: "rx-071",
    name: "Oral Contraceptives",
    description: "Combined estrogen-progestin contraceptive for birth control",
    price: 24.99,
    oldPrice: 48.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "fertility-reproductive",
    inStock: true,
    rating: 4.7,
    reviews: 892,
    requiresPrescription: true,
    strengthOptions: ["Various formulations"],
    formOptions: ["Tablet"],
    tags: ["contraceptive", "birth-control"],
    variationPrices: {
      minPrice: 24.99,
      maxPrice: 37.99
    },
    medicalInfo: {
      dosage: {
        standard: "One tablet daily at same time. Monophasic: same hormone dose daily. Phasic: varying doses. Start on first day of period or Sunday after period starts.",
        administration: [
          "Take at same time every day",
          "Follow package instructions carefully",
          "Use backup contraception first 7 days",
          "If missed pill: take as soon as remembered",
          "Start new pack immediately after finishing old pack"
        ],
        specialPopulations: "Not recommended in women >35 who smoke. Contraindicated in history of thromboembolism. Use caution with hypertension, diabetes, migraines."
      },
      sideEffects: {
        common: ["Nausea", "Breast tenderness", "Headache", "Weight changes", "Mood changes", "Breakthrough bleeding"],
        serious: ["Venous thromboembolism", "Stroke", "Myocardial infarction", "Hepatic adenoma", "Gallbladder disease", "Hypertension"]
      },
      contraindications: [
        "Thrombophlebitis or thromboembolic disorders",
        "Cerebrovascular or coronary artery disease",
        "Breast cancer or estrogen-dependent neoplasia",
        "Undiagnosed abnormal uterine bleeding",
        "Pregnancy",
        "Hepatic tumor or disease",
        "Women >35 who smoke ≥15 cigarettes/day"
      ],
      drugInteractions: [
        "Rifampin, anticonvulsants - decreased contraceptive efficacy",
        "St. John's wort - decreased efficacy",
        "Some antibiotics - may decrease efficacy (use backup)",
        "Warfarin - variable effects on INR",
        "Lamotrigine - decreased lamotrigine levels"
      ]
    }
  },
  {
    id: "rx-072",
    name: "Levonorgestrel",
    description: "Emergency contraception (Plan B)",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "fertility-reproductive",
    inStock: true,
    rating: 4.8,
    reviews: 734,
    requiresPrescription: false,
    strengthOptions: ["1.5mg"],
    formOptions: ["Tablet"],
    tags: ["emergency-contraception", "birth-control"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 28.99
    },
    medicalInfo: {
      dosage: {
        standard: "One 1.5mg tablet as soon as possible within 72 hours (3 days) of unprotected intercourse. More effective if taken sooner. Can be used up to 5 days but efficacy decreases.",
        administration: [
          "Take as soon as possible after unprotected sex",
          "Can be taken with or without food",
          "Most effective within first 24 hours",
          "Does not protect against STIs",
          "Not for routine contraception"
        ],
        specialPopulations: "Less effective in women with BMI >25 or weight >165 lbs (consider ulipristal or copper IUD). Safe for most women including adolescents."
      },
      sideEffects: {
        common: ["Nausea", "Abdominal pain", "Fatigue", "Headache", "Dizziness", "Breast tenderness", "Menstrual changes"],
        serious: ["Ectopic pregnancy (rare)", "Severe allergic reactions (rare)"]
      },
      contraindications: [
        "Known pregnancy (not effective, but not harmful)",
        "Hypersensitivity to levonorgestrel"
      ],
      drugInteractions: [
        "CYP3A4 inducers (rifampin, anticonvulsants, St. John's wort) - decreased efficacy",
        "Ulipristal acetate - may reduce efficacy if taken together"
      ]
    }
  },
  {
    id: "rx-073",
    name: "Testosterone",
    description: "Hormone replacement therapy for trans men and hypogonadism",
    price: 54.99,
    oldPrice: 108.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "anabolic-steroids",
    inStock: true,
    rating: 4.8,
    reviews: 567,
    requiresPrescription: true,
    strengthOptions: ["50mg/ml", "100mg/ml", "200mg/ml"],
    formOptions: ["Injectable", "Gel", "Patch"],
    tags: ["testosterone", "hrt", "trans-masculine"],
    variationPrices: {
      minPrice: 54.99,
      maxPrice: 84.99
    },
    medicalInfo: {
      dosage: {
        standard: "Injectable: 50-200mg IM every 1-2 weeks or 75-100mg weekly. Gel: 50-100mg applied daily. Patch: 2-6mg applied nightly. Individualize based on testosterone levels.",
        administration: [
          "Injectable: Deep IM injection into gluteal muscle",
          "Gel: Apply to shoulders, upper arms, or abdomen (not genitals)",
          "Wash hands after gel application",
          "Avoid skin contact with others after gel",
          "Monitor testosterone levels regularly"
        ],
        specialPopulations: "Contraindicated in pregnancy and breastfeeding. Use caution in cardiovascular disease, sleep apnea, prostate issues. Monitor for polycythemia."
      },
      sideEffects: {
        common: ["Acne", "Oily skin", "Increased red blood cells", "Mood changes", "Increased libido", "Voice deepening (desired in trans HRT)"],
        serious: ["Polycythemia", "Sleep apnea", "Cardiovascular events", "Hepatotoxicity (oral forms)", "Prostate issues", "Decreased fertility"]
      },
      contraindications: [
        "Prostate cancer",
        "Breast cancer in males",
        "Pregnancy and breastfeeding",
        "Serious cardiac, hepatic, or renal disease"
      ],
      drugInteractions: [
        "Anticoagulants - increased bleeding risk",
        "Insulin, oral hypoglycemics - may decrease blood glucose",
        "Corticosteroids - increased fluid retention"
      ]
    }
  },
  {
    id: "rx-074",
    name: "Estradiol",
    description: "Estrogen hormone therapy for trans women and menopause",
    price: 38.99,
    oldPrice: 74.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.9,
    reviews: 623,
    requiresPrescription: true,
    strengthOptions: ["0.5mg", "1mg", "2mg"],
    formOptions: ["Tablet", "Patch", "Injectable", "Gel"],
    tags: ["estrogen", "hrt", "trans-feminine", "menopause"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 62.99
    },
    medicalInfo: {
      dosage: {
        standard: "Trans HRT: Start 1-2mg oral daily or 0.025-0.1mg patch twice weekly. Titrate to 2-6mg oral or equivalent. Menopause: 0.5-1mg oral daily or 0.025-0.05mg patch twice weekly.",
        administration: [
          "Oral: Take at same time daily with or without food",
          "Patch: Apply to clean, dry, hairless skin on lower abdomen or buttocks",
          "Change patch twice weekly",
          "Injectable: IM injection every 1-2 weeks",
          "Gel: Apply to skin as directed"
        ],
        specialPopulations: "Contraindicated in pregnancy. Use lowest effective dose in menopause. Monitor for thromboembolism risk factors."
      },
      sideEffects: {
        common: ["Breast tenderness", "Nausea", "Headache", "Fluid retention", "Mood changes"],
        serious: ["Venous thromboembolism", "Stroke", "Myocardial infarction", "Breast cancer", "Endometrial cancer (without progestin)", "Gallbladder disease"]
      },
      contraindications: [
        "Undiagnosed abnormal uterine bleeding",
        "Breast cancer or estrogen-dependent neoplasia",
        "Active or history of VTE/PE",
        "Active or history of arterial thromboembolic disease",
        "Liver dysfunction or disease",
        "Pregnancy"
      ],
      drugInteractions: [
        "CYP3A4 inducers (rifampin, anticonvulsants) - decreased estradiol levels",
        "CYP3A4 inhibitors - increased estradiol levels",
        "Thyroid hormone - may increase thyroid hormone requirements"
      ]
    }
  },
  {
    id: "rx-075",
    name: "Spironolactone",
    description: "Anti-androgen and diuretic used in trans HRT and blood pressure",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.7,
    reviews: 512,
    requiresPrescription: true,
    strengthOptions: ["25mg", "50mg", "100mg"],
    formOptions: ["Tablet"],
    tags: ["anti-androgen", "hrt", "trans-feminine", "diuretic"],
    variationPrices: {
      minPrice: 16.99,
      maxPrice: 26.99
    },
    medicalInfo: {
      dosage: {
        standard: "Trans HRT: Start 50-100mg once or twice daily. Titrate to 100-200mg daily in 1-2 doses. Hypertension/edema: 25-200mg daily. Monitor potassium.",
        administration: [
          "Take with food to reduce GI upset",
          "Can divide into 1-2 daily doses",
          "Take consistently at same time",
          "Monitor electrolytes and renal function regularly",
          "Avoid high-potassium foods"
        ],
        specialPopulations: "Reduce dose in renal impairment. Contraindicated in severe renal dysfunction, hyperkalemia. Use caution in elderly."
      },
      sideEffects: {
        common: ["Hyperkalemia", "Breast tenderness/enlargement (gynecomastia)", "Menstrual irregularities", "Fatigue", "Dizziness", "Nausea"],
        serious: ["Severe hyperkalemia", "Hypotension", "Acute kidney injury", "Metabolic acidosis"]
      },
      contraindications: [
        "Hyperkalemia",
        "Acute renal insufficiency",
        "Significant renal impairment",
        "Anuria",
        "Addison's disease",
        "Concurrent use with eplerenone"
      ],
      drugInteractions: [
        "ACE inhibitors, ARBs - increased hyperkalemia risk",
        "Potassium supplements - hyperkalemia",
        "NSAIDs - reduced diuretic effect, increased hyperkalemia risk",
        "Lithium - increased lithium levels",
        "Digoxin - may increase or decrease digoxin levels"
      ]
    }
  },
  {
    id: "rx-076",
    name: "Finasteride",
    description: "5-alpha reductase inhibitor for hair loss and prostate health",
    price: 28.99,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.6,
    reviews: 789,
    requiresPrescription: true,
    strengthOptions: ["1mg", "5mg"],
    formOptions: ["Tablet"],
    tags: ["hair-loss", "prostate", "anti-androgen"],
    variationPrices: {
      minPrice: 28.99,
      maxPrice: 44.99
    },
    medicalInfo: {
      dosage: {
        standard: "Male pattern baldness: 1mg once daily. Benign prostatic hyperplasia: 5mg once daily. May take 3-6 months to see hair growth effects.",
        administration: [
          "Take once daily at same time",
          "Can be taken with or without food",
          "Swallow tablets whole",
          "Women of childbearing age should not handle crushed tablets",
          "Continue as directed for sustained benefit"
        ],
        specialPopulations: "Not for use in women or children. No adjustment needed for renal impairment. Use caution in hepatic impairment."
      },
      sideEffects: {
        common: ["Decreased libido", "Erectile dysfunction", "Ejaculation disorder", "Breast tenderness"],
        serious: ["Persistent sexual dysfunction (post-finasteride syndrome)", "Depression", "Suicidal ideation", "High-grade prostate cancer (may mask detection)", "Male breast cancer (rare)"]
      },
      contraindications: [
        "Women who are or may become pregnant",
        "Children",
        "Hypersensitivity to finasteride"
      ],
      drugInteractions: [
        "Minimal drug interactions",
        "May affect PSA levels (decreases by ~50%)"
      ]
    }
  },
  {
    id: "rx-077",
    name: "Cyproterone Acetate",
    description: "Potent anti-androgen used in trans HRT (where licensed)",
    price: 42.99,
    oldPrice: 82.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.7,
    reviews: 334,
    requiresPrescription: true,
    strengthOptions: ["10mg", "50mg", "100mg"],
    formOptions: ["Tablet"],
    tags: ["anti-androgen", "hrt", "trans-feminine"],
    variationPrices: {
      minPrice: 42.99,
      maxPrice: 67.99
    },
    medicalInfo: {
      dosage: {
        standard: "Trans HRT: 10-50mg daily (with estrogen). Prostate cancer: 200-300mg daily in divided doses. Use lowest effective dose. Monitor liver function.",
        administration: [
          "Take with or after meals",
          "Can divide into 2-3 doses if higher dose",
          "Take at same time daily",
          "Regular liver function monitoring required",
          "Use with caution at doses >50mg"
        ],
        specialPopulations: "Contraindicated in severe hepatic disease. Not for use in pregnancy. Monitor for depression, liver function, blood glucose."
      },
      sideEffects: {
        common: ["Fatigue", "Decreased libido", "Erectile dysfunction", "Gynecomastia", "Weight gain"],
        serious: ["Hepatotoxicity", "Liver failure", "Meningioma (long-term, high-dose)", "Thromboembolic events", "Depression", "Osteoporosis"]
      },
      contraindications: [
        "Severe chronic liver disease",
        "Hepatic tumors",
        "Dubin-Johnson or Rotor syndrome",
        "History of or existing thromboembolic disorders",
        "Severe diabetes with vascular changes",
        "Meningioma",
        "Pregnancy"
      ],
      drugInteractions: [
        "CYP3A4 inhibitors - increased cyproterone levels",
        "Alcohol - increased hepatotoxicity risk",
        "Statins - may increase statin levels"
      ]
    }
  },
  {
    id: "rx-078",
    name: "Progesterone",
    description: "Hormone therapy for reproductive health and HRT",
    price: 32.99,
    oldPrice: 62.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.6,
    reviews: 445,
    requiresPrescription: true,
    strengthOptions: ["100mg", "200mg"],
    formOptions: ["Capsule", "Cream"],
    tags: ["progesterone", "hrt", "hormone"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 49.99
    },
    medicalInfo: {
      dosage: {
        standard: "Menopause HRT with estrogen: 200mg at bedtime for 12 days per month. Amenorrhea: 400mg at bedtime for 10 days. Trans HRT: 100-200mg at bedtime (optional).",
        administration: [
          "Oral: Take at bedtime on empty stomach or with light snack",
          "Vaginal cream: Follow specific instructions for application",
          "Swallow capsules whole",
          "May cause drowsiness - take at bedtime"
        ],
        specialPopulations: "Use caution in conditions exacerbated by fluid retention. Not recommended in undiagnosed vaginal bleeding."
      },
      sideEffects: {
        common: ["Drowsiness", "Dizziness", "Headache", "Breast tenderness", "Mood changes", "Bloating"],
        serious: ["Thromboembolism", "Depression", "Cholestatic jaundice", "Allergic reactions"]
      },
      contraindications: [
        "Known or suspected breast cancer",
        "Undiagnosed abnormal genital bleeding",
        "Active or history of VTE/PE",
        "Active or history of arterial thromboembolic disease",
        "Known liver dysfunction or disease",
        "Peanut allergy (some formulations)"
      ],
      drugInteractions: [
        "CYP3A4 inducers - decreased progesterone levels",
        "CYP3A4 inhibitors - increased progesterone levels",
        "Benzodiazepines - may enhance sedative effects"
      ]
    }
  },
  {
    id: "rx-079",
    name: "Leuprorelin / Triptorelin",
    description: "GnRH agonist for puberty blocking and endocrine therapy",
    price: 248.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.8,
    reviews: 189,
    requiresPrescription: true,
    strengthOptions: ["3.75mg", "7.5mg", "11.25mg"],
    formOptions: ["Injectable"],
    tags: ["puberty-blocker", "gnrh-agonist", "trans-youth"],
    variationPrices: {
      minPrice: 248.99,
      maxPrice: 384.99
    },
    medicalInfo: {
      dosage: {
        standard: "Puberty suppression: 3.75mg IM monthly or 11.25mg IM every 3 months. Prostate cancer: 7.5mg IM monthly or 22.5mg every 3 months. Endometriosis: 3.75mg monthly.",
        administration: [
          "Intramuscular injection by healthcare provider",
          "Monthly or every 3 months depending on formulation",
          "Depot injection - slow release over time",
          "Regular monitoring required",
          "Initial testosterone/estrogen flare may occur in first weeks"
        ],
        specialPopulations: "Monitor bone density in long-term pediatric use. Use with caution in osteoporosis risk. Reversible upon discontinuation."
      },
      sideEffects: {
        common: ["Hot flashes", "Injection site reactions", "Headache", "Mood changes", "Decreased bone density", "Fatigue"],
        serious: ["Tumor flare (initial worsening of symptoms)", "Severe bone density loss", "Cardiovascular events", "Seizures", "Pituitary apoplexy", "Spinal cord compression"]
      },
      contraindications: [
        "Undiagnosed abnormal vaginal bleeding",
        "Pregnancy",
        "Breastfeeding",
        "Hypersensitivity to GnRH agonists"
      ],
      drugInteractions: [
        "Hyperprolactinemic drugs - may reduce efficacy",
        "QT-prolonging drugs - additive QT effects"
      ]
    }
  },
  {
    id: "rx-080",
    name: "Sildenafil",
    description: "PDE5 inhibitor for erectile dysfunction and pulmonary hypertension",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "sexual-health",
    inStock: true,
    rating: 4.9,
    reviews: 1234,
    requiresPrescription: true,
    strengthOptions: ["25mg", "50mg", "100mg"],
    formOptions: ["Tablet"],
    tags: ["erectile-dysfunction", "ed", "sexual-health"],
    variationPrices: {
      minPrice: 48.99,
      maxPrice: 74.99
    },
    medicalInfo: {
      dosage: {
        standard: "Erectile dysfunction: Start 50mg as needed, 30-60 minutes before sexual activity. Range: 25-100mg. Maximum once daily. Pulmonary hypertension: 20mg three times daily.",
        administration: [
          "Take 30-60 minutes before sexual activity",
          "Can be taken with or without food (high-fat meals may delay)",
          "Effective for 4-5 hours",
          "Do not take more than once in 24 hours",
          "Sexual stimulation required for effect"
        ],
        specialPopulations: "Start 25mg in elderly, hepatic/renal impairment, or with CYP3A4 inhibitors. Use caution in cardiovascular disease."
      },
      sideEffects: {
        common: ["Headache", "Flushing", "Dyspepsia", "Nasal congestion", "Visual disturbances (blue tinge)", "Dizziness"],
        serious: ["Priapism (erection >4 hours - medical emergency)", "Sudden vision loss (NAION)", "Sudden hearing loss", "Cardiovascular events", "Severe hypotension"]
      },
      contraindications: [
        "Concurrent nitrates or nitric oxide donors (absolute contraindication)",
        "Concurrent riociguat",
        "Severe cardiovascular disorders",
        "Recent stroke or MI (<6 months)",
        "Severe hepatic impairment",
        "Hypotension (<90/50 mmHg)",
        "Retinitis pigmentosa"
      ],
      drugInteractions: [
        "Nitrates - severe hypotension (contraindicated)",
        "Alpha-blockers - hypotension (use caution, separate timing)",
        "CYP3A4 inhibitors (ritonavir, ketoconazole) - increased sildenafil levels",
        "CYP3A4 inducers - decreased sildenafil levels",
        "Other PDE5 inhibitors - do not combine"
      ]
    }
  },

  // II. RESEARCH CHEMICALS (81-120) - Lab license required
  
  // RC Stimulants (81-86)
  {
    id: "rc-081",
    name: "3-MMC (3-Methylmethcathinone)",
    description: "Research cathinone stimulant for authorized laboratory use",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-stimulants",
    inStock: true,
    rating: 4.7,
    reviews: 45,
    requiresLabLicense: true,
    tags: ["cathinone", "stimulant", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 89.99,
      maxPrice: 139.99
    }
  },
  {
    id: "rc-082",
    name: "4-MMC (Mephedrone)",
    description: "Research cathinone compound for laboratory analysis",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-stimulants",
    inStock: true,
    rating: 4.6,
    reviews: 38,
    requiresLabLicense: true,
    tags: ["cathinone", "stimulant", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 94.99,
      maxPrice: 144.99
    }
  },
  {
    id: "rc-083",
    name: "α-PVP",
    description: "Synthetic stimulant research compound (pyrrolidinopentiophenone)",
    price: 124.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-stimulants",
    inStock: true,
    rating: 4.5,
    reviews: 28,
    requiresLabLicense: true,
    tags: ["stimulant", "pyrrolidine", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 124.99,
      maxPrice: 194.99
    }
  },
  {
    id: "rc-084",
    name: "Methylone (bk-MDMA)",
    description: "Empathogen research compound (beta-keto MDMA analog)",
    price: 98.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-empathogens",
    inStock: true,
    rating: 4.6,
    reviews: 32,
    requiresLabLicense: true,
    tags: ["empathogen", "mdma-analog", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 98.99,
      maxPrice: 154.99
    }
  },
  {
    id: "rc-085",
    name: "Ethylone",
    description: "Empathogen research compound for laboratory study",
    price: 92.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-empathogens",
    inStock: true,
    rating: 4.5,
    reviews: 25,
    requiresLabLicense: true,
    tags: ["empathogen", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 92.99,
      maxPrice: 144.99
    }
  },
  {
    id: "rc-086",
    name: "5-MAPB / 6-APB",
    description: "Entactogen research compounds for authorized labs",
    price: 112.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-empathogens",
    inStock: true,
    rating: 4.7,
    reviews: 41,
    requiresLabLicense: true,
    tags: ["entactogen", "empathogen", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 112.99,
      maxPrice: 174.99
    }
  },

  // RC Dissociatives (87-89)
  {
    id: "rc-087",
    name: "2-FDCK",
    description: "Fluorinated ketamine analog for dissociative research",
    price: 134.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-dissociatives",
    inStock: true,
    rating: 4.8,
    reviews: 37,
    requiresLabLicense: true,
    tags: ["dissociative", "ketamine-analog", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 134.99,
      maxPrice: 209.99
    }
  },
  {
    id: "rc-088",
    name: "MXE (Methoxetamine)",
    description: "Dissociative research compound for laboratory use",
    price: 142.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-dissociatives",
    inStock: true,
    rating: 4.7,
    reviews: 33,
    requiresLabLicense: true,
    tags: ["dissociative", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 142.99,
      maxPrice: 219.99
    }
  },
  {
    id: "rc-089",
    name: "DCK (Deschloroketamine)",
    description: "Dissociative ketamine analog for research purposes",
    price: 138.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-dissociatives",
    inStock: true,
    rating: 4.6,
    reviews: 29,
    requiresLabLicense: true,
    tags: ["dissociative", "ketamine-analog", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 138.99,
      maxPrice: 214.99
    }
  },

  // RC Psychedelics (90-97)
  {
    id: "rc-090",
    name: "2C-B",
    description: "Psychedelic phenethylamine research compound",
    price: 148.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.8,
    reviews: 52,
    requiresLabLicense: true,
    tags: ["psychedelic", "phenethylamine", "research"],
    strengthOptions: ["10mg", "25mg", "50mg", "100mg"],
    formOptions: ["Powder", "Pellet"],
    variationPrices: {
      minPrice: 148.99,
      maxPrice: 229.99
    }
  },
  {
    id: "rc-091",
    name: "2C-I",
    description: "Psychedelic phenethylamine for research",
    price: 142.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.7,
    reviews: 44,
    requiresLabLicense: true,
    tags: ["psychedelic", "phenethylamine", "research"],
    strengthOptions: ["10mg", "25mg", "50mg", "100mg"],
    formOptions: ["Powder", "Pellet"],
    variationPrices: {
      minPrice: 142.99,
      maxPrice: 219.99
    }
  },
  {
    id: "rc-092",
    name: "2C-E",
    description: "Psychedelic phenethylamine research compound",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.6,
    reviews: 38,
    requiresLabLicense: true,
    tags: ["psychedelic", "phenethylamine", "research"],
    strengthOptions: ["10mg", "25mg", "50mg", "100mg"],
    formOptions: ["Powder", "Pellet"],
    variationPrices: {
      minPrice: 139.99,
      maxPrice: 214.99
    }
  },
  {
    id: "rc-093",
    name: "25I-NBOMe",
    description: "NBOMe family psychedelic research compound",
    price: 152.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.5,
    reviews: 31,
    requiresLabLicense: true,
    tags: ["psychedelic", "nbome", "research"],
    strengthOptions: ["500mcg", "1mg"],
    formOptions: ["Blotter", "Powder"],
    variationPrices: {
      minPrice: 152.99,
      maxPrice: 234.99
    }
  },
  {
    id: "rc-094",
    name: "25C-NBOMe",
    description: "NBOMe phenethylamine for laboratory research",
    price: 148.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.5,
    reviews: 27,
    requiresLabLicense: true,
    tags: ["psychedelic", "nbome", "research"],
    strengthOptions: ["500mcg", "1mg"],
    formOptions: ["Blotter", "Powder"],
    variationPrices: {
      minPrice: 148.99,
      maxPrice: 229.99
    }
  },
  {
    id: "rc-095",
    name: "5-MeO-DMT",
    description: "Potent tryptamine psychedelic for research",
    price: 168.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "tryptamines-lysergamides",
    inStock: true,
    rating: 4.9,
    reviews: 47,
    requiresLabLicense: true,
    tags: ["psychedelic", "tryptamine", "research"],
    strengthOptions: ["10mg", "25mg", "50mg", "100mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 168.99,
      maxPrice: 259.99
    }
  },
  {
    id: "rc-096",
    name: "DMT (N,N-Dimethyltryptamine)",
    description: "Classic tryptamine psychedelic for research context",
    price: 156.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "tryptamines-lysergamides",
    inStock: true,
    rating: 4.8,
    reviews: 56,
    requiresLabLicense: true,
    tags: ["psychedelic", "tryptamine", "research"],
    strengthOptions: ["50mg", "100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 156.99,
      maxPrice: 244.99
    }
  },
  {
    id: "rc-097",
    name: "LSD Analogs (AL-LAD, 1P-LSD)",
    description: "Lysergamide research compounds",
    price: 164.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "tryptamines-lysergamides",
    inStock: true,
    rating: 4.7,
    reviews: 43,
    requiresLabLicense: true,
    tags: ["psychedelic", "lysergamide", "research"],
    strengthOptions: ["100mcg", "200mcg"],
    formOptions: ["Blotter", "Powder"],
    variationPrices: {
      minPrice: 164.99,
      maxPrice: 254.99
    }
  },

  // RC Tryptamines (98-99)
  {
    id: "rc-098",
    name: "4-ACO-DMT",
    description: "Synthetic tryptamine (psilocin prodrug class)",
    price: 142.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "tryptamines-lysergamides",
    inStock: true,
    rating: 4.7,
    reviews: 39,
    requiresLabLicense: true,
    tags: ["tryptamine", "psilocin-analog", "research"],
    strengthOptions: ["25mg", "50mg", "100mg", "250mg"],
    formOptions: ["Powder", "Pellet"],
    variationPrices: {
      minPrice: 142.99,
      maxPrice: 219.99
    }
  },
  {
    id: "rc-099",
    name: "5-HTP (Research Grade)",
    description: "Tryptamine precursor for research applications",
    price: 78.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "biochemicals",
    inStock: true,
    rating: 4.6,
    reviews: 67,
    requiresLabLicense: true,
    tags: ["tryptamine", "precursor", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Capsule"],
    variationPrices: {
      minPrice: 78.99,
      maxPrice: 124.99
    }
  },

  // RC Cannabinoids (100-110)
  {
    id: "rc-100",
    name: "JWH-018",
    description: "Synthetic cannabinoid research compound",
    price: 118.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-cannabinoids",
    inStock: true,
    rating: 4.5,
    reviews: 34,
    requiresLabLicense: true,
    tags: ["cannabinoid", "synthetic", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 118.99,
      maxPrice: 184.99
    }
  },
  {
    id: "rc-101",
    name: "AB-FUBINACA",
    description: "Synthetic cannabinoid for research",
    price: 128.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-cannabinoids",
    inStock: true,
    rating: 4.4,
    reviews: 26,
    requiresLabLicense: true,
    tags: ["cannabinoid", "synthetic", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 128.99,
      maxPrice: 199.99
    }
  },
  {
    id: "rc-102",
    name: "AM-2201",
    description: "Synthetic cannabinoid research compound",
    price: 122.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-cannabinoids",
    inStock: true,
    rating: 4.5,
    reviews: 29,
    requiresLabLicense: true,
    tags: ["cannabinoid", "synthetic", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 122.99,
      maxPrice: 189.99
    }
  },
  {
    id: "rc-103",
    name: "THC-O Acetate",
    description: "Synthetic cannabinoid analog research compound",
    price: 132.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-cannabinoids",
    inStock: true,
    rating: 4.6,
    reviews: 35,
    requiresLabLicense: true,
    tags: ["cannabinoid", "synthetic", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 132.99,
      maxPrice: 204.99
    }
  },
  {
    id: "rc-104",
    name: "Etizolam",
    description: "Thienodiazepine research compound",
    price: 96.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-benzodiazepines",
    inStock: true,
    rating: 4.7,
    reviews: 48,
    requiresLabLicense: true,
    tags: ["benzodiazepine-analog", "thienodiazepine", "research"],
    strengthOptions: ["1mg", "2mg"],
    formOptions: ["Pellet", "Powder"],
    variationPrices: {
      minPrice: 96.99,
      maxPrice: 149.99
    }
  },
  {
    id: "rc-105",
    name: "Flualprazolam",
    description: "Research benzodiazepine analog",
    price: 104.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-benzodiazepines",
    inStock: true,
    rating: 4.6,
    reviews: 41,
    requiresLabLicense: true,
    tags: ["benzodiazepine-analog", "research"],
    strengthOptions: ["1mg", "2mg"],
    formOptions: ["Pellet", "Powder"],
    variationPrices: {
      minPrice: 104.99,
      maxPrice: 162.99
    }
  },
  {
    id: "rc-106",
    name: "Clonazolam",
    description: "Potent benzodiazepine analog for research",
    price: 108.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-benzodiazepines",
    inStock: true,
    rating: 4.5,
    reviews: 36,
    requiresLabLicense: true,
    tags: ["benzodiazepine-analog", "research"],
    strengthOptions: ["0.5mg", "1mg"],
    formOptions: ["Pellet", "Powder"],
    variationPrices: {
      minPrice: 108.99,
      maxPrice: 169.99
    }
  },
  {
    id: "rc-107",
    name: "U-47700",
    description: "Synthetic opioid research compound (historical)",
    price: 198.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-opioids",
    inStock: false,
    rating: 4.3,
    reviews: 18,
    requiresLabLicense: true,
    tags: ["opioid-analog", "research", "historical"],
    strengthOptions: ["10mg", "25mg", "50mg"],
    formOptions: ["Powder"],
    variationPrices: {
      minPrice: 198.99,
      maxPrice: 299.99
    }
  },
  {
    id: "rc-108",
    name: "AH-7921",
    description: "Synthetic opioid research compound",
    price: 186.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-opioids",
    inStock: false,
    rating: 4.2,
    reviews: 15,
    requiresLabLicense: true,
    tags: ["opioid-analog", "research"],
    strengthOptions: ["10mg", "25mg", "50mg"],
    formOptions: ["Powder"],
    variationPrices: {
      minPrice: 186.99,
      maxPrice: 284.99
    }
  },
  {
    id: "rc-109",
    name: "MT-45",
    description: "Synthetic opioid research compound",
    price: 192.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-opioids",
    inStock: false,
    rating: 4.1,
    reviews: 12,
    requiresLabLicense: true,
    tags: ["opioid-analog", "research"],
    strengthOptions: ["10mg", "25mg", "50mg"],
    formOptions: ["Powder"],
    variationPrices: {
      minPrice: 192.99,
      maxPrice: 289.99
    }
  },
  {
    id: "rc-110",
    name: "FUB-AMB",
    description: "Synthetic cannabinoid research compound",
    price: 126.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-cannabinoids",
    inStock: true,
    rating: 4.5,
    reviews: 28,
    requiresLabLicense: true,
    tags: ["cannabinoid", "synthetic", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 126.99,
      maxPrice: 194.99
    }
  },

  // Additional RC Stimulants (111-120)
  {
    id: "rc-111",
    name: "4-CMC",
    description: "Cathinone research compound",
    price: 88.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-stimulants",
    inStock: true,
    rating: 4.5,
    reviews: 32,
    requiresLabLicense: true,
    tags: ["cathinone", "stimulant", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 88.99,
      maxPrice: 137.99
    }
  },
  {
    id: "rc-112",
    name: "3-CMC",
    description: "Cathinone research compound for labs",
    price: 86.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-stimulants",
    inStock: true,
    rating: 4.4,
    reviews: 29,
    requiresLabLicense: true,
    tags: ["cathinone", "stimulant", "research"],
    strengthOptions: ["100mg", "250mg", "500mg", "1g"],
    formOptions: ["Powder", "Crystal"],
    variationPrices: {
      minPrice: 86.99,
      maxPrice: 134.99
    }
  },
  {
    id: "rc-113",
    name: "6-APB",
    description: "Entactogen research compound",
    price: 108.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-empathogens",
    inStock: true,
    rating: 4.7,
    reviews: 38,
    requiresLabLicense: true,
    tags: ["entactogen", "empathogen", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Pellet"],
    variationPrices: {
      minPrice: 108.99,
      maxPrice: 169.99
    }
  },
  {
    id: "rc-114",
    name: "1P-LSD",
    description: "Lysergamide research analog",
    price: 158.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "tryptamines-lysergamides",
    inStock: true,
    rating: 4.8,
    reviews: 45,
    requiresLabLicense: true,
    tags: ["lysergamide", "psychedelic", "research"],
    strengthOptions: ["100mcg", "200mcg"],
    formOptions: ["Blotter", "Powder"],
    variationPrices: {
      minPrice: 158.99,
      maxPrice: 244.99
    }
  },
  {
    id: "rc-115",
    name: "DOC (2,5-Dimethoxy-4-chloroamphetamine)",
    description: "Psychedelic phenethylamine research compound",
    price: 144.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.6,
    reviews: 33,
    requiresLabLicense: true,
    tags: ["psychedelic", "phenethylamine", "research"],
    strengthOptions: ["1mg", "2.5mg", "5mg"],
    formOptions: ["Blotter", "Powder"],
    variationPrices: {
      minPrice: 144.99,
      maxPrice: 224.99
    }
  },
  {
    id: "rc-116",
    name: "DOB",
    description: "Psychedelic phenethylamine for research",
    price: 146.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.6,
    reviews: 31,
    requiresLabLicense: true,
    tags: ["psychedelic", "phenethylamine", "research"],
    strengthOptions: ["1mg", "2.5mg", "5mg"],
    formOptions: ["Blotter", "Powder"],
    variationPrices: {
      minPrice: 146.99,
      maxPrice: 226.99
    }
  },
  {
    id: "rc-117",
    name: "NBOMe Family Analogs",
    description: "Various NBOMe phenethylamine research compounds",
    price: 154.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: true,
    rating: 4.5,
    reviews: 27,
    requiresLabLicense: true,
    tags: ["psychedelic", "nbome", "research"],
    strengthOptions: ["500mcg", "1mg"],
    formOptions: ["Blotter", "Powder"],
    variationPrices: {
      minPrice: 154.99,
      maxPrice: 239.99
    }
  },
  {
    id: "rc-118",
    name: "5-Cl-ADB",
    description: "Synthetic cannabinoid research compound",
    price: 124.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "rc-cannabinoids",
    inStock: true,
    rating: 4.4,
    reviews: 24,
    requiresLabLicense: true,
    tags: ["cannabinoid", "synthetic", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 124.99,
      maxPrice: 192.99
    }
  },
  {
    id: "rc-119",
    name: "5-F-ADB",
    description: "Synthetic cannabinoid for research",
    price: 128.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "rc-cannabinoids",
    inStock: true,
    rating: 4.5,
    reviews: 26,
    requiresLabLicense: true,
    tags: ["cannabinoid", "synthetic", "research"],
    strengthOptions: ["100mg", "250mg", "500mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 128.99,
      maxPrice: 199.99
    }
  },
  {
    id: "rc-120",
    name: "Research Peptides (Lab-Grade)",
    description: "High-purity peptides for laboratory research",
    price: 164.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "biochemicals",
    inStock: true,
    rating: 4.8,
    reviews: 52,
    requiresLabLicense: true,
    tags: ["peptides", "biochemistry", "research"],
    strengthOptions: ["5mg", "10mg", "25mg"],
    formOptions: ["Powder", "Solution"],
    variationPrices: {
      minPrice: 164.99,
      maxPrice: 254.99
    }
  },

  // III. NOOTROPICS, PEPTIDES & SARMs (121-150)
  
  // Cognitive Enhancers (121-135)
  {
    id: "noot-121",
    name: "Armodafinil",
    description: "R-enantiomer of modafinil for wakefulness promotion",
    price: 62.99,
    oldPrice: 118.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.8,
    reviews: 623,
    requiresPrescription: true,
    strengthOptions: ["50mg", "150mg", "200mg", "250mg"],
    formOptions: ["Tablet"],
    tags: ["wakefulness", "cognitive", "narcolepsy"],
    variationPrices: {
      minPrice: 62.99,
      maxPrice: 99.99
    }
  },
  {
    id: "noot-122",
    name: "Piracetam",
    description: "Classic nootropic for cognitive enhancement",
    price: 32.99,
    oldPrice: 62.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.6,
    reviews: 534,
    requiresPrescription: false,
    strengthOptions: ["800mg", "1200mg"],
    formOptions: ["Capsule", "Powder"],
    tags: ["nootropic", "cognitive", "memory"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 49.99
    }
  },
  {
    id: "noot-123",
    name: "Aniracetam",
    description: "Racetam nootropic for focus and anxiety",
    price: 38.99,
    oldPrice: 74.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.7,
    reviews: 445,
    requiresPrescription: false,
    strengthOptions: ["750mg"],
    formOptions: ["Capsule", "Powder"],
    tags: ["nootropic", "cognitive", "anxiety"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 58.99
    }
  },
  {
    id: "noot-124",
    name: "Oxiracetam",
    description: "Racetam nootropic for memory and learning",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.6,
    reviews: 378,
    requiresPrescription: false,
    strengthOptions: ["750mg"],
    formOptions: ["Capsule", "Powder"],
    tags: ["nootropic", "cognitive", "memory"],
    variationPrices: {
      minPrice: 42.99,
      maxPrice: 64.99
    }
  },
  {
    id: "noot-125",
    name: "Phenylpiracetam",
    description: "Potent racetam with stimulant-like properties",
    price: 54.99,
    oldPrice: 108.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.8,
    reviews: 512,
    requiresPrescription: false,
    strengthOptions: ["100mg"],
    formOptions: ["Capsule"],
    tags: ["nootropic", "cognitive", "energy"],
    variationPrices: {
      minPrice: 54.99,
      maxPrice: 84.99
    }
  },
  {
    id: "noot-126",
    name: "Noopept",
    description: "Peptide-like nootropic for cognitive enhancement",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.7,
    reviews: 623,
    requiresPrescription: false,
    strengthOptions: ["10mg"],
    formOptions: ["Capsule", "Powder"],
    tags: ["nootropic", "cognitive", "neuroprotection"],
    variationPrices: {
      minPrice: 28.99,
      maxPrice: 44.99
    }
  },
  {
    id: "noot-127",
    name: "Phenibut",
    description: "GABAergic nootropic for anxiety and cognitive function",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.5,
    reviews: 489,
    requiresPrescription: false,
    strengthOptions: ["250mg", "500mg"],
    formOptions: ["Capsule", "Powder"],
    tags: ["nootropic", "anxiety", "gaba"],
    variationPrices: {
      minPrice: 34.99,
      maxPrice: 52.99
    }
  },
  {
    id: "noot-128",
    name: "CDP-Choline (Citicoline)",
    description: "Choline precursor for cognitive support",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.7,
    reviews: 678,
    requiresPrescription: false,
    strengthOptions: ["250mg", "500mg"],
    formOptions: ["Capsule"],
    tags: ["nootropic", "choline", "memory"],
    variationPrices: {
      minPrice: 26.99,
      maxPrice: 40.99
    }
  },
  {
    id: "noot-129",
    name: "Alpha-GPC",
    description: "High-quality choline source for cognitive function",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.8,
    reviews: 567,
    requiresPrescription: false,
    strengthOptions: ["300mg", "600mg"],
    formOptions: ["Capsule"],
    tags: ["nootropic", "choline", "focus"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 49.99
    }
  },
  {
    id: "noot-130",
    name: "L-Theanine",
    description: "Amino acid for relaxation and focus",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.7,
    reviews: 892,
    requiresPrescription: false,
    strengthOptions: ["100mg", "200mg"],
    formOptions: ["Capsule"],
    tags: ["nootropic", "relaxation", "focus"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 28.99
    }
  },
  {
    id: "noot-131",
    name: "Bacopa Monnieri",
    description: "Herbal nootropic for memory and cognitive function",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "natural-alternative",
    subcategory: "herbal-nootropics",
    inStock: true,
    rating: 4.6,
    reviews: 534,
    requiresPrescription: false,
    strengthOptions: ["300mg", "500mg"],
    formOptions: ["Capsule"],
    tags: ["herbal", "nootropic", "memory"],
    variationPrices: {
      minPrice: 22.99,
      maxPrice: 34.99
    }
  },
  {
    id: "noot-132",
    name: "PRL-8-53",
    description: "Research nootropic compound for memory enhancement",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "cognitive-enhancement",
    subcategory: "nootropics",
    inStock: true,
    rating: 4.5,
    reviews: 167,
    requiresPrescription: false,
    strengthOptions: ["5mg"],
    formOptions: ["Capsule"],
    tags: ["nootropic", "memory", "research"]
  },
  {
    id: "noot-133",
    name: "Selank",
    description: "Peptide nootropic for anxiety and cognitive function",
    price: 78.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.7,
    reviews: 234,
    requiresLabLicense: false,
    tags: ["peptide", "nootropic", "anxiety"],
    strengthOptions: ["300mcg", "600mcg"],
    formOptions: ["Nasal Spray", "Solution"],
    variationPrices: {
      minPrice: 78.99,
      maxPrice: 124.99
    }
  },
  {
    id: "noot-134",
    name: "Semax",
    description: "Peptide nootropic for cognitive enhancement",
    price: 82.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.8,
    reviews: 267,
    requiresLabLicense: false,
    tags: ["peptide", "nootropic", "cognitive"],
    strengthOptions: ["600mcg", "1200mcg"],
    formOptions: ["Nasal Spray", "Solution"],
    variationPrices: {
      minPrice: 82.99,
      maxPrice: 129.99
    }
  },

  // SARMs & Peptides (135-150)
  {
    id: "sarm-135",
    name: "MK-677 (Ibutamoren)",
    description: "Growth hormone secretagogue for muscle growth and recovery",
    price: 94.99,
    oldPrice: 184.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.8,
    reviews: 623,
    requiresLabLicense: false,
    tags: ["gh-secretagogue", "muscle-growth", "recovery"],
    strengthOptions: ["10mg", "25mg"],
    formOptions: ["Capsule", "Powder"],
    variationPrices: {
      minPrice: 94.99,
      maxPrice: 149.99
    }
  },
  {
    id: "sarm-136",
    name: "RAD-140 (Testolone)",
    description: "Selective androgen receptor modulator for muscle building",
    price: 108.99,
    oldPrice: 214.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.9,
    reviews: 789,
    requiresLabLicense: false,
    tags: ["sarm", "muscle-building", "strength"],
    strengthOptions: ["5mg", "10mg", "20mg"],
    formOptions: ["Capsule", "Powder"],
    variationPrices: {
      minPrice: 108.99,
      maxPrice: 169.99
    }
  },
  {
    id: "sarm-137",
    name: "LGD-4033 (Ligandrol)",
    description: "SARM for lean muscle mass and strength gains",
    price: 98.99,
    oldPrice: 194.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.8,
    reviews: 734,
    requiresLabLicense: false,
    tags: ["sarm", "muscle-mass", "strength"],
    strengthOptions: ["5mg", "10mg"],
    formOptions: ["Capsule", "Powder"],
    variationPrices: {
      minPrice: 98.99,
      maxPrice: 154.99
    }
  },
  {
    id: "sarm-138",
    name: "YK-11",
    description: "SARM and myostatin inhibitor for muscle growth",
    price: 112.99,
    oldPrice: 224.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.7,
    reviews: 512,
    requiresLabLicense: false,
    tags: ["sarm", "myostatin-inhibitor", "muscle-growth"]
  },
  {
    id: "sarm-139",
    name: "SR9009",
    description: "Rev-erb agonist for endurance and fat loss",
    price: 88.99,
    oldPrice: 174.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.6,
    reviews: 445,
    requiresLabLicense: false,
    tags: ["metabolic", "endurance", "fat-loss"]
  },
  {
    id: "sarm-140",
    name: "GW-501516 (Cardarine)",
    description: "PPARδ agonist for endurance and fat metabolism",
    price: 92.99,
    oldPrice: 182.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.7,
    reviews: 589,
    requiresLabLicense: false,
    tags: ["endurance", "fat-loss", "metabolic"]
  },
  {
    id: "pep-141",
    name: "BPC-157",
    description: "Peptide for tissue repair and healing",
    price: 124.99,
    oldPrice: 248.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.9,
    reviews: 678,
    requiresLabLicense: false,
    tags: ["peptide", "healing", "recovery"]
  },
  {
    id: "pep-142",
    name: "TB-500 (Thymosin Beta-4)",
    description: "Peptide for recovery and tissue regeneration",
    price: 138.99,
    oldPrice: 274.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.8,
    reviews: 534,
    requiresLabLicense: false,
    tags: ["peptide", "recovery", "regeneration"]
  },
  {
    id: "pep-143",
    name: "Follistatin",
    description: "Muscle regulation peptide for growth",
    price: 248.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "cognitive-enhancement",
    subcategory: "peptides-sarms",
    inStock: true,
    rating: 4.7,
    reviews: 267,
    requiresLabLicense: false,
    tags: ["peptide", "muscle-growth", "myostatin-inhibitor"]
  },
  {
    id: "supp-144",
    name: "Melatonin (Prescription-Strength)",
    description: "Sleep hormone for circadian rhythm regulation",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "prescription-drugs",
    subcategory: "sleep-aids",
    inStock: true,
    rating: 4.7,
    reviews: 1234,
    requiresPrescription: false,
    strengthOptions: ["1mg", "3mg", "5mg", "10mg"],
    formOptions: ["Tablet", "Sublingual"],
    tags: ["sleep", "melatonin", "circadian"]
  },
  {
    id: "ster-145",
    name: "Oxandrolone",
    description: "Mild anabolic steroid for medical use and recovery",
    price: 128.99,
    oldPrice: 254.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "anabolic-steroids",
    inStock: true,
    rating: 4.7,
    reviews: 345,
    requiresPrescription: true,
    strengthOptions: ["2.5mg", "10mg"],
    formOptions: ["Tablet"],
    tags: ["anabolic-steroid", "medical", "controlled"],
    variationPrices: {
      minPrice: 128.99,
      maxPrice: 199.99
    }
  },
  {
    id: "ster-146",
    name: "Nandrolone",
    description: "Anabolic steroid for medical applications",
    price: 118.99,
    oldPrice: 234.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "anabolic-steroids",
    inStock: true,
    rating: 4.6,
    reviews: 289,
    requiresPrescription: true,
    strengthOptions: ["50mg/ml", "100mg/ml"],
    formOptions: ["Injectable"],
    tags: ["anabolic-steroid", "medical", "controlled"],
    variationPrices: {
      minPrice: 118.99,
      maxPrice: 184.99
    }
  },
  {
    id: "pct-147",
    name: "Clomiphene",
    description: "Fertility medication and PCT support",
    price: 42.99,
    oldPrice: 82.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "fertility-reproductive",
    inStock: true,
    rating: 4.7,
    reviews: 456,
    requiresPrescription: true,
    strengthOptions: ["0.5mg", "1mg"],
    formOptions: ["Tablet"],
    tags: ["fertility", "pct", "serm"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 59.99
    }
  },
  {
    id: "pct-148",
    name: "Tamoxifen (PCT Use)",
    description: "SERM for post-cycle therapy",
    price: 38.99,
    oldPrice: 74.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "hormonal",
    inStock: true,
    rating: 4.6,
    reviews: 389,
    requiresPrescription: true,
    strengthOptions: ["10mg", "20mg"],
    formOptions: ["Tablet"],
    tags: ["pct", "serm", "hormone"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 59.99
    }
  },

  // IV. CANNABIS & NATURAL PRODUCTS (151-165)
  {
    id: "cbd-151",
    name: "CBD Oil (Cannabidiol)",
    description: "High-quality CBD oil for wellness and pain relief",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "natural-alternative",
    subcategory: "cannabis-cannabinoids",
    inStock: true,
    rating: 4.8,
    reviews: 1234,
    requiresPrescription: false,
    strengthOptions: ["250mg", "500mg", "1000mg", "1500mg"],
    formOptions: ["Oil Tincture"],
    tags: ["cbd", "cannabinoid", "wellness"],
    variationPrices: {
      minPrice: 48.99,
      maxPrice: 74.99
    }
  },
  {
    id: "thc-152",
    name: "THC (Medical Cannabis)",
    description: "Medicinal THC formulations (where legally available)",
    price: 78.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "natural-alternative",
    subcategory: "cannabis-cannabinoids",
    inStock: true,
    rating: 4.7,
    reviews: 892,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "25mg"],
    formOptions: ["Capsule", "Oil", "Edible"],
    tags: ["thc", "medical-cannabis", "cannabinoid"],
    variationPrices: {
      minPrice: 78.99,
      maxPrice: 124.99
    }
  },
  {
    id: "d8-153",
    name: "Delta-8-THC",
    description: "Minor cannabinoid with mild psychoactive effects",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "natural-alternative",
    subcategory: "cannabis-cannabinoids",
    inStock: true,
    rating: 4.6,
    reviews: 623,
    requiresPrescription: false,
    strengthOptions: ["10mg", "25mg", "50mg"],
    formOptions: ["Gummy", "Tincture", "Vape"],
    tags: ["delta-8", "cannabinoid", "hemp-derived"],
    variationPrices: {
      minPrice: 42.99,
      maxPrice: 64.99
    }
  },
  {
    id: "hhc-154",
    name: "HHC (Hexahydrocannabinol)",
    description: "Hydrogenated cannabinoid analog",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "natural-alternative",
    subcategory: "cannabis-cannabinoids",
    inStock: true,
    rating: 4.5,
    reviews: 445,
    requiresPrescription: false,
    strengthOptions: ["10mg", "25mg"],
    formOptions: ["Gummy", "Vape"],
    tags: ["hhc", "cannabinoid", "hemp-derived"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 58.99
    }
  },
  {
    id: "thcv-155",
    name: "THCV",
    description: "Minor cannabinoid for appetite and energy",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "natural-alternative",
    subcategory: "cannabis-cannabinoids",
    inStock: true,
    rating: 4.7,
    reviews: 334,
    requiresPrescription: false,
    strengthOptions: ["5mg", "10mg"],
    formOptions: ["Capsule", "Tincture"],
    tags: ["thcv", "cannabinoid", "appetite-suppressant"],
    variationPrices: {
      minPrice: 52.99,
      maxPrice: 79.99
    }
  },
  {
    id: "cbn-156",
    name: "CBN (Cannabinol)",
    description: "Cannabinoid for sleep and sedation",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "natural-alternative",
    subcategory: "cannabis-cannabinoids",
    inStock: true,
    rating: 4.8,
    reviews: 567,
    requiresPrescription: false,
    strengthOptions: ["10mg", "25mg"],
    formOptions: ["Gummy", "Tincture"],
    tags: ["cbn", "cannabinoid", "sleep"],
    variationPrices: {
      minPrice: 44.99,
      maxPrice: 67.99
    }
  },
  {
    id: "psi-157",
    name: "Psilocybin (Research-Grade)",
    description: "Psychedelic compound for clinical research contexts",
    price: 248.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "research-chemicals",
    subcategory: "rc-psychedelics",
    inStock: false,
    rating: 4.9,
    reviews: 134,
    requiresLabLicense: true,
    strengthOptions: ["10mg", "25mg", "50mg"],
    formOptions: ["Powder", "Capsule"],
    tags: ["psychedelic", "psilocybin", "research"],
    variationPrices: {
      minPrice: 248.99,
      maxPrice: 374.99
    }
  },
  {
    id: "mush-158",
    name: "Lion's Mane Extract",
    description: "Medicinal mushroom for cognitive function and neuroprotection",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "natural-alternative",
    subcategory: "medicinal-mushrooms",
    inStock: true,
    rating: 4.7,
    reviews: 892,
    requiresPrescription: false,
    strengthOptions: ["500mg", "1000mg"],
    formOptions: ["Capsule", "Powder"],
    tags: ["mushroom", "nootropic", "neuroprotection"],
    variationPrices: {
      minPrice: 28.99,
      maxPrice: 44.99
    }
  },
  {
    id: "kava-159",
    name: "Kava Extract",
    description: "Herbal anxiolytic for relaxation and stress relief",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "natural-alternative",
    subcategory: "herbal-anxiety-sleep",
    inStock: true,
    rating: 4.6,
    reviews: 623,
    requiresPrescription: false,
    strengthOptions: ["250mg", "500mg"],
    formOptions: ["Capsule", "Tincture"],
    tags: ["herbal", "anxiety", "relaxation"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 49.99
    }
  },
  {
    id: "ash-160",
    name: "Ashwagandha Extract",
    description: "Adaptogen for stress, anxiety, and cortisol regulation",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "natural-alternative",
    subcategory: "adaptogens-stress",
    inStock: true,
    rating: 4.8,
    reviews: 1123,
    requiresPrescription: false,
    strengthOptions: ["300mg", "500mg"],
    formOptions: ["Capsule"],
    tags: ["adaptogen", "stress", "anxiety"],
    variationPrices: {
      minPrice: 24.99,
      maxPrice: 37.99
    }
  },
  {
    id: "val-161",
    name: "Valerian Root",
    description: "Herbal sleep aid for insomnia and anxiety",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "natural-alternative",
    subcategory: "herbal-anxiety-sleep",
    inStock: true,
    rating: 4.5,
    reviews: 734,
    requiresPrescription: false,
    strengthOptions: ["400mg", "600mg"],
    formOptions: ["Capsule", "Tea"],
    tags: ["herbal", "sleep", "anxiety"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 28.99
    }
  },
  {
    id: "mel-162",
    name: "Melatonin (OTC)",
    description: "Natural sleep aid supplement",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "natural-alternative",
    subcategory: "herbal-anxiety-sleep",
    inStock: true,
    rating: 4.7,
    reviews: 1567,
    requiresPrescription: false,
    strengthOptions: ["1mg", "3mg", "5mg", "10mg"],
    formOptions: ["Tablet", "Gummy"],
    tags: ["melatonin", "sleep", "supplement"],
    variationPrices: {
      minPrice: 9.99,
      maxPrice: 16.99
    }
  },

  // V. VETERINARY & LAB SUPPLIES (163-175)
  {
    id: "vet-163",
    name: "Xylazine (Veterinary)",
    description: "Veterinary sedative and analgesic (licensed vet use only)",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "specialized-lab",
    subcategory: "veterinary-medications",
    inStock: true,
    rating: 4.7,
    reviews: 89,
    requiresLabLicense: true,
    tags: ["veterinary", "sedative", "analgesic"],
    strengthOptions: ["100mg/ml", "200mg/ml"],
    formOptions: ["Injectable"],
    variationPrices: {
      minPrice: 64.99,
      maxPrice: 99.99
    }
  },
  {
    id: "ket-164",
    name: "Ketamine (Veterinary)",
    description: "Veterinary anesthetic (licensed use only)",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "specialized-lab",
    subcategory: "veterinary-medications",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    requiresLabLicense: true,
    tags: ["veterinary", "anesthetic", "dissociative"],
    strengthOptions: ["50mg/ml", "100mg/ml"],
    formOptions: ["Injectable"],
    variationPrices: {
      minPrice: 89.99,
      maxPrice: 139.99
    }
  },
  {
    id: "iver-165",
    name: "Ivermectin",
    description: "Antiparasitic medication (veterinary and human formulations)",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "prescription-drugs",
    subcategory: "antibiotics",
    inStock: true,
    rating: 4.6,
    reviews: 445,
    requiresPrescription: true,
    strengthOptions: ["3mg", "6mg", "12mg"],
    formOptions: ["Tablet"],
    tags: ["antiparasitic"],
    variationPrices: {
      minPrice: 28.99,
      maxPrice: 44.99
    }
  },

  // VI. WELLNESS & RECOVERY (166-180)
  {
    id: "nal-166",
    name: "Naltrexone",
    description: "Opioid antagonist for addiction treatment",
    price: 48.99,
    oldPrice: 94.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "wellness-recovery",
    subcategory: "detox-withdrawal",
    inStock: true,
    rating: 4.7,
    reviews: 334,
    requiresPrescription: true,
    strengthOptions: ["50mg"],
    formOptions: ["Tablet"],
    tags: ["addiction", "opioid-antagonist"],
    variationPrices: {
      minPrice: 48.99,
      maxPrice: 72.99
    }
  },
  {
    id: "meth-167",
    name: "Methadone",
    description: "Opioid agonist for maintenance therapy",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "wellness-recovery",
    subcategory: "detox-withdrawal",
    inStock: true,
    rating: 4.6,
    reviews: 267,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg"],
    formOptions: ["Tablet", "Liquid"],
    tags: ["addiction", "opioid", "maintenance"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 58.99
    }
  },
  {
    id: "bup-168",
    name: "Buprenorphine",
    description: "Partial opioid agonist for dependence treatment",
    price: 52.99,
    oldPrice: 102.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "wellness-recovery",
    subcategory: "detox-withdrawal",
    inStock: true,
    rating: 4.8,
    reviews: 389,
    requiresPrescription: true,
    strengthOptions: ["2mg", "8mg"],
    formOptions: ["Sublingual Film", "Tablet"],
    tags: ["addiction", "opioid", "maintenance"],
    variationPrices: {
      minPrice: 52.99,
      maxPrice: 79.99
    }
  },
  {
    id: "nalox-169",
    name: "Naloxone",
    description: "Opioid overdose reversal agent (Narcan)",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "wellness-recovery",
    subcategory: "detox-withdrawal",
    inStock: true,
    rating: 4.9,
    reviews: 623,
    requiresPrescription: false,
    strengthOptions: ["4mg"],
    formOptions: ["Nasal Spray"],
    tags: ["overdose-reversal", "narcan", "lifesaving"],
    variationPrices: {
      minPrice: 42.99,
      maxPrice: 64.99
    }
  },
  {
    id: "dis-170",
    name: "Disulfiram",
    description: "Alcohol dependence treatment medication",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "wellness-recovery",
    subcategory: "detox-withdrawal",
    inStock: true,
    rating: 4.5,
    reviews: 223,
    requiresPrescription: true,
    strengthOptions: ["250mg", "500mg"],
    formOptions: ["Tablet"],
    tags: ["alcohol-dependence", "addiction"],
    variationPrices: {
      minPrice: 34.99,
      maxPrice: 52.99
    }
  },
  {
    id: "nac-171",
    name: "N-Acetylcysteine (NAC)",
    description: "Antioxidant and liver support supplement",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    category: "wellness-recovery",
    subcategory: "liver-kidney",
    inStock: true,
    rating: 4.7,
    reviews: 892,
    requiresPrescription: false,
    strengthOptions: ["600mg", "1000mg"],
    formOptions: ["Capsule"],
    tags: ["antioxidant", "liver-support", "detox"],
    variationPrices: {
      minPrice: 22.99,
      maxPrice: 34.99
    }
  },
  {
    id: "milk-172",
    name: "Silymarin (Milk Thistle)",
    description: "Herbal liver support and detoxification",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "wellness-recovery",
    subcategory: "liver-kidney",
    inStock: true,
    rating: 4.6,
    reviews: 734,
    requiresPrescription: false,
    strengthOptions: ["150mg", "300mg"],
    formOptions: ["Capsule"],
    tags: ["herbal", "liver-support", "detox"],
    variationPrices: {
      minPrice: 18.99,
      maxPrice: 28.99
    }
  },
  {
    id: "var-173",
    name: "Varenicline",
    description: "Smoking cessation medication",
    price: 64.99,
    oldPrice: 124.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "wellness-recovery",
    subcategory: "detox-withdrawal",
    inStock: true,
    rating: 4.7,
    reviews: 512,
    requiresPrescription: true,
    strengthOptions: ["0.5mg", "1mg"],
    formOptions: ["Tablet"],
    tags: ["smoking-cessation", "addiction"],
    variationPrices: {
      minPrice: 64.99,
      maxPrice: 97.99
    }
  },
  {
    id: "omega-174",
    name: "Omega-3 (Prescription-Grade)",
    description: "High-potency omega-3 for cardiovascular health",
    price: 38.99,
    oldPrice: 74.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "wellness-recovery",
    subcategory: "immune-antioxidants",
    inStock: true,
    rating: 4.8,
    reviews: 1023,
    requiresPrescription: false,
    strengthOptions: ["1000mg", "2000mg"],
    formOptions: ["Capsule"],
    tags: ["omega-3", "heart-health", "anti-inflammatory"],
    variationPrices: {
      minPrice: 38.99,
      maxPrice: 58.99
    }
  },
  {
    id: "coq-175",
    name: "Coenzyme Q10",
    description: "Antioxidant for cardiac and metabolic support",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    category: "wellness-recovery",
    subcategory: "immune-antioxidants",
    inStock: true,
    rating: 4.7,
    reviews: 678,
    requiresPrescription: false,
    strengthOptions: ["100mg", "200mg", "400mg"],
    formOptions: ["Capsule"],
    tags: ["coq10", "antioxidant", "heart-health"],
    variationPrices: {
      minPrice: 32.99,
      maxPrice: 52.99
    }
  }
];
