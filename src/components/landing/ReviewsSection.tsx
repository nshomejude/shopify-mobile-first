import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Review {
  name: string;
  rating: number;
  text: string;
  type?: 'patient' | 'lab' | 'clinic';
}

interface ReviewsSectionProps {
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    name: "Verified Patient",
    rating: 5,
    text: "Prescription approval took exactly 7 days. Product quality and delivery were excellent. Very professional service.",
    type: "patient"
  },
  {
    name: "Research Facility, EU",
    rating: 5,
    text: "Professional handling of research chemical orders. License verification was straightforward and efficient.",
    type: "lab"
  },
  {
    name: "Medical Clinic, USA",
    rating: 5,
    text: "Reliable supplier with consistent quality. The verification process ensures compliance and safety.",
    type: "clinic"
  }
];

export const ReviewsSection = ({ reviews = defaultReviews }: ReviewsSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer & Lab Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by patients, researchers, and healthcare professionals worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {review.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-1 mt-1">
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
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground italic pl-6">
                  "{review.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
