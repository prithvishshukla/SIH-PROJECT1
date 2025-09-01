import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Video, BarChart3, Bell, Users, Shield, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🚀 Platform Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive <span className="text-primary">Ayurveda</span> Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run a modern Ayurvedic practice, from patient management 
              to therapy tracking and outcome analysis.
            </p>
          </div>

          {/* Core Features Section */}
          <FeaturesSection />

          {/* Detailed Features Grid */}
          <div className="mt-16 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Detailed Feature Overview
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore each feature in depth and understand how it can transform your practice
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Patient Management */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Patient Management System
                  </CardTitle>
                  <CardDescription>
                    Complete patient lifecycle management
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Registration</h4>
                      <p className="text-xs text-muted-foreground">Quick patient onboarding</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Health History</h4>
                      <p className="text-xs text-muted-foreground">Comprehensive records</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Family Tree</h4>
                      <p className="text-xs text-muted-foreground">Genetic predispositions</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Insurance</h4>
                      <p className="text-xs text-muted-foreground">Coverage management</p>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Secure patient data storage</li>
                    <li>• HIPAA compliant architecture</li>
                    <li>• Easy search and filtering</li>
                    <li>• Bulk import capabilities</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Appointment Scheduling */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    Smart Scheduling System
                  </CardTitle>
                  <CardDescription>
                    Intelligent appointment management
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Auto-booking</h4>
                      <p className="text-xs text-muted-foreground">Smart slot allocation</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Reminders</h4>
                      <p className="text-xs text-muted-foreground">SMS & email alerts</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Waitlists</h4>
                      <p className="text-xs text-muted-foreground">Automatic rescheduling</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Multi-location</h4>
                      <p className="text-xs text-muted-foreground">Cross-clinic booking</p>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Conflict detection and resolution</li>
                    <li>• Resource allocation optimization</li>
                    <li>• No-show prediction and prevention</li>
                    <li>• Integration with calendar apps</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Digital Prescriptions */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Digital Prescription System
                  </CardTitle>
                  <CardDescription>
                    Paperless prescription management
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Herb Database</h4>
                      <p className="text-xs text-muted-foreground">Comprehensive library</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Drug Interactions</h4>
                      <p className="text-xs text-muted-foreground">Safety checking</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Dosage Calculator</h4>
                      <p className="text-xs text-muted-foreground">Precise measurements</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">E-Signatures</h4>
                      <p className="text-xs text-muted-foreground">Legal compliance</p>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Template-based prescribing</li>
                    <li>• Allergy and contraindication alerts</li>
                    <li>• Pharmacy integration</li>
                    <li>• Prescription history tracking</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Video Consultations */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-6 h-6 text-primary" />
                    Telemedicine Platform
                  </CardTitle>
                  <CardDescription>
                    HD video consultations and remote care
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">HD Video</h4>
                      <p className="text-xs text-muted-foreground">Crystal clear quality</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Screen Share</h4>
                      <p className="text-xs text-muted-foreground">Document collaboration</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Recording</h4>
                      <p className="text-xs text-muted-foreground">Session playback</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Multi-party</h4>
                      <p className="text-xs text-muted-foreground">Group consultations</p>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Mobile app integration</li>
                    <li>• Bandwidth optimization</li>
                    <li>• Waiting room functionality</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Analytics Dashboard */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    Advanced Analytics
                  </CardTitle>
                  <CardDescription>
                    Data-driven insights and reporting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Patient Outcomes</h4>
                      <p className="text-xs text-muted-foreground">Success tracking</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Revenue Reports</h4>
                      <p className="text-xs text-muted-foreground">Financial analytics</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Efficiency Metrics</h4>
                      <p className="text-xs text-muted-foreground">Performance tracking</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Custom Reports</h4>
                      <p className="text-xs text-muted-foreground">Tailored insights</p>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Real-time dashboard updates</li>
                    <li>• Automated report generation</li>
                    <li>• Comparative analysis tools</li>
                    <li>• Export to multiple formats</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Smart Notifications */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-6 h-6 text-primary" />
                    Intelligent Alerts
                  </CardTitle>
                  <CardDescription>
                    Proactive notifications and reminders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Treatment Alerts</h4>
                      <p className="text-xs text-muted-foreground">Therapy milestones</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Follow-up Reminders</h4>
                      <p className="text-xs text-muted-foreground">Care continuity</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">Critical Values</h4>
                      <p className="text-xs text-muted-foreground">Health warnings</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-1">System Updates</h4>
                      <p className="text-xs text-muted-foreground">Platform notifications</p>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multi-channel delivery (SMS, email, push)</li>
                    <li>• Customizable alert rules</li>
                    <li>• Priority-based routing</li>
                    <li>• Delivery confirmation tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;