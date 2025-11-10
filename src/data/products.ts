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
}

export const products: Product[] = [
  // Cardiovascular medications
  {
    id: "cv-001",
    name: "Lisinopril",
    description: "ACE inhibitor for high blood pressure and heart failure treatment",
    price: 12.99,
    oldPrice: 24.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.8,
    reviews: 234,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg", "20mg", "40mg"],
    formOptions: ["Tablet"],
    tags: ["blood-pressure", "heart-health"]
  },
  {
    id: "cv-002",
    name: "Atorvastatin",
    description: "Statin medication to lower cholesterol and prevent cardiovascular disease",
    price: 15.99,
    oldPrice: 29.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    category: "prescription-drugs",
    subcategory: "cardiovascular",
    inStock: true,
    rating: 4.7,
    reviews: 189,
    requiresPrescription: true,
    strengthOptions: ["10mg", "20mg", "40mg", "80mg"],
    formOptions: ["Tablet"],
    tags: ["cholesterol", "heart-health"]
  },
  {
    id: "cv-003",
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
    tags: ["blood-pressure", "heart-rhythm"]
  },

  // Diabetes medications
  {
    id: "db-001",
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
    tags: ["diabetes", "blood-sugar"]
  },
  {
    id: "db-002",
    name: "Glipizide",
    description: "Sulfonylurea to stimulate insulin production in type 2 diabetes",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1550572017-4a6e8d4d7c0e?w=400",
    category: "prescription-drugs",
    subcategory: "diabetes",
    inStock: true,
    rating: 4.5,
    reviews: 98,
    requiresPrescription: true,
    strengthOptions: ["5mg", "10mg"],
    formOptions: ["Tablet"],
    tags: ["diabetes", "insulin"]
  },

  // Mental health medications
  {
    id: "mh-001",
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
    tags: ["depression", "anxiety", "ssri"]
  },
  {
    id: "mh-002",
    name: "Alprazolam",
    description: "Benzodiazepine for anxiety and panic disorders (controlled substance)",
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
    tags: ["anxiety", "benzodiazepine", "controlled"]
  },

  // Pain management
  {
    id: "pm-001",
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
    tags: ["pain-relief", "anti-inflammatory"]
  },
  {
    id: "pm-002",
    name: "Tramadol",
    description: "Opioid analgesic for moderate to severe pain (controlled substance)",
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
    tags: ["pain-relief", "opioid", "controlled"]
  },

  // Research chemicals
  {
    id: "rc-001",
    name: "Adenosine Triphosphate (ATP)",
    description: "High-purity ATP for cellular energy research and biochemical studies",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    category: "research-chemicals",
    subcategory: "biochemicals",
    inStock: true,
    rating: 4.9,
    reviews: 45,
    requiresLabLicense: true,
    tags: ["biochemistry", "cellular-energy", "research"]
  },
  {
    id: "rc-002",
    name: "NADH (Reduced)",
    description: "Research-grade NADH for metabolic and enzymatic studies",
    price: 124.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    category: "research-chemicals",
    subcategory: "biochemicals",
    inStock: true,
    rating: 4.8,
    reviews: 32,
    requiresLabLicense: true,
    tags: ["biochemistry", "metabolism", "research"]
  },
  {
    id: "rc-003",
    name: "Serotonin (5-HT)",
    description: "Pure serotonin for neurotransmitter research",
    price: 156.99,
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f6?w=400",
    category: "research-chemicals",
    subcategory: "neuroscience",
    inStock: true,
    rating: 4.7,
    reviews: 28,
    requiresLabLicense: true,
    tags: ["neuroscience", "neurotransmitter", "research"]
  },
  {
    id: "rc-004",
    name: "Dopamine Hydrochloride",
    description: "High-purity dopamine for neurological research applications",
    price: 142.99,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400",
    category: "research-chemicals",
    subcategory: "neuroscience",
    inStock: true,
    rating: 4.9,
    reviews: 37,
    requiresLabLicense: true,
    tags: ["neuroscience", "neurotransmitter", "research"]
  }
];
