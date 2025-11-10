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
    { label: "Terms of Service", href: "#" },
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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">HealthStore</h3>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Your trusted partner for quality pharmaceuticals and health products since 2015.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>1-800-HEALTH-1</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@healthstore.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Medical Plaza, NY 10001</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 HealthStore. All rights reserved. Licensed Pharmacy ID: RX123456
          </p>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
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
