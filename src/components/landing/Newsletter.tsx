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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive deals, health tips, and new product launches
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12"
                required
              />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
