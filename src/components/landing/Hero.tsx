import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSearchBar } from "./HeroSearchBar";

export const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-900">Trusted by 50,000+ Customers Nationwide</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                Your Health,{" "}
                <span className="text-emerald-700">Our Priority</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Quality pharmaceuticals and health products delivered to your doorstep. Licensed, certified, and trusted by healthcare professionals.
              </p>
            </div>

            {/* Search Bar */}
            <div className="pt-2">
              <HeroSearchBar />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="text-base px-8 h-14 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-lg">
                <Link to="/shop-horizontal">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-semibold">
                <Link to="/shop-list">Browse All Products</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">FDA Certified</p>
                  <p className="text-sm text-gray-600">Licensed pharmacy</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-emerald-700" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Fast Delivery</p>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-emerald-700" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">24/7 Support</p>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-[650px] h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/src/assets/hero-pharmacy.jpg"
              alt="Professional pharmacy workspace with medications and healthcare products"
              className="w-full h-full object-cover"
            />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-emerald-700">4.9</p>
                <p className="text-sm text-gray-600 font-medium">Rating</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-emerald-700">50K+</p>
                <p className="text-sm text-gray-600 font-medium">Customers</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-emerald-700">12K+</p>
                <p className="text-sm text-gray-600 font-medium">Reviews</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
