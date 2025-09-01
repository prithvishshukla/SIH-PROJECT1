import { Calendar, Users, FileText, Video, Brain, Target, UserCheck, Bell } from "lucide-react";

const FeaturesSection = () => {
  const coreFeatures = [
    {
      icon: Calendar,
      title: "Therapy Scheduling",
      description: "Intelligent appointment scheduling with Dosha-based timing optimization and automated reminders."
    },
    {
      icon: Users,
      title: "Dashboard Management", 
      description: "Comprehensive dashboards for patients, practitioners, and clinic administrators with real-time insights."
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "AI-assisted prescription generation with herb interactions checking and dosage optimization."
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "Secure telemedicine platform with pulse analysis, tongue examination, and remote monitoring."
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "Dosha Analysis AI",
      description: "Advanced AI algorithms analyze patient constitution, current imbalances, and recommend personalized treatments."
    },
    {
      icon: Target,
      title: "Outcome Predictor",
      description: "Machine learning models predict treatment outcomes and suggest protocol adjustments for optimal results."
    },
    {
      icon: UserCheck,
      title: "Smart Allocation",
      description: "Intelligent matching of patients with specialists based on expertise, availability, and treatment requirements."
    },
    {
      icon: Bell,
      title: "Proactive Alerts",
      description: "Smart notifications for treatment adherence, follow-ups, and early warning signs of complications."
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
    const Icon = feature.icon;
    return (
      <div 
        className="bg-card rounded-xl p-6 shadow-card hover-lift border border-border/50"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    );
  };

  return (
    <section id="features" className="py-20 bg-gradient-healing">
      <div className="container mx-auto px-4">
        {/* Core Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Core Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed to modernize Ayurvedic practice while preserving traditional wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* AI Features */}
        <div id="ai-features" className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Brain className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium">AI-Powered Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Advanced AI Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge artificial intelligence enhances traditional diagnosis and treatment protocols
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;