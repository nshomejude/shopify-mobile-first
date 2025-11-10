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
  Check
} from "lucide-react";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

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
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedStrength, setSelectedStrength] = useState("");
  const [selectedForm, setSelectedForm] = useState("");

  const product = products.find((p) => p.id === id);

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

  const handleAddToCart = () => {
    addItem({
      id: parseInt(product.id.split("-")[1]),
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
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
              <Alert>
                <FileText className="h-4 w-4" />
                <AlertDescription>
                  This medication requires a valid prescription. 
                  <Link to="/prescription-upload" className="text-primary hover:underline ml-1">
                    Upload your prescription
                  </Link>
                </AlertDescription>
              </Alert>
            )}

            {product.requiresLabLicense && (
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  This research chemical requires laboratory verification.
                  <Link to="/lab-verification" className="text-primary hover:underline ml-1">
                    Verify your lab
                  </Link>
                </AlertDescription>
              </Alert>
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

            {/* Options */}
            {product.strengthOptions && product.strengthOptions.length > 0 && (
              <div className="mb-6">
                <label className="text-sm font-semibold mb-3 block">Select Strength</label>
                <div className="flex flex-wrap gap-2">
                  {product.strengthOptions.map((strength) => (
                    <Button
                      key={strength}
                      variant={selectedStrength === strength ? "default" : "outline"}
                      onClick={() => setSelectedStrength(strength)}
                    >
                      {strength}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {product.formOptions && product.formOptions.length > 0 && (
              <div className="mb-6">
                <label className="text-sm font-semibold mb-3 block">Select Form</label>
                <div className="flex flex-wrap gap-2">
                  {product.formOptions.map((form) => (
                    <Button
                      key={form}
                      variant={selectedForm === form ? "default" : "outline"}
                      onClick={() => setSelectedForm(form)}
                    >
                      {form}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-semibold mb-3 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
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
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger value="description" className="rounded-none">Description</TabsTrigger>
                <TabsTrigger value="dosage" className="rounded-none">Dosage & Usage</TabsTrigger>
                <TabsTrigger value="side-effects" className="rounded-none">Side Effects</TabsTrigger>
                <TabsTrigger value="warnings" className="rounded-none">Warnings</TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-none">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                
                <h4 className="font-semibold mb-2 mt-6">What is {product.name}?</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.name} is a pharmaceutical-grade medication used in the treatment and management of various health conditions. 
                  This medication works through specific mechanisms to provide therapeutic benefits while maintaining a high safety profile 
                  when used as directed by healthcare professionals.
                </p>

                <h4 className="font-semibold mb-2 mt-6">Key Benefits</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clinically proven effectiveness in treating specified conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Manufactured under strict quality control standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Available in multiple strengths to meet individual needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Backed by extensive research and clinical trials</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="dosage" className="mt-6">
                <Alert className="mb-6">
                  <Pill className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> Always follow your healthcare provider's instructions. 
                    The information below is for reference only and does not replace professional medical advice.
                  </AlertDescription>
                </Alert>

                <h3 className="text-xl font-bold mb-4">Dosage Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Standard Adult Dosage</h4>
                    <p className="text-muted-foreground">
                      The typical starting dose is determined based on the condition being treated, patient age, weight, 
                      and other medications being taken. Your healthcare provider will prescribe the appropriate dosage for your specific situation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">How to Take</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Take at the same time each day to maintain consistent levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Can be taken with or without food unless otherwise directed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Swallow tablets whole with water; do not crush or chew</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>If you miss a dose, take it as soon as you remember unless it's almost time for the next dose</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Special Populations</h4>
                    <p className="text-muted-foreground">
                      Dosage adjustments may be necessary for elderly patients, those with kidney or liver impairment, 
                      or individuals taking certain other medications. Consult your healthcare provider for personalized guidance.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="side-effects" className="mt-6">
                <Alert variant="destructive" className="mb-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Seek immediate medical attention if you experience severe allergic reactions, chest pain, 
                    difficulty breathing, or other serious symptoms.
                  </AlertDescription>
                </Alert>

                <h3 className="text-xl font-bold mb-4">Possible Side Effects</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-amber-600">Common Side Effects (may affect up to 1 in 10 people)</h4>
                    <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                      <li>Mild headache or dizziness</li>
                      <li>Nausea or stomach upset</li>
                      <li>Temporary drowsiness or fatigue</li>
                      <li>Dry mouth</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      These side effects are usually mild and tend to improve as your body adjusts to the medication.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Uncommon Side Effects (may affect up to 1 in 100 people)</h4>
                    <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                      <li>Sleep disturbances</li>
                      <li>Changes in appetite</li>
                      <li>Minor skin reactions</li>
                      <li>Muscle aches or weakness</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Serious Side Effects (rare but require immediate medical attention)</h4>
                    <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                      <li>Severe allergic reactions (rash, swelling, difficulty breathing)</li>
                      <li>Irregular heartbeat or chest pain</li>
                      <li>Severe dizziness or fainting</li>
                      <li>Signs of liver problems (yellowing of skin/eyes, dark urine)</li>
                    </ul>
                  </div>

                  <Alert>
                    <AlertDescription>
                      This is not a complete list of side effects. Contact your healthcare provider if you experience 
                      any persistent or bothersome symptoms, or if you have concerns about side effects.
                    </AlertDescription>
                  </Alert>
                </div>
              </TabsContent>

              <TabsContent value="warnings" className="mt-6">
                <h3 className="text-xl font-bold mb-4">Important Safety Information</h3>
                
                <div className="space-y-6">
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Do not use this medication if you:</strong>
                      <ul className="mt-2 space-y-1 ml-4 list-disc">
                        <li>Are allergic to any of the ingredients</li>
                        <li>Are pregnant or breastfeeding without consulting your doctor</li>
                        <li>Have severe kidney or liver disease</li>
                        <li>Are taking certain other medications (check with your pharmacist)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold mb-3">Before Taking This Medication</h4>
                    <p className="text-muted-foreground mb-3">
                      Inform your healthcare provider about all your medical conditions, including:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                      <li>Heart conditions or high blood pressure</li>
                      <li>Kidney or liver problems</li>
                      <li>Diabetes or blood sugar issues</li>
                      <li>Mental health conditions</li>
                      <li>Any allergies</li>
                      <li>If you are pregnant, planning to become pregnant, or breastfeeding</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Drug Interactions</h4>
                    <p className="text-muted-foreground mb-3">
                      This medication may interact with other drugs. Tell your doctor about all medications you take, including:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                      <li>Prescription medications</li>
                      <li>Over-the-counter drugs</li>
                      <li>Vitamins and supplements</li>
                      <li>Herbal products</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Storage & Handling</h4>
                    <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                      <li>Store at room temperature away from moisture and heat</li>
                      <li>Keep out of reach of children and pets</li>
                      <li>Do not use after expiration date</li>
                      <li>Dispose of unused medication properly</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
                
                {/* Rating Summary */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
                        <div className="flex items-center justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(averageRating)
                                  ? "fill-warning text-warning"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Based on {mockReviews.length} reviews</p>
                      </div>

                      <div className="space-y-2">
                        {ratingDistribution.map(({ stars, count, percentage }) => (
                          <div key={stars} className="flex items-center gap-3">
                            <span className="text-sm font-medium w-8">{stars}★</span>
                            <Progress value={percentage} className="flex-1" />
                            <span className="text-sm text-muted-foreground w-8">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>{review.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="font-semibold">{review.author}</p>
                                <p className="text-sm text-muted-foreground">{review.date}</p>
                              </div>
                              {review.verified && (
                                <Badge variant="secondary" className="gap-1">
                                  <Check className="w-3 h-3" />
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "fill-warning text-warning"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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

      <Footer />
    </div>
  );
};
