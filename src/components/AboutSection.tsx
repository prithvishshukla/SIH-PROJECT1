import { Heart, Brain, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Efficiency & Safety",
      description: "Automating routine tasks while ensuring patient safety through emergency alert systems"
    },
    {
      icon: Brain,
      title: "AI-Driven Insights",
      description: "Empowering practitioners with intelligent Dosha analysis and outcome prediction tools"
    },
    {
      icon: Leaf,
      title: "Traditional Authenticity",
      description: "Preserving Panchakarma authenticity while making it future-ready with technology"
    },
    {
      icon: Users,
      title: "Holistic Ecosystem",
      description: "Creating connections between patients, practitioners, and healing communities worldwide"
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
              Bridging Ancient Wisdom with Modern Technology
            </h2>
            
            <p className="text-xl text-white/96 mb-8 leading-relaxed">
              The growing demand for Panchakarma and Ayurveda-based therapies has highlighted the need for a dedicated, 
              technology-driven management system. Most centers currently rely on manual scheduling, fragmented documentation, 
              and limited digital engagement, leading to inefficiencies and patient dissatisfaction.
            </p>

            <p className="text-lg text-white/92 mb-10 leading-relaxed">
              Our comprehensive digital platform is designed specifically for Panchakarma and Ayurveda therapy centers. 
              We integrate modern IT solutions with traditional healing processes to streamline operations, empower practitioners, 
              and enhance patient outcomes while preserving the authenticity of ancient wisdom.
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
                    <p className="text-white/92 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Platform Impact</h3>
            <p className="text-white/90">Transforming Panchakarma centers worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Therapy Centers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90">Practitioners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15K+</div>
              <div className="text-white/90">Patients Managed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-white/90">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;