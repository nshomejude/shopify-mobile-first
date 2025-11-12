import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, getSubcategories } from "@/config/categories";
import { CategoryHero } from "@/components/landing/CategoryHero";
import { AboutSection } from "@/components/landing/AboutSection";
import { SubcategoryGrid } from "@/components/landing/SubcategoryGrid";
import { VerificationSteps } from "@/components/landing/VerificationSteps";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

export const CategoryLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const subcategories = slug ? getSubcategories(slug) : [];
  
  // Filter products by category
  const categoryProducts = category 
    ? products.filter(p => p.category === category.slug || p.subcategory === category.slug)
    : [];

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        <DemoModeBanner />
      </div>

      <CategoryHero
        title={`Explore ${category.name}`}
        subtitle={`Authorized ${category.name} — available only with valid prescription or verified license.`}
        icon={category.icon}
        requiresPrescription={category.requiresPrescription}
        requiresLabLicense={category.requiresLabLicense}
        verificationDays={category.verificationTimeDays || 7}
        backgroundImage={category.heroImage}
      />

      <AboutSection
        title={`About Our ${category.name}`}
        description={category.longDescription}
        complianceNotice={category.complianceNotice || category.legalNotice}
        verificationProcess={category.verificationProcess}
      />

      {/* Product Grid */}
      {categoryProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Browse our selection of {category.name.toLowerCase()}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {categoryProducts.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.variationPrices?.minPrice || product.price}
                  maxPrice={product.variationPrices?.maxPrice}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                  inStock={product.inStock}
                  hasVariations={!!product.strengthOptions || !!product.formOptions}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <SubcategoryGrid subcategories={subcategories} parentSlug={category.slug} />

      <ReviewsSection />

      <VerificationSteps />

      <Footer />
    </div>
  );
};