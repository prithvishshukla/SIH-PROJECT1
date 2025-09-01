import { Calendar, Users, FileText, Video, Brain, Target, UserCheck, Bell, MessageCircle, AlertTriangle, Bed, Camera } from "lucide-react";

const FeaturesSection = () => {
  const coreFeatures = [
    {
      icon: Calendar,
      title: "Automated Therapy Scheduling",
      description: "Intelligent scheduling based on practitioner availability, patient requirements, and bed allocation. Minimizes double-booking and reduces manual effort."
    },
    {
      icon: Bell,
      title: "Smart Notification System", 
      description: "Automated SMS/email/WhatsApp reminders for therapy preparation and post-care instructions. Improves patient compliance."
    },
    {
      icon: Users,
      title: "Patient & Practitioner Dashboards",
      description: "Centralized portals for patients to track progress and practitioners to manage records, treatment plans, and therapy notes."
    },
    {
      icon: FileText,
      title: "Digital Prescriptions & Notes",
      description: "Secure digital prescriptions with multilingual support. Practitioners can generate therapy notes with complete patient history."
    },
    {
      icon: Video,
      title: "Video Consultation Module",
      description: "Remote consultations for patients who cannot visit physically. Supports follow-ups and international patient engagement."
    },
    {
      icon: Bed,
      title: "Smart Bed/Seat Allocation",
      description: "Automated allocation of therapy rooms and beds based on patient load and schedules. Manual override options for flexibility."
    }
  ];

  const advancedFeatures = [
    {
      icon: Brain,
      title: "AI-Based Dosha Analysis",
      description: "Patients complete questionnaires analyzed by AI to classify Vata, Pitta, or Kapha imbalances and suggest Panchakarma plans."
    },
    {
      icon: Target,
      title: "Outcome Predictor",
      description: "ML algorithms use patient data to predict improvement outcomes and help set realistic expectations for therapy adherence."
    },
    {
      icon: MessageCircle,
      title: "Community & Support Forum",
      description: "Peer-to-peer platform where patients share experiences, success stories, and lifestyle tips. Builds trust and motivation."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Red-Flag Alerts",
      description: "Instant emergency notifications to doctors via SMS/email when patients report serious side effects during treatment."
    },
    {
      icon: Camera,
      title: "Pre & Post Comparison Photos",
      description: "Patients upload condition photos before and after therapy for visual progress tracking and motivation."
    },
    {
      icon: UserCheck,
      title: "Panchakarma Module Templates",
      description: "Predefined therapy templates for Vamana, Virechana, Basti treatments. Saves time and ensures standardized care."
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
        <p className="text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
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
            Essential tools for modern Panchakarma therapy centers - from scheduling to patient management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {coreFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Advanced Features */}
        <div id="ai-features" className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Brain className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium">Advanced & Unique Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI-Powered Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge features that set our platform apart - community engagement, AI insights, and smart automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index + 6} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;