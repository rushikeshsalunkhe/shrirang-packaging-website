import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import bottleImage from "@/assets/product-bottle-250ml.jpg";
import bottle500Image from "@/assets/product-bottle-500ml.jpg";
import jarsImage from "@/assets/product-jars.jpg";

const products = [
  {
    id: 1,
    name: "250ml Clear PET Bottle",
    capacity: "250ml",
    neck: "28mm",
    image: bottleImage,
    rating: 5,
    reviews: 47,
    basePrice: 25,
    bulkPricing: [
      { range: "500-1000", price: 22 },
      { range: "1000-5000", price: 20 },
      { range: "5000+", price: 18 },
    ],
    moq: 500,
    badges: ["BPA Free", "Food Grade"],
  },
  {
    id: 2,
    name: "500ml Premium PET Bottle",
    capacity: "500ml",
    neck: "38mm",
    image: bottle500Image,
    rating: 5,
    reviews: 62,
    basePrice: 35,
    bulkPricing: [
      { range: "500-1000", price: 32 },
      { range: "1000-5000", price: 30 },
      { range: "5000+", price: 28 },
    ],
    moq: 500,
    badges: ["BPA Free", "Food Grade", "FDA Approved"],
  },
  {
    id: 3,
    name: "PET Storage Jars Set",
    capacity: "Various",
    neck: "Wide Mouth",
    image: jarsImage,
    rating: 5,
    reviews: 38,
    basePrice: 45,
    bulkPricing: [
      { range: "200-500", price: 42 },
      { range: "500-1000", price: 40 },
      { range: "1000+", price: 38 },
    ],
    moq: 200,
    badges: ["BPA Free", "Food Grade"],
  },
  {
    id: 4,
    name: "1L Clear PET Bottle",
    capacity: "1000ml",
    neck: "43mm",
    image: bottleImage,
    rating: 5,
    reviews: 55,
    basePrice: 48,
    bulkPricing: [
      { range: "500-1000", price: 45 },
      { range: "1000-5000", price: 42 },
      { range: "5000+", price: 40 },
    ],
    moq: 500,
    badges: ["BPA Free", "Food Grade"],
  },
];

const Products = () => {
  const [sortBy, setSortBy] = useState("popularity");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4">Our Product Catalogue</h1>
            <p className="text-lg text-primary-foreground/90">
              Browse our complete range of premium PET packaging solutions
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Sort */}
            <div className="flex justify-end mb-8">
              <select
                className="px-4 py-2 border rounded-lg bg-card"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="hover-lift group">
                  <div className="relative">
                    <div className="h-64 bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({product.reviews})
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">
                      {product.capacity} | {product.neck} Neck
                    </p>

                    <div className="mb-3">
                      <p className="text-lg font-bold text-primary">
                        ₹{product.basePrice}/unit
                      </p>
                      <p className="text-xs text-muted-foreground">
                        MOQ: {product.moq} units
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.badges.map((badge, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Link to={`/products/${product.id}`}>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Link to="/request-quote">
                        <Button className="w-full bg-secondary hover:bg-secondary-hover">
                          Quick RFQ
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
