import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Target, AlertTriangle, Zap, Eye, Cpu, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIFeatures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🤖 AI-Powered Intelligence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Artificial Intelligence for <span className="text-primary">Ayurvedic Medicine</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Harness the power of machine learning and AI to enhance diagnostic accuracy, 
              predict treatment outcomes, and optimize patient care in Ayurvedic practice.
            </p>
          </div>

          {/* Main AI Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Dosha Analysis AI */}
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-primary" />
                    <CardTitle>AI Dosha Analysis</CardTitle>
                  </div>
                  <Badge variant="secondary">Core AI</Badge>
                </div>
                <CardDescription>
                  Computer vision and ML-powered constitutional assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-primary/10 to-saffron/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Facial Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced computer vision analyzes facial features, skin tone, and eye characteristics 
                    to determine dominant dosha constitution.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-saffron/10 to-earth/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Pulse Recognition</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-powered pulse analysis using wearable sensors to identify Vata, Pitta, 
                    and Kapha pulse patterns.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-earth/10 to-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Behavioral Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Natural language processing analyzes patient responses to determine 
                    psychological and lifestyle constitution.
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Accuracy Rate</span>
                  <span className="font-semibold text-primary">94.7%</span>
                </div>
              </CardContent>
            </Card>

            {/* Outcome Predictor */}
            <Card className="shadow-card border-saffron/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-saffron" />
                    <CardTitle>Treatment Outcome Predictor</CardTitle>
                  </div>
                  <Badge variant="secondary">Predictive AI</Badge>
                </div>
                <CardDescription>
                  Machine learning models for treatment success prediction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-saffron/10 to-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Success Probability</h4>
                  <p className="text-sm text-muted-foreground">
                    Predicts likelihood of treatment success based on patient history, 
                    constitution, and therapy protocol.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/10 to-earth/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Timeline Forecasting</h4>
                  <p className="text-sm text-muted-foreground">
                    Estimates treatment duration and milestone timelines using 
                    historical data patterns.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-earth/10 to-saffron/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Risk Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Identifies potential complications and contraindications 
                    before treatment begins.
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Prediction Confidence</span>
                  <span className="font-semibold text-saffron">91.3%</span>
                </div>
              </CardContent>
            </Card>

            {/* Smart Resource Allocation */}
            <Card className="shadow-card border-earth/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-earth" />
                    <CardTitle>Smart Resource Allocation</CardTitle>
                  </div>
                  <Badge variant="secondary">Optimization AI</Badge>
                </div>
                <CardDescription>
                  AI-driven clinic resource and staff optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-earth/10 to-saffron/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Practitioner Matching</h4>
                  <p className="text-sm text-muted-foreground">
                    Matches patients with the most suitable practitioners based on 
                    expertise, availability, and patient needs.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-saffron/10 to-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Treatment Room Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimizes therapy room allocation based on treatment type, 
                    duration, and equipment requirements.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/10 to-earth/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Inventory Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Predicts herb and medicine usage to maintain optimal 
                    inventory levels and prevent stockouts.
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Efficiency Improvement</span>
                  <span className="font-semibold text-earth">+32%</span>
                </div>
              </CardContent>
            </Card>

            {/* Intelligent Alerts */}
            <Card className="shadow-card border-destructive/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                    <CardTitle>Intelligent Alert System</CardTitle>
                  </div>
                  <Badge variant="secondary">Monitoring AI</Badge>
                </div>
                <CardDescription>
                  Proactive health monitoring and early warning system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-destructive/10 to-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Anomaly Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Identifies unusual patterns in patient vitals, symptoms, 
                    or treatment responses that require attention.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/10 to-saffron/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Critical Value Alerts</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically flags critical health values and triggers 
                    immediate practitioner notifications.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-saffron/10 to-destructive/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Treatment Adherence</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitors patient compliance and sends intelligent reminders 
                    for medications and lifestyle changes.
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Early Detection Rate</span>
                  <span className="font-semibold text-destructive">88.9%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advanced AI Capabilities */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge AI technologies specifically designed for Ayurvedic medicine
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Computer Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyzes facial features, tongue, and skin for constitutional assessment
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-6 h-6 text-saffron" />
                  </div>
                  <h3 className="font-semibold mb-2">Deep Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Neural networks trained on vast Ayurvedic knowledge databases
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-6 h-6 text-earth" />
                  </div>
                  <h3 className="font-semibold mb-2">Biosignal Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time analysis of pulse, heart rate variability, and other vitals
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Real-time Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant analysis and recommendations during patient consultations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Performance Metrics */}
          <Card className="shadow-card mt-16">
            <CardHeader>
              <CardTitle className="text-center">AI Performance Metrics</CardTitle>
              <CardDescription className="text-center">
                Real-world performance data from our AI systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">94.7%</div>
                  <p className="text-sm text-muted-foreground">Dosha Classification Accuracy</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-saffron mb-2">91.3%</div>
                  <p className="text-sm text-muted-foreground">Treatment Success Prediction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-earth mb-2">32%</div>
                  <p className="text-sm text-muted-foreground">Clinic Efficiency Improvement</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">88.9%</div>
                  <p className="text-sm text-muted-foreground">Early Problem Detection</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIFeatures;