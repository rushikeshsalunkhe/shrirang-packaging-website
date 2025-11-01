import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to receive marketing emails",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success!",
      description: "Thank you for subscribing! Check your email for confirmation.",
    });
    setEmail("");
    setAgreed(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-4">
            Stay Updated with Industry Trends & Exclusive Offers
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Subscribe to our newsletter for product updates, tips, and special bulk pricing
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-white text-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground h-12 px-8"
              >
                Subscribe
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="border-white data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
              />
              <label
                htmlFor="agree"
                className="text-sm text-white/90 cursor-pointer"
              >
                I agree to receive marketing emails
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
