import { Package, Users, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Package,
    number: "2000+",
    title: "Products",
    description: "Complete range of PET packaging",
  },
  {
    icon: Users,
    number: "5000+",
    title: "Clients",
    description: "Trusted by leading brands",
  },
  {
    icon: Award,
    number: "15+",
    title: "Years",
    description: "Industry expertise",
  },
  {
    icon: CheckCircle,
    number: "100%",
    title: "Quality",
    description: "ISO certified manufacturing",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-l-4 border-secondary hover-lift cursor-pointer group"
            >
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-foreground mb-1">
                  {stat.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
