import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const additionalTestimonials = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Senior Ayurvedic Consultant",
      location: "Delhi, India",
      image: "/placeholder.svg",
      quote: "The AI dosha analysis feature has revolutionized my practice. What used to take 30 minutes of detailed questioning now happens in minutes with incredible accuracy.",
      rating: 5,
      specialty: "Panchakarma Specialist"
    },
    {
      name: "Meera Patel",
      role: "Chronic Pain Patient",
      location: "Mumbai, India", 
      image: "/placeholder.svg",
      quote: "After 6 months of treatment through AyurSoma, my chronic arthritis pain has reduced by 80%. The personalized care plan was exactly what I needed.",
      rating: 5,
      condition: "Arthritis Recovery"
    },
    {
      name: "Dr. Kavitha Menon",
      role: "Clinic Administrator",
      location: "Bangalore, India",
      image: "/placeholder.svg", 
      quote: "Our clinic efficiency improved dramatically. Patient satisfaction scores increased by 40% and our revenue grew by 35% in the first year.",
      rating: 5,
      metrics: "40% satisfaction increase"
    },
    {
      name: "Arjun Singh",
      role: "Wellness Enthusiast",
      location: "Jaipur, India",
      image: "/placeholder.svg",
      quote: "The lifestyle recommendations and daily routine suggestions have transformed my energy levels. I feel more balanced than I have in years.",
      rating: 5,
      transformation: "Energy & Balance"
    },
    {
      name: "Dr. Sunita Reddy",
      role: "Ayurvedic Researcher",
      location: "Hyderabad, India", 
      image: "/placeholder.svg",
      quote: "The data analytics capabilities are impressive. We can now track treatment outcomes across thousands of patients and identify the most effective protocols.",
      rating: 5,
      focus: "Research & Analytics"
    },
    {
      name: "Priya Krishnan",
      role: "Digestive Health Patient",
      location: "Chennai, India",
      image: "/placeholder.svg",
      quote: "My digestive issues that plagued me for 10 years were resolved in 4 months. The personalized herbal formulations were incredibly effective.",
      rating: 5,
      recovery: "4 months to wellness"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              💬 What People Say
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Stories from <span className="text-primary">Real People</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from patients, practitioners, and clinic administrators who have experienced 
              the transformative power of AyurSoma in their healthcare journey.
            </p>
          </div>

          {/* Main Testimonials Carousel */}
          <TestimonialsSection />

          {/* Detailed Testimonials Grid */}
          <div className="mt-16 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                More Success Stories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how AyurSoma has made a difference across different aspects of healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalTestimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Quote className="w-8 h-8 text-primary/30 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-saffron text-saffron" />
                          ))}
                        </div>
                        <blockquote className="text-muted-foreground italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>

                        {/* Additional Info Badges */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {testimonial.specialty && (
                            <Badge variant="secondary" className="text-xs">
                              {testimonial.specialty}
                            </Badge>
                          )}
                          {testimonial.condition && (
                            <Badge variant="secondary" className="text-xs">
                              {testimonial.condition}
                            </Badge>
                          )}
                          {testimonial.metrics && (
                            <Badge variant="secondary" className="text-xs">
                              {testimonial.metrics}
                            </Badge>
                          )}
                          {testimonial.transformation && (
                            <Badge variant="secondary" className="text-xs">
                              {testimonial.transformation}
                            </Badge>
                          )}
                          {testimonial.focus && (
                            <Badge variant="secondary" className="text-xs">
                              {testimonial.focus}
                            </Badge>
                          )}
                          {testimonial.recovery && (
                            <Badge variant="secondary" className="text-xs">
                              {testimonial.recovery}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <Card className="shadow-card mt-16 bg-gradient-primary text-white">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Join our growing community of satisfied patients and healthcare providers
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-saffron mb-2">5,000+</div>
                  <p className="text-white/80">Patients Treated</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">150+</div>
                  <p className="text-white/80">Active Practitioners</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-saffron mb-2">95%</div>
                  <p className="text-white/80">Success Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
                  <p className="text-white/80">Average Rating</p>
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

export default Testimonials;