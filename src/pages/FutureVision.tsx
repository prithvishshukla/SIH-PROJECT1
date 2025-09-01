import { TrendingUp, Smartphone, Activity, CreditCard, Zap, Shield, ChevronRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FutureVision = () => {
  const futureFeatures = [
    {
      icon: Activity,
      title: "Wearable Device Integration",
      description: "Advanced integration with smartwatches and health wearables to track patient vitals during and after therapies.",
      capabilities: [
        "Real-time vital sign monitoring during treatments",
        "Continuous post-therapy recovery tracking",
        "Heart rate variability analysis for Dosha assessment",
        "Sleep pattern monitoring for treatment optimization",
        "Automated data sync with patient health records"
      ],
      timeframe: "2025 Q2",
      impact: "Enables continuous patient monitoring and personalized treatment adjustments"
    },
    {
      icon: Smartphone,
      title: "Mobile App Expansion",
      description: "Comprehensive mobile applications for both patients and practitioners with offline capabilities.",
      capabilities: [
        "Patient self-service appointment booking and management",
        "Practitioner mobile access to patient records",
        "Offline mode for areas with limited connectivity",
        "Push notifications for appointments and reminders",
        "Mobile prescription and treatment note capture"
      ],
      timeframe: "2025 Q1",
      impact: "Increases accessibility and user engagement across all demographics"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive data analytics platform for clinics to monitor performance and outcomes.",
      capabilities: [
        "Multi-dimensional performance analytics",
        "Treatment outcome prediction modeling",
        "Resource utilization optimization insights",
        "Patient satisfaction trend analysis",
        "Competitive benchmarking tools"
      ],
      timeframe: "2025 Q3",
      impact: "Empowers data-driven decision making for improved operational efficiency"
    },
    {
      icon: CreditCard,
      title: "Insurance Provider Integration",
      description: "Seamless integration with insurance providers for cashless therapy claims and automated billing.",
      capabilities: [
        "Direct billing to insurance companies",
        "Pre-authorization request automation",
        "Claims status tracking and management",
        "Coverage verification in real-time",
        "Automated copayment calculation"
      ],
      timeframe: "2026 Q1",
      impact: "Reduces financial barriers and administrative burden for patients and clinics"
    }
  ];

  const technicalRoadmap = [
    {
      year: "2025",
      milestones: [
        "Mobile app launch for iOS and Android",
        "Wearable device integration with major brands",
        "Advanced AI model improvements",
        "Multi-language support expansion"
      ]
    },
    {
      year: "2026", 
      milestones: [
        "Insurance provider network integration",
        "Blockchain-based health record security",
        "Telemedicine expansion to rural areas",
        "Research collaboration platform launch"
      ]
    },
    {
      year: "2027",
      milestones: [
        "Global platform expansion",
        "Advanced genomics integration",
        "Virtual reality therapy sessions",
        "Automated treatment protocol optimization"
      ]
    }
  ];

  const impactMetrics = [
    { label: "Expected User Growth", value: "300%", description: "By 2026" },
    { label: "Technology Integration", value: "50+", description: "New partnerships" },
    { label: "Global Reach", value: "15", description: "Countries" },
    { label: "Research Partnerships", value: "25+", description: "Academic institutions" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-earth text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
                <Zap className="w-4 h-4 text-white mr-2" />
                <span className="text-white font-medium">Future Scalability & Vision</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                The Future of
                <span className="text-saffron"> Panchakarma</span> Technology
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our platform creates a bridge between traditional Panchakarma therapies and modern digital healthcare technology. 
                We're building the future of holistic healthcare with cutting-edge innovations while preserving ancient wisdom.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {impactMetrics.map((metric, index) => (
                  <div key={metric.label} className="text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl md:text-4xl font-bold text-saffron mb-2">{metric.value}</div>
                    <div className="text-white font-medium mb-1">{metric.label}</div>
                    <div className="text-white/70 text-sm">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Next-Generation Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Innovative features in development that will revolutionize how Panchakarma centers operate 
                and how patients experience traditional healing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {futureFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="shadow-card hover-lift border border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <Badge variant="outline" className="mt-1">{feature.timeframe}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-primary/5 rounded-xl p-4">
                          <h4 className="font-semibold text-foreground mb-3">Key Capabilities:</h4>
                          <div className="space-y-2">
                            {feature.capabilities.map((capability, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{capability}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-saffron/10 border border-saffron/20 rounded-xl p-4">
                          <div className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Expected Impact:</h4>
                              <p className="text-sm text-muted-foreground">{feature.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Roadmap */}
        <section className="py-20 bg-gradient-healing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Technology Roadmap
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our strategic development timeline showing how we're building the future of Panchakarma technology
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {technicalRoadmap.map((roadmap, index) => (
                <div key={roadmap.year} className="relative mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {roadmap.year}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Year {roadmap.year}</h3>
                      <p className="text-muted-foreground">Major platform developments and feature releases</p>
                    </div>
                  </div>
                  
                  <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roadmap.milestones.map((milestone, idx) => (
                      <Card key={idx} className="shadow-card border border-border/50">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{milestone}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {index < technicalRoadmap.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-primary to-saffron"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
                <Shield className="w-4 h-4 text-white mr-2" />
                <span className="text-white font-medium">Our Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Making Panchakarma Future-Ready
              </h2>
              
              <div className="text-xl text-white/90 mb-8 leading-relaxed space-y-4">
                <p>
                  By automating routine tasks, empowering practitioners with AI-driven insights, and enhancing 
                  patient engagement through personalized care, our system ensures efficiency, safety, and quality 
                  improvement in Ayurveda therapy management.
                </p>
                <p>
                  This holistic approach not only benefits patients and doctors but also elevates the entire 
                  Panchakarma ecosystem, making it future-ready while preserving its authentic healing traditions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="contact" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Join Our Vision
                </Button>
                <Button variant="contact" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
                  Partner With Us
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FutureVision;
