import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Check your email for your 10% discount code.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Floating gradient orbs */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-10s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50 shadow-xl text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 mb-8 shadow-lg">
              <Gift className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Get <span className="text-gradient">10% Off</span> Your First Order
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for exclusive deals, health tips, and new product launches
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 text-base rounded-full glass-effect border-2"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Subscribe Now
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground">
              We respect your privacy. Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
