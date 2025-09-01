import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import { Badge } from "@/components/ui/badge";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              ✨ Platform Benefits
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Benefits for Everyone in <span className="text-primary">Ayurvedic Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how AyurSoma transforms the experience for patients, practitioners, 
              and clinic administrators through intelligent automation and personalized care.
            </p>
          </div>

          {/* Benefits Section */}
          <BenefitsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Benefits;