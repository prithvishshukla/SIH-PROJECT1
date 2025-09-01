import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-green-200/30 animate-float">
        <Leaf className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 right-10 text-saffron/30 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 rounded-full bg-current" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <span className="text-white/90 text-sm font-medium">🌿 Modern Ayurveda Technology Platform</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up text-balance leading-tight">
            Restore Your 
            <span className="text-saffron"> Body</span>,
            <br />
            <span className="text-primary-light">Mind</span> & 
            <span className="text-white">Soul</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-slide-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Experience the perfect blend of ancient Ayurvedic wisdom and modern technology. 
            Comprehensive Panchakarma therapy management with AI-powered insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button size="hero" variant="saffron" className="group">
              Start Your Healing Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="hero" variant="contact" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-saffron mb-2">5000+</div>
              <div className="text-white/80 text-sm">Patients Healed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">150+</div>
              <div className="text-white/80 text-sm">Practitioners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80 text-sm">Clinics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-saffron mb-2">95%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;