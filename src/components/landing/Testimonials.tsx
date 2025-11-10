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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their health
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
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
