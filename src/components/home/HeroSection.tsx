import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Package } from "lucide-react";
import heroImage from "@/assets/hero-bottles.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-white mb-6 font-bold">
            Premium PET Packaging for Food, Cosmetic & Chemical Industries
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Trusted packaging solutions for over 15+ years. ISO 9001:2015 certified. 
            Bulk manufacturing. Custom solutions tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/products">
              <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground w-full sm:w-auto">
                Explore Products
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                Request Bulk Quote
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-secondary" />
              <div>
                <p className="text-sm text-white/70">Certified</p>
                <p className="font-semibold text-white">ISO 9001:2015</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-secondary" />
              <div>
                <p className="text-sm text-white/70">Clients</p>
                <p className="font-semibold text-white">5000+</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-secondary" />
              <div>
                <p className="text-sm text-white/70">Experience</p>
                <p className="font-semibold text-white">15+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
