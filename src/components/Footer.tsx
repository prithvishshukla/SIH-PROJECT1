import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Ayurvedic Insights
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest in Ayurvedic healthcare technology, 
            wellness tips, and platform updates.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
            />
            <Button variant="saffron" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Send className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🕉</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">AyurSoma</h1>
                  <p className="text-xs text-white/70">Ayurveda Therapy Management</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Revolutionizing Ayurvedic healthcare through intelligent technology 
                while preserving the essence of traditional healing wisdom.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-white/80 hover:text-white transition-smooth">Platform Features</a></li>
                <li><a href="#ai-features" className="text-white/80 hover:text-white transition-smooth">AI Capabilities</a></li>
                <li><a href="#benefits" className="text-white/80 hover:text-white transition-smooth">Benefits</a></li>
                <li><a href="#testimonials" className="text-white/80 hover:text-white transition-smooth">Testimonials</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white transition-smooth">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Pricing</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Documentation</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-smooth">API Reference</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Help Center</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Training Videos</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Research Papers</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <p className="text-white">hello@ayursoma.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Phone</p>
                    <p className="text-white">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-earth" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Address</p>
                    <p className="text-white">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-foreground/90 border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 AyurSoma. All rights reserved. Built with love for holistic healthcare.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-smooth">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;