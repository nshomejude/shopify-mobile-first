import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Shield, Zap, Clock, Package, ArrowRight, CheckCircle2, Star, Truck, Lock, Award, Users, TrendingUp, Search, FileCheck, CreditCard, Heart, Pill, Microscope, Activity, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pharmacy.jpg";

const HomePage3 = () => {
  const features = [
    {
      icon: Shield,
      title: "FDA Certified",
      description: "All products meet strict pharmaceutical standards and safety protocols",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Same-day processing for urgent prescriptions and expedited shipping",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert pharmacists available around the clock for consultations",
    },
    {
      icon: Package,
      title: "Secure Delivery",
      description: "Discreet packaging with real-time tracking and signature confirmation",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Bank-level encryption for all personal and medical information",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality control and authenticity verification on every product",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary delivery on orders over $50 with no hidden fees",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options including insurance billing and installments",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "450+", label: "Products Available" },
    { value: "99.8%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Expert Support" },
  ];

  const categories = [
    {
      icon: Pill,
      title: "Prescription Drugs",
      description: "Wide range of prescription medications with professional guidance",
      link: "/shop-horizontal",
    },
    {
      icon: Microscope,
      title: "Lab Supplies",
      description: "Research chemicals and laboratory equipment for professionals",
      link: "/lab-verification",
    },
    {
      icon: Activity,
      title: "Health Supplements",
      description: "Premium vitamins, minerals, and nutritional supplements",
      link: "/shop-horizontal",
    },
    {
      icon: Heart,
      title: "Wellness Products",
      description: "Holistic health solutions for complete well-being",
      link: "/shop-horizontal",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Search & Select",
      description: "Browse our extensive catalog or use our smart search to find your medications",
      icon: Search,
    },
    {
      step: "02",
      title: "Verify Prescription",
      description: "Upload your prescription securely - our pharmacists verify within 2 hours",
      icon: FileCheck,
    },
    {
      step: "03",
      title: "Secure Checkout",
      description: "Complete your order with encrypted payment processing",
      icon: CreditCard,
    },
    {
      step: "04",
      title: "Fast Delivery",
      description: "Receive your order with tracked, discreet shipping to your doorstep",
      icon: Package,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      content: "The prescription verification process is so smooth, and the customer service team is incredibly helpful. I've been ordering for 2 years now.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Medical Researcher",
      content: "As a researcher, I need reliable lab supplies. This platform delivers quality products consistently with excellent documentation.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Professional",
      content: "Fast shipping, competitive prices, and authentic products. This has become my go-to pharmacy for both personal and professional needs.",
      rating: 5,
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

      {/* Stats Section */}
      <section className="py-20 relative border-y border-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Product Categories
            </Badge>
            <h2 className="text-4xl font-bold text-white">
              Explore Our Catalog
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From prescription medications to research supplies, we have everything you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group"
              >
                <Card className="h-full bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with pharmaceutical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Simple Process
            </Badge>
            <h2 className="text-4xl font-bold text-white">
              How It Works
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get your medications in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-4"></div>
                )}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 flex items-center justify-center">
                      <item.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Customer Reviews
            </Badge>
            <h2 className="text-4xl font-bold text-white">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <CardContent className="p-12 md:p-16 relative">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Stay Updated
                  </h2>
                  <p className="text-lg text-slate-300">
                    Subscribe to our newsletter for health tips, product updates, and exclusive offers
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                  />
                  <Button size="lg" className="h-12 px-8 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-slate-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>
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
