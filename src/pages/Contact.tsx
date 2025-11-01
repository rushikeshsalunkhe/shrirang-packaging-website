
//navoy61353@ametitas.com


import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90">
              Get in touch with our team for any inquiries
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Satara, Maharashtra<br />
                    India - 415001
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-secondary">
                    +91 98765 43210
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:info@shrirangpackaging.com" className="text-muted-foreground hover:text-secondary">
                    info@shrirangpackaging.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" type="text" placeholder="Your Name" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" type="text" placeholder="Message Subject" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        required
                        className="mt-1"
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary-hover" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Business Hours & Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <Clock className="h-8 w-8 text-secondary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                        <div className="space-y-2 text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Need a Quick Quote?</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      For bulk orders and custom packaging solutions, request a quote and get a response within 24 hours.
                    </p>
                    <Button
                      className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                      onClick={() => window.location.href = '/request-quote'}
                    >
                      Request Quote Now
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Visit Our Facility</h3>
                    <p className="text-muted-foreground mb-4">
                      We welcome facility visits by appointment. Contact us to schedule a tour of our 
                      ISO-certified manufacturing plant.
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule a Visit
                    </Button>
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

export default Contact;
