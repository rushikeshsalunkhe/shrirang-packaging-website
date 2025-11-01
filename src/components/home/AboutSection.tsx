import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import factoryImage from "@/assets/factory-facility.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={factoryImage}
                alt="Manufacturing Facility"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <div className="flex items-center space-x-2 text-white">
                  <Award className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">ISO 9001:2015 Certified Facility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h2 className="text-primary mb-6">Manufacturing Excellence Since 2010</h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="leading-relaxed">
                Shrirang Packaging has been a trusted name in PET plastic packaging manufacturing for over 15 years. 
                Based in Satara, Maharashtra, we serve food, cosmetic, and chemical industries across India.
              </p>
              <p className="leading-relaxed">
                Our state-of-the-art manufacturing facility is equipped with advanced machinery and operates under 
                strict ISO 9001:2015 quality standards. We specialize in producing high-quality PET bottles, jars, 
                and containers that meet international safety and quality benchmarks.
              </p>
              <p className="leading-relaxed">
                With a commitment to innovation, sustainability, and customer satisfaction, we've successfully 
                delivered packaging solutions to over 5000+ clients, earning their trust through consistent quality 
                and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-3xl font-bold text-secondary mb-1">15+</p>
                <p className="text-sm text-foreground">Years Experience</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-3xl font-bold text-secondary mb-1">2000+</p>
                <p className="text-sm text-foreground">Products Available</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-3xl font-bold text-secondary mb-1">5000+</p>
                <p className="text-sm text-foreground">Happy Clients</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-3xl font-bold text-secondary mb-1">3</p>
                <p className="text-sm text-foreground">Industries Served</p>
              </div>
            </div>

            <Link to="/about">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
