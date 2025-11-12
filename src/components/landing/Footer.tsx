import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Shop: [
    { label: "Medicines", href: "/shop-horizontal" },
    { label: "Vitamins & Supplements", href: "/shop-horizontal" },
    { label: "Personal Care", href: "/shop-list" },
    { label: "Beauty Products", href: "/shop-large" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Drug Information", href: "/drug-information" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "#" },
    { label: "HIPAA Compliance", href: "#" },
    { label: "Safety & Compliance", href: "/safety-compliance" },
  ],
  Services: [
    { label: "Upload Prescription", href: "/prescription-upload" },
    { label: "Lab Verification", href: "/lab-verification" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-card via-muted/30 to-card border-t border-border overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-10" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <h3 className="text-3xl font-black text-gradient mb-6">HealthStore</h3>
            <p className="text-muted-foreground mb-8 max-w-xs leading-relaxed">
              Your trusted partner for quality pharmaceuticals and health products since 2015.
            </p>
            
            <div className="space-y-4">
              <a href="tel:1-800-HEALTH-1" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>1-800-HEALTH-1</span>
              </a>
              <a href="mailto:support@healthstore.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>support@healthstore.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>123 Medical Plaza, NY 10001</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-5 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="mb-8 opacity-50" />

        {/* Compliance Disclaimers */}
        <div className="mb-8 p-6 rounded-lg bg-muted/30 border border-border/50">
          <h4 className="font-semibold text-sm mb-3 text-foreground">Compliance & Legal Notice</h4>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>• All medications and research compounds are dispensed or supplied only upon verified prescription or license.</p>
            <p>• Verification typically takes 7–14 business days. No exceptions.</p>
            <p>• We cooperate with national and international health authorities to maintain legal integrity.</p>
            <p>• Orders from unverified sources are automatically rejected.</p>
            <p>• Prescription uploads are encrypted and stored under strict confidentiality in compliance with medical data laws.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 HealthStore. All rights reserved. Licensed Pharmacy ID: RX123456
          </p>
          
          <div className="flex gap-3">
            <a
              href="#"
              className="w-11 h-11 rounded-xl glass-effect border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-xl glass-effect border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-xl glass-effect border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
