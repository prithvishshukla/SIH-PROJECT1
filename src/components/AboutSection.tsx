import { Heart, Brain, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every feature is designed with patient wellbeing at its core"
    },
    {
      icon: Brain,
      title: "Scientific Innovation",
      description: "Bridging ancient wisdom with cutting-edge AI technology"
    },
    {
      icon: Leaf,
      title: "Natural Healing",
      description: "Supporting the body's natural healing processes through Ayurveda"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building connections between patients, practitioners, and healing communities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
              <Leaf className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-medium">Our Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Blending Tradition with Innovation
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We believe that the timeless wisdom of Ayurveda, when enhanced by modern technology, 
              can create unprecedented healing experiences. Our platform preserves the essence of 
              traditional practice while making it accessible, efficient, and data-driven.
            </p>

            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Founded by a team of Ayurvedic practitioners, technologists, and healthcare innovators, 
              we're committed to making holistic healthcare more effective, accessible, and personalized 
              than ever before.
            </p>

            <Button variant="contact" size="lg" className="bg-white text-earth hover:bg-white/90">
              Learn Our Story
            </Button>
          </div>

          {/* Values Side */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={value.title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{value.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80">Years Research</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Practitioners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15K+</div>
              <div className="text-white/80">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Research Papers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;