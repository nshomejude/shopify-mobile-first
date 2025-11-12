import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/shop/CartSidebar";
import Index from "./pages/Index";
import ShopHorizontal from "./pages/ShopHorizontal";
import ShopLarge from "./pages/ShopLarge";
import ShopList from "./pages/ShopList";
import NotFound from "./pages/NotFound";
import { CategoryLanding } from "./pages/CategoryLanding";
import { PrescriptionUpload } from "./pages/PrescriptionUpload";
import { LabVerification } from "./pages/LabVerification";
import { SafetyCompliance } from "./pages/SafetyCompliance";
import { DrugInformation } from "./pages/DrugInformation";
import { DrugInteractionChecker } from "./pages/DrugInteractionChecker";
import { ProductDetail } from "./pages/ProductDetail";

import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import CategoriesDirectory from "./pages/CategoriesDirectory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          <CartSidebar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop-horizontal" element={<ShopHorizontal />} />
            <Route path="/shop-large" element={<ShopLarge />} />
            <Route path="/shop-list" element={<ShopList />} />
            <Route path="/category/:slug" element={<CategoryLanding />} />
            <Route path="/prescription-upload" element={<PrescriptionUpload />} />
            <Route path="/lab-verification" element={<LabVerification />} />
            <Route path="/safety-compliance" element={<SafetyCompliance />} />
            <Route path="/drug-information" element={<DrugInformation />} />
            <Route path="/drug-interaction-checker" element={<DrugInteractionChecker />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/categories" element={<CategoriesDirectory />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
