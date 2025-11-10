import { useParams, useNavigate, Link } from "react-router-dom";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCategoryBySlug, getSubcategories } from "@/config/categories";
import { 
  AlertCircle, CheckCircle, Upload, FileText, Shield, 
  ArrowRight, Package, Clock, Lock 
} from "lucide-react";

export const CategoryLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const subcategories = slug ? getSubcategories(slug) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const CategoryIcon = category.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CategoryIcon className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {category.name}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {category.requiresPrescription && (
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Prescription Required
                </Badge>
              )}
              {category.requiresLabLicense && (
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Lab License Required
                </Badge>
              )}
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Lock className="w-4 h-4 mr-2" />
                Secure & Confidential
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/shop-horizontal">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {category.requiresPrescription && (
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link to="/prescription-upload">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Prescription
                  </Link>
                </Button>
              )}
              {category.requiresLabLicense && (
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link to="/lab-verification">
                    <Shield className="mr-2 h-5 w-5" />
                    Verify Lab License
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Alert */}
      <section className="container mx-auto px-4 py-8">
        <Alert className="border-destructive/50 bg-destructive/5">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-lg font-semibold">Important Legal Notice</AlertTitle>
          <AlertDescription className="text-base mt-2">
            {category.legalNotice}
          </AlertDescription>
        </Alert>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About {category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {category.longDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subcategories */}
      {subcategories.length > 0 && (
        <section className="container mx-auto px-4 py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcategories.map((subcat) => {
                const SubIcon = subcat.icon;
                return (
                  <Link key={subcat.id} to={`/category/${subcat.slug}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <SubIcon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{subcat.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {subcat.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="w-full justify-between">
                          View Products
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Verification Process */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Order</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                Verification Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {category.verificationProcess}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Step 1: Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.requiresPrescription ? "Upload your prescription" : "Submit license documents"}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Step 2: Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team verifies within 24 hours
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Step 3: Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure delivery to your location
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-12">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            {category.targetAudience === 'patients' 
              ? "Upload your prescription and place your order today"
              : "Submit your laboratory credentials to access our research catalog"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" asChild>
              <Link to={category.requiresPrescription ? "/prescription-upload" : "/lab-verification"}>
                {category.requiresPrescription ? "Upload Prescription" : "Verify Laboratory"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link to="/safety-compliance">
                Learn About Safety
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};