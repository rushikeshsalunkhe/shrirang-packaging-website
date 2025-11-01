import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import bottleImage from "@/assets/product-bottle-250ml.jpg";
import jarsImage from "@/assets/product-jars.jpg";
import containersImage from "@/assets/product-containers.jpg";

const categories = [
  {
    name: "PET Bottles",
    description: "Various sizes from 50ml to 5L",
    image: bottleImage,
    link: "/products?category=bottles",
  },
  {
    name: "PET Jars",
    description: "Clear, colored, various closures",
    image: jarsImage,
    link: "/products?category=jars",
  },
  {
    name: "Plastic Containers",
    description: "Food-grade, chemical-resistant",
    image: containersImage,
    link: "/products?category=containers",
  },
  {
    name: "Custom Solutions",
    description: "Tailored packaging solutions",
    image: bottleImage,
    link: "/contact",
  },
  {
    name: "Accessories & Closures",
    description: "Caps, pumps, and more",
    image: jarsImage,
    link: "/products?category=accessories",
  },
  {
    name: "Specialty Products",
    description: "Eco-friendly options",
    image: containersImage,
    link: "/products?category=specialty",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-primary mb-4">Our Product Range</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive selection of PET packaging solutions for every industry need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link to={category.link} key={index}>
              <Card className="overflow-hidden hover-lift group cursor-pointer h-full">
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-secondary font-medium group-hover:translate-x-2 transition-transform">
                    Browse Category
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
