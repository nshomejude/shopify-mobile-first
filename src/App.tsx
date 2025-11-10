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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
