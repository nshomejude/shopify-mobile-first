import { 
  Pill, Heart, Brain, Scale, Zap, Shield, Activity, 
  Microscope, Sparkles, Leaf, Droplets, Eye, Waves, 
  Target, Thermometer, Wind, Apple, Dna, FlaskConical,
  Syringe, Stethoscope, Package
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  heroImage: string;
  requiresPrescription: boolean;
  requiresLabLicense: boolean;
  targetAudience: 'patients' | 'laboratories' | 'both';
  parentCategory?: string;
  subcategories?: string[];
  legalNotice: string;
  verificationProcess: string;
  featured?: boolean;
}

export const categories: Record<string, Category> = {
  // Main Category Hubs
  'prescription-drugs': {
    id: 'prescription-drugs',
    slug: 'prescription-drugs',
    name: 'Prescription Medications',
    description: 'FDA-approved prescription medications for various health conditions',
    longDescription: 'Access a comprehensive range of prescription medications dispensed by licensed pharmacists. All prescriptions are verified by our licensed healthcare professionals before dispensing.',
    icon: Pill,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    legalNotice: 'Valid prescription from a licensed healthcare provider required. All prescriptions are verified before dispensing.',
    verificationProcess: 'Upload your prescription or have your doctor send it directly to us. Our pharmacists will verify and contact you within 24 hours.',
    featured: true,
  },

  // Prescription Drug Categories
  'pain-management': {
    id: 'pain-management',
    slug: 'pain-management',
    name: 'Pain Management',
    description: 'Prescription pain medications and analgesics',
    longDescription: 'Comprehensive pain management solutions including opioid and non-opioid analgesics for acute and chronic pain conditions. Dispensed under strict prescription requirements.',
    icon: Heart,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Controlled substances. Valid prescription required. May cause dependency. Use only as directed.',
    verificationProcess: 'Valid prescription required. Photo ID verification at pickup/delivery.',
    featured: true,
  },

  'anxiety-sleep': {
    id: 'anxiety-sleep',
    slug: 'anxiety-sleep',
    name: 'Anxiety & Sleep Medications',
    description: 'Anxiolytics, sedatives, and sleep aids',
    longDescription: 'Prescription medications for anxiety disorders, insomnia, and sleep disturbances. Includes benzodiazepines, Z-drugs, and non-benzodiazepine anxiolytics.',
    icon: Brain,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Schedule IV controlled substances. May cause dependency. Not for long-term use without medical supervision.',
    verificationProcess: 'Prescription verification required. Maximum 30-day supply per prescription.',
    featured: true,
  },

  'weight-management': {
    id: 'weight-management',
    slug: 'weight-management',
    name: 'Weight Management',
    description: 'Prescription weight loss and appetite control medications',
    longDescription: 'FDA-approved weight loss medications including appetite suppressants and metabolism enhancers. Prescribed as part of a comprehensive weight management program.',
    icon: Scale,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Use only under medical supervision with diet and exercise program.',
    verificationProcess: 'Doctor consultation required. BMI and health screening necessary.',
    featured: true,
  },

  'sexual-health': {
    id: 'sexual-health',
    slug: 'sexual-health',
    name: 'Sexual Health',
    description: 'Erectile dysfunction and sexual wellness medications',
    longDescription: 'Prescription medications for erectile dysfunction, premature ejaculation, and sexual wellness. Includes PDE5 inhibitors and related treatments.',
    icon: Heart,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Consult your doctor about cardiovascular risks and drug interactions.',
    verificationProcess: 'Medical consultation required. Cardiac health screening may be necessary.',
    featured: true,
  },

  'mental-health': {
    id: 'mental-health',
    slug: 'mental-health',
    name: 'Mental Health Medications',
    description: 'Antidepressants, antipsychotics, and mood stabilizers',
    longDescription: 'Comprehensive mental health medications including SSRIs, SNRIs, antipsychotics, and mood stabilizers for depression, bipolar disorder, and schizophrenia.',
    icon: Brain,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Regular psychiatric follow-up necessary. Do not discontinue without medical advice.',
    verificationProcess: 'Valid prescription from psychiatrist or qualified physician required.',
    featured: true,
  },

  'adhd-focus': {
    id: 'adhd-focus',
    slug: 'adhd-focus',
    name: 'ADHD & Focus Medications',
    description: 'ADHD stimulants and non-stimulant alternatives',
    longDescription: 'Prescription medications for ADHD including stimulants (Adderall, Ritalin) and non-stimulant options. Controlled substances requiring regular monitoring.',
    icon: Zap,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Schedule II controlled substances. High potential for abuse. Valid prescription required monthly.',
    verificationProcess: 'Valid prescription required monthly. No refills allowed on Schedule II medications.',
    featured: true,
  },

  'cardiovascular': {
    id: 'cardiovascular',
    slug: 'cardiovascular',
    name: 'Cardiovascular Medications',
    description: 'Blood pressure, heart, and circulation medications',
    longDescription: 'Prescription medications for hypertension, heart disease, and circulation including beta-blockers, ACE inhibitors, and anticoagulants.',
    icon: Activity,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Regular monitoring of blood pressure and heart function necessary.',
    verificationProcess: 'Valid prescription required. May require periodic lab work.',
  },

  'diabetes': {
    id: 'diabetes',
    slug: 'diabetes',
    name: 'Diabetes Management',
    description: 'Insulin, metformin, and diabetes control medications',
    longDescription: 'Complete diabetes management medications including insulin, oral hypoglycemics, and blood glucose monitoring supplies.',
    icon: Droplets,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Regular blood glucose monitoring necessary.',
    verificationProcess: 'Valid prescription required. Insulin products require refrigeration.',
  },

  'respiratory': {
    id: 'respiratory',
    slug: 'respiratory',
    name: 'Respiratory Medications',
    description: 'Asthma inhalers and respiratory treatments',
    longDescription: 'Prescription respiratory medications including inhalers, bronchodilators, and corticosteroids for asthma and COPD.',
    icon: Wind,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Proper inhaler technique essential for effectiveness.',
    verificationProcess: 'Valid prescription required. Pharmacist counseling on inhaler use provided.',
  },

  'antibiotics': {
    id: 'antibiotics',
    slug: 'antibiotics',
    name: 'Antibiotics & Antivirals',
    description: 'Prescription antimicrobial medications',
    longDescription: 'Prescription antibiotics and antiviral medications for bacterial and viral infections. Complete full course as directed.',
    icon: Shield,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Complete full course even if symptoms improve.',
    verificationProcess: 'Valid prescription required. Culture results may be necessary for certain antibiotics.',
  },

  'hormonal': {
    id: 'hormonal',
    slug: 'hormonal',
    name: 'Hormonal Therapy',
    description: 'HRT, contraceptives, and hormonal medications',
    longDescription: 'Hormone replacement therapy, contraceptives, and hormonal medications for various endocrine conditions.',
    icon: Thermometer,
    heroImage: '/placeholder.svg',
    requiresPrescription: true,
    requiresLabLicense: false,
    targetAudience: 'patients',
    parentCategory: 'prescription-drugs',
    legalNotice: 'Prescription required. Regular monitoring and follow-up necessary.',
    verificationProcess: 'Valid prescription required. Hormone level testing may be required.',
  },

  // Research Chemicals Hub
  'research-chemicals': {
    id: 'research-chemicals',
    slug: 'research-chemicals',
    name: 'Research Chemicals',
    description: 'Laboratory research compounds for authorized facilities',
    longDescription: 'Research chemicals for qualified laboratories and research institutions. DEA registration and proper licensing required. Not for human consumption.',
    icon: FlaskConical,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    legalNotice: 'FOR LABORATORY RESEARCH ONLY. Not for human or animal consumption. DEA license required for controlled substances.',
    verificationProcess: 'Laboratory license, DEA registration (if applicable), and research purpose documentation required.',
    featured: true,
  },

  'stimulants': {
    id: 'stimulants',
    slug: 'stimulants',
    name: 'Research Stimulants',
    description: 'Stimulant research compounds',
    longDescription: 'Research-grade stimulant compounds for neurological and pharmacological research. Requires proper laboratory authorization.',
    icon: Zap,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'FOR RESEARCH ONLY. Schedule I/II analogs. Not for human consumption. Proper disposal required.',
    verificationProcess: 'DEA Schedule I/II research license required. Research protocol documentation necessary.',
  },

  'cannabinoids': {
    id: 'cannabinoids',
    slug: 'cannabinoids',
    name: 'Cannabinoids',
    description: 'Cannabis compounds and synthetic cannabinoids',
    longDescription: 'Research cannabinoids including CBD, THC derivatives, and synthetic cannabinoid receptor agonists for authorized research.',
    icon: Leaf,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'FOR RESEARCH ONLY. State and federal compliance required. Not for human consumption.',
    verificationProcess: 'State cannabis research license and laboratory authorization required.',
  },

  'psychedelics': {
    id: 'psychedelics',
    slug: 'psychedelics',
    name: 'Psychedelic Research Compounds',
    description: 'Psychedelic substances for research',
    longDescription: 'Research-grade psychedelic compounds for authorized neurological and psychiatric research studies.',
    icon: Eye,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'Schedule I substances FOR RESEARCH ONLY. DEA Schedule I license required. Not for human consumption.',
    verificationProcess: 'DEA Schedule I research registration and IRB approval required.',
  },

  'benzodiazepines-research': {
    id: 'benzodiazepines-research',
    slug: 'benzodiazepines-research',
    name: 'Research Benzodiazepines',
    description: 'Benzodiazepine analogs for research',
    longDescription: 'Research-grade benzodiazepines and designer analogs for neurological and pharmaceutical research.',
    icon: Brain,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'FOR RESEARCH ONLY. Schedule IV analogs. Laboratory use only. Not for human consumption.',
    verificationProcess: 'Laboratory license required. Research protocol documentation necessary.',
  },

  'opioids-research': {
    id: 'opioids-research',
    slug: 'opioids-research',
    name: 'Research Opioids',
    description: 'Opioid research compounds',
    longDescription: 'Research-grade opioid receptor agonists and analogs for pain research and pharmacological studies.',
    icon: Pill,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'Schedule I/II substances FOR RESEARCH ONLY. DEA license required. Extremely addictive. Laboratory use only.',
    verificationProcess: 'DEA Schedule I/II research license required. Secure storage protocols mandatory.',
  },

  'dissociatives': {
    id: 'dissociatives',
    slug: 'dissociatives',
    name: 'Dissociative Research Compounds',
    description: 'Ketamine analogs and dissociative substances',
    longDescription: 'Research dissociative compounds including ketamine analogs and NMDA receptor antagonists for neurological research.',
    icon: Waves,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'FOR RESEARCH ONLY. Schedule III/unscheduled analogs. Laboratory use only. Not for human consumption.',
    verificationProcess: 'Laboratory license required. Research documentation necessary.',
  },

  'nootropics': {
    id: 'nootropics',
    slug: 'nootropics',
    name: 'Cognitive Enhancement Research',
    description: 'Nootropics and cognitive enhancers',
    longDescription: 'Research-grade cognitive enhancement compounds including racetams, modafinil analogs, and novel nootropic substances.',
    icon: Brain,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'FOR RESEARCH ONLY. Laboratory authorization required. Not for human consumption.',
    verificationProcess: 'Laboratory license and research protocol required.',
  },

  'peptides-sarms': {
    id: 'peptides-sarms',
    slug: 'peptides-sarms',
    name: 'Peptides & SARMs',
    description: 'Research peptides and selective androgen receptor modulators',
    longDescription: 'Research-grade peptides and SARMs for muscle development research, aging studies, and pharmacological research.',
    icon: Dna,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'FOR RESEARCH ONLY. Not FDA approved for human use. Laboratory research only.',
    verificationProcess: 'Laboratory license required. Research purpose statement necessary.',
  },

  'empathogens': {
    id: 'empathogens',
    slug: 'empathogens',
    name: 'Empathogen Research Compounds',
    description: 'MDMA analogs and empathogenic substances',
    longDescription: 'Research-grade empathogenic compounds for psychiatric research and neuroscience studies.',
    icon: Heart,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'Schedule I substances FOR RESEARCH ONLY. DEA license required. Not for human consumption.',
    verificationProcess: 'DEA Schedule I research license and IRB approval required.',
  },

  'tryptamines': {
    id: 'tryptamines',
    slug: 'tryptamines',
    name: 'Tryptamines & Lysergamides',
    description: 'DMT, LSD analogs, and tryptamine compounds',
    longDescription: 'Research-grade tryptamines and lysergamides including DMT analogs and LSD derivatives for psychopharmacological research.',
    icon: Sparkles,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    parentCategory: 'research-chemicals',
    legalNotice: 'Schedule I substances FOR RESEARCH ONLY. DEA Schedule I license required. Not for human consumption.',
    verificationProcess: 'DEA Schedule I research registration and detailed research protocol required.',
  },

  'veterinary-lab': {
    id: 'veterinary-lab',
    slug: 'veterinary-lab',
    name: 'Veterinary & Laboratory Animal Medications',
    description: 'Animal medications for research facilities',
    longDescription: 'Veterinary medications and compounds for laboratory animal research including sedatives, anesthetics, and experimental treatments.',
    icon: Stethoscope,
    heroImage: '/placeholder.svg',
    requiresPrescription: false,
    requiresLabLicense: true,
    targetAudience: 'laboratories',
    legalNotice: 'FOR LABORATORY ANIMAL USE ONLY. IACUC approval required. Not for companion animal use.',
    verificationProcess: 'Laboratory license and IACUC protocol approval required.',
  },
};

export const prescriptionCategories = Object.values(categories).filter(
  cat => cat.targetAudience === 'patients' && cat.requiresPrescription
);

export const researchCategories = Object.values(categories).filter(
  cat => cat.targetAudience === 'laboratories' && cat.requiresLabLicense
);

export const featuredCategories = Object.values(categories).filter(
  cat => cat.featured
);

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories[slug];
};

export const getSubcategories = (parentSlug: string): Category[] => {
  return Object.values(categories).filter(cat => cat.parentCategory === parentSlug);
};