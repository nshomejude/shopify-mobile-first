import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Fast delivery and excellent customer service. I've been ordering my medications here for over a year and never had any issues. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Healthcare Professional",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "As a doctor, I appreciate the quality and authenticity of products. They stock genuine pharmaceutical-grade supplements and medications.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "New Parent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "Their baby care section is amazing! Great prices, fast shipping, and the customer support team helped me choose the right products for my newborn.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/50" />
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us with their health
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="group relative overflow-hidden glass-effect border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 md:p-10">
                <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg group-hover:text-foreground transition-colors">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 border-2 border-primary/30 group-hover:border-primary transition-colors duration-500">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
