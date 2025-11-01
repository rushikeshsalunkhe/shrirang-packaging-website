import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Factory, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import factoryImage from "@/assets/factory-facility.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4">About Shrirang Packaging</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your trusted partner for premium PET packaging solutions since 2010
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2010, Shrirang Packaging has grown from a small local manufacturer 
                    to one of the most trusted names in PET plastic packaging in Maharashtra. Our 
                    journey began with a simple mission: to provide high-quality, reliable packaging 
                    solutions to businesses across India.
                  </p>
                  <p>
                    Today, we operate a state-of-the-art manufacturing facility in Satara, equipped 
                    with advanced machinery and staffed by experienced professionals. We've successfully 
                    served over 5000 clients across food, cosmetic, and chemical industries, earning 
                    their trust through consistent quality and competitive pricing.
                  </p>
                  <p>
                    Our ISO 9001:2015 certification is a testament to our commitment to quality 
                    management and continuous improvement. We believe in building long-term partnerships 
                    with our clients by understanding their unique needs and delivering customized solutions.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={factoryImage}
                  alt="Manufacturing Facility"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-primary text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <Award className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                  <p className="text-muted-foreground">
                    ISO certified processes ensure every product meets the highest standards
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <Users className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                  <p className="text-muted-foreground">
                    Understanding and exceeding customer expectations is our priority
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <Factory className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously improving our processes and products with latest technology
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <Target className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-muted-foreground">
                    On-time delivery and consistent quality you can depend on
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-primary mb-6">Certifications & Awards</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our commitment to quality is recognized by industry-leading certifications
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover-lift">
                  <CardContent className="p-8">
                    <div className="bg-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">ISO 9001:2015</h3>
                    <p className="text-sm text-muted-foreground">
                      Quality Management System Certified
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-8">
                    <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">FDA Approved</h3>
                    <p className="text-sm text-muted-foreground">
                      Food-Grade Material Certification
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-8">
                    <div className="bg-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">BPA Free</h3>
                    <p className="text-sm text-muted-foreground">
                      Safe & Eco-Friendly Materials
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
