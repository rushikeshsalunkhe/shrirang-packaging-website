import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    company: "FreshJuice Co.",
    name: "Rajesh Kumar",
    title: "Procurement Manager",
    rating: 5,
    text: "We've been partnering with Shrirang for 5+ years. Their PET bottles are superior quality and pricing is unbeatable. Highly recommended for bulk orders.",
  },
  {
    company: "GlowCosmetics",
    name: "Priya Sharma",
    title: "Operations Head",
    rating: 5,
    text: "Excellent product range and exceptional customer service. The custom jar solutions perfectly matched our brand requirements. Professional team!",
  },
  {
    company: "ChemTech Industries",
    name: "Amit Patel",
    title: "Supply Chain Director",
    rating: 5,
    text: "Reliable delivery schedules and consistent quality. ISO certification gives us confidence in their manufacturing processes. Great value for money.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-primary mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about our packaging solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-l-4 border-secondary hover-lift"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                  <p className="text-sm font-medium text-secondary mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
