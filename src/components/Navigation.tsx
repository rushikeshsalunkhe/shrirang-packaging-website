import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">SP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Shrirang Packaging</h1>
              <p className="text-xs text-muted-foreground">Premium PET Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/products" className="text-foreground hover:text-secondary transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-foreground hover:text-secondary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/request-quote">
              <Button className="hidden md:flex bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                Request Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/request-quote" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary-hover">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
