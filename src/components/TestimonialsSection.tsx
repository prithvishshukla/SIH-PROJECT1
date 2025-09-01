import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Ayurvedic Practitioner",
      location: "Mumbai, India",
      rating: 5,
      text: "This platform has revolutionized my practice. The AI-assisted diagnosis helps me provide more accurate treatments, and my patients love the digital experience. Treatment outcomes have improved by 40%.",
      image: "👩‍⚕️"
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      location: "Delhi, India",
      rating: 5,
      text: "After struggling with chronic digestive issues for years, the personalized Panchakarma treatment plan changed my life. The app made it easy to track my progress and stay connected with my doctor.",
      image: "🧑‍💼"
    },
    {
      name: "Dr. Amit Patel",
      role: "Clinic Director",
      location: "Pune, India", 
      rating: 5,
      text: "Managing our multi-location clinic became effortless with this system. The analytics dashboard gives us insights we never had before, and patient satisfaction scores have increased significantly.",
      image: "👨‍⚕️"
    },
    {
      name: "Meera Singh",
      role: "Patient", 
      location: "Bangalore, India",
      rating: 5,
      text: "The combination of traditional Ayurveda with modern technology is brilliant. I can video chat with my doctor, get reminders for my medicines, and see my health improvements in real-time.",
      image: "👩‍💻"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-healing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from patients, practitioners, and clinics who've transformed their healthcare journey
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mr-4">
                {testimonials[currentIndex].image}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-saffron fill-current" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card rounded-xl p-6 text-center shadow-soft border border-border/50">
            <div className="text-3xl font-bold text-saffron mb-2">98%</div>
            <div className="text-muted-foreground">Patient Satisfaction</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-soft border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Treatment Success</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-soft border border-border/50">
            <div className="text-3xl font-bold text-earth mb-2">60%</div>
            <div className="text-muted-foreground">Faster Diagnosis</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-soft border border-border/50">
            <div className="text-3xl font-bold text-saffron mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;