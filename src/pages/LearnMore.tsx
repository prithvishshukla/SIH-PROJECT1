import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Award, TrendingUp, Leaf, Brain, Heart, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🌿 Learn About AyurSoma
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover the Future of <span className="text-primary">Ayurvedic Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how our platform combines ancient Ayurvedic wisdom with modern technology 
              to revolutionize holistic healthcare management and patient outcomes.
            </p>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="platform" className="mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="platform">Platform Overview</TabsTrigger>
              <TabsTrigger value="ayurveda">Ayurveda Basics</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>

            <TabsContent value="platform" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Comprehensive Management
                    </CardTitle>
                    <CardDescription>
                      Complete therapy lifecycle management
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Patient registration and profiling</li>
                      <li>• Automated appointment scheduling</li>
                      <li>• Digital prescription management</li>
                      <li>• Therapy progress tracking</li>
                      <li>• Outcome measurement tools</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      AI-Powered Insights
                    </CardTitle>
                    <CardDescription>
                      Intelligent analytics for better outcomes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Automated dosha analysis</li>
                      <li>• Predictive health modeling</li>
                      <li>• Smart treatment recommendations</li>
                      <li>• Real-time progress monitoring</li>
                      <li>• Personalized care plans</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Platform Architecture</CardTitle>
                  <CardDescription>
                    Built for scalability, security, and seamless integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Multi-User Platform</h3>
                      <p className="text-sm text-muted-foreground">
                        Designed for practitioners, patients, and clinic administrators
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Scalable Infrastructure</h3>
                      <p className="text-sm text-muted-foreground">
                        Cloud-native architecture that grows with your practice
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Compliance Ready</h3>
                      <p className="text-sm text-muted-foreground">
                        Built with healthcare regulations and data security in mind
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ayurveda" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-primary" />
                      The Three Doshas
                    </CardTitle>
                    <CardDescription>
                      Understanding your body's constitution
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-saffron">Vata (Air + Space)</h4>
                      <p className="text-sm text-muted-foreground">
                        Controls movement, breathing, and circulation. When balanced: creativity and vitality.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">Pitta (Fire + Water)</h4>
                      <p className="text-sm text-muted-foreground">
                        Governs digestion and metabolism. When balanced: intelligence and leadership.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-earth">Kapha (Earth + Water)</h4>
                      <p className="text-sm text-muted-foreground">
                        Provides structure and immunity. When balanced: strength and stability.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Panchakarma Therapy
                    </CardTitle>
                    <CardDescription>
                      The five-fold detoxification process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">1</span>
                        <div>
                          <p className="font-medium">Vamana (Emesis)</p>
                          <p className="text-sm text-muted-foreground">Therapeutic vomiting for Kapha disorders</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">2</span>
                        <div>
                          <p className="font-medium">Virechana (Purgation)</p>
                          <p className="text-sm text-muted-foreground">Controlled purging for Pitta imbalances</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">3</span>
                        <div>
                          <p className="font-medium">Basti (Enema)</p>
                          <p className="text-sm text-muted-foreground">Medicated enemas for Vata disorders</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">4</span>
                        <div>
                          <p className="font-medium">Nasya (Nasal)</p>
                          <p className="text-sm text-muted-foreground">Nasal administration of medicines</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">5</span>
                        <div>
                          <p className="font-medium">Raktamokshana (Bloodletting)</p>
                          <p className="text-sm text-muted-foreground">Blood purification therapy</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Ayurvedic Principles in Modern Healthcare</CardTitle>
                  <CardDescription>
                    How ancient wisdom applies to contemporary wellness
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Preventive Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Emphasizes prevention over treatment, maintaining balance to avoid disease.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Personalized Medicine</h4>
                      <p className="text-sm text-muted-foreground">
                        Treatments tailored to individual constitution and current imbalances.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Holistic Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Considers mind, body, and spirit as interconnected aspects of health.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technology" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>AI & Machine Learning</CardTitle>
                    <CardDescription>
                      Advanced algorithms for personalized care
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Dosha Analysis AI</h4>
                      <p className="text-sm text-muted-foreground">
                        Computer vision and natural language processing to assess constitutional types.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Predictive Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Machine learning models predict treatment outcomes and optimize therapy plans.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Smart Recommendations</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered suggestions for lifestyle, diet, and treatment modifications.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Digital Infrastructure</CardTitle>
                    <CardDescription>
                      Modern tools for traditional healing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Cloud-Based Platform</h4>
                      <p className="text-sm text-muted-foreground">
                        Secure, scalable infrastructure accessible from anywhere.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Mobile Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Native mobile apps for practitioners and patients.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Wearable Connectivity</h4>
                      <p className="text-sm text-muted-foreground">
                        Integration with fitness trackers and health monitoring devices.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-center">For Patients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Personalized treatment plans</li>
                      <li>✓ 24/7 access to health records</li>
                      <li>✓ Real-time progress tracking</li>
                      <li>✓ Video consultations</li>
                      <li>✓ Medication reminders</li>
                      <li>✓ Educational resources</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-center">For Practitioners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Streamlined workflow</li>
                      <li>✓ AI-assisted diagnosis</li>
                      <li>✓ Automated documentation</li>
                      <li>✓ Patient outcome analytics</li>
                      <li>✓ Treatment effectiveness tracking</li>
                      <li>✓ Continuing education tools</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-center">For Clinics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Complete practice management</li>
                      <li>✓ Revenue optimization</li>
                      <li>✓ Staff productivity tools</li>
                      <li>✓ Compliance monitoring</li>
                      <li>✓ Business intelligence</li>
                      <li>✓ Multi-location support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="shadow-card bg-gradient-primary text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join hundreds of practitioners already using AyurSoma to deliver better patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="saffron" className="bg-white text-primary hover:bg-white/90">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Free Trial
                </Button>
                <Button size="lg" variant="contact" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;