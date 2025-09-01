import { Button } from "@/components/ui/button";
import { Calendar, Phone, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Top Action Bar */}
      <div className="bg-gradient-healing border-b border-border/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <Link to="/book-appointment">
              <Button variant="saffron" className="hover-glow">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="contact" className="hover-lift">
                <Phone className="w-4 h-4" />
                Contact Us
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button variant="learn-more" className="hover-lift">
                <BookOpen className="w-4 h-4" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🕉</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">AyurSoma</h1>
                <p className="text-xs text-muted-foreground">Ayurveda Therapy Management</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-foreground hover:text-primary transition-smooth font-medium">
                Features
              </Link>
              <Link to="/ai-features" className="text-foreground hover:text-primary transition-smooth font-medium">
                AI Features
              </Link>
              <Link to="/benefits" className="text-foreground hover:text-primary transition-smooth font-medium">
                Benefits
              </Link>
              <Link to="/testimonials" className="text-foreground hover:text-primary transition-smooth font-medium">
                Testimonials
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About
              </Link>
            </nav>

            <Link to="/book-appointment">
              <Button variant="hero" className="hidden md:flex">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;