import { Heart, Stethoscope, Building2, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      category: "For Patients",
      icon: Heart,
      color: "text-saffron",
      bgColor: "bg-saffron/10",
      features: [
        "Clear instructions and timely notifications improve adherence and satisfaction",
        "Community support platform boosts motivation and trust through shared experiences",
        "Emergency alert system ensures immediate safety and medical response",
        "Personalized dashboards with visual progress tracking and recovery patterns",
        "Pre and post comparison photos for motivation and visual evidence of recovery"
      ]
    },
    {
      category: "For Practitioners", 
      icon: Stethoscope,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Simplified scheduling and digital notes reduce administrative burden significantly",
        "AI support tools improve diagnosis accuracy and save consultation time",
        "Real-time patient data access enhances clinical decision-making capabilities",
        "Automated therapy templates for standardized Panchakarma treatments",
        "Comprehensive patient feedback system for continuous care improvement"
      ]
    },
    {
      category: "For Clinics & Centers",
      icon: Building2, 
      color: "text-earth",
      bgColor: "bg-earth/10",
      features: [
        "Streamlined operations lead to higher efficiency and reduced operational costs",
        "Improved patient satisfaction leads to better retention and referral rates",
        "Data-driven insights enable long-term quality improvement initiatives",
        "Smart bed allocation optimizes resource utilization and patient flow",
        "Comprehensive management dashboard for multi-location oversight"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive Benefits & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform creates measurable value across the entire Panchakarma ecosystem, improving outcomes for all stakeholders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.category}
                className="bg-card rounded-xl p-8 shadow-card hover-lift border border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground">{benefit.category}</h3>
                
                <ul className="space-y-3">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Future Scalability */}
        <div className="bg-gradient-earth rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-medium">Future Ready</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Built for Tomorrow's Healthcare
            </h3>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our platform is designed to scale with emerging technologies and evolving healthcare needs
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-sm">Wearable Integration</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-sm">Mobile Apps</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-sm">Analytics Dashboard</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-center">
                  <Building2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-sm">Insurance Integration</span>
                </div>
              </div>
            </div>

            <Button variant="contact" size="lg" className="bg-white text-earth hover:bg-white/90">
              Learn About Future Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;