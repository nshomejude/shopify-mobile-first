import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { categories } from "@/config/categories";
import { 
  Package, ShieldCheck, FlaskConical, DollarSign, 
  TrendingUp, AlertCircle, CheckCircle 
} from "lucide-react";

export const ProductDistributionReport = () => {
  // Analyze product distribution
  const categoryDistribution = products.reduce((acc, product) => {
    const cat = product.category || 'uncategorized';
    if (!acc[cat]) {
      acc[cat] = { count: 0, products: [] };
    }
    acc[cat].count++;
    acc[cat].products.push(product);
    return acc;
  }, {} as Record<string, { count: number; products: typeof products }>);

  const subcategoryDistribution = products.reduce((acc, product) => {
    const subcat = product.subcategory || 'none';
    if (!acc[subcat]) {
      acc[subcat] = { count: 0, category: product.category, products: [] };
    }
    acc[subcat].count++;
    acc[subcat].products.push(product);
    return acc;
  }, {} as Record<string, { count: number; category: string; products: typeof products }>);

  // Prescription vs Lab License stats
  const prescriptionRequired = products.filter(p => p.requiresPrescription).length;
  const labLicenseRequired = products.filter(p => p.requiresLabLicense).length;
  const noVerification = products.filter(p => !p.requiresPrescription && !p.requiresLabLicense).length;

  // Price analysis
  const priceRanges = {
    under10: products.filter(p => p.price < 10).length,
    '10to50': products.filter(p => p.price >= 10 && p.price < 50).length,
    '50to100': products.filter(p => p.price >= 50 && p.price < 100).length,
    over100: products.filter(p => p.price >= 100).length
  };

  // Stock status
  const inStock = products.filter(p => p.inStock).length;
  const outOfStock = products.filter(p => !p.inStock).length;

  // Average ratings
  const avgRating = (products.reduce((acc, p) => acc + p.rating, 0) / products.length).toFixed(2);
  const totalReviews = products.reduce((acc, p) => acc + p.reviews, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Product Distribution Report</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis of {products.length} products across all categories
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-primary" />
                <div className="text-3xl font-bold">{products.length}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Prescription Required</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-warning" />
                <div>
                  <div className="text-3xl font-bold">{prescriptionRequired}</div>
                  <div className="text-xs text-muted-foreground">
                    {((prescriptionRequired / products.length) * 100).toFixed(1)}% of total
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Lab License Required</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <FlaskConical className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold">{labLicenseRequired}</div>
                  <div className="text-xs text-muted-foreground">
                    {((labLicenseRequired / products.length) * 100).toFixed(1)}% of total
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-success" />
                <div>
                  <div className="text-3xl font-bold">{inStock}</div>
                  <div className="text-xs text-muted-foreground">
                    {outOfStock} out of stock
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="categories" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="categories">By Category</TabsTrigger>
            <TabsTrigger value="subcategories">By Subcategory</TabsTrigger>
            <TabsTrigger value="pricing">Pricing Analysis</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>

          {/* Category Distribution */}
          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Products by Main Category</CardTitle>
                <CardDescription>
                  Distribution of {products.length} products across {Object.keys(categoryDistribution).length} main categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(categoryDistribution)
                    .sort(([, a], [, b]) => b.count - a.count)
                    .map(([categorySlug, data]) => {
                      const categoryInfo = categories[categorySlug];
                      const percentage = ((data.count / products.length) * 100).toFixed(1);
                      
                      return (
                        <div key={categorySlug} className="border-b pb-4 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary">{data.count}</Badge>
                              <div>
                                <div className="font-semibold">
                                  {categoryInfo?.name || categorySlug}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {categoryInfo?.description || 'No description'}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg">{percentage}%</div>
                              <div className="text-xs text-muted-foreground">of total</div>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            {categoryInfo?.requiresPrescription && (
                              <Badge variant="outline" className="text-xs">
                                <ShieldCheck className="w-3 h-3 mr-1" />
                                Prescription
                              </Badge>
                            )}
                            {categoryInfo?.requiresLabLicense && (
                              <Badge variant="outline" className="text-xs">
                                <FlaskConical className="w-3 h-3 mr-1" />
                                Lab License
                              </Badge>
                            )}
                          </div>
                          <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subcategory Distribution */}
          <TabsContent value="subcategories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Products by Subcategory</CardTitle>
                <CardDescription>
                  Detailed breakdown across {Object.keys(subcategoryDistribution).length} subcategories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {Object.entries(subcategoryDistribution)
                    .sort(([, a], [, b]) => b.count - a.count)
                    .map(([subcatSlug, data]) => {
                      const subcatInfo = categories[subcatSlug];
                      const percentage = ((data.count / products.length) * 100).toFixed(1);
                      
                      return (
                        <div key={subcatSlug} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                          <div className="flex items-center gap-3">
                            <Badge>{data.count}</Badge>
                            <div>
                              <div className="font-medium text-sm">
                                {subcatInfo?.name || subcatSlug}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {categoryDistribution[data.category]?.count || 0} in parent category
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold">{percentage}%</div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Analysis */}
          <TabsContent value="pricing" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price Range Distribution</CardTitle>
                  <CardDescription>Products grouped by price ranges</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: 'Under $10', count: priceRanges.under10, color: 'bg-green-500' },
                    { label: '$10 - $50', count: priceRanges['10to50'], color: 'bg-blue-500' },
                    { label: '$50 - $100', count: priceRanges['50to100'], color: 'bg-yellow-500' },
                    { label: 'Over $100', count: priceRanges.over100, color: 'bg-red-500' }
                  ].map(range => {
                    const percentage = ((range.count / products.length) * 100).toFixed(1);
                    return (
                      <div key={range.label}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{range.label}</span>
                          <span className="text-sm text-muted-foreground">
                            {range.count} ({percentage}%)
                          </span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${range.color} transition-all`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Quality Metrics</CardTitle>
                  <CardDescription>Average ratings and review statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Average Rating</span>
                      <span className="text-2xl font-bold text-primary">{avgRating}/5</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-warning transition-all"
                        style={{ width: `${(parseFloat(avgRating) / 5) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Total Reviews</span>
                      <span className="text-2xl font-bold">{totalReviews.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Average {(totalReviews / products.length).toFixed(0)} reviews per product
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <span className="font-medium">High Quality Catalog</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {((products.filter(p => p.rating >= 4.5).length / products.length) * 100).toFixed(0)}% of products rated 4.5+ stars
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Verification Requirements */}
          <TabsContent value="verification" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-warning" />
                    Prescription Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">{prescriptionRequired}</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {((prescriptionRequired / products.length) * 100).toFixed(1)}% of catalog
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Verification Time:</span>
                      <span className="font-semibold">7 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Audience:</span>
                      <span className="font-semibold">Patients</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-primary" />
                    Lab License Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">{labLicenseRequired}</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {((labLicenseRequired / products.length) * 100).toFixed(1)}% of catalog
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Verification Time:</span>
                      <span className="font-semibold">7 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Audience:</span>
                      <span className="font-semibold">Laboratories</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    No Verification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">{noVerification}</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {((noVerification / products.length) * 100).toFixed(1)}% of catalog
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Verification Time:</span>
                      <span className="font-semibold">None</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Audience:</span>
                      <span className="font-semibold">General Public</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Report Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Key Insights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Total catalog contains {products.length} products across {Object.keys(categoryDistribution).length} main categories</li>
                  <li>• {prescriptionRequired} products require prescription verification (7-day process)</li>
                  <li>• {labLicenseRequired} products are research chemicals requiring lab licenses</li>
                  <li>• Average product rating of {avgRating}/5 with {totalReviews.toLocaleString()} total reviews</li>
                  <li>• {inStock} products currently in stock ({((inStock / products.length) * 100).toFixed(1)}%)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Category Leaders</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {Object.entries(categoryDistribution)
                    .sort(([, a], [, b]) => b.count - a.count)
                    .slice(0, 5)
                    .map(([catSlug, data], index) => (
                      <li key={catSlug}>
                        • #{index + 1}: {categories[catSlug]?.name || catSlug} ({data.count} products)
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};
