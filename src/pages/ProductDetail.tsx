import { useParams, useNavigate, Link } from "react-router-dom";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Package, 
  Shield,
  AlertTriangle,
  Clock,
  Pill,
  FileText,
  ChevronRight,
  Check,
  Edit3,
  Info
} from "lucide-react";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { useState, useMemo } from "react";
import { VariationSwatch } from "@/components/shop/VariationSwatch";
import { getSwatchStyleForProduct } from "@/utils/swatchStyleMapper";
import { useDrugInteractions } from "@/hooks/useDrugInteractions";
import { DrugInteractionWarnings } from "@/components/shop/DrugInteractionWarnings";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { VerificationBadge } from "@/components/landing/VerificationBadge";
import { ShippingCalculator } from "@/components/shop/ShippingCalculator";
import { DrugInformationTabs } from "@/components/product/DrugInformationTabs";
import { ResearchChemicalTabs } from "@/components/product/ResearchChemicalTabs";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const customQuantitySchema = z.object({
  quantity: z.coerce
    .number()
    .int({ message: "Quantity must be a whole number" })
    .min(1, { message: "Quantity must be at least 1" })
    .max(10000, { message: "Quantity cannot exceed 10,000 units" })
});

// Helper to determine quantity options and unit based on product
const getQuantityConfig = (product: Product) => {
  // Use product-specific config if available
  if (product.quantityUnit && product.quantityOptions) {
    return {
      unit: product.quantityUnit,
      options: product.quantityOptions
    };
  }

  // Determine based on form or category
  const formLower = (product.formOptions?.[0] || product.tags?.[0] || "").toLowerCase();
  
  // Pills/Tablets/Capsules
  if (formLower.includes("tablet") || formLower.includes("pill") || formLower.includes("capsule")) {
    return {
      unit: "pills",
      options: [60, 120, 240, 300, 600, 1200]
    };
  }
  
  // Powder/Research chemicals (grams) - MOQ 10g to 1kg
  if (formLower.includes("powder") || product.subcategory?.includes("research") || 
      product.category === "research-chemicals" || formLower.includes("crystal")) {
    return {
      unit: "grams",
      options: [10, 25, 50, 100, 250, 500, 1000]
    };
  }
  
  // Liquid/Injectable (ml) - MOQ 50ml to 1L
  if (formLower.includes("liquid") || formLower.includes("solution") || 
      formLower.includes("injection") || formLower.includes("vial")) {
    return {
      unit: "ml",
      options: [50, 100, 250, 500, 1000]
    };
  }
  
  // Default fallback (units)
  return {
    unit: "units",
    options: [1, 5, 10, 30, 60, 100]
  };
};

const mockReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    comment: "This medication has been very effective for managing my condition. No side effects experienced. Highly recommend consulting with your doctor first."
  },
  {
    id: 2,
    author: "John D.",
    rating: 4,
    date: "1 month ago",
    verified: true,
    comment: "Works as expected. Delivery was fast and packaging was discreet. Good value for the price."
  },
  {
    id: 3,
    author: "Emily R.",
    rating: 5,
    date: "2 months ago",
    verified: true,
    comment: "Excellent quality. My doctor recommended this brand specifically. Very satisfied with the results."
  }
];

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const [selectedStrength, setSelectedStrength] = useState("");
  const [selectedForm, setSelectedForm] = useState("");
  const [customQuantityOpen, setCustomQuantityOpen] = useState(false);

  const customQuantityForm = useForm<z.infer<typeof customQuantitySchema>>({
    resolver: zodResolver(customQuantitySchema),
    defaultValues: {
      quantity: 1
    }
  });

  const product = products.find((p) => p.id === id);

  // Get quantity configuration for this product
  const quantityConfig = product ? getQuantityConfig(product) : { unit: "units", options: [1, 5, 10, 30, 60] };
  
  // Set initial quantity to first option
  const [quantity, setQuantity] = useState(quantityConfig.options[0]);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState("standard");

  // Get cart product IDs for interaction checking
  const cartProductIds = useMemo(() => items.map(item => item.productId), [items]);
  
  // Check if adding this product would cause interactions
  const potentialInteractions = useDrugInteractions(
    product ? [...cartProductIds, product.id] : cartProductIds
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/shop-horizontal")}>Browse Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get the swatch style for this product
  const swatchStyle = product.swatchStyle || getSwatchStyleForProduct(
    product.category,
    product.subcategory,
    product.tags
  );

  const handleAddToCart = () => {
    addItem({
      id: parseInt(product.id.split("-")[1]),
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const handleCustomQuantity = (values: z.infer<typeof customQuantitySchema>) => {
    setQuantity(values.quantity);
    setCustomQuantityOpen(false);
    customQuantityForm.reset({ quantity: values.quantity });
    toast({
      title: "Custom quantity set",
      description: `Quantity updated to ${values.quantity} units.`,
    });
  };

  const averageRating = mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: mockReviews.filter(r => r.rating === stars).length,
    percentage: (mockReviews.filter(r => r.rating === stars).length / mockReviews.length) * 100
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <DemoModeBanner />
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop-horizontal" className="hover:text-primary">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="relative aspect-square bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
                    <Badge variant="secondary" className="text-lg px-6 py-2">Out of Stock</Badge>
                  </div>
                )}
                {product.oldPrice && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-base px-3 py-1">
                    Save {Math.round(((product.oldPrice - product.price) / product.price) * 100)}%
                  </Badge>
                )}
              </div>
            </Card>
            
            {product.requiresPrescription && (
              <Alert className="border-warning bg-warning/10">
                <FileText className="h-4 w-4 text-warning" />
                <AlertDescription className="text-warning-foreground">
                  <strong>Prescription Required:</strong> This medication requires a valid prescription. 
                  Verification takes {product.verificationPeriodDays || 7} business days.
                  <Link to="/prescription-upload" className="text-primary hover:underline ml-1 font-semibold">
                    Upload your prescription →
                  </Link>
                </AlertDescription>
              </Alert>
            )}

            {product.requiresLabLicense && (
              <Alert className="border-warning bg-warning/10">
                <Shield className="h-4 w-4 text-warning" />
                <AlertDescription className="text-warning-foreground">
                  <strong>Lab License Required:</strong> This research chemical requires laboratory verification.
                  Verification takes {product.verificationPeriodDays || 7} business days.
                  <Link to="/lab-verification" className="text-primary hover:underline ml-1 font-semibold">
                    Verify your lab →
                  </Link>
                </AlertDescription>
              </Alert>
            )}

            {/* Drug Interaction Warning */}
            {product.medicalInfo && cartProductIds.length > 0 && potentialInteractions.length > 0 && (
              <Card className="border-2 border-orange-500/50 bg-orange-500/5">
                <CardContent className="p-4">
                  <DrugInteractionWarnings 
                    productIds={[...cartProductIds, product.id]}
                  />
                  <div className="mt-3 pt-3 border-t">
                    <Link to="/drug-interaction-checker">
                      <Button variant="outline" size="sm" className="w-full">
                        <Shield className="h-4 w-4 mr-2" />
                        Check All Interactions
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.subcategory}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-warning text-warning"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <Separator className="my-6" />

            {/* Quantity */}
            <div className="mb-6 space-y-3">
              <div>
                <label className="text-sm font-bold mb-2 block">Select Quantity</label>
                <p className="text-xs text-muted-foreground mb-3">
                  Choose quantity in {quantityConfig.unit} - bulk orders may qualify for discounts
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {quantityConfig.options.map((qty, index) => {
                  // Calculate discount percentage based on position
                  const discountPercent = index === 0 ? 0 : Math.min(5 + (index - 1) * 5, 25);
                  const discount = discountPercent > 0 ? `${discountPercent}% off` : null;
                  
                  return (
                    <button
                      key={qty}
                      onClick={() => setQuantity(qty)}
                      className={cn(
                        "relative px-4 py-3 rounded-xl border-2 min-w-[100px] transition-all duration-300",
                        "hover:scale-105 active:scale-95",
                        "flex flex-col items-center gap-1",
                        quantity === qty
                          ? "border-primary bg-primary/10 text-primary shadow-md ring-2 ring-primary/20"
                          : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent"
                      )}
                    >
                      <Package className={cn(
                        "w-5 h-5 transition-colors",
                        quantity === qty ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "font-semibold text-base",
                        quantity === qty && "font-bold"
                      )}>
                        {qty} {quantityConfig.unit}
                      </span>
                      {discount && (
                        <Badge 
                          variant="secondary" 
                          className={cn(
                            "absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 font-bold",
                            quantity === qty 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-green-500 text-white"
                          )}
                        >
                          {discount}
                        </Badge>
                      )}
                    </button>
                  );
                })}
                
                {/* Custom Quantity Button */}
                <button
                  onClick={() => {
                    customQuantityForm.setValue("quantity", quantity);
                    setCustomQuantityOpen(true);
                  }}
                  className={cn(
                    "relative px-4 py-3 rounded-xl border-2 min-w-[100px] transition-all duration-300",
                    "hover:scale-105 active:scale-95",
                    "flex flex-col items-center gap-1",
                    "border-dashed border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent"
                  )}
                >
                  <Edit3 className="w-5 h-5 text-muted-foreground" />
                  <span className="font-semibold text-base">
                    Custom
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Enter qty
                  </span>
                </button>
              </div>
            </div>

            {/* Options */}
            {product.strengthOptions && product.strengthOptions.length > 0 && (
              <div className="mb-6 space-y-3">
                <div>
                  <label className="text-sm font-bold mb-2 block">Select Strength</label>
                  <p className="text-xs text-muted-foreground mb-3">
                    Choose your preferred dosage strength
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.strengthOptions.map((strength) => (
                    <VariationSwatch
                      key={strength}
                      value={strength}
                      isSelected={selectedStrength === strength}
                      onClick={() => setSelectedStrength(strength)}
                      style={swatchStyle}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.formOptions && product.formOptions.length > 0 && (
              <div className="mb-6 space-y-3">
                <div>
                  <label className="text-sm font-bold mb-2 block">Select Form</label>
                  <p className="text-xs text-muted-foreground mb-3">
                    Choose your preferred medication form
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.formOptions.map((form) => (
                    <VariationSwatch
                      key={form}
                      value={form}
                      isSelected={selectedForm === form}
                      onClick={() => setSelectedForm(form)}
                      style={swatchStyle}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Shipping Calculator */}
            <div className="mb-6">
              <ShippingCalculator
                quantity={quantity}
                unit={quantityConfig.unit}
                selectedMethod={selectedShippingMethod}
                onMethodSelect={setSelectedShippingMethod}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <Button 
                size="lg" 
                className="flex-1 h-14 text-base"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="h-14">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Fast & Discreet Shipping</p>
                      <p className="text-sm text-muted-foreground">Plain packaging, 2-5 business days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Pharmacy Grade Quality</p>
                      <p className="text-sm text-muted-foreground">100% certified & tested</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">30-Day Money Back</p>
                      <p className="text-sm text-muted-foreground">Full refund guarantee</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Card className="mb-8">
          <CardContent className="p-6">
            {/* Conditional rendering based on product type */}
            {product.medicalInfo ? (
              // Prescription Drug Information (drugs.com format)
              <DrugInformationTabs 
                medicalInfo={product.medicalInfo}
                productName={product.name}
              />
            ) : product.researchChemicalInfo ? (
              // Research Chemical Information (industry format)
              <ResearchChemicalTabs
                researchInfo={product.researchChemicalInfo}
                productName={product.name}
              />
            ) : (
              // Fallback for products without detailed info
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Detailed information for this product is currently being updated. 
                    Please contact us for more information or consult with a healthcare professional.
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Related Products */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) => p.subcategory === product.subcategory && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card 
                  key={relatedProduct.id} 
                  className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="relative aspect-square bg-muted">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-sm line-clamp-2 mb-2">{relatedProduct.name}</h4>
                    <p className="text-lg font-bold text-primary">${relatedProduct.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </main>

      {/* Custom Quantity Dialog */}
      <Dialog open={customQuantityOpen} onOpenChange={setCustomQuantityOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Custom Quantity</DialogTitle>
            <DialogDescription>
              Enter any quantity in {quantityConfig.unit} between 1 and 10,000. Bulk orders may qualify for additional discounts.
            </DialogDescription>
          </DialogHeader>
          <Form {...customQuantityForm}>
            <form onSubmit={customQuantityForm.handleSubmit(handleCustomQuantity)} className="space-y-4">
              <FormField
                control={customQuantityForm.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity ({quantityConfig.unit})</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder={`Enter quantity in ${quantityConfig.unit} (e.g., 100, 250)`}
                        {...field}
                        min={1}
                        max={10000}
                        className="text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCustomQuantityOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Set Quantity
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};
