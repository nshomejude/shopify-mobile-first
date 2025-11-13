import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Shield, Zap, Clock, Package, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage3 = () => {
  const features = [
    {
      icon: Shield,
      title: "FDA Certified",
      description: "All products meet strict pharmaceutical standards",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Same-day processing for urgent prescriptions",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert pharmacists available around the clock",
    },
    {
      icon: Package,
      title: "Secure Delivery",
      description: "Discreet packaging with tracking included",
    },
  ];

  const benefits = [
    "Licensed & regulated pharmaceutical provider",
    "Competitive pricing with bulk discounts",
    "Comprehensive product information",
    "Easy prescription verification process",
    "Secure payment & data protection",
    "Fast nationwide shipping",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <DemoModeBanner />
      <Navigation />
      
      {/* Split-Screen Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🏆 Trusted by 50,000+ Customers
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Your Health,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Our Priority
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Experience professional pharmaceutical care with our extensive catalog of medications, 
                supplements, and laboratory products. Fast, secure, and reliable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="text-lg h-14 px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  <Link to="/shop-horizontal">
                    Explore Products
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8 border-2 border-slate-600 text-white hover:bg-slate-800">
                  <Link to="/prescription-upload">
                    Upload Prescription
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-slate-900"></div>
                    ))}
                  </div>
                  <div className="text-sm text-slate-300">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-white">4.9/5</span>
                    </div>
                    <div className="text-xs">12,500+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <Card className="relative bg-slate-800/50 border-slate-700 backdrop-blur-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-3xl text-white">Why Choose Us?</CardTitle>
                    <CardDescription className="text-slate-300 text-base">
                      Professional pharmaceutical services you can trust
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 group animate-fade-in"
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-200 group-hover:text-white transition-colors">{benefit}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">
              Professional Care, Every Step
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with pharmaceutical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <CardContent className="p-12 md:p-16 text-center space-y-8 relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their pharmaceutical needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-lg h-14 px-8">
                  <Link to="/shop-horizontal">
                    Browse Catalog
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8 border-2 border-slate-600 text-white hover:bg-slate-800">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage3;
