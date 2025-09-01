import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🕉 Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">AyurSoma</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our mission to bridge ancient Ayurvedic wisdom with modern technology, 
              creating a platform that honors tradition while embracing innovation.
            </p>
          </div>

          {/* About Section */}
          <AboutSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;