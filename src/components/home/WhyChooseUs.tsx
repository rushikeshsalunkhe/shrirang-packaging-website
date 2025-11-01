import { Award, DollarSign, Truck, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Quality Assurance",
    subtitle: "ISO 9001:2015 Certified",
    description: "Strict quality control at every stage of manufacturing",
    color: "text-secondary",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    subtitle: "Affordable Bulk Pricing",
    description: "Transparent pricing with volume discounts for bulk orders",
    color: "text-accent",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "Quick Turnaround",
    description: "Reliable delivery within 10-14 days for standard orders",
    color: "text-secondary",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    subtitle: "Full Customization",
    description: "Tailored solutions for unique packaging requirements",
    color: "text-accent",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-primary mb-4">Why Choose Shrirang Packaging?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for premium PET packaging solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-l-4 border-secondary hover-lift cursor-pointer group"
            >
              <CardContent className="p-6">
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {feature.subtitle}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {feature.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
