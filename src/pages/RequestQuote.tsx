import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const RequestQuote = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with a customized quote.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-accent/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-accent" />
              </div>
              <h1 className="text-primary mb-4">Thank you for your quote request!</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Order Reference: #RFQ-20251101-0001
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We'll contact you within 24 hours with a customized quote.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setSubmitted(false)}>
                  Submit Another Request
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/products'}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4">Request a Quote</h1>
            <p className="text-lg text-primary-foreground/90">
              Get custom pricing for your bulk packaging needs
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Fill in Your Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Product Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Product Information</h3>
                    
                    <div>
                      <Label htmlFor="product">Product Type *</Label>
                      <select id="product" className="w-full mt-1 px-3 py-2 border rounded-md" required>
                        <option value="">Select Product</option>
                        <option value="bottles">PET Bottles</option>
                        <option value="jars">PET Jars</option>
                        <option value="containers">Plastic Containers</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="quantity">Quantity Required (units) *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="100"
                        placeholder="e.g., 5000"
                        className="mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="customization">Customization Details</Label>
                      <Textarea
                        id="customization"
                        placeholder="Any specific customization? (printing, colors, sizes, etc.)"
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Delivery Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Delivery Details</h3>
                    
                    <div>
                      <Label htmlFor="timeline">Delivery Timeline *</Label>
                      <select id="timeline" className="w-full mt-1 px-3 py-2 border rounded-md" required>
                        <option value="standard">Standard (10-14 days)</option>
                        <option value="rush">Rush (5-7 days)</option>
                        <option value="express">Express (2-3 days)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="location">Delivery Location *</Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="City, State"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className="mt-1"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Company"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className="mt-1"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="industry">Company Industry *</Label>
                      <select id="industry" className="w-full mt-1 px-3 py-2 border rounded-md" required>
                        <option value="">Select Industry</option>
                        <option value="food">Food & Beverage</option>
                        <option value="cosmetic">Cosmetic & Beauty</option>
                        <option value="chemical">Chemical & Industrial</option>
                        <option value="pharma">Pharmaceutical</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="notes">Special Requirements</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requirements or questions?"
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary-hover"
                      size="lg"
                    >
                      Submit RFQ
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => window.location.reload()}
                    >
                      Clear Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestQuote;
