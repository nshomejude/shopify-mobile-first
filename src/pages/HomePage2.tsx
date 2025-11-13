import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Truck, Clock, Star, Award, Users, Package, Search, CheckCircle2, Microscope, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Newsletter } from "@/components/landing/Newsletter";
import { useState } from "react";

export default function HomePage2() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/30">
      <DemoModeBanner />
      <Navigation />

      {/* Centered Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-200 rounded-full shadow-sm">
              <Award className="h-4 w-4 text-emerald-700" />
              <span className="text-sm font-semibold text-gray-900">Industry Leading Pharmacy Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
              Premium Healthcare
              <span className="block text-emerald-700 mt-2">Delivered With Care</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access quality pharmaceuticals, research materials, and health products from a trusted, certified source.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search medications, supplements, or research materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 shadow-lg"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="text-base px-10 h-14 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-xl">
                <Link to="/shop-horizontal">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-10 h-14 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-semibold shadow-lg">
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Full Width */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-emerald-100 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">450+</div>
              <div className="text-emerald-100 font-medium">Quality Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <div className="text-emerald-100 font-medium">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference of a pharmacy that puts your health and safety first
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature Card 1 */}
            <Card className="p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">FDA Certified</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully licensed and certified pharmacy operating under strict FDA regulations for your safety and peace of mind.
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card className="p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Truck className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and reliable shipping with tracking. Most orders arrive within 2-3 business days, right to your doorstep.
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card className="p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated team of healthcare professionals is always available to answer your questions and concerns.
              </p>
            </Card>

            {/* Feature Card 4 */}
            <Card className="p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Package className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Products</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is sourced from verified manufacturers and undergoes rigorous quality control testing.
              </p>
            </Card>

            {/* Feature Card 5 */}
            <Card className="p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Star className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Top Rated</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted by thousands with a 4.9-star rating. Our customers consistently praise our service and quality.
              </p>
            </Card>

            {/* Feature Card 6 */}
            <Card className="p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Staffed by licensed pharmacists and healthcare professionals dedicated to your wellbeing and safety.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Shop By Category
            </h2>
            <p className="text-xl text-emerald-100">
              Find exactly what you need in our organized product categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Category 1 */}
            <Link to="/category/prescription-drugs">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <HeartPulse className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Prescription Drugs</h3>
                <p className="text-emerald-100 mb-4">
                  FDA-approved prescription medications with verification process
                </p>
                <div className="flex items-center justify-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </div>
              </Card>
            </Link>

            {/* Category 2 */}
            <Link to="/category/research-chemicals">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Research Materials</h3>
                <p className="text-emerald-100 mb-4">
                  Laboratory-grade chemicals for qualified research facilities
                </p>
                <div className="flex items-center justify-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </div>
              </Card>
            </Link>

            {/* Category 3 */}
            <Link to="/category/supplements">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Health Supplements</h3>
                <p className="text-emerald-100 mb-4">
                  Premium vitamins, minerals, and nutritional supplements
                </p>
                <div className="flex items-center justify-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <Card className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-800 border-0 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-12 md:p-16 text-center text-white">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their healthcare needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="text-base px-10 h-14 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold shadow-xl">
                  <Link to="/shop-horizontal">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-10 h-14 border-2 border-white text-white hover:bg-white/10 font-semibold">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
