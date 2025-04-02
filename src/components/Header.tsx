
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 py-2 shadow-md shadow-purple-900/10" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                RocketVideosAI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="#compare"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Compare
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button 
              variant="ghost" 
              className="text-sm hover:bg-white/5"
            >
              Log in
            </Button>
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-200 text-sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md fixed inset-0 z-50 pt-16">
          <div className="px-4 py-6 space-y-6">
            <a
              href="#features"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#compare"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compare
            </a>
            <a
              href="#faq"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-4 pt-6">
              <Button 
                variant="ghost"
                className="w-full justify-center py-6 text-base"
              >
                Log in
              </Button>
              <Button 
                className="w-full justify-center bg-white text-gray-900 hover:bg-gray-200 py-6 text-base"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
