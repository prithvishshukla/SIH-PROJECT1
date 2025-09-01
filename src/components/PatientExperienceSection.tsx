import { Camera, BarChart3, MessageSquare, Trophy, Smartphone, Calendar } from "lucide-react";

const PatientExperienceSection = () => {
  const experiences = [
    {
      icon: MessageSquare,
      title: "Real-time Feedback",
      description: "Patients can provide instant feedback on treatments, symptoms, and progress through our intuitive mobile interface.",
      features: ["Symptom tracking", "Treatment ratings", "Side effect reporting", "Satisfaction surveys"]
    },
    {
      icon: Camera,
      title: "Visual Progress Tracking", 
      description: "Before and after photos with AI-powered analysis help track visible improvements in skin conditions and overall wellness.",
      features: ["Secure photo uploads", "Progress comparisons", "AI analysis", "Privacy protected"]
    },
    {
      icon: BarChart3,
      title: "Recovery Analytics",
      description: "Comprehensive charts and graphs show healing progress, vital statistics, and treatment adherence over time.",
      features: ["Interactive dashboards", "Progress milestones", "Health trends", "Predictive insights"]
    },
    {
      icon: Trophy,
      title: "Wellness Achievements",
      description: "Gamified health journey with achievements, milestones, and rewards for consistent treatment adherence.",
      features: ["Health milestones", "Achievement badges", "Streak tracking", "Community sharing"]
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive health assessment with AI-assisted Dosha analysis",
      icon: Smartphone
    },
    {
      step: "02", 
      title: "Personalized Plan",
      description: "Custom treatment protocol based on individual constitution and conditions",
      icon: Calendar
    },
    {
      step: "03",
      title: "Treatment Tracking",
      description: "Daily progress monitoring with photo documentation and symptom logging",
      icon: Camera
    },
    {
      step: "04",
      title: "Outcome Analysis",
      description: "Data-driven results analysis and treatment plan optimization",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-saffron/10 border border-saffron/20 rounded-full px-6 py-2 mb-6">
            <Camera className="w-4 h-4 text-saffron mr-2" />
            <span className="text-saffron font-medium">Patient Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Your Healing Journey, Visualized
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced tracking and visualization tools help patients and practitioners monitor progress with unprecedented clarity
          </p>
        </div>

        {/* Experience Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <div 
                key={experience.title}
                className="bg-card rounded-xl p-8 shadow-card hover-lift border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{experience.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                    <ul className="space-y-2">
                      {experience.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Patient Journey */}
        <div className="bg-gradient-healing rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The Complete Patient Journey
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From first consultation to complete recovery, every step is tracked and optimized
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.step}
                  className="text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4 shadow-button">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientExperienceSection;