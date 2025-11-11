import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ShieldCheck, FlaskConical, Users } from "lucide-react";
import { Navigation } from "@/components/shop/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, getAllMainCategories } from "@/config/categories";

export default function CategoriesDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    prescriptionRequired: false,
    labLicenseRequired: false,
    targetPatients: false,
    targetLabs: false,
    targetBoth: false,
  });

  const mainCategories = getAllMainCategories();

  const filteredCategories = useMemo(() => {
    let filtered = mainCategories;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (cat) =>
          cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply prescription filter
    if (filters.prescriptionRequired) {
      filtered = filtered.filter((cat) => cat.requiresPrescription);
    }

    // Apply lab license filter
    if (filters.labLicenseRequired) {
      filtered = filtered.filter((cat) => cat.requiresLabLicense);
    }

    // Apply target audience filters
    const audienceFilters = [];
    if (filters.targetPatients) audienceFilters.push('patients');
    if (filters.targetLabs) audienceFilters.push('laboratories');
    if (filters.targetBoth) audienceFilters.push('both');

    if (audienceFilters.length > 0) {
      filtered = filtered.filter((cat) => audienceFilters.includes(cat.targetAudience));
    }

    return filtered;
  }, [mainCategories, searchQuery, filters]);

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Categories Directory
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Browse all {mainCategories.length} main categories. Filter by prescription requirements, licensing, and target audience.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Filters</CardTitle>
                  <CardDescription>Refine your search</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Requirements */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      Requirements
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="prescription"
                          checked={filters.prescriptionRequired}
                          onCheckedChange={() => handleFilterChange('prescriptionRequired')}
                        />
                        <Label htmlFor="prescription" className="text-sm cursor-pointer">
                          Prescription Required
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="labLicense"
                          checked={filters.labLicenseRequired}
                          onCheckedChange={() => handleFilterChange('labLicenseRequired')}
                        />
                        <Label htmlFor="labLicense" className="text-sm cursor-pointer">
                          Lab License Required
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Target Audience
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="patients"
                          checked={filters.targetPatients}
                          onCheckedChange={() => handleFilterChange('targetPatients')}
                        />
                        <Label htmlFor="patients" className="text-sm cursor-pointer">
                          Patients
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="labs"
                          checked={filters.targetLabs}
                          onCheckedChange={() => handleFilterChange('targetLabs')}
                        />
                        <Label htmlFor="labs" className="text-sm cursor-pointer">
                          Laboratories
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="both"
                          checked={filters.targetBoth}
                          onCheckedChange={() => handleFilterChange('targetBoth')}
                        />
                        <Label htmlFor="both" className="text-sm cursor-pointer">
                          Both
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Results Count */}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Showing <span className="font-semibold text-foreground">{filteredCategories.length}</span> of {mainCategories.length} categories
                    </p>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Categories Grid */}
            <div className="flex-1">
              {filteredCategories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className="group"
                      >
                        <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Icon className="h-6 w-6" />
                              </div>
                              <div className="flex flex-wrap gap-1 justify-end">
                                {category.requiresPrescription && (
                                  <Badge variant="outline" className="text-xs">
                                    <ShieldCheck className="h-3 w-3 mr-1" />
                                    Rx
                                  </Badge>
                                )}
                                {category.requiresLabLicense && (
                                  <Badge variant="outline" className="text-xs">
                                    <FlaskConical className="h-3 w-3 mr-1" />
                                    Lab
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">
                              {category.name}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                              {category.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span className="capitalize">{category.targetAudience}</span>
                              </div>
                              {category.subcategories && category.subcategories.length > 0 && (
                                <p className="text-sm text-muted-foreground">
                                  {category.subcategories.length} subcategories
                                </p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No categories found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
